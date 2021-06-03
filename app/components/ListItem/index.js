/* eslint-disable no-param-reassign */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Row, Col, List, Card, Button } from 'antd';
import moment from 'moment';
import {
  DollarOutlined,
  LikeOutlined,
  CalendarTwoTone,
  EnvironmentOutlined,
  PlusOutlined,
} from '@ant-design/icons';
import SearchCompany from 'components/SearchCompany';
import styled from 'styled-components';
import H2 from '../H2';
import './styles.less';
import logo from '../../assets/images/logo/my-project.png';

const CardAction = styled.span`
  display: inline-flex;
  align-items: center;
`;

const { Meta } = Card;

export function ListItem({ data }) {
  const [projectList, setProjectList] = useState(data);

  const onFollow = () => {
    alert('vvvvv');
  };

  const onAddProject = value => console.log(value);

  const cleanText = str => {
    if (typeof str === 'undefined') return str;
    str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, 'a');
    str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, 'e');
    str = str.replace(/ì|í|ị|ỉ|ĩ/g, 'i');
    str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, 'o');
    str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, 'u');
    str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, 'y');
    str = str.replace(/đ/g, 'd');
    str = str.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, 'A');
    str = str.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, 'E');
    str = str.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, 'I');
    str = str.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, 'O');
    str = str.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, 'U');
    str = str.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, 'Y');
    str = str.replace(/Đ/g, 'D');
    return str.toLowerCase().trim();
  };

  const search = advSearch => {
    const { owner: filterOwner, citys: filterCity } = advSearch;
    const listData = [];

    for (let i = 0; i < data.length; i += 1) {
      const item = data[i];

      let addToList = true;
      const owner = item.owner ? cleanText(item.owner) : '';

      if (
        typeof filterOwner !== 'undefined' &&
        owner.indexOf(cleanText(filterOwner)) === -1
      ) {
        addToList = false;
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

      if (addToList) listData.push(item);
    }

    setProjectList(listData);
  };

  const onResetFields = () => {
    setProjectList(data);
  };
  return (
    <Row className="list-content">
      <Col lg={24}>
        <SearchCompany onsearch={search} onResetFields={onResetFields} />
        <Row className="top-bar">
          <Col lg={12} className="list-title">
            <H2>Danh Sách Dự Án</H2>
          </Col>
          <Col lg={12} className="btn-add-project">
            <Button
              type="primary"
              icon={<PlusOutlined />}
              onClick={() => onAddProject()}
            >
              Thêm Dự Án
            </Button>
          </Col>
        </Row>
        <Row className="list-item">
          <Col>
            <List
              grid={{
                gutter: 16,
                xs: 1,
                sm: 2,
                md: 3,
                lg: 3,
                xl: 3,
                xxl: 3,
              }}
              itemLayout="vertical"
              size="large"
              pagination={{
                showSizeChanger: true,
                defaultPageSize: 9,
                pageSizeOptions: [9, 20, 50, 100],
                responsive: true,
              }}
              dataSource={projectList}
              renderItem={(item, index) => (
                <List.Item key={index}>
                  <Card
                    bodyStyle={{ paddingLeft: '15px' }}
                    cover={
                      <img
                        height={300}
                        alt="example"
                        src={item.image ? item.image : logo}
                      />
                    }
                    actions={[
                      <CardAction>
                        <CalendarTwoTone />
                        &nbsp;{moment(item.start).format('DD/MM/YYYY')}
                      </CardAction>,
                      <CardAction>
                        <DollarOutlined />
                        &nbsp;{item.cost}
                      </CardAction>,
                      <CardAction onClick={onFollow}>
                        Theo dõi &nbsp;
                        <LikeOutlined />
                      </CardAction>,
                    ]}
                  >
                    <Meta
                      title={item.name}
                      description={
                        <div>
                          <EnvironmentOutlined /> {item.address}
                        </div>
                      }
                    />
                  </Card>
                </List.Item>
              )}
            />
          </Col>
        </Row>
      </Col>
    </Row>
  );
}

ListItem.propTypes = {
  data: PropTypes.array,
};

export default ListItem;
