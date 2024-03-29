/* eslint-disable no-restricted-syntax */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import FilterItem from 'components/FilterItem';

import { Button, Row, Col, DatePicker, Form, Input } from 'antd';

const { Search } = Input;
const { RangePicker } = DatePicker;

const ColProps = {
  xs: 24,
  sm: 12,
  style: {
    marginBottom: 16,
  },
};

const TwoColProps = {
  ...ColProps,
  xl: 96,
};

class Filter extends Component {
  formRef = React.createRef();

  handleFields = fields => {
    const { createTime } = fields;
    if (createTime && createTime.length) {
      // eslint-disable-next-line no-param-reassign
      fields.createTime = [
        moment(createTime[0]).format('YYYY-MM-DD'),
        moment(createTime[1]).format('YYYY-MM-DD'),
      ];
    }
    return fields;
  };

  handleSubmit = () => {
    const { onFilterChange } = this.props;
    const values = this.formRef.current.getFieldsValue();
    const fields = this.handleFields(values);
    onFilterChange(fields);
  };

  handleReset = () => {
    const fields = this.formRef.current.getFieldsValue();
    for (const item in fields) {
      if ({}.hasOwnProperty.call(fields, item)) {
        if (fields[item] instanceof Array) {
          fields[item] = [];
        } else {
          fields[item] = undefined;
        }
      }
    }
    this.formRef.current.setFieldsValue(fields);
    this.handleSubmit();
  };

  handleChange = (key, values) => {
    const { onFilterChange } = this.props;
    let fields = this.formRef.current.getFieldsValue();
    fields[key] = values;
    fields = this.handleFields(fields);
    onFilterChange(fields);
  };

  render() {
    const { onAdd, filter } = this.props;
    // const { name, address } = filter;

    // const initialCreateTime = [];
    // if (filter.createTime && filter.createTime[0]) {
    //   initialCreateTime[0] = moment(filter.createTime[0]);
    // }
    // if (filter.createTime && filter.createTime[1]) {
    //   initialCreateTime[1] = moment(filter.createTime[1]);
    // }

    return (
      <Form
        ref={this.formRef}
        name="control-ref"
        // initialValues={{ name, address, createTime: initialCreateTime }}
      >
        <Row gutter={24}>
          <Col {...ColProps} xl={{ span: 4 }} md={{ span: 8 }}>
            <Form.Item name="name">
              <Search placeholder="Search Name" onSearch={this.handleSubmit} />
            </Form.Item>
          </Col>
          {/* <Col
            {...ColProps}
            xl={{ span: 4 }}
            md={{ span: 8 }}
            id="addressCascader"
          >
            <Form.Item name="address">
              <Cascader
                style={{ width: '100%' }}
                options={city}
                placeholder="Please pick an address"
              />
            </Form.Item>
          </Col> */}
          <Col
            {...ColProps}
            xl={{ span: 6 }}
            md={{ span: 8 }}
            sm={{ span: 12 }}
            id="createTimeRangePicker"
          >
            <FilterItem label="Create Time">
              <Form.Item name="createTime">
                <RangePicker style={{ width: '100%' }} />
              </Form.Item>
            </FilterItem>
          </Col>
          <Col
            {...TwoColProps}
            xl={{ span: 10 }}
            md={{ span: 24 }}
            sm={{ span: 24 }}
          >
            <Row type="flex" align="middle" justify="space-between">
              <div>
                <Button
                  type="primary"
                  htmlType="submit"
                  style={{ marginRight: '16px' }}
                  onClick={this.handleSubmit}
                >
                  Search
                </Button>
                <Button onClick={this.handleReset}>Reset</Button>
              </div>
              <Button type="ghost" onClick={onAdd}>
                Create
              </Button>
            </Row>
          </Col>
        </Row>
      </Form>
    );
  }
}

Filter.propTypes = {
  onAdd: PropTypes.func,
  filter: PropTypes.object,
  onFilterChange: PropTypes.func,
};

export default Filter;
