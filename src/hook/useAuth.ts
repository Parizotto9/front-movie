import { useMutation } from "@tanstack/react-query";
import { loginReq, registerReq } from "@/service/auth";
import { authStore } from "@/stores/auth";
import type { RequestData } from "@/Types/auth";

export function useLogin() {
  const setToken = authStore((s) => s.setToken);
  const setUser = authStore((s) => s.setUser);

  return useMutation({
    mutationFn: loginReq,
    onSuccess: (data: RequestData) => {
      setToken(data.token);
      setUser({ id: data.id, email: data.email, name: data.name });
    },
  });
}

export function useRegister() {
  const setToken = authStore((s) => s.setToken);
  const setUser = authStore((s) => s.setUser);

  return useMutation({
    mutationFn: registerReq,
    onSuccess: (data: RequestData) => {
      setToken(data.token);
      setUser({ id: data.id, email: data.email, name: data.name });
    }, // payload: { name, email, password }
  });
}
