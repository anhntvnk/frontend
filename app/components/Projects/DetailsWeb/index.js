import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'antd';
import styled from 'styled-components';
import moment from 'moment';
import { get as _get } from 'lodash';

import logo from '../../../assets/images/logo/my-project.png';

const GutterRow = styled.section`
  padding: 20px;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
`;

function DetailsWeb({ data }) {
  return (
    <>
      <Row gutter={16} className="pd-bottom">
        <Col lg={16}>
          <GutterRow style={{ minHeight: '220px' }}>
            <span>
              <span className="description">Chủ sở hữu:&nbsp;</span>
              <p>{_get(data, 'owner', '')}</p>
            </span>
            <span>
              <span className="description">Nhà thầu chính:&nbsp;</span>
              <p style={{ whiteSpace: 'pre-wrap' }}>
                {_get(data, 'nha_thau_chinh', '')}
              </p>
            </span>
            {_get(data, 'nha_thau_phu', '') && (
              <span>
                <span className="description">Nhà thầu phụ:&nbsp;</span>
                <p style={{ whiteSpace: 'pre-wrap' }}>
                  {_get(data, 'nha_thau_phu', '')}
                </p>
              </span>
            )}
          </GutterRow>
        </Col>
        <Col
          lg={8}
          style={{
            justifyContent: 'center',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <img
            src={_get(data, 'image') || logo}
            width={220}
            height={220}
            alt=""
            className="vnk-logo"
          />
        </Col>
      </Row>
      <Row gutter={16} className="pd-bottom">
        <Col lg={8}>
          <GutterRow>
            <span className="description">Số hiệu dự án:&nbsp;</span>
            <span>{_get(data, 'code', '')}</span>
            <div>
              <span className="description">Chi tiết trạng thái:&nbsp;</span>
              <span>{_get(data, 'status', 'Không có dữ liệu')}</span>
            </div>
          </GutterRow>
        </Col>
        <Col lg={8}>
          <GutterRow>
            <span className="description">Giá trị:&nbsp;</span>
            <span>$ {_get(data, 'cost', '')}m</span>
            <span style={{ float: 'right' }}>
              <span className="description">Số sàn:&nbsp;</span>
              <span>{_get(data, 'floor_count', '')}</span>
            </span>
            <div>
              <span className="description">Diện tích:&nbsp;</span>
              <span>{_get(data, 'floor_area', '')} m2</span>
            </div>
          </GutterRow>
        </Col>
        <Col lg={8}>
          <GutterRow>
            <span className="description">Khởi công:&nbsp;</span>
            <span>{moment(_get(data, 'start', '')).format('DD/MM/YYYY')}</span>
            <div>
              <span className="description">Hoàn công:&nbsp;</span>
              <span>
                {moment(_get(data, 'finish', '')).format('DD/MM/YYYY')}
              </span>
            </div>
          </GutterRow>
        </Col>
      </Row>
      <Row gutter={16} className="pd-bottom">
        <Col lg={8}>
          <GutterRow>
            <span className="description">Quốc gia:&nbsp;</span>
            <span>Việt Nam</span>
          </GutterRow>
        </Col>
        <Col lg={8}>
          <GutterRow>
            <span className="description">Tỉnh thành:&nbsp;</span>
            <span>{_get(data, 'city', '')}</span>
          </GutterRow>
        </Col>
        <Col lg={8}>
          <GutterRow>
            <span className="description">Quận huyện:&nbsp;</span>
            <span>{_get(data, 'district', '')}</span>
          </GutterRow>
        </Col>
      </Row>
      <Row gutter={16} className="pd-bottom">
        {_get(data, 'address', '') && (
          <Col lg={24}>
            <GutterRow>
              <span className="description">Địa chỉ:&nbsp;</span>
              <span>{_get(data, 'address', '')}</span>
            </GutterRow>
          </Col>
        )}
      </Row>
      <Row gutter={16} className="pd-bottom">
        {_get(data, 'version', '') && (
          <Col lg={12}>
            <GutterRow>
              <span className="description">Phiên bản:&nbsp;</span>
              <span>{_get(data, 'version', '')}</span>
            </GutterRow>
          </Col>
        )}
        {_get(data, 'version_description', '') && (
          <Col lg={12}>
            <GutterRow>
              <span className="description">Mô tả phiên bản:&nbsp;</span>
              <span>{_get(data, 'version_description', '')}</span>
            </GutterRow>
          </Col>
        )}
      </Row>
      {_get(data, 'note', '') && (
        <Row gutter={16} className="pd-bottom">
          <Col lg={24}>
            <GutterRow>
              <p className="description">Ghi chú:</p>
              <span style={{ whiteSpace: 'pre-wrap' }}>
                {_get(data, 'note', '')}
              </span>
            </GutterRow>
          </Col>
        </Row>
      )}
    </>
  );
}

DetailsWeb.propTypes = {
  data: PropTypes.any,
};

export default DetailsWeb;
