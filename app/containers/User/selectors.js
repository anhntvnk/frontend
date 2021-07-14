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

const makeSelectOrder = () =>
  createSelector(
    select,
    state => state.isSuccess,
  );

const makeSelectListUser = () =>
  createSelector(
    select,
    state => state.listUser,
  );

export { select, makeSelectUserProfille, makeSelectOrder, makeSelectListUser };
