/* eslint-disable prettier/prettier */
/**
 * Gets the repositories of the user from Github
 */

import { call, put, takeLatest } from 'redux-saga/effects';
import {
  loadProjectSuccess,
  loadProjectsError,
} from 'containers/Projects/actions';

import request from 'utils/request';
import { LOAD_PROJECTS } from './constants';
import API from '../../constants/apis';
import { getToken, getUserId } from '../../../services/auth';

export function* getProjects() {
  // Select username from store

  console.log(getUserId(), 'getUserId');
  const filter = 'filter[order]=last_modified%20DESC';

  // const requestURL = `${API.BASE_URL}/project`;
  const requestURL = `${API.BASE_URL}/FollowedProjects?access_token=${getToken()}&${filter}`;

  try {
    // Call our request helper (see 'utils/request')
    const repos = yield call(request, requestURL);

    yield put(loadProjectSuccess(repos));
  } catch (err) {
    yield put(loadProjectsError(err));
  }
}

export function* followProjects() {
  // Select username from store
  const requestURL = `${API.BASE_URL}/FollowedProjects?access_token=${getToken}`;

  const filter = {};
  filter.where = { user_id: getUserId };
  filter.order = 'last_modified DESC';

  try {
    // Call our request helper (see 'utils/request')
    const repos = yield call(request, requestURL);

    yield put(loadProjectSuccess(repos));
  } catch (err) {
    yield put(loadProjectsError(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* githubData() {
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(LOAD_PROJECTS, getProjects);
}
