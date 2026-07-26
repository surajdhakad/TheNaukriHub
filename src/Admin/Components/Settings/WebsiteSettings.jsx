import React, { useState } from "react";

const WebsiteSettings = () => {
  const [website, setWebsite] = useState({
    websiteName: "NaukariHub",
    supportEmail: "",
    supportPhone: "",
    websiteUrl: "",
    address: "",
    footer: "© 2026 NaukariHub. All Rights Reserved.",
  });

  const handleChange = (e) => {
    setWebsite({
      ...website,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(website);
    alert("Website Settings Saved Successfully");
  };

  return (
    <div className="settings-card">
      <h3>🌐 Website Settings</h3>

      <form className="settings-form" onSubmit={handleSubmit}>

        <div className="form-group">
          <label>Website Name</label>
          <input
            type="text"
            name="websiteName"
            value={website.websiteName}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Website Logo</label>
          <input type="file" />
        </div>

        <div className="form-group">
          <label>Support Email</label>
          <input
            type="email"
            name="supportEmail"
            value={website.supportEmail}
            onChange={handleChange}
            placeholder="support@naukarihub.com"
          />
        </div>

        <div className="form-group">
          <label>Support Phone</label>
          <input
            type="text"
            name="supportPhone"
            value={website.supportPhone}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Website URL</label>
          <input
            type="url"
            name="websiteUrl"
            value={website.websiteUrl}
            onChange={handleChange}
            placeholder="https://www.naukarihub.com"
          />
        </div>

        <div className="form-group">
          <label>Office Address</label>

          <textarea
            name="address"
            rows="4"
            value={website.address}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Footer Text</label>

          <input
            type="text"
            name="footer"
            value={website.footer}
            onChange={handleChange}
          />
        </div>

        <button className="save-btn">
          Save Website Settings
        </button>

      </form>
    </div>
  );
};

export default WebsiteSettings;