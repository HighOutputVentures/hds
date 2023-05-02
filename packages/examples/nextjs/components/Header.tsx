import { Box } from '@highoutput/hds';
import { IconButton } from '@highoutput/hds-forms';
import { BellIcon } from '@highoutput/hds-icons';
import { SlideoutMenu } from '@highoutput/hds-slideout-menu';
import { Tabs } from '@highoutput/hds-tab';

export function Header() {
  return (
    <Box
      as="header"
      h="65px"
      px={6}
      py={4}
      display="flex"
      alignItems="center"
      borderBottom="1px"
      borderColor="neutrals.200"
    >
      <Box flexGrow={1} />

      <SlideoutMenu
        gutter={{
          top: 65, // header height,
        }}
        renderTrigger={({ isOpen, onToggle }) => (
          <IconButton
            size="md"
            variant="unstyled"
            icon={<BellIcon w={6} h={6} />}
            onClick={onToggle}
            isActive={isOpen}
          />
        )}
      >
        <Box p={8}>
          <Tabs
            items={[
              {
                label: 'All',
                render() {
                  return <Box py={4}>All</Box>;
                },
              },
              {
                label: 'Emails',
                badgeCount: 1,
                render() {
                  return <Box py={4}>Emails</Box>;
                },
              },
              {
                label: 'Others',
                badgeCount: 3,
                render() {
                  return <Box py={4}>Others</Box>;
                },
              },
            ]}
          />
        </Box>
      </SlideoutMenu>
    </Box>
  );
}
