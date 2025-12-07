import React from 'react';
import { FormattedMessage } from 'react-intl';
import { VectorMap } from '@react-jvectormap/core';
import { worldMill } from '@react-jvectormap/world';
import { Progress } from 'antd';
import ButtonDark from '../../components/ButtonDark';
import messages from './messages';

// eslint-disable-next-line react/prop-types
const CountryMap = ({ mapColor }) => (
  <>
    <div className="flex justify-between items-center border-b border-[#32383e] pb-[12px] mb-[12px] p-[20px]">
      <h2 className="text-[#fff] text-[13px] font-[700] mb-[0px] uppercase">
        <FormattedMessage {...messages.countryMapTitle} />
      </h2>
      <ButtonDark type="primary" size="sm">
        <FormattedMessage {...messages.countryMapExportReport} />
      </ButtonDark>
    </div>
    <div
      id="mapOne"
      className="mapOne map-btn p-[20px] w-full"
      style={{ height: '212px' }}
    >
      <VectorMap
        map={worldMill}
        backgroundColor="transparent"
        markerStyle={{
          initial: {
            fill: '#465FFF',
            r: 4,
          },
        }}
        markersSelectable
        markers={[
          {
            latLng: [21.0278, 105.8342],
            name: 'Việt Nam',
            style: { fill: '#465FFF', borderWidth: 1, borderColor: 'white' },
          },
          {
            latLng: [35.6762, 139.6503],
            name: 'Nhật Bản',
            style: { fill: '#49c271', borderWidth: 1, borderColor: 'white' },
          },
          {
            latLng: [39.9042, 116.4074],
            name: 'Trung Quốc',
            style: {
              fill: '#f7b84b',
              borderWidth: 1,
              borderColor: 'white',
              strokeOpacity: 0,
            },
          },
        ]}
        zoomOnScroll={false}
        zoomMax={12}
        zoomMin={1}
        zoomAnimate
        zoomStep={1.5}
        regionStyle={{
          initial: {
            fill: mapColor || '#D0D5DD',
            fillOpacity: 1,
            fontFamily: 'Outfit',
            stroke: 'none',
            strokeWidth: 0,
            strokeOpacity: 0,
          },
          hover: {
            fillOpacity: 0.7,
            cursor: 'pointer',
            fill: '#465fff',
            stroke: 'none',
          },
          selected: {
            fill: '#465FFF',
          },
          selectedHover: {},
        }}
        regionLabelStyle={{
          initial: {
            fill: '#35373e',
            fontWeight: 500,
            fontSize: '13px',
            stroke: 'none',
          },
        }}
      />
    </div>
    <div className="grid gap-[5px] mt-[30px] text-[#fff] px-5">
      <div className="flex justify-between items-center">
        <FormattedMessage {...messages.countryVietnam} />
        <span>75%</span>
      </div>
      <Progress percent={70} strokeColor="#465FFF" showInfo={false} />
      <div className="flex justify-between items-center">
        <FormattedMessage {...messages.countryJapan} />
        <span>50%</span>
      </div>
      <Progress percent={50} strokeColor="#49c271" showInfo={false} />
      <div className="flex justify-between items-center">
        <FormattedMessage {...messages.countryChina} />
        <span>35%</span>
      </div>
      <Progress percent={30} strokeColor="#f7b84b" showInfo={false} />
    </div>
  </>
);

export default CountryMap;
