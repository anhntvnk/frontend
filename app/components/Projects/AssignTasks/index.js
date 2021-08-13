import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { EditOutlined } from '@ant-design/icons';
import {
  Row,
  Col,
  Form,
  Button,
  List,
  Skeleton,
  Modal,
  Input,
  Select,
} from 'antd';
import { injectIntl, intlShape } from 'react-intl';
import styled from 'styled-components';
import { getUserId } from '../../../../services/auth';
import messages from './messages';
import logo from '../../../assets/images/logo/my-project.png';

const { Option } = Select;

function AssignTasks({ data, projectID, addTask, intl }) {
  const [notes, setNotes] = useState([]);
  const [assignTo, setAssignTo] = useState(null);
  const [initialValues, setInitialValues] = useState({});
  const [visible, setVisible] = useState(false);
  const [isDirty, setIsDirty] = useState(false);
  const [form] = Form.useForm();

  useEffect(() => {
    form.setFieldsValue(initialValues);
  }, [initialValues]);

  const onCancel = () => {
    setVisible(false);
    setInitialValues({});
  };

  const onChange = values => {
    const user = JSON.parse(values);
    setAssignTo(user.id);
    setNotes(user.task);
    setIsDirty(true);
  };

  const onFinish = values => {
    const newTask = [
      {
        user_id: assignTo,
        project_id: projectID,
        created_by: getUserId(),
        ...values,
        created: moment().format('YYYY-MM-DD HH:mm'),
      },
    ];

    setNotes([...notes, ...newTask]);
    addTask({ newTask, location: 'ADD_TASK' });
    setVisible(false);
  };

  const onEditNote = item => {
    // setNoteEdits(item);
    setInitialValues(item);
    setVisible(true);
  };

  return (
    <Row className="pd-bottom">
      <Col lg={12} xs={22} className="dynamic-form">
        <StyledHeader>
          <span>
            {data && data.length > 0 && (
              <Select
                showSearch
                style={{ width: 300 }}
                placeholder="Select a person"
                optionFilterProp="children"
                onChange={onChange}
                filterOption={(input, option) =>
                  option.children.toLowerCase().indexOf(input.toLowerCase()) >=
                  0
                }
              >
                {data.map(user => (
                  <Option value={JSON.stringify(user)}>
                    {user.full_name}
                    <b>
                      {user.saleteam_position && ` (${user.saleteam_position})`}
                    </b>
                  </Option>
                ))}
              </Select>
            )}
          </span>
          {isDirty && (
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
          )}
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
                        {item.content}&nbsp;-&nbsp;
                        <span style={{ fontWeight: 300 }}>
                          {moment(item.created, 'YYYY-MM-DD HH:mm').format(
                            'YYYY-MM-DD HH:mm',
                          )}
                        </span>
                      </span>
                    }
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
          ...messages.taskAssign,
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

AssignTasks.propTypes = {
  data: PropTypes.any,
  projectID: PropTypes.number,
  addTask: PropTypes.func,
  intl: intlShape.required,
};

const StyledHeader = styled.div`
  margin-bottom: 15px;
  font-size: 16px;
  color: #b7252c;
`;

export default injectIntl(AssignTasks);
