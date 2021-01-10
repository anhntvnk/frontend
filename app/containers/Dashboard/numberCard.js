import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'antd';
import { Link } from 'react-router-dom';
import CountUp from 'react-countup';
import iconMap from '../../utils/iconMap';
import './numberCard.less';

function NumberCard({ icon, color, title, number, countUp, url }) {
  return (
    <Link to={url}>
      <Card className="numberCard" bordered={false} bodyStyle={{ padding: 10 }}>
        <span className="iconWarp" style={{ color }}>
          {iconMap[icon]}
        </span>
        <div className="content">
          <p className="title">{title || 'No Title'}</p>
          {number && (
            <p className="number">
              <CountUp
                start={0}
                end={number}
                duration={2.75}
                useEasing
                useGrouping
                separator=","
                {...countUp || {}}
              />
            </p>
          )}
        </div>
      </Card>
    </Link>
  );
}

NumberCard.propTypes = {
  icon: PropTypes.string,
  color: PropTypes.string,
  title: PropTypes.string,
  url: PropTypes.string,
  number: PropTypes.number,
  countUp: PropTypes.object,
};

export default NumberCard;