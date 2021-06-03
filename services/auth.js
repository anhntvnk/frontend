// return the token from the session storage
export const getToken = () => sessionStorage.getItem('token') || null;

export const getUserId = () => sessionStorage.getItem('userId') || null;

export const getPackageOrder = () =>
  sessionStorage.getItem('packageOrder') || null;

export const isLoggedIn = () => !!getToken();
// remove the token and user from the session storage
export const removeUserSession = () => {
  sessionStorage.removeItem('token');
  sessionStorage.removeItem('userId');
  sessionStorage.removeItem('packageOrder');
  localStorage.removeItem('user');
  localStorage.removeItem('lang');
};

// set the token and user from the session storage
export const setUserSession = (token, userId, packageOrder) => {
  sessionStorage.setItem('token', token);
  sessionStorage.setItem('userId', userId);
  sessionStorage.setItem('packageOrder', packageOrder);
};
