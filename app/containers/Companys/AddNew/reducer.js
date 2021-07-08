/* eslint-disable no-case-declarations */
/*
 * addCompanyReducer
 *
 * The reducer takes care of our data. Using actions, we can
 * update our application state. To add a new action,
 * add it to the switch statement in the reducer function
 *
 */

import produce from 'immer';
import moment from 'moment';
import {
  ADD_COMPANY_SUCCESS,
  ADD_COMPANY_ERROR,
  UPDATE_COMPANY_SUCCESS,
  RESET_STATE,
} from './constants';

// The initial state of the App
export const initialState = {
  formValues: {
    users: [],
    user: null,
    name: '',
    short_name: '',
    contacts: [],
    date: '',
    office_address: '',
    city: '',
    website: '',
    phone: '',
    email: '',
    latest_update: moment().format('DD/MM/YYYY HH:mm:ss'),
    note: '',
    manager: '',
    image: '',
  },
  successMessage: '',
  error: '',
};

/* eslint-disable default-case, no-param-reassign */
const addCompanyReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case ADD_COMPANY_SUCCESS:
        const { response } = action;
        if (response) {
          draft.successMessage = 'Thêm Công Ty Thành Công!';
        }
        break;
      case UPDATE_COMPANY_SUCCESS:
        if (action.response) {
          draft.successMessage = 'Cập Nhật Thành Công!';
        }
        break;
      case ADD_COMPANY_ERROR:
        draft.error = 'Đã có lỗi xảy ra, không thể thêm công ty!';
        break;
      case RESET_STATE:
        draft.successMessage = '';
        break;
    }
  });

export default addCompanyReducer;
