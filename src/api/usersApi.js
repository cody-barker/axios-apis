import axiosInstance from "./axiosInstance";

// Get all users
export const getUsers = async () => {
  try {
    const response = await axiosInstance.get("/users");
    return response.data;
  } catch (error) {
    if (error.response && error.response.data.errors) {
      // Assuming API returns an array of errors in response to a GET request
      throw error.response.data.errors;
    } else {
      // Generic error if no validation errors are present
      throw [{ message: "An error occurred while fetching users" }];
    }
  }
};

//get users by id
export const getUserById = async (id) => {
  const response = await axiosInstance.get(`/users/${id}`);
  return response.data;
};

// Example API call with error handling
export const createUser = async (userData) => {
  try {
    const response = await axiosInstance.post("/users", userData);
    return response.data; // If successful, return the user data
  } catch (error) {
    // Check if the error response contains validation errors
    if (error.response && error.response.data.errors) {
      // Assuming the API returns an array of errors
      throw error.response.data.errors;
    } else {
      // Generic error if validation errors aren't present
      throw [{ message: "An error occurred while creating the user" }];
    }
  }
};

//update user by id with userData
export const updateUser = async (id, userData) => {
  const response = await axiosInstance.patch(`/users/${id}`, userData);
  return response.data;
};

//delete user by id
export const deleteUser = async (id) => {
  const response = await axiosInstance.delete(`/users/${id}`);
  return response.data;
};
