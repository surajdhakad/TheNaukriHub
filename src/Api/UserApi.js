import Api from "./Api";

// ==============================
// Get All Users
// ==============================
export const getUsers = async () => {
  const response = await Api.get("/users");
  return response.data;
};

// ==============================
// Get All Students
// ==============================
export const getAllStudents = async () => {
  const response = await Api.get("/users");
  return response.data;
};

// ==============================
// Get User By Id
// ==============================
export const getUserById = async (id) => {
  const response = await Api.get(`/users/${id}`);
  return response.data;
};

// ==============================
// Update User
// ==============================
export const updateUser = async (id, data) => {
  const response = await Api.put(`/users/${id}`, data);
  return response.data;
};

// ==============================
// Delete User
// ==============================
export const deleteStudent = async (id) => {
  const response = await Api.delete(`/users/${id}`);
  return response.data;
};