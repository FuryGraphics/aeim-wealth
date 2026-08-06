import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { BUSINESS, PROCESS_STEPS } from "@/lib/siteData";
import { useSEO } from "@/lib/seo";
import { Reveal, RevealStagger, RevealItem } from "@/components/Reveal";
import Breadcrumb from "@/components/Breadcrumb";
import CTASection from "@/components/CTASection";

export default function Process() {
  useSEO({
    title: "The AEIM Process | Assess, Educate, Implement, Monitor",
    description:
      "Assess, Educate, Implement, Monitor. The four-step financial planning process behind AEIM Wealth Management, serving Naperville, Lisle, and DuPage County, IL.",
    canonical: "/process",
    schema: {
      "@context": "https://schema.org",
      "@type": "HowTo",
      name: "The AEIM Process",
      description:
        "The four-step financial planning process used by AEIM Wealth Management: Assess, Educate, Implement, and Monitor.",
      step: PROCESS_STEPS.map((s, i) => ({
        "@type": "HowToStep",
        position: i + 1,
        name: s.title,
        text: s.summary,
      })),
    },
  });

  return (
    <>
      {/* Hero */}
      <section className="relative bg-[#0B1B2B] pt-32 pb-16 lg:pt-40 lg:pb-24 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-15">
          <img
            src="/images/stats-office.jpg"
            alt=""
            className="w-full h-full object-cover"
            loading="eager"
          />
        </div>
        <div className="container relative z-10">
          <Reveal className="max-w-3xl">
            <p className="text-xs uppercase tracking-[0.2em] text-[#C9A84C] mb-3">
              Assess · Educate · Implement · Monitor
            </p>
            <h1 className="font-serif text-4xl lg:text-5xl font-bold text-white">
              The AEIM Process
            </h1>
            <div className="mt-4 h-1 w-16 bg-[#C9A84C]" />
            <p className="mt-6 text-lg text-white/70 leading-relaxed">
              We live in a very complex world. Pre- and post-retirees are required to make many important and sometimes irrevocable decisions that often involve the largest financial transactions of their lives. They can't afford to take shortcuts or settle for inadequate, surface-level planning.
            </p>
          </Reveal>
        </div>
      </section>

      <Breadcrumb crumbs={[{ label: "Process" }]} />

      {/* Step overview */}
      <section className="bg-[#F5F5F0]">
        <div className="container py-12 lg:py-16">
          <RevealStagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PROCESS_STEPS.map((step) => (
              <RevealItem key={step.slug}>
                <a
                  href={`#${step.slug}`}
                  className="block bg-white rounded-lg p-6 h-full border border-gray-100 hover:shadow-lg transition-shadow"
                >
                  <div className="font-serif text-4xl font-bold text-[#C9A84C]">
                    {step.step}
                  </div>
                  <h2 className="mt-3 font-serif text-xl font-semibold text-[#0B1B2B]">
                    {step.title}
                  </h2>
                  <p className="mt-2 text-sm text-[#5A6A7A] leading-relaxed">
                    {step.summary}
                  </p>
                </a>
              </RevealItem>
            ))}
          </RevealStagger>
        </div>
      </section>

      {/* Full detail for each step */}
      {PROCESS_STEPS.map((step, i) => (
        <section
          key={step.slug}
          id={step.slug}
          className={i % 2 === 0 ? "bg-white scroll-mt-24" : "bg-[#0B1B2B] scroll-mt-24"}
        >
          <div className="container py-16 lg:py-24">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-16">
              <Reveal className="lg:col-span-1">
                <div className="font-serif text-6xl font-bold text-[#C9A84C]">
                  {step.step}
                </div>
                <h2
                  className={`mt-3 font-serif text-3xl lg:text-4xl font-bold uppercase tracking-wide ${
                    i % 2 === 0 ? "text-[#0B1B2B]" : "text-white"
                  }`}
                >
                  {step.title}
                </h2>
                <blockquote
                  className={`mt-6 border-l-2 border-[#C9A84C] pl-4 font-serif text-lg italic leading-relaxed ${
                    i % 2 === 0 ? "text-[#0B1B2B]/80" : "text-white/80"
                  }`}
                >
                  &ldquo;{step.quote}&rdquo;
                  <footer
                    className={`mt-2 not-italic font-sans text-sm ${
                      i % 2 === 0 ? "text-[#5A6A7A]" : "text-white/50"
                    }`}
                  >
                    — {step.attribution}
                  </footer>
                </blockquote>
              </Reveal>

              <Reveal delay={0.1} className="lg:col-span-2">
                <p
                  className={`font-serif text-xl lg:text-2xl leading-relaxed ${
                    i % 2 === 0 ? "text-[#0B1B2B]" : "text-white"
                  }`}
                >
                  {step.summary}
                </p>
                <div
                  className={`mt-6 space-y-4 text-base leading-relaxed ${
                    i % 2 === 0 ? "text-[#5A6A7A]" : "text-white/70"
                  }`}
                >
                  {step.body.map((para) => (
                    <p key={para.slice(0, 40)}>{para}</p>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </section>
      ))}

      {/* Services link-out */}
      <section className="bg-[#F5F5F0]">
        <div className="container py-16">
          <Reveal className="text-center">
            <h2 className="font-serif text-2xl lg:text-3xl font-bold text-[#0B1B2B]">
              See the process applied to your situation
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-base text-[#5A6A7A]">
              Every plan we build runs through all four stages, whether the focus is retirement income, estate tax elimination, or investment strategy.
            </p>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 mt-6 text-[#C9A84C] font-semibold hover:underline"
            >
              Explore our services <ArrowRight className="w-4 h-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      <CTASection
        title="Start With a Free Assessment"
        subtitle={`The first step is always Assess. ${BUSINESS.owner} will review where you stand today at no cost and with no obligation.`}
      />
    </>
  );
}
