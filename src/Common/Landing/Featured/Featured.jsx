import "./Featured.css";
import { Rocket } from "lucide-react";

function Featured() {
  return (
    <section className="featured-section">

      {/* =========================================
          FEATURED IN
      ========================================= */}

      <div className="featured-media">

        <h2>
          Featured <span>In</span>
        </h2>

        <div className="featured-logos">

          <div className="featured-logo medium-logo">
            <span className="medium-icon">●◐</span>
            <span>Medium</span>
          </div>

          <div className="featured-logo dailyhunt-logo">
            <span className="dh-icon">✤</span>
            <span>dailyhunt</span>
          </div>

          <div className="featured-logo flipboard-logo">
            <span className="flip-icon">F</span>
            <span>Flipboard</span>
          </div>

          <div className="featured-logo deccan-logo">
            <div>DECCAN</div>
            <strong>BUSINESS</strong>
          </div>

          <div className="featured-logo republic-logo">
            <span className="republic-r">R</span>
            <span>
              Republic
              <small>News India</small>
            </span>
          </div>

        </div>

      </div>


      {/* =========================================
          FREE JOB ASSISTANCE
      ========================================= */}

      <div className="job-assistance">

        <div className="assistance-content">

          <h2>
            Get Free Job Assistance
          </h2>

          <p>
            Navigate your career path with confidence and clarity.
            Our team of seasoned professionals at{" "}
            <strong>TheNaukriHub.com</strong> offers FREE expert advice
            and tailored solutions to propel you toward your goals.
            Let's discuss this journey together.
          </p>

          <button
            className="assistance-btn"
            onClick={() => {
              window.location.href = "/register";
            }}
          >
            Get Now
            
          </button>

        </div>

      </div>

    </section>
  );
}

export default Featured;