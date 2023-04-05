import {
  Box,
  chakra,
  Flex,
  Icon,
  SystemStyleObject,
  useDisclosure,
  useOutsideClick,
} from "@chakra-ui/react";
import { autoPlacement, autoUpdate, useFloating } from "@floating-ui/react";
import { format } from "date-fns";
import * as React from "react";
import Calendar from "./Calendar";
import CalendarIcon from "./icons/CalendarIcon";
import CloseIcon from "./icons/CloseIcon";
import { Nullable } from "./types";
import { noop } from "./utils";

type Size = "sm" | "md" | "lg";

export type DatePickerInputProps = {
  id?: string;
  size?: Size;
  name?: string;
  value?: Nullable<Date>;
  onChange?(newValue: Nullable<Date>): void;
  placeholder?: string;
  isInvalid?: boolean;
  /** Not implemented yet */
  isDisabled?: boolean;
  /** Not implemented yet */
  isReadOnly?: boolean;
  isClearable?: boolean;
  dateFormat?: ((value: Date) => string) | string;
};

type StylingProps = Omit<
  SystemStyleObject,
  keyof Required<DatePickerInputProps>
>;

export default function DatePickerInput({
  id,
  name,
  value,
  onChange = noop,
  placeholder,
  isInvalid,
  isDisabled,
  isReadOnly,
  dateFormat,
  isClearable,
  zIndex,
  ...styles
}: DatePickerInputProps & StylingProps) {
  const uniqid = React.useId();
  const inputRef = React.useRef<HTMLInputElement>(null);
  const containerRef = React.useRef<HTMLDivElement>(null);

  const { refs, strategy, x, y } = useFloating({
    whileElementsMounted: autoUpdate,
    middleware: [
      autoPlacement({
        allowedPlacements: [
          "top-end",
          "top-start",
          "bottom-end",
          "bottom-start",
        ],
      }),
    ],
  });

  const { isOpen, onOpen, onClose } = useDisclosure({
    id: `${uniqid}__HdsDatePicker`,
  });

  useOutsideClick({ ref: containerRef, handler: onClose });

  const dateToString = (d: Date) => {
    if (!dateFormat) {
      return format(d, "MMM dd, yyyy");
    } else if (typeof dateFormat === "string") {
      return format(d, dateFormat);
    } else {
      return dateFormat(d);
    }
  };

  return (
    <Box
      id={uniqid}
      ref={containerRef}
      sx={styles}
      data-testid="hds.datepicker-input"
    >
      <Box
        ref={refs.setReference}
        border="1px"
        borderColor="neutrals.200"
        rounded="8px"
        boxShadow="0px 1px 2px rgba(16, 24, 40, 0.05)"
        overflow="hidden"
        position="relative"
        alignItems="center"
        /*
         * toggle clear button
         */
        _hover={{
          borderColor: "neutrals.300",
          "& .clear-button": {
            display: "flex",
          },
        }}
        _focus={{
          borderColor: "brand.primary.700",
        }}
        _invalid={{
          borderColor: "interface.error.700",
        }}
        {...(isOpen && {
          "data-focus": true,
        })}
        {...(isInvalid && {
          "data-invalid": true,
        })}
        data-testid="hds.datepicker-input.controls"
      >
        <Flex
          left="14px"
          color="gray.500"
          position="absolute"
          top="50%"
          transform="translateY(-50%)"
          flexShrink={0}
          pointerEvents="none"
          data-testid="hds.datepicker-input.icon.left"
        >
          <Icon as={CalendarIcon} width="20px" height="20px" />
        </Flex>

        <chakra.input
          ref={inputRef}
          id={id}
          name={name}
          value={value ? dateToString(value) : ""}
          placeholder={placeholder}
          width="full"
          flexGrow={1}
          paddingY="10px"
          paddingRight="14px"
          paddingLeft={`${14 + 8 + 20}px`}
          _placeholder={{
            color: "neutrals.400",
          }}
          _focus={{
            outline: "none",
          }}
          onFocus={() => {
            onOpen();
          }}
          onChange={noop}
          {...(isClearable && { paddingRight: `${14 + 8 + 20}px` })}
          data-testid="hds.datepicker-input.controls.input"
        />

        {isClearable && !!value && (
          <ClearButton
            onClick={() => {
              onChange(null);
              inputRef.current?.focus();
            }}
            data-testid="hds.datepicker-input.controls.clear"
          />
        )}
      </Box>

      {isOpen && (
        <Box
          ref={refs.setFloating}
          top={`${y ?? 0}px`}
          left={`${x ?? 0}px`}
          width="fit-content"
          bgColor="white"
          border="1px"
          borderColor="gray.100"
          rounded="8px"
          paddingX="24px"
          paddingY="20px"
          position={strategy}
          marginTop="1px"
          sx={{
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

const ClearButton = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<"button">
>(function ClearButton(props, ref) {
  return (
    <chakra.button
      ref={ref}
      top="50%"
      right="14px"
      position="absolute"
      transform="translateY(-50%)"
      height={5}
      width={5}
      rounded="md"
      display="none"
      alignItems="center"
      justifyContent="center"
      bgColor="blackAlpha.200"
      color="blackAlpha.600"
      transition="colors 300ms ease-in-out"
      tabIndex={-1}
      className="clear-button"
      _hover={{
        color: "blackAlpha.700",
      }}
      {...props}
    >
      <Icon as={CloseIcon} width={4} height={4} />
    </chakra.button>
  );
});
