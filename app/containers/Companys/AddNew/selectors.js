/**
 * Project selectors
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectNewCompany = state => state.addCompany || initialState;

const successMessageSelector = () =>
  createSelector(
    selectNewCompany,
    state => state.successMessage,
  );
const errorSelector = () =>
  createSelector(
    selectNewCompany,
    state => state.error,
  );

export { selectNewCompany, successMessageSelector, errorSelector };
