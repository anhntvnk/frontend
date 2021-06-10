/*
 * Notes Page
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Helmet } from 'react-helmet';
import { ArrowLeftOutlined } from '@ant-design/icons';
import { Calendar, Views, momentLocalizer } from 'react-big-calendar';
import { injectIntl, intlShape, FormattedMessage } from 'react-intl';
import moment from 'moment';
import { createStructuredSelector } from 'reselect';
import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import { Button, Modal, Form, Input } from 'antd';
import styled from 'styled-components';
import {
  // makeSelectErrors,
  makeSelectNotes,
  // makeSelectSuccess,
  makeSelectUserData,
} from './selectors';
import reducer from './reducer';
import saga from './saga';
import { getNotes, updateNotes } from './actions';
import '!style-loader!css-loader!react-big-calendar/lib/css/react-big-calendar.css';
import messages from './messages';

const key = 'notes';
const localizer = momentLocalizer(moment);

// eslint-disable-next-line react/prop-types
export function Notes({
  history,
  notes,
  userData,
  // successMsg,
  // errors,
  onFetchNotes,
  onUpdateNotes,
  intl,
}) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  const [events, setEvents] = useState(notes);
  const [noteOpenModal, setNoteOpenModal] = useState({});
  const [isDurty, setIsDurty] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [form] = Form.useForm();
  const user = JSON.parse(localStorage.getItem('user'));

  useEffect(() => {
    onFetchNotes();
  }, []);

  useEffect(() => {
    if (notes) {
      setEvents(notes);
    }
  }, [notes]);

  useEffect(() => {
    form.setFieldsValue(noteOpenModal);
  }, [form, noteOpenModal]);

  const handleSelect = ({ start, end }) => {
    // eslint-disable-next-line no-alert
    const title = window.prompt(
      intl.formatMessage({
        ...messages.myNotePrompt,
      }),
    );

    if (title) {
      const newEvents = [
        ...events,
        {
          id: Math.random(),
          start,
          end,
          title,
        },
      ];

      setIsDurty(true);
      setEvents(newEvents);
    }
  };

  const openEvents = event => {
    setNoteOpenModal(event);
    setIsModalVisible(true);
  };

  const updateNote = () => {
    const newNotes = Object.assign(userData.custom.notes, events).map(note => ({
      key: Math.random(),
      date: moment(note.start).toISOString(),
      content: note.title,
    }));

    setEvents(Object.assign(userData.custom.notes, events));

    const newData = {
      ...userData,
      password: user.password,
      custom: {
        fcmTokens: [],
        notes: newNotes,
      },
    };

    setIsDurty(false);
    onUpdateNotes(newData);
  };

  const handleOk = () => {
    form
      .validateFields()
      .then(newTitle => {
        const newData = events.map(e => {
          if (noteOpenModal.id === e.id) {
            return { ...e, title: newTitle.title };
          }

          return e;
        });

        const newNotes = Object.assign(userData.custom.notes, newData).map(
          note => ({
            key: Math.random(),
            date: moment(note.start).toISOString(),
            content: note.title,
          }),
        );

        const notesUpdate = {
          ...userData,
          password: user.password,
          custom: {
            fcmTokens: [],
            notes: newNotes,
          },
        };

        form.resetFields();
        setIsDurty(false);
        setEvents(Object.assign(userData.custom.notes, newData));
        onUpdateNotes(notesUpdate);
      })
      .catch(info => {
        console.log('Đã có lỗi xảy ra!', info);
      });
    setIsModalVisible(false);
    setNoteOpenModal('');
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    setNoteOpenModal('');
  };

  return (
    <NotesComponent>
      <Helmet>
        <title>Notes</title>
        <meta name="description" content="Notes" />
      </Helmet>
      <CenteredSectionWithBack>
        <Button
          type="primary"
          shape="round"
          icon={<ArrowLeftOutlined />}
          onClick={() => history.goBack()}
        >
          <FormattedMessage {...messages.myNotebtnBack} />
        </Button>
        <h1>
          <FormattedMessage {...messages.myNoteTitle} />
        </h1>
      </CenteredSectionWithBack>
      <StyleCalendar>
        <Calendar
          selectable
          localizer={localizer}
          culture="ar-AE"
          events={events || notes}
          defaultView={Views.WEEK}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 500 }}
          onSelectSlot={handleSelect}
          onSelectEvent={openEvents}
        />
        <StyledButton type="primary" onClick={updateNote} disabled={!isDurty}>
          <FormattedMessage {...messages.myNotebtnSave} />
        </StyledButton>
      </StyleCalendar>

      <Modal
        title={intl.formatMessage({
          ...messages.myNotePrompt,
        })}
        maskClosable={false}
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form
          form={form}
          initialValues={{
            title: noteOpenModal.title,
          }}
          layout="vertical"
          name="form_in_modal"
        >
          <Form.Item name="title">
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </NotesComponent>
  );
}

const StyleCalendar = styled.div`
  background-color: #f0f2f5;
  padding: 60px;
`;
const CenteredSectionWithBack = styled.section`
  text-align: center;
  margin: 50px 0px;
  text-transform: uppercase;
  .ant-btn {
    display: flex;
    align-items: center;
    float: left;
    margin-top: 6px;
    @media only screen and (max-width: 767.99px) {
      margin-top: 0;
    }
  }

  @media only screen and (max-width: 767.99px) {
    padding: 10px;
    font-size: 7px;
    margin: 30px 0px;
  }
`;

const NotesComponent = styled.div`
  height: 650px;
  dispay: block;
  max-width: 900px;
  margin: auto;
`;

const StyledButton = styled(Button)`
  float: right;
  margin: 20px 0px 50px 0px;
`;

Notes.propTypes = {
  history: PropTypes.object,
  onFetchNotes: PropTypes.func,
  onUpdateNotes: PropTypes.func,
  notes: PropTypes.any,
  userData: PropTypes.object,
  intl: intlShape.isRequired,
  // successMsg: PropTypes.bool,
  // errors: PropTypes.bool,
};

const mapStateToProps = createStructuredSelector({
  notes: makeSelectNotes(),
  userData: makeSelectUserData(),
  // errors: makeSelectErrors(),
  // successMsg: makeSelectSuccess(),
});

export function mapDispatchToProps(dispatch) {
  return {
    onUpdateNotes: data => dispatch(updateNotes(data)),
    onFetchNotes: () => dispatch(getNotes()),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(withRouter(injectIntl(Notes)));
