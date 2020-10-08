import instance from 'axios';
// import { get } from 'lodash';

export const postLogin = (url, props) =>
  new Promise((resolve, reject) => {
    instance
      .create({
        baseURL: 'http://vnk.vn/api',
        timeout: 5000,
        validateStatus(status) {
          return (status >= 200 && status < 300) || status === 403; // default
        },
        headers: { 'Content-Type': 'application/json' },
      })
      .post(url, props)
      .then(res => {
        resolve(res.data);
      })
      .catch(e => reject(e));
  });

// return the user data from the session storage
export const getUser = () => {
  const userStr = sessionStorage.getItem('user');
  if (userStr) return JSON.parse(userStr);
  return null;
};

// return the token from the session storage
export const getToken = () => sessionStorage.getItem('token') || null;

// remove the token and user from the session storage
export const removeUserSession = () => {
  sessionStorage.removeItem('token');
  sessionStorage.removeItem('user');
};

// set the token and user from the session storage
export const setUserSession = (token, user) => {
  sessionStorage.setItem('token', token);
  sessionStorage.setItem('user', JSON.stringify(user));
};
