import axios from "axios";

const API = "http://localhost:5000/api/jobs";

export const getAllJobs = (
  search = "",
  jobType = "",
  location = ""
) => {
  return axios.get(
    `${API}?search=${search}&jobType=${jobType}&location=${location}`
  );
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