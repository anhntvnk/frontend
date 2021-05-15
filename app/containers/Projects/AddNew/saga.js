/**
 * Gets the repositories of the user from Github
 */

import { call, put, takeLatest } from 'redux-saga/effects';
import { fetchAxios } from 'utils/request';
import { ADD_PROJECTS } from './constants';
import { addProjectSuccess, addProjectError } from './actions';
import { getUserId } from '../../../../services/auth';
import API from '../../../constants/apis';

export function* addProject(actionData) {
  const {
    data: { formData, project },
  } = actionData;

  const requestURL = `${API.BASE_URL}/FollowedProjects`;
  try {
    if (formData) {
      const uploadImage = yield call(fetchAxios, {
        method: 'post',
        url: 'http://vnk.vn/file-upload',
        headers: { 'Content-Type': 'application/json' },
        responseType: 'json',
        data: formData,
      });
      if (uploadImage && uploadImage.link) {
        project.image = uploadImage.link;
      }
    }
    // Call our request helper (see 'utils/request')
    const response = yield call(fetchAxios, {
      method: 'post',
      url: requestURL,
      headers: { 'Content-Type': 'application/json' },
      responseType: 'json',
      data: { ...project, user_id: getUserId() },
    });
    yield put(addProjectSuccess(response));
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
