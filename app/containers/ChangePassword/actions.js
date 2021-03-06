/*
 * ChangePassword Actions
 *
 * Actions change things in your application
 * Since this boilerplate uses a uni-directional data flow, specifically redux,
 * we have these actions which are the only way your application interacts with
 * your application state. This guarantees that your state is up to date and nobody
 * messes it up weirdly somewhere.
 *
 * To add a new Action:
 * 1) Import your constant
 * 2) Add a function like this:
 *    export function yourAction(var) {
 *        return { type: YOUR_ACTION_CONSTANT, var: var }
 *    }
 */

import {
  CHANGE_PASSWORD,
  CHANGE_PASSWORD_SUCCESS,
  CHANGE_PASSWORD_ERROR,
} from './constants';

export function changePassword(data) {
  return {
    type: CHANGE_PASSWORD,
    data,
  };
}

export function changePasswordSuccess(response) {
  return {
    type: CHANGE_PASSWORD_SUCCESS,
    response,
  };
}

export function changePasswordError(error) {
  return {
    type: CHANGE_PASSWORD_ERROR,
    error,
  };
}
