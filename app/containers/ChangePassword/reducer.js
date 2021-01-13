/* eslint-disable no-case-declarations */
/*
 * ChangePassword Reducer
 *
 * The reducer takes care of our data. Using actions, we can
 * update our application state. To add a new action,
 * add it to the switch statement in the reducer function
 *
 */

import produce from 'immer';
import { CHANGE_PASSWORD_ERROR, CHANGE_PASSWORD_SUCCESS } from './constants';

// The initial state of the App
export const initialState = {
  successMessage: '',
  errorMessage: '',
};

/* eslint-disable default-case, no-param-reassign */
const companyReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case CHANGE_PASSWORD_SUCCESS:
        draft.successMessage =
          'Thay đổi mật khẩu thành công, đăng nhập lại với mật khẩu mới để tiếp tục sử dụng!';
        break;
      case CHANGE_PASSWORD_ERROR:
        draft.errorMessage = action.response;
        break;
      default:
        draft.successMessage = initialState.successMessage;
        draft.errorMessage = initialState.errorMessage;
    }
  });

export default companyReducer;
