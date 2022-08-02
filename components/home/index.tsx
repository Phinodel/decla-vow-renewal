import React, { FC } from 'react';
import { useTranslation } from 'next-i18next';

import Link from 'next/link';
import Image from 'next/image';
import Styled from './styles';

{
  /* <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />; */
}

const HomeModule: FC = () => {
  const { t } = useTranslation('saveTheDate');

  return (
    <>
      <Styled.Header>
        <div>
          <h1>
            <span>{t('title')}</span>
            <span>{t('subtitle')}</span>
          </h1>
          <h2>{t('date')}</h2>
        </div>
      </Styled.Header>
      <Styled.WhoSection>
        <h3>{t('who-title')}</h3>
        <p>{t('who-text1')}</p>
        <p>{t('who-text2')}</p>
        <p>{t('who-text3')}</p>
      </Styled.WhoSection>
      <Styled.WhatSection>
        <h3>{t('what-title')}</h3>
        <p>{t('what-text1')}</p>
        <p>{t('what-text2')}</p>
      </Styled.WhatSection>
      <Styled.WhereSection>
        <h3>{t('where-title')}</h3>
        <p>{t('where-location-name')}</p>
        <p>{t('where-location-address')}</p>
      </Styled.WhereSection>
    </>
  );
};

export default HomeModule;
