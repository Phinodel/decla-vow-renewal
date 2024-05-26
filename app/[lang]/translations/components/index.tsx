'use client';

import React, { Fragment } from 'react';
import { type getDictionary } from '../../../../get-dictionary';

import { textKeys } from './keys';
import './styles.scss';

const TranslationsModule = ({
  dictionary,
}: {
  dictionary: Awaited<ReturnType<typeof getDictionary>>['translations'];
}) => {
  return (
    <div className="generic-container translation-container">
      <h1 className="generic-title">
        <span className="wrapper">
          <span className="title">{dictionary.title}</span>
          <span className="bg" />
        </span>
      </h1>

      {textKeys.map((part) => (
        <Fragment key={part.title}>
          <h2 className="generic-title">
            <span className="wrapper">
              <span className="title">{dictionary[part.title]}</span>
              <span className="bg" />
            </span>
          </h2>
          {part.text.map((e, index) => (
            <div key={part.title + 'text' + index}>
              <p className="subtitle">{e.key ? dictionary[e.key] : e.name}</p>
              {e.text.map((i) => (
                <p key={i}>{dictionary[i]}</p>
              ))}
            </div>
          ))}
        </Fragment>
      ))}
    </div>
  );
};

export default TranslationsModule;
