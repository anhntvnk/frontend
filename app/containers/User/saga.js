/**
 * Gets the repositories of the user from Github
 */

import { call, put, takeLatest } from 'redux-saga/effects';
import request from 'utils/request';
import API from '../../constants/apis';
import { loadUserProfileSuccess, loadUserProfileError } from './actions';
import { LOAD_USER } from './constants';
import { getToken, getUserId } from '../../../services/auth';

export function* fetchProfile() {
  const url = `${API.BASE_URL}/user/${getUserId()}?access_token=${getToken()}`;

  try {
    const response = yield call(request, url);

    const orderUrl = `${API.BASE_URL}/order/findOne?access_token=${getToken()}`;
    const filter = `filter[where][user_id]=${getUserId()}`;
    const order = yield call(request, `${orderUrl}&${filter}`);

    const data = {
      ...response,
      package: order.package || '',
      expireDate: order.expire_date || '',
    };

    if (response) {
      yield put(loadUserProfileSuccess(data));
    } else {
      yield put(loadUserProfileError('Đã có lỗi xảy ra !'));
    }
  } catch (err) {
    yield put(loadUserProfileError(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* userSaga() {
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(LOAD_USER, fetchProfile);
}
