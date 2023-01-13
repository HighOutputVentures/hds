import * as React from 'react';

export default function TrendNegative(props: React.ComponentProps<'svg'>) {
  return (
    <svg
      width="130"
      height="66"
      viewBox="0 0 130 66"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M1 1C21.7959 2.73299 23.0837 44.2218 43.6667 49C60.6398 52.9402 69.2345 30.5738 86.3333 33C104.88 35.6316 110.815 58.9382 129 65H1V1Z"
        fill="#FEF3F2"
      />
      <path
        d="M1 1C21.7959 2.73299 23.0837 44.2218 43.6667 49C60.6398 52.9402 69.2345 30.5738 86.3333 33C104.88 35.6316 110.815 58.9382 129 65H1V1Z"
        fill="url(#paint0_linear_1561_265492)"
      />
      <path
        d="M129 65C110.815 58.9382 104.88 35.6316 86.3333 33C69.2345 30.5738 60.6398 52.9402 43.6667 49C23.0837 44.2218 21.7959 2.73299 0.999996 1"
        stroke="#DC180C"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <defs>
        <linearGradient
          id="paint0_linear_1561_265492"
          x1="65"
          y1="1"
          x2="65"
          y2="65"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.641167" stop-color="white" stop-opacity="0" />
          <stop offset="1" stop-color="white" />
        </linearGradient>
      </defs>
    </svg>
  );
}
