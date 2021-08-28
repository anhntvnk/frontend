/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectHome = state => state.home || initialState;

const makeSelectUserProfille = () =>
  createSelector(
    selectHome,
    state => state.userProfile,
  );

export { makeSelectUserProfille };
