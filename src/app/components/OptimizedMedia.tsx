import mediaManifest from '../../../public/optimized/media-manifest.json';
import { forwardRef } from 'react';

type ImageManifestEntry = {
  variants: Array<{
    width: number;
    webp: string;
    fallback: string;
  }>;
};

type VideoManifestEntry = {
  mp4: string;
  webm?: string;
};

const assetBase = import.meta.env.BASE_URL;
const manifest = mediaManifest as {
  images: Record<string, ImageManifestEntry | undefined>;
  videos: Record<string, VideoManifestEntry | undefined>;
};

function withBase(url: string) {
  if (/^https?:\/\//.test(url)) return url;
  return `${assetBase}${url.replace(/^\//, '')}`;
}

function getBestImageVariant(src: string, targetWidth = 480) {
  const fileName = src.split('/').pop() ?? src;
  const entry = manifest.images[fileName];

  if (!entry?.variants?.length) return withBase(src);

  const variants = [...entry.variants].sort((a, b) => a.width - b.width);
  const variant = variants.find((item) => item.width >= targetWidth) ?? variants.at(-1)!;

  return withBase(variant.webp ?? variant.fallback);
}

export function prewarmOptimizedImages(srcs: string[], targetWidth = 480) {
  if (typeof window === 'undefined') return;

  const uniqueSrcs = Array.from(new Set(srcs));

  uniqueSrcs.forEach((src) => {
    const img = new Image();
    img.decoding = 'async';
    img.src = getBestImageVariant(src, targetWidth);

    if ('decode' in img) {
      img.decode().catch(() => {
        // Prewarming is opportunistic; failed decodes should never affect UI.
      });
    }
  });
}

export type OptimizedImageProps = Omit<
  React.ImgHTMLAttributes<HTMLImageElement>,
  'src' | 'srcSet' | 'sizes'
> & {
  src: string;
  sizes?: string;
  eager?: boolean;
};

export function OptimizedImage({
  src,
  alt,
  sizes = '100vw',
  eager = false,
  loading,
  decoding = 'async',
  ...props
}: OptimizedImageProps) {
  const fileName = src.split('/').pop() ?? src;
  const entry = manifest.images[fileName];

  if (!entry?.variants?.length) {
    return (
      <img
        src={withBase(src)}
        alt={alt}
        sizes={sizes}
        loading={loading ?? (eager ? 'eager' : 'lazy')}
        decoding={decoding}
        {...props}
      />
    );
  }

  const variants = [...entry.variants].sort((a, b) => a.width - b.width);
  const largest = variants.at(-1)!;
  const webpSrcSet = variants.map((variant) => `${withBase(variant.webp)} ${variant.width}w`).join(', ');
  const fallbackSrcSet = variants
    .map((variant) => `${withBase(variant.fallback)} ${variant.width}w`)
    .join(', ');

  return (
    <picture>
      <source type="image/webp" srcSet={webpSrcSet} sizes={sizes} />
      <img
        src={withBase(largest.fallback)}
        srcSet={fallbackSrcSet}
        sizes={sizes}
        alt={alt}
        loading={loading ?? (eager ? 'eager' : 'lazy')}
        decoding={decoding}
        {...(eager ? { fetchpriority: 'high' } : {})}
        {...props}
      />
    </picture>
  );
}

export type OptimizedVideoProps = Omit<React.VideoHTMLAttributes<HTMLVideoElement>, 'src'> & {
  src: string;
};

export const OptimizedVideo = forwardRef<HTMLVideoElement, OptimizedVideoProps>(function OptimizedVideo(
  { src, children, preload = 'metadata', ...props },
  ref
) {
  const fileName = src.split('/').pop() ?? src;
  const entry = manifest.videos[fileName];

  return (
    <video ref={ref} preload={preload} {...props}>
      {entry?.webm && <source src={withBase(entry.webm)} type="video/webm" />}
      <source src={withBase(entry?.mp4 ?? src)} type="video/mp4" />
      {children}
    </video>
  );
});
