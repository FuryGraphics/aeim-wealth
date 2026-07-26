import { Link } from "wouter";
import { ArrowRight, Calendar } from "lucide-react";
import { BUSINESS, BLOG_POSTS } from "@/lib/siteData";
import { useSEO } from "@/lib/seo";
import { Reveal, RevealStagger, RevealItem } from "@/components/Reveal";
import Breadcrumb from "@/components/Breadcrumb";
import CTASection from "@/components/CTASection";

export default function Blog() {
  useSEO({
    title: "Illinois Financial Planning Tips | AEIM Wealth Management Blog",
    description: "Financial planning insights, retirement strategies, tax tips, and estate planning guidance from AEIM Wealth Management in DuPage County, IL.",
    canonical: "/blog",
  });

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
  };

  return (
    <>
      {/* Hero */}
      <section className="relative bg-[#0B1B2B] pt-32 pb-16 lg:pt-40 lg:pb-24 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-15">
          <img
            src="/manus-storage/cta-band_9f8629e2.jpg"
            alt=""
            className="w-full h-full object-cover"
            loading="eager"
          />
        </div>
        <div className="container relative z-10">
          <Reveal className="max-w-3xl">
            <h1 className="font-serif text-4xl lg:text-5xl font-bold text-white">
              Financial Planning Insights
            </h1>
            <div className="mt-4 h-1 w-16 bg-[#C9A84C]" />
            <p className="mt-6 text-lg text-white/70 leading-relaxed">
              Practical guidance on retirement, taxes, estate planning, and wealth management from an independent fiduciary perspective.
            </p>
          </Reveal>
        </div>
      </section>

      <Breadcrumb crumbs={[{ label: "Blog" }]} />

      {/* Blog Posts Grid */}
      <section className="bg-white">
        <div className="container py-16 lg:py-24">
          <RevealStagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {BLOG_POSTS.map((post) => (
              <RevealItem key={post.slug}>
                <Link
                  href="/blog"
                  className="group block bg-[#F5F5F0] rounded-lg overflow-hidden hover:shadow-lg transition-shadow h-full"
                >
                  <div className="aspect-[16/10] overflow-hidden bg-[#0B1B2B]">
                    <div className="w-full h-full flex items-center justify-center">
                      <span className="font-serif text-4xl font-bold text-[#C9A84C]/30">
                        {post.category.charAt(0)}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-xs text-[#5A6A7A] mb-3">
                      <Calendar className="w-3.5 h-3.5" />
                      {formatDate(post.date)}
                      <span className="text-[#C9A84C]">·</span>
                      <span className="text-[#C9A84C] font-medium">{post.category}</span>
                    </div>
                    <h3 className="font-serif text-lg font-semibold text-[#0B1B2B] group-hover:text-[#C9A84C] transition-colors">
                      {post.title}
                    </h3>
                    <p className="mt-2 text-sm text-[#5A6A7A] leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="mt-4 flex items-center gap-1 text-xs font-semibold text-[#C9A84C]">
                      Read More <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </RevealItem>
            ))}
          </RevealStagger>
        </div>
      </section>

      <CTASection />
    </>
  );
}
