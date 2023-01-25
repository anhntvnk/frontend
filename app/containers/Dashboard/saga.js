/* eslint-disable prettier/prettier */
/**
 * Gets the repositories of the user from Github
 */

import { put, takeLatest } from 'redux-saga/effects';
import { checkStatus, resData } from 'utils/request';
import axios from 'axios';
import { loadDashboardSuccess, loadDashboardError } from './actions';
import API from '../../constants/apis';
import { getToken, getUserId, getPackageOrder } from '../../../services/auth';
import { LOAD_DATA_DASHBOARD } from './constants';

const PACKAGE_ORDER = 'basic';

const getDataResponse = (response) => {
  let res = checkStatus(response);
  res = resData(response);
  return res;
}

export function* getDataDashboard() {
  const user = JSON.parse(localStorage.getItem('user'));
  let filter = `filter[where][user_id]=${getUserId()}`;
  if (user.team_id) {
    filter = `filter[where][team_id]=${user.team_id}`;
  }
  const countCompany = `${API.BASE_URL}/company/count?access_token=${getToken()}`;
  const countCompanyFollowed = `${API.BASE_URL}/user/${getUserId()}/companies/count?access_token=${getToken()}`;
  const countProjectsFollowed = `${API.BASE_URL}/FollowedProjects?access_token=${getToken()}&${filter}`;
  const countProject = `${API.BASE_URL}/user/get-available-projects/${getUserId()}?access_token=${getToken()}`;

  try {
    const  repos = yield axios
      .all([
        axios.get(countCompany),
        axios.get(countCompanyFollowed),
        axios.get(countProjectsFollowed),
        axios.get(countProject),
      ])
      .then(
        axios.spread((...responses) => ({ dashboard: {
          // countCompany: getPackageOrder() !== PACKAGE_ORDER ? getDataResponse(responses[0]).length : 0 ,
          countCompany: getDataResponse(responses[0]).length,
          countCompanyFollowed: getDataResponse(responses[1]).length,
          countProjectsFollowed: getDataResponse(responses[2]).length,
          countProject: [...new Map(getDataResponse(responses[3]).map(item => [item.name, item])).values()].length,
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
