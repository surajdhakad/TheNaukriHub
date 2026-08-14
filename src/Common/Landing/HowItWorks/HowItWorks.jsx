import "./HowItWorks.css";

// =====================================================
// HOW IT WORKS DATA
// =====================================================

const steps = [
  {
    number: "1",
    title: "Explore Our Jobs",
    description:
      "Browse diverse finance industry job openings tailored to your skills and interests in our extensive listings of available positions.",
  },
  {
    number: "2",
    title: "Find the Right One For You",
    description:
      "Narrow down your search using our advanced filters and search functionalities. Whether you're looking for full-time, part-time, we've got you covered.",
  },
  {
    number: "3",
    title: "Apply For the Job",
    description:
      "Get started on your career journey with just a few clicks. Submit your application directly through our platform, streamlining the process for a seamless experience.",
  },
  {
    number: "4",
    title: "Our Representative Will Call You",
    description:
      "After reviewing your application, our representative will contact you for further discussion, guiding you through the next steps and addressing your queries.",
  },
];


// =====================================================
// COMPONENT
// =====================================================

function HowItWorks() {
  return (
    <section className="how-it-works">

      <div className="how-it-works-container">

        {/* =================================================
            LEFT SIDE
        ================================================= */}

        <div className="how-it-works-left">

          <h2 className="how-it-works-title">
            How It Work
          </h2>


          <div className="how-it-works-steps">

            {steps.map((step, index) => (

              <div
                className={`how-step ${
                  index === 0 ? "active-step" : ""
                } ${
                  index === steps.length - 1
                    ? "last-how-step"
                    : ""
                }`}
                key={step.number}
              >

                {/* NUMBER */}

                <div
                  className={`how-step-number ${
                    index === 0
                      ? "active-number"
                      : ""
                  }`}
                >
                  {step.number}
                </div>


                {/* CONTENT */}

                <div className="how-step-content">

                  <h3>
                    {step.title}
                  </h3>

                  <p>
                    {step.description}
                  </p>

                </div>

              </div>

            ))}

          </div>

        </div>


        {/* =================================================
            RIGHT SIDE
        ================================================= */}

        <div className="how-it-works-right">

          <div className="how-illustration">

            {/* Browser Illustration */}

            <div className="browser-window">

              <div className="browser-top">

                <span></span>
                <span></span>
                <span></span>

              </div>


              <div className="browser-body">

                <div className="search-box">

                  <div className="search-line"></div>

                  <div className="search-icon">
                    ⌕
                  </div>

                </div>


                <div className="job-row">
                  <div className="job-small"></div>
                  <div className="job-button"></div>
                </div>

                <div className="job-row">
                  <div className="job-small"></div>
                  <div className="job-button"></div>
                </div>

                <div className="job-row">
                  <div className="job-small"></div>
                  <div className="job-button"></div>
                </div>

              </div>

            </div>


            {/* Person */}

            <div className="illustration-person">

              <div className="person-head"></div>

              <div className="person-body"></div>

              <div className="person-left-arm"></div>

              <div className="person-right-arm"></div>

              <div className="person-left-leg"></div>

              <div className="person-right-leg"></div>

              <div className="person-left-shoe"></div>

              <div className="person-right-shoe"></div>

            </div>


            {/* Ground */}

            <div className="illustration-ground"></div>


            {/* Heart */}

            <div className="illustration-heart">
              ♥
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default HowItWorks;