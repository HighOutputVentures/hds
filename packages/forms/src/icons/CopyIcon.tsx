import * as React from 'react';

export default React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
  function CopyIcon(props, ref) {
    return (
      <svg
        ref={ref}
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 256 256"
        {...props}
      >
        <path
          fill="currentColor"
          d="M184 64H40a8 8 0 0 0-8 8v144a8 8 0 0 0 8 8h144a8 8 0 0 0 8-8V72a8 8 0 0 0-8-8Zm-8 144H48V80h128Zm48-168v144a8 8 0 0 1-16 0V48H72a8 8 0 0 1 0-16h144a8 8 0 0 1 8 8Z"
        ></path>
      </svg>
    );
  },
);
