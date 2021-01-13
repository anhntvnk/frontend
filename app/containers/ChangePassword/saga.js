/**
 * CHANGE_PASSWORD Saga
 */

import { call, put, takeLatest } from 'redux-saga/effects';
import { fetchAxios } from 'utils/request';
import { get as _get } from 'lodash';
import { changePasswordSuccess, changePasswordError } from './actions';
import { CHANGE_PASSWORD } from './constants';
import API from '../../constants/apis';
import { getToken } from '../../../services/auth';

export function* changePassword(actionData) {
  const { data } = actionData;
  const url = `${API.BASE_URL}/user/change-password?access_token=${getToken()}`;
  try {
    const response = yield call(fetchAxios, {
      method: 'post',
      url,
      headers: { 'Content-Type': 'application/json' },
      responseType: 'json',
      data,
    });

    console.log(response);

    yield put(changePasswordSuccess(response));
  } catch (err) {
    const errorCode = _get(err, 'response.data.error.code');
    if (errorCode === 'INVALID_PASSWORD') {
      yield put(changePasswordError('Mật khẩu cũ không khớp!'));
    } else {
      yield put(changePasswordError('Đã có lỗi xảy ra. Hãy thử lại sau!'));
    }
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* changePasswordSaga() {
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(CHANGE_PASSWORD, changePassword);
}
