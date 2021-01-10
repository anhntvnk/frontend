/**
 * Procedure selectors
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

const select = state => state.procedure || initialState;

const makeSelectSuccessMessage = () =>
  createSelector(
    select,
    state => state.successMessage,
  );

const makeSelectErrorMessage = () =>
  createSelector(
    select,
    state => state.errorMessage,
  );

export { select, makeSelectSuccessMessage, makeSelectErrorMessage };
