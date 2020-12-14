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

const makeSelectLoading = () =>
  createSelector(
    selectProjects,
    projectState => projectState.loading,
  );

const makeSelectFollowedProjects = () =>
  createSelector(
    selectProjects,
    projectState => projectState.followedProjects,
  );

export {
  selectProjects,
  makeSelectProjects,
  makeSelectLoading,
  makeSelectFollowedProjects,
};
