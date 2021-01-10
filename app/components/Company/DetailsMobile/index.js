import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'antd';
import styled from 'styled-components';
import moment from 'moment';
import _ from 'lodash';
import logo from '../../../assets/images/logo/my-project.png';

const BoxDetail = styled.section`
  dispay: block;
  padding: 20px;
`;

const ItemRight = styled.span`
  float: right;
  color: red;
  .manager {
    font-weight: bold;
  }
`;
const Contact = styled.span`
  float: right;
  color: blue;
`;

const ProjectName = styled.p`
  dispay: block;
  padding: 20px 20px 0 20px;
  font-weight: bold;
  color: #0063ff;
  text-transform: uppercase;
  font-size: 16px;
`;

function DetailsMobile({ data }) {
  return (
    <Row>
      <Col
        className="group-item"
        style={{ marginRight: 'auto', marginLeft: 'auto' }}
        span={22}
      >
        <ProjectName>{_.get(data, 'name', '')}</ProjectName>
      </Col>
      <Col
        className="group-item"
        style={{ marginRight: 'auto', marginLeft: 'auto' }}
        span={22}
      >
        <BoxDetail>
          <div style={{ marginBottom: '80px' }}>
            <span className="description">Ảnh đại diện:</span>
            <ItemRight>
              <img
                src={_.get(data, 'image') || logo}
                width={100}
                alt=""
                className="vnk-logo"
              />
            </ItemRight>
          </div>

          <p>
            <span className="description">Liên hệ:</span>
            <Contact>
              {_.get(data, 'nha_thau_chinh') || 'Không có dữ liệu'}
            </Contact>
          </p>
          <p>
            <span className="description">Ngày thành lập:</span>
            <ItemRight>{_.get(data, 'date') || 'Không có dữ liệu'}</ItemRight>
          </p>
          <p>
            <span className="description">Giám đốc:</span>
            <ItemRight>
              <span className="manager">
                {`${_.get(data, 'manager', 'Không có dữ liệu')}` ||
                  'Không có dữ liệu'}
              </span>
            </ItemRight>
          </p>
          <p>
            <span className="description">Địa chỉ VP:</span>
            <ItemRight>
              {_.get(data, 'office_address', '')} {_.get(data, 'district', '')}
            </ItemRight>
          </p>
          <p>
            <span className="description">Thành phố (Tỉnh):</span>
            <ItemRight>
              {_.get(data, 'city', 'Không có dữ liệu') || 'Không có dữ liệu'}
            </ItemRight>
          </p>
          <p>
            <span className="description">Trang Web:</span>
            <ItemRight>
              {_.get(data, '', 'website') || 'Không có dữ liệu'}
            </ItemRight>
          </p>
          <p>
            <span className="description">Số điện thoại:</span>
            <ItemRight>
              {_.get(data, 'phone', 'Không có dữ liệu') || 'Không có dữ liệu'}
            </ItemRight>
          </p>
          <p>
            <span className="description">Email:</span>
            <ItemRight>
              {_.get(data, 'email', 'Không có dữ liệu') || 'Không có dữ liệu'}
            </ItemRight>
          </p>
          <p>
            <span className="description">Cập nhật mới:</span>
            <ItemRight>
              {moment(_.get(data, 'latest_update', '')).format('DD/MM/YYYY')}
            </ItemRight>
          </p>
          <p>
            <span className="description">Ghi chú cá nhân:</span>
            <ItemRight>
              {_.get(data, 'note', 'Không có dữ liệu') || 'Không có dữ liệu'}
            </ItemRight>
          </p>
          <p>
            <span className="description">Dự án liên quan tới công ty:</span>
            <ItemRight>
              {_.get(data, 'description', 'Không có dữ liệu') ||
                'Không có dữ liệu'}
            </ItemRight>
          </p>
        </BoxDetail>
      </Col>
    </Row>
  );
}

DetailsMobile.propTypes = {
  data: PropTypes.any,
};

export default DetailsMobile;
