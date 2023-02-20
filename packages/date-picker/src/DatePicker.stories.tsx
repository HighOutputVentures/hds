import { Flex, useDisclosure } from '@chakra-ui/react';
import ThemeProvider from '@highoutput/hds/src/components/ThemeProvider';
import { ComponentMeta, ComponentStory } from '@storybook/react';
//@ts-ignore
import React from 'react';

import { DatePicker } from './DatePicker';
import DatePickerDropdown from './DatePickerDropdown';
import DatePickerModal from './DatePickerModal';
// const avatar = require('../../../../../assets/avatar.png');
export default {
  title: 'Components/DatePicker',
  component: DatePicker,
} as ComponentMeta<typeof DatePicker>;
const MOCKDATA = [
  { date: new Date('2022-9-3'), title: 'appointment', id: '1' },
  { date: new Date('2022-11-25'), title: 'second', id: '3' },
  { date: new Date('2022-9-25'), title: 'doctor', id: '2' },
  { date: new Date('2022-12-6'), title: 'bd', id: '1' },
  { date: new Date('2022-12-23'), title: 'bd', id: '1' },
];
const Template: ComponentStory<typeof DatePicker> = (props) => {
  const { isOpen, onClose } = useDisclosure();
  return (
    <ThemeProvider>
      <Flex alignItems="start" flexDir="row" height={'500px'}>
        <DatePicker {...props} onClose={onClose} isOpen={isOpen} />
      </Flex>
    </ThemeProvider>
  );
};
const ModalTemplate: ComponentStory<typeof DatePicker> = (props) => {
  return (
    <ThemeProvider>
      <Flex alignItems="start" flexDir="row" height={'500px'}>
        <DatePickerModal {...props} />
      </Flex>
    </ThemeProvider>
  );
};
const DropdownTemplate: ComponentStory<typeof DatePicker> = (props) => {
  const { isOpen, onClose } = useDisclosure();
  return (
    <ThemeProvider>
      <Flex alignItems="start" flexDir="row" height={'500px'}>
        <DatePickerDropdown {...props} onClose={onClose} isOpen={isOpen} />
      </Flex>
    </ThemeProvider>
  );
};

export const Default = Template.bind({});
export const Modal = ModalTemplate.bind({});
export const Dropdown = DropdownTemplate.bind({});
Default.args = {
  ...Default.args,
  dateEvents: MOCKDATA,
  userId: '1',
  timezone: 'Asia/Manila',
};
Modal.args = {
  dateEvents: MOCKDATA,
  type: 'pre-set ranges',
  userId: '1',
  timezone: 'Asia/Manila',
};
Dropdown.args = {
  dateEvents: MOCKDATA,
  type: 'pre-set ranges',
  userId: '1',
  timezone: 'America/Los_Angeles',
};
