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
import {
  ADD_PROJECT_CONTACT_SUCCESS,
  ADD_TASK_SUCCESS,
  LOAD_LIST_USER_SUCCESS,
  LOAD_PROJECT_DETAILS_SUCCESS,
} from './constants';

// The initial state of the App
export const initialState = {
  successMsg: {},
  projectInfo: {},
  listUser: [],
};

/* eslint-disable default-case, no-param-reassign */
const projectDetaisReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case LOAD_PROJECT_DETAILS_SUCCESS:
        const { response } = action;
        draft.projectInfo = response;
        break;
      case ADD_PROJECT_CONTACT_SUCCESS:
        draft.successMsg = action.response;
        break;
      case LOAD_LIST_USER_SUCCESS:
        const { user, tasks } = action.response;
        const userWithTask = user.map(item => {
          const task = tasks.filter(t => item.id === t.user_id);
          return { ...item, task };
        });

        draft.listUser = userWithTask;
        break;
      case ADD_TASK_SUCCESS:
        draft.successMsg = action.response;
        break;
    }
  });

export default projectDetaisReducer;
