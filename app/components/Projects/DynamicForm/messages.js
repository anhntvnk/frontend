/*
 * Note Messages
 *
 * This contains all the text for the Note component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'myp.containers.Note';

export default defineMessages({
  myNoteTitleReq: {
    id: `${scope}.note.titleReq`,
    defaultMessage: 'Tiêu đề không được để trống!',
  },
  myNoteInputTitle: {
    id: `${scope}.note.inputTitle`,
    defaultMessage: 'Nhập tiêu đề',
  },
  myNoteInputContent: {
    id: `${scope}.note.inputContent`,
    defaultMessage: 'Nhập nội dung',
  },
  myNoteContentReq: {
    id: `${scope}.note.contentReq`,
    defaultMessage: 'Nội dung không được để trống!',
  },
  myNoteAdd: {
    id: `${scope}.note.add`,
    defaultMessage: 'Thêm ghi chú',
  },
  myContactModalBtnOK: {
    id: `myp.containers.Contact.contact.modalBtnOK`,
    defaultMessage: 'Lưu lại',
  },
});
