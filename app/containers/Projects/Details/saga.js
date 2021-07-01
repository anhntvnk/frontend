/**
 * Gets Project details by ProjectId
 */

import { call, put, takeLatest } from 'redux-saga/effects';
import request, { fetchAxios } from 'utils/request';
import {
  addProjectContactError,
  addProjectContactSuccess,
  loadProjectDetailsError,
  loadProjectDetailsSuccess,
} from './actions';
import API from '../../../constants/apis';

import { ADD_PROJECT_CONTACT, LOAD_PROJECT_DETAILS } from './constants';
import { getToken } from '../../../../services/auth';
// import { getToken } from '../../../../services/auth';

export function* updateProject(actionData) {
  const {
    data: { project, location },
  } = actionData;
  const url = `${API.BASE_URL}/FollowedProjects/${project.id}`;

  try {
    const response = yield call(fetchAxios, {
      method: 'put',
      url,
      headers: { 'Content-Type': 'application/json' },
      responseType: 'json',
      data: project,
    });

    yield put(addProjectContactSuccess({ response, location }));
  } catch (err) {
    yield put(addProjectContactError(err));
  }
}

export function* getProjectDetails(actionData) {
  const { projectID } = actionData;

  const requestURL = `${
    API.BASE_URL
  }/project/${projectID}?access_token=${getToken()}`;

  try {
    const repos = yield call(request, requestURL);
    yield put(loadProjectDetailsSuccess(repos));
  } catch (err) {
    yield put(loadProjectDetailsError(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* projectDetails() {
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(ADD_PROJECT_CONTACT, updateProject);
  yield takeLatest(LOAD_PROJECT_DETAILS, getProjectDetails);
}
