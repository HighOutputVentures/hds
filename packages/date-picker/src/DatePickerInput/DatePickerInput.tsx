import {
  Box,
  Icon,
  SystemStyleObject,
  useDisclosure,
  useOutsideClick,
} from "@chakra-ui/react";
import {
  autoPlacement,
  autoUpdate,
  useFloating,
  useTransitionStyles,
} from "@floating-ui/react";
import { TextField } from "@highoutput/hds-forms";
import { format } from "date-fns";
import * as React from "react";
import { DatePicker } from "../DatePicker/DatePicker";
import CalendarIcon from "../icons/CalendarIcon";
import { Nullable } from "../types";
import { noop } from "../utils";
import { ClearButton } from "./ClearButton";

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

export function DatePickerInput({
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
  const inputRef = React.useRef<HTMLInputElement>(null);
  const containerRef = React.useRef<HTMLDivElement>(null);

  const { isOpen, onOpen, onClose } = useDisclosure();

  const { refs, strategy, x, y, context } = useFloating({
    whileElementsMounted: autoUpdate,
    middleware: [
      autoPlacement({
        allowedPlacements: [
          /* ⚠️ order matters here */
          "bottom-start",
          "bottom-end",
          "top-start",
          "top-end",
        ],
      }),
    ],
    open: isOpen && !isReadOnly,
  });

  const { isMounted, styles } = useTransitionStyles(context);

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
                  className="HdsDatePickerInputClearButton"
                  data-testid="hds.datepicker-input.controls.clear"
                />
              ),
            })}
          __fieldTestId="hds.datepicker-input.controls.input"
        />
      </Box>

      {isMounted && (
        <Box
          ref={refs.setFloating}
          sx={{
            top: `${y ?? 0}px`,
            left: `${x ?? 0}px`,
            position: strategy,
            marginTop: "1px",
            /*
             * only calendar needs the zIndex
             */
            zIndex,
            ...styles,
          }}
          data-testid="hds.datepicker-input.calendar-container"
        >
          <DatePicker
            value={value ?? null}
            onChange={(newValue) => {
              onChange(newValue);
              onClose();
            }}
          />
        </Box>
      )}
    </Box>
  );
}
