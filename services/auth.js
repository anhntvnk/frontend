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
