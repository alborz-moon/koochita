export const tokenKey = "koochita_token";

export const getToken = () => {
  const token = localStorage.getItem(tokenKey);
  return token;
};

export const setToken = (token) => {
  localStorage.setItem(tokenKey, token);
};

export const removeToken = () => {
  localStorage.removeItem(tokenKey);
};
