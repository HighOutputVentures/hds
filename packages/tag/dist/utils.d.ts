/// <reference types="react" />
import { SpacerProps } from '@chakra-ui/react';
export declare function omit<T extends Record<string, any>, K extends (keyof T)[]>(subject: T, ...keys: K): Omit<T, K[number]>;
export declare function space(when: boolean, props: SpacerProps): JSX.Element;
