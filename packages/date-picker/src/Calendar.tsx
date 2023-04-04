import { Icon, chakra } from '@chakra-ui/react';
import { addMonths, format, isEqual, subMonths } from 'date-fns';
import * as React from 'react';
import { v4 as uuid } from 'uuid';
import { DAYS } from './constants';
import ChevronLeftIcon from './icons/ChevronLeftIcon';
import ChevronRightIcon from './icons/ChevronRightIcon';
import { Nullable } from './types';
import { arrayChunk, getCalendar, noop } from './utils';

type CalendarProps = {
  selected?: Nullable<Date>;
  onSelect?(selected: Nullable<Date>): void;
};

export default function Calendar({ selected, onSelect = noop }: CalendarProps) {
  const [baseDate, setBaseDate] = React.useState(selected ?? new Date());

  const calendar = React.useMemo(() => {
    return getCalendar(baseDate);
  }, [baseDate]);

  const chunks = React.useMemo(() => arrayChunk(calendar, 7), [calendar]);

  return (
    <chakra.div>
      <chakra.div display="flex" alignItems="center">
        <Control
          icon={ChevronLeftIcon}
          onClick={() => {
            setBaseDate((d) => subMonths(d, 1));
          }}
        />

        <chakra.p
          flexGrow={1}
          textAlign="center"
          fontWeight="500"
          fontSize="16px"
          lineHeight="24px"
          color="gray.700"
        >
          {format(baseDate, 'MMMM')}
        </chakra.p>

        <Control
          icon={ChevronRightIcon}
          onClick={() => {
            setBaseDate((d) => addMonths(d, 1));
          }}
        />
      </chakra.div>

      <chakra.table marginTop="12px">
        <chakra.thead>
          <chakra.tr>
            {DAYS.map((d) => (
              <chakra.th
                key={uuid()}
                width="40px"
                height="40px"
                fontWeight="500"
                fontSize="14px"
                lineHeight="20px"
              >
                {d}
              </chakra.th>
            ))}
          </chakra.tr>
        </chakra.thead>

        <chakra.tbody>
          {chunks.map((arr) => (
            <chakra.tr key={uuid()}>
              {arr.map((o) => {
                const isActive = !!selected && isEqual(selected, o.value);

                return (
                  <chakra.td key={uuid()}>
                    <chakra.button
                      width="40px"
                      height="40px"
                      color="neutrals.800"
                      fontSize="14px"
                      lineHeight="20px"
                      rounded="full"
                      transition="colors 300ms ease-in-out"
                      {...(o.isPlaceholder && {
                        color: 'neutrals.600',
                      })}
                      {...(o.isCurrentDay && {
                        bgColor: 'neutrals.200',
                      })}
                      {...(isActive && {
                        color: 'white',
                        bgColor: 'brand.primary.700',
                      })}
                      onClick={() => {
                        setBaseDate(o.value);
                        onSelect(o.value);
                      }}
                      tabIndex={-1}
                    >
                      {o.value.getDate()}
                    </chakra.button>
                  </chakra.td>
                );
              })}
            </chakra.tr>
          ))}
        </chakra.tbody>
      </chakra.table>
    </chakra.div>
  );
}

type ControlProps = React.ComponentProps<'button'> & {
  icon(props: React.ComponentProps<'svg'>): JSX.Element;
};

const Control = React.forwardRef<HTMLButtonElement, ControlProps>(
  function Control({ icon, ...props }, ref) {
    return (
      <chakra.button
        ref={ref}
        flexShrink={0}
        width="36px"
        height="36px"
        color="gray.500"
        display="flex"
        alignItems="center"
        justifyContent="center"
        {...props}
      >
        <Icon as={icon} width={5} height={5} />
      </chakra.button>
    );
  }
);
