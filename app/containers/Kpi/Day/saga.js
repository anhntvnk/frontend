/**
 * Gets the repositories of the user from Github
 */

import { call, put, takeLatest } from 'redux-saga/effects';
import request from 'utils/request';
import moment from 'moment';
import API from '../../../constants/apis';
import { loadKPISuccess, loadKPIError } from './actions';
import { LOAD_KPI } from './constants';
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

/**
 * Root saga manages watcher lifecycle
 */
export default function* kpiSaga() {
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(LOAD_KPI, getKPIs);
}
