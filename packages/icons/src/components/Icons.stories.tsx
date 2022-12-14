import { Grid, GridItem, Text } from '@chakra-ui/react';
import React from 'react';

import ThemeProvider from '../../../hds/src/components/ThemeProvider';
import ChevronLeftIcon from './ChevronLeftIcon';
import ChevronRightIcon from './ChevronRightIcon';
import HovIcon from './HovIcon';
import IconsMDX from './Icons.mdx';

import {
  AppleIcon,
  BoxCircularBGIcon,
  BoxIcon,
  CheckCircleGreenIcon,
  CheckIcon,
  DribbleIcon,
  ErrorFolderIcon,
  ExitIcon,
  FacebookIcon,
  FigmaIcon,
  GoogleIcon,
  HelpIcon,
  HomeIcon,
  LayersTwoIcon,
  MessageSmileIcon,
  PrimaryIcon,
  SearchIcon,
  SettingIcon,
  SuccessCircleIcon,
  ThreeDots,
  TwitterIcon,
  UserIcon,
  UserPlusIcon,
  UsersIcon,
  WarningFolderIcon,
  WarningIcon,
  ZapIcon,
} from '../index';
import UploadIcon from './UploadIcon';

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

const RandomTemplate = () => (
  <ThemeProvider>
    <Grid templateColumns="repeat(5, 1fr)" gap={4}>
      <GridItem w="100%" h="80px" textAlign="center">
        <BoxIcon />
        <Text>{'BoxIcon'}</Text>
      </GridItem>
      <GridItem w="100%" h="80px" textAlign="center">
        <CheckIcon />
        <Text>{'CheckIcon'}</Text>
      </GridItem>
      <GridItem w="100%" h="80px" textAlign="center">
        <ExitIcon />
        <Text>{'ExitIcon'}</Text>
      </GridItem>
      <GridItem w="100%" h="80px" textAlign="center">
        <HelpIcon />
        <Text>{'HelpIcon'}</Text>
      </GridItem>
      <GridItem w="100%" h="80px" textAlign="center">
        <HomeIcon />
        <Text>{'HomeIcon'}</Text>
      </GridItem>

      <GridItem w="100%" h="80px" textAlign="center">
        <LayersTwoIcon />
        <Text>{'LayersTwoIcon'}</Text>
      </GridItem>

      <GridItem w="100%" h="80px" textAlign="center">
        <MessageSmileIcon />
        <Text>{'MessageSmileIcon'}</Text>
      </GridItem>

      <GridItem w="100%" h="80px" textAlign="center">
        <SearchIcon />
        <Text>{'SearchIcon'}</Text>
      </GridItem>

      <GridItem w="100%" h="80px" textAlign="center">
        <SettingIcon />
        <Text>{'SettingIcon'}</Text>
      </GridItem>

      <GridItem w="100%" h="80px" textAlign="center">
        <ThreeDots />
        <Text>{'ThreeDots'}</Text>
      </GridItem>

      <GridItem w="100%" h="80px" textAlign="center">
        <UserIcon />
        <Text>{'UserIcon'}</Text>
      </GridItem>
      <GridItem w="100%" h="80px" textAlign="center">
        <UserPlusIcon />
        <Text>{'UserPlusIcon'}</Text>
      </GridItem>
      <GridItem w="100%" h="80px" textAlign="center">
        <UsersIcon />
        <Text>{'UsersIcon'}</Text>
      </GridItem>
      <GridItem w="100%" h="80px" textAlign="center">
        <ZapIcon />
        <Text>{'ZapIcon'}</Text>
      </GridItem>

      <GridItem w="100%" h="80px" textAlign="center">
        <CheckCircleGreenIcon />
        <Text>{'CheckCircleGreenIcon'}</Text>
      </GridItem>
      <GridItem w="100%" h="80px" textAlign="center">
        <WarningIcon />
        <Text>{'WarningFolderIcon'}</Text>
      </GridItem>
      <GridItem w="100%" h="80px" textAlign="center">
        <BoxCircularBGIcon />
        <Text>{'BoxCircularBGIcon'}</Text>
      </GridItem>
      <GridItem w="100%" h="80px" textAlign="center">
        <ErrorFolderIcon />
        <Text>{'ErrorFolderIcon'}</Text>
      </GridItem>
      <GridItem w="100%" h="80px" textAlign="center">
        <WarningFolderIcon />
        <Text>{'WarningFolderIcon'}</Text>
      </GridItem>
      <GridItem w="100%" h="80px" textAlign="center">
        <SuccessCircleIcon />
        <Text>{'SuccessCircleIcon'}</Text>
      </GridItem>
      <GridItem w="100%" h="80px" textAlign="center">
        <UploadIcon />
        <Text>{'UploadIcon'}</Text>
      </GridItem>
      <GridItem w="100%" h="80px" textAlign="center">
        <PrimaryIcon />
        <Text>{'PrimaryIcon'}</Text>
      </GridItem>
    </Grid>
  </ThemeProvider>
);

export const Arrows = ArrowsTemplate.bind({});
export const Company = CompanyTemplate.bind({});
export const Social = SocialTemplate.bind({});
export const Random = RandomTemplate.bind({});
