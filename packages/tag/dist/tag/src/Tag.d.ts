import { SystemStyleObject } from '@chakra-ui/react';
import * as React from 'react';
declare type Closable = {
    closable?: false;
} | {
    closable: true;
    onClose(): void;
};
declare type Badgeable = {
    badge?: false;
} | {
    badge: true;
    badgeCount: number;
};
declare type Checkable = {
    checkbox?: false;
} | {
    checkbox: true;
    checked?: boolean;
    onCheck(value: boolean): void;
};
declare type Size = 'sm' | 'md' | 'lg';
declare type Breakpoints = 'base' | 'sm' | 'md' | 'lg' | 'xl';
declare type BaseProps = {
    label: string;
    size?: Size | Partial<Record<Breakpoints, Size>>;
    icon?: (props: React.ComponentProps<'svg'>) => JSX.Element;
    avatar?: string;
    indicator?: boolean;
    __testId?: string;
};
export declare type TagProps = SystemStyleObject & BaseProps & Badgeable & Closable & Checkable;
declare const _default: React.ForwardRefExoticComponent<(import("@chakra-ui/styled-system").CSSWithMultiValues & BaseProps & {
    badge?: false | undefined;
} & {
    closable?: false | undefined;
} & {
    checkbox?: false | undefined;
} & React.RefAttributes<HTMLDivElement>) | (import("@chakra-ui/styled-system").CSSWithMultiValues & BaseProps & {
    badge?: false | undefined;
} & {
    closable?: false | undefined;
} & {
    checkbox: true;
    checked?: boolean | undefined;
    onCheck(value: boolean): void;
} & React.RefAttributes<HTMLDivElement>) | (import("@chakra-ui/styled-system").CSSWithMultiValues & BaseProps & {
    badge?: false | undefined;
} & {
    closable: true;
    onClose(): void;
} & {
    checkbox?: false | undefined;
} & React.RefAttributes<HTMLDivElement>) | (import("@chakra-ui/styled-system").CSSWithMultiValues & BaseProps & {
    badge?: false | undefined;
} & {
    closable: true;
    onClose(): void;
} & {
    checkbox: true;
    checked?: boolean | undefined;
    onCheck(value: boolean): void;
} & React.RefAttributes<HTMLDivElement>) | (import("@chakra-ui/styled-system").CSSWithMultiValues & BaseProps & {
    badge: true;
    badgeCount: number;
} & {
    closable?: false | undefined;
} & {
    checkbox?: false | undefined;
} & React.RefAttributes<HTMLDivElement>) | (import("@chakra-ui/styled-system").CSSWithMultiValues & BaseProps & {
    badge: true;
    badgeCount: number;
} & {
    closable?: false | undefined;
} & {
    checkbox: true;
    checked?: boolean | undefined;
    onCheck(value: boolean): void;
} & React.RefAttributes<HTMLDivElement>) | (import("@chakra-ui/styled-system").CSSWithMultiValues & BaseProps & {
    badge: true;
    badgeCount: number;
} & {
    closable: true;
    onClose(): void;
} & {
    checkbox?: false | undefined;
} & React.RefAttributes<HTMLDivElement>) | (import("@chakra-ui/styled-system").CSSWithMultiValues & BaseProps & {
    badge: true;
    badgeCount: number;
} & {
    closable: true;
    onClose(): void;
} & {
    checkbox: true;
    checked?: boolean | undefined;
    onCheck(value: boolean): void;
} & React.RefAttributes<HTMLDivElement>) | (import("@chakra-ui/styled-system").CSSWithMultiValues & import("@chakra-ui/styled-system").RecursivePseudo<import("@chakra-ui/styled-system").CSSWithMultiValues> & BaseProps & {
    badge?: false | undefined;
} & {
    closable?: false | undefined;
} & {
    checkbox?: false | undefined;
} & React.RefAttributes<HTMLDivElement>) | (import("@chakra-ui/styled-system").CSSWithMultiValues & import("@chakra-ui/styled-system").RecursivePseudo<import("@chakra-ui/styled-system").CSSWithMultiValues> & BaseProps & {
    badge?: false | undefined;
} & {
    closable?: false | undefined;
} & {
    checkbox: true;
    checked?: boolean | undefined;
    onCheck(value: boolean): void;
} & React.RefAttributes<HTMLDivElement>) | (import("@chakra-ui/styled-system").CSSWithMultiValues & import("@chakra-ui/styled-system").RecursivePseudo<import("@chakra-ui/styled-system").CSSWithMultiValues> & BaseProps & {
    badge?: false | undefined;
} & {
    closable: true;
    onClose(): void;
} & {
    checkbox?: false | undefined;
} & React.RefAttributes<HTMLDivElement>) | (import("@chakra-ui/styled-system").CSSWithMultiValues & import("@chakra-ui/styled-system").RecursivePseudo<import("@chakra-ui/styled-system").CSSWithMultiValues> & BaseProps & {
    badge?: false | undefined;
} & {
    closable: true;
    onClose(): void;
} & {
    checkbox: true;
    checked?: boolean | undefined;
    onCheck(value: boolean): void;
} & React.RefAttributes<HTMLDivElement>) | (import("@chakra-ui/styled-system").CSSWithMultiValues & import("@chakra-ui/styled-system").RecursivePseudo<import("@chakra-ui/styled-system").CSSWithMultiValues> & BaseProps & {
    badge: true;
    badgeCount: number;
} & {
    closable?: false | undefined;
} & {
    checkbox?: false | undefined;
} & React.RefAttributes<HTMLDivElement>) | (import("@chakra-ui/styled-system").CSSWithMultiValues & import("@chakra-ui/styled-system").RecursivePseudo<import("@chakra-ui/styled-system").CSSWithMultiValues> & BaseProps & {
    badge: true;
    badgeCount: number;
} & {
    closable?: false | undefined;
} & {
    checkbox: true;
    checked?: boolean | undefined;
    onCheck(value: boolean): void;
} & React.RefAttributes<HTMLDivElement>) | (import("@chakra-ui/styled-system").CSSWithMultiValues & import("@chakra-ui/styled-system").RecursivePseudo<import("@chakra-ui/styled-system").CSSWithMultiValues> & BaseProps & {
    badge: true;
    badgeCount: number;
} & {
    closable: true;
    onClose(): void;
} & {
    checkbox?: false | undefined;
} & React.RefAttributes<HTMLDivElement>) | (import("@chakra-ui/styled-system").CSSWithMultiValues & import("@chakra-ui/styled-system").RecursivePseudo<import("@chakra-ui/styled-system").CSSWithMultiValues> & BaseProps & {
    badge: true;
    badgeCount: number;
} & {
    closable: true;
    onClose(): void;
} & {
    checkbox: true;
    checked?: boolean | undefined;
    onCheck(value: boolean): void;
} & React.RefAttributes<HTMLDivElement>) | (Pick<import("@chakra-ui/styled-system").CSSWithMultiValues & import("@chakra-ui/styled-system").RecursiveCSSSelector<import("@chakra-ui/styled-system").CSSWithMultiValues> & BaseProps & {
    badge?: false | undefined;
} & {
    closable?: false | undefined;
} & {
    checkbox?: false | undefined;
}, React.Key> & React.RefAttributes<HTMLDivElement>) | (Pick<import("@chakra-ui/styled-system").CSSWithMultiValues & import("@chakra-ui/styled-system").RecursiveCSSSelector<import("@chakra-ui/styled-system").CSSWithMultiValues> & BaseProps & {
    badge?: false | undefined;
} & {
    closable?: false | undefined;
} & {
    checkbox: true;
    checked?: boolean | undefined;
    onCheck(value: boolean): void;
}, React.Key> & React.RefAttributes<HTMLDivElement>) | (Pick<import("@chakra-ui/styled-system").CSSWithMultiValues & import("@chakra-ui/styled-system").RecursiveCSSSelector<import("@chakra-ui/styled-system").CSSWithMultiValues> & BaseProps & {
    badge?: false | undefined;
} & {
    closable: true;
    onClose(): void;
} & {
    checkbox?: false | undefined;
}, React.Key> & React.RefAttributes<HTMLDivElement>) | (Pick<import("@chakra-ui/styled-system").CSSWithMultiValues & import("@chakra-ui/styled-system").RecursiveCSSSelector<import("@chakra-ui/styled-system").CSSWithMultiValues> & BaseProps & {
    badge?: false | undefined;
} & {
    closable: true;
    onClose(): void;
} & {
    checkbox: true;
    checked?: boolean | undefined;
    onCheck(value: boolean): void;
}, React.Key> & React.RefAttributes<HTMLDivElement>) | (Pick<import("@chakra-ui/styled-system").CSSWithMultiValues & import("@chakra-ui/styled-system").RecursiveCSSSelector<import("@chakra-ui/styled-system").CSSWithMultiValues> & BaseProps & {
    badge: true;
    badgeCount: number;
} & {
    closable?: false | undefined;
} & {
    checkbox?: false | undefined;
}, React.Key> & React.RefAttributes<HTMLDivElement>) | (Pick<import("@chakra-ui/styled-system").CSSWithMultiValues & import("@chakra-ui/styled-system").RecursiveCSSSelector<import("@chakra-ui/styled-system").CSSWithMultiValues> & BaseProps & {
    badge: true;
    badgeCount: number;
} & {
    closable?: false | undefined;
} & {
    checkbox: true;
    checked?: boolean | undefined;
    onCheck(value: boolean): void;
}, React.Key> & React.RefAttributes<HTMLDivElement>) | (Pick<import("@chakra-ui/styled-system").CSSWithMultiValues & import("@chakra-ui/styled-system").RecursiveCSSSelector<import("@chakra-ui/styled-system").CSSWithMultiValues> & BaseProps & {
    badge: true;
    badgeCount: number;
} & {
    closable: true;
    onClose(): void;
} & {
    checkbox?: false | undefined;
}, React.Key> & React.RefAttributes<HTMLDivElement>) | (Pick<import("@chakra-ui/styled-system").CSSWithMultiValues & import("@chakra-ui/styled-system").RecursiveCSSSelector<import("@chakra-ui/styled-system").CSSWithMultiValues> & BaseProps & {
    badge: true;
    badgeCount: number;
} & {
    closable: true;
    onClose(): void;
} & {
    checkbox: true;
    checked?: boolean | undefined;
    onCheck(value: boolean): void;
}, React.Key> & React.RefAttributes<HTMLDivElement>)>;
export default _default;
