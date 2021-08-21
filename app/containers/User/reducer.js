/* eslint-disable no-case-declarations */
/*
 * UserReducer
 *
 * The reducer takes care of our data. Using actions, we can
 * update our application state. To add a new action,
 * add it to the switch statement in the reducer function
 *
 */

import produce from 'immer';
import {
  LOAD_LIST_USER_SUCCESS,
  LOAD_PACKAGE_ORDER_SUCCESS,
  LOAD_USER_SUCCESS,
  RESET_FORM,
} from './constants';

// The initial state of the App
export const initialState = {
  userProfile: [],
  listUser: [],
  isSuccess: false,
};

/* eslint-disable default-case, no-param-reassign */
const userReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case LOAD_USER_SUCCESS:
        draft.userProfile = action.response;
        break;
      case LOAD_LIST_USER_SUCCESS:
        const { user, tasks } = action.response;
        const userWithTask = user.map(item => {
          const task = tasks.filter(t => item.id === t.user_id);
          return { ...item, task };
        });

        draft.listUser = userWithTask;
        break;
      case LOAD_PACKAGE_ORDER_SUCCESS:
        draft.isSuccess = true;
        break;
      case RESET_FORM:
        draft.isSuccess = false;
    }
  });

export default userReducer;
