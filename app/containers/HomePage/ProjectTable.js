import React from 'react';
import { Link } from 'react-router-dom';
import { Avatar, Table } from 'antd';
import { FormattedMessage } from 'react-intl';
import Avatar1 from '../../assets/images/projects/avatar1.jpg';
import Avatar2 from '../../assets/images/projects/avatar2.jpg';
import Avatar3 from '../../assets/images/projects/avatar3.jpg';
import Avatar4 from '../../assets/images/projects/avatar4.jpg';
import Avatar5 from '../../assets/images/projects/avatar5.jpg';
import Avatar6 from '../../assets/images/projects/avatar6.png';
import Avatar7 from '../../assets/images/projects/avatar7.png';
import messages from './messages';

const columns = [
  {
    title: 'TT',
    dataIndex: 'projectId',
    key: 'projectId',
    render: projectId => (
      <div>
        <span className="whitespace-nowrap text-[#00BCFF]">{projectId}</span>
      </div>
    ),
  },
  {
    title: <FormattedMessage {...messages.projectTableTheadDirector} />,
    dataIndex: 'director',
    key: 'director',
    render: (director, item) => (
      <div>
        <span className="whitespace-nowrap flex gap-2 items-center">
          <Avatar src={item.avatar} />
          {director}
        </span>
      </div>
    ),
  },
  {
    title: <FormattedMessage {...messages.projectTableTheadContractor} />,
    dataIndex: 'contractor',
    key: 'contractor',
  },
  {
    title: <FormattedMessage {...messages.projectTableTheadAddress} />,
    dataIndex: 'mainContractor',
    key: 'mainContractor',
  },
  {
    title: <FormattedMessage {...messages.projectTableTheadDate} />,
    dataIndex: 'date',
    width: 130,
    key: 'date',
    render: d => <span>{d}</span>,
  },
  {
    title: '',
    dataIndex: 'rating',
    key: 'rating',
    render: rating => (
      <p className="text-[9px] leading-[12px] whitespace-nowrap">
        <span className="text-[13px] font-[700]">{rating}</span>{' '}
        {Math.floor(Math.random() * 100)} vote
      </p>
    ),
  },
];

const data = [
  {
    key: '1',
    projectId: '8529',
    avatar: Avatar7,
    director: 'Mr Hồ Minh Sang',
    contractor: 'Công Ty Cổ Phần Đầu Tư Hưng Phước',
    mainContractor: 'Công Ty Cổ Phần Môi Trường Thuận Thành',
    date: '01/12/2025',
    rating: '5.0',
  },
  {
    key: '2',
    projectId: '8528',
    avatar: Avatar7,
    director: 'Mr Nguyễn Văn An',
    contractor: 'Công Ty Cổ Phần Ecoba Việt Nam',
    mainContractor: 'Công Ty Cổ Phần Tập Đoàn Đầu Tư An Lạc',
    date: '30/11/2025',
    rating: '4.5',
  },
  {
    key: '3',
    projectId: '8527',
    avatar: Avatar7,
    director: 'Mr Trần Văn Minh',
    contractor: 'Liên danh Công Ty Cổ Phần Bệnh Viện SISE Nha Trang',
    mainContractor: 'Công Ty Cổ Phần Kỹ Thuật - Xây Dựng Ngũ Thường',
    date: '26/9/2025',
    rating: '4.9',
  },
  {
    key: '4',
    projectId: '8526',
    avatar: Avatar6,
    director: 'Mrs Mai Thị Lan',
    contractor: 'Công Ty TNHH Bao Bì Wolpak Việt Nam',
    mainContractor: 'Công Ty Cổ Phần Đầu Tư Hưng Phước',
    date: '15/11/2025',
    rating: '4.3',
  },
  {
    key: '5',
    projectId: '8525',
    avatar: Avatar7,
    director: 'Mr Lê Văn Linh',
    contractor: 'Công Ty TNHH Đầu Tư & Phát Triển Bất Động Sản Vạn Phúc Điền',
    mainContractor: 'Công Ty Cổ Phần Tập Đoàn GDC',
    date: '27/12/2025',
    rating: '4.7',
  },
];

const ProjectTable = () => (
  <>
    <div className="flex justify-between items-center border-b border-[#32383e] mb-[12px] py-[15px] px-[20px]">
      <h2 className="text-[#fff] text-[13px] font-[700] mb-[0px] uppercase">
        <FormattedMessage {...messages.projectTableDomesticTitleUpper} />
      </h2>
    </div>
    <div className="overflow-x-auto overflow-y-hidden">
      <Table
        columns={columns}
        dataSource={data}
        size="small"
        className="custom-dark-table min-w-[700px]"
        rowKey="key"
      />
    </div>
    <Link
      to="#ddddd"
      className="text-[#00DAFF] float-left -mt-[20px] mb-[20px] ml-[20px]"
    >
      <FormattedMessage {...messages.mypHomeCoutViewall} />
    </Link>
  </>
);

export default ProjectTable;
