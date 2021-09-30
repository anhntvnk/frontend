/* eslint-disable no-case-declarations */
/*
 * KPIsReducer
 *
 * The reducer takes care of our data. Using actions, we can
 * update our application state. To add a new action,
 * add it to the switch statement in the reducer function
 *
 */

import produce from 'immer';
import moment from 'moment';
import {
  LOAD_KPI_SUCCESS,
  LOAD_ALL_KPI_SUCCESS,
  LOAD_USER_SUCCESS,
} from './constants';

// The initial state of the App
export const initialState = {
  kpis: [],
  kpisExport: [],
  user: {},
};

/* eslint-disable default-case, no-param-reassign */
const kpisReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case LOAD_KPI_SUCCESS:
        draft.kpis = action.response;
        break;
      case LOAD_USER_SUCCESS:
        draft.user = action.response;
        break;
      case LOAD_ALL_KPI_SUCCESS:
        const data = action.response.map(item => ({
          ...item,
          created: moment(item.created).format('DD/MM/YYYY'),
        }));
        draft.kpisExport = data;
        break;
    }
  });

export default kpisReducer;
