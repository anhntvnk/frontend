/*
 * Procedure Actions
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
  CHANGE_STATE_PROCEDURE,
  CHANGE_STATE_PROCEDURE_SUCCESS,
  CHANGE_STATE_PROCEDURE_ERROR,
} from './constants';

export function updateStateProcedure(data) {
  return {
    type: CHANGE_STATE_PROCEDURE,
    data,
  };
}

export function updateStateProcedureSuccess(response) {
  return {
    type: CHANGE_STATE_PROCEDURE_SUCCESS,
    response,
  };
}

export function updateStateProcedureError(error) {
  return {
    type: CHANGE_STATE_PROCEDURE_ERROR,
    error,
  };
}
