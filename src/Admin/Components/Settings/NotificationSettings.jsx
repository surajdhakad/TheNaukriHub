import React, { useState } from "react";

const NotificationSettings = () => {
  const [notifications, setNotifications] = useState({
    email: true,
    push: true,
    studentRegistration: true,
    companyRegistration: true,
    newJobs: true,
    placements: true,
    interviews: false,
    announcements: true,
  });

  const handleToggle = (e) => {
    setNotifications({
      ...notifications,
      [e.target.name]: e.target.checked,
    });
  };

  const handleSave = () => {
    console.log(notifications);
    alert("Notification Settings Saved Successfully");
  };

  return (
    <div className="settings-card">
      <h3>🔔 Notification Settings</h3>

      <div className="toggle-list">

        <div className="toggle-item">
          <span>Email Notifications</span>
          <label className="switch">
            <input
              type="checkbox"
              name="email"
              checked={notifications.email}
              onChange={handleToggle}
            />
            <span className="slider"></span>
          </label>
        </div>

        <div className="toggle-item">
          <span>Push Notifications</span>
          <label className="switch">
            <input
              type="checkbox"
              name="push"
              checked={notifications.push}
              onChange={handleToggle}
            />
            <span className="slider"></span>
          </label>
        </div>

        <div className="toggle-item">
          <span>Student Registration Alerts</span>
          <label className="switch">
            <input
              type="checkbox"
              name="studentRegistration"
              checked={notifications.studentRegistration}
              onChange={handleToggle}
            />
            <span className="slider"></span>
          </label>
        </div>

        <div className="toggle-item">
          <span>Company Registration Alerts</span>
          <label className="switch">
            <input
              type="checkbox"
              name="companyRegistration"
              checked={notifications.companyRegistration}
              onChange={handleToggle}
            />
            <span className="slider"></span>
          </label>
        </div>

        <div className="toggle-item">
          <span>New Job Alerts</span>
          <label className="switch">
            <input
              type="checkbox"
              name="newJobs"
              checked={notifications.newJobs}
              onChange={handleToggle}
            />
            <span className="slider"></span>
          </label>
        </div>

        <div className="toggle-item">
          <span>Placement Updates</span>
          <label className="switch">
            <input
              type="checkbox"
              name="placements"
              checked={notifications.placements}
              onChange={handleToggle}
            />
            <span className="slider"></span>
          </label>
        </div>

        <div className="toggle-item">
          <span>Interview Schedule Alerts</span>
          <label className="switch">
            <input
              type="checkbox"
              name="interviews"
              checked={notifications.interviews}
              onChange={handleToggle}
            />
            <span className="slider"></span>
          </label>
        </div>

        <div className="toggle-item">
          <span>System Announcements</span>
          <label className="switch">
            <input
              type="checkbox"
              name="announcements"
              checked={notifications.announcements}
              onChange={handleToggle}
            />
            <span className="slider"></span>
          </label>
        </div>

      </div>

      <button className="save-btn" onClick={handleSave}>
        Save Notification Settings
      </button>
    </div>
  );
};

export default NotificationSettings;