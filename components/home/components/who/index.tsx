import React, { FC } from 'react';
import { useTranslation } from 'next-i18next';

import Styled from './styles';
import { getList, updateList } from './utils';

const Who: FC = () => {
  const { t } = useTranslation('home');

  const handleOnClick = () => {
    console.log('click');

    const list = getList();

    console.log({ list });
  };

  return (
    <Styled.WhoSection>
      <h3>
        <span className="wrapper">
          <span className="title">{t('who-title')}</span>
          <span className="bg" />
        </span>
      </h3>
      <p>Delphine&nbsp;Claerhout &amp; Pierre&nbsp;De&nbsp;Conto</p>
      <p>
        <Styled.highlightedText>{t('who-text2')}</Styled.highlightedText>
      </p>
      <Styled.slantedText>{t('who-text3')}</Styled.slantedText>
      <Styled.Button onClick={handleOnClick}>{t('who-button')}</Styled.Button>
    </Styled.WhoSection>
  );
};

export default Who;
