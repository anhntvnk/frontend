/*
 * Notes day Actions
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
  GET_NOTES,
  GET_NOTES_SUCCESS,
  GET_NOTES_ERROR,
  UPDATE_NOTES,
} from './constants';

export function getNotes() {
  return {
    type: GET_NOTES,
  };
}

export function getNotesSuccess(response) {
  return {
    type: GET_NOTES_SUCCESS,
    response,
  };
}

export function getNotesError(error) {
  return {
    type: GET_NOTES_ERROR,
    error,
  };
}

export function updateNotes(data) {
  return {
    type: UPDATE_NOTES,
    data,
  };
}

export function updateNotesSuccess(response) {
  return {
    type: GET_NOTES_SUCCESS,
    response,
  };
}

export function updateNotesErrors(error) {
  return {
    type: GET_NOTES_ERROR,
    error,
  };
}

/**
 * Dispatched reset state
 *
 * @return {object}       An action object with a type of RESET_STATE passing the error
 */
// export function resetState() {
//   return {
//     type: RESET_STATE,
//   };
// }
