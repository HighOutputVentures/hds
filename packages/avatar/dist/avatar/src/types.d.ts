/// <reference types="react" />
export declare type Breakpoints = "base" | "sm" | "md" | "lg" | "xl";
export declare type ResponsiveSize<T extends string> = Partial<Record<Breakpoints, T>>;
export declare type Clickable = {
    clickable?: false;
} | {
    clickable: true;
    onClick(): void;
};
export declare type Badgeable = {
    badge?: false;
} | {
    badge: true;
    badgeIcon(props: React.ComponentProps<"svg">): JSX.Element;
};
export declare type FreeSize<T> = Omit<T, "size">;
