import * as React from 'react';

export default function TrendPositive(props: React.ComponentProps<'svg'>) {
  return (
    <svg
      width="98"
      height="50"
      viewBox="0 0 98 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
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
        stroke-linecap="round"
        stroke-linejoin="round"
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
          <stop offset="0.641167" stop-color="white" stop-opacity="0" />
          <stop offset="1" stop-color="white" />
        </linearGradient>
      </defs>
    </svg>
  );
}
