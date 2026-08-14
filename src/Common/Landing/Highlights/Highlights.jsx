import "./Highlights.css";

// =====================================================
// HIGHLIGHTS DATA
// =====================================================

const highlightsData = [
  {
    icon: "♙",
    title: "5000+ Candidates Placed Successfully",
    description:
      "We have successfully placed 5000+ candidates across leading banks and financial institutions, building trust through real results.",
  },
  {
    icon: "▤",
    title: "Jobs in Top Banks, Finance, Insurance & NBFCs",
    description:
      "Get access to verified job opportunities in top banks, finance companies, insurance firms, and NBFCs across India.",
  },
  {
    icon: "▧",
    title: "Done-For-You ATS Resume + 30 Interview Training Classes",
    description:
      "We create a professional ATS-friendly resume for you and provide 30 expert-led interview training sessions to boost your selection chances.",
  },
  {
    icon: "♢",
    title: "Pay After Placement Model",
    description:
      "Pay your training fees only after you get selected. If you don't get placed, you don't pay any training fees.",
  },
  {
    icon: "◎",
    title: "Home State & PAN India Job Locations",
    description:
      "Choose to work in your home state or explore job opportunities across PAN India based on your preference.",
  },
  {
    icon: "♙",
    title: "Direct HR Connect + Fast Joining",
    description:
      "Connect directly with hiring HRs and get faster interview scheduling and quick joining support.",
  },
];


// =====================================================
// HIGHLIGHTS COMPONENT
// =====================================================

function Highlights() {
  return (
    <section className="highlights-section">

      {/* =================================================
          HEADER
      ================================================= */}

      <div className="highlights-header">

        <h2>
          TheNaukriHub.com <span>Highlights</span>
        </h2>

        <p>
          India's Trusted BFSI Career Platform for Freshers &amp; Experienced
          Candidates
        </p>

      </div>


      {/* =================================================
          CARDS
      ================================================= */}

      <div className="highlights-grid">

        {highlightsData.map((item, index) => (

          <div
            className="highlight-card"
            key={index}
          >

            {/* Icon */}

            <div className="highlight-icon">
              {item.icon}
            </div>


            {/* Content */}

            <div className="highlight-content">

              <h3>
                {item.title}
              </h3>

              <p>
                {item.description}
              </p>

            </div>

          </div>

        ))}

      </div>


      {/* =================================================
          FREE ASSISTANCE
      ================================================= */}


      {/* =================================================
          WHATSAPP
      ================================================= */}

      
      


      {/* =================================================
          CHAT
      ================================================= */}

      
    </section>
  );
}

export default Highlights;