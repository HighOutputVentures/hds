import { chakra, Fade, Icon, List, ListItem } from '@chakra-ui/react';
import * as combobox from '@zag-js/combobox';
import { normalizeProps, useMachine } from '@zag-js/react';
import * as React from 'react';
import { v4 as uuid } from 'uuid';
import { useStyles } from '../hooks';
import ChevronDownIcon from '../icons/ChevronDownIcon';
import CloseIcon from '../icons/CloseIcon';
import { Nullable, Size } from '../types';

export type Option = {
  label: string;
  value: string | number;
};

export interface ComboboxProps<T extends Option[]> {
  size?: Size;
  name?: string;
  value?: T[number]['value'];
  options?: T;
  onChange?(newValue: Nullable<T[number]['value']>): void;
  leftIcon?: JSX.Element;
  placeholder?: string;
  autoFocus?: boolean;
  isReadOnly?: boolean;
  isDisabled?: boolean;
  isClearable?: boolean;
  isInvalid?: boolean;
  /**
   *
   * Adjust zIndex of menu
   *
   */
  zIndex?: number;
}

/**
 *
 * Combobox using `@zag-js/combobox`
 *
 * @link https://zagjs.com/components/react/combobox
 *
 */
export default function Combobox<T extends Option[]>(props: ComboboxProps<T>) {
  const {
    options = [],
    leftIcon,
    isClearable,
    isInvalid,
    isDisabled,
    isReadOnly,
    zIndex = 1,
    size,
    name,
    value,
    onChange,
    autoFocus,
    placeholder,
  } = props;

  const id = React.useId();
  const [items, setItems] = React.useState<T[number][]>(options);
  const selected = React.useMemo(
    () => options.find((o) => o.value === value),
    [options, value],
  );

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
        onChange?.(newValue.value ?? null);
      },
      loop: false,
      invalid: isInvalid,
      readOnly: isReadOnly,
      disabled: isDisabled,
      openOnClick: true,
      focusOnClear: false,
      positioning: {
        gutter: 1,
      },
      allowCustomValue: false,
      inputBehavior: 'autohighlight',
      selectInputOnFocus: true,
      ...(!!selected && {
        selectionData: {
          label: selected.label,
          value: selected.value.toString(),
        },
      }),
    }),
  );

  const api = combobox.connect(state, send, normalizeProps);

  const styles = useStyles({
    size,
    hasLeftIcon: !!leftIcon,
    hasRightIcon: true,
    hasClearIcon: true,
  });

  return (
    <chakra.div position="relative" width="full" data-testid="hds.combobox">
      <chakra.div {...api.rootProps}>
        <chakra.div
          {...api.controlProps}
          position="relative"
          data-testid="hds.combobox.controls"
        >
          {!!leftIcon && (
            <chakra.div
              sx={styles.leftIcon({ isDisabled })}
              data-testid="hds.combobox.icon.left"
            >
              {React.cloneElement<any>(leftIcon, { sx: styles.icon() })}
            </chakra.div>
          )}

          <chakra.input
            {...api.inputProps}
            sx={styles.field}
            data-testid="hds.combobox.controls.input"
          />

          {!!isClearable && (
            <chakra.button
              {...api.clearTriggerProps}
              type="button"
              sx={styles.clearIcon}
              data-testid="hds.combobox.controls.clear"
            >
              <Icon as={CloseIcon} width={4} height={4} />
            </chakra.button>
          )}

          <chakra.button
            type="button"
            sx={styles.rightIcon({
              isActive: api.isOpen,
              isClickable: true,
              isDisabled,
            })}
            {...api.triggerProps}
            data-testid="hds.combobox.controls.toggle"
          >
            <Icon as={ChevronDownIcon} sx={styles.icon({ isRotated: api.isOpen })} />
          </chakra.button>
        </chakra.div>
      </chakra.div>

      <chakra.nav sx={{ ...styles.menu, zIndex }} {...api.positionerProps}>
        <Fade in={api.isOpen}>
          <List {...api.contentProps} data-testid="hds.combobox.options">
            {items.map((item, index) => {
              return (
                <ListItem
                  key={uuid()}
                  sx={styles.menuitem()}
                  {...api.getOptionProps({
                    index,
                    label: item.label,
                    value: item.value.toString(),
                  })}
                  data-testid="hds.combobox.options.option"
                >
                  {item.label}
                </ListItem>
              );
            })}

            {!items.length && (
              <ListItem
                fontSize="sm"
                paddingY={3}
                paddingX={3}
                color="neutrals.600"
                textAlign="center"
                data-testid="hds.combobox.nomatchfound"
              >
                No match found
              </ListItem>
            )}
          </List>
        </Fade>
      </chakra.nav>
    </chakra.div>
  );
}
