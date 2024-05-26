import React, { lazy, Suspense } from 'react';

const PicturesModule = lazy(() => import('./components'));

const PicturesDetailPage = ({ params }: { params: { slug: string } }) => (
  <Suspense fallback={<></>}>
    <PicturesModule slug={params.slug} />
  </Suspense>
);

export default PicturesDetailPage;
