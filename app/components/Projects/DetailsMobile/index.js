import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'antd';
import styled from 'styled-components';
import moment from 'moment';
import { get as _get} from 'lodash';
import logo from '../../../assets/images/logo/my-project.png';

const BoxDetail = styled.section`
  dispay: block;
  padding: 20px;
`;

const ItemRight = styled.span`
  float: right;
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
        <ProjectName>{_get(data, 'name', '')}</ProjectName>
      </Col>
      <Col
        className="group-item"
        style={{ marginRight: 'auto', marginLeft: 'auto' }}
        span={22}
      >
        <BoxDetail>
          <div style={{ marginBottom: '80px' }}>
            <span className="description">Ảnh đại diện:&nbsp;</span>
            <ItemRight>
              <img
                src={_get(data, 'image') || logo}
                width={100}
                alt=""
                className="vnk-logo"
              />
            </ItemRight>
          </div>
          <p>
            <span className="description">Cập nhật mới:&nbsp;</span>
            <ItemRight>
              {moment(_get(data, 'last_modified', '')).format('DD/MM/YYYY')}
            </ItemRight>
          </p>
          <p>
            <span className="description">Nhà thầu chính:&nbsp;</span>
            <ItemRight>
              {_get(data, 'nha_thau_chinh') || 'Không có dữ liệu'}
            </ItemRight>
          </p>
          <p>
            <span className="description">Nhà thầu phụ:&nbsp;</span>
            <ItemRight>
              {_get(data, 'nha_thau_phu', 'Không có dữ liệu') ||
                'Không có dữ liệu'}
            </ItemRight>
          </p>
          <p>
            <span className="description">Số hiệu dự án:&nbsp;</span>
            <ItemRight>{_get(data, 'code') || 'Không có dữ liệu'}</ItemRight>
          </p>
          <p>
            <span className="description">Giai đoạn:&nbsp;</span>
            <ItemRight>{_get(data, 'stage') || 'Không có dữ liệu'}</ItemRight>
          </p>
          <p>
            <span className="description">Giá trị:&nbsp;</span>
            <ItemRight>
              {`$ ${_get(data, 'cost', 'Không có dữ liệu')}m` ||
                'Không có dữ liệu'}
            </ItemRight>
          </p>
          <p>
            <span className="description">Số sàn:&nbsp;</span>
            <ItemRight>
              {_get(data, 'floor_count', 'Không có dữ liệu') ||
                'Không có dữ liệu'}
            </ItemRight>
          </p>
          <p>
            <span className="description">Diện tích:&nbsp;</span>
            <ItemRight>
              {`${_get(data, 'floor_area', 'Không có dữ liệu')}m` ||
                'Không có dữ liệu'}
            </ItemRight>
          </p>
          <p>
            <span className="description">Khởi công:&nbsp;</span>
            <ItemRight>
              {moment(_get(data, 'start', 'Không có dữ liệu')).format(
                'DD/MM/YYYY',
              ) || 'Không có dữ liệu'}
            </ItemRight>
          </p>
          <p>
            <span className="description">Hoàn công:&nbsp;</span>
            <ItemRight>
              {moment(_get(data, 'finish', 'Không có dữ liệu')).format(
                'DD/MM/YYYY',
              ) || 'Không có dữ liệu'}
            </ItemRight>
          </p>
          <p>
            <span className="description">Tỉnh thành:&nbsp;</span>
            <ItemRight>
              {_get(data, 'city', 'Không có dữ liệu') || 'Không có dữ liệu'}
            </ItemRight>
          </p>
          <p>
            <span className="description">Quận huyện:&nbsp;</span>
            <ItemRight>
              {_get(data, '', 'Không có dữ liệu') || 'Không có dữ liệu'}
            </ItemRight>
          </p>
          <p>
            <span className="description">Địa chỉ:&nbsp;</span>
            <ItemRight>
              {_get(data, 'address', 'Không có dữ liệu') || 'Không có dữ liệu'}
            </ItemRight>
          </p>
          <p>
            <span className="description">Phiên bản:&nbsp;</span>
            <ItemRight>
              {_get(data, 'version', 'Không có dữ liệu') || 'Không có dữ liệu'}
            </ItemRight>
          </p>
          <p>
            <span className="description">Mô tả phiên bản:&nbsp;</span>
            <ItemRight>
              {_get(data, 'version_description', 'Không có dữ liệu') ||
                'Không có dữ liệu'}
            </ItemRight>
          </p>
          <p>
            <span className="description">Ghi chú:&nbsp;</span>
            <ItemRight>
              {_get(data, 'note', 'Không có dữ liệu') || 'Không có dữ liệu'}
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
