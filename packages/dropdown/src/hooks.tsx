import { SystemStyleObject } from "@chakra-ui/react";
import * as React from "react";

type UseStylesReturn = {
  menulist: SystemStyleObject;
  menuitem: SystemStyleObject;
  menugroup: SystemStyleObject;
  header: SystemStyleObject;
  divider: SystemStyleObject;
};

export function useStyles() {
  const styles = React.useMemo<UseStylesReturn>(
    () => ({
      menulist: {
        padding: "0px",
        borderColor: "#F2F4F7",
        rounded: "8px",
        overflow: "hidden",
        bgColor: "white",
        boxShadow:
          "0px 12px 16px -4px rgba(16, 24, 40, 0.08)," +
          "0px 4px 6px -2px rgba(16, 24, 40, 0.03)",
      },
      menugroup: {
        padding: "0px",
      },
      menuitem: {
        paddingX: "16px",
        paddingY: "10px",
        fontSize: "14px",
        lineHeight: "14px",
        spacing: "12px",
        color: "neutrals.900",
        _hover: {
          bgColor: "neutrals.100",
        },
        _selected: {
          bgColor: "neutrals.100",
        },
      },
      header: {
        paddingY: "12px",
        paddingX: "16px",
      },
      divider: {
        borderColor: "#F2F4F7",
      },
    }),
    [],
  );

  return styles;
}
