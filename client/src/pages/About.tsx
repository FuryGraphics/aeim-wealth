import { Link } from "wouter";
import { Phone, CheckCircle2, Award, Shield, Eye } from "lucide-react";
import { BUSINESS, CORE_VALUES } from "@/lib/siteData";
import { useSEO } from "@/lib/seo";
import { Reveal, RevealStagger, RevealItem } from "@/components/Reveal";
import Breadcrumb from "@/components/Breadcrumb";
import CTASection from "@/components/CTASection";

const VALUE_ICONS = { award: Award, shield: Shield, eye: Eye } as const;

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
        streetAddress: BUSINESS.addressShort,
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
            src="/images/about-advisor.jpg"
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
                src="/images/about-advisor.jpg"
                alt={`${BUSINESS.owner}, financial advisor at AEIM Wealth Management`}
                className="rounded-lg shadow-lg w-full"
                loading="lazy"
              />
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-xs uppercase tracking-[0.2em] text-[#C9A84C] mb-3">Your Advisor</p>
              <h2 className="font-serif text-3xl lg:text-4xl font-bold text-[#0B1B2B] gold-underline">
                {BUSINESS.ownerFull}
              </h2>
              <div className="mt-6 space-y-4 text-base text-[#5A6A7A] leading-relaxed">
                <p>
                  With over 17 years of financial planning experience, Bryan M. Uselding, CFS®, CAS® takes the time to diligently listen to his clients' needs and creates a strategy to help them work towards their retirement goals.
                </p>
                <p>
                  As a fiduciary in the financial services industry, Bryan recognizes the need for unique and personalized services as investors near or enter into retirement. At this new stage of their life, it is paramount that we truly understand our investment strategies: reduce risk, help protect assets, and create a lifetime sustainable income.
                </p>
                <p>
                  Bryan has made these retirement issues his area of focus and passion. Over the past 17 years he has established himself as an industry authority with a Certified Fund Specialist (CFS®) designation and a Certified Annuity Specialist (CAS®) designation from the Institute of Business and Finance. He has also been heard discussing financial planning topics on the Chicago radio station AM560 The Answer.
                </p>
                <p>
                  Bryan knows that for many near-retirees, retirement planning was never a subject taught to them in school. Many are unsure of when they can afford to retire, whether they will run out of money in retirement, and afraid of being &ldquo;sold&rdquo; some costly financial product. This is why Bryan believes that helping educate others on their financial retirement options is the most important service he can provide. If you don't understand something, you will never feel comfortable owning it.
                </p>
              </div>

              {/* Designations */}
              <div className="mt-8 flex flex-wrap gap-3">
                {[
                  "CFS® — Certified Fund Specialist",
                  "CAS® — Certified Annuity Specialist",
                  "Heard on AM560 The Answer",
                ].map((item) => (
                  <span
                    key={item}
                    className="text-xs px-3 py-1.5 bg-[#C9A84C]/10 text-[#0B1B2B] rounded border border-[#C9A84C]/30 font-medium"
                  >
                    {item}
                  </span>
                ))}
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
            {CORE_VALUES.map((value) => {
              const Icon = VALUE_ICONS[value.icon as keyof typeof VALUE_ICONS];
              return (
                <RevealItem key={value.title}>
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto rounded-full bg-[#C9A84C]/10 border border-[#C9A84C]/30 flex items-center justify-center mb-4">
                      <Icon className="w-8 h-8 text-[#C9A84C]" />
                    </div>
                    <h3 className="font-serif text-xl font-semibold text-white mb-3">
                      {value.title}
                    </h3>
                    <p className="text-sm text-white/60 leading-relaxed">{value.body}</p>
                  </div>
                </RevealItem>
              );
            })}
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
