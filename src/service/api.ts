import axios from "axios";
import { authStore } from "@/stores/auth";
import { getToken } from "../helpers/auth";
// import { redirect } from "@tanstack/react-router";

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL ?? "http://localhost:3333",
  withCredentials: false,
});

api.interceptors.request.use((config) => {
  const token = getToken();
  if (token) {
    config.headers = config.headers ?? {};
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error?.response?.status === 401) {
      authStore.getState().logout();
      // redirect({ redirecting with tanstack
      //   to: "/login",
      //   throw: true,
      // });
      return Promise.reject(error); // propagate error
    }
  }
);
