import { Icon, IconProps } from '@chakra-ui/react';
import React, { FC } from 'react';

const BoxIcon: FC<Omit<IconProps, 'children' | 'css'>> = (props) => (
  <Icon width="16px" height="16px" viewBox="0 0 16 16" fill="none" {...props}>
    <path
      d="M13.6666 4.85185L7.99998 8M7.99998 8L2.33331 4.85185M7.99998 8L8 14.3333M14 10.7057V5.29431C14 5.06588 14 4.95167 13.9663 4.8498C13.9366 4.75969 13.8879 4.67696 13.8236 4.60717C13.7509 4.52828 13.651 4.47281 13.4514 4.36188L8.51802 1.62114C8.32895 1.5161 8.23442 1.46358 8.1343 1.44299C8.0457 1.42477 7.95431 1.42477 7.8657 1.44299C7.76559 1.46358 7.67105 1.5161 7.48198 1.62114L2.54865 4.36188C2.34896 4.47281 2.24912 4.52828 2.17642 4.60717C2.11211 4.67697 2.06343 4.75969 2.03366 4.84981C2 4.95167 2 5.06588 2 5.29431V10.7057C2 10.9341 2 11.0484 2.03366 11.1502C2.06343 11.2403 2.11211 11.3231 2.17642 11.3929C2.24912 11.4718 2.34897 11.5272 2.54865 11.6382L7.48198 14.3789C7.67105 14.4839 7.76559 14.5365 7.8657 14.557C7.95431 14.5753 8.0457 14.5753 8.1343 14.557C8.23442 14.5365 8.32895 14.4839 8.51802 14.3789L13.4514 11.6382C13.651 11.5272 13.7509 11.4718 13.8236 11.3929C13.8879 11.3231 13.9366 11.2403 13.9663 11.1502C14 11.0484 14 10.9341 14 10.7057Z"
      stroke="#344054"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </Icon>
);

export default BoxIcon;
