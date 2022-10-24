import { Grid, GridItem, Text } from '@chakra-ui/react';
import React from 'react';

import ThemeProvider from '../../../hds/src/components/ThemeProvider';
import ChevronLeftIcon from './ChevronLeftIcon';
import ChevronRightIcon from './ChevronRightIcon';
import HovIcon from './HovIcon';

export default {
  title: 'Components/Icons',
};

const ArrowsTemplate = () => (
  <ThemeProvider>
    <Text size="label-md-bold" ml="22px" mb="22px">
      Arrows
    </Text>
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
    <Text size="label-md-bold" ml="22px" mb="22px">
      Company
    </Text>
    <Grid templateColumns="repeat(5, 1fr)" gap={4}>
      <GridItem w="100%" h="80px" textAlign="center">
        <HovIcon />
        <Text mt="5px">{'HovIcon'}</Text>
      </GridItem>
    </Grid>
  </ThemeProvider>
);

export const Arrows = ArrowsTemplate.bind({});
export const Company = CompanyTemplate.bind({});
