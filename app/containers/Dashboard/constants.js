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
const base = 'vnk/Projects/';
export const CHANGE_USERNAME = `${base}CHANGE_USERNAME`;
export const LOAD_PROJECTS = `${base}LOAD_PROJECTS`;
export const LOAD_PROJECTS_SUCCESS = `${base}LOAD_PROJECTS_SUCCESS`;
export const LOAD_PROJECTS_ERROR = `${base}LOAD_PROJECTS_ERROR`;
export const LOAD_PROJECTS_FOLLOW = `${base}LOAD_PROJECTS_FOLLOW`;
export const LOAD_PROJECTS_FOLLOW_SUCCESS = `${base}LOAD_PROJECTS_FOLLOW_SUCCESS`;
export const LOAD_PROJECTS_FOLLOW_ERROR = `${base}LOAD_PROJECTS_FOLLOW_ERROR`;
export const LOAD_COMPANYS = `${base}LOAD_COMPANYS`;
export const LOAD_COMPANYS_SUCCESS = `${base}LOAD_COMPANYS_SUCCESS`;
export const LOAD_COMPANYS_ERROR = `${base}LOAD_COMPANYS_ERROR`;

export const LOAD_REPOS = `${base}LOAD_REPOS`;
export const LOAD_REPOS_SUCCESS = `${base}LOAD_REPOS_SUCCESS`;
export const LOAD_REPOS_ERROR = `${base}LOAD_REPOS_ERROR`;
