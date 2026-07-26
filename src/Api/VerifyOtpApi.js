import Api from "./Api";

export const verifyOTP = async (data) => {
  try {

    const response = await Api.post(
      "/auth/verify-otp",
      data
    );

    return response.data;

  } catch (error) {

    throw error.response?.data || error;

  }
};