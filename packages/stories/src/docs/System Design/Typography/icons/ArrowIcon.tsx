import * as React from "react";

export default function ArrowIcon(props: React.ComponentProps<"svg">) {
  return (
    <svg
      width="16"
      height="102"
      viewBox="0 0 16 102"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M7.2929 101.707C7.68342 102.098 8.31659 102.098 8.70711 101.707L15.0711 95.3431C15.4616 94.9526 15.4616 94.3195 15.0711 93.9289C14.6805 93.5384 14.0474 93.5384 13.6569 93.9289L8 99.5858L2.34315 93.9289C1.95263 93.5384 1.31946 93.5384 0.928936 93.9289C0.538412 94.3195 0.538412 94.9526 0.928936 95.3431L7.2929 101.707ZM7 4.37114e-08L7 101L9 101L9 -4.37114e-08L7 4.37114e-08Z"
        fill="#75AEE4"
      />
    </svg>
  );
}
