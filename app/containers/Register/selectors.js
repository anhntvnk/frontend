/**
 * RegisterForm selectors
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

const select = state => state.register || initialState;

const makeSelectRegisterLoading = () =>
  createSelector(
    select,
    state => state.isLoading,
  );
const makeSelectStatusResponse = () =>
  createSelector(
    select,
    state => state.statusResponse,
  );

export { select, makeSelectRegisterLoading, makeSelectStatusResponse };
