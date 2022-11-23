import * as React from "react";

export default function UserIcon(props: React.ComponentProps<"svg">) {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M26.6666 28C26.6666 26.1392 26.6666 25.2089 26.4369 24.4518C25.9199 22.7473 24.586 21.4134 22.8814 20.8963C22.1244 20.6667 21.194 20.6667 19.3332 20.6667H12.6666C10.8058 20.6667 9.87546 20.6667 9.1184 20.8963C7.41386 21.4134 6.07997 22.7473 5.5629 24.4518C5.33325 25.2089 5.33325 26.1392 5.33325 28M21.9999 10C21.9999 13.3137 19.3136 16 15.9999 16C12.6862 16 9.99992 13.3137 9.99992 10C9.99992 6.68629 12.6862 4 15.9999 4C19.3136 4 21.9999 6.68629 21.9999 10Z"
        stroke="currentColor"
        strokeWidth="2.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
