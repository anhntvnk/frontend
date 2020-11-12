import React from 'react';
import PropTypes from 'prop-types';
import { Form, Row, Col, Input, Button, Select } from 'antd';
import './styles.less';
import { citys, stages, types } from './constants';

const { Option } = Select;

const AdvancedSearchForm = ({ onSearchProjects, onResetFields }) => {
  const [form] = Form.useForm();

  function onChange(value) {
    console.log(`selected ${value}`);
  }

  // function onBlur() {
  //   console.log('blur');
  // }

  // function onFocus() {
  //   console.log('focus');
  // }

  function onSearch(val) {
    console.log('search:', val);
  }

  return (
    <Form
      form={form}
      name="advanced_search"
      className="ant-advanced-search-form"
      onFinish={onSearchProjects}
    >
      <Row className="myp-filter">
        <Col lg={8} xs={24} key="owner">
          <Form.Item name="owner" label="Chủ sở hữu">
            <Input />
          </Form.Item>
        </Col>
        <Col lg={8} xs={24} key="contractors">
          <Form.Item name="contractors" label="Nhà thầu chính">
            <Input />
          </Form.Item>
        </Col>
        <Col lg={8} xs={24} key="subcontractors">
          <Form.Item name="subcontractors" label="Nhà thầu phụ">
            <Input />
          </Form.Item>
        </Col>
        <Col lg={8} xs={24} key="month_of_commencement">
          <Form.Item name="month_of_commencement" label="Tháng khởi công">
            <Input />
          </Form.Item>
        </Col>
        <Col lg={8} xs={24} key="month_of_completion">
          <Form.Item name="month_of_completion" label="Tháng hoàn công">
            <Input />
          </Form.Item>
        </Col>
        <Col lg={8} xs={24} key="citys">
          <Form.Item name="citys" label="Thành phố">
            <Select
              showSearch
              placeholder="Chọn thành phố"
              optionFilterProp="children"
              onChange={onChange}
              // onFocus={onFocus}
              // onBlur={onBlur}
              onSearch={onSearch}
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
        <Col lg={8} xs={24} key="type">
          <Form.Item name="type" label="Loại hình">
            <Select
              showSearch
              placeholder="Chọn loại hình"
              optionFilterProp="children"
              onChange={onChange}
              // onFocus={onFocus}
              // onBlur={onBlur}
              onSearch={onSearch}
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
        <Col lg={8} xs={24} key="stage">
          <Form.Item name="stage" key="stage" label="Giai đoạn">
            <Select
              showSearch
              placeholder="Chọn giai đoạn"
              optionFilterProp="children"
              onChange={onChange}
              // onFocus={onFocus}
              // onBlur={onBlur}
              onSearch={onSearch}
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
      </Row>
      <Row>
        <Col span={24} style={{ textAlign: 'right' }}>
          <Button type="primary" htmlType="submit">
            Search
          </Button>
          <Button
            style={{ margin: '0 8px' }}
            onClick={() => {
              form.resetFields();
              onResetFields();
            }}
          >
            Clear
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

AdvancedSearchForm.propTypes = {
  onSearchProjects: PropTypes.func,
};

export default AdvancedSearchForm;
