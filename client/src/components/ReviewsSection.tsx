import { Link } from "wouter";
import { Star, Quote } from "lucide-react";
import { TESTIMONIALS, BUSINESS } from "@/lib/siteData";
import { Reveal, RevealStagger, RevealItem } from "./Reveal";

export default function ReviewsSection() {
  return (
    <section className="bg-[#F5F5F0]">
      <div className="container py-16 lg:py-24">
        <Reveal className="text-center mb-12">
          <div className="flex items-center justify-center gap-1 mb-3">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-[#C9A84C] text-[#C9A84C]" />
            ))}
          </div>
          <p className="text-xs uppercase tracking-[0.2em] text-[#C9A84C] mb-3">Client Reviews</p>
          <h2 className="font-serif text-3xl lg:text-4xl font-bold text-[#0B1B2B] gold-underline-center inline-block">
            What Our Clients Say
          </h2>
        </Reveal>

        <RevealStagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.map((review, i) => (
            <RevealItem key={i}>
              <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 h-full flex flex-col">
                <Quote className="w-8 h-8 text-[#C9A84C]/30 mb-4" />
                <p className="text-sm text-[#0B1B2B] leading-relaxed flex-1">
                  {review.text}
                </p>
                <div className="mt-6 pt-4 border-t border-gray-100">
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

        <Reveal className="text-center mt-10">
          <Link
            href="/testimonials"
            className="inline-block px-6 py-3 border-2 border-[#C9A84C] text-[#C9A84C] rounded-md font-semibold hover:bg-[#C9A84C] hover:text-[#0B1B2B] transition-colors"
          >
            Read More Reviews
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
