/**
 * Gets the repositories of the user from Github
 */

import { call, put, takeLatest } from 'redux-saga/effects';
import { get as _get } from 'lodash';
import { fetchAxios } from 'utils/request';
import { registerAccountSuccess, registerAccountError } from './actions';
import { REGISTER_FORM } from './constants';
import API from '../../constants/apis';

export function* registerMyproject(actionData) {
  const { data } = actionData;
  const url = `${API.BASE_URL}/user`;
  try {
    const response = yield call(fetchAxios, {
      method: 'post',
      url,
      headers: { 'Content-Type': 'application/json' },
      responseType: 'json',
      data,
    });

    if (response) {
      yield put(registerAccountSuccess(response));
    } else {
      yield put(registerAccountError('Đã có lỗi xảy ra !'));
    }
  } catch (err) {
    const error = _get(err, 'response.data.error.details.messages');
    yield put(registerAccountError(error));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* registerSaga() {
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(REGISTER_FORM, registerMyproject);
}
