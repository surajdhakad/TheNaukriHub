
import "./HelpCenter.css";

import Navbar from "../../Common/Landing/Navbar/Navbar";
import Footer from "../../Common/Landing/Footer/Footer";

// WhatsApp Support Link
const WHATSAPP_LINK =
  "https://api.whatsapp.com/send?phone=917354768277&text=Hello%20TheNaukriHub%2C%20I%20am%20a%20student%20and%20need%20help%20regarding%20jobs%2C%20placements%2C%20or%20applications.";

function HelpCenter() {
  const helpCards = [
    {
      icon: "👤",
      title: "Account & Profile",
      description:
        "Get help with creating your account, updating your profile and managing your information.",
      link: "/faq",
      linkText: "Learn More →",
    },
    {
      icon: "💼",
      title: "Jobs & Applications",
      description:
        "Learn how to search for jobs, explore opportunities and submit your applications.",
      link: "/jobs",
      linkText: "Explore Jobs →",
    },
    {
      icon: "📄",
      title: "Resume & Profile",
      description:
        "Get guidance on creating your resume and keeping your professional profile updated.",
      link: "/student/resume",
      linkText: "Resume Help →",
    },
    {
      icon: "🎯",
      title: "Interview Preparation",
      description:
        "Prepare for interviews with useful resources, tips and career preparation materials.",
      link: "/student/interview-preparation",
      linkText: "Prepare Now →",
    },
    {
      icon: "🔐",
      title: "Login & Security",
      description:
        "Get assistance with login problems, password recovery and account security.",
      link: "/forgot-password",
      linkText: "Get Help →",
    },
    {
      icon: "📱",
      title: "WhatsApp Support",
      description:
        "Chat directly with TheNaukriHub support team for help with jobs, placements and applications.",
      link: WHATSAPP_LINK,
      linkText: "Chat on WhatsApp →",
      whatsapp: true,
    },
  ];

  return (
    <div className="help-center-page">
      <Navbar />

      {/* Hero Section */}
      <section className="help-center-hero">
        <div className="help-center-hero-content">
          <span className="help-center-badge">
            SUPPORT CENTER
          </span>

          <h1>Help Center</h1>

          <p>
            Find helpful information, guidance and solutions to make your
            experience with TheNaukriHub easier.
          </p>

          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="help-whatsapp-button"
          >
            <span aria-hidden="true">💬</span>
            Chat with Us on WhatsApp
          </a>
        </div>
      </section>

      {/* Help Center Content */}
      <main className="help-center-content">
        <div className="help-center-container">

          {/* Heading */}
          <div className="help-center-heading">
            <span>HOW CAN WE HELP?</span>

            <h2>Find the help you need</h2>

            <p>
              Explore our support resources or chat directly with our team
              on WhatsApp.
            </p>
          </div>

          {/* Help Cards */}
          <div className="help-center-grid">
            {helpCards.map((card) => (
              <div className="help-card" key={card.title}>
                <div className="help-card-icon" aria-hidden="true">
                  {card.icon}
                </div>

                <h3>{card.title}</h3>

                <p>{card.description}</p>

                <a
                  href={card.link}
                  target={card.whatsapp ? "_blank" : undefined}
                  rel={
                    card.whatsapp
                      ? "noopener noreferrer"
                      : undefined
                  }
                >
                  {card.linkText}
                </a>
              </div>
            ))}
          </div>

          {/* WhatsApp Support Section */}
          <div
            className="help-center-support"
            id="whatsapp-support"
          >
            <div className="help-center-support-content">
              <span>NEED MORE HELP?</span>

              <h3>We're here to support you</h3>

              <p>
                Students can contact TheNaukriHub directly on WhatsApp
                for assistance with jobs, applications, placements and
                interview preparation.
              </p>
            </div>

            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="help-center-support-button"
            >
              💬 Chat on WhatsApp
            </a>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}

export default HelpCenter;
