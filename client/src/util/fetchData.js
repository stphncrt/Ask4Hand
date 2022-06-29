import axios from "axios";

export const getData = (endpoint) => {
  return axios.get(`${process.env.BASE_SERVER_URL}/api${endpoint}`);
};

export const postData = (endpoint, data) => {
  return axios.post(`${process.env.BASE_SERVER_URL}/api${endpoint}`, data, {
    withCredentials: true,
  });
};

export const putData = (endpoint, data) => {
  return axios.put(`${process.env.BASE_SERVER_URL}/api${endpoint}`, data, {
    withCredentials: true,
  });
};
