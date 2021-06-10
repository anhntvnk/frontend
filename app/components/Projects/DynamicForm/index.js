import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { EditOutlined } from '@ant-design/icons';
import { Row, Col, Form, Button, List, Skeleton, Modal, Input } from 'antd';
import { injectIntl, intlShape, FormattedMessage } from 'react-intl';
import styled from 'styled-components';
import messages from './messages';
import logo from '../../../assets/images/logo/my-project.png';

function DynamicForm({ data, addContactProject, setProjectDetails, intl }) {
  const [notes, setNotes] = useState([]);
  const [initialValues, setInitialValues] = useState({});
  const [noteEdits, setNoteEdits] = useState({});
  const [visible, setVisible] = useState(false);
  const [form] = Form.useForm();

  useEffect(() => {
    form.setFieldsValue(initialValues);
  }, [initialValues]);

  const onCancel = () => {
    setVisible(false);
    setInitialValues({});
    setNoteEdits({});
  };

  useEffect(() => {
    if (notes) {
      // eslint-disable-next-line camelcase
      const currentNote = data.custom ? data.custom.note_data : [];
      setNotes(currentNote.sort((a, b) => new Date(b.time) - new Date(a.time)));
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
    const noteMapping = currentNote.filter(n => [noteEdits].indexOf(n) === -1);

    const newData = {
      ...data,
      custom: {
        note_data: [...noteMapping, ...newNote],
      },
    };
    setVisible(false);
    setNotes(
      [...noteMapping, ...newNote].sort(
        (a, b) => new Date(b.time) - new Date(a.time),
      ),
    );
    setProjectDetails(newData);
    addContactProject({ project: newData, location: 'ADD_NOTE' });
  };

  const onEditNote = item => {
    setNoteEdits(item);
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
              form.setFieldsValue({
                title: '',
                content: '',
              });
            }}
          >
            +
          </Button>
        </StyledHeader>
        <Form name="dynamic_form" onFinish={onFinish} autoComplete="off">
          <List
            itemLayout="horizontal"
            size="large"
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
      <Col
        lg={8}
        style={{
          justifyContent: 'center',
          display: 'flex',
          marginTop: '9px',
          marginLeft: '16px',
        }}
      >
        <img
          src={data.image || logo}
          width={220}
          height={220}
          alt=""
          className="vnk-logo"
        />
      </Col>

      <Modal
        visible={visible}
        title={intl.formatMessage({
          ...messages.myNoteAdd,
        })}
        okText={intl.formatMessage({
          ...messages.myContactModalBtnOK,
        })}
        cancelText={intl.formatMessage({
          ...messages.modalBtnExit,
        })}
        onCancel={onCancel}
        maskClosable={false}
        onOk={() => {
          form
            .validateFields()
            .then(values => {
              form.resetFields();
              onFinish(values);
            })
            .catch(info => {
              console.log('Đã có lỗi xảy ra!', info);
            });
        }}
      >
        <Form
          form={form}
          initialValues={initialValues}
          layout="vertical"
          name="form_in_modal"
        >
          <Form.Item
            name="title"
            label={intl.formatMessage({
              ...messages.myNoteInputTitle,
            })}
            rules={[
              {
                required: true,
                message: intl.formatMessage({
                  ...messages.myNoteTitleReq,
                }),
              },
            ]}
          >
            <Input name="full_name" />
          </Form.Item>
          <Form.Item
            name="content"
            label={intl.formatMessage({
              ...messages.myNoteInputContent,
            })}
            rules={[
              {
                required: true,
                message: intl.formatMessage({
                  ...messages.myNoteContentReq,
                }),
              },
            ]}
          >
            <Input />
          </Form.Item>
        </Form>
      </Modal>
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
