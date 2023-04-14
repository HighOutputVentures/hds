import { Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react';
import * as React from 'react';
import { v4 as uuid } from 'uuid';

type Item = {
  label: string;
  render(): JSX.Element | null;
};

type Placement = 'center' | 'end' | 'start';

export interface ButtonTabsProps {
  items?: Item[];
  isFitted?: boolean;
  placement?: Placement;
  /**
   *
   * places panel on top
   *
   */
  isInverted?: boolean;
  preferMounted?: boolean;
}

export default function ButtonTabs({
  items = [],
  isFitted,
  placement = 'start',
  isInverted,
  preferMounted,
}: ButtonTabsProps) {
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const tablist = React.useMemo(() => {
    return (
      <TabList justifyContent={placement} data-testid="hds.button-tabs.list">
        {items?.map(({ label }) => {
          return (
            <Tab
              key={uuid()}
              color="Gray.800"
              paddingY="10px"
              paddingX="16px"
              borderStyle="solid"
              borderColor="Gray.300"
              borderTopWidth="1px"
              borderBottomWidth="1px"
              borderRightWidth="1px"
              fontSize="14px"
              lineHeight="20px"
              fontWeight="medium"
              whiteSpace="nowrap"
              _first={{
                borderLeftWidth: '1px',
                roundedLeft: '6px',
              }}
              _last={{
                roundedRight: '6px',
              }}
              _selected={{
                bgColor: 'Gray.50',
              }}
              data-testid="hds.button-tabs.tab"
            >
              {label}
            </Tab>
          );
        })}
      </TabList>
    );
  }, [items, placement]);

  const panels = React.useMemo(() => {
    return (
      <TabPanels padding={0} data-testid="hds.button-tabs.panels">
        {items.map(({ render: Component }) => (
          <TabPanel key={uuid()} padding={0} data-testid="hds.button-tabs.panels.panel">
            <Component />
          </TabPanel>
        ))}
      </TabPanels>
    );
  }, [items]);

  return (
    <Tabs
      variant="unstyled"
      width="full"
      height="full"
      margin={0}
      padding={0}
      isFitted={isFitted}
      index={selectedIndex}
      onChange={setSelectedIndex}
      {...(!preferMounted && {
        isLazy: true,
        lazyBehavior: 'unmount',
      })}
      data-testid="hds.button-tabs.tabs"
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
