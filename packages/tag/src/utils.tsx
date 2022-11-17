import { Spacer, SpacerProps } from '@chakra-ui/react';
import * as React from 'react';

export function omit<T extends Record<string, any>, K extends (keyof T)[]>(
  subject: T,
  ...keys: K
): Omit<T, K[number]> {
  const copy = { ...subject }; /* do NOT mutate original object 😏 */

  for (const key of keys) {
    if (key in copy) {
      delete copy[key];
    }
  }

  return copy;
}

export function space(when: boolean, props: SpacerProps) {
  return !when ? null : <Spacer height="1px" {...props} />;
}
