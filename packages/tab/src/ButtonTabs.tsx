import {
  SystemStyleObject,
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
};

type Size = 'sm' | 'md';
type Placement = 'center' | 'end' | 'start';

export interface ButtonTabsProps {
  size?: Size;
  items?: Item[];
  /**
   *
   * space between label and panel
   *
   */
  spacing?: string | number;
  fitToBox?: boolean;
  placement?: Placement;
  /**
   *
   * places panel on top
   *
   */
  isInverted?: boolean;
  preferMounted?: boolean;
  _selected?: SystemStyleObject;
}

export default function ButtonTabs({
  size = 'sm',
  items = [],
  spacing,
  fitToBox,
  placement,
  isInverted,
  preferMounted,
  _selected = {
    color: '#344054',
    bgColor: '#F9FAFB',
  },
}: ButtonTabsProps) {
  const styles = useMultiStyleConfig('Tabs', { variant: 'unstyled', size });

  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const tablist = (
    <TabList
      border="1px solid #D0D5DD"
      borderRadius={2}
      width={fitToBox ? 'full' : 'fit-content'}
      overflow="hidden"
      marginBottom={spacing}
      sx={styles.tablist}
      {...(placement === 'end' && { ml: 'auto' })}
      {...(placement === 'start' && { mr: 'auto' })}
      data-testid="hds.tab-button.list"
    >
      {items?.map(({ label }, idx) => {
        return (
          <Tab
            key={uuid()}
            _selected={_selected}
            data-testid="hds.tab-button.tab"
            padding={'10px 16px'}
            sx={size === 'md' ? styles.tab : undefined}
            maxW={'auto'}
            width={fitToBox ? '100%' : 'auto'}
            borderRight={idx === items.length - 1 ? 'none' : '1px solid #D0D5DD'}
          >
            <Text size="label-xs-default">{label}</Text>
          </Tab>
        );
      })}
    </TabList>
  );

  const panels = (
    <TabPanels data-testid="hds.tab-button.tab.panel">
      {items.map(({ render: Component }) => (
        <TabPanel key={uuid()}>
          <Component />
        </TabPanel>
      ))}
    </TabPanels>
  );

  return (
    <Tabs
      variant="unstyled"
      width="full"
      height="full"
      align={placement}
      index={selectedIndex}
      onChange={setSelectedIndex}
      data-testid="hds.tab-button.tabs"
      {...(!preferMounted && {
        isLazy: true,
        lazyBehavior: 'unmount',
      })}
    >
      {!isInverted && (
        <React.Fragment>
          {tablist}
          {panels}
        </React.Fragment>
      )}

      {isInverted && (
        <React.Fragment>
          {panels}
          {tablist}
        </React.Fragment>
      )}
    </Tabs>
  );
}
