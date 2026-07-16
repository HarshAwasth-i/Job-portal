import axios from "axios";

const API = "http://localhost:5000/api/jobs";

export const getAllJobs = () => {
  return axios.get(API);
};

export const getJobById = (id) => {
  return axios.get(`${API}/${id}`);
};

export const createJob = (jobData) => {
  return axios.post(API, jobData);
};

export const updateJob = (id, jobData) => {
  return axios.put(`${API}/${id}`, jobData);
};

export const deleteJob = (id) => {
  return axios.delete(`${API}/${id}`);
};