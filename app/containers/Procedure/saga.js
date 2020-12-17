/**
 * Gets the repositories of the user from Github
 */

import { call, put, takeLatest } from 'redux-saga/effects';
import request from 'utils/request';
import { loadCompanySuccess, loadCompanysError } from './actions';

import { CHANGE_STATE_PROCEDURE } from './constants';

export function* changeStateProcedure() {
  // Select username from store
  const requestURL = `http://vnk.vn/api/company`;

  try {
    // Call our request helper (see 'utils/request')
    const repos = yield call(request, requestURL);

    yield put(loadCompanySuccess(repos));
  } catch (err) {
    yield put(loadCompanysError(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* githubData() {
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(CHANGE_STATE_PROCEDURE, changeStateProcedure);
}
