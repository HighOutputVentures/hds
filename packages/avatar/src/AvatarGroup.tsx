import {
  AvatarGroup,
  chakra,
  HStack,
  Icon,
  SystemStyleObject,
  Tooltip,
  useBreakpoint,
} from '@chakra-ui/react';
import * as React from 'react';
import { useActualSize } from './hooks';
import PlusIcon from './icons/PlusIcon';
import { Breakpoints, ResponsiveSize } from './types';
import { findClosestBreakpoint } from './utils';

type AvatarGroupSize = 'xs' | 'sm' | 'md';

type AvatarGroupBaseProps = {
  max?: number | Partial<Record<Breakpoints, number>>;
  size?: AvatarGroupSize | ResponsiveSize<AvatarGroupSize>;
  hasAddButton?: boolean;
  onAddButtonClick?(): void;
};

export type AvatarGroupProps = SystemStyleObject & AvatarGroupBaseProps;

export default function HdsAvatarGroup(props: React.PropsWithChildren<AvatarGroupProps>) {
  const { max, size = 'md', children, hasAddButton, onAddButtonClick, ...others } = props;

  const actualMax = useActualMax(max);
  const actualSize = useActualSize(size);
  const spacing = React.useMemo(() => {
    return {
      xs: '-4px',
      sm: '-8px',
      md: '-12px',
    }[actualSize];
  }, [actualSize]);

  return (
    <HStack __css={others} spacing="8px" /* retain spacing */>
      <AvatarGroup variant="hds" max={actualMax} size={size} spacing={spacing}>
        {React.Children.map(children, (child, zIndex) => {
          if (!React.isValidElement(child)) return null;

          return React.cloneElement<Record<string, any>>(child, {
            size,
            zIndex,
            __bordered: true,
          });
        })}
      </AvatarGroup>

      {hasAddButton && <AddButton size={actualSize} onClick={onAddButtonClick} />}
    </HStack>
  );
}

type AddButtonProps = React.ComponentProps<'button'> & { size: string /* unsafe. 🤐 */ };

function AddButton({ size, ...props }: AddButtonProps) {
  const buttonSize = React.useMemo(
    () => ({
      xs: { width: '24px', height: '24px' },
      sm: { width: '32px', height: '32px' },
      md: { width: '40px', height: '40px' },
    }),
    [],
  );

  const iconStyle = React.useMemo(
    () => ({
      xs: { color: '#525252', width: '16px', height: '16px' },
      sm: { color: '#525252', width: '16px', height: '16px' },
      md: { color: '#525252', width: '20px', height: '20px' },
    }),
    [],
  );

  return (
    <Tooltip
      hasArrow
      label="Add user"
      placement="top"
      marginBottom="3px"
      bgColor="#0F0F0F"
      rounded="8px"
      fontFamily="'Inter', sans-serif"
      fontSize="12px"
      lineHeight="18px"
      fontWeight="500"
      paddingY="8px"
      paddingX="12px"
    >
      <chakra.button
        role="button"
        aria-label="Add User"
        sx={{
          border: '1px dashed #C2C2C2',
          rounded: 'full',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          ...buttonSize[size],
        }}
        {...props}
      >
        <Icon as={PlusIcon} sx={iconStyle[size]} />
      </chakra.button>
    </Tooltip>
  );
}

function useActualMax(max: AvatarGroupProps['max'], fallback = 'md') {
  const breakpoint = useBreakpoint({ fallback });

  const breakpoints = typeof max === 'number' ? [] : Object.keys(max);

  return typeof max === 'number'
    ? max
    : breakpoint in max
    ? max[breakpoint]
    : breakpoints.length
    ? max[findClosestBreakpoint(breakpoints, breakpoint)]
    : fallback;
}
