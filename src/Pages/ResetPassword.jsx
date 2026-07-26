import "./ForgotPassword.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { resetPassword } from "../Api/ResetPasswordApi";

function ResetPassword() {

  const navigate = useNavigate();

  const [newPassword, setNewPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const email = localStorage.getItem("resetEmail");
  const otp = localStorage.getItem("resetOTP");

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      setLoading(true);

      const response = await resetPassword({
        email,
        otp,
        newPassword,
      });

      alert(response.message);

      localStorage.removeItem("resetEmail");
      localStorage.removeItem("resetOTP");

      navigate("/login");

    } catch (error) {

      alert(error.message || "Password Reset Failed");

    } finally {

      setLoading(false);

    }

  };

  return (

    <div className="forgot-page">

      <div className="forgot-card">

        <div className="forgot-header">

          <h1>Reset Password</h1>

          <p>Create New Password</p>

          <span>
            Enter your new password.
          </span>

        </div>

        <form
          className="forgot-form"
          onSubmit={handleSubmit}
        >

          <div className="input-group">

            <label>New Password</label>

            <input
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              placeholder="Enter new password"
              required
            />

          </div>

          <button
            type="submit"
            className="forgot-btn"
            disabled={loading}
          >
            {loading ? "Updating..." : "Reset Password"}
          </button>

        </form>

      </div>

    </div>

  );
}

export default ResetPassword;