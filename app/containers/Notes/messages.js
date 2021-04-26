/*
 * Notes Messages
 *
 * This contains all the text for the Notes component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'myp.containers.Notes';

export default defineMessages({
  myNoteTitle: {
    id: `${scope}.my_notes.title`,
    defaultMessage: 'Công việc hàng ngày',
  },
  myNotebtnBack: {
    id: `${scope}.my_notes.btnBack`,
    defaultMessage: 'Quay lại',
  },
  myNotebtnSave: {
    id: `${scope}.my_notes.btnSave`,
    defaultMessage: 'Lưu lại',
  },
  myNotePrompt: {
    id: `${scope}.my_notes.prompt`,
    defaultMessage: 'Nội dung',
  },
});
