import React from 'react';
import { GetStaticProps } from 'next';
import type { NextPage } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import HomeModule from '../components/home';

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale || 'en-GB', ['common', 'home', 'popup'])),
    },
  };
};

const Home: NextPage = () => {
  return <HomeModule />;
};

export default Home;
