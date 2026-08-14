import "./FAQ.css";
import { useState } from "react";

import Navbar from "../../Common/Landing/Navbar/Navbar";
import Footer from "../../Common/Landing/Footer/Footer";

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What is TheNaukriHub?",
      answer:
        "TheNaukriHub is a career and placement platform designed to help students discover job opportunities, prepare for interviews and build their careers."
    },
    {
      question: "How can I create an account?",
      answer:
        "You can create an account by visiting the Signup page and providing the required information such as your name, email address and other relevant details."
    },
    {
      question: "How can I apply for a job?",
      answer:
        "Browse the available jobs, open the job details page and use the application option to submit your application."
    },
    {
      question: "Can students upload their resume?",
      answer:
        "Yes. Students can upload and manage their resume from their student profile or resume section."
    },
    {
      question: "How can I prepare for interviews?",
      answer:
        "TheNaukriHub provides an Interview Preparation section where students can access useful preparation materials and guidance."
    },
    {
      question: "Can I update my profile information?",
      answer:
        "Yes. You can update your profile information from the Profile section of your student dashboard."
    },
    {
      question: "What should I do if I forget my password?",
      answer:
        "Use the Forgot Password option on the Login page and follow the instructions to reset your password."
    },
    {
      question: "How can I contact TheNaukriHub?",
      answer:
        "You can contact our support team through the Contact Us or Support section of the website."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-page">

      {/* =================================================
          NAVBAR
      ================================================= */}

      <Navbar />

      {/* =================================================
          HERO
      ================================================= */}

      <section className="faq-hero">

        <div className="faq-hero-content">

          <span className="faq-badge">
            SUPPORT CENTER
          </span>

          <h1>
            Frequently Asked Questions
          </h1>

          <p>
            Find quick answers to common questions about
            TheNaukriHub, jobs, applications and career support.
          </p>

        </div>

      </section>

      {/* =================================================
          FAQ CONTENT
      ================================================= */}

      <main className="faq-content">

        <div className="faq-container">

          <div className="faq-heading">

            <span>
              NEED HELP?
            </span>

            <h2>
              How can we help you?
            </h2>

            <p>
              Browse the questions below to find the information
              you are looking for.
            </p>

          </div>

          {/* =================================================
              FAQ LIST
          ================================================= */}

          <div className="faq-list">

            {faqs.map((faq, index) => (

              <div
                className={`faq-item ${
                  openIndex === index ? "active" : ""
                }`}
                key={index}
              >

                <button
                  type="button"
                  className="faq-question"
                  onClick={() => toggleFAQ(index)}
                >

                  <span>
                    {faq.question}
                  </span>

                  <span className="faq-icon">
                    {openIndex === index ? "−" : "+"}
                  </span>

                </button>

                {openIndex === index && (

                  <div className="faq-answer">

                    <p>
                      {faq.answer}
                    </p>

                  </div>

                )}

              </div>

            ))}

          </div>

          {/* =================================================
              CONTACT SUPPORT BOX
          ================================================= */}

          <div className="faq-support-box">

            <div className="faq-support-content">

              <span className="faq-support-label">
                STILL NEED HELP?
              </span>

              <h3>
                Can't find what you're looking for?
              </h3>

              <p>
                Our support team is here to help you with
                your questions and concerns.
              </p>

            </div>

            <a
              href="mailto:hrthenaukrihub@gmail.com"
              className="faq-support-button"
            >
              Contact Support
            </a>

          </div>

        </div>

      </main>

      {/* =================================================
          FOOTER
      ================================================= */}

      <Footer />

    </div>
  );
}

export default FAQ;