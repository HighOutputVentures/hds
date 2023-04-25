import { ComponentProps } from 'react';

export default function FeaturedCheckIcon(props: ComponentProps<'svg'>) {
  return (
    <svg
      width="56"
      height="56"
      viewBox="0 0 56 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect x="4" y="4" width="48" height="48" rx="24" fill="#D1FADF" />
      <g clip-path="url(#clip0_1102_7122)">
        <path
          d="M24.2498 28L26.7498 30.5L31.7498 25.5M36.3332 28C36.3332 32.6023 32.6022 36.3333 27.9998 36.3333C23.3975 36.3333 19.6665 32.6023 19.6665 28C19.6665 23.3976 23.3975 19.6666 27.9998 19.6666C32.6022 19.6666 36.3332 23.3976 36.3332 28Z"
          stroke="#039855"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <rect x="4" y="4" width="48" height="48" rx="24" stroke="#ECFDF3" strokeWidth="8" />
      <defs>
        <clipPath id="clip0_1102_7122">
          <rect width="20" height="20" fill="white" transform="translate(18 18)" />
        </clipPath>
      </defs>
    </svg>
  );
}
