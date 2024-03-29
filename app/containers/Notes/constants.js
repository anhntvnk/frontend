/* eslint-disable prettier/prettier */
/*
 * NotesConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

export const GET_NOTES = 'vnk/Notes/GET_NOTES';
export const GET_NOTES_SUCCESS = 'vnk/Notes/GET_NOTES_SUCCESS';
export const GET_NOTES_ERROR = 'vnk/Notes/GET_NOTES_ERROR';
export const UPDATE_NOTES = 'vnk/Notes/UPDATE_NOTES';
export const UPDATE_NOTES_SUCCESS = 'vnk/Notes/UPDATE_NOTES_SUCCESS';
export const UPDATE_NOTES_ERROR = 'vnk/Notes/UPDATE_NOTES_ERROR';
export const RESET_STATE = 'vnk/Notes/RESET_STATE';
