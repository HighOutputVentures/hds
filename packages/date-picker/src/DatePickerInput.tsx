import {
  Box,
  Flex,
  Icon,
  SystemStyleObject,
  chakra,
  useDisclosure,
  useOutsideClick,
} from "@chakra-ui/react";
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

type StylingProps = Omit<SystemStyleObject, keyof DatePickerInputProps>;

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

  const { isOpen, onOpen, onClose } = useDisclosure();

  const dateToString = (d: Date) => {
    if (!dateFormat) {
      return format(d, "MMM dd, yyyy");
    } else if (typeof dateFormat === "string") {
      return format(d, dateFormat);
    } else {
      return dateFormat(d);
    }
  };

  useOutsideClick({ ref: containerRef, handler: onClose });

  return (
    <Box id={uniqid} ref={containerRef} position="relative" sx={styles}>
      <Box
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
      >
        <Flex
          left="14px"
          color="gray.500"
          position="absolute"
          top="50%"
          transform="translateY(-50%)"
          flexShrink={0}
          pointerEvents="none"
        >
          <Icon as={CalendarIcon} width="20px" height="20px" />
        </Flex>

        <chakra.input
          ref={inputRef}
          id={id}
          name={name}
          value={value ? dateToString(value) : ""}
          placeholder={placeholder}
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
          onFocus={onOpen}
          {...(isClearable && { paddingRight: `${14 + 8 + 20}px` })}
        />

        {isClearable && !!value && (
          <ClearButton
            onClick={() => {
              onChange(null);
              inputRef.current?.focus();
            }}
          />
        )}
      </Box>

      {isOpen && (
        <Box
          top="100%"
          left="0"
          width="fit-content"
          bgColor="white"
          border="1px"
          borderColor="gray.100"
          rounded="8px"
          paddingX="24px"
          paddingY="20px"
          position="absolute"
          marginTop="1px"
          sx={{
            /*
             * only calendar needs the zIndex
             */
            zIndex,
          }}
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
