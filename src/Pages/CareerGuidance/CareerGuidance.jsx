import "./CareerGuidance.css";
import { Link } from "react-router-dom";

import Navbar from "../../Common/Landing/Navbar/Navbar";
import Footer from "../../Common/Landing/Footer/Footer";

function CareerGuidance() {
  return (
    <div className="career-guidance-page">

      {/* =================================================
          NAVBAR
      ================================================= */}

      <Navbar />

      {/* =================================================
          HERO
      ================================================= */}

      <section className="career-guidance-hero">

        <div className="career-guidance-hero-content">

          <span className="career-guidance-badge">
            CAREER GUIDANCE
          </span>

          <h1>
            Build the Career
            <span> You Deserve</span>
          </h1>

          <p>
            Get practical career guidance, discover the right opportunities,
            improve your skills and take confident steps toward your
            professional future.
          </p>

          <div className="career-guidance-buttons">

            <Link
              to="/jobs"
              className="career-primary-btn"
            >
              Explore Jobs
            </Link>

            <Link
              to="/contact"
              className="career-secondary-btn"
            >
              Talk to Us
            </Link>

          </div>

        </div>

      </section>

      {/* =================================================
          GUIDANCE CONTENT
      ================================================= */}

      <main className="career-guidance-content">

        <div className="career-guidance-container">

          {/* INTRO */}

          <section className="career-intro-card">

            <div className="career-icon">
              🎯
            </div>

            <div>

              <h2>
                Find the Right Direction
              </h2>

              <p>
                Choosing the right career path can be difficult.
                TheNaukriHub helps students, freshers and job seekers
                understand their options and make better career decisions.
              </p>

            </div>

          </section>

          {/* =================================================
              GUIDANCE CARDS
          ================================================= */}

          <section className="career-guidance-section">

            <div className="career-section-heading">

              <span>
                HOW WE HELP
              </span>

              <h2>
                Career Guidance for Every Step
              </h2>

              <p>
                Whether you are starting your career or looking for your
                next opportunity, these areas can help you move forward.
              </p>

            </div>

            <div className="career-guidance-grid">

              {/* CARD 1 */}

              <div className="career-card">

                <div className="career-card-icon">
                  🧭
                </div>

                <h3>
                  Choose the Right Career
                </h3>

                <p>
                  Understand your interests, strengths and career options
                  before choosing a professional path.
                </p>

              </div>

              {/* CARD 2 */}

              <div className="career-card">

                <div className="career-card-icon">
                  📄
                </div>

                <h3>
                  Resume Guidance
                </h3>

                <p>
                  Learn how to create a professional resume that clearly
                  highlights your education, skills and achievements.
                </p>

              </div>

              {/* CARD 3 */}

              <div className="career-card">

                <div className="career-card-icon">
                  💼
                </div>

                <h3>
                  Job Search
                </h3>

                <p>
                  Discover relevant jobs, internships and placement
                  opportunities based on your career goals.
                </p>

              </div>

              {/* CARD 4 */}

              <div className="career-card">

                <div className="career-card-icon">
                  🎤
                </div>

                <h3>
                  Interview Preparation
                </h3>

                <p>
                  Prepare for interviews with better communication,
                  confidence and knowledge of common interview questions.
                </p>

              </div>

              {/* CARD 5 */}

              <div className="career-card">

                <div className="career-card-icon">
                  🧠
                </div>

                <h3>
                  Skill Development
                </h3>

                <p>
                  Identify important skills for your target career and
                  continuously improve your professional abilities.
                </p>

              </div>

              {/* CARD 6 */}

              <div className="career-card">

                <div className="career-card-icon">
                  📈
                </div>

                <h3>
                  Career Growth
                </h3>

                <p>
                  Build a long-term career strategy and keep improving
                  your skills as your professional journey grows.
                </p>

              </div>

            </div>

          </section>

          {/* =================================================
              CAREER STEPS
          ================================================= */}

          <section className="career-steps-section">

            <div className="career-section-heading">

              <span>
                YOUR JOURNEY
              </span>

              <h2>
                Simple Steps Towards Your Career Goal
              </h2>

            </div>

            <div className="career-steps">

              <div className="career-step">

                <div className="career-step-number">
                  01
                </div>

                <div>
                  <h3>
                    Know Yourself
                  </h3>

                  <p>
                    Understand your interests, strengths, education and
                    professional goals.
                  </p>
                </div>

              </div>

              <div className="career-step">

                <div className="career-step-number">
                  02
                </div>

                <div>
                  <h3>
                    Build Your Skills
                  </h3>

                  <p>
                    Develop technical and soft skills that are valuable
                    for your chosen career.
                  </p>
                </div>

              </div>

              <div className="career-step">

                <div className="career-step-number">
                  03
                </div>

                <div>
                  <h3>
                    Prepare Your Profile
                  </h3>

                  <p>
                    Create a strong resume and professional profile that
                    represents your abilities.
                  </p>
                </div>

              </div>

              <div className="career-step">

                <div className="career-step-number">
                  04
                </div>

                <div>
                  <h3>
                    Apply & Grow
                  </h3>

                  <p>
                    Apply for suitable opportunities, prepare for
                    interviews and continue learning.
                  </p>
                </div>

              </div>

            </div>

          </section>

          {/* =================================================
              CTA
          ================================================= */}

          <section className="career-guidance-cta">

            <div>

              <span>
                READY TO MOVE FORWARD?
              </span>

              <h2>
                Your Career Journey Starts Today
              </h2>

              <p>
                Explore opportunities, improve your skills and take the
                next step toward your career goals.
              </p>

            </div>

            <Link
              to="/jobs"
              className="career-cta-button"
            >
              Find Opportunities →
            </Link>

          </section>

        </div>

      </main>

      {/* =================================================
          FOOTER
      ================================================= */}

      <Footer />

    </div>
  );
}

export default CareerGuidance;