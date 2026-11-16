import { useState } from "react";
import "./Highlights.css";

import { FaWhatsapp, FaRobot, FaTimes } from "react-icons/fa";

// =====================================================
// HIGHLIGHTS DATA
// =====================================================

const highlightsData = [
  {
    icon: "♙",
    title: "500+ Candidates Placed Successfully",
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

function Highlights() {
  const [chatOpen, setChatOpen] = useState(false);

  // WhatsApp
  const openWhatsApp = () => {
    const message = encodeURIComponent(
      "Hello TheNaukriHub, I need assistance regarding jobs and placements.",
    );

    window.open(
      `https://api.whatsapp.com/send?phone=917354768277&text=${message}`,
      "_blank",
      "noopener,noreferrer",
    );
  };

  return (
    <>
      <section className="highlights-section">
        {/* HEADER */}
        <div className="highlights-header">
          <h2>
            TheNaukriHub.com <span>Highlights</span>
          </h2>

          <p>
            India's Trusted BFSI Career Platform for Freshers &amp; Experienced
            Candidates
          </p>
        </div>

        {/* CARDS */}
        <div className="highlights-grid">
          {highlightsData.map((item, index) => (
            <div className="highlight-card" key={index}>
              <div className="highlight-icon">{item.icon}</div>

              <div className="highlight-content">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =====================================================
          FLOATING WHATSAPP & AI ASSISTANT
      ===================================================== */}

      <div className="floating-assistant">
        {/* WHATSAPP BUTTON */}
        <button
          type="button"
          className="floating-whatsapp"
          onClick={openWhatsApp}
          aria-label="Contact on WhatsApp"
          title="WhatsApp"
        >
          <FaWhatsapp />
        </button>

        {/* AI CHAT BUTTON */}
        <button
          type="button"
          className="floating-ai"
          onClick={() => setChatOpen(!chatOpen)}
          aria-label="AI Assistant"
          title="AI Assistant"
        >
          {chatOpen ? <FaTimes /> : <FaRobot />}
        </button>

        {/* AI CHAT WINDOW */}
        {chatOpen && (
          <div className="ai-chat-window">
            <div className="ai-chat-header">
              <div>
                <strong>TheNaukriHub Assistant</strong>
                <p>Career Support</p>
              </div>

              <button
                type="button"
                onClick={() => setChatOpen(false)}
                aria-label="Close chat"
              >
                <FaTimes />
              </button>
            </div>

            <div className="ai-chat-body">
              <p>Hello! Welcome to TheNaukriHub. How can we help you today?</p>

              <button type="button" onClick={openWhatsApp}>
                Job Enquiry
              </button>

              <button type="button" onClick={openWhatsApp}>
                Registration Help
              </button>

              <button type="button" onClick={openWhatsApp}>
                Interview Preparation
              </button>

              <small>Connect with our support team on WhatsApp.</small>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Highlights;
