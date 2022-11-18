import { AvatarGroup, Box } from '@chakra-ui/react';
import * as React from 'react';
import { useActualSize } from './hooks';

type AvatarGroupSize = 'xs' | 'sm' | 'md';

type Includable = 'plus' | /** NOT implemented */ 'minus';

export type AvatarGroupProps = {
  max?: number;
  size?: AvatarGroupSize;
  include?: Includable[];
};

export default function HdsAvatarGroup(props: React.PropsWithChildren<AvatarGroupProps>) {
  const { max, size, children, include, ...p } = Object.assign({ size: 'md' }, props, {
    variant: 'hds',
  });

  const actualSize = useActualSize(size);

  const Component = () => {
    return (
      <AvatarGroup
        variant="hds"
        max={max}
        size={size}
        spacing={
          {
            xs: '-4px',
            sm: '-8px',
            md: '-12px',
          }[actualSize]
        }
        {...p}
      >
        {React.Children.map(children, (child, zIndex) => {
          if (!React.isValidElement(child)) return null;

          return React.cloneElement<Record<string, any>>(child, {
            size,
            zIndex,
            __bordered: true,
          });
        })}
      </AvatarGroup>
    );
  };

  if (!include) return <Component />;

  return (
    <Box>
      <Component />
    </Box>
  );
}
