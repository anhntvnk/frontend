/**
 * user selectors
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

const select = state => state.user || initialState;

const makeSelectUserProfille = () =>
  createSelector(
    select,
    state => state.userProfile,
  );

export { select, makeSelectUserProfille };
