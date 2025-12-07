/* eslint-disable react/prop-types */
import React from 'react';

const sizeClasses = {
  lg: 'px-[24px] py-[12px] text-[16px]',
  md: 'px-[16px] py-[8px] text-[14px]',
  sm: 'px-[8px] py-[4px] text-[12px]',
};

const typeClasses = {
  primary: 'bg-[#5ea3cb26] text-[#5ea3cb] hover:bg-primary/90',
  secondary: 'bg-secondary text-white hover:bg-secondary/90',
  success: 'bg-success text-white hover:bg-success/90',
  warning: 'bg-warning text-white hover:bg-warning/90',
  info: 'bg-info text-white hover:bg-info/90',
};

const ButtonDark = ({
  children,
  size = 'md',
  type = 'primary',
  className = '',
  ...rest
}) => {
  const sizeClass = sizeClasses[size] || sizeClasses.md;
  const typeClass = typeClasses[type] || typeClasses.primary;

  return (
    <button
      type="button"
      className={`rounded-[4px] cursor-pointer outline-none border-none ${sizeClass} ${typeClass} ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default ButtonDark;
