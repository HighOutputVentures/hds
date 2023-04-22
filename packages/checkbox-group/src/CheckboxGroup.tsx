import { Box, Icon, SystemStyleObject } from '@chakra-ui/react';
import * as React from 'react';
import CheckIcon from './CheckIcon';
import CircleIcon from './CircleIcon';
import { omit } from './utils';

type GetPropsArgs = {
  disabled?: boolean;
};

type RenderChildrenContext<T> = {
  item: T;
  index: number;
  selected: boolean;
  getProps(args?: GetPropsArgs): {
    icon: Record<string, any>;
    checkbox: Record<string, any>;
    container: Record<string, any>;
  };
};

type CheckboxGroupSize = 'sm' | 'md';

type CheckboxGroupVariant = 'circle' | 'square' | 'dot';

type CheckboxGroupBaseProps<T extends unknown[]> = {
  size?: CheckboxGroupSize;
  variant?: CheckboxGroupVariant;
  __checkboxGroupTestId?: string;
  __checkboxTestId?: string;
  items: T;
  children(context: RenderChildrenContext<T[number]>): React.ReactNode;
  compareFn?: (item: T[number]) => unknown;
} & (
  | {
      multiple: true;
      value: T[number][];
      onChange(value: T[number][]): void;
    }
  | {
      multiple?: false;
      value?: T[number];
      onChange(value: T[number]): void;
    }
);

export type CheckboxGroupProps<T extends unknown[]> = SystemStyleObject &
  CheckboxGroupBaseProps<T>;

export default function CheckboxGroup<T extends unknown[]>(props: CheckboxGroupProps<T>) {
  const {
    variant = 'circle',
    __checkboxGroupTestId,
    __checkboxTestId,
    size = 'md',
    items,
    children,
    compareFn = (o) => o,
    ...others
  } = props;

  const getCheckboxIcon = React.useCallback(
    function getCheckboxIconBaseOnVariant({ disabled }: { disabled?: boolean }) {
      if (variant === 'dot') {
        return (
          <Icon
            as={CircleIcon}
            width={{ sm: '6px', md: '8px' }[size]}
            height={{ sm: '6px', md: '8px' }[size]}
            color="#8A68EF"
            {...(disabled && {
              color: '#F0F0F0',
            })}
          />
        );
      }

      return (
        <Icon
          as={CheckIcon}
          width={{ sm: '8px', md: '10px' }[size]}
          height={{ sm: '8px', md: '10px' }[size]}
          color={variant === 'square' ? '#8A68EF' : '#FFFFFF'}
          {...(disabled && {
            color: variant === 'square' ? '#F0F0F0' : '#FFFFFF',
          })}
        />
      );
    },
    [variant],
  );

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 4,
        ...omit(others, 'onChange', 'value', 'multiple'),
      }}
      role="group"
      aria-label="Checkbox Group"
      aria-multiselectable={props.multiple}
    >
      {items.map((item, index) => {
        const selected = !others.multiple
          ? others.value && compareFn(others.value) === compareFn(item)
          : others.value.some((i) => compareFn(item) === compareFn(i));

        return children({
          item,
          index,
          selected: selected || false,
          getProps({ disabled } = {}) {
            return {
              checkbox: {
                'data-testid': __checkboxTestId ?? 'hds.checkbox-group.checkbox',
                ...(!disabled && {
                  ...(!selected && {
                    border: '1px solid #D6D6D6',
                    bgColor: '#FFFFFF',
                  }),
                  ...(selected && {
                    border: '1px solid #8A68EF',
                    bgColor: variant === 'circle' ? '#8A68EF' : '#EDE8FC',
                    children: getCheckboxIcon({ disabled }),
                  }),
                }),
                ...(disabled && {
                  ...(!selected && {
                    border: '1px solid #F0F0F0',
                    bgColor: '#FCFCFC',
                  }),
                  ...(selected && {
                    border: '1px solid #D6D6D6',
                    bgColor: variant === 'circle' ? '#D6D6D6' : '#FCFCFC',
                    children: getCheckboxIcon({ disabled }),
                  }),
                }),
                // common
                tabIndex: -1,
                flexGrow: 0,
                flexShrink: 0,
                className: 'CheckboxGroup__Checkbox',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                rounded: variant === 'square' ? '4px' : 'full',
                width: size === 'sm' ? '16px' : '20px',
                height: size === 'sm' ? '16px' : '20px',
                transition: [
                  'background-color 300ms ease-in-out',
                  'box-shadow 300ms ease-in-out',
                  'border-color 300ms ease-in-out',
                ].join(),
              },
              icon: {
                'data-testid': 'hds.checkbox-group.icon',
                className: 'CheckboxGroup__Icon',
                ...(disabled && {
                  color: '#D0D5DD',
                  bgColor: '#F2F4F7',
                  borderColor: '#F9FAFB',
                }),
                ...(!disabled && {
                  color: '#8A68EF',
                  bgColor: '#EDE8FC',
                  borderColor: '#F9F5FF',
                }),
                flexGrow: 0,
                flexShrink: 0,
                width: size === 'sm' ? '32px' : '40px',
                height: size === 'sm' ? '32px' : '40px',
                borderWidth: size === 'sm' ? '4px' : '6px',
                borderStyle: 'solid',
                rounded: 'full',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: [
                  'color 300ms ease-in-out',
                  'box-shadow 300ms ease-in-out',
                  'border-color 300ms ease-in-out',
                  'background-color 300ms ease-in-out',
                ].join(),
                role: 'img',
                'aria-role': 'Checkbox Icon',
              },
              container: {
                'data-testid': __checkboxGroupTestId ?? 'hds.checkbox-group.container',
                ...(!disabled && {
                  ...(!selected && {
                    border: '1px solid #EAECF0',
                    bgColor: '#FFFFFF',
                    _hover: {
                      border: '1px solid #D6BBFB',

                      // radio
                      '& .CheckboxGroup__Checkbox': {
                        border: '1px solid #8A68EF',
                        bgColor: '#EDE8FC',
                      },
                    },
                    _focus: {
                      border: '1px solid #D6BBFB',
                      boxShadow: '0px 0px 0px 4px #E3E3FC',

                      // radio
                      '& .CheckboxGroup__Checkbox': {
                        border: '1px solid #EDE8FC',
                        bgColor: '#FFFFFF',
                        boxShadow: '0px 0px 0px 4px #F4EBFF',
                      },
                    },
                  }),
                  ...(selected && {
                    border: '1px solid #8A68EF',
                    bgColor: '#F9F5FF',
                    _hover: {
                      border: '1px solid #8A68EF',

                      // radio
                      '& .CheckboxGroup__Checkbox': {
                        border:
                          variant === 'circle'
                            ? '1px solid #4A3880'
                            : '1px solid #8A68EF',
                        bgColor: variant === 'circle' ? '#4A3880' : '#EDE8FC',
                      },
                    },
                    _focus: {
                      border: '1px solid #8A68EF',
                      boxShadow: '0px 0px 0px 4px #E3E3FC',

                      // radio
                      '& .CheckboxGroup__Checkbox': {
                        border: '1px solid #8A68EF',
                        bgColor: variant === 'circle' ? '#8A68EF' : '#EDE8FC',
                        boxShadow: '0px 0px 0px 4px #F4EBFF',
                      },
                    },
                  }),
                }),
                ...(disabled && {
                  border: '1px solid #EAECF0',
                  bgColor: '#F9FAFB',
                }),
                // common
                rounded: '8px',
                position: 'relative',
                padding: '16px',
                cursor: disabled ? 'not-allowed' : 'pointer',
                outline: 'none',
                tabIndex: disabled ? -1 : 0,
                transition: [
                  'background-color 300ms ease-in-out',
                  'box-shadow 300ms ease-in-out',
                  'border-color 300ms ease-in-out',
                ].join(),
                onClick: disabled
                  ? function () {}
                  : function (..._args: unknown[]) {
                      if (!others.multiple) {
                        others.onChange(!selected ? item : null);
                      } else {
                        !selected && others.onChange([...others.value, item]);
                        selected &&
                          others.onChange(
                            others.value.filter((i) => {
                              return compareFn(item) !== compareFn(i);
                            }),
                          );
                      }
                    },

                /* Accessibility 👌 */
                role: 'checkbox',
                'aria-label': 'Select item ' + (index + 1),
                'aria-rowindex': index,
                'aria-checked': selected,
                'aria-disabled': disabled,
              },
            };
          },
        });
      })}
    </Box>
  );
}
