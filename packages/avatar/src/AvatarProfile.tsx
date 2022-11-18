import { AvatarProps } from '@chakra-ui/react';
import * as React from 'react';
import Avatar from './Avatar';
import { ResponsiveSize } from './types';

type AvatarProfileSize = 'sm' | 'md' | 'lg';

export type AvatarProfileProps = Omit<AvatarProps, 'size'> & {
  size?: AvatarProfileSize | ResponsiveSize<AvatarProfileSize>;
};

export default function AvatarProfile(props: AvatarProfileProps) {
  const {} = Object.assign({ size: 'md' }, props);

  return <Avatar {...props} />;
}
