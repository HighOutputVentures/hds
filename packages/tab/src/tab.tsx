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
  size?: 'sm' | 'md';
};

const Tab = React.forwardRef<HTMLDivElement, TabProps>((props, _) => {
  const {
    placement = 'left',
    tabLabel,
    tabItems,
    size = 'sm',
    orientation = 'horizontal',
    variant = 'primary',
  } = props;

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

  return (
    <Flex w="full" h="full">
      <Tabs orientation={tabOrientation} data-testid="hds.tabs" gap="32px" w="full" h="full">
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
                justifyContent={
                  tabOrientation === 'vertical' ? 'flex-start' : 'center'
                }
                minW={tabOrientation === 'vertical' ? '142px' : 'auto'}
              >
                <Text size="label-xs-default">{item}</Text>
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
