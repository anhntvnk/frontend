/**
 * Gets Project details by ProjectId
 */

import { call, put, takeLatest } from 'redux-saga/effects';
import request, { fetchAxios } from 'utils/request';
import {
  addProjectContactError,
  addProjectContactSuccess,
  addTaskError,
  addTaskSuccess,
  getListUserError,
  getListUserSuccess,
  loadProjectDetailsError,
  loadProjectDetailsSuccess,
} from './actions';
import API from '../../../constants/apis';

import {
  ADD_PROJECT_CONTACT,
  ADD_TASK,
  LOAD_LIST_USER,
  LOAD_PROJECT_DETAILS,
} from './constants';
import { getToken, getUserId } from '../../../../services/auth';
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
  const { follow, projectID } = actionData;

  const project = `${API.BASE_URL}/project/${projectID}`;
  const projectFollow = `${API.BASE_URL}/FollowedProjects/${projectID}`;

  const url = follow === 'following' ? projectFollow : project;

  try {
    const repos = yield call(request, url);
    yield put(loadProjectDetailsSuccess(repos));
  } catch (err) {
    yield put(loadProjectDetailsError(err));
  }
}

export function* fetchUser() {
  const user = JSON.parse(localStorage.getItem('user'));
  let filter = ``;
  if (user.team_id) {
    // eslint-disable-next-line prettier/prettier
    filter = `filter[where][team_id]=${
      user.team_id
    }&filter[where][id][neq]=${getUserId()}`;
  } else {
    filter = `filter[where][team_id]=-1`;
  }

  if (!user) {
    // eslint-disable-next-line no-multi-assign
    filter = filter += `&filter[where][id]=${user.id}`;
  }
  const url = `${API.BASE_URL}/user/?access_token=${getToken()}&${filter}`;
  const url2 = `${API.BASE_URL}/task?access_token=${getToken()}`;

  try {
    const userRes = yield call(request, url);
    const taskRes = yield call(request, url2);

    if (userRes && taskRes) {
      yield put(getListUserSuccess({ user: userRes, tasks: taskRes }));
    } else {
      yield put(getListUserError('Đã có lỗi xảy ra !'));
    }
  } catch (err) {
    yield put(getListUserError(err));
  }
}

export function* addTaskSaga(actionData) {
  const {
    data: { newTask, location },
  } = actionData;
  const url = `${API.BASE_URL}/task?access_token=${getToken()}`;

  try {
    const response = yield call(fetchAxios, {
      method: 'post',
      url,
      headers: { 'Content-Type': 'application/json' },
      responseType: 'json',
      data: newTask,
    });

    yield put(addTaskSuccess({ task: response, location }));
  } catch (err) {
    yield put(addTaskError(err));
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
  yield takeLatest(LOAD_LIST_USER, fetchUser);
  yield takeLatest(ADD_TASK, addTaskSaga);
}
