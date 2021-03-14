/*
 * ProjectDetails Actions
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
  LOAD_PROJECT_DETAILS,
  LOAD_PROJECT_DETAILS_SUCCESS,
  LOAD_PROJECT_DETAILS_ERROR,
  ADD_PROJECT_CONTACT,
  ADD_PROJECT_CONTACT_SUCCESS,
  ADD_PROJECT_CONTACT_ERROR,
} from './constants';

/**
 * Load the repositories, this action starts the request saga
 *
 * @return {object} An action object with a type of LOAD_PROJECT_DETAILS
 */
export function loadProjectDetails(projectID) {
  return {
    type: LOAD_PROJECT_DETAILS,
    projectID,
  };
}

/**
 * Dispatched when the repositories are loaded by the request saga
 *
 * @param  {array} repos The repository data
 *
 * @return {object}
 */
export function loadProjectDetailsSuccess(response) {
  return {
    type: LOAD_PROJECT_DETAILS_SUCCESS,
    response,
  };
}

/**
 * Dispatched when loading the repositories fails
 *
 * @param  {object} error The error
 *
 * @return {object}       An action object with a type of LOAD_PROJECT_DETAILS_ERROR passing the error
 */
export function loadProjectDetailsError(error) {
  return {
    type: LOAD_PROJECT_DETAILS_ERROR,
    error,
  };
}

/**
 * Load the repositories, this action starts the request saga
 *
 * @return {object} An action object with a type of LOAD_PROJECT_DETAILS
 */
export function addProjectContact(data) {
  return {
    type: ADD_PROJECT_CONTACT,
    data,
  };
}

/**
 * Dispatched when the repositories are loaded by the request saga
 *
 * @param  {array} repos The repository data
 *
 * @return {object}
 */
export function addProjectContactSuccess(response) {
  return {
    type: ADD_PROJECT_CONTACT_SUCCESS,
    response,
  };
}

/**
 * Dispatched when loading the repositories fails
 *
 * @param  {object} error The error
 *
 * @return {object}       An action object with a type of LOAD_PROJECT_DETAILS_ERROR passing the error
 */
export function addProjectContactError(error) {
  return {
    type: ADD_PROJECT_CONTACT_ERROR,
    error,
  };
}
