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
    role: "student",
  });

  // ================= Handle Input =================

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // ================= Handle Submit =================

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
        role: formData.role,
      });
      alert(response.message);
      navigate("/login");
    } catch (error) {
      alert(error.message || "Registration Failed");
    } finally {
      setLoading(false);
    }

  };

  return (

    <div className="signup-page">

      {/* ===================================================== */}
      {/* LEFT PANEL */}
      {/* ===================================================== */}

      <div className="signup-left">

        <div className="signup-card">

          {/* Header */}
          <div className="signup-header">
            <h1>Create Account</h1>
            <p>Join JobsHub Placement Portal 🚀</p>
            <span>Create your account and start applying for jobs.</span>
          </div>

          {/* Form */}
          <form className="signup-form" onSubmit={handleSubmit}>

            {/* Name */}
            <div className="input-group">
              <label>Full Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                required
              />
            </div>

            {/* Email */}
            <div className="input-group">
              <label>Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
              />
            </div>

            {/* Phone */}
            <div className="input-group">
              <label>Mobile Number</label>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter mobile number"
                required
              />
            </div>

            {/* Password */}
            <div className="input-group">
              <label>Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Create password"
                required
              />
            </div>

            {/* Confirm Password */}
            <div className="input-group">
              <label>Confirm Password</label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm password"
                required
              />
            </div>

            {/* Role */}
            <div className="input-group">
              <label>Select Role</label>
              <select
                name="role"
                value={formData.role}
                onChange={handleChange}
              >
                <option value="student">Student</option>
                <option value="admin">Admin</option>
              </select>
            </div>

            {/* Submit */}
            <button type="submit" className="signup-btn" disabled={loading}>
              {loading ? "Creating Account..." : "Create Account"}
            </button>

          </form>

          {/* Divider */}
          <div className="divider"><span>OR</span></div>

          {/* Google */}
          <button className="google-btn">
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="Google"
            />
            Continue with Google
          </button>

          {/* Footer */}
          <div className="signup-footer">
            <p>
              Already have an account?{" "}
              <Link to="/login"><span>Sign In</span></Link>
            </p>
          </div>

        </div>

      </div>

      {/* ===================================================== */}
      {/* RIGHT PANEL */}
      {/* ===================================================== */}

      <div className="signup-right">

        {/* Decorative Circles */}
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
            Over<span> 500+</span>
            <br />Partner Companies
            <br />Hire Our Students
          </h1>
          <p>JobsHub is India's trusted Training & Placement Portal.</p>
        </div>

        {/* Divider */}
        <div className="hero-line"></div>

        {/* Companies */}
        <div className="company-section">
          <h3>Our Learners Work At</h3>
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
          {/* <img src={student} alt="student" /> */}
          <div className="student-placeholder">👨‍🎓</div>
        </div>

      </div>

    </div>

  );

}

export default Signup;
