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
      bgColor: '#F9FAFB',
    },
    'th, td': {
      borderColor: '#EAECF0',
    },
    th: {
      paddingY: '12px',
      paddingX: '24px',
      textTransform: 'unset',
      color: '#667085',
      fontSize: '12px',
      lineHeight: '18px',
      fontWeight: 'medium',
    },
    td: {
      paddingY: '16px',
      paddingX: '24px',
      color: '#7A7A7A',
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
