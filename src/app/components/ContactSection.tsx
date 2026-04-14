import { motion } from 'motion/react';
import { Clock, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import { companyProfile } from '../companyProfile';

export default function ContactSection() {
  return (
    <section id="contact" className="bg-[#F4F6FA] py-24 md:py-32">
      <div className="mx-auto max-w-[1280px] px-6">
        <div className="grid gap-16 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="mb-8 font-['Syne'] text-4xl font-bold text-[#24336A]">Get in Touch</h2>
            <p className="mb-8 max-w-xl text-[#6B7280]">
              Reach out for soil testing, foundation or pavement design input, binder distribution
              calibration, or broader project support. We operate from Norton and Harare and work
              across Zimbabwe.
            </p>

            <form className="space-y-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block font-medium text-[#24336A]">Full Name</label>
                  <input
                    type="text"
                    className="w-full rounded-lg border border-[#e5e7eb] bg-white px-5 py-4 transition-all duration-300 focus:border-[#8DBF44] focus:shadow-[0_0_0_3px_rgba(141,191,68,0.2)] focus:outline-none"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="mb-2 block font-medium text-[#24336A]">Email</label>
                  <input
                    type="email"
                    className="w-full rounded-lg border border-[#e5e7eb] bg-white px-5 py-4 transition-all duration-300 focus:border-[#8DBF44] focus:shadow-[0_0_0_3px_rgba(141,191,68,0.2)] focus:outline-none"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block font-medium text-[#24336A]">Phone</label>
                <input
                  type="tel"
                  className="w-full rounded-lg border border-[#e5e7eb] bg-white px-5 py-4 transition-all duration-300 focus:border-[#8DBF44] focus:shadow-[0_0_0_3px_rgba(141,191,68,0.2)] focus:outline-none"
                  placeholder="+263 7xx xxx xxx"
                />
              </div>

              <div>
                <label className="mb-2 block font-medium text-[#24336A]">Service Required</label>
                <select className="w-full rounded-lg border border-[#e5e7eb] bg-white px-5 py-4 transition-all duration-300 focus:border-[#8DBF44] focus:shadow-[0_0_0_3px_rgba(141,191,68,0.2)] focus:outline-none">
                  <option>Select a service...</option>
                  {companyProfile.specialities.map((service) => (
                    <option key={service}>{service}</option>
                  ))}
                  <option>Quality Control Testing</option>
                </select>
              </div>

              <div>
                <label className="mb-2 block font-medium text-[#24336A]">Message</label>
                <textarea
                  rows={5}
                  className="w-full resize-none rounded-lg border border-[#e5e7eb] bg-white px-5 py-4 transition-all duration-300 focus:border-[#8DBF44] focus:shadow-[0_0_0_3px_rgba(141,191,68,0.2)] focus:outline-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-lg bg-[#8DBF44] px-8 py-4 font-semibold text-[#24336A] transition-all duration-300 hover:scale-105 hover:shadow-[0_12px_40px_rgba(141,191,68,0.45)]"
              >
                {'Send Enquiry ->'}
              </button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h3 className="mb-6 font-['Syne'] text-2xl font-bold text-[#24336A]">
                Contact Information
              </h3>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-[#8DBF44]/10">
                    <MapPin className="h-6 w-6 text-[#8DBF44]" />
                  </div>
                  <div>
                    <div className="mb-1 font-semibold text-[#24336A]">Laboratory Address</div>
                    <div className="text-[#6B7280]">{companyProfile.laboratoryAddress.join(', ')}</div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-[#8DBF44]/10">
                    <MapPin className="h-6 w-6 text-[#8DBF44]" />
                  </div>
                  <div>
                    <div className="mb-1 font-semibold text-[#24336A]">Registered Office</div>
                    <div className="text-[#6B7280]">{companyProfile.registeredOffice.join(', ')}</div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-[#8DBF44]/10">
                    <Phone className="h-6 w-6 text-[#8DBF44]" />
                  </div>
                  <div>
                    <div className="mb-1 font-semibold text-[#24336A]">Phone</div>
                    <div className="text-[#6B7280]">{companyProfile.phones.join(' / ')}</div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-[#8DBF44]/10">
                    <Mail className="h-6 w-6 text-[#8DBF44]" />
                  </div>
                  <div>
                    <div className="mb-1 font-semibold text-[#24336A]">Email</div>
                    <div className="space-y-1 text-[#6B7280]">
                      {companyProfile.emails.map((email) => (
                        <div key={email}>{email}</div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-[#8DBF44]/10">
                    <Clock className="h-6 w-6 text-[#8DBF44]" />
                  </div>
                  <div>
                    <div className="mb-1 font-semibold text-[#24336A]">Business Hours</div>
                    <div className="text-[#6B7280]">
                      Monday - Friday: 8:00 AM - 5:00 PM
                      <br />
                      Saturday: 8:00 AM - 5:00 PM
                      <br />
                      Sunday: Closed
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h4 className="mb-4 font-semibold text-[#24336A]">Connect With Us</h4>
              <div className="flex gap-3">
                <a
                  href="#contact"
                  className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#24336A] transition-all duration-300 hover:scale-110 hover:bg-[#8DBF44]"
                >
                  <Linkedin className="h-6 w-6 text-white" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
