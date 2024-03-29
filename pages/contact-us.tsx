import React, { lazy, Suspense } from 'react';
import { GetStaticProps } from 'next';
import type { NextPage } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const ContactModule = lazy(() => import('../components/contact'));

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale || 'en-GB', ['common', 'contact'])),
    },
  };
};

const Contact: NextPage = () => {
  return (
    <Suspense fallback={<></>}>
      <ContactModule />
    </Suspense>
  );
};

export default Contact;
