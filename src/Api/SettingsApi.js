import Api from "./Api";

// ===============================
// Get Settings
// ===============================
export const getSettings = () => {
  return Api.get("/settings");
};

// ===============================
// Update Profile
// FormData Send
// ===============================
export const updateProfile = (formData) => {
  return Api.put("/settings/profile", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

// ===============================
// Update Website
// ===============================
export const updateWebsite = (data) => {
  return Api.put("/settings/website", data);
};

// ===============================
// Update Email
// ===============================
export const updateEmail = (data) => {
  return Api.put("/settings/email", data);
};

// ===============================
// Update Notification
// ===============================
export const updateNotification = (data) => {
  return Api.put("/settings/notification", data);
};

// ===============================
// Update Appearance
// ===============================
export const updateAppearance = (data) => {
  return Api.put("/settings/appearance", data);
};

// ===============================
// Update System
// ===============================
export const updateSystem = (data) => {
  return Api.put("/settings/system", data);
};