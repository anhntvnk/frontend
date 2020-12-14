/* eslint-disable prettier/prettier */
/**
 * Gets the repositories of the user from Github
 */

import { call, put, takeLatest } from 'redux-saga/effects';
import {
  loadProjectSuccess,
  loadProjectsError,
  changeFollowSuccess,
  unFollowSuccess,
} from 'containers/Projects/actions';

import request, { fetchAxios } from 'utils/request';
import { LOAD_PROJECTS, CHANGE_FOLLOW, UN_FOLLOW } from './constants';
import API from '../../constants/apis';
import { getToken, getUserId } from '../../../services/auth';

export function* getProjectsAvaiable() {
  // Select username from store

  const filter = `filter[where][user_id]=${getUserId()}`;

  // const filter = 'filter[order]=last_modified%20DESC';
  const followedProjectsURL = `${
    API.BASE_URL
  }/FollowedProjects?access_token=${getToken}&${filter}`;
  const projectAvaiableURL = `${
    API.BASE_URL
  }/user/get-available-projects/${getUserId()}?access_token=${getToken()}`;

  try {
    // Call our request helper (see 'utils/request')
    const followedProjects = yield call(request, followedProjectsURL);
    const projectAvaiable = yield call(request, projectAvaiableURL);

    yield put(loadProjectSuccess({ followedProjects, projectAvaiable }));
  } catch (err) {
    yield put(loadProjectsError(err));
  }
}

export function* followProjects(actionData) {
  const { data } = actionData;
  // Select username from store
  const requestURL = `${API.BASE_URL}/FollowedProjects`;

  try {
    // Call our request helper (see 'utils/request')
    const response = yield call(fetchAxios, {
      method: 'post',
      url: requestURL,
      headers: { 'Content-Type': 'application/json' },
      responseType: 'json',
      data,
    });

    yield put(changeFollowSuccess(response));
  } catch (err) {
    yield put(loadProjectsError(err));
  }
}

export function* unFollowProjects(actionData) {
  const { id } = actionData;
  const requestURL = `${API.BASE_URL}/FollowedProjects/${id}`;

  try {
    // Call our request helper (see 'utils/request')
    const response = yield call(fetchAxios, {
      method: 'delete',
      url: requestURL,
      headers: { 'Content-Type': 'application/json' },
      responseType: 'json',
    });

    if (response) {
      yield put(unFollowSuccess({ id }));
    }

    // TODO: handle error
  } catch (err) {
    yield put(loadProjectsError(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* ProjectSaga() {
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(LOAD_PROJECTS, getProjectsAvaiable);
  yield takeLatest(CHANGE_FOLLOW, followProjects);
  yield takeLatest(UN_FOLLOW, unFollowProjects);
}
