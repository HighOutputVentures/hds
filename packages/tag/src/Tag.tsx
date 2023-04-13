import {
  Avatar,
  Box,
  Checkbox,
  Icon,
  Spacer,
  Tag,
  TagCloseButton,
  TagLabel,
  TagLeftIcon,
  Text,
} from "@chakra-ui/react";
import * as React from "react";
import CheckIcon from "./CheckIcon";
import { useCheckboxStyleConfig, useStyles } from "./hooks";

type Size = "sm" | "md" | "lg";

export type TagProps = {
  label: string;
  size?: Size;
  icon?: (props: React.ComponentProps<"svg">) => JSX.Element;
  hasAvatar?: boolean;
  avatar?: string;
  hasOnlineIndicator?: boolean;
  isOnline?: boolean;
  hasCheckbox?: boolean;
  isChecked?: boolean;
  onCheck?(value: boolean): void;
  isClosable?: boolean;
  onClose?(): void;
  hasBadge?: boolean;
  badgeCount?: string | number;
  __testId?: string;
};

export default React.forwardRef<HTMLDivElement, TagProps>(function HdsTag(props, ref) {
  const {
    icon,
    size = "md",
    label,
    avatar,
    badgeCount = 0,
    isOnline = false,
    isChecked,
    isClosable = false,
    hasBadge = false,
    hasAvatar = false,
    hasCheckbox = false,
    hasOnlineIndicator = false,
    onClose,
    onCheck,
    __testId,
  } = props;

  const checkboxStyleConfig = useCheckboxStyleConfig({ size });
  const styles = useStyles({ size });
  const hasIcon = !!icon;

  return (
    <Tag ref={ref} sx={styles.tag()} data-testid={__testId ?? "hds.tag"}>
      {hasCheckbox && (
        <>
          {addSpace(
            true,
            getSpaceWidth(
              {
                sm: "5px",
                md: "4px",
                lg: "5px",
              },
              size,
            ),
          )}

          <Checkbox
            icon={<Icon as={CheckIcon} />}
            checked={isChecked}
            styleConfig={checkboxStyleConfig}
            onChange={({ target }) => {
              onCheck?.(target.checked);
            }}
          />

          {addSpace(
            !hasAvatar && !hasIcon,
            getSpaceWidth(
              {
                sm: "4px",
                md: "5px",
                lg: "6px",
              },
              size,
            ),
          )}
        </>
      )}

      {hasIcon && (
        <>
          {addSpace(
            true,
            getSpaceWidth(
              {
                sm: "4px",
                md: "5px",
                lg: "6px",
              },
              size,
            ),
          )}

          <TagLeftIcon
            data-testid="hds.tag.left.icon"
            as={icon}
            role="img"
            aria-label="Tag Icon"
            sx={styles.icon()}
          />

          {addSpace(
            true,
            getSpaceWidth(
              {
                sm: "4px",
                md: "5px",
                lg: "6px",
              },
              size,
            ),
          )}
        </>
      )}

      {hasAvatar && (
        <>
          {addSpace(
            true,
            getSpaceWidth(
              {
                sm: "4px",
                md: "5px",
                lg: "6px",
              },
              size,
            ),
          )}

          <Avatar
            data-testid="hds.tag.avatar"
            src={avatar}
            role="img"
            aria-label="Tag Avatar"
            sx={styles.avatar()}
          />

          {addSpace(
            true,
            getSpaceWidth(
              {
                sm: "4px",
                md: "5px",
                lg: "6px",
              },
              size,
            ),
          )}
        </>
      )}

      {hasOnlineIndicator && (
        <>
          {addSpace(
            true,
            getSpaceWidth(
              {
                sm: "7px",
                md: "8px",
                lg: "10px",
              },
              size,
            ),
          )}

          <Box
            role="presentation"
            aria-label="Green Dot"
            data-testid="hds.tag.indicator"
            sx={styles.onlineIndicator({ isOnline })}
          />

          {addSpace(
            true,
            getSpaceWidth(
              {
                sm: "5px",
                md: "6px",
                lg: "7px",
              },
              size,
            ),
          )}
        </>
      )}

      <>
        {addSpace(
          !hasIcon && !hasAvatar && !hasOnlineIndicator && !hasCheckbox,
          getSpaceWidth(
            {
              sm: "8px",
              md: "9px",
              lg: "10px",
            },
            size,
          ),
        )}

        <TagLabel data-testid="hds.tag.label" role="contentinfo" sx={styles.label()}>
          {label}
        </TagLabel>

        {addSpace(
          !isClosable && !hasBadge,
          getSpaceWidth(
            {
              sm: "8px",
              md: "9px",
              lg: "10px",
            },
            size,
          ),
        )}
      </>

      {hasBadge && (
        <>
          {addSpace(
            true,
            getSpaceWidth(
              {
                sm: "8px",
                md: "10px",
                lg: "12px",
              },
              size,
            ),
          )}

          <Text sx={styles.badge()}>{badgeCount}</Text>

          {addSpace(
            true,
            getSpaceWidth(
              {
                sm: "8px",
                md: "8px",
                lg: "10px",
              },
              size,
            ),
          )}
        </>
      )}

      {isClosable && (
        <>
          {addSpace(
            !hasBadge,
            getSpaceWidth(
              {
                sm: "5px",
                md: "5px",
                lg: "6px",
              },
              size,
            ),
          )}

          <TagCloseButton
            aria-label="Close Tag"
            data-testid="hds.tag.close.button"
            sx={styles.closeButton()}
            onClick={onClose}
          />

          {addSpace(
            true,
            getSpaceWidth(
              {
                sm: "7px",
                md: "6px",
                lg: "7px",
              },
              size,
            ),
          )}
        </>
      )}
    </Tag>
  );
});

function getSpaceWidth(obj: Record<Size, string>, size: Size): string {
  return obj[size];
}

function addSpace(when: boolean, width: number | string) {
  return !when ? null : <Spacer sx={{ width, height: "1px" }} />;
}
