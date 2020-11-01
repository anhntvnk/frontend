/**
 * Gets the repositories of the user from Github
 */

import { call, put, select, takeLatest } from 'redux-saga/effects';
import { LOAD_REPOS } from 'containers/App/constants';
import {
  reposLoaded,
  repoLoadingError,
  loadProjects,
  loadProjectsError,
} from 'containers/Projects/actions';

import request from 'utils/request';
import { makeSelectUsername } from 'containers/Projects/selectors';
import { LOAD_PROJECTS } from './constants';

/**
 * Github repos request/response handler
 */
export function* getRepos() {
  console.log('vvvvvvv111');
  // Select username from store
  const username = yield select(makeSelectUsername());
  const requestURL = `http://vnk.vn/api/company`;

  try {
    // Call our request helper (see 'utils/request')
    const repos = yield call(request, requestURL);

    console.log(repos);
    yield put(reposLoaded(repos, username));
  } catch (err) {
    yield put(repoLoadingError(err));
  }
}

export function* getProjects() {
  console.log('vvvvvvv111');
  // Select username from store
  const requestURL = `http://vnk.vn/api/company`;

  try {
    // Call our request helper (see 'utils/request')
    const repos = yield call(request, requestURL);
    yield put(loadProjects(repos));
  } catch (err) {
    yield put(loadProjectsError(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* githubData() {
  // Watches for LOAD_REPOS actions and calls getRepos when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(LOAD_REPOS, getRepos);
  yield takeLatest(LOAD_PROJECTS, getProjects);
}
