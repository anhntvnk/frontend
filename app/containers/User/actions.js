/*
 * User Actions
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
  LOAD_USER,
  LOAD_USER_SUCCESS,
  LOAD_USER_ERROR,
  LOAD_PACKAGE_ORDER,
  LOAD_PACKAGE_ORDER_SUCCESS,
  LOAD_PACKAGE_ORDER_ERROR,
  RESET_FORM,
} from './constants';

export function loadUserProfile() {
  return {
    type: LOAD_USER,
  };
}

export function loadUserProfileSuccess(response) {
  return {
    type: LOAD_USER_SUCCESS,
    response,
  };
}

export function loadUserProfileError(error) {
  return {
    type: LOAD_USER_ERROR,
    error,
  };
}

export function setPackageOrder(data, isEdit) {
  return {
    type: LOAD_PACKAGE_ORDER,
    data,
    isEdit,
  };
}

export function setPackageOrderSuccess() {
  return {
    type: LOAD_PACKAGE_ORDER_SUCCESS,
  };
}

export function setPackageOrderError() {
  return {
    type: LOAD_PACKAGE_ORDER_ERROR,
  };
}

export function resetForm() {
  return {
    type: RESET_FORM,
  };
}
