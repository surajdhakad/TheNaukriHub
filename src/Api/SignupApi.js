import Api from "./Api";

export const registerUser = async (userData) => {
  try {
    const response = await Api.post("/auth/register", userData);

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