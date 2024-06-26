import axios from 'axios';
import API from 'constants/apis';
import moment from 'moment';

// return the token from the session storage
export const getToken = () => localStorage.getItem('token') || null;

export const getUserId = () => localStorage.getItem('userId') || null;

export const getPackageOrder = () =>
  localStorage.getItem('packageOrder') || null;

export const getExpireDate = () => localStorage.getItem('expireDate') || null;

export const isLoggedIn = () => !!getToken();
// remove the token and user from the session storage
export const removeUserSession = () => {
  localStorage.clear();
};

// set the token and user from the session storage
export const setUserSession = (token, userId, packageOrder, expireDate) => {
  localStorage.setItem('token', token);
  localStorage.setItem('userId', userId);
  localStorage.setItem('packageOrder', packageOrder);
  localStorage.setItem('expireDate', expireDate);

  const formatTime = 'DD MMM YYYY hh:mm:ss';
  localStorage.setItem(
    'loginTime',
    moment()
      .format(formatTime)
      .valueOf(),
  );

  localStorage.setItem(
    'after6Hour',
    moment()
      .add(1, 'days')
      .format(formatTime)
      .valueOf(),
  );
};

export const logoutAccount = () => {
  axios
    .create({
      baseURL: API.BASE_URL,
      timeout: 5000,
      validateStatus(status) {
        return (status >= 200 && status < 300) || status === 403; // default
      },
      headers: { 'Content-Type': 'application/json' },
    })
    .post(`${API.BASE_URL}/user/logout?access_token=${getToken()}`);
  removeUserSession();
  // history.push('/');
};
