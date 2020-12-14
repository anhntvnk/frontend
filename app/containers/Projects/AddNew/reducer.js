/* eslint-disable no-case-declarations */
/*
 * AddProjectReducer
 *
 * The reducer takes care of our data. Using actions, we can
 * update our application state. To add a new action,
 * add it to the switch statement in the reducer function
 *
 */

import produce from 'immer';
import {
  ADD_PROJECTS_SUCCESS,
  ADD_PROJECTS_ERROR,
  RESET_STATE,
} from './constants';

// The initial state of the App
export const initialState = {
  formValues: {
    name: '',
    address: '',
    city: '',
    code: '',
    cost: '',
    country: '',
    description: '',
    district: '',
    floor_area: '',
    floor_count: '',
    nha_thau_chinh: '',
    nha_thau_phu: '',
    note: '',
    owner: '',
    sort_name: '',
    status: '',
    version: '',
    version_description: '',
  },
  successMessage: '',
  error: '',
};

/* eslint-disable default-case, no-param-reassign */
const addProjectReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case ADD_PROJECTS_SUCCESS:
        const { response } = action;
        if (response) {
          draft.successMessage = 'Thêm Dự Án Thành Công!';
        }
        break;
      case ADD_PROJECTS_ERROR:
        draft.error = 'Đã có lỗi xảy ra, không thể thêm dự án!';
        break;
      case RESET_STATE:
        draft.successMessage = '';
        draft.error = '';
        break;
    }
  });

export default addProjectReducer;
