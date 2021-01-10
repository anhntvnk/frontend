/* eslint-disable prettier/prettier */
/*
 * CompanyConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

export const LOADING = 'vnk/Company/LOADING';

export const LOAD_COMPANYS = 'vnk/Company/LOAD_COMPANYS';
export const LOAD_COMPANYS_SUCCESS = 'vnk/Company/LOAD_COMPANYS_SUCCESS';
export const LOAD_COMPANYS_ERROR = 'vnk/Company/LOAD_COMPANYS_ERROR';
export const LOAD_COMPANYS_FOLLOW = 'vnk/Company/LOAD_COMPANYS_FOLLOW';
export const LOAD_COMPANYS_UNFOLLOW = 'vnk/Company/LOAD_COMPANYS_UNFOLLOW';
export const LOAD_COMPANYS_FOLLOW_SUCCESS = 'vnk/Company/LOAD_COMPANYS_FOLLOW_SUCCESS';
export const LOAD_COMPANYS_FOLLOW_ERROR = 'vnk/Company/LOAD_COMPANYS_FOLLOW_ERROR';
