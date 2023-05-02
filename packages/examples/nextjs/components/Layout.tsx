import { Box } from '@highoutput/hds';
import { NextPage } from 'next';
import { PropsWithChildren } from 'react';
import { Header } from './Header';

export default function Layout({ children }: PropsWithChildren) {
  return (
    <>
      <Header />
      <Box p={16}>{children}</Box>
    </>
  );
}

type C<T> = ((props: T) => JSX.Element | null) | NextPage<T>;

export function withLayout<T>(Component: C<T>) {
  const value = (page: React.ReactElement) => <Layout>{page}</Layout>;

  if (!Object.prototype.hasOwnProperty.call(Component, 'getLayout')) {
    Object.defineProperty(Component, 'getLayout', { value });
  }

  return Component;
}
