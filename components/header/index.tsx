import React, { FC } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';

import Styled from './styles';

const Header: FC = () => {
  const { t } = useTranslation('common');
  const { pathname, locale } = useRouter();

  const createLocaleLink = (lang: 'en-GB' | 'nl-BE' | 'fr') => {
    const isActive = lang === locale;

    return (
      <li className={isActive ? 'active' : 'link'}>
        <Link href={pathname} locale={lang} passHref>
          <a>{t(`lang-${lang}`)}</a>
        </Link>
      </li>
    );
  };

  // could eventually do a real back button
  // but it also does back-to-prev-lang
  // and we are not planning on having more pages
  // const handleOnBack = (e: MouseEvent) => {
  //   e.preventDefault();
  //   back();
  // };

  return (
    <>
      <Styled.Container>
        <Styled.Wrapper>
          <Styled.BackContainer>
            {/* {pathname !== '/' && <p onClick={handleOnBack}>{t('back-action')}</p>} */}
            {pathname !== '/' && (
              <Link href="/" passHref>
                <a>{t('back-action')}</a>
              </Link>
            )}
          </Styled.BackContainer>

          <ul>
            {createLocaleLink('en-GB')}

            <li>/</li>

            {createLocaleLink('nl-BE')}

            <li>/</li>

            {createLocaleLink('fr')}
          </ul>
        </Styled.Wrapper>
      </Styled.Container>

      <Styled.Background>
        <Styled.BackgroundLeafs />
      </Styled.Background>
    </>
  );
};

export default Header;
