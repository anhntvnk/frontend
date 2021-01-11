import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Form, Input, Button, Space } from 'antd';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';

function DynamicForm({ data }) {
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
                          message: 'Tiêu đề không được để trống!',
                        },
                      ]}
                    >
                      <Input placeholder="Nhập tiêu đề" />
                    </Form.Item>
                    <Form.Item
                      {...field}
                      name={[field.name, 'content']}
                      fieldKey={[field.fieldKey, 'content']}
                      rules={[
                        {
                          required: true,
                          message: 'Nội dung không được để trống!',
                        },
                      ]}
                    >
                      <Input placeholder="Nhập nội dung" />
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
                    Thêm ghi chú
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
};

export default DynamicForm;
