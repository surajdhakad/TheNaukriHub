import "./ContactUs.css";

import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaPaperPlane,
  FaHeadset,
  FaCheckCircle,
} from "react-icons/fa";

import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {ccc                 
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Contact Form:", formData);

    alert("Thank you! Your message has been submitted.");

    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

  return (
    <main className="contact-page">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="contact-hero">

        <div className="contact-hero-overlay"></div>

        <div className="contact-hero-content">

          <span className="contact-badge">
            CONTACT THENAUKRIHUB
          </span>

          <h1>
            Let's Start a
            <span> Conversation</span>
          </h1>

          <p>
            Have a question, need assistance, or want to
            connect with us? Our team is here to help you
            with your career journey.
          </p>

        </div>

      </section>


      {/* =====================================================
          CONTACT INFO
      ===================================================== */}

      <section className="contact-info-section">

        <div className="contact-info-container">

          {/* PHONE */}

          <div className="contact-info-card">

            <div className="contact-info-icon">
              <FaPhoneAlt />
            </div>

            <div>
              <span>CALL US</span>

              <h3>
                +91 7353768278
               
              </h3>
              <h3>
                +91 7353768277
               
              </h3>


              <p>
                Available during working hours
              </p>
            </div>

          </div>


          {/* EMAIL */}

          <div className="contact-info-card">

            <div className="contact-info-icon">
              <FaEnvelope />
            </div>

            <div>
              <span>EMAIL US</span>

              <h3>
                hrthenaukrihub@gmail.com
              </h3>

              <p>
                We usually reply within 24 hours
              </p>
            </div>

          </div>


          {/* LOCATION */}

          <div className="contact-info-card">

            <div className="contact-info-icon">
              <FaMapMarkerAlt />
            </div>

            <div>
              <span>OUR LOCATION</span>

              <h3>
                Gwalior Phoolbag krishna tower first floor.
              </h3>

              <p>
                Serving candidates across India
              </p>
            </div>

          </div>


          {/* HOURS */}

          <div className="contact-info-card">

            <div className="contact-info-icon">
              <FaClock />
            </div>

            <div>
              <span>WORKING HOURS</span>

              <h3>
                Mon - Sat
              </h3>

              <p>
                10:00 AM - 6:00 PM
              </p>
            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          CONTACT FORM + SUPPORT
      ===================================================== */}

      <section className="contact-main-section">

        <div className="contact-main-container">


          {/* =================================================
              LEFT SIDE
          ================================================= */}

          <div className="contact-content">

            <span className="contact-section-tag">
              GET IN TOUCH
            </span>

            <h2>
              We Would Love to
              <span> Hear From You</span>
            </h2>

            <p>
              Whether you have a question about jobs,
              placements, applications, companies, or
              anything related to your career, feel free
              to reach out to us.
            </p>


            {/* SUPPORT CARD */}

            <div className="contact-support-card">

              <div className="contact-support-icon">
                <FaHeadset />
              </div>

              <div>

                <h3>
                  Need Career Support?
                </h3>

                <p>
                  Our team is always ready to help you
                  find the right opportunities and guide
                  you throughout your job search.
                </p>

              </div>

            </div>


            {/* CHECK LIST */}

            <div className="contact-check-list">

              <div>
                <FaCheckCircle />
                <span>
                  Quick Response
                </span>
              </div>

              <div>
                <FaCheckCircle />
                <span>
                  Candidate Support
                </span>
              </div>

              <div>
                <FaCheckCircle />
                <span>
                  Career Assistance
                </span>
              </div>

              <div>
                <FaCheckCircle />
                <span>
                  Trusted Support
                </span>
              </div>

            </div>

          </div>


          {/* =================================================
              RIGHT FORM
          ================================================= */}

          <div className="contact-form-card">

            <div className="contact-form-heading">

              <div className="contact-form-icon">
                <FaPaperPlane />
              </div>

              <div>

                <h3>
                  Send Us a Message
                </h3>

                <p>
                  Fill out the form and our team will
                  get back to you.
                </p>

              </div>

            </div>


            <form onSubmit={handleSubmit}>

              {/* NAME + EMAIL */}

              <div className="contact-form-row">

                <div className="contact-field">

                  <label>
                    Your Name
                  </label>

                  <input
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />

                </div>


                <div className="contact-field">

                  <label>
                    Email Address
                  </label>

                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />

                </div>

              </div>


              {/* PHONE + SUBJECT */}

              <div className="contact-form-row">

                <div className="contact-field">

                  <label>
                    Phone Number
                  </label>

                  <input
                    type="tel"
                    name="phone"
                    placeholder="Enter phone number"
                    value={formData.phone}
                    onChange={handleChange}
                  />

                </div>


                <div className="contact-field">

                  <label>
                    Subject
                  </label>

                  <input
                    type="text"
                    name="subject"
                    placeholder="Enter subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />

                </div>

              </div>


              {/* MESSAGE */}

              <div className="contact-field">

                <label>
                  Your Message
                </label>

                <textarea
                  name="message"
                  rows="6"
                  placeholder="Write your message here..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>

              </div>


              {/* BUTTON */}

              <button
                type="submit"
                className="contact-submit-btn"
              >
                Send Message
                <FaPaperPlane />
              </button>

            </form>

          </div>

        </div>

      </section>


      {/* =====================================================
          CTA
      ===================================================== */}

      <section className="contact-cta">

        <div className="contact-cta-content">

          <span>
            YOUR CAREER MATTERS
          </span>

          <h2>
            Need Help Finding the
            <strong> Right Opportunity?</strong>
          </h2>

          <p>
            Explore our latest job openings and take
            the next step toward building your career.
          </p>

          <a
            href="/jobs"
            className="contact-cta-btn"
          >
            Explore Jobs →
          </a>

        </div>

      </section>

    </main>
  );
}

export default Contact;
