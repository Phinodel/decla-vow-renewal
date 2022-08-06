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
        <p>
          <Styled.highlightedText>{t('who-text2')}</Styled.highlightedText>
        </p>
        <Styled.slantedText>{t('who-text3')}</Styled.slantedText>
      </Styled.WhoSection>

      <Styled.GreenBackground>
        <div>
          <Image className="circle" src="/images/greenLeafsBg.svg" width={1000} height={900} />
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
          <Styled.slantedText>{t('what-text2')}</Styled.slantedText>
        </div>
      </Styled.WhatSection>

      <Styled.GreenLinesBackground>
        <div>
          <Image className="circle" src="/images/lines.svg" width={500} height={500} />
        </div>
      </Styled.GreenLinesBackground>

      <Styled.WhereSection>
        <h3>
          <span className="wrapper">
            <span className="title">{t('where-title')}</span>
            <span className="bg" />
          </span>
        </h3>
        <p>{t('where-location-name')}</p>
        <p>
          <a target="_blank" href="https://goo.gl/maps/bpwqZ1Amz7JVnV388" referrerPolicy="no-referrer">
            {t('where-location-address')}
          </a>
        </p>

        <Styled.MapWrapper>
          <Styled.Map>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3882.344753881954!2d3.6947748153421256!3d50.83430096232244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c30ed0abc650b5%3A0xd8a237cdd101a7c0!2s&#39;t%20Verstand%20van%20Leven!5e0!3m2!1sen!2sfr!4v1659794874830!5m2!1sen!2sfr"
              width="100%"
              height="350"
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </Styled.Map>
        </Styled.MapWrapper>
      </Styled.WhereSection>
    </>
  );
};

export default HomeModule;
