import React, { useState } from 'react';
import Chart from 'react-apexcharts';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

const HomeChart = () => {
  const [state] = useState({
    series: [44, 55, 41, 17, 15],
    options: {
      chart: {
        type: 'donut',
      },
      labels: ['Hà Nội', 'Bắc Ninh', 'Sơn La', 'Huế', 'TP. Hồ Chí Minh'],
      legend: {
        position: 'bottom',
        horizontalAlign: 'center', // căn giữa
        fontSize: '14px',
        markers: {
          width: 12,
          height: 12,
          radius: 12,
        },
        itemMargin: {
          horizontal: 10,
          vertical: 8, // tạo khoảng cách dọc giữa các dòng legend
        },
      },
      stroke: {
        show: false,
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 250,
            },
            legend: {
              position: 'bottom',
            },
          },
        },
      ],
    },
  });

  return (
    <div className="w-full">
      <div className="flex justify-between items-center border-b border-[#32383e] mb-[12px] py-[15px] px-[20px]">
        <h2 className="text-[#fff] text-[13px] font-[700] mb-[0px] uppercase">
          <FormattedMessage {...messages.homeChartTitle3Regions} />
        </h2>
      </div>
      <Chart
        className="custom-dark-chart-donut"
        options={state.options}
        series={state.series}
        type="donut"
        height={320}
      />
    </div>
  );
};

export default HomeChart;
