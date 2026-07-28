import { Link } from "wouter";
import { Star, Quote, Phone } from "lucide-react";
import { BUSINESS, TESTIMONIALS } from "@/lib/siteData";
import { useSEO } from "@/lib/seo";
import { Reveal, RevealStagger, RevealItem } from "@/components/Reveal";
import Breadcrumb from "@/components/Breadcrumb";
import CTASection from "@/components/CTASection";

export default function Testimonials() {
  useSEO({
    title: "AEIM Wealth Management Reviews | Client Testimonials",
    description: "Read what clients say about AEIM Wealth Management. Independent fiduciary financial advisor serving Naperville, Lisle, and DuPage County, IL.",
    canonical: "/testimonials",
  });

  return (
    <>
      {/* Hero */}
      <section className="relative bg-[#0B1B2B] pt-32 pb-16 lg:pt-40 lg:pb-24 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-15">
          <img
            src="/images/cta-band.jpg"
            alt=""
            className="w-full h-full object-cover"
            loading="eager"
          />
        </div>
        <div className="container relative z-10">
          <Reveal className="max-w-3xl text-center mx-auto">
            <div className="flex items-center justify-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-[#C9A84C] text-[#C9A84C]" />
              ))}
            </div>
            <h1 className="font-serif text-4xl lg:text-5xl font-bold text-white">
              Client Reviews
            </h1>
            <div className="mt-4 h-1 w-16 bg-[#C9A84C] mx-auto" />
            <p className="mt-6 text-lg text-white/70 leading-relaxed">
              What our clients say about working with AEIM Wealth Management.
            </p>
          </Reveal>
        </div>
      </section>

      <Breadcrumb crumbs={[{ label: "Testimonials" }]} />

      {/* Reviews Grid */}
      <section className="bg-white">
        <div className="container py-16 lg:py-24">
          <RevealStagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TESTIMONIALS.map((review, i) => (
              <RevealItem key={i}>
                <div className="bg-[#F5F5F0] rounded-lg p-6 h-full flex flex-col">
                  <Quote className="w-8 h-8 text-[#C9A84C]/30 mb-4" />
                  <p className="text-sm text-[#0B1B2B] leading-relaxed flex-1">
                    {review.text}
                  </p>
                  <div className="mt-6 pt-4 border-t border-gray-200">
                    <div className="flex items-center gap-1 mb-1">
                      {[...Array(5)].map((_, j) => (
                        <Star key={j} className="w-3.5 h-3.5 fill-[#C9A84C] text-[#C9A84C]" />
                      ))}
                    </div>
                    <p className="text-sm font-semibold text-[#0B1B2B]">{review.author}</p>
                    <p className="text-xs text-[#5A6A7A]">{review.source}</p>
                  </div>
                </div>
              </RevealItem>
            ))}
          </RevealStagger>

          {/* Leave a Review CTA */}
          <Reveal className="text-center mt-12">
            <p className="text-[#5A6A7A] mb-4">Have you worked with us?</p>
            <Link
              href="/contact"
              className="inline-block px-8 py-3.5 bg-[#C9A84C] text-[#0B1B2B] rounded-md font-semibold hover:bg-[#b8973f] transition-colors"
            >
              Leave a Review
            </Link>
          </Reveal>
        </div>
      </section>

      <CTASection />
    </>
  );
}
