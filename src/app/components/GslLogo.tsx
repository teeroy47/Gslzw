import type { ImgHTMLAttributes } from 'react';
import { OptimizedImage } from './OptimizedMedia';

type GslLogoProps = Omit<ImgHTMLAttributes<HTMLImageElement>, 'src' | 'alt'> & {
  compact?: boolean;
};

export default function GslLogo({ className = '', compact: _compact, ...props }: GslLogoProps) {
  return (
    <OptimizedImage
      src="gsl-logo.png"
      alt="Geosciencelab logo"
      className={className}
      eager
      sizes="160px"
      {...props}
    />
  );
}
