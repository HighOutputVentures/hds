import { Box, Flex, Heading, Icon } from '@chakra-ui/react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import * as React from 'react';
import { ThemeProvider } from '../../../hds';
import BoxCircularBGIcon from '../components/BoxCircularBGIcon';
import BoxIcon from '../components/BoxIcon';
import CheckCircleIcon from '../components/CheckCircleIcon';
import CheckIcon from '../components/CheckIcon';
import ChevronDownIcon from '../components/arrow/ChevronDownIcon';
import ChevronLeftIcon from '../components/arrow/ChevronLeftIcon';
import ChevronRightIcon from '../components/arrow/ChevronRightIcon';
import ChevronUpIcon from '../components/arrow/ChevronUpIcon';
import HovIcon from '../components/company/HovIcon';
import ErrorFileIcon from '../components/ErrorFileIcon';
import ErrorFilmIcon from '../components/ErrorFilmIcon';
import ErrorFolderIcon from '../components/ErrorFolderIcon';
import ErrorImageIcon from '../components/ErrorImageIcon';
import ErrorUploadIcon from '../components/ErrorUploadIcon';
import ExitIcon from '../components/ExitIcon';
import FileIcon from '../components/FileIcon';
import FileUploadIcon from '../components/FileUploadIcon';
import FilmIcon from '../components/FilmIcon';
import HelpIcon from '../components/HelpIcon';
import HomeIcon from '../components/HomeIcon';
import ImageIcon from '../components/ImageIcon';
import InfoCircleIcon from '../components/InfoCircleIcon';
import LayersTwoIcon from '../components/LayersTwoIcon';
import MessageSmileIcon from '../components/MessageSmileIcon';
import PrimaryIcon from '../components/PrimaryIcon';
import SearchIcon from '../components/SearchIcon';
import SettingIcon from '../components/SettingIcon';
import AppleIcon from '../components/social/AppleIcon';
import DribbleIcon from '../components/social/DribbleIcon';
import FacebookIcon from '../components/social/FacebookIcon';
import FigmaIcon from '../components/social/FigmaIcon';
import GoogleIcon from '../components/social/GoogleIcon';
import TwitterIcon from '../components/social/TwitterIcon';
import SuccessCircleIcon from '../components/SuccessCircleIcon';
import ThreeDots from '../components/ThreeDots';
import TrashErrorIcon from '../components/TrashErrorIcon';
import TrashIcon from '../components/TrashIcon';
import UploadIcon from '../components/UploadIcon';
import UserIcon from '../components/UserIcon';
import UserPlusIcon from '../components/UserPlusIcon';
import UsersIcon from '../components/UsersIcon';
import WarningFolderIcon from '../components/WarningFolderIcon';
import WarningIcon from '../components/WarningIcon';
import ZapIcon from '../components/ZapIcon';
import GridView from './GridView';
import { sortObject } from './utils';
import NegativeArrowIcon from '../components/arrow/NegativeArrowIcon';
import PositiveArrowIcon from '../components/arrow/PositiveArrowIcon';
import ArrowLeftIcon from '../components/arrow/ArrowLeftIcon';
import ArrowRightIcon from '../components/arrow/ArrowRightIcon';
import ArrowPositiveChange from '../components/arrow/ArrowPositiveChange';
import NegativeChartIcon from '../components/chart/NegativeChartIcon';
import PositiveChartIcon from '../components/chart/PositiveChartIcon';
import TrendNegative from '../components/chart/TrendNegative';
import TrendPositive from '../components/chart/TrendPositive';
import EmailIcon from '../components/EmialIcon';
import VisaIcon from '../components/payment-method-icon/VisaIcon';
import BellIcon from '../components/BellIcon';
import PrimarySearchIcon from '../components/PrimarySearchIcon';

const meta: ComponentMeta<typeof Icon> = {
  title: 'Components/Icons',
  component: Icon,
  argTypes: {
    width: {
      name: 'width',
      type: 'number',
      defaultValue: 6,
      control: 'number',
      description: '1 = 4px',
    },
    height: {
      name: 'height',
      type: 'number',
      defaultValue: 6,
      control: 'number',
      description: '1 = 4px',
    },
    color: {
      name: 'color',
      type: 'string',
      control: 'color',
      description: 'Only applies to arrows and random icons',
    },
    isDisabled: {
      name: 'isDisabled',
      type: 'boolean',
      control: 'boolean',
      defaultValue: false,
      description: 'Only applies to company icons',
    },
  },
};

export default meta;

const ArrowsTemplate = (args: any) => {
  return (
    <GridView
      data={sortObject({
        ChevronLeftIcon,
        ChevronRightIcon,
        ChevronDownIcon,
        ChevronUpIcon,
        NegativeArrowIcon,
        PositiveArrowIcon,
        ArrowPositiveChange,
        ArrowLeftIcon,
        ArrowRightIcon,
      })}
      {...args}
    />
  );
};

const CompanyTemplate = (args: any) => {
  return <GridView data={sortObject({ HovIcon })} {...args} />;
};

const PaymentTemplate = (args: any) => {
  return <GridView data={sortObject({ VisaIcon })} {...args} />;
};

const ChartTemplate = (args: any) => {
  return (
    <GridView
      data={sortObject({
        NegativeChartIcon,
        PositiveChartIcon,
        TrendNegative,
        TrendPositive,
      })}
      {...args}
    />
  );
};

const SocialTemplate = (args: any) => {
  return (
    <GridView
      data={sortObject({
        DribbleIcon,
        AppleIcon,
        FacebookIcon,
        FigmaIcon,
        GoogleIcon,
        TwitterIcon,
      })}
      {...args}
    />
  );
};

const RandomTemplate = (args: any) => {
  return (
    <GridView
      data={sortObject({
        BoxIcon,
        BellIcon,
        CheckIcon,
        ExitIcon,
        HelpIcon,
        HomeIcon,
        InfoCircleIcon,
        LayersTwoIcon,
        MessageSmileIcon,
        SearchIcon,
        SettingIcon,
        ThreeDots,
        UserIcon,
        UserPlusIcon,
        UsersIcon,
        ZapIcon,
        TrashIcon,
        WarningIcon,
        CheckCircleIcon,
        FileUploadIcon,
        EmailIcon,
      })}
      {...args}
    />
  );
};

const ColoredIcons = (args: any) => {
  return (
    <GridView
      data={sortObject({
        WarningFolderIcon,
        BoxCircularBGIcon,
        ErrorFolderIcon,
        SuccessCircleIcon,
        UploadIcon,
        PrimaryIcon,
        TrashErrorIcon,
        FileIcon,
        FilmIcon,
        ImageIcon,
        ErrorFileIcon,
        ErrorImageIcon,
        ErrorFilmIcon,
        ErrorUploadIcon,
        PrimarySearchIcon,
      })}
      {...args}
    />
  );
};

const StoryTemplate: ComponentStory<any> = (args) => {
  const { width, height, color, isDisabled } = args;

  return (
    <ThemeProvider>
      <Flex flexDirection="column" gap={20}>
        <Box>
          <Title>Arrow Icons</Title>
          <ArrowsTemplate width={width} height={height} color={color} />
        </Box>
        <Box>
          <Title>Company Icons</Title>
          <CompanyTemplate width={width} height={height} />
        </Box>
        <Box>
          <Title>Payment Icons</Title>
          <PaymentTemplate width={width} height={height} />
        </Box>
        <Box>
          <Title>Chart Icons</Title>
          <ChartTemplate width={width} height={height} />
        </Box>
        <Box>
          <Title>Social Icons</Title>
          <SocialTemplate
            width={width}
            height={height}
            isDisabled={isDisabled}
          />
        </Box>
        <Box>
          <Title>Random Icons</Title>
          <RandomTemplate width={width} height={height} color={color} />
        </Box>
        <Box>
          <Title>Colored Icons</Title>
          <ColoredIcons width={width} height={height} />
        </Box>
      </Flex>
    </ThemeProvider>
  );
};

function Title({ children }: React.PropsWithChildren<{}>) {
  return (
    <Flex mb={14} px={6} alignItems="center" gap={2}>
      <Flex
        alignItems="center"
        justifyContent="center"
        border="2px solid"
        borderColor="neutrals.300"
        rounded="full"
        padding="2px"
      >
        <Box height="6px" width="6px" bgColor="neutrals.300" rounded="full" />
      </Flex>

      <Heading
        fontSize="24px"
        fontFamily="'Inter', sans-serif"
        color="neutrals.800"
      >
        {children}
      </Heading>
    </Flex>
  );
}

export const Default = StoryTemplate.bind({});
Default.args = {};
