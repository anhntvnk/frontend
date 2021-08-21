/* eslint-disable prettier/prettier */
/*
 * ProjectDetailsConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

export const LOAD_PROJECT_DETAILS = 'VNK/PROJECTS/DETAILS/LOAD_PROJECT_DETAILS';
export const LOAD_PROJECT_DETAILS_SUCCESS = 'VNK/PROJECTS/DETAILS/LOAD_PROJECT_DETAILS_SUCCESS';
export const LOAD_PROJECT_DETAILS_ERROR = 'VNK/PROJECTS/DETAILS/LOAD_PROJECT_DETAILS_ERROR';
export const ADD_PROJECT_CONTACT = 'VNK/PROJECTS/DETAILS/ADD_PROJECT_CONTACT';
export const ADD_PROJECT_CONTACT_SUCCESS = 'VNK/PROJECTS/DETAILS/ADD_PROJECT_CONTACT_SUCCESS';
export const ADD_PROJECT_CONTACT_ERROR = 'VNK/PROJECTS/DETAILS/ADD_PROJECT_CONTACT_ERROR';
export const LOAD_LIST_USER = 'VNK/PROJECTS/DETAILS/LOAD_LIST_USER';
export const LOAD_LIST_USER_SUCCESS = 'VNK/PROJECTS/DETAILS/LOAD_LIST_USER_SUCCESS';
export const LOAD_LIST_USER_ERROR = 'VNK/PROJECTS/DETAILS/LOAD_LIST_USER_ERROR';
export const ADD_TASK = 'VNK/PROJECTS/DETAILS/ADD_TASK';
export const ADD_TASK_SUCCESS = 'VNK/PROJECTS/DETAILS/ADD_TASK_SUCCESS';
export const ADD_TASK_ERROR = 'VNK/PROJECTS/DETAILS/ADD_TASK_ERROR';