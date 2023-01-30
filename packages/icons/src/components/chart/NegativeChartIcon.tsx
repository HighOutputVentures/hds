import { Icon, IconProps } from '@chakra-ui/react';
import React, { FC } from 'react';

const NegativeChartIcon: FC<IconProps> = (props) => (
  <Icon width="98" height="50" viewBox="0 0 98 50" fill="none" {...props}>
    <path
      d="M1 1C16.5969 2.29974 17.5628 33.4164 33 37C45.7298 39.9551 52.1759 23.1804 65 25C78.9097 26.9737 83.3609 44.4536 97 49H1V1Z"
      fill="#FEF3F2"
    />
    <path
      d="M1 1C16.5969 2.29974 17.5628 33.4164 33 37C45.7298 39.9551 52.1759 23.1804 65 25C78.9097 26.9737 83.3609 44.4536 97 49H1V1Z"
      fill="url(#paint0_linear_520_28835)"
    />
    <path
      d="M97 49C83.3609 44.4536 78.9097 26.9737 65 25C52.1759 23.1804 45.7298 39.9551 33 37C17.5628 33.4164 16.5969 2.29974 1 1"
      stroke="#F04438"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <defs>
      <linearGradient
        id="paint0_linear_520_28835"
        x1="49"
        y1="1"
        x2="49"
        y2="49"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0.641167" stopColor="white" stopOpacity="0" />
        <stop offset="1" stopColor="white" />
      </linearGradient>
    </defs>
  </Icon>
);

export default NegativeChartIcon;
