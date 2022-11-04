import { Grid, GridItem, Text } from '@chakra-ui/react';
import React from 'react';

import ThemeProvider from '../../../hds/src/components/ThemeProvider';
import IconsMDX from './Icons.mdx';
import ChevronLeftIcon from './ChevronLeftIcon';
import ChevronRightIcon from './ChevronRightIcon';
import HovIcon from './HovIcon';

import {
  AppleIcon,
  DribbleIcon,
  FacebookIcon,
  FigmaIcon,
  GoogleIcon,
  TwitterIcon,
} from '../index';

export default {
  title: 'Components/Icons',
  parameters: {
    docs: {
      page: IconsMDX,
    },
  },
};

const ArrowsTemplate = () => (
  <ThemeProvider>
    <Grid templateColumns="repeat(5, 1fr)" gap={4}>
      <GridItem w="100%" h="80px" textAlign="center">
        <ChevronLeftIcon />
        <Text>{'ChevronLeftIcon'}</Text>
      </GridItem>
      <GridItem w="100%" h="80px" textAlign="center">
        <ChevronRightIcon />
        <Text>{'ChevronRightIcon'}</Text>
      </GridItem>
    </Grid>
  </ThemeProvider>
);

const CompanyTemplate = () => (
  <ThemeProvider>
    <Grid templateColumns="repeat(5, 1fr)" gap={4}>
      <GridItem w="100%" h="80px" textAlign="center">
        <HovIcon />
        <Text mt="5px">{'HovIcon'}</Text>
      </GridItem>
    </Grid>
  </ThemeProvider>
);

const SocialTemplate = () => (
  <ThemeProvider>
    <Grid templateColumns="repeat(5, 1fr)" gap={4}>
      <GridItem w="100%" h="80px" textAlign="center">
        <AppleIcon variant="outline" />
        <Text>{'AppleIcon'}</Text>
      </GridItem>
      <GridItem w="100%" h="80px" textAlign="center">
        <DribbleIcon variant="outline" />
        <Text>{'DribbleIcon'}</Text>
      </GridItem>
      <GridItem w="100%" h="80px" textAlign="center">
        <FacebookIcon variant="outline" />
        <Text>{'FacebookIcon'}</Text>
      </GridItem>
      <GridItem w="100%" h="80px" textAlign="center">
        <FigmaIcon />
        <Text>{'FigmaIcon'}</Text>
      </GridItem>
      <GridItem w="100%" h="80px" textAlign="center">
        <GoogleIcon />
        <Text>{'GoogleIcon'}</Text>
      </GridItem>

      <GridItem w="100%" h="80px" textAlign="center">
        <TwitterIcon variant="outline" />
        <Text>{'TwitterIcon'}</Text>
      </GridItem>
    </Grid>
  </ThemeProvider>
);

export const Arrows = ArrowsTemplate.bind({});
export const Company = CompanyTemplate.bind({});
export const Social = SocialTemplate.bind({});
