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

export const LOAD_KPI = 'vnk/KPI/Settings/LOAD_KPI';
export const LOAD_KPI_SUCCESS = 'vnk/KPI/Settings/LOAD_KPI_SUCCESS';
export const LOAD_KPI_ERROR = 'vnk/KPI/Settings/LOAD_KPI_ERROR';
export const LOAD_ALL_KPI = 'vnk/KPI/Settings/LOAD_ALL_KPI';
export const LOAD_ALL_KPI_SUCCESS = 'vnk/KPI/Settings/LOAD_ALL_KPI_SUCCESS';
export const LOAD_ALL_KPI_ERROR = 'vnk/KPI/Settings/LOAD_ALL_KPI_ERROR';
export const UPDATE_KPI = 'vnk/KPI/Settings/UPDATE_KPI';
export const UPDATE_KPI_SUCCESS = 'vnk/KPI/Settings/UPDATE_KPI_SUCCESS';
export const UPDATE_KPI_ERROR = 'vnk/KPI/Settings/UPDATE_KPI_ERROR';

export const stateDefault = {
  kpiConfig: {
    salary: 300000,
    daily_score: 15,
    date_count: 24,
    bonus: 10,
  },
  kpiConfigToday: {
    call: {
      point: 1,
      total: 10,
    },
    meet: {
      point: 3,
      total: 2,
    },
    offers: {
      point: 5,
      total: 0,
    },
    closeOrder: {
      point: 15,
      total: 1,
    },
  },
};
