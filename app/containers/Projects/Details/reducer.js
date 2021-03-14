/* eslint-disable no-case-declarations */
/*
 * ProjectDetailsReducer
 *
 * The reducer takes care of our data. Using actions, we can
 * update our application state. To add a new action,
 * add it to the switch statement in the reducer function
 *
 */

import produce from 'immer';
import { ADD_PROJECT_CONTACT_SUCCESS } from './constants';

// The initial state of the App
export const initialState = {
  successMsg: false,
};

/* eslint-disable default-case, no-param-reassign */
const projectDetaisReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case ADD_PROJECT_CONTACT_SUCCESS:
        draft.successMsg = true;
        break;
      default:
        draft.successMsg = initialState.successMsg;
    }
  });

export default projectDetaisReducer;
