import "./../PrivacyPolicy/LegalPages.css";
import { Link } from "react-router-dom";

import Navbar from "../../Common/Landing/Navbar/Navbar";
import Footer from "../../Common/Landing/Footer/Footer";

function RefundPolicy() {
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
            Refund Policy
          </h1>

          <p>
            Please review our refund terms before purchasing
            any paid service from TheNaukriHub.
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
            At <strong>TheNaukriHub</strong>, we aim to provide
            transparent and reliable career and placement services.
            This Refund Policy explains the conditions under which
            refunds may be provided for paid services.
          </p>

          <h2>
            1. General Refund Policy
          </h2>

          <p>
            All payments made for services provided through
            TheNaukriHub are subject to the terms applicable to
            the particular service or product purchased.
          </p>

          <h2>
            2. Eligibility for Refund
          </h2>

          <p>
            A refund may be considered if a service has not been
            delivered due to an issue attributable to TheNaukriHub.
          </p>

          <ul>
            <li>
              Duplicate payment made for the same service.
            </li>

            <li>
              Payment successfully completed but the purchased
              service was not provided.
            </li>

            <li>
              Technical issues that prevent delivery of a paid service.
            </li>
          </ul>

          <h2>
            3. Non-Refundable Services
          </h2>

          <p>
            Services that have already been fully delivered or
            consumed may generally not be eligible for a refund.
          </p>

          <p>
            Payment for a job application does not guarantee
            interview selection, employment or placement.
            Therefore, rejection by an employer does not normally
            qualify for a refund.
          </p>

          <h2>
            4. Refund Request
          </h2>

          <p>
            To request a refund, contact our support team with
            your registered email address, payment details and
            a description of the issue.
          </p>

          <h2>
            5. Refund Processing
          </h2>

          <p>
            Approved refunds will generally be processed through
            the original payment method. The time taken for the
            refund to appear may depend on the payment provider
            or banking institution.
          </p>

          <h2>
            6. Incorrect Information
          </h2>

          <p>
            TheNaukriHub will not normally be responsible for
            losses resulting from incorrect information entered
            by the user during payment or registration.
          </p>

          <h2>
            7. Changes to Refund Policy
          </h2>

          <p>
            We reserve the right to update this Refund Policy
            from time to time. Any changes will be published
            on this page.
          </p>

          <h2>
            8. Contact Us
          </h2>

          <p>
            For refund-related questions, please contact us.
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

export default RefundPolicy;