import {
  Box,
  Portal,
  SystemStyleObject,
  Tab,
  TabList,
  TabPanels,
  Tabs,
  Text,
  useMultiStyleConfig,
} from '@chakra-ui/react';
import React, { ReactNode } from 'react';
export interface ButtonTabsProps {
  tabLabel: Array<string>;
  tabItems: ReactNode;
  gap?: string;
  _selected?: SystemStyleObject;
  onChangeHandler?: (e: number) => void;
  placeContent?: 'center' | 'end' | 'start';
  size?: 'sm' | 'md';
  fitToBox?: boolean;
  defaultIndex?: number;
  inverted?: boolean;
}
const ButtonTabs = (props: ButtonTabsProps) => {
  const {
    tabItems,
    tabLabel,
    placeContent,
    onChangeHandler,
    inverted = false,
    fitToBox,
    size = 'sm',
    defaultIndex,
    _selected = { background: '#F9FAFB', color: '#344054' },
    gap = '32px',
  } = props;

  const styles = useMultiStyleConfig('Tabs', { variant: 'unstyled', size });
  const tabListRef = React.useRef(null);
  const tabPanelRef = React.useRef(null);
  return (
    <Tabs
      defaultIndex={defaultIndex || 0}
      onChange={(e) => {
        if (onChangeHandler) onChangeHandler(e);
      }}
      variant={'unstyled'}
      data-testid="hds.tab-button.tabs"
      w="full"
      height={'full'}
      align={placeContent}
    >
      <Portal containerRef={tabListRef}>
        <TabList
          border={'1px solid #D0D5DD'}
          borderRadius={'8px'}
          data-testid="hds.tab-button.list"
          width={fitToBox ? '100%' : 'fit-content'}
          overflow={'hidden'}
          mb={gap}
          sx={styles.tablist}
          {...(placeContent === 'end' && { ml: 'auto' })}
          {...(placeContent === 'start' && { mr: 'auto' })}
        >
          {tabLabel.map((label, idx) => {
            return (
              <Tab
                key={`${label}${idx}`}
                _selected={_selected}
                data-testid="hds.tab-button.tab"
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
      </Portal>
      <Portal containerRef={tabPanelRef}>
        <TabPanels data-testid="hds.tab-button.tab.panel">{tabItems}</TabPanels>
      </Portal>

      <Box ref={inverted ? tabPanelRef : tabListRef} />
      <Box ref={inverted ? tabListRef : tabPanelRef} />
    </Tabs>
  );
};

export default ButtonTabs;
