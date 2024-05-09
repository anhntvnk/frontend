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
  let { data } = actionData;
  let packageExpire;
  let expireDate;
  let packageOrder;

  data = { ...data, device_id: `VNK_WEB_ID_${data.email}` };

  const loginUrl = `${API.BASE_URL}/user/login`;
  try {
    const response = yield call(fetchAxios, {
      method: 'post',
      url: loginUrl,
      headers: { 'Content-Type': 'application/json' },
      responseType: 'json',
      data,
      // data: { ...loginData, device_id: `VNK_WEB_ID_${loginData.email}` },
    });

    console.log(response, 'response============');
    if (response) {
      const { userId, id: token } = response;
      const userUrl = `${API.BASE_URL}/user/${userId}?access_token=${token}`;
      const orderUrl = `${API.BASE_URL}/order/findOne?access_token=${token}`;
      const getUserById = yield call(request, userUrl);

      if (getUserById) {
        const filter = `filter[where][user_id]=${userId}`;
        const order = yield call(request, `${orderUrl}&${filter}`);

        expireDate = _get(order, 'expire_date');

        if (order && _get(order, 'package')) {
          packageOrder = _get(order, 'package');
          const expire = moment(expireDate);

          if (expire.isValid()) {
            packageExpire = expire.diff(moment()) > 0;
          }
        }
      }

      yield put(
        loginFormSuccess({
          profile: { ...getUserById, password: data.password },
          userId,
          access_token: token,
          packageOrder,
          packageExpire,
          expireDate,
        }),
      );
    } else {
      yield put(loginFormError('Đã có lỗi xảy ra !'));
    }
  } catch (err) {
    const errors = err.response;
    const errorCode = _get(errors, 'data.message');

    yield put(loginFormError(errorCode));
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
