import { SystemStyleObject } from "@chakra-ui/react";
import { useMemo } from "react";

type TableCellButtonArg = {
  isToday?: boolean;
  isSelected?: boolean;
  isPlaceholder?: boolean;
  isWithinRange?: boolean;
};

type CalendarArg = {
  hasBorder?: boolean;
};

type UseStylesReturn = {
  calendar(arg?: CalendarArg): SystemStyleObject;
  calendarWeek(): SystemStyleObject;
  calendarDate(arg?: TableCellButtonArg): SystemStyleObject;
  calendarMain(): SystemStyleObject;
  /**
   *
   * eg. **January 2022**
   *
   */
  calendarControlLabel(): SystemStyleObject;
  /**
   *
   * Previous/Next month control
   *
   */
  calendarControlButton(): SystemStyleObject;
  /**
   *
   * Icon in previous/next month control
   *
   */
  calendarControlIcon(): SystemStyleObject;
};

export function useStyles() {
  const styles = useMemo<UseStylesReturn>(
    () => ({
      calendar(arg = {}) {
        return {
          width: "fit-content",
          bgColor: "white",
          rounded: "8px",
          paddingX: "24px",
          paddingY: "20px",
          ...(arg.hasBorder && {
            border: "1px",
            borderColor: "gray.100",
          }),
        };
      },
      calendarDate(arg = {}) {
        return {
          width: "40px",
          height: "40px",
          color: "neutrals.800",
          fontSize: "14px",
          lineHeight: "20px",
          rounded: "full",

          _hover: {
            bgColor: "neutrals.200",
          },

          ...(arg.isPlaceholder && {
            color: "neutrals.600",
            _hover: {
              bgColor: "neutrals.100",
            },
          }),

          ...(arg.isToday && {
            bgColor: "neutrals.200",
          }),

          ...(arg.isSelected && {
            ...(!arg.isPlaceholder && {
              color: "white",
              bgColor: "brand.primary.700",
              _hover: {},
            }),

            ...(arg.isPlaceholder && {
              textDecoration: "line-through",
            }),
          }),

          ...(arg.isWithinRange && {
            ...(!arg.isPlaceholder && {
              bgColor: "brand.primary.100",
              fontWeight: "medium",
              _hover: {},
            }),

            ...(arg.isPlaceholder && {
              textDecoration: "line-through",
            }),
          }),

          transition: "colors 300ms ease-in-out",
        };
      },
      calendarWeek() {
        return {
          width: "40px",
          height: "40px",
          fontSize: "14px",
          fontWeight: "500",
          lineHeight: "20px",
        };
      },
      calendarMain() {
        return {
          marginTop: "12px",
        };
      },
      calendarControlLabel() {
        return {
          flexGrow: 1,
          textAlign: "center",
          fontSize: "16px",
          fontWeight: "500",
          lineHeight: "24px",
          color: "gray.700",
        };
      },
      calendarControlButton() {
        return {
          width: "36px",
          height: "36px",
          color: "gray.500",
          rounded: "full",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
          transition: "colors 300ms ease-in-out",
          _hover: {
            color: "gray.600",
            bgColor: "gray.50",
          },
        };
      },
      calendarControlIcon() {
        return {
          width: "20px",
          height: "20px",
        };
      },
    }),
    [],
  );

  return styles;
}
