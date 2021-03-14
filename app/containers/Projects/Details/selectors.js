/**
 * Project selectors
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectProjects = state => state.projectDetails || initialState;

const makeSelectSuccessMsg = () =>
  createSelector(
    selectProjects,
    state => state.successMsg,
  );

export { makeSelectSuccessMsg };
