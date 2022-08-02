import React, { FC } from 'react';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';

const Footer: FC = () => {
  const { t } = useTranslation('common');

  return (
    <footer>
      <p>{t('footer-title')}</p>
      <Link href="/contact-us" passHref>
        <a>{t('footer-contact')}</a>
      </Link>
    </footer>
  );
};

export default Footer;
