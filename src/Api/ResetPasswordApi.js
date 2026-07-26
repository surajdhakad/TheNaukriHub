import Api from "./Api";

export const resetPassword = async (data) => {
  try {

    const response = await Api.post(
      "/auth/reset-password",
      data
    );

    return response.data;

  } catch (error) {

    throw error.response?.data || error;

  }
};