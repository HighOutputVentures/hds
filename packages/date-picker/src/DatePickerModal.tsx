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
import React, { Fragment, ReactNode, useMemo } from 'react';
import { dateInfoProps, DatePicker } from './DatePicker';

type RenderChildren = (context: {
  value: dateInfoProps['info'];
  isOpen: boolean;
  onOpen(): void;
  onClose(): void;
  onToggle(): void;
}) => ReactNode;

export interface DatePickerModalProps {
  type?: 'pre-set ranges' | 'dual dates' | 'single date';
  userId?: string;
  dateEvents?: Array<{ date: Date; title: string; id: string }>;
  onApplyDate?: (props: dateInfoProps['info']) => void;
  timezone?: string;
  children?: RenderChildren;
}

const DatePickerModal = (props: DatePickerModalProps) => {
  const {
    type,
    userId,
    dateEvents,
    onApplyDate,
    timezone = 'Asia/Manila',
    children,
  } = props;

  const { isOpen, onClose, onOpen, onToggle } = useDisclosure();

  const [selectedDate, setSelectedDate] = React.useState<dateInfoProps['info']>(
    []
  );

  const value = useMemo(() => selectedDate, [selectedDate]);

  return (
    <Box data-testid={'hds.modal-datepicker'}>
      {!!children && (
        <Fragment>
          {children({
            value,
            isOpen,
            onOpen,
            onClose,
            onToggle,
          })}
        </Fragment>
      )}

      {!children && (
        <Button
          onClick={onOpen}
          leftIcon={<CalendarIcon />}
          bg={'white'}
          color="black"
          border="1px solid #D6D6D6"
          boxShadow={'0px 1px 2px rgba(16, 24, 40, 0.05)'}
          borderRadius={'8px'}
          _hover={{
            bg: 'none',
          }}
        >
          {selectedDate.length === 0 && 'Select Date'}
          {selectedDate.length >= 1 && <FormattedDate date={selectedDate[0]} />}
          {selectedDate.length >= 2 && <DateSeparator />}
          {selectedDate.length >= 2 && <FormattedDate date={selectedDate[1]} />}
        </Button>
      )}

      <Modal
        size="full"
        isOpen={isOpen}
        onClose={onClose}
        closeOnEsc
        closeOnOverlayClick
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
                isOpen={true}
                onClose={onClose}
                type={type}
                userId={userId}
                timezone={timezone}
                dateEvents={dateEvents}
                onApplyDate={(d) => {
                  setSelectedDate(d);
                  onApplyDate?.(d);
                }}
              />
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};

function DateSeparator() {
  return <Text as="span">&nbsp;&minus;&nbsp;</Text>;
}

function FormattedDate({ date }: { date: dateInfoProps['info'][number] }) {
  return (
    <Text as="span">
      {moment(`${date.year}-${date.month}-${date.day}`).format('ll')}
    </Text>
  );
}

export default DatePickerModal;
