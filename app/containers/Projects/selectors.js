/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectHome = state => state.home || initialState;

const makeSelectUsername = () =>
  createSelector(
    selectHome,
    homeState => homeState.username,
  );

const makeSelectProjects = () =>
  createSelector(
    selectHome,
    projectState => projectState.project,
  );

export { selectHome, makeSelectUsername, makeSelectProjects };
