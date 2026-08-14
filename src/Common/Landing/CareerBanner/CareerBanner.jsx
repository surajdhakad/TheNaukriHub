import "./CareerBanner.css";

import "./CareerBanner.css";
import careerGirl from "../../../assets/Images/career-girl.png";

function CareerBanner() {
  return (
    <section className="career-banner-section">

      <div className="career-banner">

        {/* =========================================
            LEFT CONTENT
        ========================================= */}

        <div className="career-banner-content">

          <h2 className="career-banner-quote">
            “ Naukri ki Surubat,
            <br />
            TheNaukriHub ke Sath ”
          </h2>

          <h3 className="career-banner-title">
            Give your career a boost with
            <br />
            TheNaukriHub.com's guaranteed job training
            <br />
            program within 30 days
          </h3>

          <p className="career-banner-highlight">
            5000+ candidates have already gotten their
            <br />
            dream jobs.
          </p>

        </div>


        {/* =========================================
            RIGHT IMAGE
        ========================================= */}

        <div className="career-banner-image">

          <img
            src={careerGirl}
            alt="Naukarify Career Support"
          />

        </div>

      </div>

    </section>
  );
}

export default CareerBanner;