import React, { FC } from 'react';
import { useTranslation } from 'next-i18next';

import Styled from './styles';

const PicturesModule: FC = () => {
  const { t } = useTranslation('pictures');

  return (
    <>
      <Styled.ContentWrapper>
        <Styled.ContentContainer>
          <h3>
            <span className="wrapper">
              <span className="title">{t('pictures-title')}</span>
              <span className="bg" />
            </span>
          </h3>
        </Styled.ContentContainer>

        <Styled.ContentContainer></Styled.ContentContainer>
      </Styled.ContentWrapper>
    </>
  );
};

export default PicturesModule;
