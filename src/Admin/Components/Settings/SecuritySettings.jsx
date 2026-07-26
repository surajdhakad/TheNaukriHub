import React, { useState } from "react";

const SecuritySettings = () => {
  const [showPassword, setShowPassword] = useState(false);

  const [passwords, setPasswords] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setPasswords({
      ...passwords,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (passwords.newPassword !== passwords.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    alert("Password Changed Successfully");
  };

  return (
    <div className="settings-card">
      <h3>🔒 Security Settings</h3>

      <form className="settings-form" onSubmit={handleSubmit}>

        <div className="password-group">
          <label>Current Password</label>

          <div className="password-input">
            <input
              type={showPassword ? "text" : "password"}
              name="currentPassword"
              value={passwords.currentPassword}
              onChange={handleChange}
              placeholder="Enter Current Password"
            />

            <button
              type="button"
              className="eye-btn"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "🙈" : "👁"}
            </button>
          </div>
        </div>

        <div className="password-group">
          <label>New Password</label>

          <input
            type={showPassword ? "text" : "password"}
            name="newPassword"
            value={passwords.newPassword}
            onChange={handleChange}
            placeholder="Enter New Password"
          />
        </div>

        <div className="password-group">
          <label>Confirm Password</label>

          <input
            type={showPassword ? "text" : "password"}
            name="confirmPassword"
            value={passwords.confirmPassword}
            onChange={handleChange}
            placeholder="Confirm Password"
          />
        </div>

        <div className="security-buttons">

          <button className="save-btn">
            Change Password
          </button>

          <button
            type="button"
            className="logout-btn"
          >
            Logout All Devices
          </button>

        </div>

      </form>
    </div>
  );
};

export default SecuritySettings;