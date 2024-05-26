import React, { lazy, Suspense } from 'react';
import { Locale } from '../../i18n-config';
import { getDictionary } from '../../get-dictionary';

const HomeModule = lazy(() => import('./components/home'));

async function HomePage({ params: { lang } }: { params: { lang: Locale } }) {
  const dictionary = await getDictionary(lang);

  return (
    <Suspense fallback={<></>}>
      <HomeModule dictionary={dictionary.home} />
    </Suspense>
  );
}

export default HomePage;
