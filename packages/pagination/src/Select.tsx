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
  useInteractions,
  useListNavigation,
  useRole,
  useTransitionStyles,
} from '@floating-ui/react';
import { ComponentProps, useRef, useState } from 'react';
import { v4 as uuid } from 'uuid';

type Option<T extends string | number> = {
  label: string;
  value: T;
};

type SelectProps<T extends string | number> = {
  value?: Option<T>['value'];
  onChange?(newValue?: Option<T>['value']): void;
  options?: Option<T>[];
  placeholder?: string;
  __fieldTestId?: string;
  __optionTestId?: string | ((option: Option<T>) => string);
  __optionsTestId?: string;
};

export function Select<T extends string | number>({
  value,
  onChange,
  options = [],
  placeholder = '',
  __fieldTestId = 'hds.pagination.controls.select',
  __optionTestId = 'hds.pagination.controls.options.option',
  __optionsTestId = 'hds.pagination.controls.options',
}: SelectProps<T>) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const { refs, strategy, x, y, context } = useFloating({
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
        apply({ rects, elements, availableHeight }) {
          Object.assign(elements.floating.style, {
            minWidth: `${rects.reference.width}px`,
            maxHeight: `${availableHeight}px`,
          });
        },
      }),
    ],
  });

  const { isMounted, styles } = useTransitionStyles(context, {
    duration: {
      close: 100,
      open: 150,
    },
  });

  const click = useClick(context, { event: 'mousedown' });
  const role = useRole(context, { role: 'listbox' });
  const dismiss = useDismiss(context);

  const listRef = useRef<(HTMLElement | null)[]>([]);
  const listNav = useListNavigation(context, {
    loop: true,
    listRef,
    activeIndex,
    selectedIndex: options.findIndex((o) => o.value === value),
    onNavigate: setActiveIndex,
  });

  const { getReferenceProps, getFloatingProps, getItemProps } = useInteractions([
    dismiss,
    role,
    listNav,
    click,
  ]);

  return (
    <>
      <chakra.button
        ref={refs.setReference}
        fontSize="14px"
        color="neutrals.700"
        border="1px solid"
        borderColor="neutrals.300"
        height="40px"
        width="full"
        aria-label="Pagination Select entries button"
        rounded="lg"
        display="flex"
        alignItems="center"
        textAlign="start"
        gap={2}
        px="14px"
        py="12px"
        _focus={{
          outline: 'none',
          borderColor: 'brand.primary.700',
        }}
        {...(isOpen && {
          borderColor: 'brand.primary.700',
        })}
        data-testid={__fieldTestId}
        {...getReferenceProps()}
      >
        <chakra.span flexGrow={1}>
          {options.find((o) => o.value === value)?.label ?? placeholder}
        </chakra.span>

        <chakra.span
          sx={{
            display: 'flex',
            alignItems: 'center',
            transition: 'all 250ms ease-in-out',
            ...(isOpen && {
              transform: 'rotate(180deg)',
            }),
          }}
        >
          <Icon as={ChevronDownIcon} width={4} height={4} />
        </chakra.span>
      </chakra.button>

      {isMounted && (
        <FloatingPortal>
          <FloatingFocusManager context={context} modal={false}>
            <chakra.nav
              ref={refs.setFloating}
              sx={{
                pos: strategy,
                top: `${y}px`,
                left: `${x}px`,
                zIndex: 'modal',
                outline: 'none',
                bgColor: 'white',
                ...styles,
              }}
              {...getFloatingProps()}
            >
              <chakra.ul
                listStyleType="none"
                border="1px solid"
                borderColor="neutrals.200"
                rounded="lg"
                overflow="hidden"
                data-testid={__optionsTestId}
              >
                {options.map((option, index) => (
                  <chakra.li
                    ref={(node) => {
                      listRef.current[index] = node;
                    }}
                    key={uuid()}
                    display="flex"
                    alignItems="center"
                    fontSize="14px"
                    color="neutrals.700"
                    cursor="pointer"
                    tabIndex={0}
                    outline="none"
                    px="14px"
                    py="8px"
                    _focus={{
                      bgColor: 'neutrals.100',
                    }}
                    _hover={{
                      bgColor: 'neutrals.100',
                    }}
                    {...getItemProps({
                      onClick() {
                        onChange?.(option.value);
                        setIsOpen(false);
                        setActiveIndex(null);
                      },
                      onKeyDown(event) {
                        if (event.key === 'Enter') {
                          event.preventDefault();
                          onChange?.(option.value);
                          setIsOpen(false);
                          setActiveIndex(null);
                        }
                      },
                    })}
                    data-testid={
                      typeof __optionTestId === 'function'
                        ? __optionTestId(option)
                        : __optionTestId
                    }
                  >
                    <chakra.span flexGrow={1}>{option.label}</chakra.span>

                    {value === option.value && (
                      <chakra.span color="brand.primary.700">
                        <Icon as={CheckIcon} />
                      </chakra.span>
                    )}
                  </chakra.li>
                ))}
              </chakra.ul>
            </chakra.nav>
          </FloatingFocusManager>
        </FloatingPortal>
      )}
    </>
  );
}

function ChevronDownIcon(props: ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
}

function CheckIcon(props: ComponentProps<'svg'>) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M16.6668 5L7.50016 14.1667L3.3335 10"
        stroke="currentColor"
        strokeWidth="1.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
