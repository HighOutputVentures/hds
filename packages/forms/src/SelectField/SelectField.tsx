import { chakra, Icon } from '@chakra-ui/react';
import {
  autoUpdate,
  flip,
  FloatingPortal,
  size as floatingSize,
  useFloating,
} from '@floating-ui/react';
import { useSelect } from 'downshift';
import * as React from 'react';
import { v4 as uuid } from 'uuid';
import FormGroup, { FormGroupProps } from '../FormGroup/FormGroup';
import { useStyles } from '../hooks';
import ChevronDownIcon from '../icons/ChevronDownIcon';
import { Prettify, Size } from '../types';

export type Option = {
  label: string;
  value: string | number;
};

type RenderOption<T extends Option> = (item: T) => JSX.Element;

type SelectFieldBaseProps<T extends Option> = {
  name?: string;
  size?: Size;
  value?: T['value'];
  onChange?(newValue: T['value']): void;
  options?: T[];
  placeholder?: string;
  leftIcon?: JSX.Element;
  renderOption?: RenderOption<T>;
  __fieldTestId?: string;
  __optionTestId?: string | ((item: T) => string);
};

export type SelectFieldProps<T extends Option> = Prettify<
  FormGroupProps & SelectFieldBaseProps<T>
>;

/*
 * TODO: implement "isReadOnly"
 */
function SelectField<T extends Option>(
  props: SelectFieldProps<T>,
  ref: React.ForwardedRef<HTMLButtonElement>,
) {
  const {
    size,
    options = [],
    value,
    onChange,
    leftIcon,
    placeholder,
    zIndex = 'modal',
    renderOption = (item) => <chakra.div>{String(item.label)}</chakra.div>,
    __fieldTestId = 'hds.select-field.input',
    __optionTestId = 'hds.select-field.option',
    ...formGroupProps
  } = props;

  const styles = useStyles({
    size,
    hasRightIcon: true,
    hasLeftIcon: !!leftIcon,
  });

  const {
    isOpen,
    selectedItem,
    highlightedIndex,
    getToggleButtonProps,
    getMenuProps,
    getItemProps,
    closeMenu,
    openMenu,
  } = useSelect({
    items: options,
    initialSelectedItem: options.find((o) => o.value === value),
    onSelectedItemChange(changes) {
      if (changes.selectedItem) {
        onChange?.(changes.selectedItem.value);
      }
    },
  });

  const { refs, strategy, x, y } = useFloating({
    open: isOpen,
    onOpenChange(v) {
      if (v) {
        openMenu();
      } else {
        closeMenu();
      }
    },
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
    <FormGroup {...formGroupProps}>
      {({ id, isInvalid, isDisabled, errorId, errorMsg, hintId, isReadOnly }) => (
        <chakra.div>
          <chakra.button
            ref={ref}
            sx={{
              ...styles.field,
              width: 'full',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              userSelect: 'none',
              textAlign: 'left',
              position: 'relative',
              _placeholder: {},
            }}
            /* HINT */
            {...(!hintId && {
              'aria-describedby': hintId,
            })}
            /* ERROR */
            {...(isInvalid && {
              'aria-invalid': true,

              ...(errorMsg && {
                'aria-errormessage': errorMsg,
                'aria-describedby': errorId,
              }),
            })}
            /* DISABLED */
            {...(isDisabled && {
              disabled: true,
            })}
            {...getToggleButtonProps({
              ref: refs.setReference,
              id,
            })}
            data-testid={__fieldTestId}
          >
            {leftIcon && (
              <chakra.div sx={styles.leftIcon({ isDisabled })}>
                {React.cloneElement(leftIcon, { sx: styles.icon() })}
              </chakra.div>
            )}

            <chakra.div
              sx={{
                flexGrow: 1,
                color: 'neutrals.500',
                ...(isDisabled && {
                  color: 'neutrals.300',
                }),
                ...(selectedItem && {
                  color: 'neutrals.900',
                  ...(isDisabled && {
                    color: 'neutrals.300',
                  }),
                }),
              }}
            >
              {selectedItem ? selectedItem.label : placeholder}
            </chakra.div>

            <chakra.div
              sx={styles.rightIcon({
                isActive: isOpen,
                isClickable: true,
                isDisabled,
              })}
            >
              <Icon
                as={ChevronDownIcon}
                sx={styles.icon({
                  isRotated: isOpen,
                })}
              />
            </chakra.div>
          </chakra.button>

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
              >
                {options.map((item, index) => (
                  <chakra.li
                    sx={styles.menuitem({
                      isSelected: selectedItem?.value === item.value,
                      isHighlighted: highlightedIndex === index,
                    })}
                    data-testid={
                      typeof __optionTestId === 'function'
                        ? __optionTestId(item)
                        : __optionTestId
                    }
                    {...getItemProps({
                      key: uuid(),
                      item,
                      index,
                    })}
                  >
                    {renderOption(item)}
                  </chakra.li>
                ))}
              </chakra.ul>
            </chakra.nav>
          </FloatingPortal>
        </chakra.div>
      )}
    </FormGroup>
  );
}

export default React.forwardRef(SelectField) as <T extends Option>(
  props: SelectFieldProps<T> & { ref?: React.ForwardedRef<HTMLButtonElement> },
) => JSX.Element;
