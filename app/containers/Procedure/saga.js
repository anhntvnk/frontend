/**
 * Gets the repositories of the user from Github
 */

import { call, put, takeLatest } from 'redux-saga/effects';
import { fetchAxios } from 'utils/request';
import {
  updateStateProcedureSuccess,
  updateStateProcedureError,
} from './actions';

import { CHANGE_STATE_PROCEDURE } from './constants';
import API from '../../constants/apis';

export function* changeStateProcedure(actionData) {
  const { data } = actionData;

  const requestURL = `${API.BASE_URL}/FollowedProjects/${data.id}`;

  try {
    // Call our request helper (see 'utils/request')
    const response = yield call(fetchAxios, {
      method: 'put',
      url: requestURL,
      headers: { 'Content-Type': 'application/json' },
      responseType: 'json',
      data,
    });

    if (response) {
      yield put(updateStateProcedureSuccess(response));
    } else {
      yield put(updateStateProcedureError('Đã có lỗi xảy ra !'));
    }
  } catch (err) {
    yield put(updateStateProcedureError(err));
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
