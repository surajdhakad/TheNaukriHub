import "./ReportIssue.css";

import Navbar from "../../Common/Landing/Navbar/Navbar";
import Footer from "../../Common/Landing/Footer/Footer";

function ReportIssue() {
  return (
    <>
      {/* =====================================================
          NAVBAR
      ===================================================== */}

      <Navbar />

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="report-hero">
        <div className="report-hero-content">

          <span className="report-badge">
            REPORT AN ISSUE
          </span>

          <h1>
            Tell Us What Went Wrong
          </h1>

          <p>
            Found a problem on TheNaukriHub? Let us know and our
            support team will look into it.
          </p>

        </div>
      </section>

      {/* =====================================================
          REPORT CONTENT
      ===================================================== */}

      <main className="report-content">

        <div className="report-layout">

          {/* =================================================
              LEFT INFORMATION
          ================================================= */}

          <div className="report-info">

            <span className="report-small-badge">
              WE ARE HERE TO HELP
            </span>

            <h2>
              Help us improve TheNaukriHub
            </h2>

            <p>
              If you have encountered a technical problem, incorrect
              information, broken link or any other issue while using
              our platform, please report it to us.
            </p>

            <p>
              Please provide as much information as possible so our
              team can understand and resolve the issue quickly.
            </p>

            {/* ===============================================
                WHAT YOU CAN REPORT
            =============================================== */}

            <div className="report-points">

              <div className="report-point">
                <span className="report-icon">⚠️</span>

                <div>
                  <h3>Technical Problems</h3>
                  <p>
                    Report errors, broken pages or website issues.
                  </p>
                </div>
              </div>

              <div className="report-point">
                <span className="report-icon">🔗</span>

                <div>
                  <h3>Broken Links</h3>
                  <p>
                    Let us know if a link or page is not working.
                  </p>
                </div>
              </div>

              <div className="report-point">
                <span className="report-icon">📄</span>

                <div>
                  <h3>Incorrect Information</h3>
                  <p>
                    Report incorrect job or platform information.
                  </p>
                </div>
              </div>

              <div className="report-point">
                <span className="report-icon">🛡️</span>

                <div>
                  <h3>Security Concerns</h3>
                  <p>
                    Report suspicious or potentially unsafe activity.
                  </p>
                </div>
              </div>

            </div>

          </div>

          {/* =================================================
              REPORT FORM
          ================================================= */}

          <div className="report-card">

            <div className="report-card-header">

              <h2>
                Report an Issue
              </h2>

              <p>
                Fill in the details below.
              </p>

            </div>

            <form className="report-form">

              {/* NAME */}

              <div className="report-field">

                <label htmlFor="name">
                  Full Name
                </label>

                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your name"
                />

              </div>

              {/* EMAIL */}

              <div className="report-field">

                <label htmlFor="email">
                  Email Address
                </label>

                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                />

              </div>

              {/* ISSUE TYPE */}

              <div className="report-field">

                <label htmlFor="issueType">
                  Issue Type
                </label>

                <select
                  id="issueType"
                  name="issueType"
                  defaultValue=""
                >

                  <option value="" disabled>
                    Select issue type
                  </option>

                  <option value="technical">
                    Technical Problem
                  </option>

                  <option value="broken-link">
                    Broken Link
                  </option>

                  <option value="incorrect-information">
                    Incorrect Information
                  </option>

                  <option value="job-related">
                    Job Related Issue
                  </option>

                  <option value="account">
                    Account Related Issue
                  </option>

                  <option value="security">
                    Security Concern
                  </option>

                  <option value="other">
                    Other
                  </option>

                </select>

              </div>

              {/* PAGE */}

              <div className="report-field">

                <label htmlFor="page">
                  Page / URL
                </label>

                <input
                  type="text"
                  id="page"
                  name="page"
                  placeholder="Which page has the problem?"
                />

              </div>

              {/* DESCRIPTION */}

              <div className="report-field">

                <label htmlFor="description">
                  Describe the Issue
                </label>

                <textarea
                  id="description"
                  name="description"
                  rows="6"
                  placeholder="Please explain what happened..."
                />

              </div>

              {/* SCREENSHOT */}

              <div className="report-field">

                <label htmlFor="screenshot">
                  Screenshot
                  <span className="optional">
                    Optional
                  </span>
                </label>

                <input
                  type="file"
                  id="screenshot"
                  name="screenshot"
                  accept="image/*"
                />

                <small>
                  You can attach a screenshot to help us understand
                  the problem.
                </small>

              </div>

              {/* SUBMIT */}

              <button
                type="submit"
                className="report-submit"
              >
                Submit Issue
              </button>

            </form>

          </div>

        </div>

      </main>

      {/* =====================================================
          FOOTER
      ===================================================== */}

      <Footer />
    </>
  );
}

export default ReportIssue;