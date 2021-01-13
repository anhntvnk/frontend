/* eslint-disable no-case-declarations */
/*
 * RegisterReducer
 *
 * The reducer takes care of our data. Using actions, we can
 * update our application state. To add a new action,
 * add it to the switch statement in the reducer function
 *
 */

import produce from 'immer';
import { REGISTER_FORM_ERROR, REGISTER_FORM_SUCCESS } from './constants';

// The initial state of the App
export const initialState = {
  user: {},
  errorMessage: '',
};

/* eslint-disable default-case, no-param-reassign */
const companyReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case REGISTER_FORM_SUCCESS:
        draft.user = action.response;
        draft.errorMessage = '';
        break;
      case REGISTER_FORM_ERROR:
        draft.errorMessage = 'Đăng nhập không thành công!';
        break;
      default:
        draft.user = initialState.user;
        draft.errorMessage = initialState.errorMessage;
    }
  });

export default companyReducer;
