export function useStyles(variant: "group" | "minimal" | "relay") {
  if (variant === "group") {
    return {
      group: {
        button: {
          fontSize: "14px",
          lineHeight: "20px",
          fontWeight: "medium",
          rounded: "0px",
          borderTop: "1px solid #D6D6D6",
          borderBottom: "1px solid #D6D6D6",
          borderLeft: "1px solid #F0F0F0",
          color: "#7A7A7A",
          bgColor: "#FFFFFF",
          display: "flex",
          alignItems: "center",
          gap: "8px",
          width: "40px",
          height: "40px",
          _disabled: {
            cursor: "not-allowed",
            opacity: 1,
          },
          _hover: {
            borderTop: "1px solid #D6D6D6",
            borderBottom: "1px solid #D6D6D6",
            borderLeft: "1px solid #F0F0F0",
          },
          _focus: {},
          _active: {},
          _selected: {
            color: "#0F0F0F",
            bgColor: "#FCFCFC",
          },
          _first: {
            roundedLeft: "8px",
            borderLeft: "1px solid #D6D6D6",
            _hover: {
              borderLeft: "1px solid #D6D6D6",
            },
          },
          _last: {
            roundedRight: "8px",
            borderRight: "1px solid #D6D6D6",
            _hover: {
              borderRight: "1px solid #D6D6D6",
            },
          },
        },
        "button[data-freeflow]": {
          color: "#525252",
          width: "unset",
          padding: "10px 16px",
        },
      },
      select: {
        fontSize: "14px",
        lineHeight: "1",
        height: "40px",
        width: "full",
        color: "#0F0F0F!important",
        rounded: "lg",
        border: "1px solid",
        borderColor: "#D6D6D6",
        paddingX: 2,
      },
    };
  }

  if (variant === "relay") {
    return {
      legend: {
        color: "#7A7A7A",
        fontSize: "14px",
        linHeight: "20px",
        fontWeight: "medium",
      },
      button() {
        return {
          color: "#525252",
          bgColor: "#FFFFFF",
          fontWeight: "medium",
          fontSize: "18px",
          lineHeight: "24px",
          display: "flex",
          alignItems: "center",
          gap: "8px",
          _hover: {},
          _focus: {},
          _active: {},
          _disabled: {},
          border: "1px solid #D6D6D6",
          boxShadow: "0px 1px 2px rgba(16, 24, 40, 0.05)",
          borderRadius: "8px",
          padding: "10px 14px",
        };
      },
      select: {
        fontSize: "14px",
        lineHeight: "1",
        height: "40px",
        width: "full",
        color: "#0F0F0F!important",
        rounded: "lg",
        border: "1px solid",
        borderColor: "#D6D6D6",
        paddingX: 2,
      },
    };
  }

  return {
    legend: {
      color: "#7A7A7A",
      fontSize: "14px",
      linHeight: "20px",
      fontWeight: "medium",
    },
    button({ isOutlined }: { isOutlined?: boolean } = {}) {
      return {
        color: "#525252",
        bgColor: "#FFFFFF",
        fontWeight: "medium",
        fontSize: "18px",
        lineHeight: "24px",
        display: "flex",
        alignItems: "center",
        gap: "8px",
        _hover: {},
        _focus: {},
        _active: {},
        _disabled: {},
        // outlined
        ...(isOutlined && {
          border: "1px solid #D6D6D6",
          boxShadow: "0px 1px 2px rgba(16, 24, 40, 0.05)",
          borderRadius: "8px",
          padding: "10px 14px",
        }),
      };
    },
    icon: {
      color: "#7A7A7A",
      width: "20px",
      height: "20px",
    },
    pageControl({ isActive }: { isActive?: boolean }) {
      return {
        width: "40px",
        height: "40px",
        color: isActive ? "#0F0F0F" : "#7A7A7A",
        fontSize: "14px",
        lineHeight: "20px",
        bgColor: isActive ? "#FCFCFC" : "white",
        _disabled: {
          cursor: "not-allowed",
        },
        _hover: {},
        _focus: {},
        _active: {},
      };
    },
  };
}
