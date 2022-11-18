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

export { postCreateNewUser, getAllUsers, putUpdateUser };
