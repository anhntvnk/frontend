import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { Row, Col, Form, Input, Button } from 'antd';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { injectIntl, intlShape, FormattedMessage } from 'react-intl';
import styled from 'styled-components';
import messages from './messages';

const { TextArea } = Input;

function DynamicForm({ data, intl }) {
  const onFinish = values => {
    const newNote = values.note.map(v => ({
      time: moment().format('YYYY-MM-DD HH:mm'),
      ...v,
    }));

    const newData = {
      ...data,
      custom: {
        note_data: [...data.custom.note_data, ...newNote],
      },
    };

    console.log(newData, 'data');
  };

  return (
    <Row className="pd-bottom">
      <Col lg={12} xs={22} className="dynamic-form">
        <Form name="dynamic_form" onFinish={onFinish} autoComplete="off">
          <Form.List name="note">
            {(fields, { add, remove }) => (
              <>
                {fields.map(field => (
                  <div key={field.key} style={{ marginBottom: 8 }}>
                    <Form.Item
                      {...field}
                      name={[field.name, 'title']}
                      fieldKey={[field.fieldKey, 'title']}
                      rules={[
                        {
                          required: true,
                          message: (
                            <FormattedMessage {...messages.myNoteTitleReq} />
                          ),
                        },
                      ]}
                    >
                      <StyledInput
                        placeholder={intl.formatMessage({
                          ...messages.myNoteInputTitle,
                        })}
                      />
                    </Form.Item>
                    <Form.Item
                      {...field}
                      name={[field.name, 'content']}
                      fieldKey={[field.fieldKey, 'content']}
                      rules={[
                        {
                          required: true,
                          message: (
                            <FormattedMessage {...messages.myNoteContentReq} />
                          ),
                        },
                      ]}
                    >
                      <TextArea
                        placeholder={intl.formatMessage({
                          ...messages.myNoteInputContent,
                        })}
                        autoSize={{ minRows: 2, maxRows: 6 }}
                      />
                    </Form.Item>
                    <MinusCircleOutlined onClick={() => remove(field.name)} />
                  </div>
                ))}
                <Form.Item>
                  <Button
                    type="dashed"
                    className="dynamic-btn"
                    onClick={() => add()}
                    block
                    icon={<PlusOutlined />}
                  >
                    <FormattedMessage {...messages.myNoteAdd} />
                  </Button>
                </Form.Item>
              </>
            )}
          </Form.List>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              <FormattedMessage {...messages.myContactModalBtnOK} />
            </Button>
          </Form.Item>
        </Form>
      </Col>
      {/* <Col lg={8} style={{ justifyContent: 'center', display: 'flex' }}>
        <img
          src={_.get(data, 'image') || logo}
          width={220}
          alt=""
          className="vnk-logo"
        />
      </Col> */}
    </Row>
  );
}

DynamicForm.propTypes = {
  data: PropTypes.any,
  intl: intlShape.required,
};

const StyledInput = styled(Input)`
  &::placeholder {
    color: green;
  }
`;

export default injectIntl(DynamicForm);
