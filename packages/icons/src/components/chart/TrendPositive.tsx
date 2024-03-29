import { Icon, IconProps } from '@chakra-ui/react';
import React, { FC } from 'react';

const TrendPositive: FC<IconProps> = (props) => (
  <Icon width="98" height="50" viewBox="0 0 98 50" fill="none" {...props}>
    <path
      d="M97 1C81.4031 2.29974 80.4372 33.4164 65 37C52.2702 39.9551 45.8241 23.1804 33 25C19.0903 26.9737 14.6391 44.4536 1 49H97V1Z"
      fill="#E8FCE9"
    />
    <path
      d="M97 1C81.4031 2.29974 80.4372 33.4164 65 37C52.2702 39.9551 45.8241 23.1804 33 25C19.0903 26.9737 14.6391 44.4536 1 49H97V1Z"
      fill="url(#paint0_linear_1561_265703)"
    />
    <path
      d="M1 49C14.6391 44.4536 19.0903 26.9737 33 25C45.8241 23.1804 52.2702 39.9551 65 37C80.4372 33.4164 81.4031 2.29974 97 1"
      stroke="#00C408"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <defs>
      <linearGradient
        id="paint0_linear_1561_265703"
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

export default TrendPositive;
