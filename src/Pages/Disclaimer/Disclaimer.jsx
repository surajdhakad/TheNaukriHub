import "./../PrivacyPolicy/LegalPages.css";
import { Link } from "react-router-dom";

import Navbar from "../../Common/Landing/Navbar/Navbar";
import Footer from "../../Common/Landing/Footer/Footer";

function Disclaimer() {
  return (
    <div className="legal-page">

      <Navbar />

      {/* ================= HERO ================= */}

      <section className="legal-hero">
        <div className="legal-hero-content">

          <span className="legal-badge">
            LEGAL INFORMATION
          </span>

          <h1>
            Disclaimer
          </h1>

          <p>
            Important information about the use of
            TheNaukriHub and the opportunities listed on our platform.
          </p>

        </div>
      </section>

      {/* ================= CONTENT ================= */}

      <main className="legal-content">

        <div className="legal-card">

          <Link to="/" className="back-link">
            ← Back to Home
          </Link>

          <p className="legal-updated">
            Last Updated: 2026
          </p>

          <p>
            The information provided on
            <strong> TheNaukriHub </strong>
            is intended for general informational and career
            purposes. While we make reasonable efforts to keep
            information accurate and useful, we do not guarantee
            that all information is complete, accurate or current.
          </p>

          <h2>
            1. Job Opportunities
          </h2>

          <p>
            TheNaukriHub may display job openings, internships,
            placement drives and other career opportunities from
            various companies and organizations.
          </p>

          <p>
            The availability of a job or placement opportunity does
            not guarantee that the user will receive an interview,
            selection or employment.
          </p>

          <h2>
            2. Employer Information
          </h2>

          <p>
            Job descriptions, company information, salary details,
            eligibility criteria and other recruitment information
            may be provided by employers or third parties.
          </p>

          <p>
            Users should independently verify important information
            directly with the relevant employer before making
            decisions.
          </p>

          <h2>
            3. No Employment Guarantee
          </h2>

          <p>
            TheNaukriHub does not guarantee employment, salary,
            interview calls, internships, placement or selection
            for any opportunity listed on the platform.
          </p>

          <h2>
            4. User Responsibility
          </h2>

          <p>
            Users are responsible for verifying information before
            applying for any opportunity and for ensuring that the
            information submitted in their profile or resume is
            accurate.
          </p>

          <h2>
            5. Third-Party Websites
          </h2>

          <p>
            Our website may contain links to external websites.
            We are not responsible for the content, availability,
            security or privacy practices of third-party websites.
          </p>

          <h2>
            6. Financial & Payment Information
          </h2>

          <p>
            Users should carefully verify any payment request,
            recruitment communication or financial information
            received from third parties claiming to represent an
            employer.
          </p>

          <h2>
            7. External Communication
          </h2>

          <p>
            If an employer or recruiter contacts you directly,
            verify their identity and the authenticity of the
            opportunity before sharing sensitive information or
            making any payment.
          </p>

          <h2>
            8. Website Availability
          </h2>

          <p>
            We do not guarantee that the website will always be
            available, uninterrupted or completely free from
            technical errors.
          </p>

          <h2>
            9. Changes to This Disclaimer
          </h2>

          <p>
            TheNaukriHub may update this Disclaimer from time to
            time. Changes will be published on this page.
          </p>

          <h2>
            10. Contact Us
          </h2>

          <p>
            If you have any questions regarding this Disclaimer,
            please contact our support team.
          </p>

          <div className="legal-contact-box">

            <strong>
              TheNaukriHub Support
            </strong>

            <span>
              📧 hrthenaukrihub@gmail.com
            </span>

            <span>
              📞 +91 7354768278
            </span>

            <span>
              📞 +91 7354768277
            </span>

            <span>
              🕒 Monday - Saturday | 09:00 AM - 06:00 PM
            </span>

          </div>

        </div>

      </main>

      <Footer />

    </div>
  );
}

export default Disclaimer;