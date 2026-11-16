import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { loginUser } from "../Api/LoginApi";

function Login() {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    setError("");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (loading) return;

    setError("");

    const email = formData.email.trim();

    if (!email) {
      setError("Please enter your email address.");
      return;
    }

    if (!formData.password) {
      setError("Please enter your password.");
      return;
    }

    try {
      setLoading(true);

      const response = await loginUser({
        email,
        password: formData.password,
      });

      const data = response?.data ?? response;
      const token =
        data?.token ??
        data?.accessToken ??
        data?.user?.token;

      const user = data?.user ?? data?.data?.user;
      const role = String(user?.role ?? data?.role ?? "")
        .toLowerCase()
        .trim();

      if (!token) {
        setError(
          data?.message || "Login failed. Please check your details."
        );
        return;
      }

      localStorage.setItem("token", token);

      if (user && typeof user === "object") {
        localStorage.setItem("user", JSON.stringify(user));
      }

      if (role === "student") {
        navigate("/student/dashboard");
        return;
      }

      if (role === "admin") {
        navigate("/admin/dashboard");
        return;
      }

      setError(
        "Login worked, but the account role was not found. Please contact support."
      );
    } catch (loginError) {
      setError(
        loginError?.response?.data?.message ||
          loginError?.response?.data?.error ||
          loginError?.message ||
          "Unable to log in. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-page">
      <Link to="/" className="login-logo">
        <span>THE</span>NaukriHub
      </Link>

      <main className="login-main">
        <div className="login-heading">
          <h1>Welcome back</h1>
          <p>Sign in to continue your career journey</p>
        </div>

        <div className="login-card">
          <form onSubmit={handleSubmit} className="login-form">
            {error && (
              <div className="login-error" role="alert">
                {error}
              </div>
            )}

            <div className="login-input-group">
              <label htmlFor="email">Email Address</label>
              <input
                id="email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                autoComplete="email"
                disabled={loading}
                required
              />
            </div>

            <div className="login-input-group">
              <div className="password-label">
                <label htmlFor="password">Password</label>
                <Link to="/forgot-password">Forgot password?</Link>
              </div>

              <div className="password-wrapper">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter your password"
                  autoComplete="current-password"
                  disabled={loading}
                  required
                />

                <button
                  type="button"
                  className="show-password"
                  onClick={() => setShowPassword((previous) => !previous)}
                  disabled={loading}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
            </div>

            <label className="remember-me">
              <input type="checkbox" name="rememberMe" />
              <span>Remember me</span>
            </label>

            <button
              type="submit"
              className="login-btn"
              disabled={loading}
            >
              {loading ? "Signing In..." : "Sign In"}
            </button>
          </form>

          <div className="login-divider">
            <span>OR</span>
          </div>

          <button
            type="button"
            className="google-btn"
            onClick={() => {
              setError("Google login is not connected yet.");
            }}
          >
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt=""
            />
            Continue with Google
          </button>

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