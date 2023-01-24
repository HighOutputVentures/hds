import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Flex,
  HStack,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import { useTransformBreadCrumbInfo } from './hooks';

export interface IBreadCrumbLinks {
  typedef: Array<{ name: string; link: string } | null | undefined>;
}
export interface BreadcrumbProps {
  maxLinkControls: 6 | 4 | 2 | 'all';
  breadCrumbLinks: IBreadCrumbLinks['typedef'];
  separator:
    | string
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>;
  icon: any;
  activeLinkType?: 'color-in-text' | 'color-on-bg' | 'default';
  backgroundStyleType?: 'bg-grey-with-border' | 'default';
}
const Breadcrumbs = (props: BreadcrumbProps) => {
  const {
    maxLinkControls = 'all',
    separator,
    backgroundStyleType = 'default',
    breadCrumbLinks,
    icon,

    activeLinkType = 'default',
  } = props;

  const [start, setStart] = React.useState(0);
  const { transformedBreadCrumbData } = useTransformBreadCrumbInfo({
    start,
    maxLinkControls,
    originalBreadCrumbDaTa: breadCrumbLinks,
  });
  const fullPath = window.location.href;
  const pathWithoutHttps = fullPath.replace(window.location.origin, '');
  const [active, setActive] = React.useState(pathWithoutHttps);

  const textColor = (pathLink: string) => {
    if (active === pathLink && activeLinkType === 'color-in-text')
      return '#4A3880';
    if (active === pathLink && activeLinkType === 'color-on-bg')
      return '#4A3880';
    if (active === pathLink && activeLinkType === 'default')
      return 'neutrals.900';
    else return 'neutrals.600';
  };

  return (
    <HStack
      height={'32.67px'}
      align="center"
      bgColor={
        backgroundStyleType === 'bg-grey-with-border' ? '#FCFCFC' : 'none'
      }
      padding={'4px'}
      borderRadius={'8px'}
      color={'neutrals.600'}
      data-testid="breadcrumb"
    >
      <Flex justify="end" align={'end'} gap="14px">
        <Box position={'relative'} top={'-2px'}>
          {icon}
        </Box>
        <Box> {separator}</Box>
      </Flex>
      <Breadcrumb spacing="14px" separator={separator}>
        {transformedBreadCrumbData!.map((d, idx) => {
          if (d === undefined) {
            return null;
          }
          return (
            <BreadcrumbItem textDecoration={'none'} key={idx}>
              <BreadcrumbLink
                href={d?.link ?? undefined}
                onClick={() =>
                  d === null
                    ? setStart(idx === 0 ? start - 1 : start + 1)
                    : setActive(d.link)
                }
                textDecorationLine={'none'}
                color={textColor(d?.link!)}
                bgColor={
                  active === d?.link && activeLinkType === 'color-on-bg'
                    ? '#EDE8FC'
                    : 'none'
                }
                padding={
                  active === d?.link && activeLinkType === 'color-on-bg'
                    ? '4px 8px'
                    : 'none'
                }
                borderRadius={'6px'}
              >
                <Text textDecoration={'none'}>
                  {d === null ? '...' : d?.name}
                </Text>
              </BreadcrumbLink>
            </BreadcrumbItem>
          );
        })}
      </Breadcrumb>
    </HStack>
  );
};

export default Breadcrumbs;
