import React, { useState } from "react";

const AppearanceSettings = () => {
  const [appearance, setAppearance] = useState({
    theme: "light",
    sidebar: "expanded",
    fontSize: "medium",
    color: "#2563eb",
  });

  const handleChange = (e) => {
    setAppearance({
      ...appearance,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = () => {
    console.log(appearance);
    alert("Appearance Settings Saved Successfully");
  };

  return (
    <div className="settings-card">
      <h3>🎨 Appearance Settings</h3>

      <div className="form-group">
        <label>Theme</label>

        <select
          name="theme"
          value={appearance.theme}
          onChange={handleChange}
        >
          <option value="light">🌞 Light</option>
          <option value="dark">🌙 Dark</option>
          <option value="system">💻 System Default</option>
        </select>
      </div>

      <div className="form-group">
        <label>Sidebar Mode</label>

        <select
          name="sidebar"
          value={appearance.sidebar}
          onChange={handleChange}
        >
          <option value="expanded">Expanded</option>
          <option value="compact">Compact</option>
        </select>
      </div>

      <div className="form-group">
        <label>Font Size</label>

        <select
          name="fontSize"
          value={appearance.fontSize}
          onChange={handleChange}
        >
          <option value="small">Small</option>
          <option value="medium">Medium</option>
          <option value="large">Large</option>
        </select>
      </div>

      <div className="form-group">
        <label>Primary Color</label>

        <input
          type="color"
          name="color"
          value={appearance.color}
          onChange={handleChange}
        />
      </div>

      <button className="save-btn" onClick={handleSave}>
        Save Appearance
      </button>
    </div>
  );
};

export default AppearanceSettings;