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
  ADD_PROJECTS,
  ADD_PROJECTS_SUCCESS,
  ADD_PROJECTS_ERROR,
  RESET_STATE,
} from './constants';

/**
 * Load the repositories, this action starts the request saga
 *
 * @return {object} An action object with a type of ADD_PROJECTS
 */
export function addProject(data) {
  return {
    type: ADD_PROJECTS,
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
export function addProjectSuccess(response) {
  return {
    type: ADD_PROJECTS_SUCCESS,
    response,
  };
}

/**
 * Dispatched when loading the repositories fails
 *
 * @param  {object} error The error
 *
 * @return {object}       An action object with a type of ADD_PROJECTS_ERROR passing the error
 */
export function addProjectError(error) {
  return {
    type: ADD_PROJECTS_ERROR,
    error,
  };
}

/**
 * Dispatched reset state
 *
 * @return {object}       An action object with a type of RESET_STATE passing the error
 */
export function resetState() {
  return {
    type: RESET_STATE,
  };
}
