import React from 'react';
import { i18n, type Locale } from '../../i18n-config';
import type { Metadata } from 'next';

// eslint-disable-next-line import/no-unresolved
import { Analytics } from '@vercel/analytics/react';

import Header from './components/header';
import Footer from './components/footer';
import { getDictionary } from '../../get-dictionary';
import './layout.scss';

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export default async function Root({ children, params }: { children: React.ReactNode; params: { lang: Locale } }) {
  const dictionary = await getDictionary(params.lang);

  return (
    <html lang={params.lang}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Ephesis&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
      </head>

      <body>
        <Header activeLocale={params.lang} dictionary={dictionary.common} />
        <main>{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}

const url = 'https://www.delphine-pierre.love/';
const urlFavicon = `${url}favicon.ico`;

export const metadata: Metadata = {
  title: 'Vow renewal Delphine & Pierre',
  applicationName: 'Vow renewal Delphine & Pierre',
  description: 'Celebrate with us, 13/04/2024, vow renewal of Delphine & Pierre',
  authors: [{ name: 'Delphine Claerhout', url: '' }],
  robots: { index: false, follow: false },
  icons: [{ rel: 'icon', url: urlFavicon }],
  openGraph: {
    type: 'website',
    url: url,
    title: 'Vow renewal Delphine & Pierre',
    description: 'Celebrate with us, 13/04/2024, vow renewal of Delphine & Pierre',
    siteName: 'Vow renewal Delphine & Pierre',
    images: [
      {
        url: urlFavicon,
      },
    ],
  },
};
