type GslLogoProps = {
  className?: string;
  compact?: boolean;
};

export default function GslLogo({ className = '' }: GslLogoProps) {
  return <img src={`${import.meta.env.BASE_URL}gsl-logo.png`} alt="Geosciencelab logo" className={className} />;
}
