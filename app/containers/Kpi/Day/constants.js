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

export const LOAD_KPI = 'vnk/kpis/LOAD_KPI';
export const LOAD_KPI_SUCCESS = 'vnk/kpis/LOAD_KPI_SUCCESS';
export const LOAD_KPI_ERROR = 'vnk/kpis/LOAD_KPI_ERROR';
export const LOAD_ALL_KPI = 'vnk/kpis/LOAD_ALL_KPI';
export const LOAD_ALL_KPI_SUCCESS = 'vnk/kpis/LOAD_ALL_KPI_SUCCESS';
export const LOAD_ALL_KPI_ERROR = 'vnk/kpis/LOAD_ALL_KPI_ERROR';
export const LOAD_USER = 'vnk/kpis/LOAD_USER';
export const LOAD_USER_SUCCESS = 'vnk/kpis/LOAD_USER_SUCCESS';
export const LOAD_USER_ERROR = 'vnk/kpis/LOAD_USER_ERROR';