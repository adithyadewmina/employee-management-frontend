import axios from "axios";

const API_BASE_URL = "http://localhost:5000/api";

export const fetchEmployees = async () => {
  const response = await axios.get(`${API_BASE_URL}/employees`);
  return response.data;
};

export const addEmployee = async (employee) => {
  const response = await axios.post(`${API_BASE_URL}/employees`, employee);
  return response.data;
};

export const deleteEmployee = async (id) => {
  const response = await axios.delete(`${API_BASE_URL}/employees/${id}`);
  return response.data;
};

export const updateEmployee = async (id, employee) => {
  const response = await axios.put(`${API_BASE_URL}/employees/${id}`, employee);
  return response.data;
};