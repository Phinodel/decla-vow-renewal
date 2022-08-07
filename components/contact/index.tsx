import React, { FC } from 'react';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';

import Styled from './styles';

const ContactModule: FC = () => {
  const { t } = useTranslation('contact');

  return (
    <>
      <Styled.BackContainer>
        <Link href="/" passHref>
          <a>{t('back-action')}</a>
        </Link>
      </Styled.BackContainer>
      <Styled.ContentContainer>
        <h3>
          <span className="wrapper">
            <span className="title">{t('contact-title')}</span>
            <span className="bg" />
          </span>
        </h3>

        <Styled.ContactDetailsWrapper>
          <Styled.ContactDetails>
            <Styled.BoldTitle>Pierre De Conto:</Styled.BoldTitle>
            <ul>
              <li>{t('mail')}: pierre.deconto@gmail.com</li>
            </ul>
          </Styled.ContactDetails>

          <Styled.ContactDetails>
            <Styled.BoldTitle>Delphine Claerhout:</Styled.BoldTitle>
            <ul>
              <li>{t('mail')}: claerhout.delphine@gmail.com</li>
            </ul>
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
