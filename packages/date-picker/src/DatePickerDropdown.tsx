import { CalendarIcon } from '@chakra-ui/icons';
import {
  Button,
  Menu,
  MenuButton,
  MenuList,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import moment from 'moment';
import React from 'react';

import { dateInfoProps, DatePicker } from './DatePicker';
export interface DatePickerDropdownProps {
  type?: 'pre-set ranges' | 'dual dates' | 'single date';
  dateEvents?: Array<{ date: Date; title: string; id: string }>;
  userId?: string;

  onClose: () => void;
  isOpen: boolean;
  onApplyDate?: (props: dateInfoProps['info']) => void;
  timezone: string;
}
const DatePickerDropdown = (props: DatePickerDropdownProps) => {
  const { onApplyDate, dateEvents, timezone, type, userId } = props;
  const { isOpen, onClose, onOpen } = useDisclosure();
  const [selectedDate, setSelectedDate] = React.useState<dateInfoProps['info']>(
    []
  );

  return (
    <Menu isOpen={isOpen} onClose={onClose}>
      <MenuButton
        as={Button}
        onClick={onOpen}
        leftIcon={<CalendarIcon />}
        bg={'white'}
        color="black"
        border="1px solid #D6D6D6"
        boxShadow={'0px 1px 2px rgba(16, 24, 40, 0.05)'}
        borderRadius={'8px'}
        _hover={{ bg: 'none' }}
      >
        {selectedDate.length === 0 && 'Select Date'}
        {selectedDate.length >= 1 && (
          <Text as="span">
            {moment(
              `${selectedDate[0]?.year}-${selectedDate[0]?.month}-${selectedDate[0]?.day}`
            ).format('ll')}
          </Text>
        )}
        {selectedDate.length === 2 && <Text as="span"> {' – '}</Text>}
        {selectedDate.length === 2 && (
          <Text as="span">
            {moment(
              `${selectedDate[1]?.year}-${selectedDate[1]?.month}-${selectedDate[1]?.day}`
            ).format('ll')}
          </Text>
        )}
      </MenuButton>
      <MenuList
        bg="none"
        w={'100%'}
        height={'100%'}
        border="none"
        data-testid={'hds.dropdown-datepicker'}
      >
        <DatePicker
          dateEvents={dateEvents}
          type={type}
          isOpen={true}
          onClose={onClose}
          userId={userId}
          timezone={timezone}
          onApplyDate={(d) => {
            setSelectedDate(d);
            onApplyDate;
          }}
        />
      </MenuList>
    </Menu>
  );
};

export default DatePickerDropdown;
