/* eslint-disable no-case-declarations */
/*
 * NotesReducer
 *
 * The reducer takes care of our data. Using actions, we can
 * update our application state. To add a new action,
 * add it to the switch statement in the reducer function
 *
 */

import produce from 'immer';
import { GET_REPORTS_SUCCESS } from './constants';

// The initial state of the App
export const initialState = {
  reports: [],
  successMsg: false,
};

/* eslint-disable default-case, no-param-reassign */
const notesReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case GET_REPORTS_SUCCESS:
        const {
          costStat: { stat: costStatData },
          countStat: { stat: countStatData },
        } = action.response;
        draft.reports = { costStat: costStatData, countStat: countStatData };
        break;
      default:
        draft.reports = initialState.reports;
        draft.successMsg = initialState.successMsg;
    }
  });

export default notesReducer;
