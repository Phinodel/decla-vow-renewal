import React, { FC } from 'react';
import { useTranslation } from 'next-i18next';

import Styled from './styles';

const Gifts: FC = () => {
  const { t } = useTranslation('home');

  return (
    <Styled.GiftsSection>
      <h3>
        <span className="wrapper">
          <span className="title">{t('gifts-title')}</span>
          <span className="bg" />
        </span>
      </h3>
      <p>{t('gifts-text1')}</p>
      <p>{t('gifts-text2')}</p>
    </Styled.GiftsSection>
  );
};

export default Gifts;
