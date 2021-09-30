/* eslint-disable jsx-a11y/anchor-is-valid */
/*
 * DayPage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { omit as _omit, mapKeys as _mapKeys, get as _get } from 'lodash';
import moment from 'moment';
import { Row, Col, Button, Table, DatePicker, Form } from 'antd';
import * as XLSX from 'xlsx';
import { ArrowLeftOutlined, DownloadOutlined } from '@ant-design/icons';
import { createStructuredSelector } from 'reselect';
import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import KpiDay from 'components/Kpi';
import styled from 'styled-components';
import {
  makeSelectKPIExport,
  makeSelectKPIs,
  makeSelectUser,
} from './selectors';
import reducer from './reducer';
import saga from './saga';
import { loadAllKPI, loadKPI, loadUser } from './actions';

const key = 'kpiDay';
const { RangePicker } = DatePicker;

export function KpiByDay({
  history,
  kpis,
  user,
  kpiExport,
  onLoadUser,
  onLoadKPIs,
  onLoadAllKPIs,
}) {
  console.log('🚀 ~ file: index.js ~ line 44 ~ user', user);
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  useEffect(() => {
    onLoadKPIs();
    onLoadUser();
  }, []);

  // useEffect(() => {
  //   if (!kpis) {
  //     message.success('Thiết lập KPIs hôm nay thành công!');
  //   }
  // }, [kpis]);

  const [form] = Form.useForm();
  const [isDirty, setIsDirty] = useState(true);

  useEffect(() => {
    if (kpiExport.length > 0) {
      setIsDirty(false);
    }
  }, [kpiExport]);

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

  const rangeConfig = {
    rules: [
      {
        type: 'array',
        required: true,
        message: 'Hãy nhập thời gian Xuất KPIs!',
      },
    ],
  };

  const scores = {
    cuoc_goi: 1,
    lich_hen_gap: 3,
    chao_gia: 5,
    chot_don_hang: 15,
  };

  const onSearchKPI = dateTimes => {
    const { rangeValue } = dateTimes;
    onLoadAllKPIs({
      startDate: moment(rangeValue[0]).format('YYYY-MM-DD'),
      endDate: moment(rangeValue[1]).format('YYYY-MM-DD'),
    });
  };

  const exportToCSV = dataExport => {
    const newData = dataExport.map(exp => {
      let totalScore = 0;
      _mapKeys(scores, (score, k) => {
        totalScore += _get(exp, k, 0) * score;
        return key;
      });

      return { ..._omit(exp, ['id', 'user_id', 'custom']), total: totalScore };
    });

    const header = [
      ['Mã nhân viên', `MYP${_get(user, 'id')}`],
      ['Họ và tên', _get(user, 'full_name')],
    ];

    const ws = XLSX.utils.json_to_sheet(newData, {
      origin: 3,
    });
    XLSX.utils.sheet_add_aoa(ws, header, {
      origin: 0,
    });

    ws.A4.v = 'Ngày tạo';
    ws.B4.v = 'Cuộc gọi';
    ws.C4.v = 'Lịch hẹn gặp';
    ws.D4.v = 'Chào Giá';
    ws.E4.v = 'Chốt Đơn Hàng';
    ws.F4.v = 'Tổng cộng điểm KPIs';

    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'KPIs');
    XLSX.writeFile(wb, 'myp-report-kpis.xlsx');
  };

  console.log('🚀 ~ file: index.js ~ line 164 ~ kpis', kpis);
  return (
    <>
      <KpiDay
        history={history}
        user={user}
        kpi={kpis}
        Back={ArrowLeftOutlined}
      />
      <FormExport
        form={form}
        name="advanced_search"
        className="ant-advanced-search-form"
        onFinish={onSearchKPI}
      >
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          <Col lg={24}>
            <h3>Tổng hợp KPI</h3>
          </Col>
          <Col lg={24}>
            <Form.Item
              name="rangeValue"
              label="Chọn thời gian"
              {...rangeConfig}
            >
              <RangePicker placeholder={['Ngày bắt đầu', 'Ngày kết thúc']} />
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
        <Table
          columns={columns}
          locale={{ emptyText: 'Không có dữ liệu !' }}
          dataSource={kpiExport.map(k => ({ ...k, key: k.id }))}
        />
      </FormExport>
    </>
  );
}

KpiByDay.propTypes = {
  onLoadKPIs: PropTypes.func,
  onLoadUser: PropTypes.func,
  history: PropTypes.object,
  kpis: PropTypes.any,
  user: PropTypes.any,
  onLoadAllKPIs: PropTypes.any,
  kpiExport: PropTypes.any,
};

const FormExport = styled(Form)`
  max-width: 800px;
  margin: 0px auto 50px auto !important;

  .ant-table-wrapper {
    margin-top: 30px;
  }
  .ant-picker-range {
    width: 500px;
  }

  input::placeholder {
    color: blue !important;
    font-size: 14px;
  }
`;

const mapStateToProps = createStructuredSelector({
  kpis: makeSelectKPIs(),
  kpiExport: makeSelectKPIExport(),
  user: makeSelectUser(),
});

export function mapDispatchToProps(dispatch) {
  return {
    onLoadKPIs: () => dispatch(loadKPI()),
    onLoadUser: () => dispatch(loadUser()),
    onLoadAllKPIs: data => dispatch(loadAllKPI(data)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(withRouter(KpiByDay));
