import Api from "./Api";

// Send OTP
export const sendOTP = async (email) => {
  try {
    const response = await Api.post("/auth/forgot-password", {
      email,
    });

    return response.data;
  } catch (error) {
    throw error.response?.data || error;
  }
};

// Verify OTP
export const verifyOTP = async (data) => {
  try {
    const response = await Api.post("/auth/verify-otp", data);

    return response.data;
  } catch (error) {
    throw error.response?.data || error;
  }
};

// Reset Password
export const resetPassword = async (data) => {
  try {
    const response = await Api.post("/auth/reset-password", data);

    return response.data;
  } catch (error) {
    throw error.response?.data || error;
  }
};