import { Diamond, MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#111827] text-white">
      <div className="max-w-[1280px] mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Col 1 - Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Diamond className="w-6 h-6 text-[#8DBF44] fill-[#8DBF44]" />
              <span className="font-['Syne'] font-extrabold text-xl">Geosciencelab</span>
            </div>
            <p className="font-['DM_Sans'] italic text-white/50 text-sm mb-6">
              "We maintain the standard of good, quality workmanship"
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs text-white/70">
                <div className="px-3 py-1 bg-[#8DBF44]/20 text-[#8DBF44] rounded font-['DM_Sans'] font-semibold">
                  ISO 17025
                </div>
              </div>
              <div className="flex items-center gap-2 text-xs text-white/70">
                <div className="px-3 py-1 bg-[#8DBF44]/20 text-[#8DBF44] rounded font-['DM_Sans'] font-semibold">
                  SANAS Accredited
                </div>
              </div>
            </div>
          </div>

          {/* Col 2 - Services */}
          <div>
            <h4 className="font-['Syne'] font-bold text-lg mb-4">Services</h4>
            <ul className="space-y-3">
              {[
                'Geotechnical Investigations',
                'Material Testing',
                'Geological Surveys',
                'Environmental Studies',
                'Quality Assurance',
                'Construction Monitoring'
              ].map((service, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="font-['DM_Sans'] text-sm text-white/60 hover:text-[#8DBF44] transition-colors duration-300"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 - Company */}
          <div>
            <h4 className="font-['Syne'] font-bold text-lg mb-4">Company</h4>
            <ul className="space-y-3">
              {['About Us', 'Our Team', 'Careers', 'News & Updates', 'Case Studies', 'Accreditations'].map(
                (item, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="font-['DM_Sans'] text-sm text-white/60 hover:text-[#8DBF44] transition-colors duration-300"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Col 4 - Contact */}
          <div>
            <h4 className="font-['Syne'] font-bold text-lg mb-4">Contact</h4>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <MapPin className="w-5 h-5 text-[#8DBF44] flex-shrink-0" />
                <span className="font-['DM_Sans'] text-sm text-white/60">
                  123 Geological Drive<br />
                  Johannesburg, 2000<br />
                  South Africa
                </span>
              </li>
              <li className="flex gap-3">
                <Phone className="w-5 h-5 text-[#8DBF44] flex-shrink-0" />
                <span className="font-['DM_Sans'] text-sm text-white/60">
                  +27 12 345 6789
                </span>
              </li>
              <li className="flex gap-3">
                <Mail className="w-5 h-5 text-[#8DBF44] flex-shrink-0" />
                <span className="font-['DM_Sans'] text-sm text-white/60">
                  info@geosciencelab.com
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="font-['DM_Sans'] text-sm text-white/40">
              © {new Date().getFullYear()} Geosciencelab. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a
                href="#"
                className="font-['DM_Sans'] text-sm text-white/40 hover:text-[#8DBF44] transition-colors duration-300"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="font-['DM_Sans'] text-sm text-white/40 hover:text-[#8DBF44] transition-colors duration-300"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
