/* eslint-disable prettier/prettier */
/**
 * Gets the repositories of the user from Github
 */

import { call, put, takeLatest } from 'redux-saga/effects';
import request from 'utils/request';
import API from '../../constants/apis';
import { getReportsSuccess, getReportsError } from './actions';
import { GET_REPORTS } from './constants';
import { getToken, getUserId } from '../../../services/auth';

export function* getReportsSaga() {
  const user = `${API.BASE_URL}/user/${getUserId()}?access_token=${getToken()}`;

  try {
    const response = yield call(request, user);

    if (response && response.team_id !== 0) {
      const { team_id: teamId } = response;
      const costStatUrl = `${
        API.BASE_URL
      }/FollowedProjects/cost-stat/${teamId}?access_token=${getToken()}`;
      const countStatUrl = `${
        API.BASE_URL
      }/FollowedProjects/count-stat/${teamId}?access_token=${getToken()}`;
      const costStat = yield call(request, costStatUrl);
      const countStat = yield call(request, countStatUrl);

      yield put(getReportsSuccess({ costStat, countStat }));
    } else {
      yield put(getReportsError('Đã có lỗi xảy ra !'));
    }
  } catch (err) {
    yield put(getReportsError(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* notesSaga() {
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(GET_REPORTS, getReportsSaga);
}
