import { SystemStyleObject } from '@chakra-ui/react';
import { useMemo } from 'react';
import { Size } from './types';

type UseStylesArg = {
  size: Size;
};

type UseStylesReturn = {
  container: SystemStyleObject;
  title: SystemStyleObject;
  message: SystemStyleObject;
  closeButton: SystemStyleObject;
};

export function useStyles({ size }: UseStylesArg) {
  const styles = useMemo<UseStylesReturn>(
    function getStyles() {
      return {
        container: {
          width: 'fit',
          padding: '0px',
          rounded: '12px',
          maxWidth: 'full',

          ...(size === 'sm' && {
            width: '400px',
          }),

          ...(size === 'md' && {
            width: '475px',
          }),

          ...(size === 'lg' && {
            width: '550px',
          }),

          ...(size === 'xl' && {
            width: '625px',
          }),
        },
        closeButton: {
          pos: 'relative',
          top: 'unset',
          right: 'unset',
          width: '24px',
          height: '24px',
          color: 'neutrals.600',
          _hover: {
            color: 'neutrals.700',
          },
        },
        title: {
          fontSize: '18px',
          fontWeight: '600',
          lineHeight: '18px',
        },
        message: {
          color: 'neutrals.600',
          fontSize: '14px',
          lineHeight: '20px',
          letterSpacing: '0.02em',
        },
      };
    },
    [size],
  );

  return styles;
}
