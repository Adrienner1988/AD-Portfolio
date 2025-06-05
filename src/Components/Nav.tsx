import { Link, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

interface NavLink {
  to: string;
  label: string;
}

const Nav = () => {
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Show/hide navbar on scroll and detect scroll position
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setShowNav(currentScrollY < lastScrollY || currentScrollY < 10);
      setIsScrolled(currentScrollY > 50);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const navLinks: NavLink[] = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/projects", label: "Projects" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <nav
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        showNav ? "translate-y-0" : "-translate-y-full"
      } ${
        isScrolled
          ? "border-b border-white/10 bg-slate-900/70 shadow-lg backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link
          to="/"
          className="group relative text-2xl font-bold text-white transition-all duration-300 hover:scale-105"
        >
          <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Adrienne
          </span>
          <div className="absolute -bottom-1 left-0 h-0.5 w-0 bg-gradient-to-r from-purple-400 to-pink-400 transition-all duration-300 group-hover:w-full"></div>
        </Link>

        {/* Hamburger (Mobile) */}
        <button
          className="relative z-50 rounded-lg bg-white/10 p-2 text-xl text-white backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:bg-white/20 md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          <div className="relative h-6 w-6">
            <FiMenu
              className={`absolute inset-0 transition-all duration-300 ${
                isMobileMenuOpen
                  ? "rotate-180 opacity-0"
                  : "rotate-0 opacity-100"
              }`}
            />
            <FiX
              className={`absolute inset-0 transition-all duration-300 ${
                isMobileMenuOpen
                  ? "rotate-0 opacity-100"
                  : "-rotate-180 opacity-0"
              }`}
            />
          </div>
        </button>

        {/* Desktop Nav */}
        <div className="hidden items-center space-x-8 md:flex">
          {navLinks.map(({ to, label }) => (
            <NavLink
              key={label}
              to={to}
              className={({ isActive }) =>
                `group relative px-3 py-2 font-medium transition-all duration-300 hover:scale-105 ${
                  isActive
                    ? "text-purple-300"
                    : "text-white hover:text-purple-300"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {label}
                  <div
                    className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 transition-all duration-300 ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  ></div>
                </>
              )}
            </NavLink>
          ))}
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 top-0 z-40 md:hidden">
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setIsMobileMenuOpen(false)}
          ></div>

          <div className="absolute right-0 top-0 h-full w-72 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 shadow-2xl">
            <div className="flex flex-col pt-20">
              {navLinks.map(({ to, label }, index) => (
                <NavLink
                  key={label}
                  to={to}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `group relative mx-6 my-2 rounded-xl px-6 py-4 text-lg font-medium transition-all duration-300 hover:scale-105 hover:bg-white/10 ${
                      isActive
                        ? "bg-white/20 text-purple-300"
                        : "text-white hover:text-purple-300"
                    }`
                  }
                  style={{
                    animationDelay: `${index * 100}ms`,
                    animation: "slideInRight 0.4s ease-out forwards",
                  }}
                >
                  {({ isActive }) => (
                    <>
                      <div className="flex items-center space-x-3">
                        <div
                          className={`h-2 w-2 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 transition-all duration-300 ${
                            isActive
                              ? "scale-100 opacity-100"
                              : "scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100"
                          }`}
                        ></div>
                        <span>{label}</span>
                      </div>
                      <div
                        className={`absolute bottom-0 left-6 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 transition-all duration-300 ${
                          isActive ? "w-12" : "w-0 group-hover:w-12"
                        }`}
                      ></div>
                    </>
                  )}
                </NavLink>
              ))}
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(100%);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </nav>
  );
};

export default Nav;
