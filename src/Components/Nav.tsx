import { Link, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { BsMoon, BsSun } from "react-icons/bs";

const Nav = () => {
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(window.scrollY);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark",
  );

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setShowNav(currentScrollY < lastScrollY);
      setLastScrollY(currentScrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/projects", label: "Projects" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <nav
      className={`fixed top-0 z-50 w-full border-b bg-white px-6 py-4 shadow-md transition-transform duration-300 dark:bg-gray-900 ${
        showNav ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <Link
          to="/"
          className="text-xl font-bold text-purple-700 duration-300 hover:scale-105 dark:text-purple-400"
        >
          Adrienne
        </Link>

        {/* Dark mode toggle */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="mr-4 text-xl text-gray-600 hover:text-purple-700 md:hidden dark:text-gray-300 dark:hover:text-purple-400"
          title="Toggle Dark Mode"
        >
          {darkMode ? <BsSun /> : <BsMoon />}
        </button>

        {/* Hamburger menu */}
        <button
          className="text-xl text-gray-600 hover:text-purple-700 md:hidden dark:text-gray-300 dark:hover:text-purple-400"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <FiX /> : <FiMenu />}
        </button>

        {/* Desktop nav */}
        <div className="hidden space-x-6 md:flex md:items-center">
          {navLinks.map(({ to, label }) => (
            <NavLink
              key={label}
              to={to}
              className={({ isActive }) =>
                `${
                  isActive
                    ? "font-semibold text-purple-700 dark:text-purple-400"
                    : "text-gray-600 dark:text-gray-300"
                } inline-block transition-all duration-200 hover:scale-105 hover:text-purple-600 dark:hover:text-purple-300`
              }
            >
              {label}
            </NavLink>
          ))}

          {/* Dark mode toggle for desktop */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="text-xl text-gray-600 hover:text-purple-700 dark:text-gray-300 dark:hover:text-purple-400"
            title="Toggle Dark Mode"
          >
            {darkMode ? <BsSun /> : <BsMoon />}
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {isMobileMenuOpen && (
        <div className="mt-4 flex flex-col space-y-4 md:hidden">
          {navLinks.map(({ to, label }) => (
            <NavLink
              key={label}
              to={to}
              onClick={() => setIsMobileMenuOpen(false)}
              className={({ isActive }) =>
                `${
                  isActive
                    ? "font-semibold text-purple-700 dark:text-purple-400"
                    : "text-gray-600 dark:text-gray-300"
                } block px-4 py-2 text-base transition-all duration-200 hover:scale-105 hover:text-purple-600 dark:hover:text-purple-300`
              }
            >
              {label}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Nav;
