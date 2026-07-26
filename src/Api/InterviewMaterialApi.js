import API from "./Api";

// ===============================
// Upload Interview Material
// ===============================
export const createMaterial = (data) =>
  API.post("/interview-material", data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

// ===============================
// Get All Materials
// ===============================
export const getMaterials = () =>
  API.get("/interview-material");

// ===============================
// Get Single Material
// ===============================
export const getMaterialById = (id) =>
  API.get(`/interview-material/${id}`);

// ===============================
// Update Material
// ===============================
export const updateMaterial = (id, data) =>
  API.put(`/interview-material/${id}`, data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

// ===============================
// Delete Material
// ===============================
export const deleteMaterial = (id) =>
  API.delete(`/interview-material/${id}`);