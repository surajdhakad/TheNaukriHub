import { useEffect, useState } from "react";
import axios from "axios";
import "./LeadPopup.css";
import popupImg from "../../../assets/Images/career-girl.png";

function LeadPopup() {
  const [show, setShow] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    college: "",
    district: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.phone) {
      setMessage("Please enter your name and phone number.");
      return;
    }

    try {
      setLoading(true);
      setMessage("");

      const response = await axios.post(
        "http://localhost:5000/api/leads",
        formData
      );

      if (response.data.success) {
        setMessage("Your details have been submitted successfully! ✅");

        setFormData({
          name: "",
          phone: "",
          college: "",
          district: "",
        });

        setTimeout(() => {
          setShow(false);
          setMessage("");
        }, 1800);
      }
    } catch (error) {
      console.error("Lead API Error:", error);

      setMessage(
        error.response?.data?.message ||
          "Unable to submit details. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  if (!show) return null;

  return (
    <div className="popup-overlay">

      <div className="popup-container">

        {/* CLOSE */}
        <button
          className="popup-close"
          onClick={() => setShow(false)}
          disabled={loading}
          aria-label="Close"
        >
          ×
        </button>

        {/* ================= LEFT PROMO ================= */}
        <div className="popup-left">

          <div className="promo-content">

            {/* BRAND */}
            <div className="brand-area">
              <div className="brand-logo">
                <span className="brand-the">The</span>
                <span className="brand-name">NaukriHub</span>
              </div>

              <div className="brand-tagline">
                Your Career • Our Priority
              </div>
            </div>

            {/* HEADING */}
            <div className="promo-heading">
              <span>LAUNCH YOUR</span>
              <strong>BANKING</strong>
              <strong>CAREER</strong>
              <small>WITH <b>The NaukriHub</b></small>
            </div>

            {/* IMAGE */}
            <div className="promo-image">
              <img src={popupImg} alt="Banking Career" />
            </div>

            {/* BLUE BADGE */}
            <div className="training-badge">
              <span>100%</span> GUARANTEED JOB TRAINING
            </div>

            {/* FEATURES */}
            <div className="promo-features">

              <div className="feature-item">
                <div className="feature-icon">✓</div>
                <div>
                  <b>FRESHER = NO PROBLEM</b>
                  <span>No experience, no problem!</span>
                </div>
              </div>

              <div className="feature-item">
                <div className="feature-icon">30</div>
                <div>
                  <b>GET JOB READY</b>
                  <span>Complete career preparation</span>
                </div>
              </div>

              <div className="feature-item">
                <div className="feature-icon">★</div>
                <div>
                  <b>500+ CANDIDATES PLACED</b>
                  <span>Building successful careers</span>
                </div>
              </div>

              <div className="feature-item">
                <div className="feature-icon">✓</div>
                <div>
                  <b>NO HIDDEN CHARGES</b>
                  <span>Transparent career guidance</span>
                </div>
              </div>

            </div>

            {/* BOTTOM STRIP */}
            <div className="promo-bottom">

              <div>
                <span className="bottom-icon">✓</span>
                <div>
                  <strong>CAREER SUPPORT</strong>
                  <small>Guidance till placement</small>
                </div>
              </div>

              <div className="bottom-divider"></div>

              <div>
                <span className="bottom-icon">★</span>
                <div>
                  <strong>TOP OPPORTUNITIES</strong>
                  <small>Banking & corporate jobs</small>
                </div>
              </div>

            </div>

          </div>
        </div>

        {/* ================= RIGHT FORM ================= */}
        <div className="popup-right">

          <div className="form-header">
            <span className="form-mini-title">
              GET STARTED TODAY
            </span>

            <h2>Fill Your Details</h2>

            <p>
              Take the first step towards your banking career.
              Our team will contact you shortly.
            </p>
          </div>

          <form onSubmit={handleSubmit}>

            {/* NAME */}
            <div className="form-group">
              <label>
                <span>👤</span>
                Name
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

            {/* PHONE */}
            <div className="form-group">
              <label>
                <span>📞</span>
                Phone Number
              </label>

              <input
                type="tel"
                name="phone"
                placeholder="Enter your phone number"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>

            {/* COLLEGE */}
            <div className="form-group">
              <label>
                <span>🎓</span>
                College Name
              </label>

              <input
                type="text"
                name="college"
                placeholder="Enter your college name"
                value={formData.college}
                onChange={handleChange}
              />
            </div>

            {/* DISTRICT */}
            <div className="form-group">
              <label>
                <span>📍</span>
                District
              </label>

              <input
                type="text"
                name="district"
                placeholder="Enter your district"
                value={formData.district}
                onChange={handleChange}
              />
            </div>

            {/* MESSAGE */}
            {message && (
              <div
                className={
                  message.includes("successfully")
                    ? "success-message"
                    : "error-message"
                }
              >
                {message}
              </div>
            )}

            {/* BUTTON */}
            <button
              type="submit"
              className="submit-btn"
              disabled={loading}
            >
              {loading ? (
                <>
                  <span className="loader"></span>
                  Submitting...
                </>
              ) : (
                <>
                  Submit Application
                  <span>→</span>
                </>
              )}
            </button>

            {/* SECURITY */}
            <div className="secure-text">
              🔒 Your information is safe & secure with The NaukriHub
            </div>

          </form>

        </div>

      </div>
    </div>
  );
}

export default LeadPopup;