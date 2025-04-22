import axios from "axios";

export const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

// Create axios instance without hardcoded headers
export const api = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        "Content-Type": "application/json"
    }
});

// Add a request interceptor
api.interceptors.request.use(
    (config) => {
        const jwt = localStorage.getItem("jwt");
        if (jwt) {
            config.headers["Authorization"] = `Bearer ${jwt}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);
