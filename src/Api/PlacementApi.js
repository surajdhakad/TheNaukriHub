import API from "./Api";

// ===============================
// Create Placement
// ===============================
export const createPlacement = (data) =>
  API.post("/placements", data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

// ===============================
// Get All Placements
// ===============================
export const getPlacements = () =>
  API.get("/placements");

// ===============================
// Get Placement By Id
// ===============================
export const getPlacementById = (id) =>
  API.get(`/placements/${id}`);

// ===============================
// Update Placement
// ===============================
export const updatePlacement = (id, data) =>
  API.put(`/placements/${id}`, data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

// ===============================
// Delete Placement
// ===============================
export const deletePlacement = (id) =>
  API.delete(`/placements/${id}`);