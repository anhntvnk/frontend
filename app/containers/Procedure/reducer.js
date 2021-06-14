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
import {
  CHANGE_STATE_PROCEDURE_ERROR,
  CHANGE_STATE_PROCEDURE_SUCCESS,
} from './constants';

// The initial state of the App
export const initialState = {
  company: [],
  successMessage: false,
  errorMessage: '',
};

/* eslint-disable default-case, no-param-reassign */
const companyReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case CHANGE_STATE_PROCEDURE_SUCCESS:
        draft.successMessage = true;
        break;
      case CHANGE_STATE_PROCEDURE_ERROR:
        draft.errorMessage = 'Đã có lỗi xảy ra !';
        break;
      default:
        draft.company = initialState.company;
        draft.successMessage = initialState.successMessage;
        draft.errorMessage = initialState.errorMessage;
    }
  });

export default companyReducer;
