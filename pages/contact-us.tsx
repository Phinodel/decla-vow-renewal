import { GetStaticProps } from 'next';
import type { NextPage } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import ContactModule from '../components/contact';

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale || 'en-GB', ['common'])),
    },
  };
};

const Contact: NextPage = () => {
  return <ContactModule />;
};

export default Contact;
