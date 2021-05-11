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
import { filter as _filter, concat as _concat, includes as _includes, get as _get } from 'lodash';
import moment from 'moment';
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

const mappingProject = response => {
  const { followedProjects, projectAvaiable, timeShowProject } = response;
  const getIdFollowedProjects = followedProjects.map(
    fl => fl.parent_project_id,
  );

  const projectShow = _filter(projectAvaiable, item => moment(item.last_modified).isSameOrAfter(timeShowProject));
  const listProject =
    followedProjects.length > 0
      ? _concat(followedProjects, _filter(projectShow, item => !_includes(getIdFollowedProjects, item.id)))
      : projectAvaiable;

  return listProject.map(project => Object.assign(project, { is_follow: _get(project, 'is_follow', false) }))
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
        draft.project = mappingProject(response);
        draft.followedProjects = response.followedProjects;
        draft.loading = false;
        break;
      case CHANGE_FOLLOW:
        draft.loading = false;
        break;
      case CHANGE_FOLLOW_SUCCESS:
        const newProject = updateProjectFollows(state.project, response.parent_project_id);
        console.log(newProject, 'newProject');
        draft.project = newProject;
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
