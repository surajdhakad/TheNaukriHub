import Api from "./Api";

// ===============================
// Student APIs
// ===============================

// Submit Application
export const submitApplication = (formData, token) => {
  return Api.post("/application/apply", formData, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "multipart/form-data",
    },
  });
};

// Get My Application
export const getMyApplication = (token) => {
  return Api.get("/application/my-application", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

// ===============================
// Admin APIs
// ===============================

// Get All Applications
export const getAllApplications = (token) => {
  return Api.get("/application/all", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

// Get Single Application
export const getApplicationById = (id, token) => {
  return Api.get(`/application/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

// Update Status
export const updateApplicationStatus = (id, status, token) => {
  return Api.put(
    `/application/${id}/status`,
    { status },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};