/**
 * Project selectors
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectDashboard = state => state.dashboard || initialState;

const makeSelectDashboard = () =>
  createSelector(
    selectDashboard,
    state => state.dashboard,
  );
const select = state => state.loginForm || initialState;

const makeSelectLoginForm = () =>
  createSelector(
    select,
    state => state.user,
  );
export { selectDashboard, makeSelectDashboard, makeSelectLoginForm };
