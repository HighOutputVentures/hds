import { Box, Icon } from "@chakra-ui/react";
import * as React from "react";
import CheckIcon from "./CheckIcon";
import CircleIcon from "./CircleIcon";

type RenderChildrenContext<T> = {
  item: T;
  index: number;
  selected: boolean;
  getProps(args?: { disabled?: boolean }): {
    icon: Record<string, any>;
    radio: Record<string, any>;
    container: Record<string, any>;
  };
};

type RadioGroupSize = "sm" | "md";

type RadioGroupVariant = "circle" | "square" | "dot";

type RadioGroupBaseProps<T extends unknown[]> = {
  size?: RadioGroupSize;
  variant?: RadioGroupVariant;
  items: T;
  children(context: RenderChildrenContext<T[number]>): React.ReactNode;
  compareFn?: (item: T[number]) => unknown;
};

export type RadioGroupProps<T extends unknown[]> = RadioGroupBaseProps<T> &
  (
    | {
        value: T[number][];
        onChange(value: T[number][]): void;
        multiple: true;
      }
    | {
        value: T[number];
        onChange(value: T[number]): void;
        multiple?: false;
      }
  );

export default function RadioGroup<T extends unknown[]>(props: RadioGroupProps<T>) {
  const {
    variant = "circle",
    size = "md",
    items,
    children,
    compareFn = function (item) {
      return item;
    },
    ...others
  } = props;

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 4,
      }}
    >
      {items.map((item, index) => {
        const selected = !others.multiple
          ? compareFn(others.value) === compareFn(item)
          : others.value.some((i) => compareFn(item) === compareFn(i));

        return children({
          item,
          index,
          selected,
          getProps({ disabled }) {
            return {
              radio: {
                ...(!disabled && {
                  ...(!selected && {
                    border: "1px solid #D6D6D6",
                    bgColor: "#FFFFFF",
                  }),
                  ...(selected && {
                    border: "1px solid #8A68EF",
                    bgColor: variant === "circle" ? "#8A68EF" : "#EDE8FC",
                    children:
                      variant === "dot" ? (
                        <Icon
                          as={CircleIcon}
                          width={{ sm: "6px", md: "8px" }[size]}
                          height={{ sm: "6px", md: "8px" }[size]}
                        />
                      ) : (
                        <Icon
                          as={CheckIcon}
                          width={{ sm: "8px", md: "10px" }[size]}
                          height={{ sm: "8px", md: "10px" }[size]}
                          color={variant === "square" ? "#8A68EF" : "#FFFFFF"}
                        />
                      ),
                  }),
                }),
                ...(disabled && {
                  ...(!selected && {
                    border: "1px solid #F0F0F0",
                    bgColor: "#FCFCFC",
                  }),
                  ...(selected && {
                    border: "1px solid #D6D6D6",
                    bgColor: "#D6D6D6",
                    children: <Icon as={CheckIcon} w="10px" h="10px" />,
                  }),
                }),
                // common
                tabIndex: -1,
                className: "RadioGroup__Radio",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                rounded: variant === "square" ? "4px" : "full",
                width: size === "sm" ? "16px" : "20px",
                height: size === "sm" ? "16px" : "20px",
                transition: [
                  "background-color 300ms ease-in-out",
                  "box-shadow 300ms ease-in-out",
                  "border-color 300ms ease-in-out",
                ].join(),
              },
              icon: {
                className: "RadioGroup__Icon",
                ...(disabled && {
                  color: "#D0D5DD",
                  bgColor: "#F2F4F7",
                  borderColor: "#F9FAFB",
                }),
                ...(!disabled && {
                  color: "#8A68EF",
                  bgColor: "#EDE8FC",
                  borderColor: "#F9F5FF",
                }),
                width: size === "sm" ? "32px" : "40px",
                height: size === "sm" ? "32px" : "40px",
                borderWidth: size === "sm" ? "4px" : "6px",
                borderStyle: "solid",
                rounded: "full",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: [
                  "color 300ms ease-in-out",
                  "box-shadow 300ms ease-in-out",
                  "border-color 300ms ease-in-out",
                  "background-color 300ms ease-in-out",
                ].join(),
              },
              container: {
                ...(!disabled && {
                  ...(!selected && {
                    border: "1px solid #EAECF0",
                    bgColor: "#FFFFFF",
                    _hover: {
                      border: "1px solid #D6BBFB",

                      // radio
                      "& .RadioGroup__Radio": {
                        border: "1px solid #8A68EF",
                        bgColor: "#EDE8FC",
                      },
                    },
                    _focus: {
                      border: "1px solid #D6BBFB",
                      boxShadow: "0px 0px 0px 4px #E3E3FC",

                      // radio
                      "& .RadioGroup__Radio": {
                        border: "1px solid #EDE8FC",
                        bgColor: "#FFFFFF",
                        boxShadow: "0px 0px 0px 4px #F4EBFF",
                      },
                    },
                  }),
                  ...(selected && {
                    border: "1px solid #8A68EF",
                    bgColor: "#F9F5FF",
                    _hover: {
                      border: "1px solid #8A68EF",

                      // radio
                      "& .RadioGroup__Radio": {
                        border: "1px solid #4A3880",
                        bgColor: variant === "circle" ? "#4A3880" : "#EDE8FC",
                      },
                    },
                    _focus: {
                      border: "1px solid #8A68EF",
                      boxShadow: "0px 0px 0px 4px #E3E3FC",

                      // radio
                      "& .RadioGroup__Radio": {
                        border: "1px solid #8A68EF",
                        bgColor: variant === "circle" ? "#8A68EF" : "#EDE8FC",
                        boxShadow: "0px 0px 0px 4px #F4EBFF",
                      },
                    },
                  }),
                }),
                ...(disabled && {
                  border: "1px solid #EAECF0",
                  bgColor: "#F9FAFB",
                }),
                // common
                rounded: "8px",
                position: "relative",
                padding: "16px",
                cursor: disabled ? "not-allowed" : "pointer",
                outline: "none",
                tabIndex: disabled ? -1 : 0,
                transition: [
                  "background-color 300ms ease-in-out",
                  "box-shadow 300ms ease-in-out",
                  "border-color 300ms ease-in-out",
                ].join(),
                onClick: disabled
                  ? function () {}
                  : function (..._args: unknown[]) {
                      if (!others.multiple) {
                        // @ts-expect-error
                        if (!selected) others.onChange(item);
                      } else {
                        selected && others.onChange([...others.value, item]);
                        !selected &&
                          others.onChange(
                            others.value.filter((item) => {
                              return compareFn(item) !== compareFn(items);
                            }),
                          );
                      }
                    },
              },
            };
          },
        });
      })}
    </Box>
  );
}
