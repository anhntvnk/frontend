import React from 'react';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

const HomeCount = () => (
  <div className="bg-[#1b1d21] grid md:grid-cols-2 lg:grid-cols-4 text-[#878a99] gap-[20px] p-[20px] [&_span]:text-[12px] [&_h2_span]:text-[#868897] [&_span]:font-[400]">
    <div className="bg-[#212529] p-[20px] rounded-[4px]">
      <div className="flex justify-between text-[14px]">
        <p className="flex-1 mb-[0px] uppercase">
          <FormattedMessage {...messages.mypHomeCountTitle1} />
        </p>
        <span className="text-[#6ada7d] flex gap-1 items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941"
            />
          </svg>
          16.24%
        </span>
      </div>
      <h2 className="text-[#fff] text-[18px] lg:text-[20px] font-[700] mb-[0px]">
        266
      </h2>
      <div className="flex items-end justify-between">
        <Link href="#a" className="text-[#00BCFF]">
          <FormattedMessage {...messages.mypHomeCoutViewall} />
        </Link>
        <span className="w-[48px] h-[48px] flex items-center justify-center bg-[#6ada7d26] rounded-[4px] text-[#49c271]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-[24px]"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
        </span>
      </div>
    </div>
    <div className="bg-[#212529] p-[20px] rounded-[4px]">
      <div className="flex justify-between text-[14px]">
        <p className="flex-1 mb-[0px] uppercase">
          <FormattedMessage {...messages.mypHomeCountTitle2} />
        </p>
        <span className="text-[#FF6060] flex gap-1 items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 6 9 12.75l4.286-4.286a11.948 11.948 0 0 1 4.306 6.43l.776 2.898m0 0 3.182-5.511m-3.182 5.51-5.511-3.181"
            />
          </svg>
          3.57%
        </span>
      </div>
      <h2 className="text-[#fff] text-[18px] lg:text-[20px] font-[700] mb-[0px]">
        992
      </h2>
      <div className="flex items-end justify-between">
        <a href="#" className="text-[#00BCFF]">
          <FormattedMessage {...messages.mypHomeCoutViewall} />
        </a>
        <span className="w-[48px] h-[48px] flex items-center justify-center bg-[#58caea26] rounded-[4px] text-[#58caea]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-[20px]"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
            />
          </svg>
        </span>
      </div>
    </div>
    <div className="bg-[#212529] p-[20px] rounded-[4px]">
      <div className="flex justify-between text-[14px]">
        <p className="flex-1 mb-[0px] uppercase">
          <FormattedMessage {...messages.mypHomeCountTitle3} />
        </p>
        <span className="text-[#6ada7d] flex gap-1 items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941"
            />
          </svg>
          29.08%
        </span>
      </div>
      <h2 className="text-[#fff] text-[18px] lg:text-[20px] font-[700] mb-[0px]">
        805 <span className="mr-2"> Basic</span>281 <span> Standard</span>
      </h2>
      <div className="flex items-end justify-between">
        <a href="#" className="text-[#00BCFF]">
          <FormattedMessage {...messages.mypHomeCoutViewall} />
        </a>
        <span className="w-[48px] h-[48px] flex items-center justify-center bg-[#f7b84b26] rounded-[4px] text-[#f7b84b]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-[24px]"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
            />
          </svg>
        </span>
      </div>
    </div>
    <div className="bg-[#212529] p-[20px] rounded-[4px]">
      <div className="flex justify-between text-[14px]">
        <p className="flex-1 mb-[0px] uppercase">
          <FormattedMessage {...messages.mypHomeCountTitle4} />
        </p>
        <span className="text-[#868897]">0.0%</span>
      </div>
      <h2 className="text-[#fff] text-[18px] lg:text-[20px] font-[700] mb-[0px]">
        936 <span>Việt Nam</span>
      </h2>
      <div className="flex items-end justify-between">
        <a href="#" className="text-[#00BCFF]">
          <FormattedMessage {...messages.mypHomeCoutViewall} />
        </a>
        <span className="w-[48px] h-[48px] flex items-center justify-center bg-[#58caea26] rounded-[4px] text-[#58caea]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-[20px]"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z"
            />
          </svg>
        </span>
      </div>
    </div>
  </div>
);

export default HomeCount;
