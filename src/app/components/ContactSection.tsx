import { motion } from 'motion/react';
import { Clock, Linkedin, Mail, MapPin, MessageCircle, Phone } from 'lucide-react';
import { type FormEvent, useState } from 'react';
import { companyProfile } from '../companyProfile';
import { engineeredEase, viewportOnce } from '../motion';

const whatsappHref = (number: string) => `https://wa.me/${number.replace(/\D/g, '')}`;

export default function ContactSection() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    setStatus('sending');
    setStatusMessage('Sending your enquiry...');

    try {
      const response = await fetch('/contact.php', {
        method: 'POST',
        headers: {
          Accept: 'application/json'
        },
        body: formData
      });
      const result = (await response.json().catch(() => null)) as { message?: string } | null;

      if (!response.ok) {
        throw new Error(result?.message || 'Message could not be sent.');
      }

      form.reset();
      setStatus('success');
      setStatusMessage(result?.message || 'Thank you. Your enquiry has been sent to our team.');
    } catch (error) {
      setStatus('error');
      setStatusMessage(
        error instanceof Error
          ? error.message
          : 'Something went wrong. Please call or WhatsApp us directly.'
      );
    }
  };

  return (
    <section id="contact" className="bg-[#F4F6FA] py-20 md:py-32">
      <div className="mx-auto max-w-[1280px] px-5 sm:px-6">
        <div className="grid gap-10 md:gap-16 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.42, ease: engineeredEase }}
          >
            <h2 className="mb-5 font-display text-[2.65rem] font-bold leading-[1] tracking-[-0.045em] text-[#24336A] md:mb-8 md:text-4xl">Get in Touch</h2>
            <p className="mb-7 max-w-xl text-base leading-7 text-[#6B7280] md:mb-8">
              Reach out for soil testing, foundation or pavement design input, binder distribution
              calibration, or broader project support. We operate from Norton and Harare and work
              across Zimbabwe.
            </p>

            <form className="space-y-5 md:space-y-6" onSubmit={handleSubmit}>
              <input
                type="text"
                name="website"
                tabIndex={-1}
                autoComplete="off"
                className="hidden"
                aria-hidden="true"
              />
              <div className="grid gap-5 sm:grid-cols-2 md:gap-6">
                <div>
                  <label htmlFor="fullName" className="mb-2 block font-medium text-[#24336A]">
                    Full Name
                  </label>
                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    required
                    className="min-h-12 w-full rounded-lg border border-[#e5e7eb] bg-white px-5 py-4 text-base transition-all duration-300 focus:border-[#8DBF44] focus:shadow-[0_0_0_3px_rgba(141,191,68,0.2)] focus:outline-none"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="mb-2 block font-medium text-[#24336A]">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="min-h-12 w-full rounded-lg border border-[#e5e7eb] bg-white px-5 py-4 text-base transition-all duration-300 focus:border-[#8DBF44] focus:shadow-[0_0_0_3px_rgba(141,191,68,0.2)] focus:outline-none"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="phone" className="mb-2 block font-medium text-[#24336A]">
                  Phone
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  className="min-h-12 w-full rounded-lg border border-[#e5e7eb] bg-white px-5 py-4 text-base transition-all duration-300 focus:border-[#8DBF44] focus:shadow-[0_0_0_3px_rgba(141,191,68,0.2)] focus:outline-none"
                  placeholder="+263 7xx xxx xxx"
                />
              </div>

              <div>
                <label htmlFor="service" className="mb-2 block font-medium text-[#24336A]">
                  Service Required
                </label>
                <select
                  id="service"
                  name="service"
                  required
                  defaultValue=""
                  className="min-h-12 w-full rounded-lg border border-[#e5e7eb] bg-white px-5 py-4 text-base transition-all duration-300 focus:border-[#8DBF44] focus:shadow-[0_0_0_3px_rgba(141,191,68,0.2)] focus:outline-none"
                >
                  <option value="" disabled>
                    Select a service...
                  </option>
                  {companyProfile.specialities.map((service) => (
                    <option key={service}>{service}</option>
                  ))}
                  <option>Quality Control Testing</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="mb-2 block font-medium text-[#24336A]">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="w-full resize-none rounded-lg border border-[#e5e7eb] bg-white px-5 py-4 text-base transition-all duration-300 focus:border-[#8DBF44] focus:shadow-[0_0_0_3px_rgba(141,191,68,0.2)] focus:outline-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              {statusMessage && (
                <div
                  role="status"
                  aria-live="polite"
                  className={`rounded-xl border px-4 py-3 text-sm leading-6 ${
                    status === 'success'
                      ? 'border-[#8DBF44]/30 bg-[#8DBF44]/10 text-[#24336A]'
                      : status === 'error'
                        ? 'border-red-200 bg-red-50 text-red-700'
                        : 'border-[#24336A]/10 bg-white text-[#6B7280]'
                  }`}
                >
                  {statusMessage}
                </div>
              )}

              <button
                type="submit"
                disabled={status === 'sending'}
                className="tap-press min-h-12 w-full rounded-lg bg-[#8DBF44] px-8 py-4 font-semibold text-[#24336A] transition-all duration-300 hover:scale-[1.015] hover:shadow-[0_12px_34px_rgba(141,191,68,0.32)] disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:scale-100"
              >
                {status === 'sending' ? 'Sending...' : 'Send Enquiry ->'}
              </button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.42, ease: engineeredEase }}
            className="space-y-7 md:space-y-8"
          >
            <div>
              <h3 className="mb-6 font-display text-2xl font-bold text-[#24336A]">
                Contact Information
              </h3>

              <div className="space-y-6">
                <div className="flex gap-3.5 md:gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-[#8DBF44]/10">
                    <MapPin className="h-6 w-6 text-[#8DBF44]" />
                  </div>
                  <div>
                    <div className="mb-1 font-semibold text-[#24336A]">Laboratory Address</div>
                    <div className="text-[#6B7280]">{companyProfile.laboratoryAddress.join(', ')}</div>
                  </div>
                </div>

                <div className="flex gap-3.5 md:gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-[#8DBF44]/10">
                    <MapPin className="h-6 w-6 text-[#8DBF44]" />
                  </div>
                  <div>
                    <div className="mb-1 font-semibold text-[#24336A]">Registered Office</div>
                    <div className="text-[#6B7280]">{companyProfile.registeredOffice.join(', ')}</div>
                  </div>
                </div>

                <div className="flex gap-3.5 md:gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-[#8DBF44]/10">
                    <Phone className="h-6 w-6 text-[#8DBF44]" />
                  </div>
                  <div>
                    <div className="mb-1 font-semibold text-[#24336A]">Phone (Calls Only)</div>
                    <div className="text-[#6B7280]">{companyProfile.phones.join(' / ')}</div>
                  </div>
                </div>

                <div className="flex gap-3.5 md:gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-[#8DBF44]/10">
                    <MessageCircle className="h-6 w-6 text-[#8DBF44]" />
                  </div>
                  <div>
                    <div className="mb-1 font-semibold text-[#24336A]">WhatsApp</div>
                    <div className="space-y-1 text-[#6B7280]">
                      {companyProfile.whatsappNumbers.map((number) => (
                        <a
                          key={number}
                          href={whatsappHref(number)}
                          target="_blank"
                          rel="noreferrer"
                          className="tap-press block min-h-8 transition-colors hover:text-[#8DBF44]"
                        >
                          {number}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex gap-3.5 md:gap-4">
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

                <div className="flex gap-3.5 md:gap-4">
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
                  aria-label="LinkedIn"
                  className="tap-press flex h-12 w-12 items-center justify-center rounded-lg bg-[#24336A] transition-all duration-300 hover:scale-105 hover:bg-[#8DBF44]"
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
