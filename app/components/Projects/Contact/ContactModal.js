import React from 'react';
import PropTypes from 'prop-types';
import { Modal, Form, Input } from 'antd';
import { injectIntl, intlShape } from 'react-intl';
import messages from './messages';

function ContactModal({ visible, onCreate, onCancel, intl }) {
  const [form] = Form.useForm();
  return (
    <Modal
      visible={visible}
      title={intl.formatMessage({
        ...messages.myContactModalTitle,
      })}
      okText={intl.formatMessage({
        ...messages.myContactModalBtnOK,
      })}
      cancelText={intl.formatMessage({
        ...messages.myContactModalBtnExit,
      })}
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
          label={intl.formatMessage({
            ...messages.myContactModalFullName,
          })}
          rules={[
            {
              required: true,
              message: intl.formatMessage({
                ...messages.myContactModalFullNameReq,
              }),
            },
          ]}
        >
          <Input name="full_name" />
        </Form.Item>
        <Form.Item
          name="position"
          label={intl.formatMessage({
            ...messages.myContactModalPosition,
          })}
          rules={[
            {
              required: true,
              message: intl.formatMessage({
                ...messages.myContactModalPositionReq,
              }),
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
              message: intl.formatMessage({
                ...messages.myContactModalPhoneReq,
              }),
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
              message: intl.formatMessage({
                ...messages.myContactModalEmailReq,
              }),
            },
          ]}
        >
          <Input name="email" />
        </Form.Item>
        <Form.Item
          name="type"
          label={intl.formatMessage({
            ...messages.myContactModalRole,
          })}
        >
          <Input name="type" />
        </Form.Item>
        <Form.Item
          name="company"
          label={intl.formatMessage({
            ...messages.myContactModalCompany,
          })}
        >
          <Input name="company" />
        </Form.Item>
        <Form.Item
          name="address"
          label={intl.formatMessage({
            ...messages.myContactModalAddress,
          })}
        >
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
  intl: intlShape.isRequired,
};

export default injectIntl(ContactModal);
