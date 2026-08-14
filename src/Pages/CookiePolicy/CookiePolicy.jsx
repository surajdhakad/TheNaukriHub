import "./LegalPages.css";

import Navbar from "../../Common/Landing/Navbar/Navbar";
import Footer from "../../Common/Landing/Footer/Footer";

function CookiePolicy() {
  return (
    <>
      <Navbar />

      <main className="legal-page">

        <section className="legal-hero">
          <div className="legal-hero-content">
            <span className="legal-badge">LEGAL</span>

            <h1>Cookie Policy</h1>

            <p>
              This policy explains how TheNaukriHub uses cookies
              and similar technologies on its website.
            </p>
          </div>
        </section>

        <section className="legal-content">
          <div className="legal-card">

            <p className="legal-updated">
              Last Updated: 2026
            </p>

            <h2>1. What Are Cookies?</h2>

            <p>
              Cookies are small text files stored on your device when
              you visit a website. They help websites remember information
              and improve the overall browsing experience.
            </p>

            <h2>2. How We Use Cookies</h2>

            <p>
              TheNaukriHub may use cookies to maintain user sessions,
              remember preferences, understand website usage and improve
              website performance.
            </p>

            <h2>3. Types of Cookies</h2>

            <ul>
              <li>
                <strong>Essential Cookies:</strong> Required for basic
                website functionality.
              </li>

              <li>
                <strong>Preference Cookies:</strong> Help remember user
                preferences and settings.
              </li>

              <li>
                <strong>Analytics Cookies:</strong> Help us understand
                how visitors use our website.
              </li>
            </ul>

            <h2>4. Third-Party Cookies</h2>

            <p>
              Some third-party services integrated into our website may
              use their own cookies or similar technologies according
              to their respective policies.
            </p>

            <h2>5. Managing Cookies</h2>

            <p>
              Most modern browsers allow you to control or delete cookies
              through browser settings. Disabling certain cookies may
              affect some website functionality.
            </p>

            <h2>6. Changes to This Policy</h2>

            <p>
              We may update this Cookie Policy when necessary to reflect
              changes in our services, technology or applicable requirements.
            </p>

            <h2>7. Contact Us</h2>

            <div className="legal-contact-box">
              <strong>Cookie Policy Support</strong>
              <span>Email: hrthenaukrihub@gmail.com</span>
              <span>Phone: +91 7354768278</span>
              <span>Phone: +91 7354768277</span>
            </div>

          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}

export default CookiePolicy;