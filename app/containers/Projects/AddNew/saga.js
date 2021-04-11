/**
 * Gets the repositories of the user from Github
 */

import { call, put, takeLatest } from 'redux-saga/effects';
import { fetchAxios } from 'utils/request';
import { ADD_PROJECTS } from './constants';
import { addProjectSuccess, addProjectError } from './actions';
import API from '../../../constants/apis';

export function* addProject(actionData) {
  const { data } = actionData;

  const requestURL = `${API.BASE_URL}/project`;

  try {
    // Call our request helper (see 'utils/request')
    const uploadImage = yield call(fetchAxios, {
      method: 'post',
      url: 'http://localhost:3000/file-upload',
      headers: { 'Content-Type': 'application/json' },
      responseType: 'json',
      data,
    });

    if (uploadImage && uploadImage.filename) {
      const response = yield call(fetchAxios, {
        method: 'post',
        url: requestURL,
        headers: { 'Content-Type': 'application/json' },
        responseType: 'json',
        data,
      });
      yield put(addProjectSuccess(response));
    }
  } catch (err) {
    yield put(addProjectError(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* addProjectSaga() {
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(ADD_PROJECTS, addProject);
}
