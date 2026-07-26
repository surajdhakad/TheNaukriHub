import React from "react";
import Sidebar from "../Components/Sidebar/Sidebar";
import "../Css/Settings.css";

import ProfileSettings from "../Components/Settings/ProfileSettings";
import SecuritySettings from "../Components/Settings/SecuritySettings";
import WebsiteSettings from "../Components/Settings/WebsiteSettings";
import EmailSettings from "../Components/Settings/EmailSettings";
import NotificationSettings from "../Components/Settings/NotificationSettings";
import AppearanceSettings from "../Components/Settings/AppearanceSettings";
import SystemSettings from "../Components/Settings/SystemSettings";
import BackupSettings from "../Components/Settings/BackupSettings";

const Settings = () => {
  return (
    <div className="settings-page">
      <Sidebar />

      <div className="settings-content">
        <h1>Settings</h1>

        <ProfileSettings />
        <SecuritySettings />
        <WebsiteSettings />
        <EmailSettings />
        <NotificationSettings />
        <AppearanceSettings />
        <SystemSettings />
        <BackupSettings />
      </div>
    </div>
  );
};

export default Settings;