import {
  As,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Icon,
  SystemStyleObject,
} from '@chakra-ui/react';
import * as React from 'react';
import { v4 as uuid } from 'uuid';
import ChevronRightIcon from './icons/ChevronRightIcon';
import HomeIcon from './icons/HomeIcon';

type Item = {
  href: string;
  label: string | JSX.Element;
  isActive?: boolean;
  isDisabled?: boolean;
};

export type BreadcrumbProps = {
  as?: As;
  items?: Item[];
  homeHref?: string;
  separator?: string | JSX.Element;
  withAccent?: boolean;
};

export default React.forwardRef<
  HTMLDivElement,
  BreadcrumbProps & SystemStyleObject
>(function HdsBreadcrumbs(props, ref) {
  const {
    as,
    items,
    homeHref,
    withAccent,
    separator = (
      <Icon
        as={ChevronRightIcon}
        width={5}
        height={5}
        color="#D6D6D6"
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
      color="#7A7A7A"
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
            sx={styles.link()}
          >
            <Icon as={HomeIcon} w={4} h={4} />
          </BreadcrumbLink>
        </BreadcrumbItem>
      )}

      {items?.map(({ label, href, isActive, isDisabled }) => (
        <BreadcrumbItem key={uuid()}>
          <BreadcrumbLink
            as={as}
            href={href}
            isCurrentPage={isActive}
            onClick={(e) => {
              if (isDisabled) {
                e.preventDefault();
              }
            }}
            sx={styles.link({
              isActive,
              isDisabled,
            })}
          >
            {label}
          </BreadcrumbLink>
        </BreadcrumbItem>
      ))}
    </Breadcrumb>
  );
});

function useStyles({ withAccent }: { withAccent?: boolean } = {}) {
  return {
    link({
      isActive,
      isDisabled,
    }: { isActive?: boolean; isDisabled?: boolean } = {}): SystemStyleObject {
      return {
        letterSpacing: '0.02em',
        ...(isActive && {
          color: withAccent ? '#520187' : '#0F0F0F',
        }),
        _hover: {
          textDecoration: 'none',
          ...(!isActive && {
            color: 'neutrals.800',
          }),
        },
        ...(isDisabled && {
          cursor: 'not-allowed',
          _hover: {},
        }),
      };
    },
  };
}
