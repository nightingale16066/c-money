export const setToken = (token) => {
  localStorage.setItem('token', token);
};

export const getToken = () => {
  if (localStorage.getItem('token')) {
    return localStorage.getItem('token');
  }
};

export const deleteToken = () => {
  localStorage.removeItem('token');
};
