/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react';
import Image from 'next/image';

const imgBlurUrl = '/assets/image/blur.webp';
const brokenImg = '/assets/image/broken-img.webp';

export const ImgHTML = ({ alt = '...', ...props }) => {
  const [src, setSrc] = useState(props?.src || imgBlurUrl);

  return (
    <img
      {...props}
      src={src}
      alt={alt} // To fix lint warning
      onError={() => setSrc(imgBlurUrl)}
    />
  );
};

const NextImageLoader = ({
  src,
  height = 100,
  width = 100,
  layout = 'fill',
  alt,
  quality = 25,
  loadPriority = false,
  loading = loadPriority ? 'eager' : 'lazy',
}) => {
  // src=src.split(siteConfig.CMS_URL)[1]

  //https://cdn.statically.io/image/woocomnext.devraf.com/wp-content/uploads/2016/04/pant.png

  const [imgError, setImgError] = useState();

  const imgSrc = src ? src : imgBlurUrl;

  if (imgError) {
    return (
      <Image
        src={brokenImg}
        height={100}
        width={100}
        alt={'image error'}
        quality={100}
      />
    );
  }

  if (layout === 'responsive') {
    return (
      <Image
        src={imgSrc}
        height={height}
        width={width}
        alt={alt || 'woocomNext'}
        className="next-image"
        blurDataURL={imgBlurUrl}
        placeholder="blur"
        quality={quality}
        onError={() => setImgError(true)}
        layout="responsive"
        priority={loadPriority}
        loading={loading}
      />
    );
  }

  // if (layout === 'fill') {
  return (
    <div className={'image-container'}>
      <Image
        src={imgSrc}
        layout="fill"
        alt={alt || 'woocomNext'}
        className={'image'}
        blurDataURL={imgBlurUrl}
        placeholder="blur"
        quality={quality}
        onError={() => setImgError(true)}
        priority={loadPriority}
        loading={loading}
      />
    </div>
  );
  // }
};

export default React.memo(NextImageLoader);
