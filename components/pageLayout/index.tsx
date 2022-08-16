import React, { FC } from 'react';
import Head from 'next/head';
import { useTranslation } from 'next-i18next';

import Footer from '../footer';
import Header from '../header';
import Styled from './styles';

type Props = {
  children?: JSX.Element | JSX.Element[];
};

const Layout: FC<Props> = ({ children }) => {
  const { t } = useTranslation('common');

  return (
    <div>
      <Head>
        <title>{t('title')}</title>
        <meta name="description" content={t('description')} />
        <link rel="icon" href="/favicon.ico" />

        <meta property="og:url" content="https://decla-vow-renewal.vercel.app/" />
        <meta property="og:title" content={t('title')} />
        <meta property="og:description" content={t('description')} />

        <meta property="og:image" content="https://decla-vow-renewal.vercel.app/favicon.ico" />
        <meta property="twitter:image" content="https://decla-vow-renewal.vercel.app/favicon.ico" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="180" />
        <meta property="og:image:height" content="180" />

        <meta property="og:type" content="website" />

        <meta name="author" content="Delphine Claerhout" />
      </Head>
      <Header />
      <Styled.Container>{children}</Styled.Container>
      <Footer />
    </div>
  );
};

export default Layout;
