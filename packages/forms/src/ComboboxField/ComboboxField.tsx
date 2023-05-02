import { chakra, Icon } from '@chakra-ui/react';
import {
  autoUpdate,
  flip,
  FloatingPortal,
  size as floatingSize,
  useFloating,
} from '@floating-ui/react';
import { useCombobox } from 'downshift';
import * as React from 'react';
import { v4 as uuid } from 'uuid';
import FormGroup, { FormGroupProps } from '../FormGroup/FormGroup';
import { useStyles } from '../hooks';
import ChevronDownIcon from '../icons/ChevronDownIcon';
import CloseIcon from '../icons/CloseIcon';
import { Nullable, Prettify, Size } from '../types';

export type Option = {
  label: string;
  value: string | number;
};

type RenderOption<T extends Option> = (item: T) => JSX.Element;

type ComboboxBaseProps<T extends Option> = {
  size?: Size;
  name?: string;
  value?: Nullable<T['value']>;
  options?: T[];
  onChange?(newValue: Nullable<T['value']>): void;
  leftIcon?: JSX.Element;
  placeholder?: string;
  autoFocus?: boolean;
  isClearable?: boolean;
  blurOnSelect?: boolean;

  /**
   *
   * Adjust zIndex of menu
   * @default 1
   *
   */
  zIndex?: number;

  /**
   *
   * Pass a custom matcher function.
   * By default, we compare label to search
   *
   */
  matcher?(search: string, item: T): boolean;
  renderOption?: RenderOption<T>;

  __fieldTestId?: string;
  __clearBtnTestId?: string;
  __optionTestId?: string | ((item: T) => string);
};

export type ComboboxFieldProps<T extends Option> = Prettify<
  ComboboxBaseProps<T> & FormGroupProps
>;

/*
 * TODO: implement "isReadOnly"
 */
function ComboboxField<T extends Option>(
  props: ComboboxFieldProps<T>,
  ref: React.ForwardedRef<HTMLInputElement>,
) {
  const {
    size,
    name,
    value,
    onChange,
    placeholder,
    autoFocus,
    options = [],
    matcher = (s, i) => i.label.toLowerCase().includes(s.toLowerCase()),
    renderOption = (i) => i.label,
    leftIcon,
    isClearable,
    blurOnSelect,
    zIndex = 'modal',

    __fieldTestId = 'hds.combobox.controls.input',
    __clearBtnTestId = 'hds.combobox.controls.clear',
    __optionTestId = 'hds.combobox.options.option',

    ...others
  } = props;

  const styles = useStyles({
    size,
    hasLeftIcon: !!leftIcon,
    hasRightIcon: true,
    hasClearIcon: true,
  });

  const [filteredOptions, setFilteredOptions] = React.useState(() => {
    const defaultSearch = options.find((o) => o.value === value);

    if (!defaultSearch) return options;

    return options.filter((o) => {
      if (!value) return true;
      return matcher(defaultSearch.label, o);
    });
  });

  const {
    isOpen,
    getToggleButtonProps,
    getMenuProps,
    getInputProps,
    getItemProps,
    selectedItem,
    setInputValue,
    selectItem,
    openMenu,
  } = useCombobox({
    items: filteredOptions,
    initialInputValue: options.find((o) => o.value === value)?.label ?? '',
    initialSelectedItem: options.find((o) => o.value === value),
    itemToString(item) {
      return item?.label ?? '';
    },
    onInputValueChange({ inputValue = '' }) {
      setFilteredOptions(options.filter((option) => matcher(inputValue, option)));
    },
    onSelectedItemChange({ selectedItem }) {
      onChange?.(selectedItem?.value ?? null);
    },
  });

  const { refs, strategy, x, y } = useFloating({
    open: isOpen,
    strategy: 'fixed',
    placement: 'bottom-start',
    whileElementsMounted: autoUpdate,
    middleware: [
      flip(),
      floatingSize({
        apply({ rects, elements }) {
          Object.assign(elements.floating.style, {
            minWidth: `${rects.reference.width}px`,
          });
        },
      }),
    ],
  });

  return (
    <FormGroup {...others}>
      {({ id, isInvalid, isDisabled }) => (
        <>
          <chakra.div
            ref={refs.setReference}
            position="relative"
            data-testid="hds.combobox"
            sx={{
              '& .HdsComboboxClearButton': {
                display: 'none',
              },
              _hover: {
                '& .HdsComboboxClearButton': {
                  display: 'flex',
                },
              },
            }}
          >
            {!!leftIcon && (
              <chakra.div
                sx={styles.leftIcon({ isDisabled })}
                data-testid="hds.combobox.left-icon"
              >
                {React.cloneElement<any>(leftIcon, { sx: styles.icon() })}
              </chakra.div>
            )}

            <chakra.input
              sx={styles.field}
              {...(isInvalid && {
                'aria-invalid': true,
              })}
              {...(isDisabled && {
                disabled: true,
              })}
              {...getInputProps({
                id,
                ref,
                name,
                placeholder,
              })}
              data-testid={__fieldTestId}
            />

            {!!isClearable && !!selectedItem && !isDisabled && (
              <chakra.button
                type="button"
                className="HdsComboboxClearButton"
                onClick={() => {
                  setInputValue('');
                  selectItem(null);
                  openMenu();
                }}
                sx={styles.clearIcon}
                data-testid={__clearBtnTestId}
              >
                <Icon as={CloseIcon} width={4} height={4} />
              </chakra.button>
            )}

            <chakra.button
              type="button"
              sx={styles.rightIcon({
                isActive: isOpen,
                isClickable: !isDisabled,
                isDisabled,
              })}
              {...getToggleButtonProps({
                disabled: isDisabled,
              })}
              data-testid="hds.combobox.controls.toggle"
            >
              <Icon as={ChevronDownIcon} sx={styles.icon({ isRotated: isOpen })} />
            </chakra.button>
          </chakra.div>

          <FloatingPortal>
            <chakra.nav
              ref={refs.setFloating}
              sx={{
                position: strategy,
                top: `${y ?? 0}px`,
                left: `${x ?? 0}px`,
                zIndex,
              }}
            >
              <chakra.ul
                sx={{
                  ...styles.menu,
                  listStyleType: 'none',
                  ...(!isOpen && {
                    display: 'none',
                  }),
                }}
                {...getMenuProps()}
                data-testid="hds.combobox.options"
              >
                {filteredOptions.map((item, index) => {
                  return (
                    <chakra.li
                      {...getItemProps({
                        key: uuid(),
                        item,
                        index,
                      })}
                      sx={styles.menuitem()}
                      data-testid={
                        typeof __optionTestId === 'function'
                          ? __optionTestId(item)
                          : __optionTestId
                      }
                    >
                      {renderOption(item)}
                    </chakra.li>
                  );
                })}

                {!filteredOptions.length && (
                  <chakra.li
                    fontSize="sm"
                    paddingY={3}
                    paddingX={3}
                    color="neutrals.600"
                    textAlign="center"
                    data-testid="hds.combobox.nomatchfound"
                  >
                    No match found
                  </chakra.li>
                )}
              </chakra.ul>
            </chakra.nav>
          </FloatingPortal>
        </>
      )}
    </FormGroup>
  );
}

export default React.forwardRef(ComboboxField) as <T extends Option>(
  props: ComboboxFieldProps<T> & { ref?: React.ForwardedRef<HTMLInputElement> },
) => JSX.Element;
