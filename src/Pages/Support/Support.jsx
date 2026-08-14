import "./Support.css";

import Navbar from "../../Common/Landing/Navbar/Navbar";
import Footer from "../../Common/Landing/Footer/Footer";

import { Link } from "react-router-dom";

function Support() {
  return (
    <div className="support-page">

      {/* =====================================================
          NAVBAR
      ===================================================== */}

      <Navbar />

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="support-hero">

        <div className="support-hero-content">

          <span className="support-badge">
            CUSTOMER SUPPORT
          </span>

          <h1>
            Support
          </h1>

          <p>
            Need assistance with TheNaukriHub? Our support team is
            here to help you with your questions and issues.
          </p>

        </div>

      </section>

      {/* =====================================================
          MAIN CONTENT
      ===================================================== */}

      <main className="support-content">

        <div className="support-container">

          {/* BACK */}

          <Link
            to="/"
            className="support-back-link"
          >
            ← Back to Home
          </Link>


          {/* =================================================
              INTRO
          ================================================= */}

          <div className="support-intro">

            <span className="support-section-label">
              WE ARE HERE TO HELP
            </span>

            <h2>
              How can we help you?
            </h2>

            <p>
              Choose the support option that best matches your
              requirement. We will help you find the right solution.
            </p>

          </div>


          {/* =================================================
              SUPPORT OPTIONS
          ================================================= */}

          <div className="support-grid">

            {/* FAQ */}

            <Link
              to="/faq"
              className="support-card"
            >

              <div className="support-icon">
                ❓
              </div>

              <h3>
                Frequently Asked Questions
              </h3>

              <p>
                Find quick answers to common questions about
                accounts, jobs, applications and our platform.
              </p>

              <span className="support-card-link">
                View FAQs →
              </span>

            </Link>


            {/* HELP CENTER */}

            <Link
              to="/help-center"
              className="support-card"
            >

              <div className="support-icon">
                📚
              </div>

              <h3>
                Help Center
              </h3>

              <p>
                Explore helpful guides and information about using
                TheNaukriHub and managing your account.
              </p>

              <span className="support-card-link">
                Visit Help Center →
              </span>

            </Link>


            {/* REPORT ISSUE */}

            <Link
              to="/report-issue"
              className="support-card"
            >

              <div className="support-icon">
                🛠️
              </div>

              <h3>
                Report an Issue
              </h3>

              <p>
                Found a problem with the website or your account?
                Let us know so we can investigate it.
              </p>

              <span className="support-card-link">
                Report Issue →
              </span>

            </Link>


            {/* CAREER GUIDANCE */}

            <Link
              to="/career-guidance"
              className="support-card"
            >

              <div className="support-icon">
                🎯
              </div>

              <h3>
                Career Guidance
              </h3>

              <p>
                Get useful information and guidance to help you
                prepare for jobs and build your career.
              </p>

              <span className="support-card-link">
                Get Guidance →
              </span>

            </Link>


            {/* ACCOUNT */}

            <Link
              to="/login"
              className="support-card"
            >

              <div className="support-icon">
                🔐
              </div>

              <h3>
                Account Support
              </h3>

              <p>
                Need help with login, password, account access or
                your profile? Start here.
              </p>

              <span className="support-card-link">
                Account Help →
              </span>

            </Link>


            {/* CONTACT */}

            <Link
              to="/contact"
              className="support-card"
            >

              <div className="support-icon">
                💬
              </div>

              <h3>
                Contact Support
              </h3>

              <p>
                Can't find the answer you need? Contact our support
                team directly for assistance.
              </p>

              <span className="support-card-link">
                Contact Us →
              </span>

            </Link>

          </div>


          {/* =================================================
              CONTACT SUPPORT BOX
          ================================================= */}

          <section className="support-contact-box">

            <div className="support-contact-content">

              <span className="support-contact-label">
                NEED PERSONAL ASSISTANCE?
              </span>

              <h2>
                We're ready to help
              </h2>

              <p>
                If you are unable to find a solution through our
                support resources, contact us directly and our team
                will assist you.
              </p>

              <div className="support-contact-buttons">

                <Link
                  to="/contact"
                  className="support-primary-button"
                >
                  Contact Support
                </Link>

                <a
                  href="mailto:hrthenaukrihub@gmail.com"
                  className="support-secondary-button"
                >
                  Email Us
                </a>

              </div>

            </div>

          </section>


          {/* =================================================
              SUPPORT INFORMATION
          ================================================= */}

          <section className="support-info">

            <div className="support-info-item">

              <span className="support-info-icon">
                📧
              </span>

              <div>
                <strong>
                  Email Support
                </strong>

                <p>
                  hrthenaukrihub@gmail.com
                </p>
              </div>

            </div>


            <div className="support-info-item">

              <span className="support-info-icon">
                📞
              </span>

              <div>
                <strong>
                  Phone Support
                </strong>

                <p>
                  +91 7354768278
                </p>
              </div>

            </div>


            <div className="support-info-item">

              <span className="support-info-icon">
                🕐
              </span>

              <div>
                <strong>
                  Support Hours
                </strong>

                <p>
                  Monday - Saturday
                </p>
              </div>

            </div>

          </section>

        </div>

      </main>


      {/* =====================================================
          FOOTER
      ===================================================== */}

      <Footer />

    </div>
  );
}

export default Support;