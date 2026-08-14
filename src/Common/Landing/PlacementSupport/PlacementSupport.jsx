import "./PlacementSupport.css";
import placementSupportImage from "../../../assets/Images/placementsupport.png";

// =====================================================
// PLACEMENT SUPPORT
// =====================================================

function PlacementSupport() {
  return (
    <section className="placement-support-section">

      <div className="placement-support-container">

        {/* =================================================
            LEFT CONTENT
        ================================================= */}

        <div className="placement-support-left">

          <div className="placement-badge">
            Get Guaranteed Placement with TheNaukriHub.com
          </div>

          <h2>
            Start Your Career with Confidence
            <br />
            Pay Only After Selection
          </h2>

          <p className="placement-description">
            It’s not about your degree. It’s about the right guidance.
            TheNaukriHub brings you a selection guarantee model with
            expert training and dedicated HR support.
          </p>

          {/* FEATURES */}

          <div className="placement-features">

            <div className="placement-feature">
              <span>✓</span>
              <p>Selection Guarantee Model</p>
            </div>

            <div className="placement-feature">
              <span>✓</span>
              <p>Pay Only After Selection</p>
            </div>

            <div className="placement-feature">
              <span>✓</span>
              <p>15 Days Continuous Online Training</p>
            </div>

            <div className="placement-feature">
              <span>✓</span>
              <p>Free Professional Resume</p>
            </div>

            <div className="placement-feature">
              <span>✓</span>
              <p>Dedicated HR Support Till Placement</p>
            </div>

          </div>

          {/* BUTTONS */}

          <div className="placement-buttons">

            <button
              className="placement-primary-btn"
              type="button"
            >
              Register Now →
            </button>

            <button
              className="placement-secondary-btn"
              type="button"
            >
              Get Free Call Back →
            </button>

          </div>

        </div>


        {/* =================================================
            CENTER IMAGE
        ================================================= */}

        <div className="placement-support-image">

          <div className="placement-image-background">

            <img
              src={placementSupportImage}
              alt="Placement Support"
              className="placement-candidate-image"
            />

          </div>

        </div>


        {/* =================================================
            RIGHT CONTENT
        ================================================= */}

        <div className="placement-support-right">

          {/* HOW IT WORKS */}

          <div className="how-it-works">

            <h3>
              How It Works – Placement Support Program
            </h3>

            <div className="work-step">
              <span>1</span>
              <p>
                Register for Placement Support
              </p>
            </div>

            <div className="work-step">
              <span>2</span>
              <p>
                Our Counsellor Will Call You
              </p>
            </div>

            <div className="work-step">
              <span>3</span>
              <p>
                Pay the Registration Amount
              </p>
            </div>

            <div className="work-step">
              <span>4</span>
              <p>
                Pay Remaining Fees After Selection
              </p>
            </div>

          </div>


          {/* GUARANTEE BOX */}

          <div className="selection-guarantee-box">

            <div>
              ✓ No Selection = No Fees
            </div>

            <div>
              ✓ 100% Placement Support Assured
            </div>

            <div>
              ✓ Limited Seats Available
            </div>

            <div>
              ✓ Apply Now Before Slots Fill
            </div>

          </div>

        </div>

      </div>


      {/* =================================================
          FREE ASSISTANCE
      ================================================= */}

      <div className="placement-free-assistance">

        <span className="assistance-icon">
          ▣
        </span>

        <span>
          Free Assistance
        </span>

      </div>


      {/* =================================================
          WHATSAPP
      ================================================= */}

      <a
        href="https://wa.me/"
        className="placement-whatsapp"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
      >
        ☎
      </a>


      {/* =================================================
          CHAT
      ================================================= */}

      <button
        className="placement-chat"
        type="button"
        aria-label="Chat"
      >
        ●●●
      </button>

    </section>
  );
}

export default PlacementSupport;