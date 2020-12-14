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
  LOAD_PROJECTS_FOLLOW,
  LOAD_PROJECTS_FOLLOW_SUCCESS,
  LOAD_PROJECTS_FOLLOW_ERROR,
} from './constants';

/**
 * Load the repositories, this action starts the request saga
 *
 * @return {object} An action object with a type of LOAD_PROJECTS
 */
export function loadProjectsFollow() {
  return {
    type: LOAD_PROJECTS_FOLLOW,
  };
}

/**
 * Dispatched when the repositories are loaded by the request saga
 *
 * @param  {array} repos The repository data
 *
 * @return {object}
 */
export function loadProjectsFollowSuccess(response) {
  return {
    type: LOAD_PROJECTS_FOLLOW_SUCCESS,
    response,
  };
}

/**
 * Dispatched when loading the repositories fails
 *
 * @param  {object} error The error
 *
 * @return {object}       An action object with a type of LOAD_PROJECTS_ERROR passing the error
 */
export function loadProjectsFollowError(error) {
  return {
    type: LOAD_PROJECTS_FOLLOW_ERROR,
    error,
  };
}
