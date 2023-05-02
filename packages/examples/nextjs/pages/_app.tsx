import { ThemeProvider } from '@highoutput/hds';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { Header } from '../components/Header';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>NextJS + HDS</title>
      </Head>

      <ThemeProvider>
        <Header />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
