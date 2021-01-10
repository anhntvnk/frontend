/* eslint-disable no-case-declarations */
/*
 * DashboardReducer
 *
 * The reducer takes care of our data. Using actions, we can
 * update our application state. To add a new action,
 * add it to the switch statement in the reducer function
 *
 */

import produce from 'immer';
import { LOAD_DATA_DASHBOARD_SUCCESS } from './constants';

// The initial state of the App
export const initialState = {
  dashboard: [],
};

/* eslint-disable default-case, no-param-reassign */
const dashboardReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case LOAD_DATA_DASHBOARD_SUCCESS:
        const { response } = action;
        draft.dashboard = response.dashboard;
        break;
    }
  });

export default dashboardReducer;
