/*
 * ProjectConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */
export const CHANGE_USERNAME = 'vnk/Projects/CHANGE_USERNAME';
export const LOAD_PROJECTS = 'vnk/Projects/LOAD_PROJECTS';
export const LOAD_PROJECTS_SUCCESS = 'vnk/Projects/LOAD_PROJECTS_SUCCESS';
export const LOAD_PROJECTS_ERROR = 'vnk/Projects/LOAD_PROJECTS_ERROR';

export const CHANGE_FOLLOW = 'vnk/Projects/CHANGE_FOLLOW';
export const CHANGE_FOLLOW_SUCCESS = 'vnk/Projects/CHANGE_FOLLOW_SUCCESS';
export const UN_FOLLOW = 'vnk/Projects/UN_FOLLOW';
export const UN_FOLLOW_SUCCESS = 'vnk/Projects/UN_FOLLOW_SUCCESS';
export const LOAD_REPOS_ERROR = 'vnk/Projects/LOAD_REPOS_ERROR';
export const LOADING = 'vnk/Projects/LOADING';
