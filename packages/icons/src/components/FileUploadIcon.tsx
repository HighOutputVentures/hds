import { Icon, IconProps } from '@chakra-ui/react';
import * as React from 'react';

const FileUploadIcon: React.FC<IconProps> = (props) => {
  return (
    <Icon width={4} height={4} viewBox="0 0 20 20" fill="none" {...props}>
      <path
        d="M6.66675 13.3333L10.0001 10M10.0001 10L13.3334 13.3333M10.0001 10V17.5M16.6667 13.9524C17.6847 13.1117 18.3334 11.8399 18.3334 10.4167C18.3334 7.88536 16.2814 5.83333 13.7501 5.83333C13.568 5.83333 13.3976 5.73833 13.3052 5.58145C12.2185 3.73736 10.2121 2.5 7.91675 2.5C4.46497 2.5 1.66675 5.29822 1.66675 8.75C1.66675 10.4718 2.36295 12.0309 3.48921 13.1613"
        stroke="#2E2E2E"
        stroke-width="1.66667"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Icon>
  );
};

export default FileUploadIcon;
