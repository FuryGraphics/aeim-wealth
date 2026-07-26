import { Link } from "wouter";
import { Phone } from "lucide-react";
import { BUSINESS } from "@/lib/siteData";
import { Reveal } from "./Reveal";

interface CTASectionProps {
  title?: string;
  subtitle?: string;
  variant?: "navy" | "gold";
  badges?: string[];
}

export default function CTASection({
  title = "Ready to Take the Next Step?",
  subtitle = "Schedule a free, no-obligation consultation with Bryan. No scripts, no pressure — just honest answers about your financial future.",
  variant = "navy",
  badges = BUSINESS.trustBadges,
}: CTASectionProps) {
  const isNavy = variant === "navy";

  return (
    <section className={isNavy ? "bg-[#0B1B2B]" : "bg-[#C9A84C]"}>
      <div className="container py-16 lg:py-20">
        <Reveal className="text-center">
          <p className={`text-xs uppercase tracking-[0.2em] mb-3 ${isNavy ? "text-[#C9A84C]" : "text-[#0B1B2B]/70"}`}>
            Free Consultation
          </p>
          <h2 className={`font-serif text-3xl lg:text-4xl font-bold ${isNavy ? "text-white" : "text-[#0B1B2B]"}`}>
            {title}
          </h2>
          {subtitle && (
            <p className={`mt-4 max-w-2xl mx-auto text-base ${isNavy ? "text-white/70" : "text-[#0B1B2B]/80"}`}>
              {subtitle}
            </p>
          )}

          {/* Trust badges */}
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mt-6">
            {badges.map((badge) => (
              <div key={badge} className="flex items-center gap-2">
                <div className={`w-2 h-2 rounded-full ${isNavy ? "bg-[#C9A84C]" : "bg-[#0B1B2B]"}`} />
                <span className={`text-sm font-medium ${isNavy ? "text-white/80" : "text-[#0B1B2B]/80"}`}>
                  {badge}
                </span>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
            <Link
              href="/contact"
              className={`px-8 py-3.5 rounded-md font-semibold transition-colors ${
                isNavy
                  ? "bg-[#C9A84C] text-[#0B1B2B] hover:bg-[#b8973f]"
                  : "bg-[#0B1B2B] text-white hover:bg-[#112438]"
              }`}
            >
              Schedule a Free Consultation
            </Link>
            <a
              href={`tel:${BUSINESS.phoneRaw}`}
              className={`flex items-center gap-2 px-8 py-3.5 rounded-md font-semibold border-2 transition-colors ${
                isNavy
                  ? "border-[#C9A84C] text-[#C9A84C] hover:bg-[#C9A84C] hover:text-[#0B1B2B]"
                  : "border-[#0B1B2B] text-[#0B1B2B] hover:bg-[#0B1B2B] hover:text-white"
              }`}
            >
              <Phone className="w-4 h-4" /> Call {BUSINESS.phone}
            </a>
          </div>

          <p className={`text-xs mt-4 ${isNavy ? "text-white/40" : "text-[#0B1B2B]/50"}`}>
            Mon–Fri 8:00 AM - 6:00 PM · Sat By Appointment · Responses within 2 hrs
          </p>
        </Reveal>
      </div>
    </section>
  );
}
