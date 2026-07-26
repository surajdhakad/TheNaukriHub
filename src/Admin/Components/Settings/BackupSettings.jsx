import React from "react";

const BackupSettings = () => {

  const backup = () => {
    alert("Database Backup Started");
  };

  const restore = () => {
    alert("Restore Function Coming Soon");
  };

  const clearCache = () => {
    alert("Cache Cleared Successfully");
  };

  return (
    <div className="settings-card">

      <h3>💾 Backup & Restore</h3>

      <div className="backup-grid">

        <button className="backup-btn" onClick={backup}>
          📥 Backup Database
        </button>

        <button className="restore-btn" onClick={restore}>
          📤 Restore Database
        </button>

        <button className="cache-btn" onClick={clearCache}>
          🗑 Clear Cache
        </button>

        <button className="download-btn">
          ⬇ Download Backup
        </button>

      </div>

    </div>
  );
};

export default BackupSettings;