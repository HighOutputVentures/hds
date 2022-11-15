import {
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import ThemeProvider from '../../../components/ThemeProvider';
import text from './text';

export default {
  title: 'System Design/Text System',
  component: Text,
} as ComponentMeta<typeof Text>;
interface TextRowProps {
  size: string;
  label: string;
}

const TextRow: React.FC<TextRowProps> = ({ size, label }) => {
  return (
    <Tr>
      <Td>
        &nbsp;
        <Text size="paragraph-md-bold">{size}</Text>
      </Td>
      <Td>
        &nbsp;
        <Text size={size}>{label}</Text>
      </Td>
    </Tr>
  );
};

const Template: ComponentStory<typeof Text> = () => (
  <ThemeProvider>
    <TableContainer>
      <Table variant="striped">
        <Thead>
          <Tr>
            <Th>
              <Text>Text Size</Text>
            </Th>
            <Th>
              <Text>Result</Text>
            </Th>
          </Tr>
        </Thead>
        <Tbody>
          {Object.keys(text.sizes).map((key) => (
            <TextRow size={key} label={unkebab(key)} />
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  </ThemeProvider>
);

function unkebab(subject: string) {
  return subject.replace(/\-/g, ' ');
}

export const Default = Template.bind({});

Default.args = {
  ...Default.args,
};
