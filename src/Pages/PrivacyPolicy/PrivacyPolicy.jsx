import "./LegalPages.css";
import { Link } from "react-router-dom";

import Navbar from "../../Common/Landing/Navbar/Navbar";
import Footer from "../../Common/Landing/Footer/Footer";

function PrivacyPolicy() {
  return (
    <div className="legal-page">

      <Navbar />

      <section className="legal-hero">
        <div className="legal-hero-content">

          <span className="legal-badge">
            LEGAL & PRIVACY
          </span>

          <h1>Privacy Policy</h1>

          <p>
            Your privacy matters to us. Learn how TheNaukriHub
            collects, uses and protects your personal information.
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

          <p>
            At <strong>TheNaukriHub</strong>, we respect your privacy
            and are committed to protecting your personal information.
            This Privacy Policy explains how we collect, use and protect
            your information when you use our website and services.
          </p>

          <h2>1. Information We Collect</h2>

          <p>
            When you register or use our platform, we may collect
            information such as your name, email address, mobile number,
            educational information, resume and other information that
            you voluntarily provide.
          </p>

          <h2>2. How We Use Your Information</h2>

          <p>
            We may use your information to create and manage your
            account, provide job and placement opportunities, process
            applications, communicate with you and improve our services.
          </p>

          <h2>3. Account Security</h2>

          <p>
            We take reasonable measures to protect your personal
            information. However, no online service can guarantee
            complete security of information transmitted over the
            internet.
          </p>

          <h2>4. Job Applications</h2>

          <p>
            When you apply for a job or placement opportunity through
            TheNaukriHub, relevant information may be shared with the
            respective company or organization for recruitment purposes.
          </p>

          <h2>5. Cookies</h2>

          <p>
            Our website may use cookies and similar technologies to
            improve website functionality, understand usage and provide
            a better user experience.
          </p>

          <h2>6. Third-Party Services</h2>

          <p>
            We may use third-party services such as authentication,
            analytics or payment providers. These services may process
            information according to their own privacy policies.
          </p>

          <h2>7. Your Rights</h2>

          <p>
            You may request access to, correction of, or deletion of
            your personal information, subject to applicable laws and
            technical requirements.
          </p>

          <h2>8. Contact Us</h2>

          <p>
            If you have questions regarding this Privacy Policy,
            you can contact us at:
          </p>

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

export default PrivacyPolicy;