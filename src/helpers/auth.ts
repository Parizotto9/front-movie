const TOKEN_KEY = "app_token";

const getToken = () => {
  return localStorage.getItem(TOKEN_KEY);
};

const setToken = (token: string) => {
  localStorage.setItem(TOKEN_KEY, token);
};
const deleteToken = () => {
  localStorage.removeItem(TOKEN_KEY);
};
export { getToken, setToken, deleteToken };
