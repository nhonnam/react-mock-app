import axios from "../utils/axiosCustomize";

const postCreateNewUser = (email, password, username, role, image) => {
  const data = new URLSearchParams();
  data.append("email", email);
  data.append("password", password);
  data.append("username", username);
  data.append("role", role);
  data.append("userImage", image);
  return axios.post("react-mock-app/participants", data);
};

const getAllUsers = () => {
  return axios.get("react-mock-app/participants");
};

const putUpdateUser = (id, username, role, image) => {
  const data = new URLSearchParams();
  data.append("username", username);
  data.append("role", role);
  data.append("userImage", image);
  return axios.put(`react-mock-app/participants/${id}`, data);
};

const deleteUser = (userId) => {
  // return axios.delete("react-mock-app/participants/", { id: userId });
  // return axios.delete("react-mock-app/participants", { data: { id: userId } });
  return axios.delete(`react-mock-app/participants/${userId}`);
};

const getAllUsersWithPaginate = (page, limit) => {
  return axios.get(`react-mock-app/participants?page=${page}&limit=${limit}`);
};

export {
  postCreateNewUser,
  getAllUsers,
  putUpdateUser,
  deleteUser,
  getAllUsersWithPaginate,
};
