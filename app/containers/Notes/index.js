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
import moment from 'moment';
import { createStructuredSelector } from 'reselect';
import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import { Button, Modal } from 'antd';
import styled from 'styled-components';
import { makeSelectNotes, makeSelectUserData } from './selectors';
import reducer from './reducer';
import saga from './saga';
import { getNotes, updateNotes } from './actions';
import '!style-loader!css-loader!react-big-calendar/lib/css/react-big-calendar.css';

const key = 'notes';
const localizer = momentLocalizer(moment);

// eslint-disable-next-line react/prop-types
export function Notes({
  history,
  notes,
  userData,
  successMsg,
  onFetchNotes,
  onUpdateNotes,
}) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  const [events, setEvents] = useState(notes);
  const [isDurty, setIsDurty] = useState(false);

  useEffect(() => {
    onFetchNotes();
  }, []);

  useEffect(() => {
    if (notes) {
      setEvents(notes);
    }
  }, [notes]);

  const handleSelect = ({ start, end }) => {
    // eslint-disable-next-line no-alert
    const title = window.prompt('Nội dung');

    if (title) {
      const newEvents = [
        ...events,
        {
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
    modalShowTitle(event);
  };

  function modalShowTitle(event) {
    Modal.success({
      content: event.title,
    });
  }

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
          Quay lại
        </Button>
        <h1>Công việc hàng ngày</h1>
      </CenteredSectionWithBack>
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

      <StyledButton
        type="primary"
        onClick={() => {
          Object.assign(userData.custom.notes, events);
          // onUpdateNotes(events);
        }}
        disabled={!isDurty}
      >
        Lưu lại
      </StyledButton>
    </NotesComponent>
  );
}

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
  max-width: 800px;
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
  // successMsg: PropTypes.bool,
};

const mapStateToProps = createStructuredSelector({
  notes: makeSelectNotes(),
  userData: makeSelectUserData(),
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

export default compose(withConnect)(withRouter(Notes));
