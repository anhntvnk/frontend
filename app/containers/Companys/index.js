/* eslint-disable global-require */
/* eslint-disable jsx-a11y/anchor-is-valid */
/*
 * ProjectPage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import { get as _get } from 'lodash';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Avatar } from 'antd';
import { LikeFilled } from '@ant-design/icons';
import { createStructuredSelector } from 'reselect';

import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import List from 'components/List';
import styled from 'styled-components';
import SearchCompany from 'components/SearchCompany';
import { followCompany, loadCompanys, unfollowCompany } from './actions';
import {
  makeSelectCompanyFollows,
  makeSelectCompanys,
  makeSelectLoading,
} from './selectors';
import { cleanText } from './utils';
import reducer from './reducer';
import saga from './saga';
import logo from '../../assets/images/logo/my-project.png';
import { ROUTE } from '../../constants';

const CompanyList = styled.section`
  dispay: block;
  background: #fff;
  padding: 20px;

  .ant-table-cell > a {
    color: #2f54eb;
  }
`;

const key = 'companys';
export function Companys({
  location,
  companys,
  companyFollows,
  onFetchCompany,
  onFollowCompany,
  onUnfollowCompany,
  loading,
}) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  // set project default with project all or project follow
  const copmpanyType = location.search.replace(/(^\/|\/$)/g, '').split('?')[1];
  const defaultCompany =
    copmpanyType === 'company-follow' ? companyFollows : companys;

  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [companyData, setCompanyData] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    onFetchCompany();
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }, [companyData]);

  const columns = [
    {
      title: 'Ảnh',
      dataIndex: 'image',
      key: 'image',
      responsive: ['lg', 'md'],
      render: text => <Avatar style={{ marginLeft: 8 }} src={text || logo} />,
    },
    {
      title: 'Tên công ty',
      dataIndex: 'name',
      key: 'name',
      responsive: ['lg', 'md', 'xs'],
      render: (text, record) => (
        <Link
          to={{
            pathname: ROUTE.COMPANY_DETAILS,
            state: {
              data: record,
            },
          }}
        >
          {text}
        </Link>
      ),
    },
    {
      title: 'Địa chỉ',
      dataIndex: 'office_address',
      key: 'office_address',
      render: (address, record) =>
        `${address} ${record.district} - ${record.city}`,
    },
    {
      title: 'Theo dõi',
      dataIndex: 'id',
      key: 'follow',
      render: (id, record) => (
        <Link
          className="btn-editor"
          onClick={() => onFollow(!_get(record, 'is_follow', false), id)}
          to="#"
        >
          <div
            style={{
              whiteSpace: 'nowrap',
              color: `${
                _get(record, 'is_follow', false)
                  ? 'rgb(32, 120, 244)'
                  : '#65676b'
              }`,
              display: 'inline-flex',
              alignItems: 'center',
            }}
          >
            <img
              width={32}
              src={
                _get(record, 'is_follow', false)
                  ? require('../../assets/images/company/follow.png')
                  : require('../../assets/images/company/unfollow.png')
              }
              alt=""
            />
          </div>
        </Link>
      ),
    },
  ];
  const listProps = {
    dataSource: companyData || defaultCompany,
    columns,
    loading: loading || isLoading,
    // onChange: page => {
    //   this.handleRefresh({
    //     page: page.current,
    //     pageSize: page.pageSize,
    //   })
    // },
    rowSelection: {
      selectedRowKeys,
      onChange: selectedRowKey => {
        setSelectedRowKeys(selectedRowKey);
      },
    },
  };

  const onFollow = (isFollow, companyId) => {
    if (isFollow) {
      onFollowCompany(companyId);
    } else {
      onUnfollowCompany(companyId);
    }
  };

  const changeProjects = type => {
    setIsLoading(true);
    if (type === 1) {
      setCompanyData(companyFollows);
    } else {
      setCompanyData(companys);
    }
  };

  const onResetFields = () => {
    setCompanyData(companys);
  };

  const searchCompany = itemSearch => {
    const { name: filterName, citys: filterCity } = itemSearch;
    const listData = [];
    for (let i = 0; i < companys.length; i += 1) {
      const item = companys[i];

      let addToList = true;

      if (addToList) {
        const companyFilter = item.name
          ? cleanText(item.name.toLowerCase())
          : '';

        if (
          typeof filterName !== 'undefined' &&
          companyFilter.indexOf(cleanText(filterName)) === -1
        ) {
          addToList = false;
        }
      }

      if (addToList) {
        const city = item.city ? cleanText(item.city.toLowerCase()) : '';

        if (typeof filterCity !== 'undefined') {
          if (city.indexOf(cleanText(filterCity)) === -1) {
            addToList = false;
          }
        }
      }

      if (addToList) listData.push(item);
    }

    setCompanyData(listData);
  };

  return (
    <CompanyList>
      <Helmet>
        <title>Danh Sách Dự Án</title>
        <meta name="description" content="Danh sách dự án" />
      </Helmet>
      <SearchCompany
        onSearchProjects={searchCompany}
        onChangeProject={changeProjects}
        onResetFields={onResetFields}
        copmpanyType={copmpanyType}
      />
      <List {...listProps} />
    </CompanyList>
  );
}

Companys.propTypes = {
  onFetchCompany: PropTypes.func,
  onFollowCompany: PropTypes.func,
  onUnfollowCompany: PropTypes.func,
  companys: PropTypes.array,
  companyFollows: PropTypes.array,
  location: PropTypes.object,
  loading: PropTypes.bool,
};

const mapStateToProps = createStructuredSelector({
  companys: makeSelectCompanys(),
  companyFollows: makeSelectCompanyFollows(),
  loading: makeSelectLoading(),
});

export function mapDispatchToProps(dispatch) {
  return {
    onFetchCompany: () => dispatch(loadCompanys()),
    onFollowCompany: companyId => dispatch(followCompany(companyId)),
    onUnfollowCompany: companyId => dispatch(unfollowCompany(companyId)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(withRouter(Companys));
