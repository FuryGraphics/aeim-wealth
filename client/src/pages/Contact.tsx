import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { BUSINESS } from "@/lib/siteData";
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

                {/* Address */}
                <div className="bg-[#F5F5F0] rounded-lg p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <MapPin className="w-5 h-5 text-[#C9A84C]" />
                    <h3 className="font-serif text-xl font-semibold text-[#0B1B2B]">Visit Us</h3>
                  </div>
                  <p className="text-base text-[#5A6A7A]">{BUSINESS.address}</p>
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

      {/* Map */}
      <section className="bg-[#F5F5F0]">
        <div className="container py-16">
          <Reveal className="rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2979.1!2d-88.0708!3d41.7994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNjUwIFdhcnJlbnZpbGxlIFJkLCBTdWl0ZSAxMDAsIExpc2xlLCBJTCA2MDUzMg!5e0!3m2!1sen!2sus!4v1700000000000"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="AEIM Wealth Management office location"
            />
          </Reveal>
        </div>
      </section>
    </>
  );
}
