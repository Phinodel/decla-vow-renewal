import React, { FC, useEffect, useState } from 'react';
import { useTranslation } from 'next-i18next';

import Styled from './styles';

const What: FC = () => {
  const { t } = useTranslation('home');
  const [hour, setHour] = useState(0);
  const [minute, setMinute] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const updateClock = () => {
    const d = new Date();
    const h = d.getHours();
    const m = d.getMinutes();
    const s = d.getSeconds();

    setHour(360 * (h / 12));
    setMinute(360 * (m / 60));
    setSeconds(360 * (s / 60));
  };

  useEffect(() => {
    updateClock();

    const interval = setInterval(() => {
      updateClock();
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <Styled.WhatSection>
        <div>
          <h3>
            <span className="wrapper">
              <span className="title">{t('what-title')}</span>
              <span className="bg" />
            </span>
          </h3>
          <p>{t('what-text1')}</p>
          <Styled.DressCode>
            {t('what-dresscode-title')}{' '}
            <Styled.DresscodeHighlight>{t('what-dresscode-text')}</Styled.DresscodeHighlight>
          </Styled.DressCode>
          <p>{t('what-text2')}</p>
        </div>
      </Styled.WhatSection>

      <Styled.ScheduleSection>
        <Styled.ScheduleSectionBackground>
          <Styled.Clock>
            <div style={{ transform: `rotate(${hour}deg)` }} className="pointer hour" />
            <div style={{ transform: `rotate(${minute}deg)` }} className="pointer minute" />
            <div style={{ transform: `rotate(${seconds}deg)` }} className="pointer second" />
          </Styled.Clock>

          <Styled.ScheduleContent>
            <table>
              <thead>
                <tr>
                  <th colSpan={2}>
                    <h4>{t('schedule-title')}</h4>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>16:00</td>
                  <td className="label">{t('schedule-text1')}</td>
                </tr>
                <tr>
                  <td>16:30</td>
                  <td className="label">{t('schedule-text2')}</td>
                </tr>
                <tr>
                  <td>17:00</td>
                  <td className="label">{t('schedule-text3')}</td>
                </tr>
                <tr>
                  <td>19:00</td>
                  <td className="label">{t('schedule-text4')}</td>
                </tr>
                <tr>
                  <td>23:00</td>
                  <td className="label">{t('schedule-text5')}</td>
                </tr>
              </tbody>
            </table>
          </Styled.ScheduleContent>
        </Styled.ScheduleSectionBackground>
      </Styled.ScheduleSection>
    </>
  );
};

export default What;
