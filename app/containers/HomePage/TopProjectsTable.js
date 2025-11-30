import React from 'react';
import { Table } from 'antd';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import ImgProject5 from '../../assets/images/projects/project5.jpg';
import ImgProject6 from '../../assets/images/projects/project6.jpg';
import ImgProject7 from '../../assets/images/projects/project7.jpg';
import messages from './messages';

const columns = [
  {
    title: 'Dự án',
    dataIndex: 'project',
    key: 'project',
    render: (text, record) => (
      <div>
        <img
          src={record.image}
          alt="Project"
          style={{
            width: '70px',
            marginRight: '10px',
            float: 'left',
            borderRadius: '4px',
          }}
        />
        <span>{text}</span>
      </div>
    ),
  },
  {
    title: 'Nhà thầu chính',
    dataIndex: 'mainContractor',
    key: 'mainContractor',
  },
  {
    title: 'Khởi công',
    dataIndex: 'startDate',
    key: 'startDate',
    render: date => (
      <div>
        <span className="whitespace-nowrap">{date}</span>
      </div>
    ),
  },
];

const data = [
  {
    key: '1',
    project:
      'HÀ NỘI - TỔ HỢP CĂN HỘ CAO CẤP MOONLIGHT 2 – KĐT ANLAC GREEN SYMPHONY',
    image: ImgProject5,
    mainContractor: 'Công Ty Cổ Phần Môi Trường Thuận Thành',
    startDate: '26/9/2025',
  },
  {
    key: '2',
    project:
      'Nghệ An - Dự án xây dựng Công Ty TNHH Giày Thể Thao Công Nghệ Cao Hiệp Khôn',
    image: ImgProject6,
    mainContractor: 'Công Ty Cổ Phần Đầu Tư Xây Dựng CPT',
    startDate: '27/08/2025',
  },
  {
    key: '3',
    project: 'Ninh Bình - Dự án Nhà Máy Innovative Audio Việt Nam',
    image: ImgProject7,
    mainContractor: 'Công Ty TNHH Xây Dựng Naga - Nagacons',
    startDate: '28/08/2025',
  },
  {
    key: '4',
    project: 'Tây Ninh - Nhà xưởng sản xuất sợi Dehe Việt Nam',
    image: ImgProject5,
    mainContractor: 'Công Ty CP AZB',
    startDate: '27/08/2025',
  },
];

const TopProjectsTable = () => (
  <>
    <div className="flex justify-between items-center border-b border-[#32383e] mb-[12px] py-[15px] px-[20px]">
      <h2 className="text-[#fff] text-[13px] font-[700] mb-[0px] uppercase">
        <FormattedMessage {...messages.topProjectsTitle} />
      </h2>
    </div>
    <div className="overflow-x-auto overflow-y-hidden max-w-full">
      <Table
        columns={columns}
        dataSource={data}
        showHeader={false}
        className="custom-dark-table min-w-[600px]"
        size="small"
        pagination={{
          pageSize: 4,
          showSizeChanger: false,
          showQuickJumper: true,
        }}
        rowKey="key"
      />
    </div>
    <Link
      to="#d"
      className="text-[#00DAFF] float-left -mt-[20px] mb-[20px] ml-[20px]"
    >
      <FormattedMessage {...messages.mypHomeCoutViewall} />
    </Link>
  </>
);

export default TopProjectsTable;
