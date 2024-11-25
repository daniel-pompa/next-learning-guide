'use client';
import { useState } from 'react';
import Image from 'next/image';
import { MdOutlineImageNotSupported } from 'react-icons/md';

interface ImageWithFallbackProps {
  src: string | undefined | null;
  alt: string;
  width: number;
  height: number;
  className?: string;
}

export const ImageWithFallback = ({
  src,
  alt,
  width,
  height,
  className,
}: ImageWithFallbackProps) => {
  const [hasError, setHasError] = useState(false); // State to handle image loading error

  const handleImageError = () => {
    setHasError(true); // When an error occurs during image loading
  };

  const finalSrc = src && src !== '' ? src : null;

  return (
    <>
      {hasError || !finalSrc ? (
        <MdOutlineImageNotSupported size={width} className='text-gray-300' /> // If there is an error, show the icon
      ) : (
        <Image
          src={finalSrc}
          alt={alt}
          width={width}
          height={height}
          onError={handleImageError}
          priority={false}
          className={className}
        />
      )}
    </>
  );
};
