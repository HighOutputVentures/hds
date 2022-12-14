import { Icon, IconProps } from '@chakra-ui/react';
import React, { FC } from 'react';

const PrimaryIcon: FC<Omit<IconProps, 'children' | 'css'>> = (props) => (
  <Icon width="46px" height="46px" viewBox="0 0 46 46" fill="none" {...props}>
    <rect x="3" y="3" width="40" height="40" rx="20" fill="#C3B8E6" />
    <g clip-path="url(#clip0_1135_510)">
      <path
        d="M16.75 31.3333V27.1666M16.75 18.8333V14.6666M14.6667 16.75H18.8333M14.6667 29.25H18.8333M23.8333 15.5L22.3882 19.2573C22.1532 19.8684 22.0357 20.1739 21.8529 20.4309C21.691 20.6586 21.492 20.8576 21.2642 21.0196C21.0073 21.2023 20.7017 21.3198 20.0907 21.5548L16.3333 23L20.0907 24.4451C20.7017 24.6801 21.0073 24.7976 21.2642 24.9804C21.492 25.1423 21.691 25.3413 21.8529 25.5691C22.0357 25.826 22.1532 26.1315 22.3882 26.7426L23.8333 30.5L25.2785 26.7426C25.5135 26.1315 25.631 25.826 25.8137 25.5691C25.9757 25.3413 26.1747 25.1423 26.4024 24.9804C26.6594 24.7976 26.9649 24.6801 27.576 24.4451L31.3333 23L27.576 21.5548C26.9649 21.3198 26.6594 21.2023 26.4024 21.0196C26.1747 20.8576 25.9757 20.6586 25.8137 20.4309C25.631 20.1739 25.5135 19.8684 25.2785 19.2573L23.8333 15.5Z"
        stroke="#4A3880"
        stroke-width="1.66667"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </g>
    <rect
      x="3"
      y="3"
      width="40"
      height="40"
      rx="20"
      stroke="#EDE8FC"
      stroke-width="6"
    />
    <defs>
      <clipPath id="clip0_1135_510">
        <rect
          width="20"
          height="20"
          fill="white"
          transform="translate(13 13)"
        />
      </clipPath>
    </defs>
  </Icon>
);

export default PrimaryIcon;
