/* eslint-disable prettier/prettier */
/* eslint-disable no-case-declarations */
/*
 * ProjectsReducer
 *
 * The reducer takes care of our data. Using actions, we can
 * update our application state. To add a new action,
 * add it to the switch statement in the reducer function
 *
 */

import produce from 'immer';
import * as _ from 'lodash';
import {
  LOAD_PROJECTS,
  LOAD_PROJECTS_SUCCESS,
  CHANGE_FOLLOW,
  CHANGE_FOLLOW_SUCCESS,
  UN_FOLLOW_SUCCESS,
  LOADING,
} from './constants';

// The initial state of the App
export const initialState = {
  loading: true,
  project: [],
  followedProjects: [],
};

const mappingProject = (followedProjects, projectAvaiable) => {
  const getIdFollowedProjects = followedProjects.map(
    fl => fl.parent_project_id,
  );

  const listProject =
    followedProjects.length > 0
      ? _.concat(followedProjects, _.filter(projectAvaiable, item => !_.includes(getIdFollowedProjects, item.id)))
      : projectAvaiable;

  return listProject.map(project => Object.assign(project, { is_follow: _.get(project, 'is_follow', false) }))
}


const updateProjectFollows = (projects, projectID) =>
  projects.map(project =>
    project.id === projectID
      ? { ...project, is_follow: true, parent_project_id: projectID }
      : project,
  );
  
const unFollowProject = (projects, projectID) =>
  projects.map(project =>
    project.id === projectID ? { ...project, is_follow: false } : project,
  );

/* eslint-disable default-case, no-param-reassign */
const projectReducer = (state = initialState, action) =>
  produce(state, draft => {
    const { response } = action;
    switch (action.type) {
      case LOAD_PROJECTS:
        draft.loading = true;
        break;
      case LOAD_PROJECTS_SUCCESS:
        draft.project = mappingProject(response.followedProjects, response.projectAvaiable);
        draft.followedProjects = response.followedProjects;
        draft.loading = false;
        break;
      case CHANGE_FOLLOW:
        draft.loading = false;
        break;
      case CHANGE_FOLLOW_SUCCESS:
        draft.project = updateProjectFollows(state.project, response.parent_project_id);
        break;
      case UN_FOLLOW_SUCCESS:
        draft.project = unFollowProject(state.project, response.id);
        break;
      case LOADING:
        draft.loading = action.isLoading;
        break;
    }
  });

export default projectReducer;
