import {
  Avatar,
  Box,
  SystemStyleObject,
  Tag,
  TagCloseButton,
  TagLabel,
  TagLeftIcon,
  Text,
  useMultiStyleConfig,
} from '@chakra-ui/react';
import * as React from 'react';
import Checkbox from './Checkbox';
import { omit, space } from './utils';

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

/*
 *
 * HEADS UP! 📢
 * We're heavily using Spacer due to design constraints. 😉
 *
 */

export default React.forwardRef<HTMLDivElement, TagProps>(function HdsTag(p, ref) {
  const { size, variant, label, ...props } = Object.assign({ size: 'md' }, p, { variant: 'hds' });

  const styles = useMultiStyleConfig('Tag', { size, variant });

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
      {!!props.checkbox /* <!-- Checkbox --> */ && (
        <React.Fragment>
          {space(true, { width: { sm: '5px', md: '4px', lg: '5px' }[size] })}

          <Checkbox
            size={size}
            variant={variant}
            checked={props.checked}
            onChange={({ target }) => {
              props.onCheck(target.checked);
            }}
          />

          {space(![props.avatar, props.icon].some(Boolean), {
            width: { sm: '4px', md: '5px', lg: '6px' }[size],
          })}
        </React.Fragment>
      )}

      {!!props.icon /* <!-- Icon  --> */ && (
        <React.Fragment>
          {space(true, { width: { sm: '4px', md: '5px', lg: '6px' }[size] })}

          <TagLeftIcon as={props.icon} sx={styles.icon} />

          {space(true, { width: { sm: '4px', md: '5px', lg: '6px' }[size] })}
        </React.Fragment>
      )}

      {!!props.avatar /* <!-- Avatar --> */ && (
        <React.Fragment>
          {space(true, { width: { sm: '4px', md: '5px', lg: '6px' }[size] })}

          <Avatar src={props.avatar} sx={styles.avatar} />

          {space(true, { width: { sm: '4px', md: '5px', lg: '6px' }[size] })}
        </React.Fragment>
      )}

      {!!props.indicator /* <!-- Indicator --> */ && (
        <React.Fragment>
          {space(true, { width: { sm: '7px', md: '8px', lg: '10px' }[size] })}

          <Box sx={styles.indicator} />

          {space(true, { width: { sm: '5px', md: '6px', lg: '7px' }[size] })}
        </React.Fragment>
      )}

      {!!label /* <!-- Label --> */ && (
        <React.Fragment>
          {space(![props.icon, props.avatar, props.indicator, props.checkbox].some(Boolean), {
            width: { sm: '8px', md: '9px', lg: '10px' }[size],
          })}

          <TagLabel role="contentinfo" __css={styles.label}>
            {label}
          </TagLabel>

          {space(![props.closable, props.badge].some(Boolean), {
            width: { sm: '8px', md: '9px', lg: '10px' }[size],
          })}
        </React.Fragment>
      )}

      {!!props.closable /* <!-- Close Button --> */ && (
        <React.Fragment>
          {space(true, { width: { sm: '5px', md: '5px', lg: '6px' }[size] })}

          <TagCloseButton
            role="button"
            aria-label="Close Tag"
            onClick={props.onClose}
            __css={styles.closeButton}
          />

          {space(true, { width: { sm: '7px', md: '6px', lg: '7px' }[size] })}
        </React.Fragment>
      )}

      {!!props.badge /* <!-- Badge --> */ && (
        <React.Fragment>
          {space(true, { width: { sm: '8px', md: '10px', lg: '12px' }[size] })}

          <Text sx={styles.badge}>{props.badgeCount}</Text>

          {space(true, { width: { sm: '8px', md: '8px', lg: '10px' }[size] })}
        </React.Fragment>
      )}
    </Tag>
  );
});
