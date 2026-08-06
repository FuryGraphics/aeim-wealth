import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { BUSINESS, OFFICES } from "@/lib/siteData";
import { useSEO } from "@/lib/seo";
import { Reveal } from "@/components/Reveal";
import Breadcrumb from "@/components/Breadcrumb";
import CaseclimbForm from "@/components/CaseclimbForm";

export default function Contact() {
  useSEO({
    title: "Free Financial Consultation Naperville | AEIM Wealth Management",
    description: "Contact AEIM Wealth Management for a free financial consultation. Call (630) 534-2346 or schedule online. Serving Naperville, Lisle, and DuPage County, IL.",
    canonical: "/contact",
    schema: {
      "@context": "https://schema.org",
      "@type": "ContactPage",
      name: "Contact AEIM Wealth Management",
      url: `https://${BUSINESS.domain}/contact`,
    },
  });

  return (
    <>
      {/* Hero */}
      <section className="relative bg-[#0B1B2B] pt-32 pb-16 lg:pt-40 lg:pb-24 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-15">
          <img
            src="/images/hero-bg.jpg"
            alt=""
            className="w-full h-full object-cover"
            loading="eager"
          />
        </div>
        <div className="container relative z-10">
          <Reveal className="max-w-3xl">
            <h1 className="font-serif text-4xl lg:text-5xl font-bold text-white">
              Schedule a Free Consultation
            </h1>
            <div className="mt-4 h-1 w-16 bg-[#C9A84C]" />
            <p className="mt-6 text-lg text-white/70 leading-relaxed">
              Take the first step toward financial confidence. Your consultation is free, confidential, and comes with no obligation.
            </p>
          </Reveal>
        </div>
      </section>

      <Breadcrumb crumbs={[{ label: "Contact" }]} />

      {/* Contact Form + Info */}
      <section className="bg-white">
        <div className="container py-16 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <Reveal>
              <h2 className="font-serif text-2xl lg:text-3xl font-bold text-[#0B1B2B] gold-underline">
                Get in Touch
              </h2>
              <p className="mt-4 text-base text-[#5A6A7A]">
                Fill out the form below and we will get back to you within 2 hours during business hours.
              </p>

              <div className="mt-8">
                <CaseclimbForm />
              </div>
            </Reveal>

            {/* Contact Info */}
            <Reveal delay={0.1}>
              <div className="space-y-6">
                {/* Phone */}
                <div className="bg-[#0B1B2B] rounded-lg p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <Phone className="w-5 h-5 text-[#C9A84C]" />
                    <h3 className="font-serif text-xl font-semibold text-white">Call Us</h3>
                  </div>
                  <a
                    href={`tel:${BUSINESS.phoneRaw}`}
                    className="text-2xl font-serif text-[#C9A84C] hover:underline"
                  >
                    {BUSINESS.phone}
                  </a>
                  <p className="mt-2 text-sm text-white/60">
                    Speak directly with {BUSINESS.owner}. Real answers, no scripts.
                  </p>
                </div>

                {/* Email */}
                <div className="bg-[#F5F5F0] rounded-lg p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <Mail className="w-5 h-5 text-[#C9A84C]" />
                    <h3 className="font-serif text-xl font-semibold text-[#0B1B2B]">Email Us</h3>
                  </div>
                  <a
                    href={`mailto:${BUSINESS.email}`}
                    className="text-base text-[#C9A84C] hover:underline break-all"
                  >
                    {BUSINESS.email}
                  </a>
                </div>

                {/* Offices */}
                <div className="bg-[#F5F5F0] rounded-lg p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <MapPin className="w-5 h-5 text-[#C9A84C]" />
                    <h3 className="font-serif text-xl font-semibold text-[#0B1B2B]">Visit Us</h3>
                  </div>
                  <div className="space-y-5">
                    {OFFICES.map((office) => (
                      <div key={office.label}>
                        <p className="text-xs uppercase tracking-[0.15em] text-[#C9A84C] font-semibold">
                          {office.label}
                        </p>
                        <p className="mt-1 text-base text-[#5A6A7A]">
                          {office.street}
                          <br />
                          {office.cityStateZip}
                        </p>
                        {office.note && (
                          <p className="mt-1 text-sm font-medium text-[#0B1B2B]">{office.note}</p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Hours */}
                <div className="bg-[#F5F5F0] rounded-lg p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <Clock className="w-5 h-5 text-[#C9A84C]" />
                    <h3 className="font-serif text-xl font-semibold text-[#0B1B2B]">Office Hours</h3>
                  </div>
                  <ul className="space-y-2">
                    {BUSINESS.hours.map((h) => (
                      <li key={h.day} className="flex justify-between text-sm">
                        <span className="font-medium text-[#0B1B2B]">{h.day}</span>
                        <span className="text-[#5A6A7A]">{h.time}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Maps */}
      <section className="bg-[#F5F5F0]">
        <div className="container py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {OFFICES.map((office) => (
              <Reveal key={office.label}>
                <h3 className="font-serif text-xl font-semibold text-[#0B1B2B] mb-1">
                  {office.label}
                </h3>
                <p className="text-sm text-[#5A6A7A] mb-4">
                  {office.street}, {office.cityStateZip}
                  {office.note && ` — ${office.note}`}
                </p>
                <div className="rounded-lg overflow-hidden shadow-lg">
                  <iframe
                    src={`https://maps.google.com/maps?q=${encodeURIComponent(office.mapQuery)}&output=embed`}
                    width="100%"
                    height="360"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={`${BUSINESS.name} ${office.label} location`}
                  />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
