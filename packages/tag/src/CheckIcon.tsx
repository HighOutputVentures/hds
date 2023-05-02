import * as React from 'react';

export default function CheckIcon({
  isChecked,
  isIndeterminate,
  ...props
}: React.ComponentProps<'svg'> & {
  isChecked?: boolean;
  isIndeterminate?: boolean;
}) {
  return (
    <svg
      width="10"
      height="10"
      viewBox="0 0 10 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M8.33341 2.5L3.75008 7.08333L1.66675 5"
        stroke="currentColor"
        strokeWidth="1.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
