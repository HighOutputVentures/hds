import * as React from 'react';

export default function ArrowUp(props: React.ComponentProps<'svg'>) {
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
        d="M10 15.8334V4.16669M10 4.16669L4.16666 10M10 4.16669L15.8333 10"
        stroke="#00C408"
        strokeWidth="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}
