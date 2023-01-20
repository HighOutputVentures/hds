import { SystemStyleObject } from "@chakra-ui/react";
import { BadgeGroupAccent, BadgeGroupSize, BadgeGroupVariant } from "./types";

type UseBadgeGroupStyleArg = {
  size: BadgeGroupSize;
  accent: BadgeGroupAccent;
  variant: BadgeGroupVariant;
  /** aka `descriptionFirst` */
  isReversed?: boolean;
};

type BadgeGroupStyle = {
  container: SystemStyleObject;
  title: SystemStyleObject;
  description: SystemStyleObject;
  button: SystemStyleObject;
  icon: SystemStyleObject;
};

// Sadly, named tuple seems to be unsupported
// Please make the commented code below as a reference
// type BadgeGroupVariantTuple = [default_: string, light: string, dark: string];
type BadgeGroupVariantTuple = [string, string, string];

type CreateBadgeGroupStyleArg = {
  containerBgColor: BadgeGroupVariantTuple;
  titleColor: BadgeGroupVariantTuple;
  titleBgColor: BadgeGroupVariantTuple;
  descriptionColor: string;
  iconColor: string;
};

function createBadgeGroupStyle({
  containerBgColor,
  descriptionColor,
  iconColor,
  titleBgColor,
  titleColor,
}: CreateBadgeGroupStyleArg) {
  return function getStyleUsingConfig({
    size,
    variant,
    isReversed,
  }: Omit<UseBadgeGroupStyleArg, "accent">): BadgeGroupStyle {
    const index = {
      default: 0,
      light: 1,
      dark: 2,
    }[variant];

    return {
      container: {
        bgColor: containerBgColor[index],
        width: "fit-content",
        display: "flex",
        alignItems: "center",
        gap: {
          md: "8px",
          lg: "12px",
        }[size],
        rounded: "full",
        padding: {
          md: isReversed ? "4px 4px 4px 12px" : "4px 10px 4px 4px",
          lg: isReversed ? "4px 4px 4px 14px" : "4px 10px 4px 4px",
        }[size],
      },
      title: {
        display: "flex",
        alignItems: "center",
        gap: "4px",
        color: titleColor[index],
        bgColor: titleBgColor[index],
        fontSize: "14px",
        lineHeight: "14px",
        letterSpacing: "0.02em",
        rounded: "full",
        padding: {
          md: "2px 8px 2px 8px",
          lg: "2px 10px 2px 10px",
        }[size],
      },
      description: {
        display: "flex",
        alignItems: "center",
        gap: "4px",
        fontSize: "12px",
        lineHeight: "12px",
        letterSpacing: "0.02em",
        color: descriptionColor,
      },
      button: {},
      icon: {
        width: "16px",
        height: "16px",
        color: isReversed ? "#8A68EF" : iconColor,
      },
    };
  };
}

function getBadgeGroupStyle({ accent, ...config }: UseBadgeGroupStyleArg): BadgeGroupStyle {
  return {
    primary: createBadgeGroupStyle({
      containerBgColor: ["#F9F5FF", "#F4EBFF", "#F9F5FF"],
      descriptionColor: "#6941C6",
      iconColor: "#8A68EF",
      titleBgColor: ["#EDE8FC", "#FFFFFF", "#8A68EF"],
      titleColor: ["#8A68EF", "#8A68EF", "#FFFFFF"],
    })(config),
    gray: createBadgeGroupStyle({
      containerBgColor: ["#FCFCFC", "#F9FAFB", "#F9FAFB"],
      descriptionColor: "#0F0F0F",
      iconColor: "#525252",
      titleBgColor: ["#FCFCFC", "#FFFFFF", "#0F0F0F"],
      titleColor: ["#0F0F0F", "#0F0F0F", "#FFFFFF"],
    })(config),
    error: createBadgeGroupStyle({
      containerBgColor: ["#FEE4E2", "#FEF3F2", "#FEF3F2"],
      descriptionColor: "#B42318",
      iconColor: "#F04438",
      titleBgColor: ["#FEF3F2", "#FFFFFF", "#D92D20"],
      titleColor: ["#B42318", "#B42318", "#FFFFFF"],
    })(config),
    warning: createBadgeGroupStyle({
      containerBgColor: ["#FEF0C7", "#FFFAEB", "#FFFAEB"],
      descriptionColor: "#B54708",
      iconColor: "#F79009",
      titleBgColor: ["#FFFAEB", "#FFFFFF", "#DC6803"],
      titleColor: ["#B54708", "#B54708", "#FFFFFF"],
    })(config),
    success: createBadgeGroupStyle({
      containerBgColor: ["#D1FADF", "#ECFDF3", "#ECFDF3"],
      descriptionColor: "#027A48",
      iconColor: "#12B76A",
      titleBgColor: ["#ECFDF3", "#FFFFFF", "#039855"],
      titleColor: ["#027A48", "#027A48", "#FFFFFF"],
    })(config),
  }[accent];
}

export default function useBadgeGroupStyle(arg: UseBadgeGroupStyleArg): BadgeGroupStyle {
  return getBadgeGroupStyle(arg);
}
