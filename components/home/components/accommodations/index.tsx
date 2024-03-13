import React, { FC } from 'react';
import { useTranslation } from 'next-i18next';

import Styled from './styles';

interface Accommodation {
  label: string;
  url: string;
}

const AccommodationList: FC<{ list: Accommodation[]; label: string }> = ({ list, label }) => {
  const { t } = useTranslation('home');

  return (
    <table>
      <thead>
        <tr>
          <th>{t('accommodation-table-distance')}</th>
          <th>{t('accommodation-table-title')}</th>
          <th>{t('accommodation-table-type')}</th>
        </tr>
      </thead>
      <tbody>
        {list.map((e, i) => (
          <tr key={e.label}>
            {i === 0 && (
              <td className="distance" rowSpan={list.length}>
                {label}
              </td>
            )}
            <td>
              <a target="_blank" href={e.url} referrerPolicy="no-referrer" rel="noreferrer">
                {e.label}
              </a>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

const Accommodations: FC = () => {
  const { t } = useTranslation('home');

  const locationsLessThan2km: Accommodation[] = [
    {
      label: `${t('accommodation-holiday-home')} De Reus van Horebeke (< 5p)`,
      url: 'https://www.dereusvanhorebeke.be',
    },
    {
      label: `${t('accommodation-holiday-home')} Vierkantshoeve Molenzicht`,
      url: 'https://www.vierkantshoevemolenzicht.be',
    },
    {
      label: `${t('accommodation-hotel')} 't Horenbecca`,
      url: 'https://www.horenbecca.com',
    },
  ];

  const locationsLessThan5km: Accommodation[] = [
    {
      label: `${t('accommodation-bnb')} Mater Amabilis`,
      url: 'https://www.materamabilisbb.be',
    },
    {
      label: `${t('accommodation-bnb')} De Amberhoeve (Schorisse)`,
      url: 'https://www.amberhoeve.be',
    },
    {
      label: `${t('accommodation-holiday-home')} 't Heufke (Zwalm)`,
      url: 'https://www.theufke.be',
    },
    {
      label: `${t('accommodation-holiday-home')} Charmant`,
      url: 'https://www.vakantiehuischarmant.be',
    },
  ];

  const locationsLessThan10km: Accommodation[] = [
    {
      label: `${t('accommodation-bnb')} La Cereza`,
      url: 'https://www.lacereza.be',
    },
    {
      label: `${t('accommodation-bnb')} Kokkerelle`,
      url: 'https://www.kokerelle.be',
    },
  ];

  return (
    <Styled.AccommodationSection>
      <h3>
        <span className="wrapper">
          <span className="title">{t('accommodation-title')}</span>
          <span className="bg" />
        </span>
      </h3>
      <p>{t('accommodation-text')}</p>

      <AccommodationList list={locationsLessThan2km} label="&gt; 2km" />
      <AccommodationList list={locationsLessThan5km} label="&gt; 5km" />
      <AccommodationList list={locationsLessThan10km} label="&gt; 10km" />
    </Styled.AccommodationSection>
  );
};

export default Accommodations;
