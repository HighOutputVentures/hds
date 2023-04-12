import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons';
import { Avatar, HStack, Icon } from '@chakra-ui/react';
import { FormGroup, FormGroupProps } from '@highoutput/hds-forms';
import {
  chakraComponents,
  MultiValue,
  Select,
  SingleValue,
} from 'chakra-react-select';
import React from 'react';
import getStyles from './styles';

export interface Item {
  value: string | number;
  label: string;
}

export interface OptionItem extends Item {
  avatar?: string;
}

export interface AutoCompleteInputFieldProps extends FormGroupProps {
  options: OptionItem[];
  loading?: boolean;
  required?: boolean;
  placement?: 'auto' | 'top' | 'bottom';
  multiple?: boolean;
  darkMode?: boolean;
  autoFocus?: boolean;
  showDropdownIndicator?: boolean;
  placeholder?: string;
  __testId?: string;
  value?: string | string[] | number | number[];
  onChangeValue: (...event: any[]) => void;
}

const AutoCompleteInput = (props: AutoCompleteInputFieldProps) => {
  const {
    value,
    options,
    darkMode,
    placement,
    showDropdownIndicator,
    error,
    autoFocus,
    isDisabled,
    onChangeValue,
    multiple,
    loading,
    placeholder,
    __testId,
  } = props;

  const styles = getStyles({
    error: Boolean(error),
    multiple,
    darkMode,
  });

  return (
    <FormGroup {...props}>
      <Select
        options={options}
        chakraStyles={styles}
        placeholder={placeholder}
        menuPlacement={placement ?? 'auto'}
        isMulti={multiple}
        inputId="auto-complete-input"
        useBasicStyles
        aria-label="auto-complete-input"
        captureMenuScroll
        backspaceRemovesValue
        autoFocus={autoFocus}
        isLoading={loading}
        data-testid={__testId ?? `hds.autocomplete.input.field`}
        isSearchable
        isDisabled={isDisabled}
        isClearable
        components={{
          ClearIndicator: () => null,
          IndicatorSeparator: () => null,
          DropdownIndicator: ({ selectProps }) => {
            const icon = selectProps.menuIsOpen
              ? ChevronUpIcon
              : ChevronDownIcon;
            return showDropdownIndicator ? (
              <Icon as={icon} w={4} h={6} stroke="brand.primary.500" />
            ) : null;
          },
          MultiValueContainer: ({ children, data, ...props }) => (
            <chakraComponents.MultiValueContainer {...props} data={data}>
              <HStack align="center" spacing="5px">
                {data.avatar && (
                  <Avatar width="16px" height="16px" src={data.avatar} />
                )}
                {children}
              </HStack>
            </chakraComponents.MultiValueContainer>
          ),
        }}
        onChange={(options: MultiValue<Item> | (SingleValue<Item> | null)) => {
          return isArray<MultiValue<Item>>(options)
            ? onChangeValue(options.map((o) => o.value))
            : onChangeValue(options?.value ?? null);
        }}
        value={options.filter((option) => {
          return Array.isArray(value)
            ? value.some((val: string | number) => val === option.value)
            : value === option.value;
        })}
      />
    </FormGroup>
  );
};

export default AutoCompleteInput;

function isArray<T>(subject: unknown): subject is T {
  return Array.isArray(subject);
}
