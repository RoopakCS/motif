import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:3000/api" });

API.interceptors.request.use((req) => {
	const token = localStorage.getItem("token");
	if (token) req.headers.Authorization = `Bearer ${token}`;
	return req;
});

export const registerUser = (formData) => API.post("/auth/register", formData);
export const loginUser = (formData) => API.post("/auth/login", formData);

export const createProgression = (data) => API.post("/progressions/", data);
export const updateProgression = (id, data) =>
	API.put(`/progressions/${id}`, data);
export const getUserProgression = () => API.get(`/progressions/`);
export const deleteProgression = (id) => API.delete(`/progressions/${id}`);
