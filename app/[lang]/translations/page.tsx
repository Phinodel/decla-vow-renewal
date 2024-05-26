import React, { lazy, Suspense } from 'react';
import { Locale } from '../../../i18n-config';
import { getDictionary } from '../../../get-dictionary';

const TranslationsModule = lazy(() => import('./components'));

async function TranslationsPage({ params: { lang } }: { params: { lang: Locale } }) {
  const dictionary = await getDictionary(lang);

  return (
    <Suspense fallback={<></>}>
      <TranslationsModule dictionary={dictionary.translations} />
    </Suspense>
  );
}

export default TranslationsPage;
