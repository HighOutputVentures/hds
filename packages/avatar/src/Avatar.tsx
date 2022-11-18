import { Avatar, AvatarBadge, Box, Icon, useMultiStyleConfig } from '@chakra-ui/react';
import { SystemStyleObject } from '@chakra-ui/styled-system';
import * as React from 'react';
import UserIcon from './icons/UserIcon';
import VerifiedIcon from './icons/VerifiedIcon';
import { omit } from './utils';

export type Clickable =
  | { clickable?: false }
  | {
      clickable: true;
      onClick(): void;
    };

export type Badgeable =
  | { badge?: false }
  | {
      badge: true;
      badgeIcon(props: React.ComponentProps<'svg'>): JSX.Element;
    };

export type AvatarSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';

export type Breakpoints = 'base' | 'sm' | 'md' | 'lg' | 'xl';

export type AvatarBaseProps = Badgeable &
  Clickable & {
    src?: string;
    name?: string;
    size?: AvatarSize | Partial<Record<Breakpoints, AvatarSize>>;
    online?: boolean;
    verified?: boolean;
    __bordered?: boolean;
    __elevated?: boolean;
  };

export type AvatarProps = SystemStyleObject & AvatarBaseProps;

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
      data-bordered={!!__bordered}
      data-elevated={!!__elevated}
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
