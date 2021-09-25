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

const makeSelectKPIExport = () =>
  createSelector(
    select,
    state => state.kpisExport,
  );
const makeSelectKPISettingsMsg = () =>
  createSelector(
    select,
    state => state.successMsg,
  );

export {
  select,
  makeSelectKPISettings,
  makeSelectKPISettingsMsg,
  makeSelectKPIExport,
};
