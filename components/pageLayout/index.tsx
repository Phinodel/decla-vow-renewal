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
  const websiteUrl = 'https://decla-vow-renewal.vercel.app/';
  const websiteImage = `${websiteUrl}favicon.ico`;

  return (
    <div>
      <Head>
        <title>{t('title')}</title>
        <meta name="description" content={t('description')} />
        <link rel="icon" href="/favicon.ico" />

        <meta property="og:url" content={websiteUrl} />
        <meta property="og:title" content={t('title')} />
        <meta property="og:description" content={t('description')} />

        <meta property="og:image" itemProp="image" content={websiteImage} />
        <meta property="twitter:image" content={websiteImage} />
        <meta name="msapplication-TileImage" content={websiteImage} />

        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="180" />
        <meta property="og:image:height" content="180" />

        <meta property="og:site_name" content={t('title')} />
        <meta property="og:type" content="website" />
        <meta property="og:updated_time" content={`${Date.now()}`} />

        <meta name="author" content="Delphine Claerhout" />
      </Head>
      <Header />
      <Styled.Container>{children}</Styled.Container>
      <Footer />
    </div>
  );
};

export default Layout;
