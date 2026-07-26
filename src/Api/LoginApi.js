import Api from "./Api";

// ===============================
// Login User API
// ===============================

export const loginUser = async (loginData) => {
  try {

    const response = await Api.post(
      "/auth/login",
      loginData
    );

    return response.data;

  } catch (error) {

    if (error.response) {
      throw error.response.data;
    }

    throw {
      success: false,
      message: "Server is not responding",
    };

  }
};