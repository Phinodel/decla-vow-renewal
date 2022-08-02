import React, { FC } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import Styled from './styles';

const Header: FC = () => {
  const { t } = useTranslation('common');
  const { pathname } = useRouter();

  return (
    <Styled.Container>
      <Styled.Wrapper>
        <ul>
          <Link href={pathname} locale="en-GB" passHref>
            <a>{t('lang-en')}</a>
          </Link>

          <li>/</li>

          <Link href={pathname} locale="nl-BE" passHref>
            <a>{t('lang-nl')}</a>
          </Link>

          <li>/</li>

          <Link href={pathname} locale="fr" passHref>
            <a>{t('lang-fr')}</a>
          </Link>
        </ul>
      </Styled.Wrapper>
    </Styled.Container>
  );
};

export default Header;
