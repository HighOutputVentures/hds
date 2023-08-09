import type { HTMLChakraProps } from '@chakra-ui/react';
import { chakra, forwardRef } from '@chakra-ui/react';
import { clsx } from '../utils/clsx';

export const GenericAvatarIcon = forwardRef<HTMLChakraProps<'svg'>, 'svg'>(
  ({ className, ...props }, ref) => (
    <chakra.svg
      ref={ref}
      width={4}
      height={4}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={clsx('chakra-avatar__svg', className)}
      {...props}
    >
      <path
        d="M16.6666 17.5C16.6666 16.337 16.6666 15.7555 16.5231 15.2824C16.1999 14.217 15.3662 13.3834 14.3009 13.0602C13.8277 12.9167 13.2462 12.9167 12.0832 12.9167H7.91659C6.75362 12.9167 6.17213 12.9167 5.69897 13.0602C4.63363 13.3834 3.79995 14.217 3.47678 15.2824C3.33325 15.7555 3.33325 16.337 3.33325 17.5M13.7499 6.25C13.7499 8.32107 12.071 10 9.99992 10C7.92885 10 6.24992 8.32107 6.24992 6.25C6.24992 4.17893 7.92885 2.5 9.99992 2.5C12.071 2.5 13.7499 4.17893 13.7499 6.25Z"
        stroke="currentColor"
        strokeWidth="1.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </chakra.svg>
  ),
);
