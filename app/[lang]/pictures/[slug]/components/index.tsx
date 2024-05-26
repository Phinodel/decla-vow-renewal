'use client';

import React, { FC, useState, useEffect } from 'react';

import Gallery from './Gallery';
import { ImageObject } from './types';
import './styles.scss';

const PictureGalleryModule: FC<{ slug?: string }> = ({ slug }) => {
  const [selectedId, setSelectedId] = useState(`${slug || 'arrival'}`);
  const [imagesFileNames, setImagesFileNames] = useState<ImageObject[]>([]);

  const getFileNames = async (folderId: string) => {
    const result = await fetch(`/api/pictures?id=${folderId}`).then((res) => res.json());

    if (result?.images) {
      setSelectedId(folderId);
      setImagesFileNames(result.images);
    }
  };

  useEffect(() => {
    if (slug) {
      getFileNames(`${slug}`);
    }
  }, [slug]);

  return (
    <div className="generic-container picture-gallery-container">
      <Gallery images={imagesFileNames} id={selectedId} />
    </div>
  );
};

export default PictureGalleryModule;
