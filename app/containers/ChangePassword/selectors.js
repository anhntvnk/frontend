/**
 * ChangePassword selectors
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

const select = state => state.changePassword || initialState;

const makeSelectErrorMessage = () =>
  createSelector(
    select,
    state => state.errorMessage,
  );

const makeSelectSuccessMessage = () =>
  createSelector(
    select,
    state => state.successMessage,
  );

export { select, makeSelectSuccessMessage, makeSelectErrorMessage };
