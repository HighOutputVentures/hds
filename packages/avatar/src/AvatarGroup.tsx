import { AvatarGroup, Box, chakra, HStack, Icon } from '@chakra-ui/react';
import { Tooltip } from '@highoutput/hds-tooltip';
import * as React from 'react';
import { v4 as uuid } from 'uuid';
import Avatar from './Avatar';
import PlusIcon from './icons/PlusIcon';

type Size = 'xs' | 'sm' | 'md';

type Item = {
  src?: string;
  name?: string;
};

export interface AvatarGroupProps<T extends Item> {
  max?: number;
  size?: Size;
  items?: T[];
  hasAddButton?: boolean;
  onAddButtonClick?(items: Item[]): void;
}

export default function HdsAvatarGroup<T extends Item>(props: AvatarGroupProps<T>) {
  const {
    max = 5,
    size = 'md',
    items = [],
    hasAddButton,
    onAddButtonClick = function () {},
  } = props;

  /* Sadly, this is the only way we can modify excessLabel and group's styles */
  const styleConfig = React.useMemo(
    () => ({
      parts: ['group', 'excessLabel'],
      sizes: {
        xs: {
          excessLabel: {
            width: '24px',
            height: '24px',
            fontSize: '12px',
            lineHeight: '18px',
          },
        },
        sm: {
          excessLabel: {
            width: '32px',
            height: '32px',
            fontSize: '14px',
            lineHeight: '20px',
          },
        },
        md: {
          excessLabel: {
            width: '40px',
            height: '40px',
            fontSize: '16px',
            lineHeight: '24px',
          },
        },
      },
      baseStyle: {
        excessLabel: {
          color: '#475467',
          bgColor: '#F9FAFB',
          border: '2px solid #FFFFFF',
          fontWeight: 'medium',
          zIndex: items.length + 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        },
        group: {},
      },
    }),
    [items],
  );

  return (
    <HStack spacing="8px">
      <Box>
        <AvatarGroup
          max={max}
          size={size}
          spacing={{ xs: '-4px', sm: '-8px', md: '-12px' }[size]}
          styleConfig={styleConfig}
          data-testid="hds.avatar-group"
        >
          {items.map(({ src, name }, index) => (
            <Avatar
              key={uuid()}
              size={size}
              src={src}
              name={name}
              isBordered
              /*
               *
               * Image should be overlapped by the image next to it
               *
               */
              __zIndex={index}
              __testId="hds.avatar-group.avatar"
            />
          ))}
        </AvatarGroup>
      </Box>

      {hasAddButton && (
        <Tooltip label="Add user" hasArrow>
          <chakra.button
            role="button"
            aria-label="Add User"
            data-testid="hds.avatar-group.controls.add"
            onClick={() => onAddButtonClick(items)}
            sx={{
              border: '1px dashed #C2C2C2',
              rounded: 'full',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#525252',

              ...(size === 'xs' && { width: '24px', height: '24px' }),
              ...(size === 'sm' && { width: '32px', height: '32px' }),
              ...(size === 'md' && { width: '40px', height: '40px' }),
            }}
          >
            <Icon
              as={PlusIcon}
              sx={{
                ...(size === 'xs' && { width: '16px', height: '16px' }),
                ...(size === 'sm' && { width: '16px', height: '16px' }),
                ...(size === 'md' && { width: '20px', height: '20px' }),
              }}
            />
          </chakra.button>
        </Tooltip>
      )}
    </HStack>
  );
}
