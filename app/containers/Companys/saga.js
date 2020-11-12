/**
 * Gets the repositories of the user from Github
 */

import { call, put, takeLatest } from 'redux-saga/effects';
import { LOAD_COMPANYS } from 'containers/Companys/constants';
import {
  loadCompanySuccess,
  loadCompanysError,
} from 'containers/Companys/actions';

import request from 'utils/request';

export function* getCompanys() {
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
  yield takeLatest(LOAD_COMPANYS, getCompanys);
}
