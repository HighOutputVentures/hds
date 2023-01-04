import { CalendarIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import moment from 'moment';
import React from 'react';
import { dateInfoProps, DatePicker } from './DatePicker';
export interface DatePickerModalProps {
  type?: 'pre-set ranges' | 'dual dates' | 'single date';
  dateEvents?: Array<{ date: Date; title: string; id: string }>;
  userId?: string;
  rangeIndicator?: boolean;
  onClose: () => void;
  isOpen: boolean;
  onApplyDate?: (props: dateInfoProps['info']) => void;
  timezone: string;
}
const DatePickerModal = (props: DatePickerModalProps) => {
  const { onApplyDate, dateEvents, timezone, type, userId } = props;
  const { isOpen, onClose, onOpen } = useDisclosure();
  const [selectedDate, setSelectedDate] = React.useState<dateInfoProps['info']>(
    []
  );

  return (
    <Box data-testid={'modal-datepicker'}>
      <Button
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
      </Button>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        size="full"
        onOverlayClick={onClose}
      >
        <ModalOverlay
          bg={'rgba(52, 64, 84, 0.7)'}
          backdropFilter={'blur(8px)'}
        />
        <ModalContent w={'0px'} h={'0px'}>
          <ModalBody background={'none'}>
            <Box
              pos={'absolute'}
              top={'50%'}
              left="50%"
              transform={'translate(-50%,-50%)'}
            >
              <DatePicker
                dateEvents={dateEvents}
                type={type}
                isOpen={true}
                timezone={timezone}
                onClose={onClose}
                userId={userId}
                onApplyDate={(d) => {
                  setSelectedDate(d);
                  onApplyDate;
                }}
              />
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default DatePickerModal;
