import axios from "axios";

const API = `${import.meta.env.VITE_API_URL}/api/applications`;

export const applyJob = (applicationData) => {
  return axios.post(API, applicationData);
};

export const getUserApplications = (userId) => {
  return axios.get(`${API}/user/${userId}`);
};

export const getApplicantsByJob = (jobId) => {
  return axios.get(`${API}/job/${jobId}`);
};