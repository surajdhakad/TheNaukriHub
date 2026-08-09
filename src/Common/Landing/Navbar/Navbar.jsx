import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import {
  FaSearch,
  FaBars,
  FaTimes
} from "react-icons/fa";

function Navbar() {

  const navigate = useNavigate();

  const [logo, setLogo] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  const user = JSON.parse(localStorage.getItem("user"));
  const token = localStorage.getItem("token");

  useEffect(() => {
    fetchWebsiteSettings();
  }, []);

  const fetchWebsiteSettings = async () => {

    try {

      const res = await axios.get(
        "http://localhost:8087/api/settings/public"
      );

      if (res.data.success) {
        setLogo(res.data.logo);
      }

    } catch (error) {
      console.log(error);
    }

  };

  const handleLogout = () => {

    localStorage.removeItem("token");
    localStorage.removeItem("user");

    navigate("/login");

  };

  return (

    <header className="landing-navbar">

      {/* Logo */}

      <div className="navbar-logo">

        <Link to="/">

          {logo ? (

            <img
              src={logo}
              alt="TheNaukriHub"
            />

          ) : (

            <h2>
              <span>THE</span>NaukriHub
            </h2>

          )}

        </Link>

      </div>
            {/* ================= MENU ================= */}

      <nav className={`navbar-menu ${menuOpen ? "active" : ""}`}>

        <Link
          to="/"
          onClick={() => setMenuOpen(false)}
        >
          Home
        </Link>

        <Link
          to="/jobs"
          onClick={() => setMenuOpen(false)}
        >
          Jobs
        </Link>

        <Link
          to="/companies"
          onClick={() => setMenuOpen(false)}
        >
          Banks
        </Link>

        <Link
          to="/about"
          onClick={() => setMenuOpen(false)}
        >
          About Us
        </Link>

        <Link
          to="/contact"
          onClick={() => setMenuOpen(false)}
        >
          Contact
        </Link>

      </nav>

      {/* ================= RIGHT ================= */}

      <div className="navbar-right">

        <button className="search-icon">
          <FaSearch />
        </button>

        {token ? (
          <>
            <div className="profile">
              {user?.name?.charAt(0).toUpperCase()}
            </div>

            <button
              className="logout-btn"
              onClick={handleLogout}
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login">
              <button className="login-btn">
                Login
              </button>
            </Link>

            <Link to="/signup">
              <button className="signup-btn">
                Signup
              </button>
            </Link>
          </>
        )}
                {/* ================= MOBILE MENU ================= */}

        <button
          className="menu-icon"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

      </div>

    </header>

  );
}

export default Navbar;