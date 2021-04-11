/* eslint-disable jsx-a11y/anchor-is-valid */
/*
 * ProjectPage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { compose } from 'redux';
import axios from 'axios';
import {
  Form,
  Input,
  Button,
  Upload,
  Row,
  Col,
  DatePicker,
  message,
} from 'antd';
import { ScheduleTwoTone, HomeTwoTone } from '@ant-design/icons';
import { createStructuredSelector } from 'reselect';
import moment from 'moment';
import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import H2 from 'components/H2';
import CenteredSection from 'components/CenteredSection';
import ROUTE from '../../../constants/routes';
import { addProject, uploadImage } from './actions';
import { successMessageSelector, errorSelector } from './selectors';
import reducer from './reducer';
import saga from './saga';
import './styles.less';

const key = 'addProject';
const { TextArea } = Input;

export function AddProject({
  history,
  successMessage,
  errorMgs,
  addNewProject,
}) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  const [fileList, setFileList] = useState([]);

  useEffect(() => {
    if (successMessage) {
      history.push(ROUTE.PROJECT, {
        successMessage,
      });
    }
  }, [successMessage]);

  useEffect(() => {
    if (errorMgs) {
      message.error(errorMgs);
    }
  }, [errorMgs]);

  const onFinish = values => {
    const formData = new FormData();
    formData.append('file', fileList[0].originFileObj);

    const data = {
      project: Object.assign(values, { status_code: 1 }),
      formData,
    };
    addNewProject(data);
  };

  const normFile = e => {
    if (Array.isArray(e)) {
      return e;
    }

    return e && e.fileList;
  };

  function disabledDate(current) {
    // Can not select days before today and today
    return current && current < moment().endOf('day');
  }

  const props = {
    onRemove: file => {
      const index = fileList.indexOf(file);
      const newFileList = fileList.slice();
      newFileList.splice(index, 1);
      setFileList(newFileList);
    },
    onChange: info => {
      let files = [...info.fileList];
      // 1. Limit the number of uploaded files
      // Only to show two recent uploaded files, and old ones will be replaced by the new
      files = files.slice(-1);
      // 2. Read from response and show file link
      files = files.map(file => {
        if (file.response) {
          // Component will show file.url as link
          // eslint-disable-next-line no-param-reassign
          file.url = file.response.url;
        }
        return file;
      });

      setFileList(files);
    },
    beforeUpload: () => {
      return false;
    },
  };

  return (
    <div className="add-project">
      <Helmet>
        <title>Thêm dự án mới</title>
        <meta name="description" content="Thêm dự án mới" />
      </Helmet>
      <CenteredSection>
        <H2 className="title">Thêm mới dự án</H2>
      </CenteredSection>

      <Form
        name="myp_add_project"
        layout="vertical"
        className="add-project-form"
        // initialValues={}
        onFinish={onFinish}
      >
        {/* <Row gutter={{ xs: 8, sm: 24, md: 24, lg: 32 }}>
          <Col className="group-item project-name padding-10" lg={16} sm={24}>
            <Row>
              <Col lg={24} sm={24} span={24}>
                <Input.Group size="large">
                  <Form.Item
                    size="large"
                    label="Tên dự án"
                    name="name"
                    rules={[
                      {
                        required: true,
                        message: 'Tên dự án là bắt buộc!',
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>
                </Input.Group>
              </Col>
            </Row>

            <Row>
              <Input.Group size="large">
                <Row gutter={8}>
                  <Col lg={12} sm={24} xs={24}>
                    <Form.Item
                      name="description"
                      label="Loại dự án"
                      rules={[
                        {
                          required: true,
                          message: 'Loại dự án là bắt buộc!',
                        },
                      ]}
                    >
                      <Input />
                    </Form.Item>
                  </Col>
                  <Col lg={12} sm={24} xs={24}>
                    <Form.Item label="Viết tắt:" name="sort_name">
                      <Input />
                    </Form.Item>
                  </Col>
                </Row>
              </Input.Group>
            </Row>
          </Col>

          <Col className="status-box" lg={8} sm={24}>
            <div className="status">
              <div style={{ paddingRight: '50px' }}>
                <div className="calendar">
                  <ScheduleTwoTone /> {moment().format('DD/MM/YYYY')}
                </div>
                <div className="calendar">
                  <HomeTwoTone /> <b>Việt Nam</b>
                </div>
              </div>
              <div className="status-icon">
                <span>SÀNG LỌC</span>
              </div>
            </div>
          </Col>
        </Row> */}

        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          {/* <Col className="group-item mobile-mr" sm={24} lg={16}>
            <Row>
              <Col className="input-padding" xs={24}>
                <Input.Group size="large">
                  <Form.Item
                    label="Chủ sở hữu"
                    name="owner"
                    rules={[
                      {
                        required: true,
                        message: 'Chủ sở hữu!',
                      },
                    ]}
                  >
                    <Input name="owner" />
                  </Form.Item>
                </Input.Group>
              </Col>

              <Input.Group size="large" className="input-padding">
                <Form.Item name="nha_thau_chinh" label="Nhà thầu chính">
                  <Input name="nha_thau_chinh" />
                </Form.Item>
              </Input.Group>

              <Input.Group size="large" className="input-padding">
                <Form.Item name="nha_thau_phu" label="Nhà thầu phụ">
                  <Input name="nha_thau_phu" />
                </Form.Item>
              </Input.Group>
            </Row>
          </Col> */}

          <Col lg={8} xs={24}>
            <Form.Item>
              <Form.Item
                name="image"
                // valuePropName="fileList"
                getValueFromEvent={normFile}
                noStyle
              >
                <Upload.Dragger
                  {...props}
                  fileList={fileList}
                  // action="/upload.do"
                  name="file"
                >
                  <div className="btn-upload">
                    <p>Tải ảnh lên</p>
                  </div>
                </Upload.Dragger>
              </Form.Item>
            </Form.Item>
          </Col>
        </Row>

        {/* <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          <Col className="group-item mobile-mr" lg={8} md={16} xs={22}>
            <Row>
              <Col className="input-padding" lg={24} xs={24}>
                <Input.Group size="large">
                  <Form.Item
                    size="large"
                    label="Số hiệu dự án"
                    name="code"
                    rules={[
                      {
                        required: true,
                        message: 'Số hiệu dự án là bắt buộc!',
                      },
                    ]}
                  >
                    <Input name="code" />
                  </Form.Item>
                </Input.Group>
              </Col>
            </Row>
            <Row>
              <Col className="input-padding" lg={24} xs={24}>
                <Input.Group size="large">
                  <Form.Item size="large" label="Diện tích" name="floor_area">
                    <Input name="floor_area" />
                  </Form.Item>
                </Input.Group>
              </Col>
            </Row>
            <Row>
              <Col className="input-padding" lg={24} xs={24}>
                <Input.Group size="large">
                  <Form.Item
                    size="large"
                    label="Chi tiết trạng thái"
                    name="status"
                  >
                    <Input name="status" />
                  </Form.Item>
                </Input.Group>
              </Col>
            </Row>
          </Col>
          <Col className="pd-none mobile-mrauto" lg={8} md={16} xs={22}>
            <Input.Group size="large" className="group-item">
              <Form.Item size="large" label="Giá trị" name="cost">
                <Input name="cost" />
              </Form.Item>
            </Input.Group>

            <Input.Group size="large" className="group-item">
              <Form.Item size="large" label="Khởi công" name="startX">
                <DatePicker
                  size="large"
                  picker="month"
                  disabledDate={disabledDate}
                  placeholder="Chọn ngày khởi công"
                />
              </Form.Item>
            </Input.Group>
          </Col>
          <Col className="mobile-mrauto padding-none" lg={8} xs={22}>
            <Input.Group size="large" className="group-item">
              <Form.Item size="large" label="Số sàn" name="floor_count">
                <Input name="floor_count" />
              </Form.Item>
            </Input.Group>
            <Input.Group size="large" className="group-item">
              <Form.Item size="large" label="Hoàn công" name="finishX">
                <DatePicker
                  size="large"
                  picker="month"
                  disabledDate={disabledDate}
                  placeholder="Chọn ngày hoàn công"
                />
              </Form.Item>
            </Input.Group>
          </Col>
        </Row>

        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          <Col
            className="group-item mobile-mrauto marrgin-b15 padding-10"
            lg={8}
            xs={22}
          >
            <Input.Group size="large">
              <Form.Item size="large" label="Quốc gia" name="country">
                <Input name="country" />
              </Form.Item>
            </Input.Group>
          </Col>
          <Col className="pd-none mobile-mrauto" lg={8} xs={22}>
            <Input.Group size="large" className="group-item">
              <Form.Item size="large" label="Tỉnh thành" name="city">
                <Input name="city" />
              </Form.Item>
            </Input.Group>
          </Col>
          <Col className="mobile-mrauto padding-none" lg={8} xs={22}>
            <Input.Group size="large" className="group-item">
              <Form.Item size="large" label="Quận Huyện" name="district">
                <Input name="district" />
              </Form.Item>
            </Input.Group>
          </Col>
        </Row>

        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          <Col
            className="group-item mobile-mrauto marrgin-b15 padding-10"
            lg={16}
            xs={22}
          >
            <Input.Group size="large">
              <Form.Item size="large" label="Địa chỉ" name="address">
                <Input name="address" value="Thanh Oai" />
              </Form.Item>
            </Input.Group>
          </Col>
        </Row>

        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          <Col
            className="group-item mobile-mrauto marrgin-b15 padding-10"
            lg={8}
            xs={22}
          >
            <Input.Group size="large">
              <Form.Item size="large" label="Phiên bản" name="version">
                <Input name="version" />
              </Form.Item>
            </Input.Group>
          </Col>
          <Col className="pd-none mobile-mrauto" lg={8} xs={22}>
            <Input.Group size="large" className="group-item">
              <Form.Item
                size="large"
                label="Mô tả phiên bản"
                name="version_description"
              >
                <Input name="version_description" />
              </Form.Item>
            </Input.Group>
          </Col>
        </Row>
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          <Col
            className="group-item mobile-mrauto marrgin-b15 padding-10"
            lg={16}
            xs={22}
          >
            <Input.Group size="large">
              <Form.Item size="large" label="Ghi chú" name="note">
                <TextArea
                  autoSize={{ minRows: 3, maxRows: 5 }}
                  value="C99-test"
                />
              </Form.Item>
            </Input.Group>
          </Col>
        </Row> */}

        <Form.Item className="register-form-button">
          <Button type="primary" htmlType="submit">
            Đăng dự án
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

AddProject.propTypes = {
  addNewProject: PropTypes.func,
  successMessage: PropTypes.string,
  errorMgs: PropTypes.string,
  history: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  successMessage: successMessageSelector(),
  errorMgs: errorSelector(),
});

export function mapDispatchToProps(dispatch) {
  return {
    addNewProject: data => dispatch(addProject(data)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(withRouter(AddProject));
