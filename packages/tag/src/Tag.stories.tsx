import { Box, extendTheme, HStack, VStack } from '@chakra-ui/react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import * as React from 'react';
import { theme, ThemeProvider } from '../../hds/src';
import AUIcon from './examples/AUIcon';
import Tag from './Tag';
import withTag from './withTag';

export default {
  title: 'Components/Tag',
  component: Tag,
} as ComponentMeta<typeof Tag>;

const Template: ComponentStory<typeof Tag> = () => {
  return (
    <ThemeProvider theme={extendTheme(theme, withTag())}>
      <VStack align="start" spacing={8}>
        <Box>
          <HStack spacing={4}>
            <Tag size="sm" label="Label" />
            <Tag size="md" label="Label" />
            <Tag size="lg" label="Label" />
          </HStack>
        </Box>

        <Box>
          <HStack spacing={4}>
            <Tag size="sm" label="Label" indicator closable onClose={() => {}} />
            <Tag size="md" label="Label" indicator closable onClose={() => {}} />
            <Tag size="lg" label="Label" indicator closable onClose={() => {}} />
          </HStack>
        </Box>
        <Box>
          <HStack spacing={4}>
            <Tag
              size="sm"
              label="Label"
              avatar={'https://i.pravatar.cc/250?u=1'}
              closable
              onClose={() => {}}
            />
            <Tag
              size="md"
              label="Label"
              avatar={'https://i.pravatar.cc/250?u=2'}
              closable
              onClose={() => {}}
            />
            <Tag
              size="lg"
              label="Label"
              avatar={'https://i.pravatar.cc/250?u=3'}
              closable
              onClose={() => {}}
            />
          </HStack>
        </Box>
        <Box>
          <HStack spacing={4}>
            <Tag size="sm" label="Label" icon={AUIcon} closable onClose={() => {}} />
            <Tag size="md" label="Label" icon={AUIcon} closable onClose={() => {}} />
            <Tag size="lg" label="Label" icon={AUIcon} closable onClose={() => {}} />
          </HStack>
        </Box>

        <Box>
          <HStack spacing={4}>
            <Tag size="sm" label="Label" badge badgeCount={5} />
            <Tag size="md" label="Label" badge badgeCount={5} />
            <Tag size="lg" label="Label" badge badgeCount={5} />
          </HStack>
        </Box>

        <Box>
          <HStack spacing={4}>
            <Tag size="sm" label="Label" checkbox checked onCheck={() => {}} />
            <Tag size="md" label="Label" checkbox checked onCheck={() => {}} />
            <Tag size="lg" label="Label" checkbox checked onCheck={() => {}} />
          </HStack>
        </Box>

        <Box>
          <HStack spacing={4}>
            <Tag size="sm" label="Label" icon={AUIcon} checkbox checked onCheck={() => {}} />
            <Tag size="md" label="Label" icon={AUIcon} checkbox checked onCheck={() => {}} />
            <Tag size="lg" label="Label" icon={AUIcon} checkbox checked onCheck={() => {}} />
          </HStack>
        </Box>

        <Box>
          <HStack spacing={4}>
            <Tag
              size="sm"
              label="Label"
              avatar={'https://i.pravatar.cc/250?u=1'}
              checkbox
              checked
              onCheck={() => {}}
            />
            <Tag
              size="md"
              label="Label"
              avatar={'https://i.pravatar.cc/250?u=2'}
              checkbox
              checked
              onCheck={() => {}}
            />
            <Tag
              size="lg"
              label="Label"
              avatar={'https://i.pravatar.cc/250?u=3'}
              checkbox
              checked
              onCheck={() => {}}
            />
          </HStack>
        </Box>
      </VStack>
    </ThemeProvider>
  );
};

export const Default = Template.bind({});

Default.args = {};
