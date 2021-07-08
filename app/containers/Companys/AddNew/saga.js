/**
 * Gets the repositories of the user from Github
 */

import { call, put, takeLatest } from 'redux-saga/effects';
import { fetchAxios } from 'utils/request';
import { ADD_COMPANY, UPDATE_COMPANY } from './constants';
import {
  addCompanyError,
  addCompanySuccess,
  updateCompanyError,
  updateCompanySuccess,
} from './actions';
import { getUserId, getToken } from '../../../../services/auth';
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

    if (response) {
      const req = `${API.BASE_URL}/user/${getUserId()}/companies/rel/${
        response.id
      }`;

      yield call(fetchAxios, {
        method: 'put',
        url: req,
        headers: {
          'Content-Type': 'application/json',
          Authorization: `${getToken()}`,
        },
        responseType: 'json',
        data: undefined,
      });
    }

    yield put(addCompanySuccess(response));
  } catch (err) {
    yield put(addCompanyError(err));
  }
}

export function* updateCompany(actionData) {
  const { data } = actionData;
  const requestURL = `${API.BASE_URL}/company/${data.id}`;

  try {
    const response = yield call(fetchAxios, {
      method: 'put',
      url: requestURL,
      headers: { 'Content-Type': 'application/json' },
      responseType: 'json',
      data,
    });

    yield put(updateCompanySuccess(response));
  } catch (err) {
    yield put(updateCompanyError(err));
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
  yield takeLatest(UPDATE_COMPANY, updateCompany);
}
