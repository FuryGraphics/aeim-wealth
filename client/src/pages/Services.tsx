import { Link } from "wouter";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { BUSINESS, SERVICES } from "@/lib/siteData";
import { useSEO } from "@/lib/seo";
import { Reveal, RevealStagger, RevealItem } from "@/components/Reveal";
import Breadcrumb from "@/components/Breadcrumb";
import CTASection from "@/components/CTASection";

export default function Services() {
  useSEO({
    title: "Wealth Management Firm Naperville | AEIM Wealth Management",
    description: "Comprehensive wealth management services including retirement planning, estate planning, investment strategies, tax reduction, and family financial planning in DuPage County.",
    canonical: "/services",
    schema: {
      "@context": "https://schema.org",
      "@type": "ItemList",
      itemListElement: SERVICES.map((s, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: s.title,
        url: `https://${BUSINESS.domain}/services/${s.slug}`,
      })),
    },
  });

  return (
    <>
      {/* Hero */}
      <section className="relative bg-[#0B1B2B] pt-32 pb-16 lg:pt-40 lg:pb-24 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
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
              Wealth Management Services
            </h1>
            <div className="mt-4 h-1 w-16 bg-[#C9A84C]" />
            <p className="mt-6 text-lg text-white/70 leading-relaxed">
              Comprehensive, fiduciary financial planning for families and individuals across DuPage County. From retirement income to estate tax elimination, we coordinate every aspect of your financial life.
            </p>
          </Reveal>
        </div>
      </section>

      <Breadcrumb crumbs={[{ label: "Services" }]} />

      {/* Services Grid */}
      <section className="bg-white">
        <div className="container py-16 lg:py-24">
          <RevealStagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service) => (
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
                    {service.subServices && (
                      <div className="mt-4 pt-4 border-t border-gray-100">
                        <ul className="space-y-1.5">
                          {service.subServices.map((sub) => (
                            <li key={sub.slug} className="text-xs text-[#5A6A7A] flex items-center gap-2">
                              <CheckCircle2 className="w-3 h-3 text-[#C9A84C]" />
                              {sub.title}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
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

      {/* Why Independent Fiduciary */}
      <section className="bg-[#F5F5F0]">
        <div className="container py-16 lg:py-24">
          <Reveal className="text-center mb-12">
            <p className="text-xs uppercase tracking-[0.2em] text-[#C9A84C] mb-3">Why Choose Us</p>
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-[#0B1B2B] gold-underline-center inline-block">
              Independent. Fiduciary. Transparent.
            </h2>
          </Reveal>

          <RevealStagger className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <RevealItem>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto rounded-full bg-[#0B1B2B] flex items-center justify-center mb-4">
                  <span className="font-serif text-2xl font-bold text-[#C9A84C]">I</span>
                </div>
                <h3 className="font-serif text-xl font-semibold text-[#0B1B2B] mb-2">Independent</h3>
                <p className="text-sm text-[#5A6A7A] leading-relaxed">
                  Unbiased advice across all financial products. No company pressure or restrictions.
                </p>
              </div>
            </RevealItem>
            <RevealItem>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto rounded-full bg-[#0B1B2B] flex items-center justify-center mb-4">
                  <span className="font-serif text-2xl font-bold text-[#C9A84C]">F</span>
                </div>
                <h3 className="font-serif text-xl font-semibold text-[#0B1B2B] mb-2">Fiduciary</h3>
                <p className="text-sm text-[#5A6A7A] leading-relaxed">
                  Legally obligated to act in your best interest 100% of the time.
                </p>
              </div>
            </RevealItem>
            <RevealItem>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto rounded-full bg-[#0B1B2B] flex items-center justify-center mb-4">
                  <span className="font-serif text-2xl font-bold text-[#C9A84C]">T</span>
                </div>
                <h3 className="font-serif text-xl font-semibold text-[#0B1B2B] mb-2">Transparent</h3>
                <p className="text-sm text-[#5A6A7A] leading-relaxed">
                  Trust and open communication. No product-pushing, hard-selling, or hidden fees.
                </p>
              </div>
            </RevealItem>
          </RevealStagger>
        </div>
      </section>

      <CTASection />
    </>
  );
}
