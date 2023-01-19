import { Icon, IconProps } from '@chakra-ui/react';
import React, { FC } from 'react';

const ImageIcon: FC<IconProps> = (props) => (
  <Icon width={4} height={4} viewBox="0 0 36 36" fill="none" {...props}>
    <rect x="2" y="2" width="32" height="32" rx="16" fill="#C3B8E6" />
    <path
      d="M20.8 24H14.6209C14.217 24 14.0151 24 13.9216 23.9201C13.8405 23.8508 13.7974 23.7469 13.8058 23.6405C13.8154 23.5179 13.9582 23.3751 14.2438 23.0895L19.9124 17.4209C20.1764 17.1569 20.3084 17.0249 20.4607 16.9754C20.5946 16.9319 20.7388 16.9319 20.8727 16.9754C21.0249 17.0249 21.1569 17.1569 21.4209 17.4209L24 20V20.8M20.8 24C21.9201 24 22.4802 24 22.908 23.782C23.2843 23.5903 23.5903 23.2843 23.782 22.908C24 22.4802 24 21.9201 24 20.8M20.8 24H15.2C14.0799 24 13.5198 24 13.092 23.782C12.7157 23.5903 12.4097 23.2843 12.218 22.908C12 22.4802 12 21.9201 12 20.8V15.2C12 14.0799 12 13.5198 12.218 13.092C12.4097 12.7157 12.7157 12.4097 13.092 12.218C13.5198 12 14.0799 12 15.2 12H20.8C21.9201 12 22.4802 12 22.908 12.218C23.2843 12.4097 23.5903 12.7157 23.782 13.092C24 13.5198 24 14.0799 24 15.2V20.8M17 15.6667C17 16.403 16.403 17 15.6667 17C14.9303 17 14.3333 16.403 14.3333 15.6667C14.3333 14.9303 14.9303 14.3333 15.6667 14.3333C16.403 14.3333 17 14.9303 17 15.6667Z"
      stroke="#5F48A3"
      stroke-width="1.33333"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <rect
      x="2"
      y="2"
      width="32"
      height="32"
      rx="16"
      stroke="#EDE8FC"
      stroke-width="4"
    />
  </Icon>
);

export default ImageIcon;
