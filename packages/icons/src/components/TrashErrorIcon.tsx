import { Icon, IconProps } from '@chakra-ui/react';
import * as React from 'react';

const TrashErrorIcon: React.FC<IconProps> = (props) => {
  return (
    <Icon
      width={4}
      height={4}
      viewBox="0 0 56 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect x="4" y="4" width="48" height="48" rx="24" fill="#FEE4E2" />
      <path
        d="M31.3333 23.0001V22.3334C31.3333 21.4 31.3333 20.9333 31.1517 20.5768C30.9919 20.2632 30.7369 20.0082 30.4233 19.8484C30.0668 19.6667 29.6001 19.6667 28.6667 19.6667H27.3333C26.3999 19.6667 25.9332 19.6667 25.5767 19.8484C25.2631 20.0082 25.0081 20.2632 24.8483 20.5768C24.6667 20.9333 24.6667 21.4 24.6667 22.3334V23.0001M26.3333 27.5834V31.7501M29.6667 27.5834V31.7501M20.5 23.0001H35.5M33.8333 23.0001V32.3334C33.8333 33.7335 33.8333 34.4336 33.5608 34.9684C33.3212 35.4388 32.9387 35.8212 32.4683 36.0609C31.9335 36.3334 31.2335 36.3334 29.8333 36.3334H26.1667C24.7665 36.3334 24.0665 36.3334 23.5317 36.0609C23.0613 35.8212 22.6788 35.4388 22.4392 34.9684C22.1667 34.4336 22.1667 33.7335 22.1667 32.3334V23.0001"
        stroke="#D92D20"
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect x="4" y="4" width="48" height="48" rx="24" stroke="#FEF3F2" strokeWidth="8" />
    </Icon>
  );
};

export default TrashErrorIcon;
