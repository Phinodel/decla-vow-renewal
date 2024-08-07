'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

import { type getDictionary } from '../../../../get-dictionary';

import './styles.scss';

import imagePlaceholders from './imagePlaceholders.json';

const Header = ({
  activeLocale,
  dictionary,
}: {
  activeLocale: string;
  dictionary: Awaited<ReturnType<typeof getDictionary>>['common'];
}) => {
  const pathname = usePathname();

  const isHomePage = () => {
    if (pathname === '/') {
      return true;
    }
    if (pathname === `/${activeLocale}`) {
      return true;
    }

    return false;
  };

  const createLocaleLink = (lang: 'en' | 'nl' | 'fr') => {
    const isActive = lang === activeLocale;
    const url = `${pathname}`.replace(activeLocale, lang);

    return (
      <li className={isActive ? 'active' : 'link'}>
        <Link href={url} locale={lang}>
          {dictionary[`lang-${lang}`]}
        </Link>
      </li>
    );
  };

  return (
    <>
      <header>
        <div className="container">
          <div className="generic-container wrapper">
            <div className="link-container">
              {!isHomePage() && (
                <Link href={`/${activeLocale}/`} className="generic-link" locale={activeLocale}>
                  {dictionary['back-action']}
                </Link>
              )}
            </div>

            <ul>
              {createLocaleLink('en')}

              <li>/</li>

              {createLocaleLink('nl')}

              <li>/</li>

              {createLocaleLink('fr')}
            </ul>
          </div>
        </div>

        <div className="background">
          <Image
            src="/images/headerImage.jpg"
            alt="headerImage"
            placeholder="blur"
            blurDataURL={imagePlaceholders.headerImage}
            width={2002}
            height={500}
            sizes="(max-width: 560px) 500px, (max-width: 760px) 1001px, 2002px"
            style={{ objectFit: 'cover', objectPosition: '20% 50%' }}
          />
        </div>
      </header>

      <nav className="navigation-container">
        <ul className="main-nav">
          <li>
            <div className="link-container">
              <Link className="generic-link" href={`/${activeLocale}/translations`} locale={activeLocale}>
                {dictionary.translations}
              </Link>
            </div>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Header;
