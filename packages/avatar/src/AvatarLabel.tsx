import { Box, Heading, SystemStyleObject, Text, useMultiStyleConfig } from '@chakra-ui/react';
import * as React from 'react';
import { PropsWithChildren } from 'react';
import { AvatarBaseProps } from './Avatar';
import { Badgeable, Clickable, FreeSize } from './types';
import { omit, pick } from './utils';

type Size = 'sm' | 'md' | 'lg' | 'xl';

type AvatarLabelBaseProps = {
  size?: Size;
  fallback?: boolean;
  supportText?: string;
};

// prettier-ignore
export type AvatarLabelProps = 
  SystemStyleObject &
  FreeSize<AvatarBaseProps> &
  AvatarLabelBaseProps &
  Badgeable &
  Clickable;

export default function AvatarLabel(props: PropsWithChildren<AvatarLabelProps>) {
  const { src, name, size = 'md', fallback = true, children, supportText, ...others } = props;

  const styles = useMultiStyleConfig('AvatarLabel', { size, variant: 'hds' });

  if (!React.isValidElement(children)) {
    throw new Error("'AvatarLabel' only accepts a single 'Avatar' child");
  }

  return (
    <Box
      sx={{
        ...omit(
          others,
          'badge',
          'clickable',
          'online',
          'verified',
          /* @ts-ignore "This uses type guards here" */
          'onClick',
          'badgeIcon',
        ),
        ...styles.container,
      }}
    >
      <Box sx={styles.avatar}>
        {React.cloneElement<{ [key: string]: any }>(children, {
          name: fallback ? name : undefined,
          ...pick(
            props,
            'src',
            'size',
            'badge',
            'online',
            'verified',
            'clickable',
            /* @ts-ignore "This uses type guards here" */
            'onClick',
            'badgeIcon',
          ),
        })}
      </Box>

      <Box sx={styles.label}>
        <Heading sx={styles.heading}>{name}</Heading>
        <Text sx={styles.supportText}>{supportText}</Text>
      </Box>
    </Box>
  );
}
