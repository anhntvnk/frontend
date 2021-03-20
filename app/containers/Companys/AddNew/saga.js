/**
 * Gets the repositories of the user from Github
 */

import { call, put, takeLatest } from 'redux-saga/effects';
import { fetchAxios } from 'utils/request';
import { ADD_COMPANY } from './constants';
import { addCompanyError, addCompanySuccess } from './actions';
import API from '../../../constants/apis';

export function* addCompany(actionData) {
  const { data } = actionData;

  const requestURL = `${API.BASE_URL}/company`;

  try {
    const response = yield call(fetchAxios, {
      method: 'post',
      url: requestURL,
      headers: { 'Content-Type': 'application/json' },
      responseType: 'json',
      data,
    });

    yield put(addCompanySuccess(response));
  } catch (err) {
    yield put(addCompanyError(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* addCompanySaga() {
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(ADD_COMPANY, addCompany);
}
