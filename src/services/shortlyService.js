import axios from 'axios';
const BASE_URL = 'http://localhost:5000';

function setToken(token, user, setUser) {
  localStorage.setItem('shortly', JSON.stringify({ token }));
  setUser({ ...user, token });
}

function getToken() {
  const auth = JSON.parse(localStorage.getItem('readOn'));
  return auth?.token;
}

function getConfig() {
  const token = getToken();
  if (!token) {
    return undefined;
  }
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  return config;
}

function signUp(body) {
  const promise = axios.post(`${BASE_URL}/signup`, body);
  return promise;
}

function login(body) {
  const promise = axios.post(`${BASE_URL}/signin`, body);
  return promise;
}

export { setToken, getToken, getConfig, signUp, login };
