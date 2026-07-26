import { Link } from "wouter";
import { Phone, Star, ArrowRight, CheckCircle2, MapPin } from "lucide-react";
import { BUSINESS, SERVICES, LOCATIONS, ALL_CITIES, HOMEPAGE_FAQS } from "@/lib/siteData";
import { useSEO } from "@/lib/seo";
import { Reveal, RevealStagger, RevealItem } from "@/components/Reveal";
import CTASection from "@/components/CTASection";
import ReviewsSection from "@/components/ReviewsSection";
import FAQAccordion from "@/components/FAQAccordion";
import FindUsSection from "@/components/FindUsSection";

export default function Home() {
  useSEO({
    title: "Financial Advisor Naperville IL | AEIM Wealth Management",
    description: "Independent fiduciary wealth management in Naperville, IL. Serving DuPage County for 17+ years with retirement planning, estate planning, tax reduction, and investment strategies.",
    canonical: "/",
    schema: {
      "@context": "https://schema.org",
      "@type": "FinancialService",
      name: BUSINESS.name,
      telephone: BUSINESS.phone,
      email: BUSINESS.email,
      address: {
        "@type": "PostalAddress",
        streetAddress: "650 Warrenville Rd, Suite 100",
        addressLocality: "Lisle",
        addressRegion: "IL",
        postalCode: "60532",
      },
      areaServed: ALL_CITIES.join(", "),
      priceRange: "$$",
      url: `https://${BUSINESS.domain}`,
    },
  });

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/manus-storage/hero-bg_6224e36e.jpg"
            alt="Modern office building at dusk representing premium wealth management"
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B1B2B]/95 via-[#0B1B2B]/80 to-[#0B1B2B]/40" />
        </div>

        <div className="container relative z-10 pt-20">
          <Reveal className="max-w-2xl">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Fiduciary Wealth Management in Naperville, IL
            </h1>
            <p className="mt-6 text-lg text-white/80 leading-relaxed max-w-xl">
              Independent, unbiased financial advice for families and individuals across DuPage County. Your best interest, always.
            </p>

            {/* Star rating + Google reviews */}
            <div className="flex items-center gap-4 mt-6">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={5 - i} className="w-5 h-5 fill-[#C9A84C] text-[#C9A84C]" />
                ))}
              </div>
              <span className="text-sm text-white/70">5.0 Client Reviews</span>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-x-6 gap-y-2 mt-6">
              {["Independent", "Fiduciary", "Transparent", `${BUSINESS.experience} Years`].map((badge) => (
                <div key={badge} className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#C9A84C]" />
                  <span className="text-sm text-white/80 font-medium">{badge}</span>
                </div>
              ))}
            </div>

            {/* Dual CTA */}
            <div className="flex flex-col sm:flex-row items-start gap-4 mt-8">
              <Link
                href="/contact"
                className="px-8 py-3.5 bg-[#C9A84C] text-[#0B1B2B] rounded-md font-semibold hover:bg-[#b8973f] transition-colors"
              >
                Schedule a Free Consultation
              </Link>
              <a
                href={`tel:${BUSINESS.phoneRaw}`}
                className="flex items-center gap-2 px-8 py-3.5 border-2 border-[#C9A84C] text-[#C9A84C] rounded-md font-semibold hover:bg-[#C9A84C] hover:text-[#0B1B2B] transition-colors"
              >
                <Phone className="w-4 h-4" /> Call {BUSINESS.phone}
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* What We Do - Services Grid */}
      <section id="services" className="bg-white">
        <div className="container py-16 lg:py-24">
          <Reveal className="text-center mb-12">
            <p className="text-xs uppercase tracking-[0.2em] text-[#C9A84C] mb-3">What We Do</p>
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-[#0B1B2B] gold-underline-center inline-block">
              Wealth Management Services
            </h2>
            <p className="mt-6 max-w-2xl mx-auto text-base text-[#5A6A7A]">
              From retirement planning to estate tax elimination, we help you build, protect, and transfer wealth with confidence.
            </p>
          </Reveal>

          <RevealStagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.slice(0, 6).map((service) => (
              <RevealItem key={service.slug}>
                <Link
                  href={`/services/${service.slug}`}
                  className="group block bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-shadow h-full"
                >
                  <div className="aspect-[3/2] overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-serif text-xl font-semibold text-[#0B1B2B] group-hover:text-[#C9A84C] transition-colors">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-sm text-[#5A6A7A] leading-relaxed">
                      {service.short}
                    </p>
                    <div className="mt-4 pt-4 border-t border-gray-100">
                      <ul className="space-y-1.5">
                        {service.subServices?.map((sub) => (
                          <li key={sub.slug} className="text-xs text-[#5A6A7A] flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#C9A84C]" />
                            {sub.title}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="mt-4 flex items-center gap-2 text-sm font-semibold text-[#C9A84C]">
                      Explore {service.title}
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </RevealItem>
            ))}
          </RevealStagger>
        </div>
      </section>

      {/* Mid-page CTA Band */}
      <section className="bg-[#C9A84C]">
        <div className="container py-12 lg:py-16">
          <Reveal className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="text-center lg:text-left">
              <h2 className="font-serif text-2xl lg:text-3xl font-bold text-[#0B1B2B]">
                Not sure where to start?
              </h2>
              <p className="mt-2 text-[#0B1B2B]/80 text-base">
                We will review your finances at no cost. No pressure, no obligation.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 shrink-0">
              <Link
                href="/contact"
                className="px-8 py-3.5 bg-[#0B1B2B] text-white rounded-md font-semibold hover:bg-[#112438] transition-colors"
              >
                Schedule a Free Review
              </Link>
              <a
                href={`tel:${BUSINESS.phoneRaw}`}
                className="flex items-center justify-center gap-2 px-8 py-3.5 border-2 border-[#0B1B2B] text-[#0B1B2B] rounded-md font-semibold hover:bg-[#0B1B2B] hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4" /> Call {BUSINESS.phone}
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Stats Overlay */}
      <section className="relative bg-[#0B1B2B] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/manus-storage/stats-office_ddfff0c4.jpg"
            alt="AEIM Wealth Management office interior"
            className="w-full h-full object-cover opacity-30"
            loading="lazy"
          />
        </div>
        <div className="container relative z-10 py-20 lg:py-28">
          <Reveal className="text-center">
            <div className="font-serif text-6xl lg:text-8xl font-bold text-[#C9A84C]">
              {BUSINESS.experience}
            </div>
            <div className="mt-4 font-serif text-2xl lg:text-3xl text-white">
              Years Serving DuPage County
            </div>
            <p className="mt-4 max-w-xl mx-auto text-white/60 text-base">
              Two decades of helping families in Naperville, Lisle, Wheaton, and across the western suburbs plan for retirement, protect their legacy, and reduce taxes.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Our Story - Two Column About Teaser */}
      <section className="bg-white">
        <div className="container py-16 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <Reveal>
              <img
                src="/manus-storage/about-advisor_3b88c09d.jpg"
                alt="Bryan M. Uselding, financial advisor at AEIM Wealth Management"
                className="rounded-lg shadow-lg w-full"
                loading="lazy"
              />
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-xs uppercase tracking-[0.2em] text-[#C9A84C] mb-3">Our Story</p>
              <h2 className="font-serif text-3xl lg:text-4xl font-bold text-[#0B1B2B] gold-underline">
                17 Years of Wealth Management, Done Right
              </h2>
              <div className="mt-6 space-y-4 text-base text-[#5A6A7A] leading-relaxed">
                <p>
                  AEIM Wealth Management has been serving families and individuals across DuPage County for over 17 years. We started with one goal: provide unbiased, fiduciary advice that truly serves the client's best interest.
                </p>
                <p>
                  As an independent firm, we are not tied to any company's products. We have no quotas, no sales pressure, and no hidden fees. Just transparent, honest guidance built on a fiduciary standard that puts you first.
                </p>
                <p>
                  From our office in Lisle, we serve clients throughout Naperville, Wheaton, Aurora, and the western suburbs of Chicago, building multi-generational relationships that last decades.
                </p>
              </div>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 mt-6 text-[#C9A84C] font-semibold hover:underline"
              >
                Our Full Story <ArrowRight className="w-4 h-4" />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* How We Work - 4 Step Process */}
      <section className="bg-[#0B1B2B]">
        <div className="container py-16 lg:py-24">
          <Reveal className="text-center mb-12">
            <p className="text-xs uppercase tracking-[0.2em] text-[#C9A84C] mb-3">How We Work</p>
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-white gold-underline-center inline-block">
              Our Process
            </h2>
            <p className="mt-6 max-w-2xl mx-auto text-base text-white/70">
              We keep the process simple and transparent. From your first call to ongoing reviews, we handle every detail with care.
            </p>
          </Reveal>

          <RevealStagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Consultation", desc: "Call or email to schedule your free consultation. We serve Naperville, Lisle, Wheaton, and surrounding areas Monday through Friday, 8am to 6pm." },
              { step: "02", title: "Financial Review", desc: "We review your investments, taxes, estate documents, and insurance coverage. We explain what we see and answer all your questions." },
              { step: "03", title: "Custom Strategy", desc: "We build a personalized financial plan with clear recommendations tailored to your goals, timeline, and risk tolerance." },
              { step: "04", title: "Ongoing Reviews", desc: "We monitor your plan and meet annually or semi-annually to adjust as your life and the markets evolve." },
            ].map((item) => (
              <RevealItem key={item.step}>
                <div className="text-center">
                  <div className="font-serif text-5xl font-bold text-[#C9A84C] mb-4">
                    {item.step}
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-white mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm text-white/60 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </RevealItem>
            ))}
          </RevealStagger>

          <Reveal className="text-center mt-12">
            <p className="text-white/60 text-sm">
              We manage all aspects of your financial life. You approve the plan, and we handle the rest.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Where We Work - Service Areas */}
      <section id="where-we-work" className="bg-white">
        <div className="container py-16 lg:py-24">
          <Reveal className="text-center mb-12">
            <p className="text-xs uppercase tracking-[0.2em] text-[#C9A84C] mb-3">Where We Work</p>
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-[#0B1B2B] gold-underline-center inline-block">
              Serving DuPage County and Beyond
            </h2>
            <p className="mt-6 max-w-2xl mx-auto text-base text-[#5A6A7A]">
              Based in Lisle, IL, serving families and individuals across the western suburbs of Chicago.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Primary city */}
            <Reveal className="lg:col-span-1">
              <div className="bg-[#0B1B2B] rounded-lg p-8 h-full">
                <p className="text-xs uppercase tracking-[0.2em] text-[#C9A84C] mb-2">Primary Service Area</p>
                <h3 className="font-serif text-3xl font-bold text-white mb-4">
                  {BUSINESS.primaryCity}, {BUSINESS.primaryState}
                </h3>
                <p className="text-sm text-white/70 leading-relaxed">
                  Naperville is one of the largest cities in DuPage County, with a strong professional community and many families planning for retirement, college funding, and multi-generational wealth transfer. Our office in nearby Lisle makes us easily accessible to Naperville residents.
                </p>
                <div className="mt-6 pt-6 border-t border-white/10">
                  <p className="text-xs text-white/50 mb-3">Cities and Communities We Serve:</p>
                  <div className="flex flex-wrap gap-2">
                    {["Naperville", "Lisle", "Bolingbrook", "Plainfield", "Oswego"].map((city) => (
                      <span key={city} className="text-xs px-2 py-1 bg-[#C9A84C]/10 text-[#C9A84C] rounded border border-[#C9A84C]/20">
                        {city}
                      </span>
                    ))}
                  </div>
                </div>
                <Link
                  href="/naperville"
                  className="inline-flex items-center gap-2 mt-6 text-[#C9A84C] font-semibold hover:underline text-sm"
                >
                  Naperville Services <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </Reveal>

            {/* Other cities grid */}
            <RevealStagger className="lg:col-span-2 grid grid-cols-2 md:grid-cols-3 gap-4">
              {LOCATIONS.filter((l) => !l.primary).map((loc) => (
                <RevealItem key={loc.slug}>
                  <Link
                    href={`/${loc.slug}`}
                    className="block bg-[#F5F5F0] rounded-lg p-5 hover:bg-[#0B1B2B] hover:text-white transition-colors group"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <MapPin className="w-4 h-4 text-[#C9A84C]" />
                      <span className="font-serif text-lg font-semibold text-[#0B1B2B] group-hover:text-white">
                        {loc.name}, {loc.state}
                      </span>
                    </div>
                    <p className="text-xs text-[#5A6A7A] group-hover:text-white/60">
                      {loc.nearby.slice(0, 3).join(", ")} +{Math.max(0, loc.nearby.length - 3)}
                    </p>
                  </Link>
                </RevealItem>
              ))}
            </RevealStagger>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <ReviewsSection />

      {/* FAQ Section */}
      <FAQAccordion
        items={HOMEPAGE_FAQS}
        subtitle="Answers to the questions clients ask most before working with a financial advisor. Not seeing yours? Call us. We are straightforward about our process, fees, and approach."
        dark={true}
      />

      {/* Find Us Section */}
      <FindUsSection />

      {/* Final CTA Band */}
      <CTASection
        title="Ready to Take the Next Step?"
        subtitle={`${BUSINESS.name} serves Naperville, IL and the surrounding area with professional fiduciary wealth management. Free consultations, clear options, no pressure.`}
        variant="navy"
      />
    </>
  );
}
