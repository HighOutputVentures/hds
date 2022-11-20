import {
  AvatarGroup,
  chakra,
  HStack,
  Icon,
  SystemStyleObject,
  Tooltip,
  useBreakpoint,
  useMultiStyleConfig,
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
  const { max = 5, size = 'md', children, hasAddButton, onAddButtonClick, ...others } = props;

  const actualMax = useActualMax(max);
  const actualSize = useActualSize(size);

  return (
    <HStack sx={others} spacing="8px" /* retain spacing */>
      <AvatarGroup
        variant="hds"
        max={actualMax}
        size={size}
        spacing={{ xs: '-4px', sm: '-8px', md: '-12px' }[actualSize]}
        aria-label="Group of users"
      >
        {React.Children.map(children, (child, zIndex) => {
          if (!React.isValidElement(child)) return null;

          return React.cloneElement<any>(child, {
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
  const styles = useMultiStyleConfig('AvatarGroupButton', { size });

  return (
    <Tooltip
      variant="hds-avatar"
      hasArrow
      label="Add user"
      placement="top"
      role="tooltip"
      aria-label="Add user"
    >
      <chakra.button role="button" aria-label="Add User" sx={styles.container} {...props}>
        <Icon as={PlusIcon} sx={styles.icon} />
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
