import {
  Box,
  PlacementWithLogical,
  Text,
  Tooltip as ChakraTooltip,
} from "@chakra-ui/react";
import * as React from "react";
import invariant from "tiny-invariant";

type ColorScheme = "dark" | "light";

export interface TooltipProps {
  label: string;
  children: React.ReactNode;
  hasArrow?: boolean;
  placement?: PlacementWithLogical;
  colorScheme?: ColorScheme;
  supportingText?: string;
}

export default function Tooltip(props: TooltipProps) {
  const {
    label,
    hasArrow,
    placement,
    colorScheme = "dark",
    supportingText,
    children,
  } = props;

  const LabelWithSupportingText = () => (
    <Box
      maxWidth={"320px"}
      minHeight="34px"
      padding={"12px"}
      rounded={"8px"}
      width={"full"}
    >
      <Text
        fontWeight={"500"}
        fontSize="12px"
        lineHeight={"18px"}
        marginBottom="4px"
        color={"neutrals.100"}
        {...(colorScheme === "light" && {
          color: "neutrals.700",
        })}
        data-testid="hds.tooltip.label"
      >
        {label}
      </Text>

      <Text
        color={"neutrals.300"}
        fontSize="12px"
        fontWeight={"400"}
        lineHeight={"18px"}
        {...(colorScheme === "light" && {
          color: "neutrals.600",
        })}
        data-testid="hds.tooltip.supporting-text"
      >
        {supportingText}
      </Text>
    </Box>
  );

  invariant(
    React.isValidElement(children),
    "'Children' must be a valid React element",
  );

  return (
    <ChakraTooltip
      label={!supportingText ? label : <LabelWithSupportingText />}
      hasArrow={hasArrow}
      placement={placement}
      color={"neutrals.100"}
      bgColor={"neutrals.900"}
      rounded={"8px"}
      {...(colorScheme === "light" && {
        color: "neutrals.700",
        bgColor: "white",
        boxShadow: lightThemeBoxShadow,
      })}
      {...(!supportingText && {
        paddingY: "8px",
        paddingX: "12px",
      })}
      data-testid="hds.tooltip"
    >
      {React.cloneElement<any>(children, {
        "data-testid": "hds.tooltip.trigger",
      })}
    </ChakraTooltip>
  );
}

const lightThemeBoxShadow = [
  "0px 12px 16px -4px rgba(16, 24, 40, 0.08)",
  "0px 4px 6px -2px rgba(16, 24, 40, 0.03)",
].join();
