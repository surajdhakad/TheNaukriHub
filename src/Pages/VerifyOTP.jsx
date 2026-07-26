import "./ForgotPassword.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { verifyOTP } from "../Api/VerifyOtpApi";

function VerifyOTP() {

  const navigate = useNavigate();

  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);

  // Forgot Password page se email
  const email = localStorage.getItem("resetEmail");

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      setLoading(true);

      const response = await verifyOTP({
        email,
        otp,
      });

      alert(response.message);

      // OTP save for Reset Password page
      localStorage.setItem("resetOTP", otp);

      // Go to Reset Password page
      navigate("/reset-password");

    } catch (error) {

      alert(error.message || "OTP Verification Failed");

    } finally {

      setLoading(false);

    }

  };

  return (
    <div className="forgot-page">

      <div className="forgot-card">

        <div className="forgot-header">

          <h1>Verify OTP</h1>

          <p>Email Verification</p>

          <span>
            Enter the 6-digit OTP sent to your registered email.
          </span>

        </div>

        <form
          className="forgot-form"
          onSubmit={handleSubmit}
        >

          <div className="input-group">

            <label>OTP</label>

            <input
              type="text"
              name="otp"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              placeholder="Enter 6-digit OTP"
              maxLength={6}
              required
            />

          </div>

          <button
            type="submit"
            className="forgot-btn"
            disabled={loading}
          >
            {loading ? "Verifying..." : "Verify OTP"}
          </button>

        </form>

        <div className="forgot-footer">

          <Link to="/forgot-password">
            ← Back
          </Link>

        </div>

      </div>

    </div>
  );
}

export default VerifyOTP;