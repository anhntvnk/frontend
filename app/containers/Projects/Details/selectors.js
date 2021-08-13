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

const makeSelectProjects = () =>
  createSelector(
    selectProjects,
    state => state.projectInfo,
  );

const makeSelectListUser = () =>
  createSelector(
    selectProjects,
    state => state.listUser,
  );

export { makeSelectProjects, makeSelectSuccessMsg, makeSelectListUser };
