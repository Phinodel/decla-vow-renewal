import React, { ChangeEvent, FC, useState } from 'react';
import { useTranslation } from 'next-i18next';

import Styled from './styles';
import { getList } from '../utils';

interface ComponentProps {
  onClose: () => void;
}

interface Guest {
  name: string;
  error: boolean;
}

const emptyGuest: Guest = { name: '', error: false };

const maxGuests = 7; // yields 8

const Popup: FC<ComponentProps> = ({ onClose }) => {
  const [guests, setGuests] = useState<Guest[]>([emptyGuest, emptyGuest]);
  const [error, setError] = useState('');
  const { t } = useTranslation('popup');

  const handleOnChange = (index: number) => (e: ChangeEvent<HTMLInputElement>) => {
    console.log({ index, target: e.target });
    setGuests((oldValues) => {
      oldValues[index] = { ...oldValues[index], name: e.target.value };
      return oldValues;
    });
  };

  const handleOnAdd = () => {
    setGuests((oldValues) => [...oldValues, emptyGuest]);
  };

  const checkIfFieldsAreFilled = () => {
    const allFilled = guests.some((e) => e.name.length > 0);

    setGuests((oldValues) =>
      oldValues.map((e) => {
        return { ...e, error: e.name.length <= 0 };
      }),
    );

    return allFilled;
  };

  const handleOnSubmit = (accepts: boolean) => () => {
    setError('');

    const canSubmit = checkIfFieldsAreFilled();

    console.log('submit', { accepts, canSubmit });

    if (!canSubmit) {
      return false;
    }

    const list = getList();

    console.log(list);

    // check if name already exists in list

    // yes? show given info

    // no? save and show success

    setError(t('errorMessage'));
  };

  const handleOnClose = () => {
    onClose();
  };

  return (
    <Styled.Wrapper>
      <Styled.Background onClick={handleOnClose} />
      <Styled.Container>
        <Styled.CloseButton onClick={handleOnClose} />
        <Styled.Content>
          <h4>{t('title')}</h4>
          <p>{t('content1')}</p>
          <p>{t('content2')}</p>
          <p>{t('content3')}</p>

          <div>
            {guests.map((e, i) => (
              <div key={i}>
                <input
                  type="text"
                  placeholder="Mrs / Mr Doe"
                  className={e.error ? 'error' : ''}
                  onChange={handleOnChange(i)}
                />
              </div>
            ))}

            {guests.length <= maxGuests && <Styled.AddButton onClick={handleOnAdd}>&#43;</Styled.AddButton>}
          </div>

          <p>{t('specialDietryRequirements')}</p>
          <textarea />

          <p>{t('songRequests')}</p>
          <input type="text" />

          {error && <p>{error}</p>}

          <Styled.ButtonWrapper>
            <div>
              <Styled.Declinebutton onClick={handleOnSubmit(false)}>{t('declineButton')}</Styled.Declinebutton>
            </div>
            <div>
              <Styled.Button onClick={handleOnSubmit(true)}>{t('acceptButton')}</Styled.Button>
            </div>
          </Styled.ButtonWrapper>
        </Styled.Content>
      </Styled.Container>
    </Styled.Wrapper>
  );
};

export default Popup;
