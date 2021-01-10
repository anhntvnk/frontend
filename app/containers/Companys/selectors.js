/**
 * Project selectors
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectCompanys = state => state.companys || initialState;

const makeSelectCompanys = () =>
  createSelector(
    selectCompanys,
    state => state.companys,
  );
const makeSelectCompanyFollows = () =>
  createSelector(
    selectCompanys,
    state => state.companyFollows,
  );

const makeSelectLoading = () =>
  createSelector(
    selectCompanys,
    state => state.loading,
  );

export {
  makeSelectLoading,
  selectCompanys,
  makeSelectCompanys,
  makeSelectCompanyFollows,
};
