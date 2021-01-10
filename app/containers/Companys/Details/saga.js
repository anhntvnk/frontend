/**
 * Gets Project details by ProjectId
 */

import { call, put, takeLatest } from 'redux-saga/effects';
import request from 'utils/request';
import { loadProjectDetailsSuccess, loadProjectDetailsError } from './actions';
import API from '../../../constants/apis';

import { LOAD_PROJECT_DETAILS } from './constants';
import { getToken } from '../../../../services/auth';

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
  yield takeLatest(LOAD_PROJECT_DETAILS, getProjectDetails);
}
