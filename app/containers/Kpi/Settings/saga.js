/**
 * Gets the repositories of the user from Github
 */

import { call, put, takeLatest } from 'redux-saga/effects';
import request, { fetchAxios } from 'utils/request';
import moment from 'moment';
import { has as _has } from 'lodash';
import API from '../../../constants/apis';
import {
  updateKPISuccess,
  updateKPIError,
  loadKPISuccess,
  loadKPIError,
} from './actions';
import { LOAD_KPI, UPDATE_KPI } from './constants';
import { getToken, getUserId } from '../../../../services/auth';

export function* getKPIs() {
  const currentTime = moment().format('YYYY-MM-DD');
  const filter = `filter[where][user_id]=${getUserId()}&filter[where][created][gte]=${currentTime}`;
  // eslint-disable-next-line prettier/prettier
  const url = `${API.BASE_URL}/kpi-score/findOne?access_token=${getToken()}&${filter}`;

  try {
    const response = yield call(request, url);

    if (response) {
      yield put(loadKPISuccess(response));
    } else {
      yield put(loadKPISuccess('Đã có lỗi xảy ra !'));
    }
  } catch (err) {
    yield put(loadKPIError(err));
  }
}

export function* updateKpis(action) {
  const { data } = action;
  const url = `${API.BASE_URL}/kpi-score?access_token=${getToken()}`;
  const method = _has(data, 'id') ? 'put' : 'post';

  try {
    const response = yield call(fetchAxios, {
      method,
      url,
      headers: { 'Content-Type': 'application/json' },
      responseType: 'json',
      data,
    });

    if (response) {
      yield put(updateKPISuccess(response));
    } else {
      yield put(updateKPIError('Đã có lỗi xảy ra !'));
    }
  } catch (err) {
    yield put(updateKPIError(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* userSaga() {
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(LOAD_KPI, getKPIs);
  yield takeLatest(UPDATE_KPI, updateKpis);
}
