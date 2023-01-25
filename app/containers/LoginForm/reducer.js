/* eslint-disable no-case-declarations */
/*
 * LoginReducer
 *
 * The reducer takes care of our data. Using actions, we can
 * update our application state. To add a new action,
 * add it to the switch statement in the reducer function
 *
 */

import produce from 'immer';
import { LOGIN_FORM_ERROR, LOGIN_FORM_SUCCESS } from './constants';

// The initial state of the App
export const initialState = {
  user: {},
  errorMessage: '',
};

/* eslint-disable default-case, no-param-reassign */
const loginReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case LOGIN_FORM_SUCCESS:
        localStorage.setItem('user', JSON.stringify(action.response.profile));

        draft.user = action.response;
        draft.errorMessage = '';
        break;
      case LOGIN_FORM_ERROR:
        if (action.error === 'LOGIN_TO_MULTIPLE_DEVICE') {
          draft.errorMessage = 'LOGIN_TO_MULTIPLE_DEVICE';
        } else {
          draft.errorMessage = 'LOGIN_FAILT';
        }

        break;
      default:
        draft.user = initialState.user;
        draft.errorMessage = initialState.errorMessage;
    }
  });

export default loginReducer;
