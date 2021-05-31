/**
 * notes selectors
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

const makeSelectErrors = () =>
  createSelector(
    select,
    state => state.errors,
  );
const makeSelectSuccess = () =>
  createSelector(
    select,
    state => state.successMsg,
  );

export {
  select,
  makeSelectNotes,
  makeSelectUserData,
  makeSelectErrors,
  makeSelectSuccess,
};
