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
import { LOAD_PROJECT_DETAILS_SUCCESS } from './constants';

// The initial state of the App
export const initialState = {
  projectDetails: [],
};

/* eslint-disable default-case, no-param-reassign */
const projectDetaisReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case LOAD_PROJECT_DETAILS_SUCCESS:
        const { response } = action;
        draft.projectDetails = response;
        break;
    }
  });

export default projectDetaisReducer;
