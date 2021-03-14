import React from 'react';
import PropTypes from 'prop-types';
import { Modal, Form, Input } from 'antd';

function ContactModal({ visible, onCreate, onCancel }) {
  const [form] = Form.useForm();
  return (
    <Modal
      visible={visible}
      title="Thêm người liên hệ"
      okText="Lưu lại"
      cancelText="Thoát"
      onCancel={onCancel}
      onOk={() => {
        form
          .validateFields()
          .then(values => {
            form.resetFields();
            onCreate(values);
          })
          .catch(info => {
            console.log('Đã có lỗi xảy ra!', info);
          });
      }}
    >
      <Form form={form} layout="vertical" name="form_in_modal">
        <Form.Item
          name="full_name"
          label="Tên đầy đủ"
          rules={[
            {
              required: true,
              message: 'Họ và tên là bắt buộc!',
            },
          ]}
        >
          <Input name="full_name" />
        </Form.Item>
        <Form.Item
          name="position"
          label="Chức danh"
          rules={[
            {
              required: true,
              message: 'Chức danh là bắt buộc!',
            },
          ]}
        >
          <Input name="position" />
        </Form.Item>
        <Form.Item
          name="phone"
          label="Mobile"
          rules={[
            {
              required: true,
              message: 'Số điện thoại là bắt buộc!',
            },
          ]}
        >
          <Input name="phone" />
        </Form.Item>
        <Form.Item
          name="email"
          label="Email"
          rules={[
            {
              type: 'email',
              message: 'Địa chỉ email không hợp lệ!',
            },
          ]}
        >
          <Input name="email" />
        </Form.Item>
        <Form.Item name="type" label="Vai trò">
          <Input name="type" />
        </Form.Item>
        <Form.Item name="company" label="Công Ty">
          <Input name="company" />
        </Form.Item>
        <Form.Item name="address" label="Địa chỉ (nhà)">
          <Input name="address" />
        </Form.Item>
      </Form>
    </Modal>
  );
}

ContactModal.propTypes = {
  visible: PropTypes.bool,
  onCreate: PropTypes.func,
  onCancel: PropTypes.func,
};

export default ContactModal;
