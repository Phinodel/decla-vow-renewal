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
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Ephesis"></link>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Murecho"></link>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Poppins"></link>
      </Head>
      <Header />
      <Styled.Container>{children}</Styled.Container>
      <Footer />
    </div>
  );
};

export default Layout;
