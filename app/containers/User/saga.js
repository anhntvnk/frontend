/**
 * Gets the repositories of the user from Github
 */

import { call, put, takeLatest } from 'redux-saga/effects';
import request, { fetchAxios } from 'utils/request';
import API from '../../constants/apis';
import {
  loadUserProfileSuccess,
  loadUserProfileError,
  setPackageOrderSuccess,
  setPackageOrderError,
} from './actions';
import { LOAD_PACKAGE_ORDER, LOAD_USER } from './constants';
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
      orderId: order.id || '',
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

export function* orderPlan(action) {
  const { data, isEdit } = action;
  let method = 'post';
  let url = `${API.BASE_URL}/order?access_token=${getToken()}`;
  if (isEdit) {
    url = `${API.BASE_URL}/order/${isEdit}?access_token=${getToken()}`;
    method = 'put';
  }

  try {
    const response = yield call(fetchAxios, {
      method,
      url,
      headers: { 'Content-Type': 'application/json' },
      responseType: 'json',
      data,
    });

    if (response) {
      yield put(setPackageOrderSuccess(data));
    } else {
      yield put(setPackageOrderError('Đã có lỗi xảy ra !'));
    }
  } catch (err) {
    yield put(setPackageOrderError(err));
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
  yield takeLatest(LOAD_PACKAGE_ORDER, orderPlan);
}
