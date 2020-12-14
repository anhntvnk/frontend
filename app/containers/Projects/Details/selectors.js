/**
 * Project selectors
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectProjects = state => state.projectDetails || initialState;

const makeSelectProjects = () =>
  createSelector(
    selectProjects,
    state => state.projectDetails,
  );

export { makeSelectProjects };
