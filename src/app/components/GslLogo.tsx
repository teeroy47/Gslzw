type GslLogoProps = {
  className?: string;
  compact?: boolean;
};

export default function GslLogo({ className = '' }: GslLogoProps) {
  return <img src="/gsl-logo.png" alt="Geosciencelab logo" className={className} />;
}
