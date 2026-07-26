import Api from "./Api";

// ==============================
// Dashboard Data
// ==============================
export const getDashboard = () => {
  return Api.get("/dashboard");
};