import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
// import { loginUser } from "../Api/LoginApi";

function Login() {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      // API connect karne ke baad:
      // const response = await loginUser(formData);
      // alert(response.message);
      // navigate("/");

      console.log("Login Data:", formData);

      // Temporary
      setTimeout(() => {
        setLoading(false);
      }, 800);

    } catch (error) {
      alert(error.message || "Login Failed");
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
          <p>Sign in to continue your career journey</p>
        </div>

        {/* Login Card */}
        <div className="login-card">

          <form onSubmit={handleSubmit} className="login-form">

            {/* Email */}
            <div className="login-input-group">
              <label htmlFor="email">Email Address</label>

              <input
                id="email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
              />
            </div>

            {/* Password */}
            <div className="login-input-group">

              <div className="password-label">
                <label htmlFor="password">Password</label>

                <Link to="/forgot-password">
                  Forgot password?
                </Link>
              </div>

              <div className="password-wrapper">

                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter your password"
                  required
                />

                <button
                  type="button"
                  className="show-password"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? "Hide" : "Show"}
                </button>

              </div>

            </div>

            {/* Remember */}
            <label className="remember-me">
              <input type="checkbox" />
              <span>Remember me</span>
            </label>

            {/* Login */}
            <button
              type="submit"
              className="login-btn"
              disabled={loading}
            >
              {loading ? "Signing In..." : "Sign In"}
            </button>

          </form>

          {/* Divider */}
          <div className="login-divider">
            <span>OR</span>
          </div>

          {/* Google */}
          <button type="button" className="google-btn">
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="Google"
            />
            Continue with Google
          </button>

          {/* Signup */}
          <div className="login-footer">
            <span>Don't have an account?</span>
            <Link to="/signup">Create account</Link>
          </div>

        </div>

      </main>

    </div>
  );
}

export default Login;