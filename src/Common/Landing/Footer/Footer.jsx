import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* Left */}

        <div className="footer-about">

          <h2>JobsHub</h2>

          <p>
            JobsHub is a modern Training & Placement Portal that
            connects students with top companies and helps them
            achieve their dream careers.
          </p>

        </div>

        {/* Quick Links */}

        <div className="footer-links">

          <h3>Quick Links</h3>

          <Link to="/">Home</Link>

          <Link to="/jobs">Jobs</Link>

          <Link to="/companies">Companies</Link>

          <Link to="/login">Login</Link>

        </div>

        {/* Student */}

        <div className="footer-links">

          <h3>Student</h3>

          <Link to="/signup">Register</Link>

          <Link to="/profile">Profile</Link>

          <Link to="/applications">Applications</Link>

          <Link to="/placements">Placements</Link>

        </div>

        {/* Contact */}

        <div className="footer-contact">

          <h3>Contact</h3>

          <p>📍 Gwalior, Madhya Pradesh</p>

          <p>📧 support@jobshub.com</p>

          <p>📞 +91 9876543210</p>

        </div>

      </div>

      <div className="footer-bottom">

        <p>
          © 2026 JobsHub. All Rights Reserved.
        </p>

      </div>

    </footer>
  );
}

export default Footer;