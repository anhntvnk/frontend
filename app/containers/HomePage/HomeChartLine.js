import React from 'react';
import ReactApexChart from 'react-apexcharts';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

const HomeChartLine = () => {
  const chartOptions = {
    chart: {
      type: 'bar',
      height: 450,
      offsetX: -10,
    },
    plotOptions: {
      bar: {
        columnWidth: '50%',
      },
    },
    title: {
      align: 'center',
      style: {
        fontSize: '16px',
        fontWeight: 'bold',
        color: '#fff',
      },
    },
    xaxis: {
      categories: [
        'T12',
        'T01',
        'T02',
        'T03',
        'T04',
        'T05',
        'T06',
        'T07',
        'T08',
        'T09',
        'T10',
        'T11',
      ],
      labels: {
        style: {
          colors: '#fff', // Đặt màu chữ cho nhãn trục x
        },
      },
    },
    yaxis: {
      title: {
        text: '',
      },
      labels: {
        style: {
          colors: '#fff', // Đặt màu chữ cho nhãn trục x
        },
      },
    },
    colors: ['#008FFB', '#FEB019', '#00E396'],
    legend: {
      position: 'bottom',
      horizontalAlign: 'center',
      labels: {
        colors: '#fff', // Đặt màu chữ cho legend
        useSeriesColors: false, // Nếu muốn dùng màu này thay vì màu series
      },
    },
    grid: {
      show: false,
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      width: [0, 2, 2],
    },
    tooltip: {
      shared: true,
      intersect: false,
    },
  };

  const chartSeries = [
    {
      name: 'Hà Nội',
      type: 'column',
      data: [80, 90, 100, 120, 60, 70, 80, 90, 100, 110, 120, 130],
    },
    {
      name: 'Hải Phòng',
      type: 'line',
      data: [40, 50, 60, 70, 30, 40, 50, 60, 70, 80, 90, 100],
    },
    {
      name: 'Thành phố Hồ Chí Minh',
      type: 'line',
      data: [20, 30, 40, 50, 10, 20, 30, 40, 50, 60, 70, 80],
    },
  ];

  return (
    <div>
      <div className="flex justify-between items-center flex-wrap gap-y-2">
        <h2 className="text-[#fff] font-[700] text-[13px] uppercase">
          <FormattedMessage {...messages.homeChartLineTitle} />
        </h2>
        <div className="flex flex-wrap gap-[8px] text-[10px] md:text-[12px]">
          <span className="bg-[#2D3341] text-[#88AFFF] px-2 md:px-[12px] py-[2px] rounded-[4px] cursor-pointer">
            <FormattedMessage {...messages.homeChartLineToday} />
          </span>
          <span className="bg-[#2D3341] text-[#88AFFF] px-2 md:px-[12px] py-[2px] rounded-[4px] cursor-pointer">
            <FormattedMessage {...messages.homeChartLineWeek} />
          </span>
          <span className="bg-[#2D3341] text-[#88AFFF] px-2 md:px-[12px] py-[2px] rounded-[4px] cursor-pointer">
            <FormattedMessage {...messages.homeChartLineMonth} />
          </span>
          <span className="bg-[#2D3341] text-[#00DAFF] px-2 md:px-[12px] py-[2px] rounded-[4px] cursor-pointer">
            <FormattedMessage {...messages.homeChartLineYear} />
          </span>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 text-[#fff] [&>div]:p-[10px_15px] border-y border-[#32383e] border-dashed text-center mt-[12px] bg-[#25282c]">
        <div className="border-r border-[#32383e] border-dashed border-b md:border-b-0">
          <h3 className="title-heading text-[#fff]">
            <span className="text-[#FF6060]">966</span>{' '}
            <FormattedMessage {...messages.homeChartLineCurrencyBillion} />
          </h3>
          <p className="text-[12px] lg:text-[14px] mb-0 text-[#868897]">
            <FormattedMessage {...messages.homeChartLineOrders} />
          </p>
        </div>
        <div className="md:border-r border-[#32383e] border-dashed border-b md:border-b-0">
          <h3 className="title-heading text-[#fff]">266</h3>
          <p className="text-[12px] lg:text-[14px] mb-0 text-[#868897]">
            <FormattedMessage {...messages.homeChartLineNewlyStarted} />
          </p>
        </div>
        <div className="border-r border-[#32383e] border-dashed">
          <h3 className="title-heading text-[#16C2FF]">598</h3>
          <p className="text-[12px] lg:text-[14px] mb-0 text-[#868897]">
            <FormattedMessage {...messages.homeChartLineCompleted} />
          </p>
        </div>
        <div>
          <h3 className="title-heading text-[#6ADA7D]">19,26%</h3>
          <p className="text-[12px] lg:text-[14px] mb-0 text-[#868897]">
            <FormattedMessage {...messages.homeChartLineWon} />
          </p>
        </div>
      </div>
      <div className="md:w-full w-[calc(100%+20px)]">
        <ReactApexChart
          options={chartOptions}
          series={chartSeries}
          type="bar"
          height={350}
        />
      </div>
    </div>
  );
};

export default HomeChartLine;
