import * as React from 'react';
export declare type MountProps = {
    when?: boolean;
    fallback?: JSX.Element | null;
};
export default function Mount(props: React.PropsWithChildren<MountProps>): JSX.Element | null;
