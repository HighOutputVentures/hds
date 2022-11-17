import { Avatar, AvatarBadge, Icon } from '@chakra-ui/react';
import { SystemStyleObject } from '@chakra-ui/styled-system';
import * as React from 'react';
import UserIcon from './icons/UserIcon';
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

type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';

type BaseProps = {
  src?: string;
  name?: string;
  size?: Size;
  online?: boolean;
  verified?: boolean;
};

export type AvatarProps = SystemStyleObject & BaseProps & Badgeable & Clickable;

export default function HdsAvatar(props: AvatarProps) {
  const {
    src,
    name,
    size = 'md',
    online,
    variant,
    verified,
    ...p
  } = Object.assign({}, props, { variant: 'hds' } /* force override 👻 */);

  return (
    <Avatar
      variant={variant}
      src={src}
      size={size}
      name={name}
      icon={<Icon as={UserIcon} color="#475467" />}
      /* box-shadow will be based here */
      data-fallback={!src}
      {...(p.clickable && {
        tabIndex: 0,
        onClick: p.onClick,
        /* cursor will be based here */
        'data-clickable': true,
      })}
      sx={{
        ...omit(
          p,
          /* @ts-ignore "Include types which utilizes type guard-ing." */
          'onClick',
          'clickable',
          'badge',
          'badgeIcon',
        ),
      }}
    >
      {online && <AvatarBadge />}
      {verified && <AvatarBadge />}
      {p.badge && <AvatarBadge />}
    </Avatar>
  );
}
