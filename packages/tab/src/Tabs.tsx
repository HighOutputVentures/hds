import {
  Flex,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  useMultiStyleConfig,
} from '@chakra-ui/react';
import * as React from 'react';
import { v4 as uuid } from 'uuid';

type Item = {
  label: string;
  render(): JSX.Element | null;
  badgeCount?: number | string;
};

type Size = 'sm' | 'md';
type Variant = 'primary' | 'filled' | 'plain' | 'solid-underlined' | 'underlined';
type Placement = 'left' | 'right' | 'center';
type Orientation = 'vertical' | 'horizontal';

export type TabsProps = {
  size?: Size;
  items?: Item[];
  variant?: Variant;
  placement?: Placement;
  orientation?: Orientation;
  preferMounted?: boolean;
};

/**
 *
 * @example
 * <Tabs
 *  items={[
 *    {
 *      label: 'Label 1',
 *      render(){
 *        return <div>One</div>
 *      }
 *    },
 *    {
 *      label: 'Label 2',
 *      render(){
 *        return <div>Two</div>
 *      }
 *    },
 *    {
 *      label: 'Label 3',
 *      render(){
 *        return <div>Three</div>
 *      }
 *      badgeCount: 4
 *    },
 *  ]}
 * />
 *
 */
export default function HdsTabs({
  size,
  items,
  variant,
  placement,
  orientation,
  preferMounted,
}: TabsProps) {
  const styles = useMultiStyleConfig('Tabs', { variant, size });

  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const doNotVerticalOrient = variant === 'underlined' || variant === 'solid-underlined';
  const modifiedOrientation = doNotVerticalOrient ? 'horizontal' : orientation;

  return (
    <Tabs
      orientation={orientation}
      gap={8}
      width="full"
      height="full"
      index={selectedIndex}
      onChange={setSelectedIndex}
      data-testid="hds.tabs"
      {...(!preferMounted && {
        isLazy: true,
        lazyBehavior: 'unmount',
      })}
    >
      <TabList
        gap={1}
        flexDir={modifiedOrientation === 'vertical' ? 'column' : 'row'}
        placeContent={placementToPlaceContent(placement)}
        sx={styles.tablist}
        data-testid="hds.tabs.tablist"
      >
        {items?.map(({ label, badgeCount }, ...args) => (
          <Tab
            key={uuid()}
            height={8}
            minWidth={modifiedOrientation === 'vertical' ? '142px' : 'auto'}
            justifyContent={modifiedOrientation === 'vertical' ? 'flex-start' : 'center'}
            transition="colors 300ms ease-in-out"
            sx={styles.tab}
            data-testid="hds.tabs.tab"
          >
            <Flex align="center" gap={2}>
              <Text size="label-xs-default" whiteSpace="nowrap" data-testid="hds.tabs.tab.label">
                {label}
              </Text>

              {badgeCount && <Badge count={badgeCount} isSelected={args[0] === selectedIndex} />}
            </Flex>
          </Tab>
        ))}
      </TabList>

      <TabPanels
        width="auto"
        height="auto"
        paddingTop={modifiedOrientation === 'horizontal' ? 8 : 0}
        data-testid="hds.tabs.panels"
      >
        {items?.map(({ render: Component }) => (
          <TabPanel key={uuid()} data-testid="hds.tabs.panels.panel">
            <Component />
          </TabPanel>
        ))}
      </TabPanels>
    </Tabs>
  );
}

function placementToPlaceContent(placement?: Placement) {
  switch (placement) {
    case 'center':
      return 'center';
    case 'right':
      return 'flex-end';
    default:
      return 'flex-start';
  }
}

type BadgeProps = {
  count: string | number;
  isSelected?: boolean;
};

function Badge({ count, isSelected }: BadgeProps) {
  return (
    <Flex
      height={5}
      minWidth={5}
      paddingX={1.5}
      color="neutrals.800"
      bgColor="neutrals.100"
      alignItems="center"
      justifyContent="center"
      borderRadius="lg"
      {...(isSelected && {
        color: '#7224BF',
        bgColor: '#D5BCEC',
      })}
      transition="colors 300ms ease-in-out"
    >
      <Text size="label-xs-default" color="inherit" data-testid="hds.tabs.tab.badge">
        {count}
      </Text>
    </Flex>
  );
}
