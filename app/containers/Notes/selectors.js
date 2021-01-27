/**
 * kpis settings selectors
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

const select = state => state.notes || initialState;

const makeSelectNotes = () =>
  createSelector(
    select,
    state => state.notes,
  );
// const makeSelectKPISettingsMsg = () =>
//   createSelector(
//     select,
//     state => state.successMsg,
//   );

export { select, makeSelectNotes };
