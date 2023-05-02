import { ComponentProps } from 'react';

export default function AddIcon(props?: ComponentProps<'svg'>) {
  return (
    <svg
      width="73"
      height="73"
      viewBox="0 0 73 73"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="18.201"
        y="0.707031"
        width="56"
        height="56"
        rx="12"
        transform="rotate(15 18.201 0.707031)"
        fill="#6941C6"
      />
      <g filter="url(#filter0_b_339_47092)">
        <rect y="17" width="56" height="56" rx="12" fill="white" fillOpacity="0.6" />
        <path
          d="M36.1667 42.6667V35.6667M32.6667 39.1667H39.6667M32.6667 55.5001V54.1001C32.6667 52.1399 32.6667 51.1598 32.2852 50.4111C31.9497 49.7525 31.4142 49.2171 30.7557 48.8816C30.007 48.5001 29.0269 48.5001 27.0667 48.5001H21.9334C19.9732 48.5001 18.9931 48.5001 18.2444 48.8816C17.5858 49.2171 17.0504 49.7525 16.7149 50.4111C16.3334 51.1598 16.3334 52.1399 16.3334 54.1001V55.5001M28.5834 39.7501C28.5834 42.0052 26.7552 43.8334 24.5 43.8334C22.2449 43.8334 20.4167 42.0052 20.4167 39.7501C20.4167 37.4949 22.2449 35.6667 24.5 35.6667C26.7552 35.6667 28.5834 37.4949 28.5834 39.7501Z"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <rect
          x="0.5"
          y="17.5"
          width="55"
          height="55"
          rx="11.5"
          stroke="white"
          strokeOpacity="0.6"
        />
      </g>
      <defs>
        <filter
          id="filter0_b_339_47092"
          x="-16"
          y="1"
          width="88"
          height="88"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation="8" />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_339_47092"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_backgroundBlur_339_47092"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
}
