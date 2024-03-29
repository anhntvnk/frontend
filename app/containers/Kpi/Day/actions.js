/*
 * KPIs day Actions
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
  LOAD_KPI,
  LOAD_KPI_SUCCESS,
  LOAD_KPI_ERROR,
  LOAD_ALL_KPI,
  LOAD_ALL_KPI_SUCCESS,
  LOAD_ALL_KPI_ERROR,
  LOAD_USER,
  LOAD_USER_SUCCESS,
  LOAD_USER_ERROR,
} from './constants';

export function loadKPI() {
  return {
    type: LOAD_KPI,
  };
}

export function loadKPISuccess(response) {
  return {
    type: LOAD_KPI_SUCCESS,
    response,
  };
}

export function loadKPIError(error) {
  return {
    type: LOAD_KPI_ERROR,
    error,
  };
}

export function loadAllKPI(data) {
  return {
    type: LOAD_ALL_KPI,
    data,
  };
}

export function loadAllKPISuccess(response) {
  return {
    type: LOAD_ALL_KPI_SUCCESS,
    response,
  };
}

export function loadAllKPIError(error) {
  return {
    type: LOAD_ALL_KPI_ERROR,
    error,
  };
}

export function loadUser() {
  return {
    type: LOAD_USER,
  };
}

export function loadUserSuccess(response) {
  return {
    type: LOAD_USER_SUCCESS,
    response,
  };
}

export function loadUserError(error) {
  return {
    type: LOAD_USER_ERROR,
    error,
  };
}
