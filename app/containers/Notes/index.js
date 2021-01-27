/* eslint-disable dot-notation */
/* eslint-disable jsx-a11y/anchor-is-valid */
/*
 * Settings KPI Page
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React, { useReducer, useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Helmet } from 'react-helmet';
import { ArrowLeftOutlined } from '@ant-design/icons';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import { isEmpty as _isEmpty, get as _get } from 'lodash';
import { createStructuredSelector } from 'reselect';
import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import { Card, Button } from 'antd';
import styled from 'styled-components';
import { makeSelectNotes } from './selectors';
import reducer from './reducer';
import saga from './saga';
import { getNotes } from './actions';
import '!style-loader!css-loader!react-big-calendar/lib/css/react-big-calendar.css';

const key = 'notes';
const { Meta } = Card;
const localizer = momentLocalizer(moment);

// const eventsMockup = [
//   {
//     id: 0,
//     title: 'Board meeting',
//     start: new Date(2021, 0, 29, 9, 0, 0),
//     end: new Date(2021, 0, 29, 13, 0, 0),
//   },
//   {
//     id: 1,
//     title: 'MS training',
//     allDay: true,
//     start: new Date(2021, 0, 29, 14, 0, 0),
//     end: new Date(2021, 0, 29, 16, 30, 0),
//   },
//   {
//     id: 2,
//     title: 'Team lead meeting',
//     start: new Date(2021, 0, 29, 8, 30, 0),
//     end: new Date(2021, 0, 29, 12, 30, 0),
//   },
//   {
//     id: 11,
//     title: 'Birthday Party',
//     start: new Date(2021, 0, 30, 7, 0, 0),
//     end: new Date(2021, 0, 30, 10, 30, 0),
//   },
// ];

// eslint-disable-next-line react/prop-types
export function Notes({ history, notes, successMsg, onFetchNotes }) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  const [events, setEvents] = useState(notes);

  useEffect(() => {
    onFetchNotes();
  }, []);

  useEffect(() => {
    if (notes) {
      setEvents(notes);
    }
  }, [notes]);

  // useEffect(() => {
  //   if (!_isEmpty(notes)) {
  //     const {
  //       custom: { notes: notesByUser },
  //     } = notes;

  //     const mappingNotes = notesByUser.map(note => ({
  //       id: _get(note, 'key'),
  //       title: _get(note, 'content'),
  //       start: _get(note, 'start') || _get(note, 'day'),
  //       end: _get(note, 'end') || _get(note, 'day'),
  //       allDay: _get(note, 'allDay') || false,
  //     }));

  //     setEvents(mappingNotes);
  //   }
  // }, [notes]);

  const handleSelect = ({ start, end }) => {
    const title = window.prompt('New Event name');

    if (title) {
      const newEvents = [
        ...events,
        {
          start,
          end,
          title,
        },
      ];

      setEvents(newEvents);
    }
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
          Quay lại
        </Button>
        <h1>Công việc hàng ngày</h1>
      </CenteredSectionWithBack>
      <Calendar
        selectable
        localizer={localizer}
        events={events || notes}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
        onSelectSlot={handleSelect}
        // onSelectEvent={event => alert(event.title)}
      />
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

Notes.propTypes = {
  history: PropTypes.object,
  onFetchNotes: PropTypes.func,
  notes: PropTypes.any,
  // successMsg: PropTypes.bool,
};

const mapStateToProps = createStructuredSelector({
  notes: makeSelectNotes(),
  // successMsg: makeSelectKPISettingsMsg(),
});

export function mapDispatchToProps(dispatch) {
  return {
    // onUpdateKPI: data => dispatch(updateKPI(data)),
    onFetchNotes: () => dispatch(getNotes()),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(withRouter(Notes));
