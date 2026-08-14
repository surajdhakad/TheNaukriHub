import "./AboutUs.css";

import {
  FaBullseye,
  FaEye,
  FaUsers,
  FaBriefcase,
  FaBuilding,
  FaCheckCircle,
  FaGraduationCap,
  FaHandshake,
} from "react-icons/fa";

function AboutUs() {
  return (
    <main className="about-page">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="about-hero">

        <div className="about-hero-overlay"></div>

        <div className="about-hero-content">

          <span className="about-badge">
            About TheNaukriHub
          </span>

          <h1>
            Building Careers,
            <span> Connecting Opportunities</span>
          </h1>

          <p>
            TheNaukriHub is a career and placement platform
            designed to connect talented candidates with
            trusted companies and meaningful career
            opportunities.
          </p>

        </div>

      </section>


      {/* =====================================================
          INTRODUCTION
      ===================================================== */}

      <section className="about-intro">

        <div className="about-intro-container">

          <div className="about-intro-content">

            <span className="about-section-tag">
              Who We Are
            </span>

            <h2>
              Your Career Journey
              <span> Starts Here</span>
            </h2>

            <p>
              TheNaukriHub is a modern job and placement
              platform created to make the recruitment process
              easier, faster and more transparent for both
              candidates and companies.
            </p>

            <p>
              We help job seekers discover verified job
              opportunities, understand career requirements
              and connect with companies that are looking
              for talented professionals.
            </p>

            <p>
              Our goal is to create a trusted ecosystem where
              candidates can confidently explore opportunities
              and companies can discover the right talent.
            </p>

          </div>


          <div className="about-intro-card">

            <div className="about-intro-icon">
              <FaBriefcase />
            </div>

            <h3>
              Career Opportunities
            </h3>

            <p>
              Discover relevant jobs and placement
              opportunities from leading organizations.
            </p>

            <div className="about-check-list">

              <div>
                <FaCheckCircle />
                <span>Verified Opportunities</span>
              </div>

              <div>
                <FaCheckCircle />
                <span>Easy Job Discovery</span>
              </div>

              <div>
                <FaCheckCircle />
                <span>Career-Focused Platform</span>
              </div>

              <div>
                <FaCheckCircle />
                <span>Candidate Friendly</span>
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          STATS
      ===================================================== */}

      <section className="about-stats">

        <div className="about-stats-container">

          <div className="about-stat-card">

            <div className="about-stat-icon">
              <FaUsers />
            </div>

            <h3>10K+</h3>

            <p>
              Job Seekers
            </p>

          </div>


          <div className="about-stat-card">

            <div className="about-stat-icon">
              <FaBuilding />
            </div>

            <h3>100+</h3>

            <p>
              Companies
            </p>

          </div>


          <div className="about-stat-card">

            <div className="about-stat-icon">
              <FaBriefcase />
            </div>

            <h3>500+</h3>

            <p>
              Job Opportunities
            </p>

          </div>


          <div className="about-stat-card">

            <div className="about-stat-icon">
              <FaHandshake />
            </div>

            <h3>95%</h3>

            <p>
              Candidate Satisfaction
            </p>

          </div>

        </div>

      </section>


      {/* =====================================================
          MISSION & VISION
      ===================================================== */}

      <section className="mission-section">

        <div className="mission-container">

          {/* MISSION */}

          <div className="mission-card">

            <div className="mission-icon">
              <FaBullseye />
            </div>

            <div>

              <span>
                OUR MISSION
              </span>

              <h2>
                Making Careers
                <strong> Accessible</strong>
              </h2>

              <p>
                Our mission is to simplify the job search and
                recruitment experience by providing candidates
                with reliable opportunities and companies with
                access to skilled talent.
              </p>

            </div>

          </div>


          {/* VISION */}

          <div className="mission-card vision-card">

            <div className="mission-icon">
              <FaEye />
            </div>

            <div>

              <span>
                OUR VISION
              </span>

              <h2>
                Creating a Better
                <strong> Future</strong>
              </h2>

              <p>
                We envision a future where every deserving
                candidate can find the right opportunity and
                every organization can find the right person
                for their team.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          WHY US
      ===================================================== */}

      <section className="why-section">

        <div className="why-container">

          <div className="about-section-heading">

            <span>
              WHY THENAUKRIHUB
            </span>

            <h2>
              Why Choose <strong>TheNaukriHub?</strong>
            </h2>

            <p>
              We focus on creating a simple, transparent and
              candidate-friendly recruitment experience.
            </p>

          </div>


          <div className="why-grid">

            <div className="why-card">

              <div className="why-icon">
                <FaCheckCircle />
              </div>

              <h3>
                Trusted Opportunities
              </h3>

              <p>
                Explore job opportunities designed to help
                you make better career decisions.
              </p>

            </div>


            <div className="why-card">

              <div className="why-icon">
                <FaBuilding />
              </div>

              <h3>
                Leading Companies
              </h3>

              <p>
                Connect with organizations looking for
                talented and motivated candidates.
              </p>

            </div>


            <div className="why-card">

              <div className="why-icon">
                <FaGraduationCap />
              </div>

              <h3>
                Career Growth
              </h3>

              <p>
                Find opportunities that can help you learn,
                grow and build a successful career.
              </p>

            </div>


            <div className="why-card">

              <div className="why-icon">
                <FaUsers />
              </div>

              <h3>
                Candidate First
              </h3>

              <p>
                Our platform is designed around the needs
                and convenience of job seekers.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          CTA
      ===================================================== */}

      <section className="about-cta">

        <div className="about-cta-content">

          <span>
            START YOUR JOURNEY
          </span>

          <h2>
            Ready to Find Your
            <strong> Dream Job?</strong>
          </h2>

          <p>
            Explore the latest opportunities and take the
            next step towards your career.
          </p>

          <a
            href="/jobs"
            className="about-cta-btn"
          >
            Explore Jobs →
          </a>

        </div>

      </section>

    </main>
  );
}

export default AboutUs;