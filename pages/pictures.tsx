import React, { lazy, Suspense } from 'react';
import { GetStaticProps } from 'next';
import type { NextPage } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const PicturesModule = lazy(() => import('../components/pictures'));

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale || 'en-GB', ['common', 'pictures'])),
    },
  };
};

const Pictures: NextPage = () => {
  return (
    <Suspense fallback={<></>}>
      <PicturesModule />
    </Suspense>
  );
};

export default Pictures;
