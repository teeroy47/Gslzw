import { Mail, MapPin, Phone } from 'lucide-react';
import { companyProfile } from '../companyProfile';
import GslLogo from './GslLogo';

export default function Footer() {
  return (
    <footer className="bg-[#111827] text-white">
      <div className="mx-auto max-w-[1280px] px-6 py-16">
        <div className="mb-12 grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <GslLogo className="h-14 w-auto" compact />
            </div>
            <p className="mb-6 text-sm italic text-white/50">"{companyProfile.motto}"</p>
            <div className="space-y-2 text-sm text-white/65">
              <div>{companyProfile.vision}</div>
            </div>
          </div>

          <div>
            <h4 className="mb-4 font-['Syne'] text-lg font-bold">Core Services</h4>
            <ul className="space-y-3">
              {companyProfile.specialities.map((service) => (
                <li key={service}>
                  <a href="#services" className="text-sm text-white/60 transition-colors duration-300 hover:text-[#8DBF44]">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-['Syne'] text-lg font-bold">Company</h4>
            <ul className="space-y-3 text-sm text-white/60">
              <li>Founded in {companyProfile.foundedYear}</li>
              <li>Based in {companyProfile.bases.join(' and ')}</li>
              <li>Managing Director: {companyProfile.leadership.managingDirector}</li>
              <li>Administrator: {companyProfile.leadership.administrator}</li>
              <li>Postal Address: {companyProfile.postalAddress.join(', ')}</li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-['Syne'] text-lg font-bold">Contact</h4>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <MapPin className="h-5 w-5 flex-shrink-0 text-[#8DBF44]" />
                <span className="text-sm text-white/60">{companyProfile.laboratoryAddress.join(', ')}</span>
              </li>
              <li className="flex gap-3">
                <Phone className="h-5 w-5 flex-shrink-0 text-[#8DBF44]" />
                <span className="text-sm text-white/60">{companyProfile.phones.join(' / ')}</span>
              </li>
              <li className="flex gap-3">
                <Mail className="h-5 w-5 flex-shrink-0 text-[#8DBF44]" />
                <span className="text-sm text-white/60">{companyProfile.emails[0]}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/8 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-white/40">
              Copyright {new Date().getFullYear()} {companyProfile.shortName}. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href={companyProfile.website.startsWith('http') ? companyProfile.website : `https://${companyProfile.website}`} className="text-sm text-white/40 transition-colors duration-300 hover:text-[#8DBF44]">
                {companyProfile.website}
              </a>
              <a href="#contact" className="text-sm text-white/40 transition-colors duration-300 hover:text-[#8DBF44]">
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
