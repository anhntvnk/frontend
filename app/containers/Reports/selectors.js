/**
 * kpis settings selectors
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

const select = state => state.reports || initialState;

const makeSelectReports = () =>
  createSelector(
    select,
    state => state.reports,
  );

export { select, makeSelectReports };
