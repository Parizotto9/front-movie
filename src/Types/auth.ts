export type Form = { email: string; password: string };

export type RegisterForm = { name: string; email: string; password: string };

export type RequestData = {
  token: string;
  id: string;
  name: string;
  email: string;
};

export type User = {
  id: string;
  name: string;
  email: string;
};

export type AuthState = {
  token: string | null;
  user: User | null;
  setToken: (t: string | null) => void;
  setUser: (t: User | null) => void;
  logout: () => void;
};
