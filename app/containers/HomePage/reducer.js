/* eslint-disable no-case-declarations */
/*
 * homeReducer
 *
 * The reducer takes care of our data. Using actions, we can
 * update our application state. To add a new action,
 * add it to the switch statement in the reducer function
 *
 */

import produce from 'immer';
import { LOAD_USER_SUCCESS } from './constants';

// The initial state of the App
export const initialState = {
  userProfile: [],
};

/* eslint-disable default-case, no-param-reassign */
const homeReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case LOAD_USER_SUCCESS:
        draft.userProfile = action.response;
        break;
    }
  });

export default homeReducer;
