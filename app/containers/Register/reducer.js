/* eslint-disable no-case-declarations */
/*
 * RegisterReducer
 *
 * The reducer takes care of our data. Using actions, we can
 * update our application state. To add a new action,
 * add it to the switch statement in the reducer function
 *
 */

import produce from 'immer';
import { get as _get } from 'lodash';
import {
  REGISTER_FORM,
  REGISTER_FORM_ERROR,
  REGISTER_FORM_SUCCESS,
} from './constants';

// The initial state of the App
export const initialState = {
  isLoading: false,
  statusResponse: '',
};

/* eslint-disable default-case, no-param-reassign */
const companyReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case REGISTER_FORM:
        draft.statusResponse = '';
        draft.isLoading = true;
        break;
      case REGISTER_FORM_SUCCESS:
        draft.statusResponse = 'success';
        draft.isLoading = false;
        break;
      case REGISTER_FORM_ERROR:
        const { error } = action;
        const errorMess = _get(error, 'email', '');

        if (errorMess) {
          draft.statusResponse = 'email';
        } else {
          draft.statusResponse = 'error';
        }

        draft.isLoading = false;
        break;
      default:
        draft.isLoading = initialState.isLoading;
        draft.statusResponse = initialState.statusResponse;
    }
  });

export default companyReducer;
