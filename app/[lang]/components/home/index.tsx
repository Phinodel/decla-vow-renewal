import React from 'react';
import { type getDictionary } from '../../../../get-dictionary';

import './styles.scss';

const HomeModule = ({ dictionary }: { dictionary: Awaited<ReturnType<typeof getDictionary>>['home'] }) => {
  return (
    <div className="generic-container home-container">
      <h1 className="generic-title">
        <span className="wrapper">
          <span className="title">{dictionary.title}</span>
          <span className="bg" />
        </span>
      </h1>
      <p>{dictionary.text1}</p>
      <p>{dictionary.text2}</p>
      <p>{dictionary.text3}</p>
      <p>{dictionary.text4} </p>
      <p>{dictionary.text5}</p>
      <p>Delphine &amp; Pierre</p>
    </div>
  );
};

export default HomeModule;
