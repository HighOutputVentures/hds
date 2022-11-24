import * as React from "react";

export default function CircleIcon(props: React.ComponentProps<"svg">) {
  return (
    <svg
      width="8"
      height="8"
      viewBox="0 0 8 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx="4" cy="4" r="4" fill="#8A68EF" />
    </svg>
  );
}
