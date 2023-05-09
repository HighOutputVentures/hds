import { SystemStyleObject } from '@chakra-ui/react';

export function useStyles({ hasBottomRowBorder }: { hasBottomRowBorder: boolean }) {
  const container: SystemStyleObject = {
    position: 'relative',
    '&::-webkit-scrollbar': {
      width: '12px',
    },
    '&::-webkit-scrollbar-thumb': {
      rounded: 'full',
      bgColor: 'neutrals.300',
      border: '6px solid',
      borderColor: 'transparent',
      backgroundClip: 'padding-box',
    },
    '&::-webkit-scrollbar-track-piece': {
      rounded: 'full',
      bgColor: 'neutrals.100',
      border: '6px solid',
      borderColor: 'transparent',
      backgroundClip: 'padding-box',
    },
    '&::-webkit-scrollbar-track': {
      bgColor: 'transparent',
    },
  };

  const table = {
    thead: {
      bgColor: 'Gray.50',
    },
    'th, td': {
      borderColor: 'Gray.200',
    },
    th: {
      paddingY: '12px',
      paddingX: '24px',
      textTransform: 'unset',
      color: 'Gray.500',
      fontSize: '12px',
      lineHeight: '18px',
      fontWeight: 'medium',
    },
    td: {
      paddingY: '16px',
      paddingX: '24px',
      color: 'neutrals.600',
      fontSize: '14px',
      lineHeight: '20px',
      letterSpacing: '0.02em',
    },
    tr: {
      ...(!hasBottomRowBorder && {
        _last: {
          td: {
            borderBottom: 'none',
          },
        },
      }),
    },
  };

  return {
    table,
    container,
  };
}
