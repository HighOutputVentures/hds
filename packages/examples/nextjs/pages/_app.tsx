import {
  ChakraProvider,
  InterFont,
  extendTheme,
  theme,
  toastOptions,
} from '@highoutput/hds';
import { NextPage } from 'next';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { ReactElement, ReactNode } from 'react';

type AppPropsWithLayout = AppProps<{ dehydratedState: unknown }> & {
  Component: NextPage<{ [key: string]: unknown }> & {
    getLayout?: (page: ReactElement) => ReactNode;
  };
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const withLayout = Component.getLayout ?? ((page) => page);

  return (
    <>
      <Head>
        <title>NextJS + HDS</title>
      </Head>

      <InterFont />
      <ChakraProvider theme={extendTheme(theme)} toastOptions={toastOptions}>
        {withLayout(<Component {...pageProps} />)}
      </ChakraProvider>
    </>
  );
}
