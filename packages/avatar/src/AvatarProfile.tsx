import { AvatarProps } from '@chakra-ui/react';
import * as React from 'react';
import Avatar from './Avatar';

export type AvatarProfileProps = Omit<AvatarProps, 'size'> & {
  size?: 'sm' | 'md' | 'lg';
};

export default function AvatarProfile(props: AvatarProfileProps) {
  return <Avatar {...props} />;
}
