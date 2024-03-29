import React, { useEffect } from 'react';
import { injectIntl, intlShape, FormattedMessage } from 'react-intl';
import { get as _get } from 'lodash';
import PropTypes from 'prop-types';
import { Form, Row, Col, Input, Button, Select, DatePicker } from 'antd';
import locale from 'antd/es/date-picker/locale/vi_VN';
import './styles.less';
import { Link, withRouter } from 'react-router-dom';
import { citys, stages, types, capitalProjects } from './constants';
import routes from '../../constants/routes';
import messages from './messages';

const { Option } = Select;

const AdvancedSearchForm = ({
  onSearchProjects,
  onResetFields,
  onChangeProject,
  projectType,
  intl,
  history,
}) => {
  const [form] = Form.useForm();

  useEffect(() => {
    if (_get(history.location.state, 'fillter', '')) {
      const fillter = _get(history.location.state, 'fillter', '');
      form.setFieldsValue({
        ...fillter,
        projectType:
          (_get(history.location.state, 'projectType', '') || projectType) ===
          'project-follow'
            ? 1
            : 0,
      });
    } else if (_get(history.location.state, 'projectType', '')) {
      const fillter = _get(history.location.state, 'projectType', '');
      form.setFieldsValue({
        ...fillter,
        projectType:
          (_get(history.location.state, 'projectType', '') || projectType) ===
          'project-follow'
            ? 1
            : 0,
      });
    }
  }, [form]);

  const ColProps = {
    xs: 24,
    sm: 12,
    lg: 8,
  };

  return (
    <Form
      form={form}
      name="advanced_search"
      className="ant-advanced-search-form"
      onFinish={onSearchProjects}
    >
      <Row className="myp-filter">
        <Col
          {...ColProps}
          xl={{ span: 8 }}
          md={{ span: 8 }}
          sm={{ span: 24 }}
          key="name"
        >
          <Form.Item
            name="name"
            label={<FormattedMessage {...messages.myFormProjName} />}
          >
            <Input autoComplete="off" />
          </Form.Item>
        </Col>
        <Col
          {...ColProps}
          xl={{ span: 8 }}
          md={{ span: 8 }}
          sm={{ span: 24 }}
          key="owner"
        >
          <Form.Item
            name="owner"
            label={<FormattedMessage {...messages.myFormOwner} />}
          >
            <Input autoComplete="off" />
          </Form.Item>
        </Col>
        <Col
          {...ColProps}
          xl={{ span: 8 }}
          md={{ span: 8 }}
          sm={{ span: 24 }}
          key="contractors"
        >
          <Form.Item
            name="contractors"
            label={<FormattedMessage {...messages.myFormContractor} />}
          >
            <Input autoComplete="off" />
          </Form.Item>
        </Col>
        <Col
          {...ColProps}
          xl={{ span: 8 }}
          md={{ span: 8 }}
          sm={{ span: 24 }}
          key="subcontractors"
        >
          <Form.Item
            name="subcontractors"
            label={<FormattedMessage {...messages.myFormSubContractor} />}
          >
            <Input autoComplete="off" />
          </Form.Item>
        </Col>
        <Col
          {...ColProps}
          xl={{ span: 8 }}
          md={{ span: 8 }}
          sm={{ span: 24 }}
          key="month_of_commencement"
        >
          <Form.Item
            name="month_of_commencement"
            label={<FormattedMessage {...messages.myFormStartMonth} />}
          >
            <DatePicker
              style={{ width: '100%' }}
              picker="month"
              autoComplete="off"
              placeholder={intl.formatMessage({
                ...messages.myFormSelectMonth,
              })}
            />
          </Form.Item>
        </Col>
        <Col
          {...ColProps}
          xl={{ span: 8 }}
          md={{ span: 8 }}
          sm={{ span: 24 }}
          key="month_of_completion"
        >
          <Form.Item
            name="month_of_completion"
            label={<FormattedMessage {...messages.myFormComplMonth} />}
          >
            <DatePicker
              style={{ width: '100%' }}
              locale={locale}
              autoComplete="off"
              picker="month"
              placeholder={intl.formatMessage({
                ...messages.myFormSelectMonth,
              })}
            />
          </Form.Item>
        </Col>
        <Col
          {...ColProps}
          xl={{ span: 8 }}
          md={{ span: 8 }}
          sm={{ span: 24 }}
          key="citys"
        >
          <Form.Item
            name="citys"
            label={<FormattedMessage {...messages.myFormCity} />}
          >
            <Select
              showSearch
              placeholder={intl.formatMessage({
                ...messages.myFormSelectCity,
              })}
              optionFilterProp="children"
              filterOption={(input, option) =>
                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
              }
            >
              {citys.map(city => (
                <Option key={city} value={city}>
                  {city}
                </Option>
              ))}
            </Select>
          </Form.Item>
        </Col>
        <Col
          {...ColProps}
          xl={{ span: 8 }}
          md={{ span: 8 }}
          sm={{ span: 24 }}
          key="type"
        >
          <Form.Item
            name="type"
            label={<FormattedMessage {...messages.myFormType} />}
          >
            <Select
              showSearch
              placeholder={intl.formatMessage({
                ...messages.myFormSelectType,
              })}
              optionFilterProp="children"
              filterOption={(input, option) =>
                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
              }
            >
              {types.map(type => (
                <Option key={type.name} value={type.id}>
                  {type.name}
                </Option>
              ))}
            </Select>
          </Form.Item>
        </Col>
        <Col
          {...ColProps}
          xl={{ span: 8 }}
          md={{ span: 8 }}
          sm={{ span: 24 }}
          key="stage"
        >
          <Form.Item
            name="stage"
            key="stage-item"
            label={<FormattedMessage {...messages.myFormPeriod} />}
          >
            <Select
              showSearch
              placeholder={intl.formatMessage({
                ...messages.myFormPeriod,
              })}
              optionFilterProp="children"
              filterOption={(input, option) =>
                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
              }
            >
              {stages.map(stage => (
                <Option key={stage} value={stage}>
                  {stage}
                </Option>
              ))}
            </Select>
          </Form.Item>
        </Col>
        <Col {...ColProps} xl={{ span: 8 }} md={{ span: 8 }} sm={{ span: 24 }}>
          <Form.Item
            name="projectType"
            key="project-type"
            label={<FormattedMessage {...messages.myFormProject} />}
          >
            <Select
              onChange={onChangeProject}
              defaultValue={projectType === 'project-follow' ? 1 : 0}
              optionFilterProp="children"
              filterOption={(input, option) =>
                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
              }
            >
              <Option key="all-project" value={0}>
                {<FormattedMessage {...messages.myFormFullProjects} />}
              </Option>
              <Option key="project-follow" value={1}>
                {<FormattedMessage {...messages.myFormFollowProj} />}
              </Option>
            </Select>
          </Form.Item>
        </Col>
        <Col
          {...ColProps}
          xl={{ span: 8 }}
          md={{ span: 8 }}
          sm={{ span: 24 }}
          key="capital"
        >
          <Form.Item
            name="capitalProjects"
            key="capital-item"
            label={<FormattedMessage {...messages.capitalPro} />}
          >
            <Select
              showSearch
              placeholder={intl.formatMessage({
                ...messages.capitalPro,
              })}
              optionFilterProp="children"
              filterOption={(input, option) =>
                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
              }
            >
              {capitalProjects.map(capital => (
                <Option key={capital} value={capital}>
                  {capital}
                </Option>
              ))}
            </Select>
          </Form.Item>
        </Col>
      </Row>
      <Row>
        <Col span={12} style={{ textAlign: 'left' }}>
          <Link component="a" toHash={false} to={routes.PROJECT_ADDNEW}>
            <Button style={{ marginLeft: '5px' }} type="primary">
              {<FormattedMessage {...messages.myFormBtnAddProj} />}
            </Button>
          </Link>
        </Col>
        <Col span={12} style={{ textAlign: 'right' }}>
          <Button type="primary" htmlType="submit">
            {<FormattedMessage {...messages.myFormBtnSearch} />}
          </Button>
          <Button
            style={{ margin: '0 8px' }}
            onClick={() => {
              form.resetFields();
              onResetFields();
            }}
          >
            {<FormattedMessage {...messages.myFormBtnDelete} />}
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

AdvancedSearchForm.propTypes = {
  onSearchProjects: PropTypes.func,
  onChangeProject: PropTypes.func,
  onResetFields: PropTypes.func,
  projectType: PropTypes.string,
  history: PropTypes.object,
  intl: intlShape.required,
};

export default injectIntl(withRouter(AdvancedSearchForm));
