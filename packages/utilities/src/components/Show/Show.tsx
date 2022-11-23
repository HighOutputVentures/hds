import * as React from 'react';

export type ShowProps = {
  when?: boolean;
  fallback?: JSX.Element | null;
};

export default function Show(props: React.PropsWithChildren<ShowProps>) {
  const { when, fallback, children } = Object.assign({ fallback: null }, props);

  return !when ? fallback : <React.Fragment>{children}</React.Fragment>;
}
