import { chakra } from '@chakra-ui/react';
import * as React from 'react';
import { BadgeGroupSize } from './types';
import useBadgeGroupStyle from './useBadgeGroupStyle';
import { clone } from './utils';

type BadgeGroupAccent = 'primary' | 'gray' | 'error' | 'warning' | 'success';
type BadgeGroupVariant = 'dark' | 'light' | 'default';

export interface BadgeGroupProps {
  size?: BadgeGroupSize;
  accent?: BadgeGroupAccent;
  variant?: BadgeGroupVariant;
  icon?: JSX.Element;
  title: string;
  description: string;
  descriptionFirst?: boolean;
  __badgeGroupContainerTestId?: string;
  __badgeGroupTitleTestId?: string;
  __badgeGroupDescriptionTestId?: string;
  onClick?(): void;
}

export function BadgeGroup({
  icon,
  title,
  description,
  descriptionFirst,
  onClick,
  size = 'md',
  accent = 'primary',
  variant = 'default',
  __badgeGroupContainerTestId,
  __badgeGroupDescriptionTestId,
  __badgeGroupTitleTestId,
}: BadgeGroupProps) {
  const isReversed = React.useMemo(() => descriptionFirst, [descriptionFirst]);

  const styles = useBadgeGroupStyle({
    size,
    accent,
    variant,
    isReversed,
  });

  return (
    <chakra.div
      role="alert"
      sx={styles.container}
      data-testid={__badgeGroupContainerTestId ?? 'hds.badge-group.container'}
    >
      {!descriptionFirst && (
        <chakra.div
          sx={styles.title}
          data-testid={__badgeGroupTitleTestId ?? 'hds.badge-group.title'}
        >
          {title}
        </chakra.div>
      )}

      <chakra.div
        sx={styles.description}
        data-testid={__badgeGroupDescriptionTestId ?? 'hds.badge-group.description'}
      >
        {description}
        {!descriptionFirst && (
          <chakra.button role="button" onClick={onClick} sx={styles.button}>
            {clone(icon, styles.icon)}
          </chakra.button>
        )}
      </chakra.div>

      {descriptionFirst && (
        <chakra.div
          sx={styles.title}
          data-testid={__badgeGroupTitleTestId ?? 'hds.badge-group.title'}
        >
          {title}
          <chakra.button role="button" onClick={onClick} sx={styles.button}>
            {clone(icon, styles.icon)}
          </chakra.button>
        </chakra.div>
      )}
    </chakra.div>
  );
}
