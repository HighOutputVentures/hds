import { SystemStyleObject } from '@chakra-ui/react';
import * as React from 'react';

type UseStylesReturn = {
  slider: SystemStyleObject;
  thumb: SystemStyleObject;
  track: SystemStyleObject;
  filledTrack: SystemStyleObject;
  tooltip: SystemStyleObject;
};

export function useStyles() {
  const styles = React.useMemo<UseStylesReturn>(
    () => ({
      slider: {},
      track: {
        rounded: '4px',
        height: '8px',
        bgColor: 'neutrals.200',
      },
      filledTrack: {
        bgColor: 'brand.primary.700',
      },
      thumb: {
        position: 'relative',
        width: '24px',
        height: '24px',
        border: '1.5px solid',
        borderColor: 'brand.primary.700',
        bgColor: 'white',
        outline: 'none',
        boxShadow:
          '0px 4px 8px -2px rgba(16, 24, 40, 0.1),' +
          '0px 2px 4px -2px rgba(16, 24, 40, 0.06)',
        _focusVisible: {
          boxShadow: 'none',
        },
        /*
         * this maintains position and discards scaling
         */
        _active: {
          transform: 'translateY(-50%)',
        },
      },
      tooltip: {
        border: '1px',
        borderColor: 'neutrals.100',
        bgColor: 'white',
        color: 'neutrals.700',
        fontSize: '14px',
        lineHeight: '14px',
        paddingY: '8px',
        paddingX: '12px',
        rounded: '8px',
        boxShadow:
          '0px 12px 16px -4px rgba(16, 24, 40, 0.08),' +
          '0px 4px 6px -2px rgba(16, 24, 40, 0.03)',
      },
    }),
    [],
  );

  return styles;
}
