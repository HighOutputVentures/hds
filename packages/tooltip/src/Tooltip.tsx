import {
  Box,
  PlacementWithLogical,
  Text,
  Tooltip as Tooltips,
} from '@chakra-ui/react';
import React, { PropsWithChildren } from 'react';

export interface TooltipProps {
  theme?: 'dark' | 'light';
  arrow?: boolean;
  label: string;
  supportingTextDetail?: string;
  placement?: PlacementWithLogical | undefined;
  isOpen?: boolean;
}

const Tooltip = (props: PropsWithChildren<TooltipProps>) => {
  const {
    arrow,
    label,
    placement,
    supportingTextDetail,
    isOpen,
    theme,
    children,
  } = props;
  const labelWithSupporting = (
    <Box
      maxWidth={'320px'}
      minHeight="34px"
      p={'12px'}
      borderRadius={'8px'}
      width={'full'}
    >
      <Text
        fontWeight={'500'}
        fontSize="12px"
        lineHeight={'18px'}
        color={theme === 'dark' ? 'neutrals.100' : 'neutrals.700'}
        mb="4px"
        fontFamily={'Inter'}
      >
        {label}
      </Text>

      <Text
        fontWeight={'400'}
        fontSize="12px"
        lineHeight={'18px'}
        color={theme === 'dark' ? 'neutrals.300' : '"neutrals.600"'}
        fontFamily={'Inter'}
      >
        {supportingTextDetail}
      </Text>
    </Box>
  );
  return (
    <Tooltips
      hasArrow={arrow}
      data-testid="tooltip"
      placement={placement}
      p={Boolean(supportingTextDetail) ? '0px' : '8px 12px'}
      label={
        label && !Boolean(supportingTextDetail) ? label : labelWithSupporting
      }
      bg={theme === 'dark' ? '#0F0F0F' : '#FFFFFF'}
      color={theme === 'dark' ? 'neutrals.100' : 'neutrals.700'}
      isOpen={isOpen}
      borderRadius={'8px'}
      boxShadow={
        theme === 'light'
          ? ' 0px 12px 16px -4px rgba(16, 24, 40, 0.08), 0px 4px 6px -2px rgba(16, 24, 40, 0.03)'
          : undefined
      }
    >
      <span data-testid="tooltip-trigger">{children}</span>
    </Tooltips>
  );
};

export default Tooltip;
