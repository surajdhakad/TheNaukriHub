import "./ForgotPassword.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { sendOTP } from "../Api/ForgotPasswordApi";

function ForgotPassword() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  // ================= Send OTP =================

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      setLoading(true);

      const response = await sendOTP(email);

      alert(response.message);

      // Email save for Verify OTP page
      localStorage.setItem("resetEmail", email);

      navigate("/verify-otp");

    } catch (error) {

      alert(error.message || "Failed to send OTP");

    } finally {

      setLoading(false);

    }

  };

  return (
    <div className="forgot-page">

      <div className="forgot-card">

        <div className="forgot-header">

          <h1>Forgot Password</h1>

          <p>Reset Your Password</p>

          <span>
            Enter your registered email address.
          </span>

        </div>

        <form
          className="forgot-form"
          onSubmit={handleSubmit}
        >

          <div className="input-group">

            <label>Email Address</label>

            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
            />

          </div>

          <button
            type="submit"
            className="forgot-btn"
            disabled={loading}
          >
            {loading ? "Sending OTP..." : "Send OTP"}
          </button>

        </form>

        <div className="forgot-footer">

          <Link to="/login">
            ← Back to Login
          </Link>

        </div>

      </div>

    </div>
  );
}

export default ForgotPassword;