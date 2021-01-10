/**
 * Gets the repositories of the user from Github
 */

import { call, put, takeLatest } from 'redux-saga/effects';
import request, { fetchAxios } from 'utils/request';

import {
  LOAD_COMPANYS,
  LOAD_COMPANYS_FOLLOW,
  LOAD_COMPANYS_UNFOLLOW,
} from './constants';
import {
  loadCompanySuccess,
  loadCompanysError,
  followCompanySuccess,
  followCompanysError,
} from './actions';
import API from '../../constants/apis';
import { getToken, getUserId } from '../../../services/auth';

export function* getCompanys() {
  // get all company
  const reqCompany = `${API.BASE_URL}/company`;
  const reqCompanyFollow = `${API.BASE_URL}/user/${getUserId()}/companies`;

  try {
    const companys = yield call(request, reqCompany);
    const companyFollows = yield call(request, reqCompanyFollow);

    yield put(loadCompanySuccess({ companys, companyFollows }));
  } catch (err) {
    yield put(loadCompanysError(err));
  }
}

export function* followCompanys(action) {
  // get all company
  const { companyId } = action;
  const req = `${API.BASE_URL}/user/${getUserId()}/companies/rel/${companyId}`;

  try {
    const response = yield call(fetchAxios, {
      method: 'put',
      url: req,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `${getToken()}`,
      },
      responseType: 'json',
      data: undefined,
    });

    yield put(followCompanySuccess({ ...response, isFollow: true }));
  } catch (err) {
    yield put(followCompanysError(err));
  }
}

export function* unfollowCompanys(action) {
  // get all company
  const { companyId } = action;
  const req = `${API.BASE_URL}/user/${getUserId()}/companies/rel/${companyId}`;

  try {
    yield call(fetchAxios, {
      method: 'delete',
      url: req,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `${getToken()}`,
      },
      responseType: 'json',
      data: undefined,
    });

    yield put(followCompanySuccess({ companyId, isFollow: false }));
  } catch (err) {
    yield put(followCompanysError(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* githubData() {
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(LOAD_COMPANYS, getCompanys);
  yield takeLatest(LOAD_COMPANYS_FOLLOW, followCompanys);
  yield takeLatest(LOAD_COMPANYS_UNFOLLOW, unfollowCompanys);
}
