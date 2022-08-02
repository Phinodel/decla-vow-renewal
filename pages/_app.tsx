import React from 'react';
import { AppProps } from 'next/app';
import { appWithTranslation } from 'next-i18next';

import { ThemeProvider } from 'styled-components';
import theme from '../styles/theme';
import { GlobalStyle } from '../styles/global';
import Layout from '../components/pageLayout';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default appWithTranslation(MyApp);
