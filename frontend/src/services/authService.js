import axios from "axios";

const API = `${import.meta.env.VITE_API_URL}/api/auth`;

export const registerUser = async (userData) => {
  const response = await axios.post(`${API}/register`, userData);
  return response.data;
};

export const loginUser = async (userData) => {
  const response = await axios.post(`${API}/login`, userData);
  return response.data;
};

export const getProfile = (id) => {
  return axios.get(`${API}/profile/${id}`);
};

export const uploadResume = (id, formData) => {
  return axios.post(`${API}/upload-resume/${id}`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};