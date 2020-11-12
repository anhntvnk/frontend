/* eslint-disable jsx-a11y/anchor-is-valid */
/*
 * ProjectPage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { has } from 'lodash';
import { createStructuredSelector } from 'reselect';

import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import { Button, Avatar } from 'antd';
import moment from 'moment';
import Filter from 'components/Filter';
import List from 'components/List';
import { loadProjects } from './actions';
import { makeSelectProjects } from './selectors';
import reducer from './reducer';
import saga from './saga';
import './styles.less';
import logo from '../../assets/images/logo/my-project.png';

const key = 'projects';

export function Projects({ project, onFetchProject }) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  const [selectedRowKeys, setSelectedRowKeys] = useState([]);

  useEffect(() => {
    onFetchProject();
  }, []);

  const onFollow = id => {
    console.log(id);
  };

  const columns = [
    {
      title: 'Ảnh',
      dataIndex: 'image',
      key: 'image',
      responsive: [],
      render: text => <Avatar style={{ marginLeft: 8 }} src={text || logo} />,
    },
    {
      title: 'Tên dự án',
      dataIndex: 'name',
      key: 'name',
      sorter: (a, b) => a.name.length - b.name.length,
      render: (text, record) => <Link to={`user/${record.id}`}>{text}</Link>,
    },
    {
      title: <div style={{ whiteSpace: 'nowrap' }}>Giá trị (USD)</div>,
      dataIndex: 'cost',
      width: 80,
      key: 'cost',
      sorter: (a, b) => a.cost - b.cost,
    },
    {
      title: 'Địa chỉ',
      dataIndex: 'address',
      key: 'address',
      render: (text, record) => `${text} - ${record.city}`,
    },
    {
      title: 'Giai đoạn',
      dataIndex: 'stage',
      key: 'stage',
      width: 200,
    },
    {
      title: 'Ngày cập nhật',
      dataIndex: 'last_modified',
      key: 'last_modified',
      // defaultSortOrder: 'descend',
      sorter: (a, b) =>
        moment(a.last_modified).unix() - moment(b.last_modified).unix(),
      render: lastModified => (
        <div style={{ whiteSpace: 'nowrap' }}>
          {moment(lastModified).format('DD-MM-YYYY')}
        </div>
      ),
    },
    {
      title: 'Theo dõi',
      dataIndex: 'id',
      key: 'follow',
      render: (id, record) => (
        <Button shape="round" onClick={() => onFollow(id)}>
          {console.log(record)}
          {has(record, 'parent_project_id') ? `Theo dõi` : `Đang theo`}
        </Button>
      ),
    },
  ];

  const listProps = {
    dataSource: project,
    columns,
    // pagination,
    onChange: page => {
      // this.handleRefresh({
      //   page: page.current,
      //   pageSize: page.pageSize,
      // })
    },
    onFollows: id => {},
    rowSelection: {
      selectedRowKeys,
      onChange: selectedRowKey => {
        setSelectedRowKeys(selectedRowKey);
      },
    },
  };

  return (
    <div>
      <Helmet>
        <title>Danh Sách Dự Án</title>
        <meta name="description" content="Danh sách dự án" />
      </Helmet>
      {/* <List data={project} /> */}
      <Filter />
      <List {...listProps} />
    </div>
  );
}

Projects.propTypes = {
  onFetchProject: PropTypes.func,
  project: PropTypes.array,
};

const mapStateToProps = createStructuredSelector({
  project: makeSelectProjects(),
});

export function mapDispatchToProps(dispatch) {
  return {
    onFetchProject: () => dispatch(loadProjects()),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(Projects);
