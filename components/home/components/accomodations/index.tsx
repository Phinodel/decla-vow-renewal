import React, { FC } from 'react';
import { useTranslation } from 'next-i18next';

import Styled from './styles';

interface Accomodation {
  label: string;
  url: string;
}

const AccomodationList: FC<{ list: Accomodation[]; label: string }> = ({ list, label }) => {
  const { t } = useTranslation('home');

  return (
    <table>
      <thead>
        <tr>
          <th>{t('accomodation-table-distance')}</th>
          <th>{t('accomodation-table-title')}</th>
          <th>{t('accomodation-table-type')}</th>
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

const Accomodations: FC = () => {
  const { t } = useTranslation('home');

  const locationsLessThan2km: Accomodation[] = [
    {
      label: `${t('accomodation-holiday-home')} Den Haegepreeck (< 8p)`,
      url: 'https://www.haegepreeck.be',
    },
    {
      label: `${t('accomodation-holiday-home')} De Reus van Horebeke (< 5p)`,
      url: 'https://www.dereusvanhorebeke.be',
    },
    {
      label: `${t('accomodation-holiday-home')} Gastenverblijf Buikberg (< 32p)`,
      url: 'https://www.buikberg.com/',
    },
    {
      label: `${t('accomodation-holiday-home')} Vierkantshoeve Molenzicht`,
      url: 'https://www.vierkantshoevemolenzicht.be',
    },
    {
      label: `${t('accomodation-hotel')} 't Horenbecca`,
      url: 'https://www.horenbecca.com',
    },
  ];

  const locationsLessThan5km: Accomodation[] = [
    {
      label: `${t('accomodation-bnb')} Mater Amabilis`,
      url: 'https://www.materamabilisbb.be',
    },
    {
      label: `${t('accomodation-bnb')} Sint-Blasiushof (Zwalm)`,
      url: 'https://www.sintblasiushof.be',
    },
    {
      label: `${t('accomodation-bnb')} De Amberhoeve (Schorisse)`,
      url: 'https://www.amberhoeve.be',
    },
    {
      label: `${t('accomodation-holiday-home')} De Oude Notelaer (< 5p)`,
      url: 'https://www.deoudenotelaer.be',
    },
    {
      label: `${t('accomodation-holiday-home')} 't Heufke (Zwalm)`,
      url: 'https://www.theufke.be',
    },
    {
      label: `${t('accomodation-holiday-home')} Charmant`,
      url: 'https://www.vakantiehuischarmant.be',
    },
  ];

  const locationsLessThan10km: Accomodation[] = [
    {
      label: `${t('accomodation-bnb')} La Cereza`,
      url: 'https://www.lacereza.be',
    },
    {
      label: `${t('accomodation-bnb')} Kokkerelle`,
      url: 'https://www.kokerelle.be',
    },
  ];

  return (
    <Styled.AccomodationSection>
      <h3>
        <span className="wrapper">
          <span className="title">{t('accomodation-title')}</span>
          <span className="bg" />
        </span>
      </h3>
      <p>{t('accomodation-text')}</p>

      <AccomodationList list={locationsLessThan2km} label="&gt; 2km" />
      <AccomodationList list={locationsLessThan5km} label="&gt; 5km" />
      <AccomodationList list={locationsLessThan10km} label="&gt; 10km" />
    </Styled.AccomodationSection>
  );
};

export default Accomodations;
