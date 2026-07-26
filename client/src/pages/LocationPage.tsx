import { Link } from "wouter";
import { Phone, MapPin, ArrowRight, CheckCircle2 } from "lucide-react";
import { BUSINESS, SERVICES, LOCATIONS } from "@/lib/siteData";
import { useSEO } from "@/lib/seo";
import { Reveal, RevealStagger, RevealItem } from "@/components/Reveal";
import Breadcrumb from "@/components/Breadcrumb";
import CTASection from "@/components/CTASection";
import FindUsSection from "@/components/FindUsSection";

export default function LocationPage({ slug }: { slug: string }) {
  const location = LOCATIONS.find((l) => l.slug === slug);

  if (!location) {
    return (
      <div className="pt-32 pb-16 text-center">
        <div className="container">
          <h1 className="font-serif text-3xl font-bold text-[#0B1B2B]">Location Not Found</h1>
          <Link href="/" className="mt-4 inline-block text-[#C9A84C] hover:underline">
            ← Back Home
          </Link>
        </div>
      </div>
    );
  }

  useSEO({
    title: `Financial Advisor ${location.name} IL | AEIM Wealth Management`,
    description: `Independent fiduciary financial advisor in ${location.name}, IL. Serving ${location.nearby.join(", ")} with wealth management, retirement planning, estate planning, and tax reduction.`,
    canonical: `/${location.slug}`,
    schema: {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: BUSINESS.name,
      telephone: BUSINESS.phone,
      address: {
        "@type": "PostalAddress",
        streetAddress: "650 Warrenville Rd, Suite 100",
        addressLocality: "Lisle",
        addressRegion: "IL",
        postalCode: "60532",
      },
      areaServed: `${location.name}, ${location.state}`,
      url: `https://${BUSINESS.domain}/${location.slug}`,
    },
  });

  return (
    <>
      {/* Hero */}
      <section className="relative bg-[#0B1B2B] pt-32 pb-16 lg:pt-40 lg:pb-24 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-15">
          <img
            src="/manus-storage/hero-bg_6224e36e.jpg"
            alt=""
            className="w-full h-full object-cover"
            loading="eager"
          />
        </div>
        <div className="container relative z-10">
          <Reveal className="max-w-3xl">
            <h1 className="font-serif text-4xl lg:text-5xl font-bold text-white">
              Financial Advisor in {location.name}, {location.state}
            </h1>
            <div className="mt-4 h-1 w-16 bg-[#C9A84C]" />
            <p className="mt-6 text-lg text-white/70 leading-relaxed">
              Independent, fiduciary wealth management serving {location.name} and the surrounding communities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Link
                href="/contact"
                className="px-8 py-3.5 bg-[#C9A84C] text-[#0B1B2B] rounded-md font-semibold hover:bg-[#b8973f] transition-colors text-center"
              >
                Schedule a Free Consultation
              </Link>
              <a
                href={`tel:${BUSINESS.phoneRaw}`}
                className="flex items-center justify-center gap-2 px-8 py-3.5 border-2 border-[#C9A84C] text-[#C9A84C] rounded-md font-semibold hover:bg-[#C9A84C] hover:text-[#0B1B2B] transition-colors"
              >
                <Phone className="w-4 h-4" /> Call {BUSINESS.phone}
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <Breadcrumb crumbs={[{ label: "Service Areas", href: "/#where-we-work" }, { label: `${location.name}, ${location.state}` }]} />

      {/* Intro */}
      <section className="bg-white">
        <div className="container py-16 lg:py-20">
          <Reveal className="max-w-3xl">
            <h2 className="font-serif text-2xl lg:text-3xl font-bold text-[#0B1B2B] gold-underline">
              Wealth Management in {location.name}
            </h2>
            <p className="mt-6 text-base text-[#5A6A7A] leading-relaxed">
              {location.intro}
            </p>
            <p className="mt-4 text-base text-[#5A6A7A] leading-relaxed">
              {location.localContext}
            </p>
          </Reveal>

          {/* Nearby cities */}
          <Reveal className="mt-8">
            <p className="text-sm font-semibold text-[#0B1B2B] mb-3">Communities we serve near {location.name}:</p>
            <div className="flex flex-wrap gap-2">
              {location.nearby.map((city) => (
                <span key={city} className="text-sm px-3 py-1.5 bg-[#F5F5F0] text-[#0B1B2B] rounded border border-gray-200">
                  {city}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Services Offered Locally */}
      <section className="bg-[#F5F5F0]">
        <div className="container py-16 lg:py-20">
          <Reveal className="text-center mb-12">
            <p className="text-xs uppercase tracking-[0.2em] text-[#C9A84C] mb-3">Services in {location.name}</p>
            <h2 className="font-serif text-3xl font-bold text-[#0B1B2B] gold-underline-center inline-block">
              What We Offer Locally
            </h2>
          </Reveal>

          <RevealStagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((service) => (
              <RevealItem key={service.slug}>
                <Link
                  href={`/services/${service.slug}`}
                  className="group block bg-white rounded-lg p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-shadow h-full"
                >
                  <h3 className="font-serif text-lg font-semibold text-[#0B1B2B] group-hover:text-[#C9A84C] transition-colors">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm text-[#5A6A7A] line-clamp-2">{service.short}</p>
                  <div className="mt-3 flex items-center gap-1 text-xs font-semibold text-[#C9A84C]">
                    Learn More <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </RevealItem>
            ))}
          </RevealStagger>
        </div>
      </section>

      {/* Other Locations */}
      <section className="bg-white">
        <div className="container py-16">
          <Reveal className="mb-8">
            <h2 className="font-serif text-2xl font-bold text-[#0B1B2B] gold-underline">
              Other Service Areas
            </h2>
          </Reveal>
          <RevealStagger className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {LOCATIONS.filter((l) => l.slug !== slug).map((loc) => (
              <RevealItem key={loc.slug}>
                <Link
                  href={`/${loc.slug}`}
                  className="flex items-center gap-2 bg-[#F5F5F0] rounded-lg p-4 hover:bg-[#0B1B2B] transition-colors group"
                >
                  <MapPin className="w-4 h-4 text-[#C9A84C]" />
                  <span className="text-sm font-medium text-[#0B1B2B] group-hover:text-white">
                    {loc.name}, {loc.state}
                  </span>
                </Link>
              </RevealItem>
            ))}
          </RevealStagger>
        </div>
      </section>

      <FindUsSection />
      <CTASection />
    </>
  );
}
