import Api from "./Api";

// Create Job
export const createJob = (data) =>
  Api.post("/jobs", data);

// Get All Jobs
export const getJobs = () =>
  Api.get("/jobs");

// Get Single Job
export const getJob = (id) =>
  Api.get(`/jobs/${id}`);

// Update Job
export const updateJob = (id, data) =>
  Api.put(`/jobs/${id}`, data);

// Delete Job
export const deleteJob = (id) =>
  Api.delete(`/jobs/${id}`);