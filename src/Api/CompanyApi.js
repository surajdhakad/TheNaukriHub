import API from "./Api";

// Create Company
export const createCompany = (data) =>
  API.post("/companies", data);

// Get All Companies
export const getCompanies = () =>
  API.get("/companies");

// Get Company By Id
export const getCompanyById = (id) =>
  API.get(`/companies/${id}`);

// Update Company
export const updateCompany = (id, data) =>
  API.put(`/companies/${id}`, data);

// Delete Company
export const deleteCompany = (id) =>
  API.delete(`/companies/${id}`);