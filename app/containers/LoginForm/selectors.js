/**
 * LoginForm selectors
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

const select = state => state.loginForm || initialState;

const makeSelectLoginForm = () =>
  createSelector(
    select,
    state => state.user,
  );
const makeSelectErrorMessage = () =>
  createSelector(
    select,
    state => state.errorMessage,
  );

export { select, makeSelectLoginForm, makeSelectErrorMessage };
