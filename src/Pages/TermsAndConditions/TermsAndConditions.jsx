import "./LegalPages.css";
import { Link } from "react-router-dom";

import Navbar from "../../Common/Landing/Navbar/Navbar";
import Footer from "../../Common/Landing/Footer/Footer";

function TermsAndConditions() {
  return (
    <div className="legal-page">

      <Navbar />

      <section className="legal-hero">
        <div className="legal-hero-content">
          <span className="legal-badge">LEGAL</span>

          <h1>Terms & Conditions</h1>

          <p>
            Please read these terms carefully before using
            TheNaukriHub services.
          </p>
        </div>
      </section>

      <main className="legal-content">
        <div className="legal-card">

          <Link to="/" className="back-link">
            ← Back to Home
          </Link>

          <p className="legal-updated">
            Last Updated: 2026
          </p>

          <h2>1. Acceptance of Terms</h2>

          <p>
            By accessing or using TheNaukriHub, you agree to follow
            these Terms & Conditions. If you do not agree with any
            part of these terms, please do not use our services.
          </p>

          <h2>2. Use of Website</h2>

          <p>
            TheNaukriHub provides job, internship, placement and
            career-related information. Users must use the website
            only for lawful purposes.
          </p>

          <h2>3. User Account</h2>

          <p>
            You are responsible for maintaining the confidentiality
            of your account information and password. You are also
            responsible for activities performed through your account.
          </p>

          <h2>4. Job Information</h2>

          <p>
            We try to provide accurate job information. However,
            job availability, eligibility, salary and recruitment
            decisions are controlled by the respective companies.
          </p>

          <h2>5. User Responsibilities</h2>

          <ul>
            <li>Provide accurate information.</li>
            <li>Do not create fake accounts.</li>
            <li>Do not misuse the platform.</li>
            <li>Do not upload illegal or harmful content.</li>
          </ul>

          <h2>6. Intellectual Property</h2>

          <p>
            Website content, branding, graphics and other materials
            belonging to TheNaukriHub may not be copied or reproduced
            without permission.
          </p>

          <h2>7. Changes to Terms</h2>

          <p>
            We may update these Terms & Conditions from time to time.
            Updated terms will become effective when published on
            this website.
          </p>

          <h2>8. Contact Us</h2>

          <div className="legal-contact-box">
            <strong>TheNaukriHub Support</strong>
            <span>📧 hrthenaukrihub@gmail.com</span>
            <span>📞 +91 7354768278</span>
            <span>📞 +91 7354768277</span>
          </div>

        </div>
      </main>

      <Footer />

    </div>
  );
}

export default TermsAndConditions;