/*
 * RegisterForm Actions
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
  REGISTER_FORM,
  REGISTER_FORM_SUCCESS,
  REGISTER_FORM_ERROR,
} from './constants';

export function registerAccount(data) {
  return {
    type: REGISTER_FORM,
    data,
  };
}

export function registerAccountSuccess(response) {
  return {
    type: REGISTER_FORM_SUCCESS,
    response,
  };
}

export function registerAccountError(error) {
  return {
    type: REGISTER_FORM_ERROR,
    error,
  };
}
