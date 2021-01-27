/* eslint-disable no-case-declarations */
/*
 * NotesReducer
 *
 * The reducer takes care of our data. Using actions, we can
 * update our application state. To add a new action,
 * add it to the switch statement in the reducer function
 *
 */

import produce from 'immer';
import { isEmpty as _isEmpty, get as _get } from 'lodash';
import { GET_NOTES_SUCCESS } from './constants';

// The initial state of the App
export const initialState = {
  notes: [],
  successMsg: false,
};

const mappingNotes = notes =>
  notes.map(note => ({
    id: _get(note, 'key'),
    title: _get(note, 'content'),
    start: _get(note, 'start') || _get(note, 'date'),
    end: _get(note, 'end') || _get(note, 'date'),
    allDay: _get(note, 'allDay') || true,
  }));

/* eslint-disable default-case, no-param-reassign */
const notesReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case GET_NOTES_SUCCESS:
        const {
          response: {
            custom: { notes },
          },
        } = action;
        if (!_isEmpty(notes)) {
          draft.notes = mappingNotes(notes);
        } else {
          draft.notes = [];
        }
        break;
      default:
        draft.notes = initialState.notes;
        draft.successMsg = initialState.successMsg;
    }
  });

export default notesReducer;
