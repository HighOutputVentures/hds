import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons';
import { As, Avatar, Flex, HStack, Icon, Text } from '@chakra-ui/react';
// @ts-ignore
import { FormContainer, FormContainerProps } from '@highoutput/hds-forms';
import {
  chakraComponents,
  MultiValue,
  Select,
  SingleValue,
} from 'chakra-react-select';
import React from 'react';
// @ts-ignore
import { CheckIcon } from '@highoutput/hds-icons';
import getStyles from './styles';
export interface Item {
  value: string | number;
  label: string;
}

export interface OptionItem extends Item {
  avatar?: string;
  username?: string;
}

export interface InputDropdownFieldProps
  extends Omit<FormContainerProps, 'partProps'> {
  options: OptionItem[];
  loading?: boolean;
  // fieldLabelProps?: Omit<BoxProps, 'children'>;
  required?: boolean;
  placement?: 'auto' | 'top' | 'bottom';
  multiple?: boolean;

  darkMode?: boolean;
  autoFocus?: boolean;
  inputLeftIcon?: As<any> | undefined;
  placeholder?: string;
  // partProps?: Partial<AutoCompleteInputFieldPartProps>;
  value?: string | string[] | number | number[];
  onChangeValue: (...event: any[]) => void;
  __selectTestId?: string;
}

const InputDropdown = (props: InputDropdownFieldProps) => {
  const {
    value,
    options,
    darkMode,
    placement,
    inputLeftIcon,
    errorMsg,
    autoFocus,
    disabled,
    __selectTestId,
    onChangeValue,
    multiple,
    loading,
    placeholder,
  } = props;

  const [optionVal, setOptionVal] = React.useState(options);

  const styles = getStyles({
    error: Boolean(errorMsg),
    multiple,
    darkMode,
  });
  const handleInputChange = (value: string) => {
    if (value.length > 1) {
      setOptionVal(
        options.filter((d) =>
          d.label.toLowerCase().includes(value.toLowerCase())
        )
      );
    } else setOptionVal(options);
  };

  return (
    <FormContainer {...props}>
      <Flex borderRadius={'8px'} position="relative" gap="10px">
        <Flex
          align={'center'}
          justify={'center'}
          w="20px"
          height={'100%'}
          position="absolute"
          left="14px"
          zIndex={1}
        >
          <Icon as={inputLeftIcon} w="24px" height="24px" />
        </Flex>

        <Select
          options={options}
          chakraStyles={styles}
          placeholder={placeholder}
          menuPlacement={placement ?? 'auto'}
          isMulti={true}
          inputId="input-dropdown"
          useBasicStyles
          aria-label="input-dropdown"
          captureMenuScroll
          backspaceRemovesValue
          autoFocus={autoFocus}
          isLoading={loading}
          data-testid={__selectTestId ?? `hds.input.dropdown.field`}
          isSearchable
          onInputChange={(e, _) => handleInputChange(e)}
          isDisabled={disabled}
          isClearable
          components={{
            ClearIndicator: () => null,
            IndicatorSeparator: () => null,
            DropdownIndicator: ({ selectProps }) => {
              const icon = selectProps.menuIsOpen
                ? ChevronUpIcon
                : ChevronDownIcon;
              return <Icon as={icon} w={4} h={6} stroke="brand.primary.500" />;
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

            MenuList: ({ getValue, ...props }) => (
              <chakraComponents.MenuList getValue={getValue} {...props}>
                {optionVal.map((v) => {
                  return (
                    <Flex
                      onClick={() =>
                        props.selectOption({
                          value: v.value,
                          label: v.label,
                        })
                      }
                      cursor="pointer"
                      justify={'space-between'}
                      align="center"
                      py={'10px'}
                      px={'14px'}
                    >
                      <HStack align="center" spacing="8px">
                        <Avatar width="24px" height="24px" src={v.avatar} />

                        <Text fontSize={'18px'}>{v.label}</Text>
                        <Text fontSize={'18px'} color="neutrals.500">
                          {v.username}
                        </Text>
                      </HStack>
                      {getValue().map((d) => {
                        return d.label === v.label ? (
                          <Icon as={CheckIcon} />
                        ) : null;
                      })}
                    </Flex>
                  );
                })}
              </chakraComponents.MenuList>
            ),
          }}
          onChange={(
            options: MultiValue<Item> | (SingleValue<Item> | null)
          ) => {
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
      </Flex>
    </FormContainer>
  );
};

export default InputDropdown;

function isArray<T>(subject: unknown): subject is T {
  return Array.isArray(subject);
}
