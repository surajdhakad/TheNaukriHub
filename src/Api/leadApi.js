import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// ===============================
// Create Lead
// ===============================
export const createLead = async (leadData) => {
  const response = await API.post("/leads", leadData);

  return response.data;
};

// ===============================
// Get All Leads
// ===============================
export const getLeads = async () => {
  const response = await API.get("/leads");

  return response.data;
};

export default API;