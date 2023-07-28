import React, { FC } from 'react';
import { useTranslation } from 'next-i18next';

import Image from 'next/image';
import Styled from './styles';

import Who from './components/who';
import What from './components/what';
import Where from './components/where';
import Accommodations from './components/accommodations';
import Gifts from './components/gifts';

const HomeModule: FC = () => {
  const { t } = useTranslation('home');

  return (
    <>
      <Styled.Header>
        <div>
          <Styled.HeaderWrapper>
            <div>
              <Styled.HeaderTitle>
                <span>{t('header-name1')}</span>
                <br />
                <span>
                  &amp;&nbsp;
                  {t('header-name2')}
                </span>
              </Styled.HeaderTitle>
              <Styled.HeaderDate>{t('date')}</Styled.HeaderDate>
            </div>
          </Styled.HeaderWrapper>
        </div>
      </Styled.Header>

      <Who />

      <Styled.GreenBackground>
        <div>
          <Image className="circle" src="/images/greenLeafsBgAlt.svg" width={1000} height={900} />
        </div>
      </Styled.GreenBackground>

      <What />

      <Where />

      <Styled.GreenLinesBackground>
        <div>
          <Image className="circle" src="/images/lines.svg" width={500} height={500} />
        </div>
      </Styled.GreenLinesBackground>

      <Accommodations />

      <Gifts />

      <Styled.LeafsBackground>
        <div>
          <Image className="circle" src="/images/leafsBottom.svg" width={730} height={600} />
        </div>
      </Styled.LeafsBackground>
    </>
  );
};

export default HomeModule;
