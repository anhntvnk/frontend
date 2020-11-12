/* eslint-disable no-case-declarations */
/*
 * ProjectsReducer
 *
 * The reducer takes care of our data. Using actions, we can
 * update our application state. To add a new action,
 * add it to the switch statement in the reducer function
 *
 */

import produce from 'immer';
import { LOAD_PROJECTS_SUCCESS } from './constants';

// The initial state of the App
export const initialState = {
  project: [],
};

/* eslint-disable default-case, no-param-reassign */
const projectReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case LOAD_PROJECTS_SUCCESS:
        const { response } = action;
        draft.project = response;
        break;
    }
  });

export default projectReducer;
