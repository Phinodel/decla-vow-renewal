import React, { FC } from 'react';
import { useTranslation } from 'next-i18next';

import Styled from './styles';

const ContactModule: FC = () => {
  const { t } = useTranslation('contact');

  return (
    <>
      <Styled.ContentContainer>
        <h3>
          <span className="wrapper">
            <span className="title">{t('contact-title')}</span>
            <span className="bg" />
          </span>
        </h3>

        <Styled.ContactDetailsWrapper>
          <Styled.ContactDetails>
            <Styled.BoldTitle>Delphine Claerhout:</Styled.BoldTitle>
            <p>{t('mail')}: claerhout.delphine@gmail.com</p>
          </Styled.ContactDetails>

          <Styled.ContactDetails>
            <Styled.BoldTitle>Pierre De Conto:</Styled.BoldTitle>
            <p>{t('mail')}: pierre.deconto@gmail.com</p>
          </Styled.ContactDetails>
        </Styled.ContactDetailsWrapper>
      </Styled.ContentContainer>

      <Styled.ContentContainer>
        <h3>
          <span className="wrapper">
            <span className="title">{t('questions-title')}</span>
            <span className="bg" />
          </span>
        </h3>

        <div>
          <Styled.BoldTitle>{t('invitation-question')}</Styled.BoldTitle>
          <p>{t('invitation-answer')}</p>
        </div>

        <div>
          <Styled.BoldTitle>{t('kids-question')}</Styled.BoldTitle>
          <p>{t('kids-answer')}</p>
        </div>
      </Styled.ContentContainer>
    </>
  );
};

export default ContactModule;
