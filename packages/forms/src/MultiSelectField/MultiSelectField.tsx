import { Icon, chakra } from '@chakra-ui/react';
import {
  FloatingFocusManager,
  FloatingPortal,
  autoUpdate,
  flip,
  size as floatingSize,
  offset,
  shift,
  useClick,
  useDismiss,
  useFloating,
  useFocus,
  useInteractions,
  useListNavigation,
  useMergeRefs,
  useTransitionStyles,
} from '@floating-ui/react';
import {
  ForwardedRef,
  Fragment,
  ReactNode,
  forwardRef,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { invariant } from 'shared/utils';
import { v4 as uuid } from 'uuid';
import FormGroup, { FormGroupProps } from '../FormGroup/FormGroup';
import CloseIcon from '../icons/CloseIcon';
import CheckIcon from './CheckIcon';

interface Option<T extends string | number> {
  label: string;
  value: T;
}

interface RenderValueContext {
  onClose(): void;
}

interface RenderOptionContext {
  index: number;
  isSelected: boolean;
  isHighlighted: boolean;
}

export type MultiSelectFieldProps<T extends string | number> = FormGroupProps & {
  name?: string;
  placeholder?: string;
  value?: Option<T>['value'][];
  options?: Option<T>[];
  onChange?(newValue: Option<T>['value'][]): void;
  renderValue?(option: Option<T>, context: RenderValueContext): ReactNode;
  renderOption?(option: Option<T>, context: RenderOptionContext): ReactNode;
  __fieldTestId?: string;
  __valueTestId?: string | ((option: Option<T>) => string);
  __optionTestId?: string | ((option: Option<T>) => string);
};

const MultiSelectFieldInternal = function MultiSelectFieldInternal<
  T extends string | number,
>(
  {
    name,
    zIndex = 'modal',
    placeholder,
    value = [],
    onChange,
    options = [],
    renderValue,
    renderOption,
    __fieldTestId = 'hds.multi-select.field',
    __valueTestId = 'hds.multi-select.value',
    __optionTestId = 'hds.multi-select.option',
    ...formGroupProps
  }: MultiSelectFieldProps<T>,
  ref: ForwardedRef<HTMLInputElement>,
) {
  const [isOpen, setIsOpen] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);
  const inputMergedRef = useMergeRefs([ref, inputRef]);

  const { refs, x, y, context, strategy } = useFloating({
    open: isOpen,
    onOpenChange: setIsOpen,
    strategy: 'fixed',
    placement: 'bottom-start',
    whileElementsMounted: autoUpdate,
    middleware: [
      offset(4),
      flip(),
      shift({
        padding: 6,
      }),
      floatingSize({
        apply({ rects, elements }) {
          Object.assign(elements.floating.style, {
            minWidth: `${rects.reference.width}px`,
          });
        },
      }),
    ],
  });

  const dismiss = useDismiss(context);
  const focus = useFocus(context);
  const click = useClick(context, {
    keyboardHandlers: false,
  });

  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [inputValue, setInputValue] = useState('');

  const listRef = useRef<HTMLLIElement[]>([]);
  const listNavigation = useListNavigation(context, {
    listRef,
    activeIndex,
    onNavigate: setActiveIndex,
    virtual: true,
    loop: true,
  });

  const { isMounted, styles } = useTransitionStyles(context);
  const { getReferenceProps, getFloatingProps, getItemProps } = useInteractions([
    click,
    focus,
    dismiss,
    listNavigation,
  ]);

  const filteredOptions = useMemo(() => {
    return options.filter((option) =>
      option.label.toLowerCase().startsWith(inputValue.toLowerCase()),
    );
  }, [inputValue, options]);

  useEffect(() => {
    return () => {
      setIsOpen(false);
      setActiveIndex(null);
      setInputValue('');
    };
  }, []);

  return (
    <>
      <FormGroup {...formGroupProps}>
        {({ id, errorId, errorMsg, isDisabled, isReadOnly, hintId }) => (
          <Container
            ref={refs.setReference}
            {...(isOpen && {
              'data-opened': true,
            })}
            {...(errorMsg && {
              'data-invalid': true,
            })}
            {...(isDisabled && {
              'data-disabled': true,
            })}
            {...getReferenceProps({
              onClick() {
                inputRef.current?.focus();
              },
            })}
            data-testid="hds.multi-select.container"
          >
            {value.map((v, _, arr) => {
              /* get actual option */
              const option = options.find((o) => o.value === v);

              invariant(option);

              /* removes option from value */
              const onClose = () => {
                onChange?.(arr.filter((i) => i !== option.value));
                inputRef.current?.focus();
              };

              if (renderValue) {
                return (
                  <Fragment key={uuid()}>
                    {renderValue(option, {
                      onClose,
                    })}
                  </Fragment>
                );
              }

              return (
                <Tag
                  key={uuid()}
                  data-testid={
                    typeof __valueTestId === 'function'
                      ? __valueTestId(option)
                      : __valueTestId
                  }
                >
                  <TagLabel>{option.label}</TagLabel>
                  <TagCloseButton
                    type="button"
                    tabIndex={-1}
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();

                      onClose();
                    }}
                    data-testid="hds.multi-select.control.unselect-value"
                  >
                    <Icon as={CloseIcon} w={3} h={3} />
                  </TagCloseButton>
                </Tag>
              );
            })}

            <Field
              id={id}
              ref={inputMergedRef}
              name={name}
              placeholder={placeholder}
              disabled={isDisabled}
              readOnly={isReadOnly}
              onChange={(e) => {
                setInputValue(e.target.value);
              }}
              onKeyDown={(e) => {
                if (
                  e.key === 'Enter' &&
                  activeIndex != null &&
                  filteredOptions[activeIndex]
                ) {
                  const option = filteredOptions[activeIndex];

                  setActiveIndex(null);

                  const isSelected = value.some(
                    (optionValue) => optionValue === option.value,
                  );

                  const newValue = isSelected
                    ? value.filter((optionValue) => optionValue !== option.value)
                    : [...value, option.value];

                  onChange?.(newValue);
                }
              }}
              {...{
                'data-testid': __fieldTestId,
                'aria-describedby': hintId,

                ...(errorMsg && {
                  'aria-invalid': true,
                  'aria-describedby': errorId,
                  'aria-errormessage': errorMsg,
                }),
              }}
            />
          </Container>
        )}
      </FormGroup>

      <FloatingPortal>
        {isMounted && (
          <FloatingFocusManager context={context} initialFocus={-1}>
            <Menu
              ref={refs.setFloating}
              sx={{
                pos: strategy,
                top: `${y}px`,
                left: `${x}px`,
                zIndex,
                ...styles,
              }}
              {...getFloatingProps()}
              data-testid="hds.multi-select.menu-wrapper"
            >
              <MenuList data-testid="hds.multi-select.menu">
                {filteredOptions.map((option, index) => {
                  const isSelected = value.some((v) => v === option.value);
                  const isHighlighted = activeIndex === index;

                  return (
                    <MenuItem
                      key={uuid()}
                      tabIndex={0}
                      ref={(node) => {
                        if (node) {
                          listRef.current[index] = node;
                        }
                      }}
                      {...getItemProps({
                        onClick(e) {
                          e.preventDefault();
                          e.stopPropagation();

                          const newValue = isSelected
                            ? value.filter((optionValue) => optionValue !== option.value)
                            : [...value, option.value];

                          onChange?.(newValue);
                          inputRef.current?.focus();
                          setIsOpen(false);
                        },
                      })}
                      data-testid={
                        typeof __optionTestId === 'function'
                          ? __optionTestId(option)
                          : __optionTestId
                      }
                    >
                      {renderOption ? (
                        renderOption(option, {
                          index,
                          isSelected,
                          isHighlighted,
                        })
                      ) : (
                        <Option
                          {...(isSelected && {
                            'data-selected': true,
                          })}
                          {...(isHighlighted && {
                            'data-highlighted': true,
                          })}
                        >
                          <chakra.span flexGrow={1}>{option.label}</chakra.span>

                          {isSelected && (
                            <chakra.span color="brand.primary.700">
                              <Icon as={CheckIcon} w={4} h={4} />
                            </chakra.span>
                          )}
                        </Option>
                      )}
                    </MenuItem>
                  );
                })}

                {filteredOptions.length === 0 && <chakra.li>No more options</chakra.li>}
              </MenuList>
            </Menu>
          </FloatingFocusManager>
        )}
      </FloatingPortal>
    </>
  );
};

const Field = chakra('input', {
  baseStyle: {
    outline: 'none',
    _placeholder: {
      color: 'neutrals.500',
    },
  },
});

const Container = chakra('div', {
  baseStyle: {
    gap: '6px',
    display: 'flex',
    flexWrap: 'wrap',
    border: '1px solid',
    borderColor: 'neutrals.200',
    rounded: '4px',
    paddingX: '14px',
    paddingY: '10px',
    minHeight: '48px',
    boxShadow: '0px 1px 2px rgba(16, 24, 40, 0.05)',

    _hover: {
      borderColor: 'neutrals.300',
    },

    '&[data-opened]': {
      borderColor: 'brand.primary.700',
    },

    '&[data-invalid]': {
      borderColor: 'interface.error.700',
    },
  },
});

const Menu = chakra('nav', {
  baseStyle: {
    overflow: 'hidden',
    borderWidth: '1px',
    borderColor: 'neutrals.200',
    borderRadius: '8px',
    bgColor: 'white',
  },
});

const MenuList = chakra('ul', {
  baseStyle: {
    listStyle: 'none',
  },
});

const MenuItem = chakra('li', {
  cursor: 'pointer',
});

const Option = chakra('div', {
  baseStyle: {
    display: 'flex',
    alignItems: 'center',
    paddingY: '13px',
    paddingX: '14px',
    transition: 'colors 300ms ease-in-out',

    '&[data-selected]': {},

    '&[data-highlighted]': {
      bgColor: 'neutrals.100',
    },
  },
});

const Tag = chakra('div', {
  baseStyle: {
    height: '24px',
    border: '1px solid',
    borderColor: 'neutrals.200',
    rounded: '6px',
    paddingX: '4px',
    paddingY: '2px',
    gap: '3px',
    display: 'flex',
    alignItems: 'center',
  },
});

const TagLabel = chakra('span', {
  baseStyle: {
    fontSize: '14px',
    lineHeight: '20px',
    color: 'neutrals.700',
  },
});

const TagCloseButton = chakra('button', {
  baseStyle: {
    display: 'flex',
    padding: '2px',
    rounded: '4px',
    _hover: {
      bgColor: 'blackAlpha.200',
    },
  },
});

export default forwardRef(MultiSelectFieldInternal);
