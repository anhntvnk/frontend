/* eslint-disable prettier/prettier */
/**
 * Gets the repositories of the user from Github
 */

import { call, put, takeLatest } from 'redux-saga/effects';
import request, { checkStatus, resData } from 'utils/request';
import axios from 'axios';
import { loadDashboardSuccess, loadDashboardError } from './actions';
import API from '../../constants/apis';
import { getToken, getUserId } from '../../../services/auth';

import { LOAD_DATA_DASHBOARD } from './constants';


const getDataResponse = (response) => {
  let res = checkStatus(response);
  res = resData(response);
  return res;
}

export function* getDataDashboard() {
  const filter = `filter[where][user_id]=${getUserId()}`;
  const countCompany = `${API.BASE_URL}/company/count?access_token=${getToken()}`;
  const countCompanyFollowed = `${API.BASE_URL}/user/${getUserId()}/companies/count?access_token=${getToken()}`;
  const countProjectsFollowed = `${API.BASE_URL}/FollowedProjects?access_token=${getToken}&${filter}`;
  const countProject = `${API.BASE_URL}/user/get-available-projects/${getUserId()}?access_token=${getToken()}`;
  const user = `${API.BASE_URL}/user/${getUserId()}?access_token=${getToken()}`;

  try {
    const  repos = yield axios
      .all([
        axios.get(countCompany),
        axios.get(countCompanyFollowed),
        axios.get(countProjectsFollowed),
        axios.get(countProject),
        axios.get(user),
      ])
      .then(
        axios.spread((...responses) => ({ dashboard: {
          countCompany: getDataResponse(responses[0]).count,
          countCompanyFollowed: getDataResponse(responses[1]).count,
          countProjectsFollowed: getDataResponse(responses[2]).length,
          countProject: getDataResponse(responses[3]).length,
          user: getDataResponse(responses[4]),
        }})),
      );

    yield put(loadDashboardSuccess(repos));
  } catch (err) {
    yield put(loadDashboardError(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* dashboardSaga() {
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(LOAD_DATA_DASHBOARD, getDataDashboard);
}
