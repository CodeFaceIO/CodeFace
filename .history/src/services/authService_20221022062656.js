import axios from 'axios';

export const register = (username, email) => {
  return axios
    .post('/api/register', {
      username,
      email,
    })
    .then((response) => {
      console.log('Registered');
    });
};

export const login = (username, password) => {
  return axios
    .post('/api/login', {
      username,
      password,
    })
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem('user', JSON.stringify(response.data));
      }
      return response.data;
    });
};


export const logout  = () => {
    