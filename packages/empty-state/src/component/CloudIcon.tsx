import { ComponentProps } from 'react';

export default function CloudIcon(props: ComponentProps<'svg'>) {
  return (
    <svg
      width="220"
      height="160"
      viewBox="0 0 220 160"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx="110" cy="80" r="80" fill="#DDBBFE" />
      <circle cx="26" cy="20" r="8" fill="#C188F9" />
      <circle cx="198" cy="126" r="6" fill="#C188F9" />
      <circle cx="25" cy="138" r="10" fill="#C188F9" />
      <circle cx="210" cy="46" r="10" fill="#C188F9" />
      <circle cx="191" cy="11" r="7" fill="#C188F9" />
      <g filter="url(#filter0_dd_1182_2498)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M113.486 16C96.7495 16 81.9448 24.2701 72.9354 36.9466C69.9934 36.2528 66.9253 35.8857 63.7714 35.8857C41.8063 35.8857 24 53.692 24 75.6571C24 97.6223 41.8063 115.429 63.7714 115.429H163.2C182.42 115.429 198 99.8481 198 80.6286C198 61.4091 182.42 45.8286 163.2 45.8286C161.835 45.8286 160.488 45.9072 159.164 46.0601C151.546 28.3784 133.961 16 113.486 16Z"
          fill="#F3F3FF"
        />
        <circle
          cx="63.7714"
          cy="75.6572"
          r="39.7714"
          fill="url(#paint0_linear_1182_2498)"
        />
        <circle
          cx="113.486"
          cy="65.7143"
          r="49.7143"
          fill="url(#paint1_linear_1182_2498)"
        />
        <circle cx="163.2" cy="80.6286" r="34.8" fill="url(#paint2_linear_1182_2498)" />
      </g>
      <g filter="url(#filter1_b_1182_2498)">
        <rect
          x="82"
          y="84"
          width="56"
          height="56"
          rx="28"
          fill="#7B6AD3"
          fill-opacity="0.4"
        />
        <path
          d="M120.5 122.5L116.417 118.417M119.333 111.417C119.333 116.893 114.893 121.333 109.417 121.333C103.94 121.333 99.5 116.893 99.5 111.417C99.5 105.94 103.94 101.5 109.417 101.5C114.893 101.5 119.333 105.94 119.333 111.417Z"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <filter
          id="filter0_dd_1182_2498"
          x="4"
          y="16"
          width="214"
          height="139.429"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feMorphology
            radius="4"
            operator="erode"
            in="SourceAlpha"
            result="effect1_dropShadow_1182_2498"
          />
          <feOffset dy="8" />
          <feGaussianBlur stdDeviation="4" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.03 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_1182_2498"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feMorphology
            radius="4"
            operator="erode"
            in="SourceAlpha"
            result="effect2_dropShadow_1182_2498"
          />
          <feOffset dy="20" />
          <feGaussianBlur stdDeviation="12" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.08 0"
          />
          <feBlend
            mode="normal"
            in2="effect1_dropShadow_1182_2498"
            result="effect2_dropShadow_1182_2498"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect2_dropShadow_1182_2498"
            result="shape"
          />
        </filter>
        <filter
          id="filter1_b_1182_2498"
          x="74"
          y="76"
          width="72"
          height="72"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation="4" />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_1182_2498"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_backgroundBlur_1182_2498"
            result="shape"
          />
        </filter>
        <linearGradient
          id="paint0_linear_1182_2498"
          x1="33.2326"
          y1="49.3796"
          x2="103.543"
          y2="115.429"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#E3E3FC" />
          <stop offset="0.350715" stopColor="white" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_1182_2498"
          x1="75.3122"
          y1="32.8673"
          x2="163.2"
          y2="115.428"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#E3E3FC" />
          <stop offset="0.350715" stopColor="white" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_1182_2498"
          x1="136.479"
          y1="57.6357"
          x2="198"
          y2="115.429"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#E3E3FC" />
          <stop offset="0.350715" stopColor="white" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
}
