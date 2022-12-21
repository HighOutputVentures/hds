import * as React from 'react';
import AppleIcon from '../components/AppleIcon';
import BoxCircularBGIcon from '../components/BoxCircularBGIcon';
import BoxIcon from '../components/BoxIcon';
import CheckCircleGreenIcon from '../components/CheckCircleGreenIcon';
import CheckIcon from '../components/CheckIcon';
import ChevronLeftIcon from '../components/ChevronLeftIcon';
import ChevronRightIcon from '../components/ChevronRightIcon';
import DribbleIcon from '../components/DribbleIcon';
import ErrorFolderIcon from '../components/ErrorFolderIcon';
import ExitIcon from '../components/ExitIcon';
import FacebookIcon from '../components/FacebookIcon';
import FigmaIcon from '../components/FigmaIcon';
import GoogleIcon from '../components/GoogleIcon';
import HelpIcon from '../components/HelpIcon';
import HomeIcon from '../components/HomeIcon';
import HovIcon from '../components/HovIcon';
import LayersTwoIcon from '../components/LayersTwoIcon';
import MessageSmileIcon from '../components/MessageSmileIcon';
import PrimaryIcon from '../components/PrimaryIcon';
import SearchIcon from '../components/SearchIcon';
import SettingIcon from '../components/SettingIcon';
import SuccessCircleIcon from '../components/SuccessCircleIcon';
import ThreeDots from '../components/ThreeDots';
import TwitterIcon from '../components/TwitterIcon';
import UploadIcon from '../components/UploadIcon';
import UserIcon from '../components/UserIcon';
import UserPlusIcon from '../components/UserPlusIcon';
import UsersIcon from '../components/UsersIcon';
import WarningFolderIcon from '../components/WarningFolderIcon';
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
    }}
  />
);

const CompanyTemplate = () => <GridView data={{ HovIcon }} />;

const SocialTemplate = () => (
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

const RandomTemplate = () => (
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
      CheckCircleGreenIcon,
      WarningFolderIcon,
      BoxCircularBGIcon,
      ErrorFolderIcon,
      SuccessCircleIcon,
      UploadIcon,
      PrimaryIcon,
    }}
  />
);

export const Arrows = ArrowsTemplate.bind({});
export const Company = CompanyTemplate.bind({});
export const Social = SocialTemplate.bind({});
export const Random = RandomTemplate.bind({});
