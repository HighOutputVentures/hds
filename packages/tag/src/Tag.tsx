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
} from '@chakra-ui/react';
import * as React from 'react';
import {omit} from './utils';

type Closable =
  | {
      closable?: false;
    }
  | {
      closable: true;
      onClose(): void;
    };

type Badgeable =
  | {
      badge?: false;
    }
  | {
      badge: true;
      badgeCount: number;
    };

type Checkable =
  | {
      checkbox?: false;
    }
  | {
      checkbox: true;
      checked?: boolean;
      onCheck(value: boolean): void;
    };

type Size = 'sm' | 'md' | 'lg';

type BaseProps = {
  label: string;
  size?: Size;
  icon?: (props: React.ComponentProps<'svg'>) => JSX.Element;
  avatar?: string;
  indicator?: boolean;
};

export type TagProps =
  SystemStyleObject /* We're using this as it doesn't come with props unrelated to styles 👍 */ &
    BaseProps &
    Badgeable &
    Closable &
    Checkable;

export default React.forwardRef<HTMLDivElement, TagProps>(function HdsTag(p, ref) {
  const {size, variant, label, ...props} = Object.assign({variant: 'hds'}, p);

  const styles = useMultiStyleConfig('Tag', {size, variant});

  return (
    <Tag
      ref={ref}
      size={size}
      variant={variant}
      __css={{
        ...omit(
          props,
          'icon',
          'badge',
          'avatar',
          'closable',
          'checkbox',
          'indicator',
          /* @ts-expect-error "TypeScript doesn't know how to handle union types just yet 🤐" */
          'onClose',
          'checked',
          'onCheck',
          'badgeCount',
        ),
        /* inbuilt styles should not be overridable 🫠 */
        ...styles.container,
      }}
    >
      {!!props.checkbox && (
        <Checkbox
          checked={props.checked}
          onChange={function handleChange({target: {checked}}) {
            props.onCheck(checked);
          }}
          aria-label="Select Item"
          __css={styles.checkbox}
        />
      )}

      {!!props.icon && <TagLeftIcon as={props.icon} __css={styles.icon} />}
      {!!props.avatar && <Avatar src={props.avatar} __css={styles.avatar} />}
      {!!props.indicator && <Box __css={styles.indicator} />}

      <TagLabel role="contentinfo" __css={styles.label}>
        {label}
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
