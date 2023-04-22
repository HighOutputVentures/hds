import { SystemStyleObject } from '@chakra-ui/react';
import * as React from 'react';
import { Size } from './types';

type UseStylesArg = {
  size: Size;
};

type AvatarArg = {
  isBordered?: boolean;
  isElevated?: boolean;
  isClickable?: boolean;
};

type BadgeArg = {
  isOnline?: boolean;
};

type BadgeCustomArg = {};

type BadgeVerifiedArg = {};

type UseStylesReturn = {
  avatar(arg?: AvatarArg): SystemStyleObject;
  badge(arg?: BadgeArg): SystemStyleObject;
  badgeCustom(arg?: BadgeCustomArg): SystemStyleObject;
  badgeVerified(arg?: BadgeVerifiedArg): SystemStyleObject;
};

export function useStyles({ size }: UseStylesArg) {
  const styles = React.useMemo<UseStylesReturn>(
    () => ({
      avatar(arg) {
        return {
          color: '#475467',
          bgColor: '#F9FAFB',
          fontWeight: 'medium',
          padding: '0px',

          ...(arg?.isClickable && {
            transition: 'box-shadow 300ms ease-in-out',
            _focus: {
              outline: 'none',
              boxShadow: '0 0 0 4px #F4EBFF',
            },
          }),

          ...(size === 'xs' && {
            width: '24px',
            height: '24px',
            fontSize: '12px',
            lineHeight: '18px',
            svg: {
              width: '16px',
              height: '16px',
            },
          }),

          ...(size === 'sm' && {
            width: '32px',
            height: '32px',
            fontSize: '14px',
            lineHeight: '20px',
            svg: {
              width: '20px',
              height: '20px',
            },
          }),

          ...(size === 'md' && {
            width: '40px',
            height: '40px',
            fontSize: '16px',
            lineHeight: '24px',
            svg: {
              width: '24px',
              height: '24px',
            },
          }),

          ...(size === 'lg' && {
            width: '48px',
            height: '48px',
            fontSize: '18px',
            lineHeight: '28px',
            svg: {
              width: '28px',
              height: '28px',
            },
          }),

          ...(size === 'xl' && {
            width: '56px',
            height: '56px',
            fontSize: '20px',
            lineHeight: '30px',
            svg: {
              width: '32px',
              height: '32px',
            },
          }),

          ...(size === '2xl' && {
            width: '64px',
            height: '64px',
            fontSize: '24px',
            lineHeight: '32px',
            svg: {
              width: '32px',
              height: '32px',
            },
          }),

          ...(size === '3xl' && {
            width: '72px',
            height: '72px',
            fontSize: '28px',
            lineHeight: '28px',
            svg: {
              width: '30px',
              height: '30px',
            },
          }),

          ...(size === '4xl' && {
            width: '96px',
            height: '96px',
            fontSize: '32px',
            lineHeight: '32px',
            svg: {
              width: '40px',
              height: '40px',
            },
          }),

          ...(size === '5xl' && {
            width: '160px',
            height: '160px',
            fontSize: '56px',
            lineHeight: '64px',
            letterSpacing: '-0.02em',
            svg: {
              width: '66.67px',
              height: '66.67px',
            },
          }),

          ...(arg?.isBordered && {
            borderStyle: 'solid',
            borderWidth: '1.5px',
            borderColor: 'white',

            ...(size === '3xl' && { borderWidth: '3px' }),
            ...(size === '4xl' && { borderWidth: '4px' }),
            ...(size === '5xl' && { borderWidth: '4px' }),
          }),

          ...(arg?.isElevated && {
            boxShadow: getBoxShadow(size),
          }),
        };
      },

      badge(arg) {
        return {
          color: '#00C408',
          bgColor: arg?.isOnline ? '#00C408' : '#F0F0F0',
          border: '1.5px solid',
          borderColor: 'white',
          right: 'unset',
          bottom: 'unset',
          transform: 'unset',
          rounded: 'full',

          ...(size === 'xs' && {
            width: '6px',
            height: '6px',
            left: '18px',
            top: '18px',
          }),
          ...(size === 'sm' && {
            width: '8px',
            height: '8px',
            left: '24px',
            top: '24px',
          }),
          ...(size === 'md' && {
            width: '10px',
            height: '10px',
            left: '30px',
            top: '30px',
          }),
          ...(size === 'lg' && {
            width: '12px',
            height: '12px',
            left: '36px',
            top: '36px',
          }),
          ...(size === 'xl' && {
            width: '14px',
            height: '14px',
            left: '42px',
            top: '42px',
          }),
          ...(size === '2xl' && {
            width: '16px',
            height: '16px',
            left: '50px',
            top: '50px',
          }),
        };
      },

      badgeCustom() {
        return {
          position: 'absolute',
          rounded: 'full',
          border: '1.5px solid #FFFFFF',
          bgColor: '#F4EBFF',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',

          ...(size === 'xs' && {
            width: '10px',
            height: '10px',
            left: '16px',
            top: '16px',
            '& svg': {
              width: '10px',
              height: '10px',
            },
          }),

          ...(size === 'sm' && {
            width: '12px',
            height: '12px',
            left: '22px',
            top: '22px',
            '& svg': {
              width: '12px',
              height: '12px',
            },
          }),
          ...(size === 'md' && {
            width: '14px',
            height: '14px',
            left: '28px',
            top: '28px',
            '& svg': {
              width: '14px',
              height: '14px',
            },
          }),
          ...(size === 'lg' && {
            width: '16px',
            height: '16px',
            left: '34px',
            top: '34px',
            '& svg': {
              width: '16px',
              height: '16px',
            },
          }),
          ...(size === 'xl' && {
            width: '18px',
            height: '18px',
            left: '40px',
            top: '40px',
            '& svg': {
              width: '18px',
              height: '18px',
            },
          }),
          ...(size === '2xl' && {
            width: '20px',
            height: '20px',
            left: '46px',
            top: '46px',
            '& svg': {
              width: '20px',
              height: '20px',
            },
          }),
        };
      },

      badgeVerified() {
        return {
          position: 'absolute',
          ...(size === 'xs' && {
            width: '10px!important',
            height: '10px!important',
            left: '15px',
            top: '15px',
          }),
          ...(size === 'sm' && {
            width: '12px!important',
            height: '12px!important',
            left: '20px',
            top: '20px',
          }),
          ...(size === 'md' && {
            width: '14px!important',
            height: '14px!important',
            left: '26px',
            top: '26px',
          }),
          ...(size === 'lg' && {
            width: '16px!important',
            height: '16px!important',
            left: '32px',
            top: '32px',
          }),
          ...(size === 'xl' && {
            width: '18px!important',
            height: '18px!important',
            left: '38px',
            top: '38px',
          }),
          ...(size === '2xl' && {
            width: '20px!important',
            height: '20px!important',
            left: '44px',
            top: '44px',
          }),
        };
      },
    }),
    [size],
  );

  return styles;
}

function getBoxShadow(size: Size) {
  switch (size) {
    case '3xl':
      return (
        '0px 4px 8px -2px rgba(16, 24, 40, 0.1),' +
        '0px 2px 4px -2px rgba(16, 24, 40, 0.06)'
      );
    case '4xl':
      return (
        '0px 12px 16px -4px rgba(16, 24, 40, 0.08),' +
        '0px 4px 6px -2px rgba(16, 24, 40, 0.03)'
      );
    case '5xl':
      return (
        '0px 12px 16px -4px rgba(16, 24, 40, 0.08),' +
        '0px 4px 6px -2px rgba(16, 24, 40, 0.03)'
      );
    default:
      return undefined;
  }
}
