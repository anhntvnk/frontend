/**
 * Project selectors
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectProjects = state => state.projects || initialState;

const makeSelectProjects = () =>
  createSelector(
    selectProjects,
    projectState => projectState.project,
  );

export { selectProjects, makeSelectProjects };
