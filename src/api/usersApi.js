import axiosInstance from "./axiosInstance";

//get users
export const getUsers = async () => {
  const response = await axiosInstance.get("/users");
  return response.data;
};

//get users by id
export const getUserById = async (id) => {
  const response = await axiosInstance.get(`/users/${id}`);
  return response.data;
};

//post user with userData
export const createUser = async (userData) => {
  const response = await axiosInstance.post("/users", userData);
  return response.data;
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
