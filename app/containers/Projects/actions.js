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
  LOAD_PROJECTS,
  LOAD_PROJECTS_SUCCESS,
  LOAD_PROJECTS_ERROR,
  CHANGE_FOLLOW,
  CHANGE_FOLLOW_SUCCESS,
  UN_FOLLOW,
  UN_FOLLOW_SUCCESS,
  LOADING,
} from './constants';

/**
 * Load the repositories, this action starts the request saga
 *
 * @return {object} An action object with a type of LOAD_PROJECTS
 */
export function loadProjects() {
  return {
    type: LOAD_PROJECTS,
  };
}

/**
 * Dispatched when the repositories are loaded by the request saga
 *
 * @param  {array} repos The repository data
 *
 * @return {object}
 */
export function loadProjectSuccess(response) {
  return {
    type: LOAD_PROJECTS_SUCCESS,
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
export function loadProjectsError(error) {
  return {
    type: LOAD_PROJECTS_ERROR,
    error,
  };
}

/**
 * Dispatched when loading the repositories fails
 *
 * @param  {object} error The error
 *
 * @return {object}       An action object with a type of CHANGE_FOLLOW passing the error
 */
export function changeFollow(data) {
  return {
    type: CHANGE_FOLLOW,
    data,
  };
}

/**
 * Dispatched when loading the repositories fails
 *
 * @param  {object} error The error
 *
 * @return {object}       An action object with a type of UN_FOLLOW passing the error
 */
export function unFollow(id) {
  return {
    type: UN_FOLLOW,
    id,
  };
}

/**
 * Dispatched when the repositories are loaded by the request saga
 *
 * @param  {array} repos The repository data
 *
 * @return {object}
 */
export function changeFollowSuccess(response) {
  return {
    type: CHANGE_FOLLOW_SUCCESS,
    response,
  };
}

/**
 * Dispatched when the repositories are loaded by the request saga
 *
 * @param  {array} repos The repository data
 *
 * @return {object}
 */
export function unFollowSuccess(response) {
  return {
    type: UN_FOLLOW_SUCCESS,
    response,
  };
}

/**
 * Load the repositories, this action starts the request saga
 *
 * @return {object} An action object with a type of LOAD_PROJECTS
 */
export function reLoading(isLoading) {
  return {
    type: LOADING,
    isLoading,
  };
}
