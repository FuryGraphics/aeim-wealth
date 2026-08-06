import { Link } from "wouter";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { BUSINESS, SERVICES, LOCATIONS, OFFICES } from "@/lib/siteData";

export default function Footer() {
  return (
    <footer className="bg-[#0B1B2B] text-white">
      {/* Trust badges bar */}
      <div className="border-b border-white/10">
        <div className="container py-6">
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            {BUSINESS.trustBadges.map((badge) => (
              <div key={badge} className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#C9A84C]" />
                <span className="text-sm text-white/80 font-medium">{badge}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <img
              src="/images/logo-light.png"
              alt={BUSINESS.name}
              className="w-40 h-auto mb-5"
              loading="lazy"
            />
            <p className="text-sm text-white/60 leading-relaxed">
              Independent, fiduciary wealth management serving families and individuals across DuPage County for {BUSINESS.experience} years.
            </p>
            <div className="flex flex-wrap gap-2 mt-4">
              {BUSINESS.trustBadges.slice(0, 3).map((badge) => (
                <span key={badge} className="text-xs px-2 py-1 bg-[#C9A84C]/10 text-[#C9A84C] rounded border border-[#C9A84C]/20">
                  {badge}
                </span>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-serif text-lg font-semibold text-white mb-4">Services</h3>
            <ul className="space-y-2">
              {SERVICES.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-sm text-white/60 hover:text-[#C9A84C] transition-colors"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/process"
                  className="text-sm text-[#C9A84C] hover:underline transition-colors"
                >
                  The AEIM Process
                </Link>
              </li>
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="font-serif text-lg font-semibold text-white mb-4">Service Areas</h3>
            <ul className="space-y-2">
              {LOCATIONS.map((loc) => (
                <li key={loc.slug}>
                  <Link
                    href={`/${loc.slug}`}
                    className="text-sm text-white/60 hover:text-[#C9A84C] transition-colors"
                  >
                    {loc.name}, {loc.state}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-serif text-lg font-semibold text-white mb-4">Contact</h3>
            <ul className="space-y-3">
              <li>
                <a href={`tel:${BUSINESS.phoneRaw}`} className="flex items-center gap-2 text-sm text-white/60 hover:text-[#C9A84C] transition-colors">
                  <Phone className="w-4 h-4 text-[#C9A84C]" /> {BUSINESS.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${BUSINESS.email}`} className="flex items-center gap-2 text-sm text-white/60 hover:text-[#C9A84C] transition-colors break-all">
                  <Mail className="w-4 h-4 text-[#C9A84C] shrink-0" /> {BUSINESS.email}
                </a>
              </li>
              {OFFICES.map((office) => (
                <li key={office.label} className="flex items-start gap-2 text-sm text-white/60">
                  <MapPin className="w-4 h-4 text-[#C9A84C] shrink-0 mt-0.5" />
                  <span>
                    <span className="block text-white/80 font-medium">{office.label}</span>
                    {office.street}, {office.cityStateZip}
                    {office.note && (
                      <span className="block text-xs text-white/40">{office.note}</span>
                    )}
                  </span>
                </li>
              ))}
            </ul>

            <h3 className="font-serif text-lg font-semibold text-white mt-6 mb-3">Hours</h3>
            <ul className="space-y-1">
              {BUSINESS.hours.map((h) => (
                <li key={h.day} className="flex items-center gap-2 text-xs text-white/60">
                  <Clock className="w-3 h-3 text-[#C9A84C]" />
                  <span className="font-medium text-white/80">{h.day}:</span>
                  <span>{h.time}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="border-t border-white/10">
        <div className="container py-6">
          <p className="text-xs text-white/40 leading-relaxed text-center mb-3">
            Advisory services offered through AEIM Wealth Management. This website is for informational purposes only and does not constitute investment, tax, or legal advice.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-white/40">
              © {new Date().getFullYear()} {BUSINESS.name}. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <Link href="/disclaimer" className="text-xs text-white/40 hover:text-[#C9A84C]">Disclaimer</Link>
              <Link href="/privacy-policy" className="text-xs text-white/40 hover:text-[#C9A84C]">Privacy Policy</Link>
              <Link href="/sitemap.xml" className="text-xs text-white/40 hover:text-[#C9A84C]">Sitemap</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
