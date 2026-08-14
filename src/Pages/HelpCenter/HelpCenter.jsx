import "./HelpCenter.css";

import Navbar from "../../Common/Landing/Navbar/Navbar";
import Footer from "../../Common/Landing/Footer/Footer";

function HelpCenter() {
  return (
    <div className="help-center-page">

      {/* =================================================
          NAVBAR
      ================================================= */}

      <Navbar />

      {/* =================================================
          HERO
      ================================================= */}

      <section className="help-center-hero">

        <div className="help-center-hero-content">

          <span className="help-center-badge">
            SUPPORT CENTER
          </span>

          <h1>
            Help Center
          </h1>

          <p>
            Find helpful information, guidance and solutions
            to make your experience with TheNaukriHub easier.
          </p>

        </div>

      </section>

      {/* =================================================
          CONTENT
      ================================================= */}

      <main className="help-center-content">

        <div className="help-center-container">

          {/* =================================================
              INTRO
          ================================================= */}

          <div className="help-center-heading">

            <span>
              HOW CAN WE HELP?
            </span>

            <h2>
              Find the help you need
            </h2>

            <p>
              Explore our support resources to get answers
              and guidance for common questions.
            </p>

          </div>

          {/* =================================================
              HELP CARDS
          ================================================= */}

          <div className="help-center-grid">

            <div className="help-card">

              <div className="help-card-icon">
                👤
              </div>

              <h3>
                Account & Profile
              </h3>

              <p>
                Get help with creating your account, updating
                your profile and managing your information.
              </p>

              <a href="/faq">
                Learn More →
              </a>

            </div>

            <div className="help-card">

              <div className="help-card-icon">
                💼
              </div>

              <h3>
                Jobs & Applications
              </h3>

              <p>
                Learn how to search for jobs, view opportunities
                and submit your applications.
              </p>

              <a href="/jobs">
                Explore Jobs →
              </a>

            </div>

            <div className="help-card">

              <div className="help-card-icon">
                📄
              </div>

              <h3>
                Resume & Profile
              </h3>

              <p>
                Get guidance on managing your resume and keeping
                your professional profile updated.
              </p>

              <a href="/student/resume">
                Resume Help →
              </a>

            </div>

            <div className="help-card">

              <div className="help-card-icon">
                🎯
              </div>

              <h3>
                Interview Preparation
              </h3>

              <p>
                Prepare for interviews with useful resources,
                tips and career preparation materials.
              </p>

              <a href="/student/interview-preparation">
                Prepare Now →
              </a>

            </div>

            <div className="help-card">

              <div className="help-card-icon">
                🔐
              </div>

              <h3>
                Login & Security
              </h3>

              <p>
                Get assistance with login problems, password
                recovery and account security.
              </p>

              <a href="/forgot-password">
                Get Help →
              </a>

            </div>

            <div className="help-card">

              <div className="help-card-icon">
                📞
              </div>

              <h3>
                Contact Support
              </h3>

              <p>
                Still need help? Contact our support team for
                assistance with your questions or concerns.
              </p>

              <a href="/contact">
                Contact Us →
              </a>

            </div>

          </div>

          {/* =================================================
              SUPPORT BOX
          ================================================= */}

          <div className="help-center-support">

            <div className="help-center-support-content">

              <span>
                NEED MORE HELP?
              </span>

              <h3>
                We're here to support you
              </h3>

              <p>
                If you couldn't find the answer you were
                looking for, our support team is ready to help.
              </p>

            </div>

            <a
              href="mailto:hrthenaukrihub@gmail.com"
              className="help-center-support-button"
            >
              Contact Support
            </a>

          </div>

        </div>

      </main>

      {/* =================================================
          FOOTER
      ================================================= */}

      <Footer />

    </div>
  );
}

export default HelpCenter;