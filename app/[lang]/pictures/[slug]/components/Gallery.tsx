'use client';

import React, { FC, useState, useEffect } from 'react';
import Image from 'next/image';
import { track } from '@vercel/analytics';

import { ImageObject } from './types';
import './styles.scss';

const Gallery: FC<{ images: ImageObject[]; id: string }> = ({ images, id }) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [zoomedImageIndex, setZoomedImageIndex] = useState<number>(-1);

  const handleOnZoom = (index: number) => () => {
    setLoading(true);
    setZoomedImageIndex(index);

    document?.querySelector('body')?.classList.add('no-scroll');

    track('onZoom', { index: index });
  };

  const handleOnClose = () => {
    setZoomedImageIndex(-1);
    setLoading(false);
    document?.querySelector('body')?.classList.remove('no-scroll');

    track('onZoomClose', { activeIndex: zoomedImageIndex });
  };

  const onDownload = (url: string, filename: string) => () => {
    const element = document.createElement('a');
    element.setAttribute('href', url);
    element.setAttribute('download', filename);
    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);

    track('onDownload', { zoomedImageIndex, url, filename });
  };

  const showPrevious = () => {
    if (zoomedImageIndex > 0) {
      handleOnZoom(zoomedImageIndex - 1)();
      track('showPrevious');
    }
  };

  const showNext = () => {
    if (zoomedImageIndex < images.length - 1) {
      handleOnZoom(zoomedImageIndex + 1)();
      track('showNext');
    } else {
      handleOnClose();
      track('showNext close');
    }
  };

  const handleKeydown = (event: KeyboardEvent) => {
    switch (event.key) {
      case 'Escape':
        handleOnClose();
        break;
      case 'Enter':
        showNext();
        break;
      case 'ArrowRight':
        showNext();
        break;
      case 'ArrowLeft':
        showPrevious();
        break;

      default:
        break;
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeydown);

    return () => {
      document.removeEventListener('keydown', handleKeydown);
    };
  }, [zoomedImageIndex]);

  useEffect(() => {
    return () => {
      document?.querySelector('body')?.classList.remove('no-scroll');
    };
  }, []);

  return (
    <>
      {loading && (
        <div className="loader">
          <div className="overlay__inner">
            <div className="overlay__content">
              <span className="spinner"></span>
            </div>
          </div>
        </div>
      )}

      {zoomedImageIndex >= 0 && (
        <>
          <div className="zoomed-image-overlay" />
          <div className="zoomed-image-container">
            <Image
              priority={true}
              loading="eager"
              quality={75}
              fill
              style={{ objectFit: 'contain' }}
              sizes="84vw"
              alt={`${id}-${zoomedImageIndex}`}
              src={images[zoomedImageIndex].url}
              onLoad={() => setLoading(false)}
            />
            <div className="zoomed-image-close-button">
              <div onClick={handleOnClose} className="button dark">
                <Image src="/images/close.svg" alt="close" width={25} height={25} />
              </div>
            </div>

            {!loading && (
              <div className="zoomed-image-previous-button">
                <div onClick={showPrevious} className={zoomedImageIndex > 0 ? 'button dark' : 'button dark disabled'}>
                  <Image src="/images/back.svg" alt="previous" width={25} height={25} />
                </div>
              </div>
            )}

            {!loading && (
              <div className="zoomed-image-next-button">
                <div
                  onClick={showNext}
                  className={zoomedImageIndex < images.length - 1 ? 'button dark' : 'button dark disabled'}>
                  <Image src="/images/next.svg" alt="next" width={25} height={25} />
                </div>
              </div>
            )}

            <div className="zoomed-image-buttons">
              {!loading && (
                <div
                  className="button dark"
                  onClick={onDownload(images[zoomedImageIndex].downloadUrl, `${id}-${zoomedImageIndex}`)}>
                  <Image
                    src="/images/downloadWhite.svg"
                    alt={`download image ${id}-${zoomedImageIndex}`}
                    width={25}
                    height={25}
                  />
                </div>
              )}
            </div>
          </div>
        </>
      )}

      <div className="images-container">
        {images.map((img: ImageObject, index: number) => (
          <div className="image-wrapper" key={img.pathname + index}>
            <Image
              priority={index < 8}
              loading={index < 8 ? 'eager' : 'lazy'}
              quality={50}
              width={640 / 2.1}
              height={427 / 2.1}
              style={{ objectFit: 'contain' }}
              alt={`${id}-${index}`}
              src={img.url}
              onClick={handleOnZoom(index)}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default Gallery;
