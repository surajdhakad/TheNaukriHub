
import "./Navbar.css";

import {
  Link,
  useNavigate,
  useLocation,
} from "react-router-dom";

import { useState } from "react";

import {
  FaBars,
  FaTimes,
  FaUser,
  FaBriefcase,
  FaBuilding,
  FaInfoCircle,
  FaPhoneAlt,
  FaHome,
} from "react-icons/fa";

import logo from "../../../assets/Images/logo.png";

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const [menuOpen, setMenuOpen] = useState(false);

  // Login user details
  const token = localStorage.getItem("token");

  let user = null;

  try {
    user = JSON.parse(localStorage.getItem("user"));
  } catch (error) {
    user = null;
  }

  // Close mobile menu
  const closeMenu = () => {
    setMenuOpen(false);
  };

  // Toggle mobile menu
  const toggleMenu = () => {
    setMenuOpen((previous) => !previous);
  };

  // Active route check
  const isActive = (path) => {
    return location.pathname === path;
  };

  // Navigate to page
  const handleNavigation = (path) => {
    closeMenu();
    navigate(path);
  };

  // Logout
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    closeMenu();
    navigate("/login");
  };

  // Profile
  const handleProfile = () => {
    closeMenu();

    if (!user) {
      navigate("/login");
      return;
    }

    if (user.role === "admin") {
      navigate("/admin/dashboard");
      return;
    }

    navigate("/student/profile");
  };

  return (
    <header className="landing-navbar">

      {/* LOGO */}
      <div className="navbar-logo">
        <Link to="/" onClick={closeMenu}>
          <img
            src={logo}
            alt="THE NaukriHub"
            className="navbar-logo-img"
          />
        </Link>
      </div>

      {/* NAVIGATION MENU */}
      <nav
        className={`navbar-menu ${menuOpen ? "active" : ""}`}
        aria-label="Main navigation"
      >
        <button
          type="button"
          className={`nav-link-btn ${isActive("/") ? "active" : ""}`}
          onClick={() => handleNavigation("/")}
        >
          <span className="nav-icon"><FaHome /></span>
          <span>Home</span>
        </button>

        <button
          type="button"
          className={`nav-link-btn ${isActive("/jobs") ? "active" : ""}`}
          onClick={() => handleNavigation("/jobs")}
        >
          <span className="nav-icon"><FaBriefcase /></span>
          <span>Jobs</span>
        </button>

        <button
          type="button"
          className={`nav-link-btn ${isActive("/banks") ? "active" : ""}`}
          onClick={() => handleNavigation("/banks")}
        >
          <span className="nav-icon"><FaBuilding /></span>
          <span>Banks</span>
        </button>

        <button
          type="button"
          className={`nav-link-btn ${isActive("/about") ? "active" : ""}`}
          onClick={() => handleNavigation("/about")}
        >
          <span className="nav-icon"><FaInfoCircle /></span>
          <span>About Us</span>
        </button>

        <button
          type="button"
          className={`nav-link-btn ${isActive("/contact") ? "active" : ""}`}
          onClick={() => handleNavigation("/contact")}
        >
          <span className="nav-icon"><FaPhoneAlt /></span>
          <span>Contact</span>
        </button>
      </nav>

      {/* RIGHT SIDE */}
      <div className="navbar-right">

        {token ? (
          <>
            {/* PROFILE */}
            <button
              type="button"
              className="profile"
              onClick={handleProfile}
              title="Profile"
              aria-label="Open profile"
            >
              {user?.name
                ? user.name.charAt(0).toUpperCase()
                : <FaUser />
              }
            </button>

            {/* USER NAME */}
            <button
              type="button"
              className="user-name-btn"
              onClick={handleProfile}
            >
              {user?.name || "Profile"}
            </button>

            {/* LOGOUT */}
            <button
              type="button"
              className="logout-btn"
              onClick={handleLogout}
            >
              Logout
            </button>
          </>
        ) : (
          <>
            {/* LOGIN */}
            <Link
              to="/login"
              className="login-btn"
              onClick={closeMenu}
            >
              Login
            </Link>

            {/* SIGNUP */}
            <Link
              to="/signup"
              className="signup-btn"
              onClick={closeMenu}
            >
              Signup
            </Link>
          </>
        )}

        {/* MOBILE HAMBURGER */}
        <button
          type="button"
          className="menu-icon"
          onClick={toggleMenu}
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

      </div>
    </header>
  );
}

export default Navbar;
