/* eslint-disable indent */
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
  isEmpty as _isEmpty,
} from 'lodash';
import { createStructuredSelector } from 'reselect';
import { injectIntl, intlShape, FormattedMessage } from 'react-intl';

import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import { Avatar, message, Tag } from 'antd';
import moment from 'moment';
import List from 'components/List';
import AdvancedSearchForm from 'components/AdvancedSearchForm';
import ROUTE from '../../constants/routes';
import { ENUMS } from '../../constants';
import { loadProjects, changeFollow, unFollow } from './actions';
import { makeSelectProjects, makeSelectLoading } from './selectors';
import { cleanText } from './utils';
import reducer from './reducer';
import saga from './saga';
import logo from '../../assets/images/logo/my-project.png';
import './styles.less';
import messages from './messages';

const key = 'projects';
const MY_PROJECT_FOLLOW = 'project-follow';

export function Projects({
  history,
  location,
  project,
  loading,
  onFetchProject,
  onFollowProject,
  onUnFollowProject,
  intl,
}) {
  useInjectSaga({ key, saga });
  useInjectReducer({ key, reducer });

  if (history.location.state) {
    if (_get(history.location.state, 'successMessage', '')) {
      message.success(_get(history.location.state, 'successMessage', ''));
      history.replace({ ...history.location, state: undefined });
    }
  }

  const [projectList, setProjectList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [fillter, setFilter] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  const [projectType, setProjectType] = useState(
    location.search.replace(/(^\/|\/$)/g, '').split('?')[1],
  );

  useEffect(() => {
    if (_isEmpty(projectList)) {
      onFetchProject();
    }
    if (_get(history.location.state, 'currentPage', '')) {
      setCurrentPage(_get(history.location.state, 'currentPage', ''));
    }

    if (_get(history.location.state, 'fillter', '')) {
      setFilter(_get(history.location.state, 'fillter', ''));
    }

    if (_get(history.location.state, 'projectType', '')) {
      setProjectType(_get(history.location.state, 'projectType', ''));
    }
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }, [projectList]);

  useEffect(() => {
    searchProjects(fillter);
  }, [project]);

  useEffect(() => {
    const dataChange =
      projectType === MY_PROJECT_FOLLOW ? getProjectFollows(project) : project;
    setProjectList(dataChange);
  }, [projectType]);

  const getProjectFollows = projects => projects.filter(p => p.is_follow);

  const onFollow = (isFollow, projectFl) => {
    if (isFollow) {
      const user = JSON.parse(localStorage.getItem('user'));
      const data = _omit(_clone(projectFl), ['idParentProjects', 'id']);
      data.user_id = user.id;
      data.team_id = user.team_id || 0;
      data.parent_project_id = projectFl.id;
      data.last_modified = moment().format();
      data.is_follow = 1;
      onFollowProject(data);
    } else {
      // eslint-disable-next-line no-lonely-if
      if (_has(projectFl, 'parent_project_id')) {
        onUnFollowProject(_get(projectFl, 'id', ''));
      }
    }
  };

  const convertCost = labelValue =>
    Math.abs(Number(labelValue)) >= 1.0e3
      ? `${Math.abs(Number(labelValue)) / 1.0e3} ${intl.formatMessage({
          ...messages.myProjFollowCostB,
        })}`
      : `${Number(labelValue)} ${intl.formatMessage({
          ...messages.myProjFollowCostM,
        })}`;

  const columns = [
    {
      title: <FormattedMessage {...messages.myProjImage} />,
      dataIndex: 'image',
      key: 'image',
      responsive: ['lg', 'md'],
      render: text => <Avatar style={{ marginLeft: 8 }} src={text || logo} />,
    },
    {
      title: <FormattedMessage {...messages.myProjName} />,
      dataIndex: 'name',
      key: 'name',
      sorter: (a, b) => a.name.length - b.name.length,
      responsive: ['lg', 'md', 'xs'],
      render: (text, record) => {
        const follow = record.is_follow ? 'following' : 'notfollow';
        let projectId = record.id;
        if (!record.is_follow) {
          projectId = record.parent_project_id || record.id;
        }
        return (
          <Link
            to={{
              pathname: `${ROUTE.PROJECT_DETAILS}/${follow}/${projectId}`,
              state: {
                data: record,
                currentPage,
                fillter,
                projectType,
              },
            }}
          >
            {text}
          </Link>
        );
      },
    },
    {
      title: <FormattedMessage {...messages.myProjValue} />,
      dataIndex: 'cost',
      width: 100,
      key: 'cost',
      responsive: ['lg', 'md', 'xs'],
      sorter: (a, b) => a.cost - b.cost,
      render: cost => convertCost(cost),
    },
    {
      title: <FormattedMessage {...messages.myProjAddress} />,
      dataIndex: 'address',
      key: 'address',
      // eslint-disable-next-line consistent-return
      render: (text, record) => {
        if (record.city && text) {
          return `${text} - ${record.city}`;
        }

        return text && text + record.city && record.city;
      },
    },
    {
      title: <FormattedMessage {...messages.myProjPeriod} />,
      dataIndex: 'stage',
      key: 'stage',
      width: 100,
      responsive: ['lg', 'md'],
    },
    {
      title: <FormattedMessage {...messages.myProjStatus} />,
      dataIndex: 'status_code',
      key: 'status_code',
      render: statusCode => {
        const task = _get(ENUMS.STATE_LIST, `[${statusCode}]`);
        return (
          <Tag
            color={task.color}
            style={{
              color: task.colorText,
              width: '130px',
              textAlign: 'center',
              fontWeight: 600,
            }}
          >
            {task.label}
          </Tag>
        );
      },
    },
    {
      title: 'Người theo dõi',
      dataIndex: 'id',
      key: 'id',
      width: 150,
      render: id => (
        <div>
          {console.log([9287, 9286, 9285].includes(id), 'id')}
          {[9287, 9282, 9285, 8849, 9286].includes(id)
            ? 'Nguyễn Văn A, Nguyễn Văn B, Nguyễn Văn C, Nguyễn Văn D'
            : ''}
        </div>
      ),
    },
    {
      title: <FormattedMessage {...messages.myProjUpdate} />,
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
      title: <FormattedMessage {...messages.myProjFollow} />,
      dataIndex: 'id',
      key: 'follow',
      width: 75,
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
    pagination: {
      current: currentPage,
      projectType,
      onChange: page => {
        setCurrentPage(page);
      },
    },
    columns,
    dataSource: projectList,
    loading: loading || isLoading,
  };

  const onResetFields = () => {
    setProjectList(project);
  };

  const onSearchProjects = advSearch => {
    setFilter(advSearch);
    searchProjects(advSearch);
  };

  const searchProjects = advSearch => {
    const {
      name: filterName,
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

    // eslint-disable-next-line prettier/prettier
    const dataFilter =
      projectType === MY_PROJECT_FOLLOW ? getProjectFollows(project) : project;

    for (let i = 0; i < dataFilter.length; i += 1) {
      const item = dataFilter[i];

      let addToList = true;
      const owner = item.owner ? cleanText(item.owner) : '';

      if (
        typeof filterOwner !== 'undefined' &&
        owner.indexOf(cleanText(filterOwner)) === -1
      ) {
        addToList = false;
      }

      if (addToList) {
        const projectName = item.name ? cleanText(item.name) : '';

        if (
          typeof filterName !== 'undefined' &&
          projectName.indexOf(cleanText(filterName)) === -1
        ) {
          addToList = false;
        }
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
    setProjectType(type === 1 ? MY_PROJECT_FOLLOW : '');
  };

  return (
    <div className="project-table">
      <Helmet>
        <title>Danh Sách Dự Án</title>
        <meta name="description" content="Danh sách dự án" />
      </Helmet>
      <AdvancedSearchForm
        onSearchProjects={onSearchProjects}
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
  loading: PropTypes.bool,
  location: PropTypes.object,
  history: PropTypes.object,
  intl: intlShape.Required,
};

const mapStateToProps = createStructuredSelector({
  project: makeSelectProjects(),
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

export default compose(withConnect)(withRouter(injectIntl(Projects)));
