import { Link } from "wouter";
import { CheckCircle2, ArrowRight, ArrowLeft } from "lucide-react";
import { BUSINESS, SERVICES } from "@/lib/siteData";
import { useSEO } from "@/lib/seo";
import { Reveal, RevealStagger, RevealItem } from "@/components/Reveal";
import Breadcrumb from "@/components/Breadcrumb";
import CTASection from "@/components/CTASection";
import FAQAccordion from "@/components/FAQAccordion";

export default function ServiceDetail({ slug }: { slug: string }) {
  const service = SERVICES.find((s) => s.slug === slug);

  if (!service) {
    return (
      <div className="pt-32 pb-16 text-center">
        <div className="container">
          <h1 className="font-serif text-3xl font-bold text-[#0B1B2B]">Service Not Found</h1>
          <Link href="/services" className="mt-4 inline-block text-[#C9A84C] hover:underline">
            ← Back to Services
          </Link>
        </div>
      </div>
    );
  }

  const isParent = !service.parent;
  const parentService = service.parent ? SERVICES.find((s) => s.slug === service.parent) : null;
  const relatedServices = SERVICES.filter(
    (s) => s.slug !== slug && (isParent ? !s.parent : s.parent === service.parent || !s.parent)
  ).slice(0, 3);

  useSEO({
    title: `${service.title} | AEIM Wealth Management`,
    description: service.short,
    canonical: `/services/${service.slug}`,
    schema: {
      "@context": "https://schema.org",
      "@type": "Service",
      name: service.title,
      description: service.short,
      provider: {
        "@type": "FinancialService",
        name: BUSINESS.name,
        telephone: BUSINESS.phone,
      },
      areaServed: "Naperville, Lisle, Wheaton, Aurora, St. Charles, IL",
    },
  });

  const crumbs = parentService
    ? [
        { label: "Services", href: "/services" },
        { label: parentService.title, href: `/services/${parentService.slug}` },
        { label: service.title },
      ]
    : [{ label: "Services", href: "/services" }, { label: service.title }];

  return (
    <>
      {/* Hero */}
      <section className="relative bg-[#0B1B2B] pt-32 pb-16 lg:pt-40 lg:pb-24 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img
            src={service.image}
            alt=""
            className="w-full h-full object-cover"
            loading="eager"
          />
        </div>
        <div className="container relative z-10">
          <Reveal className="max-w-3xl">
            <h1 className="font-serif text-4xl lg:text-5xl font-bold text-white">
              {service.title}
            </h1>
            <div className="mt-4 h-1 w-16 bg-[#C9A84C]" />
            <p className="mt-6 text-lg text-white/70 leading-relaxed">
              {service.short}
            </p>
          </Reveal>
        </div>
      </section>

      <Breadcrumb crumbs={crumbs} />

      {/* Intro */}
      <section className="bg-white">
        <div className="container py-16 lg:py-20">
          <Reveal className="max-w-3xl">
            <h2 className="font-serif text-2xl lg:text-3xl font-bold text-[#0B1B2B] gold-underline">
              {service.title} in {BUSINESS.primaryCity}, IL
            </h2>
            <p className="mt-6 text-base text-[#5A6A7A] leading-relaxed">
              {service.intro}
            </p>
          </Reveal>
        </div>
      </section>

      {/* What We Handle */}
      <section className="bg-[#F5F5F0]">
        <div className="container py-16 lg:py-20">
          <Reveal className="max-w-3xl">
            <p className="text-xs uppercase tracking-[0.2em] text-[#C9A84C] mb-3">What We Handle</p>
            <h2 className="font-serif text-2xl lg:text-3xl font-bold text-[#0B1B2B] gold-underline">
              Comprehensive {service.title} Services
            </h2>
          </Reveal>
          <RevealStagger className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl">
            {service.whatWeHandle.map((item, i) => (
              <RevealItem key={i}>
                <div className="flex items-start gap-3 bg-white rounded-lg p-4 border border-gray-100">
                  <CheckCircle2 className="w-5 h-5 text-[#C9A84C] shrink-0 mt-0.5" />
                  <span className="text-sm text-[#0B1B2B]">{item}</span>
                </div>
              </RevealItem>
            ))}
          </RevealStagger>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="bg-[#0B1B2B]">
        <div className="container py-16 lg:py-24">
          <Reveal className="text-center mb-12">
            <p className="text-xs uppercase tracking-[0.2em] text-[#C9A84C] mb-3">Our Process</p>
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-white gold-underline-center inline-block">
              How We Approach {service.title}
            </h2>
          </Reveal>

          <RevealStagger className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {service.process.map((item) => (
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
        </div>
      </section>

      {/* Sub-service cards (only for parent) */}
      {isParent && service.subServices && (
        <section className="bg-white">
          <div className="container py-16 lg:py-20">
            <Reveal className="text-center mb-12">
              <p className="text-xs uppercase tracking-[0.2em] text-[#C9A84C] mb-3">Our Services</p>
              <h2 className="font-serif text-3xl font-bold text-[#0B1B2B] gold-underline-center inline-block">
                {service.title} Sub-Services
              </h2>
            </Reveal>
            <RevealStagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {service.subServices.map((sub) => {
                const subService = SERVICES.find((s) => s.slug === sub.slug);
                if (!subService) return null;
                return (
                  <RevealItem key={sub.slug}>
                    <Link
                      href={`/services/${sub.slug}`}
                      className="group block bg-[#F5F5F0] rounded-lg overflow-hidden hover:shadow-lg transition-shadow h-full"
                    >
                      <div className="aspect-[3/2] overflow-hidden">
                        <img
                          src={subService.image}
                          alt={subService.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                        />
                      </div>
                      <div className="p-5">
                        <h3 className="font-serif text-lg font-semibold text-[#0B1B2B] group-hover:text-[#C9A84C] transition-colors">
                          {subService.title}
                        </h3>
                        <p className="mt-2 text-xs text-[#5A6A7A] line-clamp-2">{subService.short}</p>
                        <div className="mt-3 flex items-center gap-1 text-xs font-semibold text-[#C9A84C]">
                          Learn More <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </Link>
                  </RevealItem>
                );
              })}
            </RevealStagger>
          </div>
        </section>
      )}

      {/* Why Independent Fiduciary */}
      <section className="bg-[#F5F5F0]">
        <div className="container py-16 lg:py-20">
          <Reveal className="max-w-3xl">
            <p className="text-xs uppercase tracking-[0.2em] text-[#C9A84C] mb-3">Why It Matters</p>
            <h2 className="font-serif text-2xl lg:text-3xl font-bold text-[#0B1B2B] gold-underline">
              Why Choose an Independent Fiduciary?
            </h2>
            <div className="mt-6 space-y-4 text-base text-[#5A6A7A] leading-relaxed">
              <p>
                As an independent fiduciary, {BUSINESS.owner} is legally obligated to act in your best interest at all times. Unlike captive advisors who work for a single company and may be limited to that company's products, we have access to the full universe of financial solutions.
              </p>
              <p>
                This means our recommendations are based on what is truly best for you, not on sales quotas or company pressure. We do not earn commissions on product sales, so there is no incentive to push specific investments. Just transparent, honest advice.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <FAQAccordion
        items={service.faqs}
        subtitle="Answers to common questions about our services. Not seeing yours? Call us for a straightforward answer."
      />

      {/* Related Services */}
      <section className="bg-white">
        <div className="container py-16">
          <Reveal className="mb-8">
            <h2 className="font-serif text-2xl font-bold text-[#0B1B2B] gold-underline">
              Related Services
            </h2>
          </Reveal>
          <RevealStagger className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedServices.map((rel) => (
              <RevealItem key={rel.slug}>
                <Link
                  href={`/services/${rel.slug}`}
                  className="group flex items-center gap-4 bg-[#F5F5F0] rounded-lg p-5 hover:bg-[#0B1B2B] transition-colors"
                >
                  <div className="w-14 h-14 rounded-lg overflow-hidden shrink-0">
                    <img src={rel.image} alt={rel.title} className="w-full h-full object-cover" loading="lazy" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-serif text-base font-semibold text-[#0B1B2B] group-hover:text-white transition-colors">
                      {rel.title}
                    </h3>
                    <p className="text-xs text-[#5A6A7A] group-hover:text-white/60 mt-1 line-clamp-1">
                      {rel.short}
                    </p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-[#C9A84C] group-hover:translate-x-1 transition-transform" />
                </Link>
              </RevealItem>
            ))}
          </RevealStagger>

          <Reveal className="mt-8">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-[#C9A84C] font-semibold hover:underline"
            >
              <ArrowLeft className="w-4 h-4" /> All Services
            </Link>
          </Reveal>
        </div>
      </section>

      <CTASection />
    </>
  );
}
