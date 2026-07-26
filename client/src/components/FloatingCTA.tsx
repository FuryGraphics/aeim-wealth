import { Link } from "wouter";
import { Phone, CalendarClock } from "lucide-react";
import { BUSINESS } from "@/lib/siteData";

export default function FloatingCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden">
      <div className="flex bg-[#0B1B2B] border-t border-[#C9A84C]/30">
        <a
          href={`tel:${BUSINESS.phoneRaw}`}
          className="flex-1 flex items-center justify-center gap-2 py-4 text-white font-medium text-sm"
        >
          <Phone className="w-4 h-4 text-[#C9A84C]" />
          Call Now
        </a>
        <div className="w-px bg-[#C9A84C]/20" />
        <Link
          href="/contact"
          className="flex-1 flex items-center justify-center gap-2 py-4 bg-[#C9A84C] text-[#0B1B2B] font-semibold text-sm"
        >
          <CalendarClock className="w-4 h-4" />
          Schedule Consultation
        </Link>
      </div>
    </div>
  );
}
