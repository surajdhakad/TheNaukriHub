import "./Login.css";


// ===== React =====
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

// ===== API =====
import { loginUser } from "../Api/LoginApi";
import { adminLogin } from "../Api/AdminApi";

// ===== Images (Later Replace) =====

// import logo from "../Images/jobshub-logo.png";
// import student from "../Images/student.png";
// import googleLogo from "../Images/google.png";

// Company Logos
// import googleCompany from "../Images/companies/google.png";
// import amazonCompany from "../Images/companies/amazon.png";
// import microsoftCompany from "../Images/companies/microsoft.png";
// import adobeCompany from "../Images/companies/adobe.png";

function Login() {

  const navigate = useNavigate();

  // ===========================
  // States
  // ===========================

  const [loading, setLoading] = useState(false);

  const [showPassword, setShowPassword] = useState(false);

  const [remember, setRemember] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  // ===========================
  // Handle Input
  // ===========================

  const handleChange = (e) => {

    setFormData({

      ...formData,

      [e.target.name]: e.target.value,

    });

  };

  // ===========================
  // Login Submit
  // ===========================

const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    setLoading(true);

    console.log("==================================");
    console.log("Login Started");
    console.log("Form Data :", formData);

    // =========================
    // ADMIN LOGIN
    // =========================

    try {

      console.log("Trying Admin Login...");

      const adminRes = await adminLogin(formData);

      console.log("Admin API Response :", adminRes);

      const response = adminRes.data;

      console.log("Admin Response Data :", response);

      localStorage.setItem("token", response.token);
      localStorage.setItem("user", JSON.stringify(response.admin));

      console.log("Token Saved :", response.token);
      console.log("Admin Saved :", response.admin);

      if (remember) {
        localStorage.setItem("rememberEmail", formData.email);
      }

      console.log("Redirecting to Admin Dashboard");

      alert(response.message);

      navigate("/admin/dashboard");

      return;

    } catch (adminError) {

      console.log("==================================");
      console.log("Admin Login Failed");

      console.log(adminError);

      if (adminError.response) {
        console.log("Status :", adminError.response.status);
        console.log("Response :", adminError.response.data);
      }

      console.log("Trying Student Login...");
    }

    // =========================
    // STUDENT LOGIN
    // =========================

    const response = await loginUser(formData);

    console.log("Student Response :", response);

    localStorage.setItem("token", response.token);
    localStorage.setItem("user", JSON.stringify(response.user));

    console.log("Student Token :", response.token);
    console.log("Student :", response.user);

    if (remember) {
      localStorage.setItem("rememberEmail", formData.email);
    }

   alert(response.message);

// Redirect According To Role
if (response.user.role === "student") {
  navigate("/student/dashboard");
} else if (response.user.role === "admin") {
  navigate("/admin/dashboard");
} else {
  navigate("/");
}

return;

  } catch (error) {

    console.log("==================================");
    console.log("Login Failed");

    console.log(error);

    if (error.response) {
      console.log("Status :", error.response.status);
      console.log("Response :", error.response.data);
    }

    alert(error.message || "Login Failed");

  } finally {

    setLoading(false);

    console.log("==================================");
    console.log("Login End");

  }
};

  return (

    <div className="login-page">

      {/* ===================================================== */}
      {/* LEFT PANEL */}
      {/* ===================================================== */}

      <div className="login-left">

        <div className="login-card">

          {/* ================= Logo ================= */}

          <Link
            to="/"
            className="logo-link"
          >

            <div className="logo-wrapper">

              {/* Later Replace Image */}

              {/* <img src={logo} alt="" /> */}

              <div className="logo-placeholder">

                JH

              </div>

              <div>

                <h2>JobsHub</h2>

                <span>Placement Portal</span>

              </div>

            </div>

          </Link>

          {/* ================= Heading ================= */}

          <div className="login-header">

            <p>

              Welcome Back 👋

            </p>

            <h1>

              Login to your account

            </h1>

            <span>

              Continue your placement journey.

            </span>

          </div>

          {/* ================= Login Form ================= */}

          <form
            onSubmit={handleSubmit}
            className="login-form"
          >

            {/* Email */}

            <div className="input-group">

              <label>

                Email Address

              </label>

              <input

                type="email"

                name="email"

                value={formData.email}

                onChange={handleChange}

                placeholder="Enter Email Address"

                required

              />

            </div>

            {/* Password */}

            <div className="input-group">

              <label>

                Password

              </label>

              <div className="password-box">

                <input

                  type={
                    showPassword
                      ? "text"
                      : "password"
                  }

                  name="password"

                  value={formData.password}

                  onChange={handleChange}

                  placeholder="Enter Password"

                  required

                />

                <button

                  type="button"

                  className="eye-btn"

                  onClick={() =>
                    setShowPassword(
                      !showPassword
                    )
                  }

                >

                  {showPassword ? "🙈" : "👁"}

                </button>

              </div>

            </div>

            {/* Remember */}

            <div className="login-options">

              <label className="remember">

                <input

                  type="checkbox"

                  checked={remember}

                  onChange={() =>
                    setRemember(
                      !remember
                    )
                  }

                />

                Remember Me

              </label>

              <Link

                to="/forgot-password"

                className="forgot-link"

              >

                Forgot Password?

              </Link>

            </div>

            {/* Login */}

            <button

              className="login-btn"

              disabled={loading}

            >

              {

                loading

                  ? "Signing In..."

                  : "Login"

              }

            </button>

          </form>

          {/* ================= Divider ================= */}

          <div className="divider">

            <span>

              OR

            </span>

          </div>

          {/* ================= Social ================= */}

          <div className="social-buttons">

            <button className="social-btn">

              📧

              <span>

                Use Email

              </span>

            </button>

            <button className="social-btn">

              {/* Later */}

              {/* <img src={googleLogo}/> */}

              🟢

              <span>

                Google

              </span>

            </button>

          </div>

          {/* ================= Footer ================= */}

          <div className="login-footer">

            Don't have an account?

            <Link to="/signup">

              Create New Account

            </Link>

          </div>

        </div>

      </div>

      {/* ===================================================== */}
      {/* RIGHT PANEL */}
      {/* ===================================================== */}

      <div className="login-right">

        {/* Decorative Shapes */}

        <div className="circle one"></div>

        <div className="circle two"></div>

        <div className="circle three"></div>

        {/* Slider */}

        <div className="slider">

          <span className="active"></span>

          <span></span>

          <span></span>

        </div>

        {/* Hero */}

        <div className="hero-content">

          <h1>

            Over

            <span>

              {" "}500+

            </span>

            <br />

            Partner Companies

            <br />

            Hire Our Students

          </h1>

          <p>

            JobsHub is India's trusted
            Training & Placement Portal.

          </p>

        </div>

        {/* Divider */}

        <div className="hero-line"></div>

        {/* Companies */}

        <div className="company-section">

          <h3>

            Our Learners Work At

          </h3>

          <div className="company-grid">

            <div>Google</div>

            <div>Microsoft</div>

            <div>Amazon</div>

            <div>Adobe</div>

            <div>TCS</div>

            <div>Infosys</div>

            <div>IBM</div>

            <div>Capgemini</div>

            <div>Wipro</div>

            <div>Accenture</div>

          </div>

        </div>

        {/* Student */}

        <div className="student-wrapper">

          <div className="student-bg"></div>

          {/* Later */}

          {/* <img src={student}/> */}

          <div className="student-placeholder">

            👨‍🎓

          </div>

        </div>

      </div>

    </div>

  );

}

export default Login;