import {
  Avatar,
  Box,
  SystemStyleObject,
  Tag,
  TagCloseButton,
  TagLabel,
  TagLeftIcon,
  Text,
  useBreakpoint,
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
type Breakpoints = 'base' | 'sm' | 'md' | 'lg' | 'xl';

type BaseProps = {
  label: string;
  size?: Size | Partial<Record<Breakpoints, Size>>;
  icon?: (props: React.ComponentProps<'svg'>) => JSX.Element;
  avatar?: string;
  indicator?: boolean;
  __testId?: string;
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
  const { variant, label, __testId, ...props } = Object.assign({ size: 'md' }, p, {
    variant: 'hds',
  });

  const size = useActualSize(props.size);
  const styles = useMultiStyleConfig('Tag', { size, variant });

  return (
    <Tag
      ref={ref}
      size={size}
      variant={variant}
      __css={{
        ...omit(
          props,
          'size',
          'icon',
          'badge',
          'avatar',
          'closable',
          'checkbox',
          'indicator',
          /* @ts-ignore "TypeScript doesn't know how to handle union types just yet 🤐" */
          'onClose',
          'checked',
          'onCheck',
          'badgeCount',
        ),
        /* inbuilt styles should not be overridable 🫠 */
        ...styles.container,
      }}
      data-testid={__testId ?? 'hds.tag'}
    >
      {!!props.checkbox /* <!-- Checkbox --> */ && (
        <React.Fragment>
          {space(true, { width: getSizeSpace({ sm: '5px', md: '4px', lg: '5px' }, size) })}

          <Checkbox
            size={size}
            variant={variant}
            checked={props.checked}
            onChange={({ target }) => {
              props.onCheck(target.checked);
            }}
          />

          {space(![props.avatar, props.icon].some(Boolean), {
            width: getSizeSpace({ sm: '4px', md: '5px', lg: '6px' }, size),
          })}
        </React.Fragment>
      )}

      {!!props.icon /* <!-- Icon  --> */ && (
        <React.Fragment>
          {space(true, { width: getSizeSpace({ sm: '4px', md: '5px', lg: '6px' }, size) })}

          <TagLeftIcon data-testid="hds.tag.left.icon" as={props.icon} role="img" aria-label="Tag Icon" sx={styles.icon} />

          {space(true, { width: getSizeSpace({ sm: '4px', md: '5px', lg: '6px' }, size) })}
        </React.Fragment>
      )}

      {!!props.avatar /* <!-- Avatar --> */ && (
        <React.Fragment>
          {space(true, { width: getSizeSpace({ sm: '4px', md: '5px', lg: '6px' }, size) })}

          <Avatar data-testid="hds.tag.avatar" src={props.avatar} role="img" aria-label="Tag Avatar" sx={styles.avatar} />

          {space(true, { width: getSizeSpace({ sm: '4px', md: '5px', lg: '6px' }, size) })}
        </React.Fragment>
      )}

      {!!props.indicator /* <!-- Indicator --> */ && (
        <React.Fragment>
          {space(true, { width: getSizeSpace({ sm: '7px', md: '8px', lg: '10px' }, size) })}

          <Box data-testid="hds.tag.indicator" role="presentation" aria-label="Green Dot" sx={styles.indicator} />

          {space(true, { width: getSizeSpace({ sm: '5px', md: '6px', lg: '7px' }, size) })}
        </React.Fragment>
      )}

      {!!label /* <!-- Label --> */ && (
        <React.Fragment>
          {space(![props.icon, props.avatar, props.indicator, props.checkbox].some(Boolean), {
            width: getSizeSpace({ sm: '8px', md: '9px', lg: '10px' }, size),
          })}

          <TagLabel data-testid="hds.tag.label" role="contentinfo" __css={styles.label}>
            {label}
          </TagLabel>

          {space(![props.closable, props.badge].some(Boolean), {
            width: getSizeSpace({ sm: '8px', md: '9px', lg: '10px' }, size),
          })}
        </React.Fragment>
      )}

      {!!props.closable /* <!-- Close Button --> */ && (
        <React.Fragment>
          {space(true, { width: getSizeSpace({ sm: '5px', md: '5px', lg: '6px' }, size) })}

          <TagCloseButton data-testid="hds.tag.close.button" role="button" aria-label="Close Tag" onClick={props.onClose} />

          {space(true, { width: getSizeSpace({ sm: '7px', md: '6px', lg: '7px' }, size) })}
        </React.Fragment>
      )}

      {!!props.badge /* <!-- Badge --> */ && (
        <React.Fragment>
          {space(true, { width: getSizeSpace({ sm: '8px', md: '10px', lg: '12px' }, size) })}

          <Text sx={styles.badge}>{props.badgeCount}</Text>

          {space(true, { width: getSizeSpace({ sm: '8px', md: '8px', lg: '10px' }, size) })}
        </React.Fragment>
      )}
    </Tag>
  );
});

function useActualSize(size: TagProps['size'] | Object) {
  const actualBreakpoint = useBreakpoint();
  const psuedoBreakpoint = React.useMemo(() => {
    return 'sm|md|lg'.split(/\|/g).includes(actualBreakpoint)
      ? actualBreakpoint
      : ['base'].includes(actualBreakpoint)
      ? 'sm'
      : 'lg';
  }, []);

  const keys = Object.keys(size || {});

  return typeof size === 'string'
    ? size
    : (size as any)[psuedoBreakpoint] ??
        /* fallback to closest given size */ (size as any)[keys[keys.length - 1]];
}

function getSizeSpace(obj: any, size: string): string {
  return obj[size];
}
