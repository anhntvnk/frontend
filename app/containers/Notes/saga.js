/**
 * Gets the repositories of the user from Github
 */

import { call, put, takeLatest } from 'redux-saga/effects';
import request from 'utils/request';
import API from '../../constants/apis';
import { getNotesSuccess, getNotesError, updateNotesErrors } from './actions';
import { GET_NOTES, UPDATE_NOTES } from './constants';
import { getToken, getUserId } from '../../../services/auth';

export function* getNotesSaga() {
  // eslint-disable-next-line prettier/prettier
  const url = `${API.BASE_URL}/user/${getUserId()}?access_token=${getToken()}`;

  try {
    const response = yield call(request, url);

    if (response) {
      yield put(getNotesSuccess(response));
    } else {
      yield put(getNotesError('Đã có lỗi xảy ra !'));
    }
  } catch (err) {
    yield put(getNotesError(err));
  }
}

export function* updateNotes(action) {
  const { data } = action;
  const url = `${API.BASE_URL}/user/${getUserId()}/update`;

  let params = '';
  const keys = Object.keys(data);
  // eslint-disable-next-line no-plusplus
  for (let index = 0; index < keys.length; index++) {
    const k = keys[index];
    if (k !== 'id') {
      if (params.length > 0) {
        params += '&';
      }
      const value = data[k];
      params += `${k}=${
        typeof value === 'object' ? JSON.stringify(value) : value
      }`;
    }
  }

  const httpHeaders = {
    'Content-Type': 'application/x-www-form-urlencoded',
    Accept: 'application/json',
  };

  try {
    const response = yield call(fetch, url, {
      method: 'post',
      headers: new Headers(httpHeaders),
      body: params,
    });

    if (response) {
      yield put(updateNotes(response));
    } else {
      yield put(updateNotesErrors('Đã có lỗi xảy ra !'));
    }
  } catch (err) {
    yield put(updateNotesErrors(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* notesSaga() {
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(GET_NOTES, getNotesSaga);
  yield takeLatest(UPDATE_NOTES, updateNotes);
}
