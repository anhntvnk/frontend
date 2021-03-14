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
const makeSelectUserData = () =>
  createSelector(
    select,
    state => state.userData,
  );

export { select, makeSelectNotes, makeSelectUserData };
