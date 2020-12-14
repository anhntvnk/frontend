/**
 * Gets the repositories of the user from Github
 */

import { call, put, takeLatest } from 'redux-saga/effects';
import request from 'utils/request';
import { loadProjectsFollowError, loadProjectsFollowSuccess } from './actions';
import API from '../../constants/apis';
import { getToken, getUserId } from '../../../services/auth';

import { LOAD_PROJECTS_FOLLOW } from './constants';

export function* getDataDashboard() {
  // Select username from store

  const filter = `filter[where][user_id]=${getUserId()}`;

  // const filter = 'filter[order]=last_modified%20DESC';
  const followedProjectsURL = `${
    API.BASE_URL
  }/FollowedProjects?access_token=${getToken}&${filter}`;

  try {
    // Call our request helper (see 'utils/request')
    const repos = {
      projectFollows: yield call(request, followedProjectsURL),
    };

    yield put(loadProjectsFollowSuccess(repos));
  } catch (err) {
    yield put(loadProjectsFollowError(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* dashboardSaga() {
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(LOAD_PROJECTS_FOLLOW, getDataDashboard);
}
