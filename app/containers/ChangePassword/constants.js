/* eslint-disable prettier/prettier */
/*
 * ChangePassword Constants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

export const CHANGE_PASSWORD = 'vnk/ChangePassword/CHANGE_PASSWORD';
export const CHANGE_PASSWORD_SUCCESS = 'vnk/ChangePassword/CHANGE_PASSWORD_SUCCESS';
export const CHANGE_PASSWORD_ERROR = 'vnk/ChangePassword/CHANGE_PASSWORD_ERROR';