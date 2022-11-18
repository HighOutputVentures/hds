import { Avatar, AvatarBadge, Box, Icon, useMultiStyleConfig } from '@chakra-ui/react';
import { SystemStyleObject } from '@chakra-ui/styled-system';
import * as React from 'react';
import UserIcon from './icons/UserIcon';
import VerifiedIcon from './icons/VerifiedIcon';
import { ResponsiveSize } from './types';
import { omit } from './utils';

type Clickable =
  | { clickable?: false }
  | {
      clickable: true;
      onClick(): void;
    };

type Badgeable =
  | { badge?: false }
  | {
      badge: true;
      badgeIcon(props: React.ComponentProps<'svg'>): JSX.Element;
    };

type AvatarSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl';

/* prettier-ignore */
export type AvatarBaseProps = {
  src?: string;
  name?: string;
  size?: AvatarSize | ResponsiveSize<AvatarSize>;
  online?: boolean;
  verified?: boolean;
  /* internals 🤐 */
  __elevated?: boolean;
  __bordered?: boolean;
} & Badgeable 
  & Clickable;

export type AvatarProps = SystemStyleObject & AvatarBaseProps;

/**
 *
 * ### HDS Avatar
 *
 * 💡
 *
 * Please only use the `size`s `2xl` and below.
 * `3xl` and up are only used for profile internally
 * and will be removed in the future.
 * They also does not support `badge` and other stuffs
 *
 */
export default function HdsAvatar(props: AvatarProps) {
  const { src, name, variant, size, __bordered, __elevated, ...p } = Object.assign(
    { size: 'md', ...props },
    { variant: 'hds' },
  );

  const styles = useMultiStyleConfig('Avatar', { size, variant });

  return (
    <Avatar
      variant={variant}
      src={src}
      size={size}
      name={name}
      icon={<Icon as={UserIcon} color="#475467" />}
      data-fallback={!src}
      data-elevated={!!__elevated}
      data-bordered={!!__bordered}
      {...(p.clickable && {
        tabIndex: 0,
        onClick: p.onClick,
        'data-clickable': true,
      })}
      sx={{
        ...omit(
          p,
          'badge',
          'clickable',
          /* @ts-ignore "Include types which utilizes type guard-ing." */
          'onClick',
          'badgeIcon',
        ),
      }}
    >
      {!!p.verified /* <!-- Verified --> */ && <Icon as={VerifiedIcon} sx={styles.verified} />}
      {!!p.online /* <!-- Online --> */ && <AvatarBadge />}
      {!!p.badge /* <!-- Badge --> */ && (
        <Box sx={styles.customIcon}>
          <Icon as={p.badgeIcon} />
        </Box>
      )}
    </Avatar>
  );
}
