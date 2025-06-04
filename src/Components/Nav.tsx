import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="flex items-center justify-between bg-white px-6 py-4 shadow-md">
      <Link to="/" className="text-xl font-bold text-purple-700">
        Adrienne
      </Link>
      <div className="space-x-6">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "font-semibold text-purple-700" : "text-gray-600"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "font-semibold text-purple-700" : "text-gray-600"
          }
        >
          About
        </NavLink>
        <NavLink
          to="/projects"
          className={({ isActive }) =>
            isActive ? "font-semibold text-purple-700" : "text-gray-600"
          }
        >
          Projects
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? "font-semibold text-purple-700" : "text-gray-600"
          }
        >
          Contact
        </NavLink>
      </div>
    </nav>
  );
};

export default NavBar;
