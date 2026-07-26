import Api from "./Api";

export const adminLogin = async (data) => {
  console.log("Admin Login Request:", data);

  const response = await Api.post("/admin/login", data);

  console.log("Admin Login Response:", response);

  return response;
};

export const getAdminProfile = async () => {
  const response = await Api.get("/admin/profile");

  console.log("Admin Profile:", response);

  return response;
};