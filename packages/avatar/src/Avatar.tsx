import { As, Avatar as ChakraAvatar, AvatarBadge, Box, Icon } from '@chakra-ui/react';
import * as React from 'react';
import { useStyles } from './hooks';
import UserIcon from './icons/UserIcon';
import VerifiedIcon from './icons/VerifiedIcon';
import { Size } from './types';

export interface AvatarProps {
  src?: string;
  name?: string;
  size?: Size;
  isOnline?: boolean;
  hasOnlineIndicator?: boolean;
  badgeIcon?: As;
  isVerified?: boolean;
  isElevated?: boolean;
  isBordered?: boolean;
  onClick?(): void;
  __testId?: string;
  __zIndex?: number | string;
}

export default React.forwardRef<HTMLSpanElement, AvatarProps>(function Avatar(
  props,
  ref,
) {
  const {
    src,
    name,
    size = 'md',
    hasOnlineIndicator,
    isOnline,
    isBordered,
    isElevated,
    badgeIcon,
    isVerified,
    onClick,
    __testId,
    __zIndex,
    ...others
  } = props;

  const styles = useStyles({ size });
  const isClickable = !!onClick;
  const hasBadgeIcon = !!badgeIcon;

  return (
    <ChakraAvatar
      ref={ref}
      sx={{
        ...styles.avatar({
          isBordered,
          isElevated,
          isClickable,
        }),
        /*
         * Please see AvatarGroup why we use this
         */
        zIndex: __zIndex,
      }}
      src={src}
      size={size}
      name={name}
      icon={<Icon as={UserIcon} color="#475467" />}
      styleConfig={{ sizes: {} }}
      /*
       * We need to accept props passed internally
       * AvatarGroup won't work without this
       */
      {...others}
      /*
       * Clickable avatars
       */
      {...(isClickable && {
        role: 'button',
        tabIndex: 0,
        onClick,
      })}
      data-testid={__testId}
    >
      {!!hasOnlineIndicator && <AvatarBadge sx={styles.badge({ isOnline })} />}

      {!!isVerified && <Icon as={VerifiedIcon} sx={styles.badgeVerified()} />}

      {!!hasBadgeIcon && (
        <Box sx={styles.badgeCustom()}>
          <Icon as={badgeIcon} />
        </Box>
      )}
    </ChakraAvatar>
  );
});
