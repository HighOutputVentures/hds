import { Icon, IconProps } from '@chakra-ui/react';
import React, { FC } from 'react';

const SuccessCircleIcon: FC<Omit<IconProps, 'children' | 'css'>> = (props) => (
  <Icon width="46px" height="46px" viewBox="0 0 46 46" fill="none" {...props}>
    <rect x="3" y="3" width="40" height="40" rx="20" fill="#A3F0A7" />
    <g clip-path="url(#clip0_1135_2526)">
      <path
        d="M20.5 23L22.1666 24.6666L25.9166 20.9166M19.1114 16.1822C19.7813 16.1288 20.4172 15.8653 20.9287 15.4295C22.1222 14.4123 23.8777 14.4123 25.0712 15.4295C25.5827 15.8653 26.2186 16.1288 26.8885 16.1822C28.4517 16.3069 29.693 17.5482 29.8177 19.1114C29.8712 19.7813 30.1346 20.4172 30.5704 20.9287C31.5876 22.1222 31.5876 23.8777 30.5704 25.0712C30.1346 25.5827 29.8712 26.2186 29.8177 26.8885C29.693 28.4517 28.4517 29.693 26.8885 29.8177C26.2186 29.8712 25.5827 30.1346 25.0712 30.5704C23.8777 31.5876 22.1222 31.5876 20.9287 30.5704C20.4172 30.1346 19.7813 29.8712 19.1114 29.8177C17.5482 29.693 16.3069 28.4517 16.1822 26.8885C16.1288 26.2186 15.8653 25.5827 15.4295 25.0712C14.4123 23.8777 14.4123 22.1222 15.4295 20.9287C15.8653 20.4172 16.1288 19.7813 16.1822 19.1114C16.3069 17.5482 17.5482 16.3069 19.1114 16.1822Z"
        stroke="#139E19"
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
      stroke="#E8FCE9"
      stroke-width="6"
    />
    <defs>
      <clipPath id="clip0_1135_2526">
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

export default SuccessCircleIcon;
