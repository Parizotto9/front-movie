import { api } from "./api";
import { authStore } from "@/stores/auth";
import type { Form, RequestData, RegisterForm } from "@/Types/auth";

export async function loginReq(payload: Form) {
  const { data } = await api.post<RequestData>("/user/login", payload);
  console.log("data info:", data);
  return data;
}

export async function registerReq(payload: RegisterForm) {
  const { data } = await api.post<RequestData>("/user/register", payload);
  console.log("data info:", data);
  return data;
}

export async function logout() {
  //Create an api to expire token
  authStore.getState().logout();
}
