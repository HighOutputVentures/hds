import {
  Box,
  chakra,
  Icon,
  SystemStyleObject,
  useDisclosure,
  useOutsideClick,
} from "@chakra-ui/react";
import { autoPlacement, autoUpdate, flip, useFloating } from "@floating-ui/react";
import { TextField } from "@highoutput/hds-forms";
import { format } from "date-fns";
import * as React from "react";
import Calendar from "./Calendar";
import { useStyles } from "./hooks";
import CalendarIcon from "./icons/CalendarIcon";
import CloseIcon from "./icons/CloseIcon";
import { Nullable } from "./types";
import { noop } from "./utils";

type Size = "sm" | "md";

export type DatePickerInputProps = {
  id?: string;
  size?: Size;
  name?: string;
  value?: Nullable<Date>;
  onChange?(newValue: Nullable<Date>): void;
  placeholder?: string;
  isInvalid?: boolean;
  isDisabled?: boolean;
  isReadOnly?: boolean;
  isClearable?: boolean;
  dateFormat?: ((value: Date) => string) | string;
};

type StylingProps = Omit<SystemStyleObject, keyof Required<DatePickerInputProps>>;

export default function DatePickerInput({
  id,
  size = "md",
  name,
  value,
  onChange = noop,
  placeholder,
  isInvalid,
  isDisabled,
  isReadOnly,
  dateFormat,
  isClearable,
  zIndex = 1,
  ...others
}: DatePickerInputProps & StylingProps) {
  const styles = useStyles();

  const inputRef = React.useRef<HTMLInputElement>(null);
  const containerRef = React.useRef<HTMLDivElement>(null);

  const { refs, strategy, x, y } = useFloating({
    whileElementsMounted: autoUpdate,
    middleware: [
      autoPlacement({
        allowedPlacements: [
          /* ⚠️ order matters here */
          "bottom-start",
          "top-start",
          "bottom-end",
          "top-end",
        ],
      }),
      flip(),
    ],
  });

  const { isOpen, onOpen, onClose } = useDisclosure();

  useOutsideClick({ ref: containerRef, handler: onClose });

  const dateToString = React.useCallback(
    (d: Date) => {
      if (!dateFormat) {
        return format(d, "MMM dd, yyyy");
      } else if (typeof dateFormat === "string") {
        return format(d, dateFormat);
      } else {
        return dateFormat(d);
      }
    },
    [dateFormat],
  );

  return (
    <Box ref={containerRef} sx={others} data-testid="hds.datepicker-input">
      <Box
        ref={refs.setReference}
        sx={{
          _hover: {
            "& .HdsDatePickerInputClearButton": {
              display: "flex!important",
            },
          },
        }}
        data-testid="hds.datepicker-input.controls"
      >
        <TextField
          ref={inputRef}
          id={id}
          size={size}
          name={name}
          value={value ? dateToString(value) : ""}
          placeholder={placeholder}
          isReadOnly={isReadOnly}
          isDisabled={isDisabled}
          onFocus={onOpen}
          onChange={noop}
          leftIcon={<Icon as={CalendarIcon} width="20px" height="20px" />}
          {...(!!isClearable &&
            !isDisabled &&
            !isReadOnly &&
            !!value && {
              rightIcon: (
                <ClearButton
                  onClick={() => {
                    onChange(null);
                    inputRef.current?.focus();
                  }}
                  data-testid="hds.datepicker-input.controls.clear"
                />
              ),
            })}
          __fieldTestId="hds.datepicker-input.controls.input"
        />
      </Box>

      {isOpen && !isReadOnly && (
        <Box
          ref={refs.setFloating}
          sx={{
            ...styles.calendar(),
            top: `${y ?? 0}px`,
            left: `${x ?? 0}px`,
            position: strategy,
            marginTop: "1px",
            /*
             * only calendar needs the zIndex
             */
            zIndex,
          }}
          data-testid="hds.datepicker-input.calendar-container"
        >
          <Calendar
            selected={value ?? null}
            onSelect={(newValue) => {
              onChange(newValue);
              onClose();
            }}
          />
        </Box>
      )}
    </Box>
  );
}

const ClearButton = React.forwardRef<HTMLButtonElement, React.ComponentProps<"button">>(
  function ClearButton(props, ref) {
    return (
      <chakra.button
        ref={ref}
        height={5}
        width={5}
        rounded="md"
        display="none"
        alignItems="center"
        justifyContent="center"
        bgColor="blackAlpha.200"
        color="blackAlpha.600"
        transition="colors 300ms ease-in-out"
        pointerEvents="all"
        _hover={{
          color: "blackAlpha.700",
        }}
        tabIndex={-1}
        className="HdsDatePickerInputClearButton"
        {...props}
      >
        <Icon as={CloseIcon} width={4} height={4} />
      </chakra.button>
    );
  },
);
