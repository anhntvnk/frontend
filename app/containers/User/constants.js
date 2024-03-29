/* eslint-disable prettier/prettier */
/*
 * ProcedureConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

export const LOAD_USER = 'vnk/User/LOAD_USER';
export const LOAD_USER_SUCCESS = 'vnk/User/LOAD_USER_SUCCESS';
export const LOAD_USER_ERROR = 'vnk/User/LOAD_USER_ERROR';
export const LOAD_LIST_USER = 'vnk/User/LOAD_LIST_USER';
export const LOAD_LIST_USER_SUCCESS = 'vnk/User/LOAD_LIST_USER_SUCCESS';
export const LOAD_LIST_USER_ERROR = 'vnk/User/LOAD_LIST_USER_ERROR';
export const LOAD_PACKAGE_ORDER = 'vnk/User/LOAD_PACKAGE_ORDER';
export const LOAD_PACKAGE_ORDER_SUCCESS = 'vnk/User/LOAD_PACKAGE_ORDER_SUCCESS';
export const LOAD_PACKAGE_ORDER_ERROR = 'vnk/User/LOAD_PACKAGE_ORDER_ERROR';
export const RESET_FORM = 'vnk/User/RESET_FORM';