/**
 * Gets the repositories of the user from Github
 */

import { call, put, takeLatest } from 'redux-saga/effects';
import request, { fetchAxios } from 'utils/request';
import API from '../../constants/apis';
import { getNotesSuccess, getNotesError } from './actions';
import { GET_NOTES } from './constants';
import { getToken, getUserId } from '../../../services/auth';

export function* getNotesSaga() {
  // eslint-disable-next-line prettier/prettier
  const url = `${API.BASE_URL}/user/${getUserId()}?access_token=${getToken()}`;

  try {
    const response = yield call(request, url);

    if (response) {
      yield put(getNotesSuccess(response));
    } else {
      yield put(getNotesError('Đã có lỗi xảy ra !'));
    }
  } catch (err) {
    yield put(getNotesError(err));
  }
}

// export function* updateKpis(action) {
//   const { data } = action;
//   const url = `${API.BASE_URL}/kpi-score?access_token=${getToken()}`;
//   const method = _has(data, 'id') ? 'put' : 'post';

//   try {
//     const response = yield call(fetchAxios, {
//       method,
//       url,
//       headers: { 'Content-Type': 'application/json' },
//       responseType: 'json',
//       data,
//     });

//     if (response) {
//       yield put(updateKPISuccess(response));
//     } else {
//       yield put(updateKPIError('Đã có lỗi xảy ra !'));
//     }
//   } catch (err) {
//     yield put(updateKPIError(err));
//   }
// }

/**
 * Root saga manages watcher lifecycle
 */
export default function* notesSaga() {
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(GET_NOTES, getNotesSaga);
}
