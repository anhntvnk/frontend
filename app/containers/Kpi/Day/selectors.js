/**
 * kpis selectors
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

const select = state => state.kpiDay || initialState;

const makeSelectKPIs = () =>
  createSelector(
    select,
    state => state.kpis,
  );

const makeSelectKPIExport = () =>
  createSelector(
    select,
    state => state.kpisExport,
  );

const makeSelectUser = () =>
  createSelector(
    select,
    state => state.user,
  );

export { select, makeSelectKPIs, makeSelectKPIExport, makeSelectUser };
