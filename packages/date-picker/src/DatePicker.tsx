import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  Center,
  Divider,
  Flex,
  Grid,
  GridItem,
  HStack,
  Icon,
  Stack,
  Text,
  Tooltip,
  VStack,
} from '@chakra-ui/react';
import moment, { Moment } from 'moment';
import 'moment-timezone';
import React, { useId } from 'react';

export interface dateInfoProps {
  info: Array<{ day: number; year: number; month: number }>;
}
export interface DatePickerProps {
  type?: 'pre-set ranges' | 'dual dates' | 'single date';
  dateEvents?: Array<{ date: Date; title: string; id: string }>;
  userId?: string;
  onClose: () => void;
  isOpen: boolean;
  onApplyDate?: (
    props: Array<{ day: number; month: number; year: number }>
  ) => void;
  timezone: string;
}

const TimeAdverbials = [
  'Today',
  'Yesterday',
  'This week',
  'Last week',
  'This month',
  'Last month',
  'This year',
  'Last year',
  'All time',
];
const DAYS = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sat', 'Su'];
const month = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const sortRange = (dateRange: dateInfoProps['info']) => {
  const dateRangeCopy = [...dateRange];
  const sorted = dateRangeCopy.sort((a, b) => {
    if (a.year < b.year) return -1;
    if (a.year > b.year) return 1;
    if (a.month < b.month) return -1;
    if (a.month > b.month) return 1;
    if (a.day < b.day) return -1;
    if (a.day > b.day) return 1;
    return 0;
  });
  return sorted;
};
const dateRangeRender = (
  dateRange: any,
  type: 'pre-set ranges' | 'dual dates' | 'single date'
) => {
  const sorted = sortRange(dateRange);

  return (
    <HStack
      spacing={'12px'}
      pb={
        type !== 'pre-set ranges'
          ? '20px'
          : type === 'pre-set ranges'
          ? '0px'
          : '12px'
      }
      w={'full'}
    >
      <Text
        boxShadow={' 0px 1px 2px rgba(16, 24, 40, 0.05)'}
        border={' 1px solid #F0F0F0'}
        borderRadius={'8px'}
        w={
          type === 'single date'
            ? 'full'
            : type === 'dual dates'
            ? '128px'
            : 'auto'
        }
        padding={' 10px 14px'}
        color={sorted[0]?.day ? '#0F0F0F' : '#A3A3A3'}
      >
        {sorted[0]?.month
          ? `${month[sorted[0]?.month - 1].substring(0, 3)} ${
              sorted[0]?.day
            }, ${sorted[0]?.year}`
          : 'Select Date'}
      </Text>

      {(type === 'pre-set ranges' || type === 'dual dates') && (
        <>
          <Text w={'8px'} fontSize="16px" color="#667085">
            –
          </Text>
          <Text
            boxShadow={' 0px 1px 2px rgba(16, 24, 40, 0.05)'}
            border={' 1px solid #F0F0F0'}
            borderRadius={'8px'}
            padding={' 10px 14px'}
            w={type === 'dual dates' ? '128px' : 'auto'}
            color={sorted[1]?.day ? '#0F0F0F' : '#A3A3A3'}
          >
            {sorted[1]?.month
              ? `${month[sorted[1]?.month - 1].substring(0, 3)} ${
                  sorted[1]?.day
                }, ${sorted[1]?.year}`
              : 'Select Date'}
          </Text>
        </>
      )}
      {type === 'single date' && (
        <Center
          border="1px solid #D6D6D6"
          p={'10px 16px'}
          textAlign={'center'}
          fontSize={'18px'}
          fontWeight={'500'}
          borderRadius={'8px'}
          boxShadow={'0px 1px 2px rgba(16, 24, 40, 0.05)'}
        >
          Today
        </Center>
      )}
    </HStack>
  );
};
export const DatePicker = (props: DatePickerProps) => {
  const {
    type = 'pre-set ranges',
    dateEvents,
    userId,
    onApplyDate,
    onClose,
    timezone,
  } = props;
  const [dateRange, setDateRange] = React.useState<dateInfoProps['info']>([]);
  const [adverbial, setAdverbial] = React.useState('');
  const today = moment.tz(timezone);

  React.useEffect(() => {
    if (adverbial === 'Last week') {
      const from = today.clone().subtract(7, 'days');

      setDateRange([
        {
          day: from.get('date'),
          month: from.get('month') + 1,
          year: from.get('year'),
        },
        {
          day: today.get('date'),
          month: today.get('month') + 1,
          year: today.get('year'),
        },
      ]);
    }
    if (adverbial === 'Today') {
      setDateRange([
        {
          day: today.get('date'),
          month: today.get('month') + 1,
          year: today.get('year'),
        },
        {
          day: today.get('date'),
          month: today.get('month') + 1,
          year: today.get('year'),
        },
      ]);
    }
    if (adverbial === 'Yesterday') {
      const from = today.clone().subtract(1, 'days');
      setDateRange([
        {
          day: from.get('date'),
          month: from.get('month') + 1,
          year: from.get('year'),
        },
        {
          day: today.get('date'),
          month: today.get('month') + 1,
          year: today.get('year'),
        },
      ]);
    }
    if (adverbial === 'This week') {
      const from = today.clone().add(7, 'days');
      setDateRange([
        {
          day: today.get('date'),
          month: today.get('month') + 1,
          year: today.get('year'),
        },
        {
          day: from.get('date'),
          month: from.get('month') + 1,
          year: from.get('year'),
        },
      ]);
    }
    if (adverbial === 'This month') {
      setDateRange([
        {
          day: today.startOf('month').date(),
          month: today.get('month') + 1,
          year: today.get('year'),
        },
        {
          day: today.endOf('month').date(),
          month: today.get('month') + 1,
          year: today.get('year'),
        },
      ]);
    }
    if (adverbial === 'Last month') {
      setDateRange([
        {
          day: today.clone().date(0).startOf('month').date(),
          month: today.clone().date(0).get('month') + 1,
          year: today.clone().date(0).get('year'),
        },
        {
          day: today.clone().date(0).endOf('month').date(),
          month: today.clone().date(0).get('month') + 1,
          year: today.clone().date(0).get('year'),
        },
      ]);
    }
    if (adverbial === 'This year') {
      setDateRange([
        {
          day: today.clone().month(0).startOf('month').date(),
          month: 1,
          year: today.clone().month(0).get('year'),
        },
        {
          day: today.clone().month(11).endOf('month').date(),
          month: 12,
          year: today.clone().month(11).get('year'),
        },
      ]);
    }
    if (adverbial === 'Last year') {
      setDateRange([
        {
          day: today
            .clone()
            .subtract(1, 'year')
            .month(0)
            .startOf('month')
            .date(),
          month: 1,
          year: today.clone().subtract(1, 'year').month(0).get('year'),
        },
        {
          day: today.clone().subtract(1, 'year').endOf('month').date(),
          month: 12,
          year: today.clone().subtract(1, 'year').get('year'),
        },
      ]);
    }
  }, [adverbial]);

  return (
    <Flex
      border="1px solid #F2F4F7"
      boxShadow={
        '0px 20px 24px -4px rgba(16, 24, 40, 0.08), 0px 8px 8px -4px rgba(16, 24, 40, 0.03)'
      }
      w={'full'}
      maxWidth={type === 'pre-set ranges' ? '850px' : '328px'}
      minWidth={type === 'pre-set ranges' ? '850px' : '328px'}
      borderRadius={'8px'}
      bg={'white'}
      data-testid={
        type === 'pre-set ranges'
          ? 'range-datepicker'
          : type === 'dual dates'
          ? 'dual-datepicker'
          : 'single-datepicker'
      }
    >
      {type === 'pre-set ranges' && (
        <VStack p={'12px 16px'} spacing="4px" borderRight={'1px solid #EAECF0'}>
          {TimeAdverbials.map((v) => {
            return (
              <Text
                py={'10px'}
                width="160px"
                key={v}
                cursor={'pointer'}
                bg={adverbial === v ? '#FCFCFC' : 'none'}
                onClick={() => {
                  setAdverbial(v);
                  setDateRange([]);
                }}
                fontWeight={adverbial === v ? '700' : 'normal'}
              >
                {v}
              </Text>
            );
          })}
        </VStack>
      )}

      <Stack>
        <Flex direction={'row'}>
          <IndividualDate
            setDateRange={setDateRange}
            dateRange={dateRange}
            dateEvents={dateEvents}
            type={type}
            adverbial={adverbial}
            userId={userId}
            today={today.format('YYYY-MM-DD')}
          />
          {type === 'pre-set ranges' && (
            <>
              <Divider orientation="vertical" />
              <IndividualDate
                nextMonthCalendar={true}
                setDateRange={setDateRange}
                dateRange={dateRange}
                dateEvents={dateEvents}
                type={type}
                adverbial={adverbial}
                userId={userId}
                today={today.format('YYYY-MM-DD')}
              />
            </>
          )}
        </Flex>
        <Flex
          justify={'space-between'}
          alignItems={'center'}
          w="full"
          height={'full'}
          p={'16px'}
          borderTop={'1px solid #EAECF0'}
        >
          {type === 'pre-set ranges' && dateRangeRender(dateRange, type)}
          <HStack
            justify={type !== 'pre-set ranges' ? 'center' : 'end'}
            align={type !== 'pre-set ranges' ? 'center' : 'end'}
            w={type !== 'pre-set ranges' ? 'full' : 'none'}
            h={'full'}
          >
            <Button
              bg={'white'}
              border={'1px solid #D6D6D6'}
              color="black"
              _hover={{ bg: 'none' }}
              w="full"
              maxW={type === 'pre-set ranges' ? 'none' : '142px'}
              onClick={() => {
                onApplyDate?.([]);
                setDateRange([]);
                onClose();
              }}
            >
              Cancel
            </Button>{' '}
            <Button
              w="full"
              maxW={type === 'pre-set ranges' ? 'none' : '142px'}
              onClick={
                (type === 'dual dates' || type === 'pre-set ranges') &&
                dateRange.length >= 2
                  ? () => {
                      onApplyDate?.(sortRange(dateRange));
                      onClose();
                    }
                  : type === 'single date'
                  ? () => {
                      onApplyDate?.(sortRange(dateRange));
                      onClose();
                    }
                  : undefined
              }
            >
              Apply
            </Button>
          </HStack>
        </Flex>
      </Stack>
    </Flex>
  );
};

export interface IndividualMainDateProps {
  setDateRange: React.Dispatch<React.SetStateAction<dateInfoProps['info']>>;
  dateRange: dateInfoProps['info'];
  dateEvents:
    | {
        date: Date;
        title: string;
        id: string;
      }[]
    | undefined;
  type?: 'pre-set ranges' | 'dual dates' | 'single date';
  adverbial?: string;

  userId?: string;
  today: string;
  rangeIndicator?: boolean;
}

export interface IndividualNextDateProps extends IndividualMainDateProps {
  nextMonthCalendar?: boolean;
  previousMonthCalendar?: never;
}
export interface IndividualPrevDateProps extends IndividualMainDateProps {
  nextMonthCalendar?: never;
  previousMonthCalendar?: boolean;
}

export type IndividualDateProps =
  | IndividualPrevDateProps
  | IndividualNextDateProps;
const IndividualDate = (props: IndividualDateProps) => {
  const {
    nextMonthCalendar,
    previousMonthCalendar,
    dateEvents,

    type,
    userId,

    today,
    dateRange,
    setDateRange,
  } = props;
  const [currentDate, setCurrentDate] = React.useState(moment(today));
  const id = useId();
  const [rows, setRows] = React.useState<
    {
      day: number;
      isCurrentMonth: boolean;
      isClicked: boolean;
      year: number;
      month: number;
      isAvailable?: boolean;
    }[][]
  >([[]]);
  let fillers = 0;

  React.useEffect(() => {
    if (nextMonthCalendar) {
      nextMonth(currentDate, setCurrentDate);
    }
    if (previousMonthCalendar) {
      prevMonth(currentDate, setCurrentDate);
    }
  }, []);

  const prevMonth = (date: Moment, cb: any) => {
    const mon = date.get('month');
    if (mon > 0) {
      date.set('month', mon - 1);
    } else {
      date.set('month', 11);
      date.set('year', date.get('year') - 1);
    }
    cb(moment(date));
  };
  const nextMonth = (date: Moment, cb: any) => {
    const mon = date.get('month');
    if (mon < 11) {
      date.set('month', mon + 1);
    } else {
      date.set('month', 0);
      date.set('year', date.get('year') + 1);
    }
    cb(moment(date));
  };
  const firstDayOfMonth = moment(currentDate).startOf('month').day();
  const lastDayOfMonth = moment(currentDate).endOf('month').date();
  const prevLastDayOfMonth = moment(currentDate).date(0).format('D');

  const days: Array<{
    day: number;
    isCurrentMonth: boolean;
    isClicked: boolean;
    year: number;
    month: number;
    isAvailable?: boolean;
  }> = [];
  const sortedDateEvents = dateEvents?.sort((a) => {
    if (userId) {
      if (a.id !== userId) return -1;
    }
    return 1;
  });
  for (let i = 1; i <= firstDayOfMonth; i++) {
    const yearDay =
      i < firstDayOfMonth && currentDate.get('month') === 0
        ? currentDate.get('year') - 1
        : currentDate.get('year');
    const monthDay =
      i < firstDayOfMonth && currentDate.get('month') === 0
        ? currentDate.get('month') + 12
        : currentDate.get('month');
    const _day = parseInt(prevLastDayOfMonth) + 1 - i;
    days.unshift({
      day: _day,
      isCurrentMonth: false,
      isClicked: false,
      isAvailable: !sortedDateEvents
        ?.map((d) => {
          return moment(d.date, 'YYYY-MM-DD').format('l').toString();
        })
        .includes(
          moment(`${yearDay}-${monthDay}-${_day}`, 'YYYY-MM-DD')
            .format('l')
            .toString()
        ),
      year: yearDay,
      month: monthDay,
    });
  }
  for (let i = 1; i <= 43; i++) {
    const yearDay =
      i > lastDayOfMonth && currentDate.get('month') >= 11
        ? currentDate.get('year') + 1
        : currentDate.get('year');
    const monthDay =
      i > lastDayOfMonth
        ? currentDate.get('month') + 2 === 13
          ? 1
          : currentDate.get('month') + 2
        : currentDate.get('month') + 1;
    const _day = i > lastDayOfMonth ? (fillers += 1) : i;

    days.push({
      day: _day,
      isCurrentMonth: i > lastDayOfMonth ? false : true,
      isClicked: false,
      isAvailable: !sortedDateEvents
        ?.map((d) => {
          return moment(d.date, 'YYYY-MM-DD').format('l').toString();
        })
        .includes(
          moment(`${yearDay}-${monthDay}-${_day}`, 'YYYY-MM-DD')
            .format('l')
            .toString()
        ),
      year: yearDay,
      month: monthDay,
    });
  }
  const tempRow: {
    day: number;
    isCurrentMonth: boolean;
    isClicked: boolean;
    year: number;
    month: number;
    isAvailable?: boolean;
  }[][] = [];
  for (let i = 1; i <= 42; i += 7) {
    tempRow?.push(days.slice(i, i + 7));
  }

  const newOuterArray = tempRow?.map((innerArray) => {
    const d = innerArray.map((element) =>
      (element.day === dateRange[0]?.day &&
        element.month === dateRange[0]?.month &&
        element.year === dateRange[0]?.year) ||
      (element.day === dateRange[dateRange.length - 1]?.day &&
        element.month === dateRange[dateRange.length - 1]?.month &&
        element.year === dateRange[dateRange.length - 1]?.year)
        ? { ...element, isClicked: true }
        : { ...element, isClicked: false }
    );
    return d;
  });

  const handleSetRangeDate = (day: number, month: number, year: number) => {
    if (
      (type === 'pre-set ranges' || type === 'dual dates') &&
      dateRange.length === 2
    ) {
      const updatedItems = dateRange.slice();

      updatedItems.shift();

      const newDateRange = [
        ...updatedItems,
        {
          day: day,
          month: month,
          year: year,
        },
      ];

      setDateRange(newDateRange);
    } else if (type === 'single date') {
      setDateRange([{ day: day, month: month, year: year }]);
    } else {
      const newDateRange = [
        ...dateRange,
        {
          day: day,
          month: month,
          year: year,
        },
      ];

      setDateRange(newDateRange);
    }

    setRows(newOuterArray);
  };
  React.useEffect(() => {
    if (currentDate) {
      setRows(newOuterArray);
    }
  }, [currentDate, dateRange]);

  return (
    <Box>
      <VStack w="328px" p={'16px'}>
        <HStack
          width={'280px'}
          mb={type === 'pre-set ranges' ? '22px' : '12px'}
          justify={'space-between'}
        >
          <Icon
            as={ChevronLeftIcon}
            width={'20px'}
            height={'20px'}
            cursor={'pointer'}
            onClick={() => prevMonth(currentDate, setCurrentDate)}
          />
          <Text w={'100%'} textAlign={'center'}>
            {`${month[currentDate.get('month')]} ${currentDate.get('year')}`}
          </Text>
          <Icon
            as={ChevronRightIcon}
            width={'20px'}
            height={'20px'}
            cursor={'pointer'}
            onClick={() => nextMonth(currentDate, setCurrentDate)}
          />
        </HStack>
        {(type === 'single date' || type === 'dual dates') &&
          dateRangeRender(dateRange, type)}
        <Grid gridTemplateColumns={'repeat(7, 1fr)'} gap="16px">
          {DAYS.map((day) => (
            <Center key={day} fontWeight="500" fontSize={'14px'}>
              {day}
            </Center>
          ))}
        </Grid>
        <Box width={'280px'}>
          {rows.map((row, idx) => {
            return (
              <Grid
                gridTemplateColumns={'repeat(7, 1fr)'}
                key={`${id}-${idx}`}
                placeItems="center"
              >
                {row.map((cell, idx) => {
                  const dateRow = moment(
                    `${cell.year}-${cell.month}-${cell.day}`,
                    'YYYY-M-D'
                  );
                  const dateRowTimeStamp = dateRow.unix();

                  const sorted = sortRange(dateRange);
                  const dateRangeFrom = moment(
                    `${sorted[0]?.year}-${sorted[0]?.month}-${sorted[0]?.day}`,
                    'YYYY-M-D'
                  );
                  const dateRangeTo = moment(
                    `${sorted[sorted.length - 1]?.year}-${
                      sorted[sorted.length - 1]?.month
                    }-${sorted[sorted.length - 1]?.day}`,
                    'YYYY-M-D'
                  );
                  const shade = () => {
                    if (
                      dateRow.toString() === dateRangeFrom.toString() ||
                      dateRow.toString() === dateRangeTo.toString()
                    ) {
                      return '#8A68EF';
                    }
                    if (
                      dateRowTimeStamp > dateRangeFrom.unix() &&
                      dateRowTimeStamp < dateRangeTo.unix()
                    )
                      return '#FCFCFC';
                    if (
                      moment(today, 'YYYY-M-D').toString() ===
                      dateRow.toString()
                    )
                      return '#F0F0F0';
                    if (cell.isClicked) return '#8A68EF';
                    if (!cell.isClicked) return 'none';

                    return 'none';
                  };

                  return (
                    <GridItem
                      w={'40px'}
                      height={'40px'}
                      alignItems={'center'}
                      key={`${id}-${cell.day}-${cell.month}-${cell.year}`}
                      position={'relative'}
                      bg={
                        dateRow.toString() === dateRangeFrom.toString() ||
                        dateRow.toString() === dateRangeTo.toString()
                          ? '#FCFCFC'
                          : undefined
                      }
                      borderRightRadius={
                        dateRange.length === 1 ||
                        (dateRow.toString() === dateRangeFrom.toString() &&
                          idx === 6) ||
                        dateRow.toString() === dateRangeTo.toString() ||
                        ((dateRangeFrom.toString() === dateRow.toString() ||
                          dateRangeTo.toString() === dateRow.toString()) &&
                          idx === 6)
                          ? '50%'
                          : 'none'
                      }
                      borderLeftRadius={
                        dateRange.length === 1 ||
                        dateRow.toString() === dateRangeFrom.toString() ||
                        ((dateRangeFrom.toString() === dateRow.toString() ||
                          dateRangeTo.toString() === dateRow.toString()) &&
                          idx === 0)
                          ? '50%'
                          : 'none'
                      }
                    >
                      <Center
                        color={
                          cell.isClicked ||
                          dateRow.toString() === dateRangeFrom.toString() ||
                          dateRow.toString() === dateRangeTo.toString()
                            ? 'white'
                            : cell.isCurrentMonth && !cell.isClicked
                            ? 'neutrals.800'
                            : 'neutrals.600'
                        }
                        p={'auto'}
                        height={'100%'}
                        cursor={cell.isAvailable ? 'pointer' : 'none'}
                        position={'relative'}
                        onClick={() => {
                          cell.isAvailable
                            ? handleSetRangeDate(
                                cell.day,
                                cell.month,
                                cell.year
                              )
                            : null;
                        }}
                        _hover={{
                          bg: cell.isClicked ? '#8A68EF' : '#F0F0F0',
                          borderRadius: '50%',
                        }}
                        bg={shade()}
                        borderRightRadius={
                          idx === 6 ||
                          dateRow.toString() === dateRangeFrom.toString() ||
                          dateRow.toString() === dateRangeTo.toString() ||
                          cell.isClicked ||
                          dateRow.toString() === moment(today).toString()
                            ? '50%'
                            : 'none'
                        }
                        borderLeftRadius={
                          idx === 0 ||
                          dateRow.toString() === dateRangeFrom.toString() ||
                          dateRow.toString() === dateRangeTo.toString() ||
                          cell.isClicked ||
                          dateRow.toString() === moment(today).toString()
                            ? '50%'
                            : 'none'
                        }
                      >
                        {cell.day}
                      </Center>
                      {sortedDateEvents?.map((date, idx) => {
                        return (
                          <>
                            {moment(date.date).format('ll').toString() ===
                              dateRow.format('ll').toString() && (
                              <Tooltip
                                label={userId === date.id ? date.title : null}
                                placement={'top'}
                                borderRadius={'8px'}
                                key={idx}
                              >
                                <Box
                                  height={'full'}
                                  width={'full'}
                                  bg="transparent"
                                  position={'absolute'}
                                  bottom={'0px'}
                                  zIndex={date.id === userId ? 9999 : 0}
                                >
                                  <Box
                                    width={'5px'}
                                    height={'5px'}
                                    position={'absolute'}
                                    left={'50%'}
                                    transform={'translate(-50%)'}
                                    bottom={'0px'}
                                    borderRadius={'50%'}
                                    bg={
                                      userId === date.id ? '#8A68EF' : '#7A7A7A'
                                    }
                                  ></Box>
                                </Box>
                              </Tooltip>
                            )}
                          </>
                        );
                      })}
                    </GridItem>
                  );
                })}
              </Grid>
            );
          })}
        </Box>
      </VStack>
    </Box>
  );
};
