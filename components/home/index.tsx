import React, { FC } from 'react';
import { useTranslation } from 'next-i18next';

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
          <Styled.HeaderWrapper>
            <div>
              <Styled.HeaderTitle>
                <span>{t('title')}</span>
                <br />
                <span>{t('subtitle')}</span>
              </Styled.HeaderTitle>
              <Styled.HeaderDate>{t('date')}</Styled.HeaderDate>
            </div>
          </Styled.HeaderWrapper>
        </div>
      </Styled.Header>

      <Styled.WhoSection>
        <h3>
          <span className="wrapper">
            <span className="title">{t('who-title')}</span>
            <span className="bg" />
          </span>
        </h3>
        <p>{t('who-text1')}</p>
        <p>{t('who-text2')}</p>
        <p>{t('who-text3')}</p>
      </Styled.WhoSection>

      <Styled.GreenBackground>
        <div>
          <Image className="circle" src="/images/greenLeafsBg.svg" width={1250} height={1100} />
        </div>
      </Styled.GreenBackground>

      <Styled.WhatSection>
        <div>
          <h3>
            <span className="wrapper">
              <span className="title">{t('what-title')}</span>
              <span className="bg" />
            </span>
          </h3>
          <p>{t('what-text1')}</p>
          <p>{t('what-text2')}</p>
        </div>
      </Styled.WhatSection>

      <Styled.WhereSection>
        <h3>
          <span className="wrapper">
            <span className="title">{t('where-title')}</span>
            <span className="bg" />
          </span>
        </h3>
        <p>{t('where-location-name')}</p>
        <p>{t('where-location-address')}</p>
      </Styled.WhereSection>
    </>
  );
};

export default HomeModule;
