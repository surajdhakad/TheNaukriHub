import "./Navbar.css";

import {
  Link,
  useNavigate,
} from "react-router-dom";

import {
  useState,
} from "react";

import {
  FaBars,
  FaTimes,
  FaUser,
  FaBriefcase,
  FaBuilding,
  FaInfoCircle,
  FaPhoneAlt,
} from "react-icons/fa";

// =====================================================
// LOGO
// =====================================================
import logo from "../../../assets/Images/logo.png";


function Navbar() {

  const navigate = useNavigate();

  const [menuOpen, setMenuOpen] = useState(false);


  // =====================================================
  // LOGIN USER
  // =====================================================

  const token = localStorage.getItem("token");

  let user = null;

  try {

    user = JSON.parse(
      localStorage.getItem("user")
    );

  } catch (error) {

    user = null;

  }


  // =====================================================
  // CLOSE MOBILE MENU
  // =====================================================

  const closeMenu = () => {

    setMenuOpen(false);

  };


  // =====================================================
  // NAVIGATION
  // =====================================================

  const handleHome = () => {
    closeMenu();
    navigate("/");
  };

  const handleJobs = () => {
    closeMenu();
    navigate("/jobs");
  };

  const handleBanks = () => {
    closeMenu();
    navigate("/banks");
  };

  const handleAbout = () => {
    closeMenu();
    navigate("/about");
  };

  const handleContact = () => {
    closeMenu();
    navigate("/contact");
  };


  // =====================================================
  // LOGOUT
  // =====================================================

  const handleLogout = () => {

    localStorage.removeItem("token");
    localStorage.removeItem("user");

    closeMenu();

    navigate("/login");

  };


  // =====================================================
  // PROFILE
  // =====================================================

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


  // =====================================================
  // RENDER
  // =====================================================

  return (

    <header className="landing-navbar">


      {/* =================================================
          LOGO
      ================================================= */}

      <div className="navbar-logo">

        <Link
          to="/"
          onClick={closeMenu}
        >

          <img
            src={logo}
            alt="THE NaukriHub"
            className="navbar-logo-img"
          />

        </Link>

      </div>


      {/* =================================================
          NAVIGATION
      ================================================= */}

      <nav
        className={`navbar-menu ${
          menuOpen ? "active" : ""
        }`}
      >

        <button
          type="button"
          className="nav-link-btn"
          onClick={handleHome}
        >
          <span className="nav-icon">
            <FaInfoCircle />
          </span>

          <span>Home</span>
        </button>


        <button
          type="button"
          className="nav-link-btn"
          onClick={handleJobs}
        >
          <span className="nav-icon">
            <FaBriefcase />
          </span>

          <span>Jobs</span>
        </button>


        <button
          type="button"
          className="nav-link-btn"
          onClick={handleBanks}
        >
          <span className="nav-icon">
            <FaBuilding />
          </span>

          <span>Banks</span>
        </button>


        <button
          type="button"
          className="nav-link-btn"
          onClick={handleAbout}
        >
          <span className="nav-icon">
            <FaInfoCircle />
          </span>

          <span>About Us</span>
        </button>


        <button
          type="button"
          className="nav-link-btn"
          onClick={handleContact}
        >
          <span className="nav-icon">
            <FaPhoneAlt />
          </span>

          <span>Contact</span>
        </button>

      </nav>


      {/* =================================================
          RIGHT SIDE
      ================================================= */}

      <div className="navbar-right">

        {token ? (

          <>

            {/* PROFILE */}

            <button
              type="button"
              className="profile"
              onClick={handleProfile}
              title="Profile"
            >

              {user?.name
                ? user.name
                    .charAt(0)
                    .toUpperCase()
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


        {/* =================================================
            MOBILE MENU
        ================================================= */}

        <button
          type="button"
          className="menu-icon"
          onClick={() => {
            setMenuOpen((prev) => !prev);
          }}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >

          {menuOpen
            ? <FaTimes />
            : <FaBars />
          }

        </button>

      </div>

    </header>

  );

}

export default Navbar;