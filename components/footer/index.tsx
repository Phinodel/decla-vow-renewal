import React, { FC } from 'react';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import Styled from './styles';

const Footer: FC = () => {
  const { t } = useTranslation('common');

  return (
    <Styled.Container>
      <Styled.Wrapper>
        <p>{t('title-without-names')} Delphine&nbsp;&amp;&nbsp;Pierre</p>
        <Link href="/contact-us" passHref>
          <a>{t('contact')}</a>
        </Link>
      </Styled.Wrapper>
    </Styled.Container>
  );
};

export default Footer;
