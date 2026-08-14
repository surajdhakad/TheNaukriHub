import "./Signup.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { registerUser } from "../Api/SignupApi";

function Signup() {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  // =========================
  // HANDLE INPUT
  // =========================

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // =========================
  // SIGNUP
  // =========================

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Password and Confirm Password do not match.");
      return;
    }

    try {
      setLoading(true);

      const response = await registerUser({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        password: formData.password,
        role: "student",
      });

      alert(response.message || "Account created successfully!");

      navigate("/login");
    } catch (error) {
      alert(error.message || "Registration Failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="signup-page">

      {/* =========================
          LOGO
      ========================= */}

      <header className="signup-top">
        <Link to="/" className="signup-logo">
          <span>THE</span>NaukriHub
        </Link>
      </header>

      {/* =========================
          MAIN
      ========================= */}

      <main className="signup-main">

        <h1>Create your account</h1>

        <p className="signup-subtitle">
          Join TheNaukriHub and start your career journey
        </p>

        {/* =========================
            CARD
        ========================= */}

        <div className="signup-card">

          <form onSubmit={handleSubmit}>

            {/* FULL NAME */}

            <div className="input-group">
              <label htmlFor="name">
                Full Name
              </label>

              <input
                id="name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                autoComplete="name"
                required
              />
            </div>

            {/* EMAIL */}

            <div className="input-group">
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

            {/* MOBILE */}

            <div className="input-group">
              <label htmlFor="phone">
                Mobile Number
              </label>

              <input
                id="phone"
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter mobile number"
                autoComplete="tel"
                required
              />
            </div>

            {/* PASSWORD */}

            <div className="input-group">
              <label htmlFor="password">
                Password
              </label>

              <input
                id="password"
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Create password"
                autoComplete="new-password"
                required
              />
            </div>

            {/* CONFIRM PASSWORD */}

            <div className="input-group">
              <label htmlFor="confirmPassword">
                Confirm Password
              </label>

              <input
                id="confirmPassword"
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm password"
                autoComplete="new-password"
                required
              />
            </div>

            {/* CREATE ACCOUNT */}

            <button
              type="submit"
              className="signup-btn"
              disabled={loading}
            >
              {loading
                ? "Creating Account..."
                : "Create Account"}
            </button>

          </form>

          {/* =========================
              DIVIDER
          ========================= */}

          <div className="divider">
            <span>OR</span>
          </div>

          {/* =========================
              GOOGLE
          ========================= */}

          <button
            type="button"
            className="google-btn"
            onClick={() => {
              alert("Google login will be connected next.");
            }}
          >
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="Google"
            />

            Continue with Google
          </button>

          {/* =========================
              LOGIN
          ========================= */}

          <p className="login-text">
            Already have an account?{" "}
            <Link to="/login">
              Sign in
            </Link>
          </p>

        </div>

        {/* =========================
            TERMS
        ========================= */}

        <p className="terms-text">
          By creating an account, you agree to our{" "}
          <a href="#terms">Terms of Service</a>{" "}
          and{" "}
          <a href="#privacy">Privacy Policy</a>.
        </p>

      </main>

    </div>
  );
}

export default Signup;