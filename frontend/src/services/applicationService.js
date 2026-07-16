import axios from "axios";

const API = "http://localhost:5000/api/applications";

export const applyJob = (applicationData) => {
  return axios.post(API, applicationData);
};

export const getUserApplications = (userId) => {
  return axios.get(`${API}/user/${userId}`);
};