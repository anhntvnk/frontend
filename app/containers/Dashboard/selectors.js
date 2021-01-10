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

export { selectDashboard, makeSelectDashboard };
