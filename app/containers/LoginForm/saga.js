/**
 * Gets the repositories of the user from Github
 */

import { call, put, takeLatest } from 'redux-saga/effects';
import request, { fetchAxios } from 'utils/request';
import moment from 'moment';
import { get as _get } from 'lodash';
import { loginFormSuccess, loginFormError } from './actions';
import { LOGIN_FORM } from './constants';
import API from '../../constants/apis';

export function* fetchLogin(actionData) {
  const { data } = actionData;
  let packageExpire;
  let packageOrder;

  const loginUrl = `${API.BASE_URL}/user/login`;
  try {
    const response = yield call(fetchAxios, {
      method: 'post',
      url: loginUrl,
      headers: { 'Content-Type': 'application/json' },
      responseType: 'json',
      data,
    });

    if (response) {
      const { userId, id: token } = response;
      const userUrl = `${API.BASE_URL}/user/${userId}?access_token=${token}`;
      const orderUrl = `${API.BASE_URL}/order/findOne?access_token=${token}`;
      const getUserById = yield call(request, userUrl);

      if (getUserById) {
        const filter = `filter[where][user_id]=${userId}`;
        const order = yield call(request, `${orderUrl}&${filter}`);

        if (order && _get(order, 'package')) {
          packageOrder = _get(order, 'package');
          const expireDate = moment(_get(order, 'expire_date'));

          if (expireDate.isValid()) {
            packageExpire = expireDate.diff(moment()) > 0;
          }
        }
      }

      yield put(
        loginFormSuccess({
          ...getUserById,
          access_token: token,
          packageOrder,
          packageExpire,
        }),
      );
    } else {
      yield put(loginFormError('Đã có lỗi xảy ra !'));
    }
  } catch (err) {
    yield put(loginFormError(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* loginSaga() {
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(LOGIN_FORM, fetchLogin);
}
