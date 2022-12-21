import { Icon, IconProps } from '@chakra-ui/react';
import React, { FC } from 'react';

const LayersTwoIcon: FC<IconProps> = (props) => (
  <Icon width={4} height={4} viewBox="0 0 16 16" fill="none" {...props}>
    <path
      d="M1.33325 9.66663L7.7614 12.8807C7.84886 12.9244 7.89259 12.9463 7.93845 12.9549C7.97908 12.9625 8.02076 12.9625 8.06139 12.9549C8.10725 12.9463 8.15098 12.9244 8.23843 12.8807L14.6666 9.66663M1.33325 6.3333L7.7614 3.11922C7.84886 3.07549 7.89259 3.05363 7.93845 3.04502C7.97908 3.0374 8.02076 3.0374 8.06139 3.04502C8.10725 3.05363 8.15098 3.07549 8.23843 3.11922L14.6666 6.3333L8.23843 9.54737C8.15098 9.5911 8.10725 9.61296 8.06139 9.62157C8.02076 9.62919 7.97908 9.62919 7.93845 9.62157C7.89259 9.61296 7.84886 9.5911 7.7614 9.54737L1.33325 6.3333Z"
      stroke="currentCOlor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Icon>
);

export default LayersTwoIcon;
