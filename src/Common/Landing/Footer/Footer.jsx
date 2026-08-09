import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* ================= Company ================= */}

        <div className="footer-about">

          <h2>
            The<span>NaukriHub</span>
          </h2>

          <p>
            TheNaukriHub is India's trusted Placement & Career Portal
            connecting students, freshers and professionals with top
            companies. Discover verified jobs, internships, placement
            drives and career opportunities from one trusted platform.
          </p>

        </div>

        {/* ================= Company Links ================= */}

        <div className="footer-links">

          <h3>Company</h3>

          <Link to="/">Home</Link>
          <Link to="/jobs">Jobs</Link>
          <Link to="/companies">Companies</Link>
          <Link to="/about">About Us</Link>
          <Link to="/contact">Contact Us</Link>

        </div>

        {/* ================= Students ================= */}

        <div className="footer-links">

          <h3>Students</h3>

          <Link to="/signup">Register</Link>
          <Link to="/login">Login</Link>
          <Link to="/profile">My Profile</Link>
          <Link to="/applications">My Applications</Link>
          <Link to="/placements">Placements</Link>

        </div>

        {/* ================= Legal ================= */}

        <div className="footer-links">

          <h3>Legal</h3>

          <Link to="/privacy-policy">Privacy Policy</Link>
          <Link to="/terms-and-conditions">Terms & Conditions</Link>
          <Link to="/refund-policy">Refund Policy</Link>
          <Link to="/cookie-policy">Cookie Policy</Link>
          <Link to="/disclaimer">Disclaimer</Link>

        </div>

        {/* ================= Support ================= */}

        <div className="footer-links">

          <h3>Support</h3>

          <Link to="/faq">FAQ</Link>
          <Link to="/help-center">Help Center</Link>
          <Link to="/support">Support</Link>
          <Link to="/report-issue">Report Issue</Link>
          <Link to="/career-guidance">Career Guidance</Link>

        </div>

        {/* ================= Contact ================= */}

        <div className="footer-contact">

          <h3>Contact Us</h3>

          <p>
            📍 1st Floor, Krishna Tower,
            Near Ravindra IAS Institute,
            Phoolbagh Chouraha,
            Gwalior, Madhya Pradesh - 474002
          </p>

         <p>
  📧{" "}
  <a href="mailto:hrthenaukrihub@gmail.com">
    hrthenaukrihub@gmail.com
  </a>
</p>

          <p>📞 +91 7354768278</p>

          <p>📞 +91 7354768277</p>

          <p>🕒 Monday - Saturday</p>

          <p>09:00 AM - 06:00 PM</p>

        </div>

      </div>

      {/* ================= Footer Bottom ================= */}

      <div className="footer-bottom">

        <p>
          © 2026 <strong>TheNaukriHub</strong>. All Rights Reserved.
        </p>

        <div className="footer-bottom-links">

          <Link to="/privacy-policy">Privacy Policy</Link>

          <span>|</span>

          <Link to="/terms-and-conditions">Terms & Conditions</Link>

          <span>|</span>

          <Link to="/refund-policy">Refund Policy</Link>

          <span>|</span>

          <Link to="/cookie-policy">Cookie Policy</Link>

          <span>|</span>

          <Link to="/disclaimer">Disclaimer</Link>

        </div>

      </div>

    </footer>
  );
}

export default Footer;