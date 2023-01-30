// import * as React from 'react';

// export default function ArrowPositiveChange(
//   props: React.ComponentProps<'svg'>
// ) {
//   return (
//     <svg
//       width="20"
//       height="12"
//       viewBox="0 0 20 12"
//       fill="none"
//       xmlns="http://www.w3.org/2000/svg"
//       {...props}
//     >
// <path
//   d="M18.3332 1.83337L11.776 8.39057C11.446 8.72058 11.281 8.88559 11.0907 8.94741C10.9233 9.00179 10.743 9.00179 10.5757 8.94741C10.3854 8.88559 10.2204 8.72058 9.89036 8.39057L7.60931 6.10952C7.2793 5.7795 7.11429 5.6145 6.92402 5.55267C6.75665 5.49829 6.57636 5.49829 6.40899 5.55267C6.21872 5.6145 6.05371 5.7795 5.72369 6.10952L1.6665 10.1667M18.3332 1.83337H12.4998M18.3332 1.83337V7.66671"
//   stroke="#008005"
//   strokeWidth="2"
//   strokeLinecap="round"
//   strokeLinejoin="round"
// />
//     </svg>
//   );
// }

import { Icon, IconProps } from '@chakra-ui/react';
import * as React from 'react';

const ArrowPositiveChange: React.FC<IconProps> = (props) => {
  return (
    <Icon
      width="20"
      height="12"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M18.3332 1.83337L11.776 8.39057C11.446 8.72058 11.281 8.88559 11.0907 8.94741C10.9233 9.00179 10.743 9.00179 10.5757 8.94741C10.3854 8.88559 10.2204 8.72058 9.89036 8.39057L7.60931 6.10952C7.2793 5.7795 7.11429 5.6145 6.92402 5.55267C6.75665 5.49829 6.57636 5.49829 6.40899 5.55267C6.21872 5.6145 6.05371 5.7795 5.72369 6.10952L1.6665 10.1667M18.3332 1.83337H12.4998M18.3332 1.83337V7.66671"
        stroke="#008005"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Icon>
  );
};

export default ArrowPositiveChange;
