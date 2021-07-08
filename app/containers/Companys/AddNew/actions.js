/*
 * Home Actions
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
  ADD_COMPANY,
  UPDATE_COMPANY,
  ADD_COMPANY_SUCCESS,
  ADD_COMPANY_ERROR,
  UPDATE_COMPANY_SUCCESS,
  UPDATE_COMPANY_ERROR,
  RESET_STATE,
} from './constants';

/**
 * Load the repositories, this action starts the request saga
 *
 * @return {object} An action object with a type of ADD_COMPANY
 */
export function addCompany(data) {
  return {
    type: ADD_COMPANY,
    data,
  };
}

export function updateCompany(data) {
  return {
    type: UPDATE_COMPANY,
    data,
  };
}

/**
 * Dispatched when the repositories are loaded by the request saga
 *
 * @param  {array} response The repository data
 *
 * @return {object}
 */
export function addCompanySuccess(response) {
  return {
    type: ADD_COMPANY_SUCCESS,
    response,
  };
}

/**
 * Dispatched when loading the repositories fails
 *
 * @param  {object} error The error
 *
 * @return {object}       An action object with a type of ADD_COMPANY_ERROR passing the error
 */
export function addCompanyError(error) {
  return {
    type: ADD_COMPANY_ERROR,
    error,
  };
}

/**
 * Dispatched when the repositories are loaded by the request saga
 *
 * @param  {array} response The repository data
 *
 * @return {object}
 */
export function updateCompanySuccess(response) {
  return {
    type: UPDATE_COMPANY_SUCCESS,
    response,
  };
}

/**
 * Dispatched when loading the repositories fails
 *
 * @param  {object} error The error
 *
 * @return {object}       An action object with a type of ADD_COMPANY_ERROR passing the error
 */
export function updateCompanyError(error) {
  return {
    type: UPDATE_COMPANY_ERROR,
    error,
  };
}

export function resetState() {
  return {
    type: RESET_STATE,
  };
}
