import React from 'react';
import PropTypes from 'prop-types';
import { Form, Row, Col, Input, Button, Select } from 'antd';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import { citys } from './constants';
import './styles.less';
import routes from '../../constants/routes';

const { Option } = Select;

const SearchCompany = ({
  onSearchProjects,
  onResetFields,
  onChangeProject,
  copmpanyType,
}) => {
  const [form] = Form.useForm();

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
            label={<FormattedMessage {...messages.myCompanySearchName} />}
          >
            <Input />
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
            label={<FormattedMessage {...messages.myCompanySearchCity} />}
          >
            <Select
              showSearch
              placeholder={
                <FormattedMessage {...messages.myCompanySelectCity} />
              }
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
        <Col {...ColProps} xl={{ span: 8 }} md={{ span: 8 }} sm={{ span: 24 }}>
          <Form.Item
            name=""
            key="project-type"
            label={<FormattedMessage {...messages.myCompanySearchCompany} />}
          >
            <Select
              onChange={onChangeProject}
              defaultValue={copmpanyType === 'company-follow' ? 1 : 0}
              optionFilterProp="children"
              filterOption={(input, option) =>
                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
              }
            >
              <Option key="all-company" value={0}>
                <FormattedMessage {...messages.myCompanyAll} />
              </Option>
              <Option key="company-follow" value={1}>
                <FormattedMessage {...messages.myCompanyFollow} />
              </Option>
            </Select>
          </Form.Item>
        </Col>
      </Row>
      <Row>
        <Col span={12} style={{ textAlign: 'left' }}>
          <Link component="a" toHash={false} to={routes.COMPANY_ADDNEW}>
            <Button style={{ marginLeft: '5px' }} type="primary">
              <FormattedMessage {...messages.myCompanyBtnAdd} />
            </Button>
          </Link>
        </Col>
        <Col span={12} style={{ textAlign: 'right' }}>
          <Button type="primary" htmlType="submit">
            <FormattedMessage {...messages.myCompanyBtnSearch} />
          </Button>
          <Button
            style={{ margin: '0 8px' }}
            onClick={() => {
              form.resetFields();
              onResetFields();
            }}
          >
            <FormattedMessage {...messages.myCompanyBtnClear} />
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

SearchCompany.propTypes = {
  onSearchProjects: PropTypes.func,
  onChangeProject: PropTypes.func,
  onResetFields: PropTypes.func,
  copmpanyType: PropTypes.string,
};

export default SearchCompany;
