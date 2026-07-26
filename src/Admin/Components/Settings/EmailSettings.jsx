import React, { useState } from "react";

const EmailSettings = () => {
  const [emailConfig, setEmailConfig] = useState({
    smtpHost: "",
    smtpPort: "",
    smtpUser: "",
    smtpPassword: "",
    senderEmail: "",
    senderName: "",
  });

  const handleChange = (e) => {
    setEmailConfig({
      ...emailConfig,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(emailConfig);
    alert("Email Configuration Saved Successfully");
  };

  const handleTestEmail = () => {
    alert("Test Email Sent Successfully");
  };

  return (
    <div className="settings-card">
      <h3>📧 Email Configuration</h3>

      <form className="settings-form" onSubmit={handleSubmit}>

        <div className="form-group">
          <label>SMTP Host</label>
          <input
            type="text"
            name="smtpHost"
            value={emailConfig.smtpHost}
            onChange={handleChange}
            placeholder="smtp.gmail.com"
          />
        </div>

        <div className="form-group">
          <label>SMTP Port</label>
          <input
            type="number"
            name="smtpPort"
            value={emailConfig.smtpPort}
            onChange={handleChange}
            placeholder="587"
          />
        </div>

        <div className="form-group">
          <label>SMTP Username</label>
          <input
            type="text"
            name="smtpUser"
            value={emailConfig.smtpUser}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>SMTP Password</label>
          <input
            type="password"
            name="smtpPassword"
            value={emailConfig.smtpPassword}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Sender Email</label>
          <input
            type="email"
            name="senderEmail"
            value={emailConfig.senderEmail}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Sender Name</label>
          <input
            type="text"
            name="senderName"
            value={emailConfig.senderName}
            onChange={handleChange}
          />
        </div>

        <div className="email-buttons">
          <button type="submit" className="save-btn">
            Save Configuration
          </button>

          <button
            type="button"
            className="test-btn"
            onClick={handleTestEmail}
          >
            Send Test Email
          </button>
        </div>

      </form>
    </div>
  );
};

export default EmailSettings;