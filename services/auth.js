import instance from 'axios';
import API from '../app/constants/apis';

const axiosMethod = {
  baseURL: API.BASE_URL,
  timeout: 5000,
  validateStatus(status) {
    return (status >= 200 && status < 300) || status === 403; // default
  },
  headers: { 'Content-Type': 'application/json' },
};

export const postLogin = (url, props) =>
  new Promise((resolve, reject) => {
    instance
      .create(axiosMethod)
      .post(url, props)
      .then(res => {
        const {
          data,
          data: { id, userId },
        } = res;
        console.log(data);
        const paramOrder = {
          team_id: data.team_id,
          active: true,
          expire_date: { neq: null },
        };
        const order = instance
          .create(axiosMethod)
          .get(`order/findOne`, paramOrder)
          .then(resp => {
            resolve(resp);
          });

        console.log(order, 'order===');
        setUserSession(id, userId);
        resolve(data);
      })
      .catch(e => reject(e));
  }).catch(e => e.response);

// return the token from the session storage
export const getToken = () => sessionStorage.getItem('token') || null;

export const getUserId = () => sessionStorage.getItem('userId') || null;

export const isLoggedIn = () => !!getToken();
// remove the token and user from the session storage
export const removeUserSession = () => {
  sessionStorage.removeItem('token');
  sessionStorage.removeItem('userId');
};

// set the token and user from the session storage
export const setUserSession = (token, userId) => {
  sessionStorage.setItem('token', token);
  sessionStorage.setItem('userId', userId);
};
