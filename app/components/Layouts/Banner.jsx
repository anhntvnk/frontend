import React from 'react';
import QueueAnim from 'rc-queue-anim';
import TweenOne from 'rc-tween-one';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import BannerAnim, { Element } from 'rc-banner-anim';
import styled from 'styled-components';
import routes from '../../constants/routes';
import logo from '../../assets/images/logo/logo@2x.png';
import { isLoggedIn } from '../../../services/auth';
import messages from './messages';

const { BgElement } = Element;

const getAnimConfig = e => {
  switch (e.key) {
    case 'img':
      return { opacity: 0, type: 'from' };
    case 'left':
    case 'right':
      return { scaleY: 0, opacity: 0, type: 'from' };
    default:
      return { scaleX: 0, opacity: 0, type: 'from' };
  }
};

function TweenOneYG(props) {
  const r = Math.round(Math.random() * 2) - 1 ? 1 : -1;
  return (
    <TweenOne
      component="g"
      animation={{
        y: r * (Math.random() * 20 + 10),
        yoyo: true,
        repeat: -1,
        duration: Math.random() * 2000 + 2000,
        ease: 'easeInOutSine',
      }}
    >
      {props.children}
    </TweenOne>
  );
}
export default function Banner({ isMobile }) {
  return (
    <BannerAnim className="banner">
      <Element
        key="0"
        followParallax={{
          delay: 1000,
          data: [
            { id: 'r-1', value: 20, type: 'x' },
            { id: 'p-1', value: -20, type: 'x' },
            { id: 'p-2', value: 30, type: 'x' },
            { id: 'c-1', value: -30, type: 'x' },
            { id: 'r-2', value: -10, type: 'x' },
            { id: 'c-2', value: 40, type: 'x' },
            { id: 'c-3', value: -30, type: 'x' },
          ],
        }}
      >
        <BgElement className="bg-wrapper" key="bg">
          <TweenOne
            component=""
            animation={{ opacity: 0, type: 'from', delay: 300 }}
            key="tween"
          >
            <svg
              width="100%"
              height="100%"
              viewBox={isMobile ? '0 0 500 760' : '0 0 1440 451'}
            >
              <g
                transform="translate(-30, 0)"
                id="Page-1"
                stroke="none"
                strokeWidth="1"
                fill="none"
                fillRule="evenodd"
              >
                <g id="Group-9" opacity="0.3">
                  <TweenOneYG>
                    <g id="r-1">
                      <rect
                        id="Rectangle-6"
                        fill="#FFFFFF"
                        transform="translate(41.000000, 169.000000) rotate(-27.000000) translate(-41.000000, -169.000000) "
                        x="11"
                        y="139"
                        width="60"
                        height="60"
                        rx="2"
                      />
                    </g>
                  </TweenOneYG>
                  <TweenOneYG>
                    <g id="p-1">
                      <polygon
                        id="Polygon"
                        stroke="#FFFFFF"
                        strokeWidth="2"
                        transform="translate(139.000000, 17.500000) rotate(45.000000) translate(-139.000000, -17.500000) "
                        points="139 77 152 100 126 100"
                      />
                    </g>
                  </TweenOneYG>
                  <TweenOneYG>
                    <g id="p-2">
                      <polygon
                        id="Polygon"
                        stroke="#FFFFFF"
                        transform="translate(180.000000, 446.000000) rotate(-67.000000) translate(-180.000000, -446.000000) "
                        points="180 439 188 453 172 453"
                      />
                    </g>
                  </TweenOneYG>
                  <TweenOneYG>
                    <g id="c-1">
                      <circle
                        id="Oval"
                        stroke="#FFFFFF"
                        strokeWidth="3"
                        fill="#FFFFFF"
                        cx="256"
                        cy="357"
                        r="10"
                      />
                    </g>
                  </TweenOneYG>
                </g>
                <g
                  id="Group-8"
                  transform="translate(1219.000000, 69.000000)"
                  stroke="#FFFFFF"
                >
                  <TweenOneYG>
                    <g id="r-2">
                      <rect
                        id="Rectangle-6"
                        strokeWidth="2"
                        opacity="0.3"
                        transform="translate(47.000000, 343.000000) rotate(-45.000000) translate(-47.000000, -343.000000) "
                        x="15"
                        y="311"
                        width="64"
                        height="64"
                        rx="2"
                      />
                    </g>
                  </TweenOneYG>
                  <TweenOneYG>
                    <g id="c-2">
                      <circle
                        id="Oval"
                        strokeWidth="3"
                        fill="#FFFFFF"
                        opacity="0.4"
                        cx="155"
                        cy="13"
                        r="13"
                      />
                    </g>
                  </TweenOneYG>
                  <TweenOneYG>
                    <g id="c-3">
                      <circle
                        id="Oval"
                        strokeWidth="2"
                        opacity="0.4"
                        cx="211"
                        cy="225"
                        r="8"
                      />
                    </g>
                  </TweenOneYG>
                </g>
              </g>
            </svg>
          </TweenOne>
        </BgElement>
        <QueueAnim className="text-wrapper" type="bottom">
          <QueueAnim
            animConfig={getAnimConfig}
            delay={100}
            interval={80}
            className="logo-wrapper"
            key="logo"
          >
            {/* <i key="left" className="vertical left" />
            <i key="top" className="horizontal top" />
            <i key="right" className="vertical right" />
            <i key="bottom" className="horizontal bottom" /> */}
            <img key="img" alt="logo" src={logo} />
          </QueueAnim>
          <Introduce>
            <p style={{ fontWeight: 600 }}>
              <FormattedMessage {...messages.bannerTitle} />
            </p>
            <p>
              <FormattedMessage
                {...messages.bannerMessage}
                values={{ myProject: <b>My Project</b> }}
              />
            </p>
          </Introduce>
          {!isLoggedIn() && (
            <div className="button-wrapper" key="button">
              <Link
                component="a"
                toHash={false}
                to={routes.REGISTER}
                className="btn-temp home-button"
              >
                <FormattedMessage {...messages.register} />
              </Link>
              {isMobile && (
                <Link className="btn-editor home-button" to="/login">
                  <FormattedMessage {...messages.signIn} />
                </Link>
              )}
            </div>
          )}
        </QueueAnim>
      </Element>
    </BannerAnim>
  );
}

const Introduce = styled.div`
  // background: #b7252c;
  font-family: -apple-system, BlinkMacSystemFont, segoe ui, Roboto,
    helvetica neue, Arial, noto sans, sans-serif, apple color emoji,
    segoe ui emoji, segoe ui symbol, noto color emoji;
  font-size: 16px;
  line-height: 32px;
  font-weight: 400;
  max-width: 557px;
  margin: 80px auto 64px;
  @media screen and (max-width: 767px) {
    margin: 15px auto 50px;
  }
`;
