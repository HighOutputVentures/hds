import { SystemStyleObject } from '@chakra-ui/react';
import { BadgeAccent, BadgeSize } from './types';

type UseBadgeStyleArg = {
  size: BadgeSize;
  accent: BadgeAccent;
  hasAvatar?: boolean;
  hasLeftIcon?: boolean;
  hasRightIcon?: boolean;
  hasIndicator?: boolean;
};

type BadgeStyle = {
  container: SystemStyleObject;
  avatar: SystemStyleObject;
  label: SystemStyleObject;
  icon: SystemStyleObject;
  dot: SystemStyleObject;
};

type CreateBadgeStyleArg = {
  labelColor: string;
  dotBgColor: string;
  containerBgColor: string;
};

function createBadgeStyle({
  labelColor,
  dotBgColor,
  containerBgColor,
}: CreateBadgeStyleArg) {
  return function getStyleUsingConfig({
    size,
    hasAvatar,
    hasLeftIcon,
    hasRightIcon,
    hasIndicator,
  }: Omit<UseBadgeStyleArg, 'accent'>): BadgeStyle {
    const hasIcon = hasLeftIcon || hasRightIcon;

    return {
      container: {
        width: 'fit-content',
        bgColor: containerBgColor,
        display: 'flex',
        alignItems: 'center',
        gap: hasIcon ? '4px' : '6px',
        rounded: '16px',
        padding: {
          sm: hasIndicator
            ? '2px 8px 2px 6px'
            : hasRightIcon
            ? '2px 6px 2px 8px'
            : hasLeftIcon
            ? '2px 8px 2px 6px'
            : hasAvatar
            ? '2px 8px 2px 3px'
            : '2px 8px',
          md: hasIndicator
            ? '2px 10px 2px 8px'
            : hasRightIcon
            ? '2px 8px 2px 10px'
            : hasLeftIcon
            ? '2px 10px 2px 8px'
            : hasAvatar
            ? '2px 10px 2px 4px'
            : '2px 10px',
          lg: hasIndicator
            ? '4px 12px 4px 10px'
            : hasRightIcon
            ? '4px 10px 4px 12px'
            : hasLeftIcon
            ? '4px 12px 4px 10px'
            : hasAvatar
            ? '4px 12px 4px 6px'
            : '4px 12px',
        }[size],
      },
      avatar: {
        width: '16px',
        height: '16px',
      },
      label: {
        color: labelColor,
        fontSize: '14px',
        lineHeight: '14px',
        letterSpacing: '0.02em',
      },
      icon: {
        width: '12px',
        height: '12px',
        color: '#8A68EF',
        cursor: 'pointer',
      },
      dot: {
        width: '6px',
        height: '6px',
        bgColor: dotBgColor,
        rounded: 'full',
      },
    };
  };
}

export const getBadgeStyle = ({ accent, ...config }: UseBadgeStyleArg) => {
  return {
    gray: createBadgeStyle({
      containerBgColor: '#F2F4F7',
      labelColor: '#344054',
      dotBgColor: '#667085',
    })(config),
    primary: createBadgeStyle({
      containerBgColor: '#EDE8FC',
      labelColor: '#8A68EF',
      dotBgColor: '#9E77ED',
    })(config),
    error: createBadgeStyle({
      containerBgColor: '#FEF3F2',
      labelColor: '#B42318',
      dotBgColor: '#F04438',
    })(config),
    warning: createBadgeStyle({
      containerBgColor: '#FFFAEB',
      labelColor: '#B54708',
      dotBgColor: '#F79009',
    })(config),
    success: createBadgeStyle({
      containerBgColor: '#ECFDF3',
      labelColor: '#027A48',
      dotBgColor: '#12B76A',
    })(config),
    'blue-gray': createBadgeStyle({
      containerBgColor: '#F8F9FC',
      labelColor: '#363F72',
      dotBgColor: '#4E5BA6',
    })(config),
    'blue-light': createBadgeStyle({
      containerBgColor: '#F0F9FF',
      labelColor: '#026AA2',
      dotBgColor: '#0BA5EC',
    })(config),
    blue: createBadgeStyle({
      containerBgColor: '#EFF8FF',
      labelColor: '#175CD3',
      dotBgColor: '#2E90FA',
    })(config),
    indigo: createBadgeStyle({
      containerBgColor: '#EEF4FF',
      labelColor: '#3538CD',
      dotBgColor: '#6172F3',
    })(config),
    purple: createBadgeStyle({
      containerBgColor: '#F4F3FF',
      labelColor: '#5925DC',
      dotBgColor: '#7A5AF8',
    })(config),
    pink: createBadgeStyle({
      containerBgColor: '#FDF2FA',
      labelColor: '#C11574',
      dotBgColor: '#EE46BC',
    })(config),
    rose: createBadgeStyle({
      containerBgColor: '#FFF1F3',
      labelColor: '#C01048',
      dotBgColor: '#F63D68',
    })(config),
    orange: createBadgeStyle({
      containerBgColor: '#FEF6EE',
      labelColor: '#B93815',
      dotBgColor: '#EF6820',
    })(config),
  }[accent];
};

export default function useBadgeStyle(args: UseBadgeStyleArg) {
  return getBadgeStyle(args);
}
