import React, { ReactNode } from 'react';
import {
  Flex,
  Text,
  Tabs,
  Tab as ChakraTab,
  TabList,
  TabPanels,
  useMultiStyleConfig,
} from '@chakra-ui/react';

export type TabProps = {
  orientation?: 'horizontal' | 'vertical';
  variant?: 'primary' | 'plain' | 'solid-underlined' | 'filled' | 'underlined';
  tabLabel: string[];
  placement?: 'center' | 'left' | 'right';
  tabItems: ReactNode;
  size?: 'sm' | 'md' | 'lg';
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
    <Flex w="100vw" h="full">
      <Tabs orientation={tabOrientation} gap="32px" w="full" h="full">
        <TabList
          gap="4px"
          flexDir={tabOrientation === 'vertical' ? 'column' : 'row'}
          placeContent={tabPlacement}
          sx={styles.tablist}
        >
          {tabLabel?.map((item, idx) => {
            return (
              <ChakraTab
                key={item + idx}
                sx={styles.tab}
                justifyContent={
                  tabOrientation === 'vertical' ? 'flex-start' : 'center'
                }
                w={tabOrientation === 'vertical' ? '142px' : 'auto'}
              >
                <Text size="label-xs-default">{item}</Text>
              </ChakraTab>
            );
          })}
        </TabList>
        <TabPanels
          width="auto"
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
