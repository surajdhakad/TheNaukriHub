import "./TrainingWorks.css";
import trainingWork from "../../../assets/Images/training-work.png";

// =====================================================
// TRAINING STEPS
// =====================================================

const steps = [
  {
    number: "1",
    title: "Apply for the Job",
    description:
      "Submit your application for your preferred job role in just a few clicks.",
  },
  {
    number: "2",
    title: "Our Team Will Call You",
    description:
      "Our team will contact you to understand your profile and guide you further.",
  },
  {
    number: "3",
    title: "Complete Your Registration",
    description:
      "Secure your enrollment and get started with our structured training program.",
  },
  {
    number: "4",
    title: "Start Training & Placement Preparation",
    description:
      "We begin your complete training, resume building, and interview preparation to help you get selected.",
  },
];

// =====================================================
// COMPONENT
// =====================================================

function TrainingWorks() {
  const handleApply = () => {
    document.getElementById("jobs")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section className="training-works-section">

      {/* =================================================
          HEADER
      ================================================= */}

      <div className="training-header">
        <h2>
          How Our <span>Training Works</span>
        </h2>

        <p>
          Get placed in your dream BFSI job with our simple 4-step process
        </p>
      </div>

      {/* =================================================
          MAIN CONTENT
      ================================================= */}

      <div className="training-container">

        {/* =================================================
            LEFT IMAGE
        ================================================= */}

        <div className="training-image-wrapper">

          <div className="training-image-card">

            <img
              src={trainingWork}
              alt="Training and placement support"
              className="training-image"
            />

          </div>

        </div>

        {/* =================================================
            RIGHT CONTENT
        ================================================= */}

        <div className="training-content">

          <h3>
            Get Placed in 4 Simple Steps
          </h3>

          {/* =================================================
              STEPS
          ================================================= */}

          <div className="training-steps">

            {steps.map((step, index) => (
              <div
                className={`training-step ${
                  index === steps.length - 1 ? "last-step" : ""
                }`}
                key={step.number}
              >

                {/* NUMBER */}

                <div
                  className={`step-number ${
                    index === steps.length - 1 ? "orange-step" : ""
                  }`}
                >
                  {step.number}
                </div>

                {/* TEXT */}

                <div className="step-content">

                  <h4>{step.title}</h4>

                  <p>{step.description}</p>

                </div>

              </div>
            ))}

          </div>

          {/* =================================================
              CTA BUTTON
          ================================================= */}

          <button
            className="training-cta"
            type="button"
            onClick={handleApply}
          >
            <span className="cta-arrow">→</span>
            Apply & Join TheNaurkiHub.com Today!
          </button>

        </div>

      </div>

    </section>
  );
}

export default TrainingWorks;