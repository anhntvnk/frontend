import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Modal, Form, Input } from 'antd';
import { injectIntl, intlShape } from 'react-intl';
import messages from './messages';

function NotesModal({
  initialValues,
  visible,
  setVisible,
  setInitialValues,
  onCreate,
  intl,
}) {
  const [form] = Form.useForm();

  useEffect(() => {
    form.setFieldsValue(initialValues);
  }, [form, initialValues]);

  const onCancel = () => {
    setVisible(false);
    setInitialValues({});
    form.resetFields();
  };
  return (
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
            onCreate(values);
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
  );
}

NotesModal.propTypes = {
  initialValues: PropTypes.object,
  visible: PropTypes.bool,
  onCreate: PropTypes.func,
  setInitialValues: PropTypes.func,
  setVisible: PropTypes.func,
  intl: intlShape.isRequired,
};

export default injectIntl(NotesModal);
