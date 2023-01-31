import {
  ResponsiveValue,
  SystemStyleObject,
  Tab,
  TabList,
  TabPanels,
  Tabs,
  Text,
  useMultiStyleConfig,
} from '@chakra-ui/react';
import { Property } from '@storybook/theming/dist/ts3.9/_modules/@emotion-react-node_modules-csstype-index';
import React, { ReactNode } from 'react';
export interface ButtonTabsProps {
  tabLabel: Array<string>;
  tabItems: ReactNode;
  gap?: string;
  _selected?: SystemStyleObject;
  placeContent?: ResponsiveValue<Property.PlaceContent>;
  size?: 'sm' | 'md';
}
const ButtonTabs = (props: ButtonTabsProps) => {
  const {
    tabItems,
    tabLabel,
    placeContent,
    size = 'sm',
    _selected = { background: '#F9FAFB', color: '#344054' },
    gap = '32px',
  } = props;

  console.log(`${size}-${Math.random()}`);

  const styles = useMultiStyleConfig('Tabs', { variant: 'unstyled', size });
  return (
    <Tabs variant={'unstyled'} w="full" height={'full'}>
      <TabList
        key={`${size}-${Math.random()}`}
        border={'1px solid #D0D5DD'}
        borderRadius={'8px'}
        width="fit-content"
        placeContent={placeContent}
        overflow={'hidden'}
        mb={gap}
        sx={styles.tablist}
      >
        {tabLabel.map((label, idx) => {
          return (
            <Tab
              key={`${label}${idx}`}
              _selected={_selected}
              padding={'10px 16px'}
              sx={size === 'md' ? styles.tab : undefined}
              maxW={'auto'}
              borderRight={
                idx === tabLabel.length - 1 ? 'none' : '1px solid #D0D5DD'
              }
            >
              <Text size="label-xs-default">{label}</Text>
            </Tab>
          );
        })}
      </TabList>
      <TabPanels>{tabItems}</TabPanels>
    </Tabs>
  );
};

export default ButtonTabs;
