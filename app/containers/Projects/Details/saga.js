/**
 * Gets Project details by ProjectId
 */

import { call, put, takeLatest } from 'redux-saga/effects';
import { fetchAxios } from 'utils/request';
import { addProjectContactError, addProjectContactSuccess } from './actions';
import API from '../../../constants/apis';

import { ADD_PROJECT_CONTACT } from './constants';
// import { getToken } from '../../../../services/auth';

export function* addProjectContact(actionData) {
  const { data } = actionData;
  const url = `${API.BASE_URL}/FollowedProjects/${data.id}`;

  try {
    const response = yield call(fetchAxios, {
      method: 'put',
      url,
      headers: { 'Content-Type': 'application/json' },
      responseType: 'json',
      data,
    });

    yield put(addProjectContactSuccess(response));
  } catch (err) {
    yield put(addProjectContactError(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* projectDetails() {
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(ADD_PROJECT_CONTACT, addProjectContact);
}
