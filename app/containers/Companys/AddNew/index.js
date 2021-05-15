/* eslint-disable jsx-a11y/anchor-is-valid */
/*
 * Add Company
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { compose } from 'redux';
import moment from 'moment';
import {
  Form,
  Input,
  Button,
  Row,
  Col,
  DatePicker,
  message,
  Select,
  Space,
} from 'antd';
import { injectIntl, intlShape, FormattedMessage } from 'react-intl';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { createStructuredSelector } from 'reselect';
import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import H2 from 'components/H2';
import CenteredSection from 'components/CenteredSection';
import styled from 'styled-components';
import ROUTE from '../../../constants/routes';
import { addCompany } from './actions';
import { citys } from './constants';
import { successMessageSelector, errorSelector } from './selectors';
import reducer from './reducer';
import saga from './saga';
import './styles.less';
import messages from './messages';

const key = 'addCompany';
const { Option } = Select;
const { TextArea } = Input;

export function AddCompany({
  history,
  successMessage,
  errorMgs,
  addNewCompany,
  intl,
}) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  useEffect(() => {
    if (successMessage) {
      history.push(ROUTE.COMPANY, {
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
    const data = Object.assign(values, {
      latest_update: moment().format('DD/MM/YYYY HH:mm:ss'),
    });
    addNewCompany(data);
  };

  const formValues = {
    users: [],
    user: null,
    name: '',
    short_name: '',
    contacts: [],
    date: '',
    office_address: '',
    city: '',
    website: '',
    phone: '',
    email: '',
    latest_update: moment().format('DD/MM/YYYY HH:mm:ss'),
    note: '',
    manager: '',
    image: '',
  };

  return (
    <div className="add-company">
      <Helmet>
        <title>Thêm mới công ty</title>
        <meta name="description" content="Thêm mới công ty" />
      </Helmet>
      <CenteredSection>
        <H2 className="title">
          <FormattedMessage {...messages.myCompanyAddNewTitle} />
        </H2>
      </CenteredSection>

      <CompanyContainer>
        <Form
          name="myp_add_company"
          layout="vertical"
          className="add-company-form"
          initialValues={formValues}
          onFinish={onFinish}
        >
          <Row gutter={{ xs: 8, sm: 24, md: 24, lg: 32 }}>
            <CompanyName className="group-item" lg={24} sm={24}>
              <Row>
                <Col lg={24} sm={24} span={24}>
                  <Input.Group size="large">
                    <Form.Item
                      size="large"
                      label={
                        <FormattedMessage {...messages.myCompanyAddNewName} />
                      }
                      name="name"
                      rules={[
                        {
                          required: true,
                          message: (
                            <FormattedMessage
                              {...messages.myCompanyAddNewNameReq}
                            />
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
                        label={
                          <FormattedMessage
                            {...messages.myCompanyAddNewAcronym}
                          />
                        }
                        name="short_name"
                      >
                        <Input />
                      </Form.Item>
                    </Col>
                  </Row>
                </Input.Group>
              </Row>
            </CompanyName>
          </Row>

          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col className="group-item mobile-mr" sm={24} lg={24}>
              <Row>
                <Col className="input-padding" lg={24} sm={24} xs={24}>
                  <Form.List name="contacts">
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
                              name={[field.name, 'name']}
                              fieldKey={[field.fieldKey, 'name']}
                            >
                              <Input
                                placeholder={intl.formatMessage({
                                  ...messages.myCompanyAddNewFullName,
                                })}
                              />
                            </Form.Item>
                            <Form.Item
                              {...field}
                              name={[field.name, 'position']}
                              fieldKey={[field.fieldKey, 'position']}
                            >
                              <Input
                                placeholder={intl.formatMessage({
                                  ...messages.myCompanyAddNewPosition,
                                })}
                              />
                            </Form.Item>
                            <Form.Item
                              {...field}
                              name={[field.name, 'phone']}
                              fieldKey={[field.fieldKey, 'phone']}
                            >
                              <Input
                                placeholder={intl.formatMessage({
                                  ...messages.myCompanyAddNewPhone,
                                })}
                              />
                            </Form.Item>
                            <Form.Item
                              {...field}
                              name={[field.name, 'email']}
                              fieldKey={[field.fieldKey, 'email']}
                            >
                              <Input
                                placeholder={intl.formatMessage({
                                  ...messages.myCompanyAddNewEmail,
                                })}
                              />
                            </Form.Item>
                            <MinusCircleOutlined
                              onClick={() => remove(field.name)}
                            />
                          </Space>
                        ))}
                        <Form.Item>
                          <Button
                            type="dashed"
                            style={{
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              color: '#319be2',
                            }}
                            onClick={() => add()}
                            block
                            icon={<PlusOutlined />}
                          >
                            <FormattedMessage
                              {...messages.myCompanyAddNewContact}
                            />
                          </Button>
                        </Form.Item>
                      </>
                    )}
                  </Form.List>
                </Col>
              </Row>
              <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 24 }}>
                <Col className="input-padding" lg={12} sm={24} xs={24}>
                  <Input.Group size="large">
                    <Form.Item
                      label={
                        <FormattedMessage
                          {...messages.myCompanyAddNewDirector}
                        />
                      }
                      name="manager"
                      rules={[
                        {
                          required: true,
                          message: (
                            <FormattedMessage
                              {...messages.myCompanyAddNewDirectorReq}
                            />
                          ),
                        },
                      ]}
                    >
                      <Input name="manager" />
                    </Form.Item>
                  </Input.Group>
                </Col>
                <Col className="input-padding" lg={12} sm={24} xs={24}>
                  <Input.Group size="large" className="input-padding">
                    <Form.Item
                      name="date"
                      label={
                        <FormattedMessage
                          {...messages.myCompanyAddNewStartDate}
                        />
                      }
                    >
                      <DatePicker
                        size="large"
                        placeholder={intl.formatMessage({
                          ...messages.myCompanyAddNewSelectStartDate,
                        })}
                      />
                    </Form.Item>
                  </Input.Group>
                </Col>
              </Row>
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
                  label={
                    <FormattedMessage {...messages.myCompanyAddNewAddress} />
                  }
                  name="office_address"
                >
                  <Input name="office_address" />
                </Form.Item>
              </Input.Group>
            </Col>
            {/* <Col className="pd-none mobile-mrauto" lg={8} xs={22}>
              <Input.Group size="large" className="group-item">
                <Form.Item name="city" label="Tỉnh Thành">
                  <Select
                    showSearch
                    placeholder="Chọn thành phố"
                    optionFilterProp="children"
                    filterOption={(input, option) =>
                      option.children
                        .toLowerCase()
                        .indexOf(input.toLowerCase()) >= 0
                    }
                  >
                    {citys.map(city => (
                      <Option key={city} value={city}>
                        {city}
                      </Option>
                    ))}
                  </Select>
                </Form.Item>
              </Input.Group>
            </Col> */}
            <Col className="pd-none mobile-mrauto" lg={8} xs={22}>
              <Input.Group size="large" className="group-item">
                <Form.Item
                  name="city"
                  label={<FormattedMessage {...messages.myCompanyAddNewCity} />}
                >
                  <Select
                    showSearch
                    placeholder={intl.formatMessage({
                      ...messages.myCompanyAddNewSelectCity,
                    })}
                    optionFilterProp="children"
                    filterOption={(input, option) =>
                      option.children
                        .toLowerCase()
                        .indexOf(input.toLowerCase()) >= 0
                    }
                  >
                    {citys.map(city => (
                      <Option key={city} value={city}>
                        {city}
                      </Option>
                    ))}
                  </Select>
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
                  label={<FormattedMessage {...messages.myCompanyAddNewWeb} />}
                  name="website"
                >
                  <Input name="website" />
                </Form.Item>
              </Input.Group>
            </Col>
            <Col className="pd-none mobile-mrauto" lg={8} xs={22}>
              <Input.Group size="large" className="group-item">
                <Form.Item
                  size="large"
                  label={
                    <FormattedMessage {...messages.myCompanyAddPhoneNum} />
                  }
                  name="phone"
                >
                  <Input name="phone" />
                </Form.Item>
              </Input.Group>
            </Col>
            <Col className="pd-none mobile-mrauto" lg={8} xs={22}>
              <Input.Group size="large" className="group-item">
                <Form.Item
                  size="large"
                  label={
                    <FormattedMessage {...messages.myCompanyAddEmailAdr} />
                  }
                  name="email"
                >
                  <Input name="email" />
                </Form.Item>
              </Input.Group>
            </Col>
          </Row>

          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col
              className="group-item mobile-mrauto marrgin-b15 padding-10"
              lg={24}
              xs={22}
            >
              <Input.Group size="large">
                <Form.Item
                  size="large"
                  label={<FormattedMessage {...messages.myCompanyAddNote} />}
                  name="note"
                >
                  <TextArea autoSize={{ minRows: 3, maxRows: 5 }} />
                </Form.Item>
              </Input.Group>
            </Col>
          </Row>

          <Form.Item className="register-form-button">
            <Button type="primary" htmlType="submit">
              <FormattedMessage {...messages.myCompanyAddBtn} />
            </Button>
          </Form.Item>
        </Form>
      </CompanyContainer>
    </div>
  );
}

const CompanyName = styled(Col)``;

const CompanyContainer = styled(Col)`
  display: flex;
  justify-content: center;
`;

AddCompany.propTypes = {
  addNewCompany: PropTypes.func,
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
    addNewCompany: data => dispatch(addCompany(data)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(withRouter(injectIntl(AddCompany)));
