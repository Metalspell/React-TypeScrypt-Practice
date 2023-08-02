import React from 'react';
import { ButtonProps } from '@/interfaces';

const Button = ({
  version,
  shape,
  type = 'button',
  children,
  onClick,
  font
}: ButtonProps) => {
  const getClasses = () => {
    switch (version) {
      case 'V1':
        return 'bg-main-red px-8 py-3 text-main-color1 uppercase font-semibold text-sm';
      case 'V2':
        return 'bg-main-green px-8 mx-1 py-3 text-main-color1 uppercase font-semibold h-12';
      case 'V3':
        return 'bg-main-red px-8 py-2 mx-4 text-main-color1 uppercase font-semibold w-[20%] h-full';
      default:
        return 'bg-gray-500 hover:bg-gray-600 text-white';
    }
  };

  const getShapeClasses = () => {
    switch (shape) {
      case '30px':
        return 'rounded-[30px]';
      case '20px':
        return 'rounded-[20px]';
      case '10px':
        return 'rounded-[10px]';
      default:
        return '';
    }
  };

  const getFontSizeClasses = () => {
    switch (font) {
      case '1vw':
        return 'text-[1vw]';
      case '1.5vw':
        return 'text-[1.5vw]';
      case '2vw':
        return 'text-[2vw]';
      default:
        return '';
    }
  };

  const buttonClasses = `px-4 py-2 ${getClasses()} ${getShapeClasses()} ${getFontSizeClasses()}`;

  return <button type={type} className={buttonClasses} onClick={onClick}>{children}</button>;
};

export default Button;