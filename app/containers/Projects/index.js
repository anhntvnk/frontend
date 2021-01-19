/* eslint-disable global-require */
/* eslint-disable jsx-a11y/anchor-is-valid */
/*
 * ProjectPage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React, { useEffect, useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { compose } from 'redux';
import {
  get as _get,
  omit as _omit,
  clone as _clone,
  has as _has,
} from 'lodash';
import { createStructuredSelector } from 'reselect';

import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import { Avatar, message, Tag } from 'antd';
import moment from 'moment';
import List from 'components/List';
import AdvancedSearchForm from 'components/AdvancedSearchForm';
import ROUTE from '../../constants/routes';
import { ENUMS } from '../../constants';
import { getUserId } from '../../../services/auth';
import { loadProjects, changeFollow, unFollow } from './actions';
import {
  makeSelectProjects,
  makeSelectLoading,
  makeSelectFollowedProjects,
} from './selectors';
import { cleanText } from './utils';
import reducer from './reducer';
import saga from './saga';
import logo from '../../assets/images/logo/my-project.png';
import './styles.less';

const key = 'projects';

export function Projects({
  history,
  location,
  project,
  followedProjects,
  loading,
  onFetchProject,
  onFollowProject,
  onUnFollowProject,
}) {
  // set project default with project all or project follow
  const projectType = location.search.replace(/(^\/|\/$)/g, '').split('?')[1];
  // eslint-disable-next-line prettier/prettier
  const defaultProject =
    projectType === 'project-follow' ? followedProjects : project;

  if (history.location.state) {
    message.success(_get(history.location.state, 'successMessage', ''));
    history.replace({ ...history.location, state: undefined });
  }

  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [projectList, setProjectList] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useInjectSaga({ key, saga });
  useInjectReducer({ key, reducer });

  useEffect(() => {
    onFetchProject();
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }, [projectList]);

  const onFollow = (isFollow, projectFl) => {
    if (isFollow) {
      const data = _omit(_clone(projectFl), ['idParentProjects', 'id']);
      data.user_id = getUserId();
      data.team_id = _get(projectFl, 'user.team_id', 0);
      data.parent_project_id = projectFl.id;
      data.last_modified = moment().format();
      data.status = ENUMS.STATE.SANG_LOC;
      data.is_follow = 1;
      data.status_code = 1;
      // call api add follow project
      onFollowProject(data);
    } else {
      // eslint-disable-next-line no-lonely-if
      if (_has(projectFl, 'parent_project_id')) {
        onUnFollowProject(_get(projectFl, 'id', ''));
      }
    }
  };

  const columns = [
    {
      title: 'Ảnh',
      dataIndex: 'image',
      key: 'image',
      responsive: ['lg', 'md'],
      render: text => <Avatar style={{ marginLeft: 8 }} src={text || logo} />,
    },
    {
      title: 'Tên dự án',
      dataIndex: 'name',
      key: 'name',
      sorter: (a, b) => a.name.length - b.name.length,
      render: (text, record) => (
        <Link
          to={{
            pathname: ROUTE.PROJECT_DETAILS,
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
      width: 150,
    },
    {
      title: 'Trạng thái',
      dataIndex: 'status_code',
      key: 'status_code',
      render: statusCode => {
        const task = _get(ENUMS.STATE_LIST, `[${statusCode}]`);
        return (
          <Tag color={task.color} style={{ color: task.colorText }}>
            {task.label}
          </Tag>
        );
      },
    },
    {
      title: 'Ngày cập nhật',
      dataIndex: 'last_modified',
      key: 'last_modified',
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
        <Link
          className="btn-editor"
          onClick={() => onFollow(!_get(record, 'is_follow', false), record)}
          to={[]}
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
    dataSource: projectList || defaultProject,
    columns,
    loading: loading || isLoading,
    rowSelection: {
      selectedRowKeys,
      onChange: selectedRowKey => {
        setSelectedRowKeys(selectedRowKey);
      },
    },
  };

  const onResetFields = () => {
    setProjectList(project);
  };

  const searchProjects = advSearch => {
    const {
      owner: filterOwner,
      contractors: filterNTC,
      subcontractors: filterNTP,
      citys: filterCity,
      month_of_commencement: filterStart,
      month_of_completion: filterFinish,
      type: filterType,
      stage: filterStage,
    } = advSearch;
    const listData = [];

    for (let i = 0; i < project.length; i += 1) {
      const item = project[i];

      let addToList = true;
      const owner = item.owner ? cleanText(item.owner) : '';

      if (
        typeof filterOwner !== 'undefined' &&
        owner.indexOf(cleanText(filterOwner)) === -1
      ) {
        addToList = false;
      }

      if (addToList) {
        const ntc = item.nha_thau_chinh ? cleanText(item.nha_thau_chinh) : '';

        if (
          typeof filterNTC !== 'undefined' &&
          ntc.indexOf(cleanText(filterNTC)) === -1
        ) {
          addToList = false;
        }
      }

      if (addToList) {
        const ntp = item.nha_thau_phu ? cleanText(item.nha_thau_phu) : '';

        if (
          typeof filterNTP !== 'undefined' &&
          ntp.indexOf(cleanText(filterNTP)) === -1
        ) {
          addToList = false;
        }
      }

      if (addToList) {
        const city = item.city ? cleanText(item.city.toLowerCase()) : '';

        const address = item.address
          ? cleanText(item.address.toLowerCase())
          : '';

        if (typeof filterCity !== 'undefined') {
          if (
            city.indexOf(cleanText(filterCity)) === -1 ||
            address.indexOf(cleanText(filterCity)) === -1
          ) {
            addToList = false;
          }
        }
      }

      if (addToList) {
        const type = item.type || '';

        if (typeof filterType !== 'undefined' && type !== filterType) {
          addToList = false;
        }
      }

      if (addToList) {
        const stage = item.stage || '';
        if (typeof filterStage !== 'undefined' && stage !== filterStage) {
          addToList = false;
        }
      }

      if (addToList) {
        const start = item.start ? item.start : '';

        if (
          typeof filterStart !== 'undefined' &&
          !moment(start).isSame(filterStart, 'month')
        ) {
          addToList = false;
        }

        if (
          typeof filterStart !== 'undefined' &&
          !moment(start).isSame(filterStart, 'year')
        ) {
          addToList = false;
        }

        if (typeof filterFinish !== 'undefined' && item.finish === null)
          addToList = false;
      }

      if (addToList) {
        const finish = item.finish ? item.finish : '';

        if (
          typeof filterFinish !== 'undefined' &&
          !moment(finish).isSame(filterFinish, 'month')
        ) {
          addToList = false;
        }

        if (
          typeof filterFinish !== 'undefined' &&
          !moment(finish).isSame(filterFinish, 'year')
        ) {
          addToList = false;
        }

        if (typeof filterFinish !== 'undefined' && item.finish === null)
          addToList = false;
      }

      if (addToList) listData.push(item);
    }

    setProjectList(listData);
  };

  const changeProjects = type => {
    setIsLoading(true);
    if (type === 1) {
      setProjectList(followedProjects);
    } else {
      setProjectList(project);
    }
  };

  return (
    <div className="project-table">
      <Helmet>
        <title>Danh Sách Dự Án</title>
        <meta name="description" content="Danh sách dự án" />
      </Helmet>
      <AdvancedSearchForm
        onSearchProjects={searchProjects}
        onChangeProject={changeProjects}
        onResetFields={onResetFields}
        projectType={projectType}
      />
      <List {...listProps} />
    </div>
  );
}

Projects.propTypes = {
  onFetchProject: PropTypes.func,
  onFollowProject: PropTypes.func,
  onUnFollowProject: PropTypes.func,
  project: PropTypes.array,
  followedProjects: PropTypes.array,
  loading: PropTypes.bool,
  location: PropTypes.object,
  history: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  project: makeSelectProjects(),
  followedProjects: makeSelectFollowedProjects(),
  loading: makeSelectLoading(),
});

export function mapDispatchToProps(dispatch) {
  return {
    onFetchProject: () => dispatch(loadProjects()),
    onFollowProject: data => dispatch(changeFollow(data)),
    onUnFollowProject: data => dispatch(unFollow(data)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(withRouter(Projects));
