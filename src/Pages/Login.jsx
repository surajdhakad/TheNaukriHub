import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import Api from "../Api/Api";

function Login() {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prevent multiple clicks
    if (loading) return;

    // Basic validation
    if (!formData.email || !formData.password) {
      alert("Please enter email and password.");
      return;
    }

    try {
      setLoading(true);

      console.log("Sending Login Data:", formData);

      // =========================
      // LOGIN API
      // =========================
      const response = await Api.post("/auth/login", {
        email: formData.email.trim(),
        password: formData.password,
      });

      console.log("Login Response:", response.data);

      // =========================
      // GET TOKEN
      // =========================
      const token = response.data?.token;

      if (!token) {
        throw new Error("Token not received from server.");
      }

      // =========================
      // SAVE LOGIN DATA
      // =========================
      localStorage.setItem("token", token);

      if (response.data?.user) {
        localStorage.setItem(
          "user",
          JSON.stringify(response.data.user)
        );
      }

      // =========================
      // SUCCESS
      // =========================
      alert(
        response.data?.message || "Login Successful!"
      );

      navigate("/");

    } catch (error) {
      console.error("Login Error:", error);

      // Backend error
      if (error.response) {
        console.error("Status:", error.response.status);
        console.error("Data:", error.response.data);

        alert(
          error.response.data?.message ||
          "Invalid email or password."
        );
      }

      // Backend is not running / wrong URL
      else if (error.request) {
        console.error(
          "No response received from backend:",
          error.request
        );

        alert(
          "Backend server is not responding. Please check whether the server is running on port 5000."
        );
      }

      // Other error
      else {
        alert(
          error.message || "Login Failed. Please try again."
        );
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-page">

      {/* Logo */}
      <Link to="/" className="login-logo">
        <span>THE</span>NaukriHub
      </Link>

      {/* Main Content */}
      <main className="login-main">

        <div className="login-heading">
          <h1>Welcome back</h1>
          <p>
            Sign in to continue your career journey
          </p>
        </div>

        {/* Login Card */}
        <div className="login-card">

          <form
            onSubmit={handleSubmit}
            className="login-form"
          >

            {/* Email */}
            <div className="login-input-group">

              <label htmlFor="email">
                Email Address
              </label>

              <input
                id="email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                autoComplete="email"
                required
              />

            </div>

            {/* Password */}
            <div className="login-input-group">

              <div className="password-label">

                <label htmlFor="password">
                  Password
                </label>

                <Link to="/forgot-password">
                  Forgot password?
                </Link>

              </div>

              <div className="password-wrapper">

                <input
                  id="password"
                  type={
                    showPassword
                      ? "text"
                      : "password"
                  }
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter your password"
                  autoComplete="current-password"
                  required
                />

                <button
                  type="button"
                  className="show-password"
                  onClick={() =>
                    setShowPassword(
                      !showPassword
                    )
                  }
                >
                  {showPassword
                    ? "Hide"
                    : "Show"}
                </button>

              </div>

            </div>

            {/* Remember Me */}
            <label className="remember-me">

              <input
                type="checkbox"
                name="rememberMe"
              />

              <span>
                Remember me
              </span>

            </label>

            {/* Login Button */}
            <button
              type="submit"
              className="login-btn"
              disabled={loading}
            >
              {loading
                ? "Signing In..."
                : "Sign In"}
            </button>

          </form>

          {/* Divider */}
          <div className="login-divider">
            <span>OR</span>
          </div>

          {/* Google */}
          <button
            type="button"
            className="google-btn"
          >
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="Google"
            />

            Continue with Google
          </button>

          {/* Signup */}
          <div className="login-footer">

            <span>
              Don't have an account?
            </span>

            <Link to="/signup">
              Create account
            </Link>

          </div>

        </div>

      </main>

    </div>
  );
}

export default Login;
