import React, { ChangeEvent, FC, useState, useEffect } from 'react';
import { useTranslation } from 'next-i18next';
import { track } from '@vercel/analytics';

import Styled from './styles';
import { updateList } from '../utils';
import { Guest, ExtraGuestInfo } from '../types';

interface ComponentProps {
  onClose: () => void;
}

const generateId = (): string => Math.random().toString(16).slice(2);

const createEmptyGuest = (): Guest => ({ name: '', error: false, id: generateId() });
const maxGuests = 8;

const Popup: FC<ComponentProps> = ({ onClose }) => {
  const [guests, setGuests] = useState<Guest[]>([createEmptyGuest(), createEmptyGuest()]);
  const [extraData, setExtraData] = useState<ExtraGuestInfo>({ food: '' });

  const [guestAlreadyRSVPd, setGuestAlreadyRSVPd] = useState<boolean>(false);
  const [showError, setShowError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [accepted, setAccepted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { t } = useTranslation('popup');

  const reset = () => {
    setGuests([createEmptyGuest(), createEmptyGuest()]);
    setExtraData({ food: '' });
    setGuestAlreadyRSVPd(false);
    setShowError(false);
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
    setGuests((oldValues) => [...oldValues, createEmptyGuest()]);
  };

  const checkIfFieldsAreFilled = () => {
    const containsEmpty = guests.some((e) => e.name.length === 0);

    setGuests((oldValues) => oldValues.map((e) => ({ ...e, error: e.name.length <= 0 })));

    return !containsEmpty;
  };

  const handleOnSubmit = (accepts: boolean) => async () => {
    try {
      setShowError(false);
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

      setAccepted(accepts);

      setLoading(false);
      setSuccess(true);

      track('RSVP', {
        details: JSON.stringify({ guests, ...extraData, accepts }),
        guestAlreadyExists,
        accepts,
      });

      setTimeout(reset, 7500);
    } catch {
      track('RSVP ERROR', {
        details: JSON.stringify({ guests, ...extraData, accepts }),
        accepts,
      });

      setShowError(true);
      setLoading(false);
    }
  };

  const handleOnClose = () => {
    onClose();
  };
  const handleOnRemove = (id: string) => () => {
    setGuests((oldValues) => oldValues.filter((e) => e.id !== id));
  };

  const handleOnKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      handleOnClose();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleOnKeyDown);

    return () => window.removeEventListener('keydown', handleOnKeyDown);
  }, []);

  const showUpdateMessage = guestAlreadyRSVPd;
  const showSuccessMessageAccepted = !showUpdateMessage && success && accepted;
  const showSuccessMessageDeclined = !showUpdateMessage && success && !accepted;

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
            </Styled.TextWrapper>

            <Styled.InputWrapper>
              {guests.map((e, i) => (
                <div key={e.id}>
                  <input
                    type="text"
                    placeholder={`${t('namePlaceholder')} ${i + 1}`}
                    className={e.error ? 'error' : ''}
                    onChange={handleOnChange(i)}
                    disabled={loading}
                  />
                  {i > 0 && (
                    <Styled.RemoveButton className={loading ? 'disabled' : ''} onClick={handleOnRemove(e.id)}>
                      {t('removeButton')}
                    </Styled.RemoveButton>
                  )}
                </div>
              ))}

              {guests.length < maxGuests && (
                <Styled.AddButton className={loading ? 'disabled' : ''} onClick={loading ? undefined : handleOnAdd}>
                  {t('addButton')}
                </Styled.AddButton>
              )}
            </Styled.InputWrapper>

            <textarea
              disabled={loading}
              placeholder={t('specialDietaryRequirements')}
              onChange={handleOnChangeExtraInfo('food')}
            />

            {showError && <Styled.ErrorMessage>{t('errorMessage')}</Styled.ErrorMessage>}

            {showUpdateMessage && <Styled.SuccessMessage>{t('updateMessage')}</Styled.SuccessMessage>}

            {showSuccessMessageAccepted && <Styled.SuccessMessage>{t('savedMessageAccept')}</Styled.SuccessMessage>}

            {showSuccessMessageDeclined && <Styled.SuccessMessage>{t('savedMessageDecline')}</Styled.SuccessMessage>}

            {success ? (
              <Styled.CloseButtonWrapper>
                <Styled.Button className={loading ? 'disabled' : ''} onClick={onClose}>
                  {t('closeButton')}
                </Styled.Button>
              </Styled.CloseButtonWrapper>
            ) : (
              <Styled.ButtonWrapper>
                <div>
                  <Styled.DeclineButton className={loading ? 'disabled' : ''} onClick={handleOnSubmit(false)}>
                    {t('declineButton')}
                  </Styled.DeclineButton>
                </div>
                <div>
                  <Styled.Button className={loading ? 'disabled' : ''} onClick={handleOnSubmit(true)}>
                    {t('acceptButton')}
                  </Styled.Button>
                </div>
              </Styled.ButtonWrapper>
            )}
          </Styled.Content>
        </Styled.Container>
      </Styled.Wrapper>
    </>
  );
};

export default Popup;
