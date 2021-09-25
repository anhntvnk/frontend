/* eslint-disable dot-notation */
/* eslint-disable jsx-a11y/anchor-is-valid */
/*
 * Settings KPI Page
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React, { useReducer, useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';

import {
  get as _get,
  mapKeys as _mapKeys,
  join as _join,
  round as _round,
  isNaN as _isNaN,
  isEmpty as _isEmpty,
  omit as _omit,
} from 'lodash';
import moment from 'moment';
import {
  ArrowLeftOutlined,
  CheckCircleOutlined,
  SmileTwoTone,
  ReconciliationTwoTone,
  PhoneTwoTone,
  DownloadOutlined,
} from '@ant-design/icons';
import { createStructuredSelector } from 'reselect';
import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import {
  Input,
  Form,
  Card,
  Row,
  Col,
  Button,
  List,
  Avatar,
  message,
  DatePicker,
  Table,
} from 'antd';
import styled from 'styled-components';
import {
  makeSelectKPIExport,
  makeSelectKPISettings,
  makeSelectKPISettingsMsg,
} from './selectors';
import reducer from './reducer';
import saga from './saga';
import { loadAllKPI, loadKPI, updateKPI } from './actions';
import { stateDefault } from './constants';
import { getUserId } from '../../../../services/auth';
import messages from '../../../components/Kpi/messages';

const key = 'kpiSettings';
const { Meta } = Card;

// eslint-disable-next-line react/prop-types
function Point({ point }) {
  return (
    <span style={{ color: 'red' }}>
      {point}{' '}
      <span style={{ color: 'blue' }}>
        <FormattedMessage {...messages.myKPIresultScore} />
      </span>
    </span>
  );
}

export function Settings({
  history,
  kpi,
  kpiExport,
  successMsg,
  onUpdateKPI,
  onLoadKPIs,
  onLoadAllKPIs,
}) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  const columns = [
    {
      title: 'Chào giá',
      dataIndex: 'chao_gia',
      key: 'chao_gia',
      render: text => <a>{text}</a>,
    },
    {
      title: 'Chốt đơn hàng',
      dataIndex: 'chot_don_hang',
      key: 'chot_don_hang',
    },
    {
      title: 'Cuộc gọi',
      dataIndex: 'cuoc_goi',
      key: 'cuoc_goi',
    },
    {
      title: 'Lịch hẹn gặp',
      dataIndex: 'lich_hen_gap',
      key: 'lich_hen_gap',
    },
    {
      title: 'Ngày tháng',
      dataIndex: 'created',
      key: 'created',
    },
  ];

  const [form] = Form.useForm();
  const [isDirty, setIsDirty] = useState(true);

  useEffect(() => {
    onLoadKPIs();
  }, []);

  useEffect(() => {
    if (successMsg) {
      message.success(<FormattedMessage {...messages.myKPIsuccessMsg} />);
    }
  }, [successMsg]);

  useEffect(() => {
    if (kpiExport.length > 0) {
      setIsDirty(false);
    }
  }, [kpiExport]);

  useEffect(() => {
    if (kpi) {
      setFommValues({
        cuoc_goi: _get(kpi, 'cuoc_goi'),
        lich_hen_gap: _get(kpi, 'lich_hen_gap'),
        chao_gia: _get(kpi, 'chao_gia'),
        chot_don_hang: _get(kpi, 'chot_don_hang'),
      });
    }
  }, [kpi]);

  const [formValues, setFommValues] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      cuoc_goi: 0,
      lich_hen_gap: 0,
      chao_gia: 0,
      chot_don_hang: 0,
    },
  );

  const getFieldChange = evt => {
    const { name } = evt.target;
    const newValue = parseInt(evt.target.value || '0', 10);
    const regex = /^[0-9\b]+$/;
    if (newValue === '' || regex.test(newValue)) {
      setFommValues({ [name]: newValue });
    }
  };

  const onSettingsKPI = () => {
    let newKPI;
    if (!_isEmpty(kpi)) {
      newKPI = Object.assign(kpi, formValues);
    } else {
      newKPI = { ...formValues, user_id: getUserId() };
    }

    onUpdateKPI(newKPI);
  };

  const elements = [
    {
      key: 'cuoc_goi',
      label: <FormattedMessage {...messages.myKPIevlCall} />,
      iconElement: (
        <>
          <PhoneTwoTone style={{ fontSize: '24px', paddingRight: '8px' }} />
          <b>
            1. <FormattedMessage {...messages.myKPIevlCall} /> (
            <Point point="1" />)
          </b>
        </>
      ),
    },
    {
      key: 'lich_hen_gap',
      label: <FormattedMessage {...messages.myKPIevlSchedule} />,
      iconElement: (
        <>
          <SmileTwoTone style={{ fontSize: '24px', paddingRight: '8px' }} />
          <b>
            2. <FormattedMessage {...messages.myKPIevlSchedule} /> (
            <Point point="3" />)
          </b>
        </>
      ),
    },
    {
      key: 'chao_gia',
      label: <FormattedMessage {...messages.myKPIevlPrice} />,
      iconElement: (
        <>
          <ReconciliationTwoTone
            style={{ fontSize: '24px', paddingRight: '8px' }}
          />
          <b>
            3. <FormattedMessage {...messages.myKPIevlPrice} /> (
            <Point point="5" />)
          </b>
        </>
      ),
    },
    {
      key: 'chot_don_hang',
      label: <FormattedMessage {...messages.myKPIevlOrder} />,
      iconElement: (
        <>
          <CheckCircleOutlined
            style={{
              fontSize: '24px',
              paddingRight: '8px',
              color: 'rgb(24, 144, 255)',
            }}
          />
          <b>
            4. <FormattedMessage {...messages.myKPIevlOrder} /> (
            <Point point="15" />)
          </b>
        </>
      ),
    },
  ];

  const scores = {
    cuoc_goi: 1,
    lich_hen_gap: 3,
    chao_gia: 5,
    chot_don_hang: 15,
  };

  let total = 0;
  const values = [];

  _mapKeys(scores, (score, k) => {
    total += _get(formValues, k, 0) * score;
    values.push(`${score}x${_get(formValues, k, 0) || 0}`);
    return key;
  });

  const dailyScore = _get(stateDefault, 'kpiConfig.daily_score', 0);
  const kpiDaily = _round(total / dailyScore, 2);
  const result = _round((total / dailyScore) * 100, 0);
  const fileType =
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
  const fileExtension = '.xlsx';

  const config = {
    rules: [{ type: 'object', required: true, message: 'Please select time!' }],
  };

  const onSearchKPI = dateTimes => {
    const { startDate, endDate } = dateTimes;
    onLoadAllKPIs({
      startDate: moment(startDate).format('YYYY-MM-DD'),
      endDate: moment(endDate).format('YYYY-MM-DD'),
    });
  };

  const exportToCSV = dataExport => {
    const newData = dataExport.map(exp =>
      _omit(exp, ['id', 'user_id', 'custom']),
    );

    const ws = XLSX.utils.json_to_sheet(newData);
    const wb = { Sheets: { data: ws }, SheetNames: ['data'] };
    const excelBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
    const data = new Blob([excelBuffer], { type: fileType });
    FileSaver.saveAs(data, `myp-report-kpi${fileExtension}`);
  };

  return (
    <SettingsComponent>
      <Helmet>
        <title>KPIs</title>
        <meta name="description" content="KPIs" />
      </Helmet>
      <CenteredSectionWithBack>
        <Button
          type="primary"
          shape="round"
          icon={<ArrowLeftOutlined />}
          onClick={() => history.goBack()}
        >
          <FormattedMessage {...messages.myKPIbtnBack} />
        </Button>
        <h1>
          <FormattedMessage {...messages.myKPIevlToday} />
        </h1>
      </CenteredSectionWithBack>
      <KpiState>
        <Form name="validate_settings" onFinish={onSettingsKPI}>
          <Row gutter={{ sm: 24, md: 24, lg: 16 }}>
            <Col lg={8} xs={24}>
              <h3>
                <FormattedMessage {...messages.myKPIprofile} />
              </h3>
              <CardStatus>
                <Card>
                  <Meta
                    avatar={
                      <Avatar
                        // eslint-disable-next-line global-require
                        src={require('../../../assets/images/globe/noavatar.png')}
                      />
                    }
                    description={
                      <div>
                        <p>
                          <FormattedMessage
                            {...messages.myKPIprofileAccessCode}
                          />{' '}
                          <b>MYP{_get(kpi, 'id')}</b>
                        </p>
                        <p>
                          <FormattedMessage {...messages.myKPIprofileName} />{' '}
                          <b>{_get(kpi, 'full_name')}</b>
                        </p>
                        <p>
                          <FormattedMessage
                            {...messages.myKPIprofilePosition}
                          />{' '}
                          <b>{_get(kpi, 'position')}</b>
                        </p>
                        <p>
                          <FormattedMessage {...messages.myKPIprofileSalary} />{' '}
                          <b>{moment().format('D/M/YYYY')}</b>
                        </p>
                      </div>
                    }
                  />
                </Card>
              </CardStatus>
            </Col>
            <Col lg={16} xs={24}>
              <Rate>
                <h3>
                  <FormattedMessage {...messages.myKPIevl} />:{' '}
                </h3>
                <List size="small" bordered>
                  {elements.map(el => (
                    <List.Item key={el.key}>
                      <Col lg={12}>{el.iconElement}</Col>
                      <Col lg={12}>
                        <Form.Item>
                          <Input
                            key={el.key}
                            name={el.key}
                            value={
                              _get(formValues, el.key, 0) ||
                              _get(kpi, el.key, 0)
                            }
                            onChange={getFieldChange}
                          />
                          &nbsp;{el.label}
                        </Form.Item>
                      </Col>
                    </List.Item>
                  ))}
                </List>
              </Rate>
            </Col>
            <Col lg={24} xs={24}>
              <Result>
                <h3>
                  <FormattedMessage {...messages.myKPIresult} />
                </h3>
                <List size="small" bordered>
                  <List.Item>
                    <p style={{ color: '#5f5c5c' }}>
                      <b>
                        <FormattedMessage {...messages.myKPIresultSum} />:
                      </b>{' '}
                      ({_join(values, ' + ')}) ={' '}
                      <span style={{ color: '#f90909' }}>{total}</span>
                      <span style={{ color: '#417505' }}>
                        &nbsp;
                        <FormattedMessage {...messages.myKPIresultScore} />
                      </span>
                    </p>
                  </List.Item>
                  <List.Item>
                    <p style={{ color: '2b5eec' }}>
                      <FormattedMessage {...messages.myKPIresultRule} />{' '}
                      {dailyScore}{' '}
                      <FormattedMessage {...messages.myKPIresultEnjoy} />{' '}
                      {total === 0 ? 0 : 100}%{' '}
                      <FormattedMessage {...messages.myKPIresultSalary} />
                    </p>
                  </List.Item>
                  <List.Item>
                    <p>
                      <FormattedMessage {...messages.myKPIresultKPIs} />: (
                      {total} : {dailyScore}) ={' '}
                      {_isNaN(kpiDaily) ? '' : kpiDaily}
                    </p>
                  </List.Item>
                  <List.Item>
                    <p style={{ color: 'blue' }}>
                      <FormattedMessage {...messages.myKPIresultToday} />
                      <span style={{ color: '#f90909' }}>
                        {' '}
                        {_isNaN(result) || dailyScore === 0 ? '' : result}%
                      </span>{' '}
                      <FormattedMessage {...messages.myKPIresultSalary} />{' '}
                      <FormattedMessage {...messages.myKPIresultKPIs} />
                    </p>
                  </List.Item>
                </List>
                <Form.Item style={{ marginTop: '20px' }}>
                  <Button
                    type="primary"
                    htmlType="submit"
                    className="update-kpi"
                  >
                    <FormattedMessage {...messages.myKPIbtnSave} />
                  </Button>
                </Form.Item>
              </Result>
            </Col>
          </Row>
        </Form>
      </KpiState>

      <Form
        form={form}
        name="advanced_search"
        className="ant-advanced-search-form"
        onFinish={onSearchKPI}
      >
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          <Col md={8}>
            <Form.Item name="startDate" label="Ngày bắt đầu" {...config}>
              <DatePicker
                style={{ width: '100%' }}
                autoComplete="off"
                placeholder="Chọn ngày"
              />
            </Form.Item>
          </Col>
          <Col md={8}>
            <Form.Item name="endDate" label="Ngày kết thúc" {...config}>
              <DatePicker
                style={{ width: '100%' }}
                autoComplete="off"
                placeholder="Chọn ngày"
              />
            </Form.Item>
          </Col>
          <Col md={4}>
            <Button type="primary" htmlType="submit">
              Hiển thị KPI
            </Button>
          </Col>

          <Col md={4}>
            <Button
              disabled={isDirty}
              type="primary"
              icon={<DownloadOutlined />}
              onClick={() => exportToCSV(kpiExport)}
            >
              Xuất Excel
            </Button>
          </Col>
        </Row>
        {kpiExport.length > 0 && (
          <Table columns={columns} dataSource={kpiExport} />
        )}
      </Form>
    </SettingsComponent>
  );
}

const Rate = styled.div`
  .ant-list {
    background: #fff;
  }

  .ant-list-bordered.ant-list-sm .ant-list-item {
    padding: 11px 16px;
    @media only screen and (max-width: 767.99px) {
      padding: 14px 2px;
    }
  }

  .ant-btn-round.ant-btn-sm {
    height: 26px;
    padding: 0px 28px;
    font-size: 14px;
    border-radius: 24px;
    margin-right: 15px;

    @media only screen and (max-width: 767.99px) {
      padding: 0px 10px;
      margin-right: 6px;
    }
  }

  .ant-form-item {
    margin-bottom: 0;
  }

  .ant-input {
    width: 60px;
  }
`;

const CenteredSectionWithBack = styled.section`
  text-align: center;
  margin: 50px 0px;
  text-transform: uppercase;
  .ant-btn {
    display: flex;
    align-items: center;
    float: left;
    margin-top: 6px;
    @media only screen and (max-width: 767.99px) {
      margin-top: 0;
    }
  }

  @media only screen and (max-width: 767.99px) {
    padding: 10px;
    font-size: 7px;
    margin: 30px 0px;
  }
`;

const KpiState = styled.section`
  @media only screen and (max-width: 767.99px) {
    padding: 10px;
  }

  .ant-tabs-card > .ant-tabs-nav .ant-tabs-tab,
  .ant-tabs-card > div > .ant-tabs-nav .ant-tabs-tab {
    color: #b7252c;
    font-weight: bold;
    line-height: 24px;
    background: #ffffff;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 8px !important;
    border: initial;
  }

  .ant-tabs-card > .ant-tabs-nav .ant-tabs-tab-active,
  .ant-tabs-card > div > .ant-tabs-nav .ant-tabs-tab-active {
    background-color: #b7252c;
  }
  .ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn {
    color: #ffffff;
  }

  .ant-tabs {
    .ant-tabs-tab {
      margin-right: 6px !important;
    }

    .ant-tabs-nav-wrap {
      overflow: initial !important;
    }
  }

  .ant-tabs-card > .ant-tabs-nav .ant-tabs-tab,
  .ant-tabs-card > div > .ant-tabs-nav .ant-tabs-tab {
    padding: 5px 16px;
  }
`;

const SettingsComponent = styled.div`
  dispay: block;
  max-width: 800px;
  margin: 30px auto;
`;

const CardStatus = styled.div`
  margin-bottom: 30px;
  height: 200px;
  @media only screen and (max-width: 767.99px) {
    margin-bottom: 0px;
    height: 160px;
  }

  .ant-avatar {
    width: 80px;
    height: 80px;
  }

  .ant-card-meta {
    margin: 6px 0;
  }

  .ant-card-meta-avatar {
    padding-right: 10px;
  }

  .ant-card-meta-description {
    color: initial;
    b {
      color: blue;
    }
  }

  .ant-card-bordered {
    border: 1px solid #d9d9d9;
    border-radius: 2px;
  }
  .ant-card {
    @media only screen and (max-width: 767.99px) {
      height: 140px;
    }
  }
  .ant-card-body {
    @media only screen and (max-width: 767.99px) {
      font-size: 12px;
      font-weight: 500;
      padding: 12px;
    }
  }
`;

const Result = styled.div`
  .ant-list {
    background: #fff;
  }
  .ant-list-bordered.ant-list-sm .ant-list-item {
    padding: 15px 0px 0px 15px;
  }

  .ant-btn-round.ant-btn-sm {
    height: 26px;
    padding: 0px 28px;
    font-size: 14px;
    border-radius: 24px;
    margin-right: 15px;
    @media only screen and (max-width: 767.99px) {
      height: 18px;
      font-size: 11px;
    }
  }
`;

Settings.propTypes = {
  onUpdateKPI: PropTypes.func,
  onLoadKPIs: PropTypes.any,
  onLoadAllKPIs: PropTypes.any,
  history: PropTypes.object,
  kpi: PropTypes.any,
  kpiExport: PropTypes.any,
  successMsg: PropTypes.bool,
};

const mapStateToProps = createStructuredSelector({
  kpi: makeSelectKPISettings(),
  kpiExport: makeSelectKPIExport(),
  successMsg: makeSelectKPISettingsMsg(),
});

export function mapDispatchToProps(dispatch) {
  return {
    onUpdateKPI: data => dispatch(updateKPI(data)),
    onLoadKPIs: () => dispatch(loadKPI()),
    onLoadAllKPIs: data => dispatch(loadAllKPI(data)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(withRouter(Settings));
