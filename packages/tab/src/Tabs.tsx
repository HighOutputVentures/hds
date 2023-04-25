import {
  Box,
  Flex,
  SystemStyleObject,
  Tab,
  TabIndicator,
  TabList,
  TabPanel,
  TabPanels,
  Tabs as ChakraTabs,
} from '@chakra-ui/react';
import * as React from 'react';
import { v4 as uuid } from 'uuid';

type Item = {
  label: string;
  render(): JSX.Element | null;
  badgeCount?: number | string;
};

type Variant = 'solid' | 'plain' | 'underlined';
type Placement = 'start' | 'end' | 'center';
type Orientation = 'vertical' | 'horizontal';

export type TabsProps = {
  items?: Item[];
  variant?: Variant;
  isFitted?: boolean;
  placement?: Placement;
  orientation?: Orientation;
  preferMounted?: boolean;
};

export default function Tabs({
  items,
  variant = 'underlined',
  isFitted,
  placement = 'start',
  orientation = 'horizontal',
  preferMounted,
}: TabsProps) {
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  /*
   * force "horizontal" orientation if variant is "underlined"
   */
  orientation =
    variant === 'underlined' && orientation === 'vertical' ? 'horizontal' : orientation;

  const styles = useStyles({
    variant,
    placement,
    orientation,
  });

  return (
    <ChakraTabs
      orientation={orientation}
      variant="unstyled"
      isFitted={isFitted}
      index={selectedIndex}
      onChange={setSelectedIndex}
      /**
       *
       * User opts to prerender tab contents
       *
       */
      {...(!preferMounted && {
        isLazy: true,
        lazyBehavior: 'unmount',
      })}
      sx={styles.tabs}
      data-testid="hds.tabs"
    >
      <TabList sx={styles.tablist} data-testid="hds.tabs.tablist">
        {items?.map(({ label, badgeCount }, ...args) => (
          <Tab key={uuid()} sx={styles.tab} data-testid="hds.tabs.tab">
            <Box flexGrow={1} textAlign="start">
              {label}
            </Box>

            {badgeCount && (
              <Badge
                count={badgeCount}
                variant={variant}
                isSelected={args[0] === selectedIndex}
              />
            )}
          </Tab>
        ))}
      </TabList>

      {variant === 'underlined' && <TabIndicator sx={styles.tabIndicator} />}

      <TabPanels sx={styles.tabPanels} data-testid="hds.tabs.panels">
        {items?.map(({ render: Component }) => (
          <TabPanel key={uuid()} padding={0} data-testid="hds.tabs.panels.panel">
            <Component />
          </TabPanel>
        ))}
      </TabPanels>
    </ChakraTabs>
  );
}

type UseStylesArg = {
  variant: Variant;
  placement: Placement;
  orientation: Orientation;
};

type UseStylesReturn = {
  tab: SystemStyleObject;
  tabs: SystemStyleObject;
  tablist: SystemStyleObject;
  tabPanels: SystemStyleObject;
  tabIndicator: SystemStyleObject;
};

function useStyles(arg: UseStylesArg) {
  const styles = React.useMemo<UseStylesReturn>(
    () => ({
      tabs: {
        width: 'full',
        margin: '0px',
        padding: '0px',
      },
      tablist: {
        gap: '16px',
        padding: '0px',
        placeContent: placementToPlaceContent(arg.placement),

        ...(arg.orientation === 'vertical' && {
          flexDirection: 'column',
        }),

        ...(arg.orientation === 'horizontal' && {
          flexDirection: 'row',
        }),

        ...(arg.variant === 'underlined' && {
          borderBottom: '1px',
          borderColor: 'neutrals.200',
        }),
      },
      tab: {
        color: 'neutrals.600',
        fontSize: '14px',
        lineHeight: '14px',
        letterSpacing: '0.02em',
        transition: 'colors 300ms ease-in-out',
        fontWeight: 'semibold',
        minWidth: 'auto',
        justifyContent: 'center',
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        whiteSpace: 'nowrap',

        _hover: {
          color: 'neutrals.700',
        },

        ...(arg.orientation === 'vertical' && {
          minWidth: '145px',
          justifyContent: 'flex-start',
        }),

        ...(arg.variant === 'plain' && {
          height: '32px',
          rounded: '6px',
          paddingX: '12px',
          paddingY: '8px',
          _selected: {
            color: 'neutrals.800',
            bgColor: 'neutrals.100',
          },
        }),

        ...(arg.variant === 'solid' && {
          height: '32px',
          rounded: '6px',
          paddingX: '12px',
          paddingY: '8px',
          _selected: {
            color: 'brand.primary.700',
            bgColor: 'brand.primary.500',
          },
        }),

        ...(arg.variant === 'underlined' && {
          paddingX: '4px',
          paddingTop: '0px',
          paddingBottom: '16px',
          _selected: {
            color: 'brand.primary.700',
          },

          ...(arg.orientation === 'vertical' && {
            paddingBottom: '0px',
          }),
        }),
      },
      tabIndicator: {
        rounded: 'full',
        bgColor: 'brand.primary.700',

        ...(arg.orientation === 'horizontal' && {
          marginTop: '-1px',
          height: '2px',
        }),

        ...(arg.orientation === 'vertical' && {
          width: '2px',
        }),
      },
      tabPanels: {
        width: 'auto',
        height: 'auto',
        padding: '0px',
      },
    }),
    [arg],
  );

  return styles;
}

function placementToPlaceContent(placement?: Placement) {
  switch (placement) {
    case 'center':
      return 'center';
    case 'end':
      return 'flex-end';
    default:
      return 'flex-start';
  }
}

type BadgeProps = {
  count: string | number;
  variant: Variant;
  isSelected?: boolean;
};

function Badge({ count, variant, isSelected }: BadgeProps) {
  return (
    <Flex
      sx={{
        height: 5,
        minWidth: 5,
        paddingX: 1.5,
        color: 'neutrals.800',
        bgColor: 'neutrals.100',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 'lg',
        transition: 'colors 300ms ease-in-out',
        fontSize: '12px',
        lineHeight: '18px',
        fontWeight: 'medium',

        ...(isSelected && {
          ...(variant === 'plain' && {
            color: 'neutrals.900',
            bgColor: 'neutrals.200',
          }),

          ...(variant === 'solid' && {
            color: 'brand.primary.700',
            bgColor: 'blackAlpha.100',
          }),

          ...(variant === 'underlined' && {
            color: 'brand.primary.700',
            bgColor: 'brand.primary.500',
          }),
        }),
      }}
      data-testid="hds.tabs.tab.badge"
    >
      {count}
    </Flex>
  );
}
