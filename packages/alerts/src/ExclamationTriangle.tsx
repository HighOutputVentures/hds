import { ComponentProps } from 'react';

export default function ExclamationTriangleIcon(props: ComponentProps<'svg'>) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M9.99988 7.49995V10.8333M9.99988 14.1666H10.0082M8.84598 3.24305L1.9919 15.0819C1.61173 15.7386 1.42165 16.0669 1.44974 16.3364C1.47425 16.5714 1.59739 16.785 1.78852 16.924C2.00765 17.0833 2.38704 17.0833 3.14581 17.0833H16.8539C17.6127 17.0833 17.9921 17.0833 18.2112 16.924C18.4024 16.785 18.5255 16.5714 18.55 16.3364C18.5781 16.0669 18.388 15.7386 18.0078 15.0819L11.1538 3.24305C10.775 2.58875 10.5856 2.26159 10.3385 2.15172C10.1229 2.05587 9.87684 2.05587 9.66129 2.15172C9.41419 2.26159 9.22478 2.58875 8.84598 3.24305Z"
        stroke="currentColor"
        strokeWidth="1.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
