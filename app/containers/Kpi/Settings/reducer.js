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
import { LOAD_KPI_SUCCESS, UPDATE_KPI_SUCCESS } from './constants';

// The initial state of the App
export const initialState = {
  kpis: [],
  successMsg: false,
};

/* eslint-disable default-case, no-param-reassign */
const userReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case LOAD_KPI_SUCCESS:
        draft.kpis = action.response;
        break;
      case UPDATE_KPI_SUCCESS:
        draft.kpis = action.response;
        draft.successMsg = true;
        break;
      default:
        draft.kpis = initialState.kpis;
        draft.successMsg = initialState.successMsg;
    }
  });

export default userReducer;
