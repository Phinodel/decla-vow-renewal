import React, { FC, useState } from 'react';
import { useTranslation } from 'next-i18next';

import Popup from './components/popup';
import Styled from './styles';

const Who: FC = () => {
  const [showPopup, setShowPopup] = useState(true);
  const { t } = useTranslation('home');

  const handleOnClick = () => {
    setShowPopup(true);
  };

  const handleOnClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <>
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
      {showPopup && <Popup onClose={handleOnClosePopup} />}
    </>
  );
};

export default Who;
