import { Icon, IconProps } from '@chakra-ui/react';
import React, { FC } from 'react';

const TrendNegative: FC<IconProps> = (props) => (
  <Icon width="130" height="66" viewBox="0 0 130 66" fill="none" {...props}>
    <path
      d="M1 1C21.7959 2.73299 23.0837 44.2218 43.6667 49C60.6398 52.9402 69.2345 30.5738 86.3333 33C104.88 35.6316 110.815 58.9382 129 65H1V1Z"
      fill="#FEF3F2"
    />
    <path
      d="M1 1C21.7959 2.73299 23.0837 44.2218 43.6667 49C60.6398 52.9402 69.2345 30.5738 86.3333 33C104.88 35.6316 110.815 58.9382 129 65H1V1Z"
      fill="url(#paint0_linear_1561_265492)"
    />
    <path
      d="M129 65C110.815 58.9382 104.88 35.6316 86.3333 33C69.2345 30.5738 60.6398 52.9402 43.6667 49C23.0837 44.2218 21.7959 2.73299 0.999996 1"
      stroke="#DC180C"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <defs>
      <linearGradient
        id="paint0_linear_1561_265492"
        x1="65"
        y1="1"
        x2="65"
        y2="65"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0.641167" stopColor="white" stopOpacity="0" />
        <stop offset="1" stopColor="white" />
      </linearGradient>
    </defs>
  </Icon>
);

export default TrendNegative;
