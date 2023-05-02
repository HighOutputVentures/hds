import {
  As,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Icon,
  Skeleton,
  SystemStyleObject,
  VisuallyHidden,
} from '@chakra-ui/react';
import * as React from 'react';
import { v4 as uuid } from 'uuid';
import ChevronRightIcon from './icons/ChevronRightIcon';
import HomeIcon from './icons/HomeIcon';

type Item = {
  href: string;
  label: string | JSX.Element;
  isActive?: boolean;
  isLoading?: boolean;
  isDisabled?: boolean;
};

export type BreadcrumbProps = {
  as?: As;
  items?: Item[];
  homeHref?: string;
  separator?: string | JSX.Element;
  withAccent?: boolean;
};

export default React.forwardRef<HTMLDivElement, BreadcrumbProps & SystemStyleObject>(
  function HdsBreadcrumbs(props, ref) {
    const {
      as,
      items,
      homeHref,
      withAccent = true,
      separator = (
        <Icon
          as={ChevronRightIcon}
          width={5}
          height={5}
          color="neutrals.300"
          display="flex"
          alignItems="center"
          justifyContent="center"
        />
      ),
      ...others
    } = props;

    const styles = useStyles({ withAccent });
    const shouldShowHome = !!homeHref;
    const shouldSelectHome = !items?.some((o) => !!o.isActive);

    return (
      <Breadcrumb
        ref={ref}
        spacing="14px"
        fontSize="14px"
        lineHeight="14px"
        separator={separator}
        data-testid="hds.breadcrumb"
        sx={others}
      >
        {shouldShowHome && (
          <BreadcrumbItem>
            <BreadcrumbLink
              as={as}
              href={homeHref}
              isCurrentPage={shouldSelectHome}
              sx={styles.link}
            >
              <Icon as={HomeIcon} w={4} h={4} />
              <VisuallyHidden>Go to Homepage</VisuallyHidden>
            </BreadcrumbLink>
          </BreadcrumbItem>
        )}

        {items?.map(({ label, href, isActive, isDisabled, isLoading }) => (
          <BreadcrumbItem key={uuid()}>
            <BreadcrumbLink
              as={as}
              href={href}
              isCurrentPage={isActive}
              onClick={(e) => {
                if (isLoading || isDisabled) {
                  e.preventDefault();
                }
              }}
              {...(isDisabled && {
                'data-disabled': true,
              })}
              {...(isLoading && {
                'data-loading': true,
              })}
              {...(isActive && {
                'data-active': true,
              })}
              sx={styles.link}
            >
              {isLoading ? <Skeleton w="64px" h="10px" /> : label}
            </BreadcrumbLink>
          </BreadcrumbItem>
        ))}
      </Breadcrumb>
    );
  },
);

function useStyles({ withAccent }: { withAccent?: boolean } = {}) {
  return {
    link: {
      color: 'neutrals.600',
      letterSpacing: '0.02em',
      textDecoration: 'none',
      _hover: {
        color: 'neutrals.800',
      },
      _disabled: {
        color: 'neutrals.600',
        cursor: 'not-allowed',
        _hover: {},
      },
      _loading: {
        color: 'neutrals.600',
        cursor: 'not-allowed',
        _hover: {},
      },
      _active: {
        color: withAccent ? 'brand.primary.900' : 'neutrals.900',
      },
    },
  };
}
