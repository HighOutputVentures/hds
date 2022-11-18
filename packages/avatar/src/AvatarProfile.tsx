import * as React from 'react';
import Avatar, { AvatarBaseProps } from './Avatar';
import { useActualSize } from './hooks';
import { ResponsiveSize } from './types';

type AvatarProfileSize = 'sm' | 'md' | 'lg';

type AvatarLimitedProps = Pick<AvatarBaseProps, 'src' | 'name' | 'verified'>;

export type AvatarProfileProps = AvatarLimitedProps & {
  size?: AvatarProfileSize | ResponsiveSize<AvatarProfileSize>;
};

export default function AvatarProfile(props: AvatarProfileProps) {
  const { size, ...others } = Object.assign({ size: 'md' }, props);

  const actualSize = useActualSize(size);
  const psuedoSize = { sm: '3xl', md: '4xl', lg: '5xl' } as const;

  return <Avatar size={psuedoSize[actualSize]} __elevated __bordered {...others} />;
}
