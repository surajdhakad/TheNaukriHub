import React, { useState } from "react";

const SystemSettings = () => {
  const [system, setSystem] = useState({
    maintenanceMode: false,
    studentRegistration: true,
    companyRegistration: true,
    autoApproveStudents: false,
    autoApproveCompanies: false,
    sessionTimeout: "30",
    defaultRole: "student",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setSystem({
      ...system,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSave = () => {
    console.log(system);
    alert("System Settings Saved Successfully");
  };

  return (
    <div className="settings-card">
      <h3>⚙️ System Settings</h3>

      <div className="toggle-list">

        <div className="toggle-item">
          <span>Maintenance Mode</span>

          <label className="switch">
            <input
              type="checkbox"
              name="maintenanceMode"
              checked={system.maintenanceMode}
              onChange={handleChange}
            />
            <span className="slider"></span>
          </label>
        </div>

        <div className="toggle-item">
          <span>Allow Student Registration</span>

          <label className="switch">
            <input
              type="checkbox"
              name="studentRegistration"
              checked={system.studentRegistration}
              onChange={handleChange}
            />
            <span className="slider"></span>
          </label>
        </div>

        <div className="toggle-item">
          <span>Allow Company Registration</span>

          <label className="switch">
            <input
              type="checkbox"
              name="companyRegistration"
              checked={system.companyRegistration}
              onChange={handleChange}
            />
            <span className="slider"></span>
          </label>
        </div>

      </div>

      <div className="form-group">
        <label>Default User Role</label>

        <select
          name="defaultRole"
          value={system.defaultRole}
          onChange={handleChange}
        >
          <option value="student">Student</option>
          <option value="company">Company</option>
        </select>
      </div>

      <div className="form-group">
        <label>Session Timeout (Minutes)</label>

        <input
          type="number"
          name="sessionTimeout"
          value={system.sessionTimeout}
          onChange={handleChange}
        />
      </div>

      <button className="save-btn" onClick={handleSave}>
        Save System Settings
      </button>
    </div>
  );
};

export default SystemSettings;