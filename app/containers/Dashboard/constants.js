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
export const LOAD_DATA_DASHBOARD = `${base}LOAD_DATA_DASHBOARD`;
export const LOAD_DATA_DASHBOARD_SUCCESS = `${base}LOAD_DATA_DASHBOARD_SUCCESS`;
export const LOAD_DATA_DASHBOARD_ERROR = `${base}LOAD_DATA_DASHBOARD_ERROR`;