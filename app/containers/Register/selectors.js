/**
 * RegisterForm selectors
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

const select = state => state.register || initialState;

const makeSelectRegister = () =>
  createSelector(
    select,
    state => state.user,
  );
const makeSelectErrorMessage = () =>
  createSelector(
    select,
    state => state.errorMessage,
  );

export { select, makeSelectRegister, makeSelectErrorMessage };
