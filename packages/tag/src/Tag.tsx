import {
  Avatar,
  Box,
  Checkbox,
  SystemStyleObject,
  Tag,
  TagCloseButton,
  TagLabel,
  TagLeftIcon,
  useMultiStyleConfig,
} from "@chakra-ui/react";
import * as React from "react";
import { omit } from "./utils";

type Closable =
  | { closable?: false }
  | {
      closable: true;
      onClose(): void;
    };

type Badgeable =
  | { badge?: false }
  | {
      badge: true;
      badgeCount: number;
    };

type Checkable =
  | { checkbox?: false }
  | {
      checkbox: true;
      checked?: boolean;
      onCheck(value: boolean): void;
    };

type Size = "sm" | "md" | "lg";

type BaseProps = {
  label: string;
  size?: Size;
  icon?: (props: React.ComponentProps<"svg">) => JSX.Element;
  avatar?: string;
  indicator?: boolean;
};

export type TagProps =
  SystemStyleObject /* We're using this as it doesn't come with props unrelated to styles 👍 */ &
    BaseProps &
    Badgeable &
    Closable &
    Checkable;

export default React.forwardRef<HTMLDivElement, TagProps>(function HdsTag(props, ref) {
  const styles = useMultiStyleConfig("Tag", {
    size: props.size,
    variant: "hds",
  });

  return (
    <Tag
      ref={ref}
      variant="hds"
      size={props.size}
      __css={{
        ...omit(
          props,
          "size",
          "label",
          "icon",
          "avatar",
          "indicator",
          "badge",
          "badgeCount",
          "closable",
          "onClose",
          "checkbox",
          "checked",
          "onCheck",
        ),
        /* inbuilt styles should not be overridable 🫠 */
        ...styles.container,
      }}
    >
      {!!props.checkbox && (
        <Checkbox
          checked={props.checked}
          onChange={function handleChange({ target: { checked } }) {
            props.onCheck(checked);
          }}
          __css={styles.checkbox}
        />
      )}

      {!!props.icon && <TagLeftIcon as={props.icon} __css={styles.icon} />}
      {!!props.avatar && <Avatar src={props.avatar} __css={styles.avatar} />}
      {!!props.indicator && <Box __css={styles.indicator} />}

      <TagLabel role="contentinfo" aria-label="Tag Label" __css={styles.label}>
        {props.label}
      </TagLabel>

      {!!props.closable && (
        <TagCloseButton
          role="button"
          aria-label="Close Tag"
          onClick={props.onClose}
          __css={styles.closeButton}
        />
      )}
    </Tag>
  );
});
