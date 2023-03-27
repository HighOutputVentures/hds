import {
  Flex,
  Tab as ChakraTab,
  TabList,
  TabPanels,
  Tabs,
  Text,
  useMultiStyleConfig,
} from '@chakra-ui/react';
import React, { ReactNode } from 'react';

export type TabProps = {
  orientation?: 'horizontal' | 'vertical';
  variant?: 'primary' | 'plain' | 'solid-underlined' | 'filled' | 'underlined';
  tabLabel: string[];
  placement?: 'center' | 'left' | 'right';
  tabItems: ReactNode;
  isLazy?: boolean;
  addNotificationCountToTabs?: {
    tab: string;
    count: number;
  }[]; //should be equal to tabLabel\
  size?: 'sm' | 'md';
};

const Tab = React.forwardRef<HTMLDivElement, TabProps>((props, _) => {
  const {
    placement = 'left',
    tabLabel,
    tabItems,
    size = 'sm',
    orientation = 'horizontal',
    isLazy = true,
    variant = 'primary',
    addNotificationCountToTabs,
  } = props;
  const [selectedTab, setSelectedTab] = React.useState(tabLabel[0]);
  const [tabOrientation, setTabOrientation] = React.useState(orientation);

  const styles = useMultiStyleConfig('Tabs', { variant, size });

  const tabPlacement =
    placement === 'center'
      ? 'center'
      : placement === 'right'
      ? 'flex-end'
      : 'flex-start';

  React.useEffect(() => {
    if (variant === 'underlined' || variant === 'solid-underlined') {
      setTabOrientation('horizontal');
    }
  }, [variant, setTabOrientation]);

  const onClickTab = (tab: string) => setSelectedTab(tab);

  return (
    <Flex w="full" h="full">
      <Tabs
        orientation={tabOrientation}
        data-testid="hds.tabs"
        gap="32px"
        isLazy={isLazy}
        w="full"
        h="full"
      >
        <TabList
          gap="4px"
          flexDir={tabOrientation === 'vertical' ? 'column' : 'row'}
          placeContent={tabPlacement}
          data-testid="hds.tab.list"
          sx={styles.tablist}
        >
          {tabLabel?.map((item, idx) => {
            return (
              <ChakraTab
                key={item + idx}
                sx={styles.tab}
                data-testid="hds.tab"
                h="32px"
                onClick={() => onClickTab(item)}
                justifyContent={
                  tabOrientation === 'vertical' ? 'flex-start' : 'center'
                }
                minW={
                  tabOrientation === 'vertical'
                    ? '142px'
                    : addNotificationCountToTabs
                    ? 'auto'
                    : 'auto'
                }
              >
                <Flex align="center" gap={2}>
                  <Text size="label-xs-default">{item}</Text>
                  {addNotificationCountToTabs &&
                    addNotificationCountToTabs.length >= 1 &&
                    addNotificationCountToTabs.map((tabItem, idx) => {
                      return (
                        tabItem.tab.toLowerCase() === item.toLowerCase() && (
                          <Flex
                            key={tabItem.tab + idx}
                            align="center"
                            width="25px"
                            height="24px"
                            justify="center"
                            pt="2px"
                            bgColor={
                              selectedTab === item ? '#D5BCEC' : 'neutrals.100'
                            }
                            borderRadius="full"
                          >
                            <Text
                              size="label-xs-default"
                              color={
                                selectedTab === item
                                  ? '#7224BF'
                                  : 'neutrals.800'
                              }
                            >
                              {tabItem.count}
                            </Text>
                          </Flex>
                        )
                      );
                    })}
                </Flex>
              </ChakraTab>
            );
          })}
        </TabList>
        <TabPanels
          width="auto"
          data-testid="hds.tab.panels"
          height="auto"
          pt={tabOrientation === 'horizontal' ? '32px' : '0'}
        >
          {tabItems}
        </TabPanels>
      </Tabs>
    </Flex>
  );
});

Tab.displayName = 'Tab';

export default Tab;
