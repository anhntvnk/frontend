import React from 'react';
import { Table } from 'antd';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import ImgProject1 from '../../assets/images/projects/project1.jpg';
import ImgProject2 from '../../assets/images/projects/project2.jpg';
import ImgProject3 from '../../assets/images/projects/project3.jpg';
import ImgProject4 from '../../assets/images/projects/project4.jpg';
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
      'Hà Nội - Tổ hợp căn hộ cao cấp Moonlight 2 – KĐT Anlac Green Symphony',
    image: ImgProject1,
    mainContractor: 'Công ty Cổ phần Tập đoàn Đầu tư An Lạc',
    startDate: '22/09/2025',
  },
  {
    key: '2',
    project: 'Hà Nội - Dự án xây dựng Trường Tiểu học tại xã Gia Lâm',
    image: ImgProject2,
    mainContractor: 'Tổng thầu EPC: Công ty CP Xây dựng Hợp Lực',
    startDate: '11/09/2025',
  },
  {
    key: '3',
    project: 'Hà Nội - Nhà xưởng Công ty TNHH Mây Tre Hà Linh',
    image: ImgProject3,
    mainContractor: 'Công ty Cổ phần Đầu tư và Xây dựng Teccon',
    startDate: '11/09/2025',
  },
  {
    key: '4',
    project:
      'Hải Phòng - Nhà máy Công ty TNHH Khoa học & Công nghệ Senci (Việt Nam)',
    image: ImgProject4,
    mainContractor: 'Công ty TNHH Xây dựng Việt Panel',
    startDate: '29/08/2025',
  },
];

const NewProjectsTable = () => (
  <>
    <div className="flex justify-between items-center border-b border-[#32383e] mb-[12px] py-[15px] px-[20px]">
      <h2 className="text-[#fff] text-[13px] font-[700] mb-[0px] uppercase">
        <FormattedMessage {...messages.newProjectTitle} />
      </h2>
    </div>
    <Table
      className="custom-dark-table min-w-[600px]"
      columns={columns}
      dataSource={data}
      showHeader={false}
      size="small"
      pagination={{
        pageSize: 4,
        showSizeChanger: false,
        showQuickJumper: true,
      }}
      rowKey="key"
    />
    <Link
      to="#ddddd"
      className="text-[#00DAFF] float-left -mt-[20px] mb-[20px] ml-[20px]"
    >
      <FormattedMessage {...messages.mypHomeCoutViewall} />
    </Link>
  </>
);

export default NewProjectsTable;
