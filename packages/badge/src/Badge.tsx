import { Avatar, chakra } from '@chakra-ui/react';
import * as React from 'react';
import { BadgeAccent, BadgeSize } from './types';
import useBadgeStyle from './useBadgeStyle';
import { clone } from './utils';

export interface BadgeProps {
  size?: BadgeSize;
  label: string;
  accent?: BadgeAccent;
  avatar?: JSX.Element | string;
  leftIcon?: JSX.Element;
  rightIcon?: JSX.Element;
  hasIndicator?: boolean;
  __badgeContainerTestId?: string;
  __badgeLabelTestId?: string;
}

export const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(function Badge(
  {
    label,
    avatar,
    leftIcon,
    rightIcon,
    __badgeContainerTestId,
    __badgeLabelTestId,
    hasIndicator,
    size = 'md',
    accent = 'primary',
    // capture non-jsx passed props
    // like aria-label, etc.
    ...props
  },
  ref,
) {
  const styles = useBadgeStyle({
    size,
    accent,
    hasAvatar: !!avatar,
    hasLeftIcon: !!leftIcon,
    hasRightIcon: !!rightIcon,
    hasIndicator,
  });

  return (
    <chakra.div
      ref={ref}
      role="status"
      {...props}
      sx={styles.container}
      data-testid={__badgeContainerTestId ?? 'hds.badge.container'}
    >
      {/* <!-- Dot --> */}
      {!!hasIndicator && (
        <chakra.div
          role="status"
          aria-label="Online"
          aria-live="polite"
          sx={styles.dot}
        />
      )}

      {/* <!-- Avatar --> */}
      {!!avatar && typeof avatar !== 'string' && <>{clone(avatar, styles.icon)}</>}
      {!!avatar && typeof avatar === 'string' && (
        <Avatar src={avatar} role="img" aria-label="Avatar" sx={styles.icon} />
      )}

      {/* <!-- Left Icon --> */}
      {!!leftIcon && (
        <>
          {clone(leftIcon, {
            ...styles.icon,
            role: 'button',
          })}
        </>
      )}

      {/* <!-- Label --> */}
      <chakra.p sx={styles.label} data-testid={__badgeLabelTestId ?? 'hds.badge-label'}>
        {label}
      </chakra.p>

      {/* <!-- Right Icon --> */}
      {!!rightIcon && (
        <>
          {clone(rightIcon, {
            ...styles.icon,
            role: 'button',
          })}
        </>
      )}
    </chakra.div>
  );
});
