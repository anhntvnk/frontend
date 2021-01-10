import React from 'react';
import PropTypes from 'prop-types';
import { Form, Row, Col, Input, Button, Select } from 'antd';
import { citys } from './constants';
import './styles.less';

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
          <Form.Item name="name" label="Tên công ty">
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
          <Form.Item name="citys" label="Thành phố">
            <Select
              showSearch
              placeholder="Chọn thành phố"
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
          <Form.Item name="" key="project-type" label="Công ty">
            <Select
              onChange={onChangeProject}
              defaultValue={copmpanyType === 'company-follow' ? 1 : 0}
              optionFilterProp="children"
              filterOption={(input, option) =>
                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
              }
            >
              <Option key="all-company" value={0}>
                Toàn bộ dự án
              </Option>
              <Option key="company-follow" value={1}>
                Dự án đang theo dõi
              </Option>
            </Select>
          </Form.Item>
        </Col>
      </Row>
      <Row>
        <Col span={24} style={{ textAlign: 'right' }}>
          <Button type="primary" htmlType="submit">
            Tìm kiếm
          </Button>
          <Button
            style={{ margin: '0 8px' }}
            onClick={() => {
              form.resetFields();
              onResetFields();
            }}
          >
            Xóa bộ lọc
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
