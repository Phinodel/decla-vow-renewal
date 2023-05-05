import React, { ChangeEvent, FC, useState } from 'react';
import { useTranslation } from 'next-i18next';

import Styled from './styles';
import { updateList } from '../utils';
import { Guest, ExtraGuestInfo } from '../types';

interface ComponentProps {
  onClose: () => void;
}

const emptyGuest: Guest = { name: '', error: false };
const maxGuests = 8;

const Popup: FC<ComponentProps> = ({ onClose }) => {
  const [guests, setGuests] = useState<Guest[]>([emptyGuest]);
  const [extraData, setExtraData] = useState<ExtraGuestInfo>({ food: '' });

  const [guestAlreadyRSVPd, setGuestAlreadyRSVPd] = useState<boolean>(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const { t } = useTranslation('popup');

  const reset = () => {
    setGuests([emptyGuest]);
    setExtraData({ food: '' });
    setGuestAlreadyRSVPd(false);
    setError(null);
    setSuccess(false);
    onClose();
  };

  const handleOnChange = (index: number) => (e: ChangeEvent<HTMLInputElement>) => {
    setGuests((oldValues) => {
      oldValues[index] = { ...oldValues[index], name: e.target.value };

      return oldValues;
    });
  };

  const handleOnChangeExtraInfo =
    (field: keyof ExtraGuestInfo) => (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setExtraData((oldValues) => ({ ...oldValues, [field]: e.target.value }));
    };

  const handleOnAdd = () => {
    setGuests((oldValues) => [...oldValues, emptyGuest]);
  };

  const checkIfFieldsAreFilled = () => {
    const allFilled = guests.some((e) => e.name.length > 0);

    setGuests((oldValues) => oldValues.map((e) => ({ ...e, error: e.name.length <= 0 })));

    return allFilled;
  };

  const handleOnSubmit = (accepts: boolean) => async () => {
    try {
      setError(null);
      setLoading(true);

      const canSubmit = checkIfFieldsAreFilled();

      if (!canSubmit) {
        setLoading(false);
        return false;
      }

      const { updateListError, guestAlreadyExists } = await updateList(guests, { ...extraData, accepts });

      if (updateListError) {
        throw new Error(updateListError.message);
      }

      if (guestAlreadyExists) {
        setGuestAlreadyRSVPd(true);
      }

      setLoading(false);
      setSuccess(true);

      setTimeout(reset, 8000);
    } catch {
      setError(t('errorMessage'));
      setLoading(false);
    }
  };

  const handleOnClose = () => {
    onClose();
  };

  return (
    <>
      <Styled.FilterWrapper />
      <Styled.Wrapper>
        <Styled.Background onClick={handleOnClose} />
        <Styled.Container>
          <Styled.CloseButton onClick={handleOnClose} />
          <Styled.Content>
            <h4>{t('title')}</h4>
            <Styled.TextWrapper>
              <p>{t('content1')}</p>
              <p>{t('content2')}</p>
              <p>{t('content3')}</p>
            </Styled.TextWrapper>

            <Styled.InputWrapper>
              {guests.map((e, i) => (
                <div key={i}>
                  <input
                    type="text"
                    placeholder={t('namePlaceholder')}
                    className={e.error ? 'error' : ''}
                    onChange={handleOnChange(i)}
                    disabled={loading}
                  />
                </div>
              ))}

              {guests.length < maxGuests && (
                <Styled.AddButton className={loading ? 'disabled' : ''} onClick={loading ? undefined : handleOnAdd}>
                  &#43;
                </Styled.AddButton>
              )}
            </Styled.InputWrapper>

            <textarea
              disabled={loading}
              placeholder={t('specialDietaryRequirements')}
              onChange={handleOnChangeExtraInfo('food')}
            />

            {error && <p>{error}</p>}

            {guestAlreadyRSVPd && <p>your rsvp has been updated</p>}

            {!guestAlreadyRSVPd && success && <p>your rsvp has been saved</p>}

            <Styled.ButtonWrapper>
              <div>
                <Styled.Declinebutton className={loading ? 'disabled' : ''} onClick={handleOnSubmit(false)}>
                  {t('declineButton')}
                </Styled.Declinebutton>
              </div>
              <div>
                <Styled.Button className={loading ? 'disabled' : ''} onClick={handleOnSubmit(true)}>
                  {t('acceptButton')}
                </Styled.Button>
              </div>
            </Styled.ButtonWrapper>
          </Styled.Content>
        </Styled.Container>
      </Styled.Wrapper>
    </>
  );
};

export default Popup;
