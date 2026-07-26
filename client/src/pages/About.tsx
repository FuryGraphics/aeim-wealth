import { Link } from "wouter";
import { Phone, CheckCircle2, Award, Shield, Eye } from "lucide-react";
import { BUSINESS } from "@/lib/siteData";
import { useSEO } from "@/lib/seo";
import { Reveal, RevealStagger, RevealItem } from "@/components/Reveal";
import Breadcrumb from "@/components/Breadcrumb";
import CTASection from "@/components/CTASection";

export default function About() {
  useSEO({
    title: "Bryan Uselding Financial Advisor Naperville | AEIM Wealth Management",
    description: "Meet Bryan M. Uselding, independent fiduciary financial advisor with 17+ years of experience serving families in DuPage County, IL.",
    canonical: "/about",
    schema: {
      "@context": "https://schema.org",
      "@type": "Person",
      name: BUSINESS.owner,
      jobTitle: "Financial Advisor",
      worksFor: { "@type": "FinancialService", name: BUSINESS.name },
      telephone: BUSINESS.phone,
      address: {
        "@type": "PostalAddress",
        streetAddress: "650 Warrenville Rd, Suite 100",
        addressLocality: "Lisle",
        addressRegion: "IL",
        postalCode: "60532",
      },
    },
  });

  return (
    <>
      {/* Hero */}
      <section className="relative bg-[#0B1B2B] pt-32 pb-16 lg:pt-40 lg:pb-24 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img
            src="/manus-storage/about-advisor_3b88c09d.jpg"
            alt=""
            className="w-full h-full object-cover"
            loading="eager"
          />
        </div>
        <div className="container relative z-10">
          <Reveal className="max-w-3xl">
            <h1 className="font-serif text-4xl lg:text-5xl font-bold text-white">
              About AEIM Wealth Management
            </h1>
            <div className="mt-4 h-1 w-16 bg-[#C9A84C]" />
            <p className="mt-6 text-lg text-white/70 leading-relaxed">
              Independent. Fiduciary. Transparent. Serving DuPage County for {BUSINESS.experience} years.
            </p>
          </Reveal>
        </div>
      </section>

      <Breadcrumb crumbs={[{ label: "About" }]} />

      {/* Advisor Bio */}
      <section className="bg-white">
        <div className="container py-16 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <Reveal>
              <img
                src="/manus-storage/about-advisor_3b88c09d.jpg"
                alt={`${BUSINESS.owner}, financial advisor at AEIM Wealth Management`}
                className="rounded-lg shadow-lg w-full"
                loading="lazy"
              />
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-xs uppercase tracking-[0.2em] text-[#C9A84C] mb-3">Your Advisor</p>
              <h2 className="font-serif text-3xl lg:text-4xl font-bold text-[#0B1B2B] gold-underline">
                {BUSINESS.owner}
              </h2>
              <div className="mt-6 space-y-4 text-base text-[#5A6A7A] leading-relaxed">
                <p>
                  Bryan M. Uselding is the founder and principal advisor of AEIM Wealth Management. With over 17 years of experience in financial planning and wealth management, Bryan has dedicated his career to helping families and individuals across DuPage County achieve financial confidence.
                </p>
                <p>
                  As an independent, fiduciary advisor, Bryan is not tied to any company's products or sales quotas. He chose independence so he could provide truly unbiased advice, always acting in his clients' best interest. This is not just a philosophy, it is a legal obligation.
                </p>
                <p>
                  Bryan believes in building long-term, multi-generational relationships. Many of his clients have been with him for over a decade, and he now advises the children of his earliest clients. This continuity is the foundation of effective wealth management.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="bg-[#0B1B2B]">
        <div className="container py-16 lg:py-24">
          <Reveal className="text-center mb-12">
            <p className="text-xs uppercase tracking-[0.2em] text-[#C9A84C] mb-3">Our Philosophy</p>
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-white gold-underline-center inline-block">
              What We Stand For
            </h2>
          </Reveal>

          <RevealStagger className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <RevealItem>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto rounded-full bg-[#C9A84C]/10 border border-[#C9A84C]/30 flex items-center justify-center mb-4">
                  <Award className="w-8 h-8 text-[#C9A84C]" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-white mb-3">Independent</h3>
                <p className="text-sm text-white/60 leading-relaxed">
                  We are not tied to any company's products. We provide unbiased advice across the full universe of financial solutions, with no company pressure or restrictions.
                </p>
              </div>
            </RevealItem>
            <RevealItem>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto rounded-full bg-[#C9A84C]/10 border border-[#C9A84C]/30 flex items-center justify-center mb-4">
                  <Shield className="w-8 h-8 text-[#C9A84C]" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-white mb-3">Fiduciary</h3>
                <p className="text-sm text-white/60 leading-relaxed">
                  We are legally obligated to act in your best interest 100% of the time. We do not earn commissions on product sales, so our recommendations are always unbiased.
                </p>
              </div>
            </RevealItem>
            <RevealItem>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto rounded-full bg-[#C9A84C]/10 border border-[#C9A84C]/30 flex items-center justify-center mb-4">
                  <Eye className="w-8 h-8 text-[#C9A84C]" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-white mb-3">Transparent</h3>
                <p className="text-sm text-white/60 leading-relaxed">
                  Trust and open communication are the foundation of our practice. No product-pushing, no hard-selling, and no hidden fees. Full transparency, always.
                </p>
              </div>
            </RevealItem>
          </RevealStagger>
        </div>
      </section>

      {/* Experience Stats */}
      <section className="bg-[#F5F5F0]">
        <div className="container py-16 lg:py-24">
          <RevealStagger className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <RevealItem>
              <div className="font-serif text-5xl font-bold text-[#C9A84C]">{BUSINESS.experience}</div>
              <div className="mt-2 text-sm text-[#5A6A7A] font-medium">Years of Experience</div>
            </RevealItem>
            <RevealItem>
              <div className="font-serif text-5xl font-bold text-[#C9A84C]">100%</div>
              <div className="mt-2 text-sm text-[#5A6A7A] font-medium">Fiduciary Standard</div>
            </RevealItem>
            <RevealItem>
              <div className="font-serif text-5xl font-bold text-[#C9A84C]">0</div>
              <div className="mt-2 text-sm text-[#5A6A7A] font-medium">Commissions Earned</div>
            </RevealItem>
            <RevealItem>
              <div className="font-serif text-5xl font-bold text-[#C9A84C]">12+</div>
              <div className="mt-2 text-sm text-[#5A6A7A] font-medium">Cities Served</div>
            </RevealItem>
          </RevealStagger>
        </div>
      </section>

      <CTASection
        title="Ready to Work With Bryan?"
        subtitle="Schedule a free, no-obligation consultation to discuss your financial goals and see if AEIM Wealth Management is the right fit for you."
      />
    </>
  );
}
