import { Box, Flex, Icon, List, ListItem, chakra } from '@chakra-ui/react';
import * as combobox from '@zag-js/combobox';
import { normalizeProps, useMachine } from '@zag-js/react';
import * as React from 'react';
import { v4 as uuid } from 'uuid';
import ChevronDownIcon from './ChevronDownIcon';
import CloseIcon from './CloseIcon';

type Size = 'sm' | 'md' | 'lg';

type Option = {
  label: string;
  value: string | number;
};

export type ComboboxProps<T extends Option[]> = {
  /**
   *
   * Not implemented yet
   *
   */
  size?: Size;
  name?: string;
  value?: T[number];
  options: T;
  onChange(newValue: T[number] | null): void;
  leftIcon?: JSX.Element;
  placeholder?: string;
  autoFocus?: boolean;
  isReadOnly?: boolean;
  isDisabled?: boolean;
  isClearable?: boolean;
  isInvalid?: boolean;
  /**
   * Allow values other than given options
   */
  allowCustomValue?: boolean;
  /**
   * Adjust zIndex of menu
   */
  zIndex?: number;
};

/**
 *
 * Combobox using `@zag-js/combobox`
 *
 * @link https://zagjs.com/components/react/combobox
 *
 */
export default function Combobox<T extends Option[]>({
  options,
  leftIcon,
  isClearable,
  isInvalid,
  isDisabled,
  isReadOnly,
  zIndex,
  name,
  value,
  onChange,
  autoFocus,
  placeholder,
  allowCustomValue,
}: ComboboxProps<T>) {
  const id = React.useId();

  const [items, setItems] = React.useState<T[number][]>(options);

  const [state, send] = useMachine(
    combobox.machine({
      id,
      name,
      autoFocus,
      placeholder,
      onInputChange({ value }) {
        setItems(
          options.filter((item) => {
            return item.label.toLowerCase().includes(value.toLowerCase());
          }),
        );
      },
      onSelect(newValue) {
        if (newValue.label && newValue.value) {
          onChange({
            label: newValue.label,
            value: newValue.value,
          });
        } else {
          onChange(null);
        }
      },
      loop: true,
      invalid: isInvalid,
      readOnly: isReadOnly,
      disabled: isDisabled,
      openOnClick: true,
      focusOnClear: true,
      positioning: {
        gutter: 1,
      },
      allowCustomValue,
      inputBehavior: 'autohighlight',
      selectInputOnFocus: true,
      ...(!!value && {
        selectionData: {
          label: value.label,
          value: value.value.toString(),
        },
      }),
    }),
  );

  const api = combobox.connect(state, send, normalizeProps);

  return (
    <Box position="relative" width="full" data-testid="hds.combobox">
      <Box {...api.rootProps}>
        <Flex
          rounded="8px"
          border="1px"
          borderColor="neutrals.200"
          boxShadow="0px 1px 2px rgba(16, 24, 40, 0.05)"
          overflow="hidden"
          transition="colors 300ms ease-in-out"
          _focusWithin={{
            borderColor: 'brand.primary.700',
          }}
          _invalid={{
            borderColor: 'interface.error.700',
          }}
          _disabled={{
            opacity: 0.6,
            cursor: 'not-allowed',
          }}
          {...api.controlProps}
          data-testid="hds.combobox.controls"
        >
          {!!leftIcon && (
            <Flex
              color="gray.500"
              alignItems="center"
              paddingLeft="14px"
              paddingRight="8px"
              onClick={api.focus}
              data-testid="hds.combobox.icon.left"
            >
              {leftIcon}
            </Flex>
          )}

          <chakra.input
            paddingY="10px"
            flexGrow={1}
            _focus={{
              outline: 'none',
            }}
            _placeholder={{
              color: 'neutrals.400',
            }}
            {...api.inputProps}
            {...(!!!leftIcon && {
              paddingLeft: '14px',
            })}
            data-testid="hds.combobox.controls.input"
          />

          {!!isClearable && (
            <chakra.button
              alignSelf="center"
              height={5}
              width={5}
              marginX={2}
              rounded="md"
              display="flex"
              alignItems="center"
              justifyContent="center"
              bgColor="blackAlpha.200"
              color="blackAlpha.600"
              transition="colors 300ms ease-in-out"
              _hover={{
                color: 'blackAlpha.700',
              }}
              data-testid="hds.combobox.controls.clear"
              {...api.clearTriggerProps}
            >
              <Icon as={CloseIcon} width={4} height={4} />
            </chakra.button>
          )}

          <chakra.button
            type="button"
            display="flex"
            alignItems="center"
            paddingRight="14px"
            color="neutrals.600"
            _hover={{
              color: 'neutrals.700',
            }}
            _disabled={{
              cursor: 'not-allowed',
              color: 'neutrals.300',
            }}
            {...(api.isOpen && {
              color: 'neutrals.800',
              _hover: {},
            })}
            {...api.triggerProps}
            data-testid="hds.combobox.controls.toggle"
          >
            <Icon
              as={ChevronDownIcon}
              width={5}
              height={5}
              transition="all 300ms ease-in-out"
              {...(api.isOpen && {
                transform: 'rotate(180deg)',
              })}
            />
          </chakra.button>
        </Flex>
      </Box>

      <Box
        as="nav"
        border="1px"
        borderTop="none"
        borderColor="neutrals.200"
        bgColor="white"
        rounded="8px"
        zIndex={zIndex}
        overflow="hidden"
        {...api.positionerProps}
      >
        <List {...api.contentProps} data-testid="hds.combobox.options">
          {items.map((item, index) => {
            return (
              <ListItem
                key={uuid()}
                cursor="pointer"
                paddingY={2}
                paddingX={3}
                {...api.getOptionProps({
                  index,
                  label: item.label,
                  value: item.value.toString(),
                })}
                transition="colors 300ms ease-in-out"
                data-testid="hds.combobox.options.option"
                _selected={{
                  bgColor: 'neutrals.100',
                }}
              >
                {item.label}
              </ListItem>
            );
          })}

          {!items.length && (
            <ListItem
              fontSize="sm"
              py={3}
              px={3}
              color="neutrals.600"
              textAlign="center"
              data-testid="hds.combobox.nomatchfound"
            >
              No match found
            </ListItem>
          )}
        </List>
      </Box>
    </Box>
  );
}
