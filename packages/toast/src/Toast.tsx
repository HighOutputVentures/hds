import { Flex, Icon, Text, UseToastOptions } from "@chakra-ui/react";
import { CheckCircleIcon, InfoCircleIcon } from "@highoutput/hds-icons";
import * as React from "react";
import XIcon from "./XIcon";

export type RenderToast = NonNullable<UseToastOptions["render"]>;

const defaultProps = {
  status: "success",
  description: "",
};

export const Toast: RenderToast = (props) => {
  const { status, description, onClose } = Object.assign(defaultProps, props);

  const colors = useColors(props.status);
  const HintIcon = React.useMemo(() => getIcon(status), [status]);

  return (
    <Flex
      role="alert"
      aria-label={description}
      bgColor={colors.containerBg}
      border="1px solid"
      borderColor={colors.containerBorder}
      rounded="8px"
      width="550px"
      data-testid="hds.toast.container"
      maxWidth="full"
      alignItems="center"
      padding={2}
      paddingLeft={4}
      gap={3}
    >
      <HintIcon width={5} height={5} color={colors.icon} />

      <Text
        size="paragraph-xs-default"
        letterSpacing="unset"
        fontWeight="500"
        color={colors.text}
        data-testid="hds.toast.description"
        flexGrow={1}
      >
        {description}
      </Text>

      <Flex as="button" role="button"  data-testid="hds.toast.close.button" aria-label="Close alert" onClick={onClose}>
        <Icon width={9} height={9} as={XIcon} color={colors.xmark} />
      </Flex>
    </Flex>
  );
};

function getIcon(key: UseToastOptions["status"]) {
  switch (key) {
    case "error":
      return InfoCircleIcon;
    default:
      return CheckCircleIcon;
  }
}

function useColors(key: UseToastOptions["status"]) {
  const colorsMap = {
    error: {
      containerBg: "#FCEAE8",
      containerBorder: "#FCD2CF",
      icon: "#9E241C",
      text: "#800C05",
      xmark: "#F04438",
    },
    success: {
      containerBg: "#E8FCE9",
      containerBorder: "#A3F0A7",
      icon: "#139E19",
      text: "#008005",
      xmark: "#00C408",
    },
  };

  switch (key) {
    case "error":
      return colorsMap["error"];
    default:
      return colorsMap["success"];
  }
}
