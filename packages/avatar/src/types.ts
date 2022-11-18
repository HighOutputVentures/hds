export type Breakpoints = 'base' | 'sm' | 'md' | 'lg' | 'xl';
export type ResponsiveSize<T extends string> = Partial<Record<Breakpoints, T>>;

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

export type FreeSize<T> = Omit<T, 'size'>;
