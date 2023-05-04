import React, { FC } from 'react';
import { useTranslation } from 'next-i18next';

import Styled from './styles';

const ContactModule: FC = () => {
  const { t } = useTranslation('contact');

  return (
    <>
      <Styled.ContentWrapper>
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
            <Styled.BoldTitle>{t('arrivalTime-question')}</Styled.BoldTitle>
            <p>{t('arrivalTime-answer')}</p>
          </div>

          <div>
            <Styled.BoldTitle>{t('endTime-question')}</Styled.BoldTitle>
            <p>{t('endTime-answer')}</p>
          </div>

          <div>
            <Styled.BoldTitle>{t('parking-question')}</Styled.BoldTitle>
            <p>{t('parking-answer')}</p>
          </div>

          <div>
            <Styled.BoldTitle>{t('kids-question')}</Styled.BoldTitle>
            <p>{t('kids-answer')}</p>
          </div>

          <div>
            <Styled.BoldTitle>{t('date-question')}</Styled.BoldTitle>
            <p>{t('date-answer')}</p>
          </div>

          <div>
            <Styled.BoldTitle>{t('photos-question')}</Styled.BoldTitle>
            <p>{t('photos-answer')}</p>
          </div>

          <div>
            <Styled.BoldTitle>{t('clothing-question')}</Styled.BoldTitle>
            <p>{t('clothing-answer')}</p>
          </div>
        </Styled.ContentContainer>
      </Styled.ContentWrapper>
    </>
  );
};

export default ContactModule;
