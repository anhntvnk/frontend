import React from 'react';
import PropTypes from 'prop-types';
import { Form, Row, Col, Input, Button, Select, DatePicker } from 'antd';
import locale from 'antd/es/date-picker/locale/vi_VN';
import './styles.less';
import { Link } from 'react-router-dom';
import { citys, stages, types } from './constants';
import routes from '../../constants/routes';

const { Option } = Select;

const AdvancedSearchForm = ({
  onSearchProjects,
  onResetFields,
  onChangeProject,
  projectType,
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
          <Form.Item name="name" label="Tên dự án">
            <Input />
          </Form.Item>
        </Col>
        <Col
          {...ColProps}
          xl={{ span: 8 }}
          md={{ span: 8 }}
          sm={{ span: 24 }}
          key="owner"
        >
          <Form.Item name="owner" label="Chủ sở hữu">
            <Input />
          </Form.Item>
        </Col>
        <Col
          {...ColProps}
          xl={{ span: 8 }}
          md={{ span: 8 }}
          sm={{ span: 24 }}
          key="contractors"
        >
          <Form.Item name="contractors" label="Nhà thầu chính">
            <Input />
          </Form.Item>
        </Col>
        <Col
          {...ColProps}
          xl={{ span: 8 }}
          md={{ span: 8 }}
          sm={{ span: 24 }}
          key="subcontractors"
        >
          <Form.Item name="subcontractors" label="Nhà thầu phụ">
            <Input />
          </Form.Item>
        </Col>
        <Col
          {...ColProps}
          xl={{ span: 8 }}
          md={{ span: 8 }}
          sm={{ span: 24 }}
          key="month_of_commencement"
        >
          <Form.Item name="month_of_commencement" label="Tháng khởi công">
            <DatePicker
              style={{ width: '100%' }}
              picker="month"
              placeholder="Chọn tháng"
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
          <Form.Item name="month_of_completion" label="Tháng hoàn công">
            <DatePicker
              style={{ width: '100%' }}
              locale={locale}
              picker="month"
              placeholder="Chọn tháng"
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
        <Col
          {...ColProps}
          xl={{ span: 8 }}
          md={{ span: 8 }}
          sm={{ span: 24 }}
          key="type"
        >
          <Form.Item name="type" label="Loại hình">
            <Select
              showSearch
              placeholder="Chọn loại hình"
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
          <Form.Item name="stage" key="stage-item" label="Giai đoạn">
            <Select
              showSearch
              placeholder="Chọn giai đoạn"
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
          <Form.Item name="" key="project-type" label="Dự án">
            <Select
              onChange={onChangeProject}
              defaultValue={projectType === 'project-follow' ? 1 : 0}
              optionFilterProp="children"
              filterOption={(input, option) =>
                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
              }
            >
              <Option key="all-project" value={0}>
                Toàn bộ dự án
              </Option>
              <Option key="project-follow" value={1}>
                Dự án đang theo dõi
              </Option>
            </Select>
          </Form.Item>
        </Col>
      </Row>
      <Row>
        <Col span={12} style={{ textAlign: 'left' }}>
          <Link component="a" toHash={false} to={routes.PROJECT_ADDNEW}>
            <Button style={{ marginLeft: '5px' }} type="primary">
              Thêm dự án
            </Button>
          </Link>
        </Col>
        <Col span={12} style={{ textAlign: 'right' }}>
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

AdvancedSearchForm.propTypes = {
  onSearchProjects: PropTypes.func,
  onChangeProject: PropTypes.func,
  onResetFields: PropTypes.func,
  projectType: PropTypes.string,
};

export default AdvancedSearchForm;
