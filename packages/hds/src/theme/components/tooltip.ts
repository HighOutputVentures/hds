import { StyleConfig, cssVar } from '@chakra-ui/react';
import { applyOpacity } from './_utils';

const $fgColor = cssVar('tooltip-fg');
const $bgColor = cssVar('tooltip-bg');
const $shadow = cssVar('tooltip-shadow');
const $arrowBg = cssVar('popper-arrow-bg');

export const Tooltip: StyleConfig = {
  baseStyle({ theme }) {
    return {
      py: '4px',
      px: '12px',
      rounded: '4px',
      fontSize: '12px',
      fontWeight: 'medium',
      lineHeight: '18px',
      color: $fgColor.reference,
      bgColor: $bgColor.reference,
      boxShadow: $shadow.reference,

      [$fgColor.variable]: theme.colors.neutral?.[100],
      [$bgColor.variable]: theme.colors.neutral?.[900],
      [$arrowBg.variable]: $bgColor.reference,
      [$shadow.variable]:
        `0px 12px 16px -4px ${applyOpacity(theme.colors.gray?.[900], 8)},` +
        `0px 4px 6px -2px ${applyOpacity(theme.colors.gray?.[900], 3)}`,

      _dark: {
        [$fgColor.variable]: theme.colors.gray?.[700],
        [$bgColor.variable]: theme.colors.white,
        [$arrowBg.variable]: $bgColor.reference,

        border: '1px',
        borderColor: theme.colors.gray?.[100],
      },
    };
  },
};
