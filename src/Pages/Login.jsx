import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
<<<<<<< HEAD
import Api from "../Api/Api";
=======
import { loginUser } from "../Api/LoginApi";
>>>>>>> 10dd43b (Complete responsive frontend and lead management)

function Login() {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  // =====================================================
  // HANDLE INPUT CHANGE
  // =====================================================

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
<<<<<<< HEAD
=======

    setError("");
>>>>>>> 10dd43b (Complete responsive frontend and lead management)
  };

  // =====================================================
  // LOGIN
  // =====================================================

  const handleSubmit = async (e) => {
    e.preventDefault();

<<<<<<< HEAD
    // Prevent multiple clicks
    if (loading) return;

    // Basic validation
    if (!formData.email || !formData.password) {
      alert("Please enter email and password.");
=======
    setError("");

    // Basic validation
    if (!formData.email.trim()) {
      setError("Please enter your email address.");
      return;
    }

    if (!formData.password) {
      setError("Please enter your password.");
>>>>>>> 10dd43b (Complete responsive frontend and lead management)
      return;
    }

    try {
      setLoading(true);

<<<<<<< HEAD
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
=======
      console.log("LOGIN REQUEST:", {
        email: formData.email,
        password: formData.password,
      });

      // =================================================
      // CALL LOGIN API
      // =================================================

      const response = await loginUser({
        email: formData.email.trim(),
        password: formData.password,
      });

      console.log("LOGIN RESPONSE:", response);

      // =================================================
      // GET TOKEN
      // =================================================

      const token =
        response?.token ||
        response?.data?.token ||
        response?.accessToken ||
        response?.data?.accessToken;

      if (token) {
        localStorage.setItem("token", token);
      }

      // =================================================
      // GET USER
      // =================================================

      const user =
        response?.user ||
        response?.data?.user ||
        response?.data;

      if (user && typeof user === "object") {
        localStorage.setItem(
          "user",
          JSON.stringify(user)
        );
      }

      // =================================================
      // GET ROLE
      // =================================================

      const role =
        user?.role ||
        response?.role ||
        response?.data?.role ||
        "";

      const userRole = String(role)
        .toLowerCase()
        .trim();

      console.log("USER DATA:", user);
      console.log("USER ROLE:", userRole);

      // =================================================
      // CHECK LOGIN SUCCESS
      // =================================================

      if (
        response?.success === true ||
        response?.success === "true" ||
        token
      ) {
        alert(
          response?.message ||
            "Login Successful!"
        );

        // ===============================================
        // STUDENT LOGIN
        // ===============================================

        if (userRole === "student") {
          console.log(
            "Redirecting to Student Dashboard..."
          );

          navigate("/student/dashboard");
          return;
        }

        // ===============================================
        // ADMIN LOGIN
        // ===============================================

        if (userRole === "admin") {
          console.log(
            "Redirecting to Admin Dashboard..."
          );

          navigate("/admin/dashboard");
          return;
        }

        // ===============================================
        // ROLE NOT FOUND
        // ===============================================

        console.warn(
          "Login successful but role was not found."
        );

        setError(
          "Login successful, but user role was not found."
        );

        return;
      }

      // =================================================
      // LOGIN FAILED
      // =================================================

      setError(
        response?.message ||
          "Invalid email or password."
      );

    } catch (error) {
      console.error("LOGIN ERROR:", error);

      // LoginApi throws error.response.data
      const errorMessage =
        error?.message ||
        error?.error ||
        error?.data?.message ||
        "Invalid email or password.";

      setError(errorMessage);

>>>>>>> 10dd43b (Complete responsive frontend and lead management)
    } finally {
      setLoading(false);
    }
  };

  // =====================================================
  // UI
  // =====================================================

  return (
    <div className="login-page">

      {/* =================================================
          LOGO
      ================================================= */}

      <Link to="/" className="login-logo">
        <span>THE</span>NaukriHub
      </Link>

      {/* =================================================
          MAIN
      ================================================= */}

      <main className="login-main">

        {/* =================================================
            HEADING
        ================================================= */}

        <div className="login-heading">
          <h1>Welcome back</h1>
<<<<<<< HEAD
=======

>>>>>>> 10dd43b (Complete responsive frontend and lead management)
          <p>
            Sign in to continue your career journey
          </p>
        </div>

        {/* =================================================
            LOGIN CARD
        ================================================= */}

        <div className="login-card">

          <form
            onSubmit={handleSubmit}
            className="login-form"
          >
<<<<<<< HEAD
=======

            {/* =================================================
                ERROR
            ================================================= */}

            {error && (
              <div className="login-error">
                {error}
              </div>
            )}

            {/* =================================================
                EMAIL
            ================================================= */}
>>>>>>> 10dd43b (Complete responsive frontend and lead management)

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
<<<<<<< HEAD
=======
                disabled={loading}
>>>>>>> 10dd43b (Complete responsive frontend and lead management)
                required
              />

            </div>

            {/* =================================================
                PASSWORD
            ================================================= */}

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
<<<<<<< HEAD
=======
                  disabled={loading}
>>>>>>> 10dd43b (Complete responsive frontend and lead management)
                  required
                />

                <button
                  type="button"
                  className="show-password"
                  onClick={() =>
                    setShowPassword(
<<<<<<< HEAD
                      !showPassword
                    )
                  }
=======
                      (prev) => !prev
                    )
                  }
                  disabled={loading}
>>>>>>> 10dd43b (Complete responsive frontend and lead management)
                >
                  {showPassword
                    ? "Hide"
                    : "Show"}
                </button>

              </div>

            </div>

<<<<<<< HEAD
            {/* Remember Me */}
=======
            {/* =================================================
                REMEMBER ME
            ================================================= */}

>>>>>>> 10dd43b (Complete responsive frontend and lead management)
            <label className="remember-me">

              <input
                type="checkbox"
<<<<<<< HEAD
                name="rememberMe"
=======
                name="remember"
>>>>>>> 10dd43b (Complete responsive frontend and lead management)
              />

              <span>
                Remember me
              </span>

            </label>

<<<<<<< HEAD
            {/* Login Button */}
=======
            {/* =================================================
                SIGN IN
            ================================================= */}

>>>>>>> 10dd43b (Complete responsive frontend and lead management)
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

          {/* =================================================
              DIVIDER
          ================================================= */}

          <div className="login-divider">
            <span>OR</span>
          </div>

<<<<<<< HEAD
          {/* Google */}
          <button
            type="button"
            className="google-btn"
          >
=======
          {/* =================================================
              GOOGLE
          ================================================= */}

          <button
            type="button"
            className="google-btn"
            onClick={() =>
              alert(
                "Google Login is not connected yet."
              )
            }
          >

>>>>>>> 10dd43b (Complete responsive frontend and lead management)
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="Google"
            />

            Continue with Google

          </button>

          {/* =================================================
              SIGN UP
          ================================================= */}

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
