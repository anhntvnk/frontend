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
import {
  ScheduleTwoTone,
  HomeTwoTone,
  ArrowLeftOutlined,
} from '@ant-design/icons';
import { createStructuredSelector } from 'reselect';
import moment from 'moment';
import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import { injectIntl, intlShape, FormattedMessage } from 'react-intl';
import H2 from 'components/H2';
import CenteredSection from 'components/CenteredSection';
import styled from 'styled-components';
import ROUTE from '../../../constants/routes';
import { addProject } from './actions';
import { successMessageSelector, errorSelector } from './selectors';
import reducer from './reducer';
import messages from './messages';
import saga from './saga';
import './styles.less';

const key = 'addProject';
const { TextArea } = Input;

export function AddProject({
  history,
  successMessage,
  errorMgs,
  addNewProject,
  intl,
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
    let formData;
    if (fileList.length > 0) {
      formData = new FormData();
      formData.append('file', fileList[0].originFileObj);
    }

    const user = JSON.parse(localStorage.getItem('user'));
    const teamID = user.team_id || 0;

    const data = {
      project: Object.assign(values, {
        status_code: 1,
        user_id: user.id,
        team_id: teamID,
      }),
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
      <CenteredSection style={{ display: 'flex' }}>
        <Button
          type="primary"
          shape="round"
          icon={<ArrowLeftOutlined />}
          onClick={() => history.goBack()}
        >
          <FormattedMessage {...messages.myProjAddNewBtnBack} />
        </Button>
        <H2 style={{ margin: 'auto' }} className="title">
          <FormattedMessage {...messages.myProjAddNewTitle} />
        </H2>
      </CenteredSection>

      <Form
        name="myp_add_project"
        layout="vertical"
        className="add-project-form"
        // initialValues={}
        onFinish={onFinish}
      >
        <Row gutter={{ xs: 8, sm: 24, md: 24, lg: 32 }}>
          <Col className="group-item project-name padding-10" lg={16} sm={24}>
            <Row>
              <Col lg={24} sm={24} span={24}>
                <Input.Group size="large">
                  <Form.Item
                    size="large"
                    label={<FormattedMessage {...messages.myProjAddNewName} />}
                    name="name"
                    rules={[
                      {
                        required: true,
                        message: (
                          <FormattedMessage {...messages.myProjAddNewNameReq} />
                        ),
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
                      label={
                        <FormattedMessage {...messages.myProjAddNewType} />
                      }
                      rules={[
                        {
                          required: true,
                          message: (
                            <FormattedMessage
                              {...messages.myProjAddNewTypeReq}
                            />
                          ),
                        },
                      ]}
                    >
                      <Input />
                    </Form.Item>
                  </Col>
                  <Col lg={12} sm={24} xs={24}>
                    <Form.Item
                      label={
                        <FormattedMessage {...messages.myProjAddNewAcronym} />
                      }
                      name="sort_name"
                    >
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
                  <HomeTwoTone />{' '}
                  <b>
                    <FormattedMessage {...messages.myProjAddNewVn} />
                  </b>
                </div>
              </div>
              <StyledStatusIcon>
                <span>
                  <FormattedMessage {...messages.myProjAddNewScreening} />
                </span>
              </StyledStatusIcon>
            </div>
          </Col>
        </Row>

        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          <Col className="group-item mobile-mr" sm={24} lg={16}>
            <Row>
              <Col className="input-padding" xs={24}>
                <Input.Group size="large">
                  <Form.Item
                    label={<FormattedMessage {...messages.myProjAddNewOwner} />}
                    name="owner"
                    rules={[
                      {
                        required: true,
                        message: (
                          <FormattedMessage {...messages.myProjAddNewOwner} />
                        ),
                      },
                    ]}
                  >
                    <Input name="owner" />
                  </Form.Item>
                </Input.Group>
              </Col>

              <Input.Group size="large" className="input-padding">
                <Form.Item
                  name="nha_thau_chinh"
                  label={
                    <FormattedMessage {...messages.myProjAddNewContractors} />
                  }
                >
                  <Input name="nha_thau_chinh" />
                </Form.Item>
              </Input.Group>

              <Input.Group size="large" className="input-padding">
                <Form.Item
                  name="nha_thau_phu"
                  label={
                    <FormattedMessage
                      {...messages.myProjAddNewSubContractors}
                    />
                  }
                >
                  <Input name="nha_thau_phu" />
                </Form.Item>
              </Input.Group>
            </Row>
          </Col>

          <Col lg={8} xs={24}>
            <Form.Item>
              <Form.Item name="image" getValueFromEvent={normFile} noStyle>
                <Upload.Dragger {...props} fileList={fileList} name="file">
                  <div className="btn-upload">
                    <p>
                      <FormattedMessage {...messages.myProjAddNewUploadImg} />
                    </p>
                  </div>
                </Upload.Dragger>
              </Form.Item>
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          <Col className="group-item mobile-mr" lg={8} md={16} xs={22}>
            <Row>
              <Col className="input-padding" lg={24} xs={24}>
                <Input.Group size="large">
                  <Form.Item
                    size="large"
                    label={
                      <FormattedMessage {...messages.myProjAddNewNumber} />
                    }
                    name="code"
                    rules={[
                      {
                        required: true,
                        message: (
                          <FormattedMessage
                            {...messages.myProjAddNewNumberReq}
                          />
                        ),
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
                  <Form.Item
                    size="large"
                    label={<FormattedMessage {...messages.myProjAddNewArea} />}
                    name="floor_area"
                  >
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
                    label={
                      <FormattedMessage {...messages.myProjAddNewStatus} />
                    }
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
              <Form.Item
                size="large"
                label={<FormattedMessage {...messages.myProjAddNewValue} />}
                name="cost"
              >
                <Input name="cost" />
              </Form.Item>
            </Input.Group>

            <Input.Group size="large" className="group-item">
              <Form.Item
                size="large"
                label={<FormattedMessage {...messages.myProjAddNewStart} />}
                name="startX"
              >
                <DatePicker
                  size="large"
                  picker="month"
                  disabledDate={disabledDate}
                  placeholder={intl.formatMessage({
                    ...messages.myProjAddNewStartDate,
                  })}
                />
              </Form.Item>
            </Input.Group>
          </Col>
          <Col className="mobile-mrauto padding-none" lg={8} xs={22}>
            <Input.Group size="large" className="group-item">
              <Form.Item
                size="large"
                label={<FormattedMessage {...messages.myProjAddNewFloor} />}
                name="floor_count"
              >
                <Input name="floor_count" />
              </Form.Item>
            </Input.Group>
            <Input.Group size="large" className="group-item">
              <Form.Item
                size="large"
                label={<FormattedMessage {...messages.myProjAddNewComplete} />}
                name="finishX"
              >
                <DatePicker
                  size="large"
                  picker="month"
                  disabledDate={disabledDate}
                  placeholder={intl.formatMessage({
                    ...messages.myProjAddNewCompleteDate,
                  })}
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
              <Form.Item
                size="large"
                label={<FormattedMessage {...messages.myProjAddNewNation} />}
                name="country"
              >
                <Input name="country" />
              </Form.Item>
            </Input.Group>
          </Col>
          <Col className="pd-none mobile-mrauto" lg={8} xs={22}>
            <Input.Group size="large" className="group-item">
              <Form.Item
                size="large"
                label={<FormattedMessage {...messages.myProjAddNewProvince} />}
                name="city"
              >
                <Input name="city" />
              </Form.Item>
            </Input.Group>
          </Col>
          <Col className="mobile-mrauto padding-none" lg={8} xs={22}>
            <Input.Group size="large" className="group-item">
              <Form.Item
                size="large"
                label={<FormattedMessage {...messages.myProjAddNewDistrict} />}
                name="district"
              >
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
              <Form.Item
                size="large"
                label={<FormattedMessage {...messages.myProjAddNewAddress} />}
                name="address"
              >
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
              <Form.Item
                size="large"
                label={<FormattedMessage {...messages.myProjAddNewVersion} />}
                name="version"
              >
                <Input name="version" />
              </Form.Item>
            </Input.Group>
          </Col>
          <Col className="pd-none mobile-mrauto" lg={8} xs={22}>
            <Input.Group size="large" className="group-item">
              <Form.Item
                size="large"
                label={
                  <FormattedMessage {...messages.myProjAddNewVersionDes} />
                }
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
              <Form.Item
                size="large"
                label={<FormattedMessage {...messages.myProjAddNewNote} />}
                name="note"
              >
                <TextArea
                  autoSize={{ minRows: 3, maxRows: 5 }}
                  value="C99-test"
                />
              </Form.Item>
            </Input.Group>
          </Col>
        </Row>

        <Form.Item className="register-form-button">
          <Button type="primary" htmlType="submit">
            <FormattedMessage {...messages.myProjAddNewBtn} />
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

const StyledStatusIcon = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 126px;
  height: 126px;
  background: #e8f96c;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 50%;
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;

  span {
    font-size: 16px;
    line-height: 38px;
    color: #131313;
    font-weight: bold;
    text-align: center;
  }
`;

AddProject.propTypes = {
  addNewProject: PropTypes.func,
  successMessage: PropTypes.string,
  errorMgs: PropTypes.string,
  history: PropTypes.object,
  intl: intlShape.required,
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

export default compose(withConnect)(withRouter(injectIntl(AddProject)));
