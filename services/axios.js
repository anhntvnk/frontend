import instance from 'axios';

export const postLogin = (url, props) =>
  new Promise((resolve, reject) => {
    instance
      .create({
        baseURL: 'http://vnk.vn:81/api',
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
