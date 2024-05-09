/* eslint-disable no-nested-ternary */
/* eslint-disable indent */
/* eslint-disable radix */
import React from 'react';
import { FormattedMessage, injectIntl, intlShape } from 'react-intl';
import PropTypes from 'prop-types';
import { Row, Col } from 'antd';
import styled from 'styled-components';
import moment from 'moment';
import { get as _get } from 'lodash';

import logo from '../../../assets/images/logo/my-project.png';
import messages from './messages';

const GutterRow = styled.section`
  padding: 20px;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
`;

function DetailsWeb({ data, intl }) {
  console.log(data, '=============');
  const convertCost = labelValue =>
    Math.abs(Number(labelValue)) >= 1.0e3
      ? `${Math.abs(Number(labelValue)) / 1.0e3} ${intl.formatMessage({
          ...messages.myProjFollowCostB,
        })}`
      : `${Number(labelValue)} ${intl.formatMessage({
          ...messages.myProjFollowCostM,
        })}`;
  return (
    <>
      <Row gutter={16} className="pd-bottom">
        <Col lg={16}>
          <GutterRow style={{ minHeight: '220px' }}>
            <span>
              <span className="description">
                <FormattedMessage {...messages.myDetailWebOwner} />
                &nbsp;
              </span>
              <p>{_get(data, 'owner', '')}</p>
            </span>
            <span>
              <span className="description">
                <FormattedMessage {...messages.myDetailWebContractor} />
                &nbsp;
              </span>
              <p style={{ whiteSpace: 'pre-wrap' }}>
                {_get(data, 'nha_thau_chinh', '')}
              </p>
            </span>
            {_get(data, 'nha_thau_phu', '') && (
              <span>
                <span className="description">
                  <FormattedMessage {...messages.myDetailWebSubContractor} />
                  &nbsp;
                </span>
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
            <span className="description">
              <FormattedMessage {...messages.myDetailWebProjNum} />
              &nbsp;
            </span>
            <span>{_get(data, 'code', '')}</span>
            <div>
              <span className="description">
                <FormattedMessage {...messages.myDetailWebStatus} />
                &nbsp;
              </span>
              <span>{_get(data, 'status', 'Không có dữ liệu')}</span>
            </div>
          </GutterRow>
        </Col>
        <Col lg={8}>
          <GutterRow>
            <span className="description">
              <FormattedMessage {...messages.myDetailWebValue} />
              &nbsp;
            </span>
            <span>{convertCost(_get(data, 'cost', ''))}</span>
            <div>
              <span className="description">
                <FormattedMessage {...messages.myDetailWebCapital} />
                &nbsp;
              </span>
              <span>{_get(data, 'du_an_von', '')}</span>
            </div>
            <span style={{ float: 'right' }}>
              <span className="description">
                <FormattedMessage {...messages.myDetailWebFloorNum} />
                &nbsp;
              </span>
              <span>{_get(data, 'floor_count', '')}</span>
            </span>
            <div>
              <span className="description">
                <FormattedMessage {...messages.myDetailWebArea} />
                &nbsp;
              </span>
              <span>{_get(data, 'floor_area', '')} m2</span>
            </div>
          </GutterRow>
        </Col>
        <Col lg={8}>
          <GutterRow>
            <span className="description">
              <FormattedMessage {...messages.myDetailWebStart} />
              &nbsp;
            </span>
            <span>{moment(_get(data, 'start', '')).format('MM/YYYY')}</span>
            <div>
              <span className="description">
                <FormattedMessage {...messages.myDetailWebComplete} />
                &nbsp;
              </span>
              <span>{moment(_get(data, 'finish', '')).format('MM/YYYY')}</span>
            </div>
           
          </GutterRow>
        </Col>
      </Row>
      <Row gutter={16} className="pd-bottom">
        <Col lg={8}>
          <GutterRow>
            <span className="description">
              <FormattedMessage {...messages.myDetailWebNation} />
              &nbsp;
            </span>
            <span>
              <FormattedMessage {...messages.myDetailWebVietNam} />
            </span>
          </GutterRow>
        </Col>
        <Col lg={8}>
          <GutterRow>
            <span className="description">
              <FormattedMessage {...messages.myDetailWebProvince} />
              &nbsp;
            </span>
            <span>{_get(data, 'city', '')}</span>
          </GutterRow>
        </Col>
        <Col lg={8}>
          <GutterRow>
            <span className="description">
              <FormattedMessage {...messages.myDetailWebDistrict} />
              &nbsp;
            </span>
            <span>{_get(data, 'district', '')}</span>
          </GutterRow>
        </Col>
      </Row>
      <Row gutter={16} className="pd-bottom">
        {_get(data, 'address', '') && (
          <Col lg={24}>
            <GutterRow>
              <span className="description">
                <FormattedMessage {...messages.myDetailWebAddress} />
                &nbsp;
              </span>
              <span>{_get(data, 'address', '')}</span>
            </GutterRow>
          </Col>
        )}
      </Row>
      <Row gutter={16} className="pd-bottom">
        {_get(data, 'stage', '') && (
          <Col lg={24}>
            <GutterRow>
              <span className="description">
                <FormattedMessage {...messages.myDetailWebProjectPhase} />
                &nbsp;
              </span>
              <span>{_get(data, 'stage', '')}</span>
            </GutterRow>
          </Col>
        )}
      </Row>
      <Row gutter={16} className="pd-bottom">
        {_get(data, 'version', '') && (
          <Col lg={12}>
            <GutterRow>
              <span className="description">
                <FormattedMessage {...messages.myDetailWebVersion} />
                &nbsp;
              </span>
              <span>{_get(data, 'version', '')}</span>
            </GutterRow>
          </Col>
        )}
        {_get(data, 'version_description', '') && (
          <Col lg={12}>
            <GutterRow>
              <span className="description">
                <FormattedMessage {...messages.myDetailWebVersionDescribe} />
                &nbsp;
              </span>
              <span>{_get(data, 'version_description', '')}</span>
            </GutterRow>
          </Col>
        )}
      </Row>
      {_get(data, 'note', '') && (
        <Row gutter={16} className="pd-bottom">
          <Col lg={24}>
            <GutterRow>
              <p className="description">
                <FormattedMessage {...messages.myDetailWebNote} />
              </p>
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
  intl: intlShape.Required,
};

export default injectIntl(DetailsWeb);
