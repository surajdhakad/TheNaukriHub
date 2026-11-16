import "./Navbar.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

import {
  FaHome,
  FaBriefcase,
  FaBuilding,
  FaInfoCircle,
  FaPhone,
  FaUser,
  FaSignOutAlt,
  FaBars,
  FaTimes,
  FaFileAlt,
  FaFilePdf,
  FaMicrophone,
} from "react-icons/fa";

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const token = localStorage.getItem("token");

  let user = null;
  try {
    user = JSON.parse(localStorage.getItem("user"));
  } catch {
    user = null;
  }

  const role = String(
    user?.role || user?.userRole || user?.userType || ""
  ).toLowerCase();

  const isAdmin = role === "admin";
  const isStudent = role === "student";

  const studentRoutes = {
    home: "/student/dashboard",
    applications: "/student/application",
    resume: "/student/resume",
    interview: "/student/interview-preparation",
  };

  const adminRoutes = {
    home: "/admin/dashboard",
    jobs: "/admin/jobs",
    companies: "/admin/companies",
    applications: "/admin/applications",
    placements: "/admin/placements",
    interview: "/admin/interview-materials",
    reports: "/admin/reports",
    settings: "/admin/settings",
  };

  const publicRoutes = {
    home: "/",
    jobs: "/jobs",
    banks: "/banks",
    about: "/about",
    contact: "/contact",
  };

  const handleNavigation = (path) => {
    setMenuOpen(false);
    navigate(path);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setMenuOpen(false);
    navigate("/login", { replace: true });
  };

  const isActive = (path) => location.pathname === path;

  const studentMenu = [
    { label: "Dashboard", icon: <FaHome />, path: studentRoutes.home },
    {
      label: "Applications",
      icon: <FaFileAlt />,
      path: studentRoutes.applications,
    },
    {
      label: "Resume Builder",
      icon: <FaFilePdf />,
      path: studentRoutes.resume,
    },
    {
      label: "Interview Preparation",
      icon: <FaMicrophone />,
      path: studentRoutes.interview,
    },
  ];

  const adminMenu = [
    { label: "Dashboard", icon: <FaHome />, path: adminRoutes.home },
    { label: "Jobs", icon: <FaBriefcase />, path: adminRoutes.jobs },
    { label: "Companies", icon: <FaBuilding />, path: adminRoutes.companies },
    {
      label: "Applications",
      icon: <FaFileAlt />,
      path: adminRoutes.applications,
    },
    { label: "Placements", icon: <FaUser />, path: adminRoutes.placements },
    {
      label: "Interview Materials",
      icon: <FaMicrophone />,
      path: adminRoutes.interview,
    },
    { label: "Reports", icon: <FaInfoCircle />, path: adminRoutes.reports },
    { label: "Settings", icon: <FaPhone />, path: adminRoutes.settings },
  ];

  const publicMenu = [
    { label: "Home", icon: <FaHome />, path: publicRoutes.home },
    { label: "Jobs", icon: <FaBriefcase />, path: publicRoutes.jobs },
    { label: "Banks", icon: <FaBuilding />, path: publicRoutes.banks },
    { label: "About Us", icon: <FaInfoCircle />, path: publicRoutes.about },
    { label: "Contact", icon: <FaPhone />, path: publicRoutes.contact },
  ];

  const menuItems = isStudent
    ? studentMenu
    : isAdmin
      ? adminMenu
      : publicMenu;

  const homePath = isStudent
    ? studentRoutes.home
    : isAdmin
      ? adminRoutes.home
      : publicRoutes.home;

  return (
    <header className={`navbar ${menuOpen ? "navbar-open" : ""}`}>
      <Link
        to={homePath}
        className="navbar-logo"
        onClick={() => setMenuOpen(false)}
      >
        <div className="logo-icon">
          <span className="logo-head logo-head-1"></span>
          <span className="logo-head logo-head-2"></span>
          <span className="logo-head logo-head-3"></span>
          <span className="logo-body logo-body-1"></span>
          <span className="logo-body logo-body-2"></span>
          <span className="logo-body logo-body-3"></span>
        </div>

        <div className="logo-text">
          <span className="logo-the">THE</span>
          <span className="logo-naukri">Naukri</span>
          <span className="logo-hub">Hub</span>
        </div>
      </Link>

      <nav className="navbar-menu">
        {menuItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`nav-link ${isActive(item.path) ? "active" : ""}`}
          >
            {item.icon}
            <span>{item.label}</span>
          </Link>
        ))}
      </nav>

      <div className="navbar-right">
        {token ? (
          <button
            type="button"
            className="logout-btn"
            onClick={handleLogout}
          >
            <FaSignOutAlt />
            <span>Logout</span>
          </button>
        ) : (
          <>
            <Link to="/login" className="login-btn">
              Login
            </Link>
            <Link to="/signup" className="signup-btn">
              Signup
            </Link>
          </>
        )}
      </div>

      <button
        type="button"
        className="menu-toggle"
        onClick={() => setMenuOpen((prev) => !prev)}
        aria-label="Toggle navigation"
        aria-expanded={menuOpen}
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </button>

      {menuOpen && (
        <>
          <div
            className="mobile-menu-overlay"
            onClick={() => setMenuOpen(false)}
          />

          <nav className="mobile-menu">
            {menuItems.map((item) => (
              <button
                key={item.path}
                type="button"
                className={`mobile-nav-link ${
                  isActive(item.path) ? "active" : ""
                }`}
                onClick={() => handleNavigation(item.path)}
              >
                {item.icon}
                <span>{item.label}</span>
              </button>
            ))}

            <div className="mobile-divider"></div>

            {token ? (
              <button
                type="button"
                className="mobile-logout-btn"
                onClick={handleLogout}
              >
                <FaSignOutAlt />
                Logout
              </button>
            ) : (
              <>
                <button
                  className="mobile-login-btn"
                  onClick={() => handleNavigation("/login")}
                >
                  Login
                </button>
                <button
                  className="mobile-signup-btn"
                  onClick={() => handleNavigation("/signup")}
                >
                  Signup
                </button>
              </>
            )}
          </nav>
        </>
      )}
    </header>
  );
}

export default Navbar;