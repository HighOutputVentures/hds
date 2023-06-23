import {
  chakra,
  forwardRef,
  HTMLChakraProps,
  useBreadcrumbStyles,
} from '@chakra-ui/react';

export const BreadcrumbSeparator = forwardRef<HTMLChakraProps<'svg'>, 'svg'>(
  ({ spacing, ...props }, ref) => {
    const styles = useBreadcrumbStyles();

    return (
      <chakra.span __css={styles.separator}>
        <chakra.svg
          ref={ref}
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="chakra-icon"
          {...props}
        >
          <path
            d="M6.66675 12.3333L10.6667 8.33331L6.66675 4.33331"
            stroke="currentColor"
            strokeWidth="1.33333"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </chakra.svg>
      </chakra.span>
    );
  },
);

BreadcrumbSeparator.displayName = 'BreadcrumbSeparator';
