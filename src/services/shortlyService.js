import axios from 'axios';
const BASE_URL = 'http://localhost:5000';

function setToken(token, user, setUser) {
  localStorage.setItem('shortly', JSON.stringify({ token }));
  setUser({ ...user, token });
}

function getToken() {
  const auth = JSON.parse(localStorage.getItem('shortly'));
  return auth?.token;
}

function deleteToken() {
  localStorage.removeItem('shortly');
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

function getUserInfo() {
  const config = getConfig();
  const promise = axios.get(`${BASE_URL}/users/me`, config);
  return promise;
}

function shortenURL(body) {
  const config = getConfig();
  const promise = axios.post(`${BASE_URL}/urls/shorten`, body, config);
  return promise;
}

function getRankings() {
  const promise = axios.get(`${BASE_URL}/urls/ranking`);
  return promise;
}

function deleteURL(id) {
  const config = getConfig();
  const promise = axios.delete(`${BASE_URL}/urls/${id}`, config);
  return promise;
}

export {
  setToken,
  getToken,
  deleteToken,
  signUp,
  login,
  getUserInfo,
  shortenURL,
  getRankings,
  deleteURL,
};
