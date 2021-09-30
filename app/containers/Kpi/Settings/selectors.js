/**
 * kpis settings selectors
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

const select = state => state.kpiSettings || initialState;

const makeSelectKPISettings = () =>
  createSelector(
    select,
    state => state.kpis,
  );

const makeSelectKPISettingsMsg = () =>
  createSelector(
    select,
    state => state.successMsg,
  );

export { select, makeSelectKPISettings, makeSelectKPISettingsMsg };
