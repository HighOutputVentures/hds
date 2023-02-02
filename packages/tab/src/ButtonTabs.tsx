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
  onChangeHandler?: (e: number) => void;
  placeContent?: ResponsiveValue<Property.PlaceContent>;
  size?: 'sm' | 'md';
  fitToBox?: boolean;
  defaultIndex?: number;
}
const ButtonTabs = (props: ButtonTabsProps) => {
  const {
    tabItems,
    tabLabel,
    placeContent,
    onChangeHandler,
    fitToBox,
    size = 'sm',
    defaultIndex = 1,
    _selected = { background: '#F9FAFB', color: '#344054' },
    gap = '32px',
  } = props;

  const styles = useMultiStyleConfig('Tabs', { variant: 'unstyled', size });
  return (
    <Tabs
      defaultIndex={defaultIndex}
      onChange={(e) => {
        if (onChangeHandler) onChangeHandler(e);
      }}
      variant={'unstyled'}
      w="full"
      height={'full'}
    >
      <TabList
        border={'1px solid #D0D5DD'}
        borderRadius={'8px'}
        width={fitToBox ? '100%' : 'fit-content'}
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
              width={fitToBox ? '100%' : 'auto'}
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
