import instance from 'axios';

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
        const {
          data,
          data: { id, userId },
        } = res;

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
