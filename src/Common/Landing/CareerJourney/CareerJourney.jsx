import "./CareerJourney.css";


// =====================================================
// CAREER JOURNEY DATA
// =====================================================

const journeySteps = [
  {
    number: "01",
    icon: "▤",
    title: "Apply",
    description: "Fill simple registration form",
  },
  {
    number: "02",
    icon: "♙",
    title: "Career Counselling",
    description: "Get guidance from job experts",
  },
  {
    number: "03",
    icon: "▧",
    title: "Interview Preparation",
    description: "Prepare with mock interviews",
  },
  {
    number: "04",
    icon: "▣",
    title: "Get Placed",
    description: "Connect with top companies",
  },
  {
    number: "05",
    icon: "₹",
    title: "Pay After Placement",
    description: "Pay only after you get the job",
  },
];


// =====================================================
// STATS
// =====================================================

const journeyStats = [
  {
    icon: "♙",
    value: "500+",
    label: "Candidates Placed",
    type: "blue",
  },
  {
    icon: "▥",
    value: "99+",
    label: "Hiring Partners",
    type: "blue",
  },
  {
    icon: "₹",
    value: "Pay After",
    label: "Placement",
    type: "green",
  },
  {
    icon: "₹",
    value: "25K – 45K",
    label: "Average Salary",
    type: "yellow",
  },
];


// =====================================================
// COMPONENT
// =====================================================

function CareerJourney() {
  return (
    <section className="career-journey-section">

      {/* =================================================
          BACKGROUND DECORATION
      ================================================= */}

      <div className="journey-bg-circle journey-circle-one"></div>

      <div className="journey-bg-circle journey-circle-two"></div>


      {/* =================================================
          TOP STATS
      ================================================= */}

      <div className="career-stats">

        {journeyStats.map((stat, index) => (

          <div
            className="career-stat"
            key={index}
          >

            <div
              className={`career-stat-icon ${stat.type}`}
            >
              {stat.icon}
            </div>

            <div className="career-stat-content">

              <h3>
                {stat.value}
              </h3>

              <p>
                {stat.label}
              </p>

            </div>

          </div>

        ))}

      </div>


      {/* =================================================
          JOURNEY HEADING
      ================================================= */}

      <div className="journey-heading">

        <span className="journey-line"></span>

        <h2>
          We Make Your Career Journey Simple
        </h2>

        <span className="journey-line"></span>

      </div>


      {/* =================================================
          JOURNEY STEPS
      ================================================= */}

      <div className="journey-steps">

        {journeySteps.map((step, index) => (

          <div
            className="journey-step"
            key={index}
          >

            <div className="journey-icon">
              {step.icon}
            </div>

            <h3>
              {step.title}
            </h3>

            <p>
              {step.description}
            </p>

          </div>

        ))}

      </div>


      {/* =================================================
          BOTTOM TRUST BAR
      ================================================= */}

      <div className="journey-trust-bar">

        <div className="trust-item">

          <span className="trust-icon">
            ♢
          </span>

          <span>
            Trusted by Thousands
          </span>

        </div>


        <span className="trust-divider"></span>


        <div className="trust-item">

          <span className="trust-icon">
            ↗
          </span>

          <span>
            Proven Results
          </span>

        </div>


        <span className="trust-divider"></span>


        <div className="trust-item">

          <span className="trust-icon">
            ♕
          </span>

          <span>
            Your Success is Our Mission
          </span>

        </div>

      </div>

    </section>
  );
}


export default CareerJourney;