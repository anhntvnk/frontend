/* eslint-disable global-require */
/* eslint-disable jsx-a11y/anchor-is-valid */
/*
 * CompanyPage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import { get as _get, isEmpty as _isEmpty } from 'lodash';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Avatar, message } from 'antd';
import { createStructuredSelector } from 'reselect';
import { FormattedMessage } from 'react-intl';

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
import messages from '../../components/SearchCompany/messages';

const CompanyList = styled.section`
  dispay: block;
  background: #fff;
  padding: 20px;
  max-width: 1350px;
  box-sizing: border-box;
  margin: auto;

  .ant-table-cell > a {
    color: #2f54eb;
  }
`;

const key = 'companys';
const MY_COMPANY_FOLLOW = 'company-follow';
export function Companys({
  location,
  history,
  companys,
  companyFollows,
  onFetchCompany,
  onFollowCompany,
  onUnfollowCompany,
  loading,
}) {

  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  if (history.location.state && _get(history.location.state, 'successMessage', '')) {
    message.success(_get(history.location.state, 'successMessage', ''));
    history.replace({ ...history.location, state: undefined });
  }

  const [companyType, setCompanyType] = useState(
    location.search.replace(/(^\/|\/$)/g, '').split('?')[1],
  );

  const [companyData, setCompanyData] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [fillter, setFilter] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    if (_isEmpty(companyData)) {
      onFetchCompany();
    }

    if (_get(history.location.state, 'currentPage', '')) {
      setCurrentPage(_get(history.location.state, 'currentPage', ''));
    }

    if (_get(history.location.state, 'fillter', '')) {
      setFilter(_get(history.location.state, 'fillter', ''));
    }
  }, []);

  useEffect(() => {
    fillter && searchCompany(fillter);
  }, [companys]);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }, [companyData]);

  useEffect(() => {
    const dataChange =
      companyType === MY_COMPANY_FOLLOW
        ? getCompanyFollows(companys)
        : companys;
    setCompanyData(dataChange);
  }, [companyType, companys]);

  const onSearchProjects = advSearch => {
    setFilter(advSearch);
    searchCompany(advSearch);
  };

  const getCompanyFollows = datas => datas.filter(p => p.is_follow);

  const columns = [
    {
      title: <FormattedMessage {...messages.myCompanyImage} />,
      dataIndex: 'image',
      key: 'image',
      responsive: ['lg', 'md'],
      render: text => <Avatar style={{ marginLeft: 8 }} src={text || logo} />,
    },
    {
      title: <FormattedMessage {...messages.myCompanySearchName} />,
      dataIndex: 'name',
      key: 'name',
      responsive: ['lg', 'md', 'xs'],
      render: (text, record) => (
        <Link
          to={{
            pathname: ROUTE.COMPANY_DETAILS,
            state: {
              data: record,
              currentPage,
              fillter,
            },
          }}
        >
          {text}
        </Link>
      ),
    },
    {
      title: <FormattedMessage {...messages.myCompanyAddress} />,
      dataIndex: 'office_address',
      key: 'office_address',
      render: (address, record) => {
        if (address && record.district && record.city) {
          return `${address} ${record.district} - ${record.city}`;
        }

        return (
          address &&
          address + record.district &&
          record.district + record.city &&
          record.city
        );
      },
    },
    {
      title: <FormattedMessage {...messages.myCompanyStatus} />,
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
    pagination: {
      current: currentPage,
      onChange: page => {
        setCurrentPage(page);
      },
    },
    columns,
    dataSource: companyData,
    loading: loading || isLoading,
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
    setCompanyType(type === 1 ? MY_COMPANY_FOLLOW : '');
  };

  const onResetFields = () => {
    setCompanyData(companys);
  };

  const searchCompany = itemSearch => {
    const { name: filterName, citys: filterCity } = itemSearch;
    const listData = [];
    const companyFilters =
      companyType === MY_COMPANY_FOLLOW
        ? getCompanyFollows(companys)
        : companys;
    for (let i = 0; i < companyFilters.length; i += 1) {
      const item = companyFilters[i];

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
        onSearchProjects={onSearchProjects}
        onChangeProject={changeProjects}
        onResetFields={onResetFields}
        companyType={companyType}
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
  history: PropTypes.object,
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
