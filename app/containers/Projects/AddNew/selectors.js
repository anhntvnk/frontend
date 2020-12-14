/**
 * Project selectors
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectNewProject = state => state.addProject || initialState;

const successMessageSelector = () =>
  createSelector(
    selectNewProject,
    state => state.successMessage,
  );
const errorSelector = () =>
  createSelector(
    selectNewProject,
    state => state.error,
  );

export { selectNewProject, successMessageSelector, errorSelector };
