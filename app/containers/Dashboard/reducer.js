/* eslint-disable no-case-declarations */
/*
 * CompanysReducer
 *
 * The reducer takes care of our data. Using actions, we can
 * update our application state. To add a new action,
 * add it to the switch statement in the reducer function
 *
 */

import produce from 'immer';
import { LOAD_PROJECTS_FOLLOW_SUCCESS } from './constants';

// The initial state of the App
export const initialState = {
  projectFollows: [],
  companyFollows: [],
};

/* eslint-disable default-case, no-param-reassign */
const companyReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case LOAD_PROJECTS_FOLLOW_SUCCESS:
        const { response } = action;
        draft.projectFollows = response.projectFollows;
        draft.companyFollows = response.companyFollows;
        break;
    }
  });

export default companyReducer;
