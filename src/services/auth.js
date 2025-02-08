import api from "./api";

// Register User
export const registerUser = async (userData) => {
  return api.post("/auth/register", userData);
};

// Login User
export const loginUser = async (credentials) => {
  const response = await api.post("/auth/login", credentials);
  localStorage.setItem("token", response.data.token);
  localStorage.setItem("userName", response.data.user.userName);
  localStorage.setItem("createdBy", response.data.user.id);
  return response.data;
};

// Get User Profile
export const getUserProfile = async () => {
  return api.get("/auth/profile");
};

// Logout User
export const logoutUser = () => {
  localStorage.removeItem("token");
};
