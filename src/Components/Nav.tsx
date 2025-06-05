import { Link, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Nav = () => {
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Show/hide navbar on scroll
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setShowNav(currentScrollY < lastScrollY || currentScrollY < 10);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/projects", label: "Projects" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <nav
      className={`fixed top-0 z-50 w-full border-b bg-white px-6 py-4 shadow-md transition-transform duration-300 ${
        showNav ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <Link
          to="/"
          className="text-xl font-bold text-purple-700 duration-300 hover:scale-105"
        >
          Adrienne
        </Link>

        {/* Hamburger Menu (Mobile) */}
        <button
          className="text-xl text-gray-600 hover:text-purple-700 md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <FiX /> : <FiMenu />}
        </button>

        {/* Desktop Nav */}
        <div className="hidden space-x-6 md:flex md:items-center">
          {navLinks.map(({ to, label }) => (
            <NavLink
              key={label}
              to={to}
              className={({ isActive }) =>
                `${
                  isActive ? "font-semibold text-purple-700" : "text-gray-600"
                } inline-block transition-all duration-200 hover:scale-105 hover:text-purple-600`
              }
            >
              {label}
            </NavLink>
          ))}
        </div>
      </div>

      {/* Mobile Nav Links */}
      {isMobileMenuOpen && (
        <div className="mt-4 flex flex-col space-y-4 md:hidden">
          {navLinks.map(({ to, label }) => (
            <NavLink
              key={label}
              to={to}
              onClick={() => setIsMobileMenuOpen(false)}
              className={({ isActive }) =>
                `${
                  isActive ? "font-semibold text-purple-700" : "text-gray-600"
                } block px-4 py-2 text-base transition-all duration-200 hover:scale-105 hover:text-purple-600`
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
