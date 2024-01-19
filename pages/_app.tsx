import { FC } from 'react';
import { QueryClientProvider } from 'react-query';
import Head from 'next/head';
import { AppProps } from 'next/app';
import { MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import '@mantine/dates/styles.css';

import mainTheme from 'theme/main-theme';
import queryClient from 'query_client';

import PageConfig from './PageConfig';


const App: FC<AppProps> = ({ Component, pageProps }) => (
  <>
    <Head>
      <title>Astronomy Picture of the Day</title>
    </Head>
    <QueryClientProvider client={queryClient}>
      <MantineProvider
        theme={mainTheme}
      >
        <PageConfig>
          <Component {...pageProps} />
        </PageConfig>
      </MantineProvider>
    </QueryClientProvider>
  </>
);

export default App;