import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock, Linkedin } from 'lucide-react';

export default function ContactSection() {
  return (
    <section id="contact" className="bg-[#F4F6FA] py-24 md:py-32">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-['Syne'] font-bold text-4xl text-[#24336A] mb-8">
              Get in Touch
            </h2>

            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block font-['DM_Sans'] font-medium text-[#24336A] mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-5 py-4 bg-white border border-[#e5e7eb] rounded-lg font-['DM_Sans'] transition-all duration-300 focus:outline-none focus:border-[#8DBF44] focus:shadow-[0_0_0_3px_rgba(141,191,68,0.2)]"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block font-['DM_Sans'] font-medium text-[#24336A] mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-5 py-4 bg-white border border-[#e5e7eb] rounded-lg font-['DM_Sans'] transition-all duration-300 focus:outline-none focus:border-[#8DBF44] focus:shadow-[0_0_0_3px_rgba(141,191,68,0.2)]"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div>
                <label className="block font-['DM_Sans'] font-medium text-[#24336A] mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  className="w-full px-5 py-4 bg-white border border-[#e5e7eb] rounded-lg font-['DM_Sans'] transition-all duration-300 focus:outline-none focus:border-[#8DBF44] focus:shadow-[0_0_0_3px_rgba(141,191,68,0.2)]"
                  placeholder="+27 12 345 6789"
                />
              </div>

              <div>
                <label className="block font-['DM_Sans'] font-medium text-[#24336A] mb-2">
                  Service Required
                </label>
                <select className="w-full px-5 py-4 bg-white border border-[#e5e7eb] rounded-lg font-['DM_Sans'] transition-all duration-300 focus:outline-none focus:border-[#8DBF44] focus:shadow-[0_0_0_3px_rgba(141,191,68,0.2)]">
                  <option>Select a service...</option>
                  <option>Geotechnical Investigations</option>
                  <option>Material Testing & Analysis</option>
                  <option>Geological Surveys</option>
                  <option>Environmental Impact Studies</option>
                  <option>Quality Control & Assurance</option>
                  <option>Construction Monitoring</option>
                </select>
              </div>

              <div>
                <label className="block font-['DM_Sans'] font-medium text-[#24336A] mb-2">
                  Message
                </label>
                <textarea
                  rows={5}
                  className="w-full px-5 py-4 bg-white border border-[#e5e7eb] rounded-lg font-['DM_Sans'] transition-all duration-300 focus:outline-none focus:border-[#8DBF44] focus:shadow-[0_0_0_3px_rgba(141,191,68,0.2)] resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 bg-[#8DBF44] text-[#24336A] font-['DM_Sans'] font-semibold rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_12px_40px_rgba(141,191,68,0.45)]"
              >
                Send Enquiry →
              </button>
            </form>
          </motion.div>

          {/* Right - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h3 className="font-['Syne'] font-bold text-2xl text-[#24336A] mb-6">
                Contact Information
              </h3>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-[#8DBF44]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-[#8DBF44]" />
                  </div>
                  <div>
                    <div className="font-['DM_Sans'] font-semibold text-[#24336A] mb-1">
                      Address
                    </div>
                    <div className="font-['DM_Sans'] text-[#6B7280]">
                      123 Geological Drive<br />
                      Johannesburg, 2000<br />
                      South Africa
                    </div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-[#8DBF44]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-[#8DBF44]" />
                  </div>
                  <div>
                    <div className="font-['DM_Sans'] font-semibold text-[#24336A] mb-1">
                      Phone
                    </div>
                    <div className="font-['DM_Sans'] text-[#6B7280]">
                      +27 12 345 6789
                    </div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-[#8DBF44]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-[#8DBF44]" />
                  </div>
                  <div>
                    <div className="font-['DM_Sans'] font-semibold text-[#24336A] mb-1">
                      Email
                    </div>
                    <div className="font-['DM_Sans'] text-[#6B7280]">
                      info@geosciencelab.com
                    </div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-[#8DBF44]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-[#8DBF44]" />
                  </div>
                  <div>
                    <div className="font-['DM_Sans'] font-semibold text-[#24336A] mb-1">
                      Business Hours
                    </div>
                    <div className="font-['DM_Sans'] text-[#6B7280]">
                      Monday - Friday: 8:00 AM - 5:00 PM<br />
                      Saturday: 9:00 AM - 1:00 PM<br />
                      Sunday: Closed
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="font-['DM_Sans'] font-semibold text-[#24336A] mb-4">
                Connect With Us
              </h4>
              <div className="flex gap-3">
                <a
                  href="#"
                  className="w-12 h-12 bg-[#24336A] rounded-lg flex items-center justify-center transition-all duration-300 hover:bg-[#8DBF44] hover:scale-110"
                >
                  <Linkedin className="w-6 h-6 text-white" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
