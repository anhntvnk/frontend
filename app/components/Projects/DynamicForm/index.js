import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { EditOutlined } from '@ant-design/icons';
import { Row, Col, Form, Button, List, Skeleton } from 'antd';
import { injectIntl, intlShape, FormattedMessage } from 'react-intl';
import styled from 'styled-components';
import messages from './messages';
import NotesModal from './NotesModal';
import logo from '../../../assets/images/logo/my-project.png';

function DynamicForm({ data, addContactProject, setProjectDetails }) {
  const [notes, setNotes] = useState([]);
  const [initialValues, setInitialValues] = useState({});
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (notes) {
      // eslint-disable-next-line camelcase
      const currentNote = data.custom ? data.custom.note_data : [];
      setNotes(currentNote);
    }
  }, []);

  const onFinish = values => {
    const newNote = [
      {
        time: moment().format('YYYY-MM-DD HH:mm'),
        ...values,
      },
    ];

    // eslint-disable-next-line camelcase
    const currentNote = data.custom ? data.custom.note_data : [];
    const newData = {
      ...data,
      custom: {
        note_data: [...currentNote, ...newNote],
      },
    };
    setVisible(false);
    setNotes([...currentNote, ...newNote]);
    setProjectDetails(newData);
    addContactProject({ project: newData, location: 'ADD_NOTE' });
  };

  const onEditNote = item => {
    setInitialValues(item);
    setVisible(true);
  };

  return (
    <Row className="pd-bottom">
      <Col lg={9} xs={22} className="dynamic-form">
        <StyledHeader>
          <span>
            <b>
              <FormattedMessage {...messages.myNoteList} />
            </b>
          </span>
          <Button
            type="primary"
            style={{ float: 'right', marginTop: '-6px' }}
            onClick={() => {
              setVisible(true);
            }}
          >
            +
          </Button>
        </StyledHeader>
        <Form name="dynamic_form" onFinish={onFinish} autoComplete="off">
          <List
            itemLayout="horizontal"
            pagination={{
              pageSize: 5,
            }}
            bordered
            dataSource={notes}
            renderItem={item => (
              <List.Item>
                <Skeleton avatar title={false} loading={item.loading} active>
                  <List.Item.Meta
                    title={
                      <span>
                        {item.title}&nbsp;-&nbsp;
                        <span style={{ fontWeight: 300 }}>
                          {moment(item.time, 'YYYY-MM-DD HH:mm').format(
                            'YYYY-MM-DD HH:mm',
                          )}
                        </span>
                      </span>
                    }
                    description={item.content}
                  />
                  <Button type="link" danger onClick={() => onEditNote(item)}>
                    <EditOutlined />
                  </Button>
                </Skeleton>
              </List.Item>
            )}
          />
        </Form>
      </Col>
      <Col lg={8} style={{ justifyContent: 'center', display: 'flex' }}>
        <img
          src={data.image || logo}
          width={220}
          height={220}
          alt=""
          className="vnk-logo"
        />
      </Col>

      <NotesModal
        visible={visible}
        setVisible={setVisible}
        initialValues={initialValues}
        setInitialValues={setInitialValues}
        onCreate={onFinish}
      />
    </Row>
  );
}

DynamicForm.propTypes = {
  data: PropTypes.any,
  addContactProject: PropTypes.any,
  setProjectDetails: PropTypes.any,
  intl: intlShape.required,
};

const StyledHeader = styled.div`
  margin-bottom: 15px;
  font-size: 16px;
  color: #b7252c;
`;

export default injectIntl(DynamicForm);
