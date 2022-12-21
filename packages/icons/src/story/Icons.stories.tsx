import * as React from 'react';
import BoxCircularBGIcon from '../components/BoxCircularBGIcon';
import BoxIcon from '../components/BoxIcon';
import CheckCircleIcon from '../components/CheckCircleIcon';
import CheckIcon from '../components/CheckIcon';
import ChevronDownIcon from '../components/ChevronDownIcon';
import ChevronLeftIcon from '../components/ChevronLeftIcon';
import ChevronRightIcon from '../components/ChevronRightIcon';
import ChevronUpIcon from '../components/ChevronUpIcon';
import HovIcon from '../components/company/HovIcon';
import ErrorFolderIcon from '../components/ErrorFolderIcon';
import ExitIcon from '../components/ExitIcon';
import HelpIcon from '../components/HelpIcon';
import HomeIcon from '../components/HomeIcon';
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
import TrashIcon from '../components/TrashIcon';
import UploadIcon from '../components/UploadIcon';
import UserIcon from '../components/UserIcon';
import UserPlusIcon from '../components/UserPlusIcon';
import UsersIcon from '../components/UsersIcon';
import WarningFolderIcon from '../components/WarningFolderIcon';
import WarningIcon from '../components/WarningIcon';
import ZapIcon from '../components/ZapIcon';
import GridView from './GridView';
import IconsMDX from './Icons.mdx';

export default {
  title: 'Components/Icons',
  parameters: {
    docs: {
      page: IconsMDX,
    },
  },
};

const ArrowsTemplate = () => (
  <GridView
    data={{
      ChevronLeftIcon,
      ChevronRightIcon,
      ChevronDownIcon,
      ChevronUpIcon,
    }}
  />
);

const CompanyTemplate = () => {
  return <GridView data={{ HovIcon }} />;
};

const SocialTemplate = () => {
  return (
    <GridView
      data={{
        AppleIcon,
        DribbleIcon,
        FacebookIcon,
        FigmaIcon,
        GoogleIcon,
        TwitterIcon,
      }}
    />
  );
};

const RandomTemplate = () => {
  return (
    <GridView
      data={{
        BoxIcon,
        CheckIcon,
        ExitIcon,
        HelpIcon,
        HomeIcon,
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
        WarningFolderIcon,
        BoxCircularBGIcon,
        ErrorFolderIcon,
        SuccessCircleIcon,
        UploadIcon,
        PrimaryIcon,
      }}
    />
  );
};

export const Arrows = ArrowsTemplate.bind({});
export const Company = CompanyTemplate.bind({});
export const Social = SocialTemplate.bind({});
export const Random = RandomTemplate.bind({});
