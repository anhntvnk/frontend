/**
 * Project selectors
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectCompanys = state => state.companys || initialState;

const makeSelectCompanys = () =>
  createSelector(
    selectCompanys,
    Companystate => Companystate.company,
  );

export { selectCompanys, makeSelectCompanys };
