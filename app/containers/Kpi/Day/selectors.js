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

export { select, makeSelectKPIs };
