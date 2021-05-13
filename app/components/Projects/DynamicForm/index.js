import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Form, Input, Button, Space } from 'antd';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { injectIntl, intlShape, FormattedMessage } from 'react-intl';
import messages from './messages';

function DynamicForm({ data, intl }) {
  const onFinish = values => {
    console.log('Received values of form:', values);
  };

  return (
    <Row className="pd-bottom">
      <Col lg={16} xs={22} className="dynamic-form">
        <Form name="dynamic_form" onFinish={onFinish} autoComplete="off">
          <Form.List name="note">
            {(fields, { add, remove }) => (
              <>
                {fields.map(field => (
                  <Space
                    key={field.key}
                    style={{ display: 'flex', marginBottom: 8 }}
                    align="baseline"
                  >
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
                      <Input
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
                      <Input
                        placeholder={intl.formatMessage({
                          ...messages.myNoteInputContent,
                        })}
                      />
                    </Form.Item>
                    <MinusCircleOutlined onClick={() => remove(field.name)} />
                  </Space>
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
              Submit
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

export default injectIntl(DynamicForm);
