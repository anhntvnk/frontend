/* eslint-disable no-case-declarations */
/*
 * CompanysReducer
 *
 * The reducer takes care of our data. Using actions, we can
 * update our application state. To add a new action,
 * add it to the switch statement in the reducer function
 *
 */

import produce from 'immer';
import { includes as _includes } from 'lodash';
import {
  LOAD_COMPANYS_SUCCESS,
  LOAD_COMPANYS_FOLLOW_SUCCESS,
  LOAD_COMPANYS,
} from './constants';

// The initial state of the App
export const initialState = {
  companys: [],
  companyFollows: [],
};

// compare company follow
const mappingCompany = (companys, companyFollows) => {
  const companyFollowId = companyFollows.map(cp => cp.id);

  const newCompanys = companys.map(company =>
    Object.assign(company, {
      is_follow: _includes(companyFollowId, company.id),
    }),
  );

  // remove company same name is duplicate
  return [...new Map(newCompanys.map(item => [item.name, item])).values()];
};

/* eslint-disable default-case, no-param-reassign */
const companyReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case LOAD_COMPANYS_SUCCESS:
        const {
          response: { companys, companyFollows },
        } = action;

        draft.loading = false;
        draft.companys = mappingCompany(companys, companyFollows);
        draft.companyFollows = companyFollows.map(company =>
          Object.assign(company, {
            is_follow: true,
          }),
        );
        break;
      case LOAD_COMPANYS_FOLLOW_SUCCESS:
        const {
          response: { companyId, isFollow },
        } = action;

        const companyIndex = state.companys.findIndex(
          company => company.id === companyId,
        );
        draft.loading = false;
        draft.companys[companyIndex].is_follow = isFollow;
        break;
      case LOAD_COMPANYS:
        draft.loading = true;
        break;
    }
  });

export default companyReducer;
