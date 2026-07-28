import { useEffect, useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { BUSINESS, SERVICES, LOCATIONS } from "@/lib/siteData";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [areasOpen, setAreasOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
    setAreasOpen(false);
  }, [location]);

  const isHome = location === "/";
  const navSolid = scrolled || !isHome;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          navSolid
            ? "bg-[#0B1B2B] shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="container">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 shrink-0">
              <img src="/images/logo.png" alt="AEIM Wealth Management" className="w-10 h-10 object-contain" />
              <div className="flex flex-col leading-none">
                <span className="font-serif text-2xl font-bold text-[#C9A84C] tracking-wide">
                  AEIM
                </span>
                <span className="text-[10px] text-white/80 tracking-[0.2em] uppercase mt-0.5">
                  Wealth Management
                </span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-8">
              {/* Services Dropdown */}
              <div
                className="relative group"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <button className="flex items-center gap-1 text-white/90 hover:text-[#C9A84C] transition-colors text-sm font-medium">
                  Services <ChevronDown className="w-4 h-4" />
                </button>
                {servicesOpen && (
                  <div className="absolute top-full left-0 pt-4 w-[480px]">
                    <div className="bg-white rounded-lg shadow-2xl border border-[#C9A84C]/20 p-6">
                      <div className="grid grid-cols-2 gap-4">
                        {SERVICES.map((service) => (
                          <Link
                            key={service.slug}
                            href={`/services/${service.slug}`}
                            className="block p-3 rounded-lg hover:bg-[#F5F5F0] transition-colors"
                          >
                            <div className="font-serif text-sm font-semibold text-[#0B1B2B]">
                              {service.title}
                            </div>
                            <div className="text-xs text-[#5A6A7A] mt-1 line-clamp-2">
                              {service.short}
                            </div>
                          </Link>
                        ))}
                      </div>
                      <Link
                        href="/services"
                        className="block mt-4 pt-4 border-t border-gray-100 text-sm text-[#C9A84C] font-medium hover:underline"
                      >
                        All Services →
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              {/* Service Areas Dropdown */}
              <div
                className="relative group"
                onMouseEnter={() => setAreasOpen(true)}
                onMouseLeave={() => setAreasOpen(false)}
              >
                <button className="flex items-center gap-1 text-white/90 hover:text-[#C9A84C] transition-colors text-sm font-medium">
                  Service Areas <ChevronDown className="w-4 h-4" />
                </button>
                {areasOpen && (
                  <div className="absolute top-full left-0 pt-4 w-[320px]">
                    <div className="bg-white rounded-lg shadow-2xl border border-[#C9A84C]/20 p-6">
                      <div className="grid grid-cols-2 gap-2">
                        {LOCATIONS.map((loc) => (
                          <Link
                            key={loc.slug}
                            href={`/${loc.slug}`}
                            className="block p-2 rounded-lg hover:bg-[#F5F5F0] transition-colors text-sm text-[#0B1B2B] font-medium"
                          >
                            {loc.name}, {loc.state}
                          </Link>
                        ))}
                      </div>
                      <Link
                        href="/#where-we-work"
                        className="block mt-4 pt-4 border-t border-gray-100 text-sm text-[#C9A84C] font-medium hover:underline"
                      >
                        See all service areas →
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              <Link
                href="/about"
                className="text-white/90 hover:text-[#C9A84C] transition-colors text-sm font-medium"
              >
                About
              </Link>
              <Link
                href="/testimonials"
                className="text-white/90 hover:text-[#C9A84C] transition-colors text-sm font-medium"
              >
                Testimonials
              </Link>
              <Link
                href="/blog"
                className="text-white/90 hover:text-[#C9A84C] transition-colors text-sm font-medium"
              >
                Blog
              </Link>
              <Link
                href="/contact"
                className="text-white/90 hover:text-[#C9A84C] transition-colors text-sm font-medium"
              >
                Contact
              </Link>
            </nav>

            {/* Phone + CTA */}
            <div className="hidden lg:flex items-center gap-4">
              <a
                href={`tel:${BUSINESS.phoneRaw}`}
              className="flex items-center gap-2 text-white/90 hover:text-[#C9A84C] transition-colors text-sm font-medium whitespace-nowrap"
              >
                <Phone className="w-4 h-4" />
                {BUSINESS.phone}
              </a>
              <Link
                href="/contact"
                className="bg-[#C9A84C] text-[#0B1B2B] px-5 py-2.5 rounded-md font-semibold text-sm hover:bg-[#b8973f] transition-colors"
              >
                Schedule a Consultation
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              className="lg:hidden text-white p-2"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div className="absolute inset-0 bg-black/50" onClick={() => setMobileOpen(false)} />
          <div className="absolute top-0 right-0 bottom-0 w-[85%] max-w-sm bg-[#0B1B2B] overflow-y-auto pt-20 pb-8">
            <div className="container">
              <div className="space-y-1">
                <Link href="/" className="block py-3 text-white border-b border-white/10 font-medium">
                  Home
                </Link>

                {/* Services accordion */}
                <button
                  className="flex items-center justify-between w-full py-3 text-white border-b border-white/10 font-medium"
                  onClick={() => setServicesOpen(!servicesOpen)}
                >
                  Services <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
                </button>
                {servicesOpen && (
                  <div className="pb-2 pl-4 space-y-1">
                    {SERVICES.map((service) => (
                      <Link
                        key={service.slug}
                        href={`/services/${service.slug}`}
                        className="block py-2 text-white/70 text-sm hover:text-[#C9A84C]"
                      >
                        {service.title}
                      </Link>
                    ))}
                    <Link href="/services" className="block py-2 text-[#C9A84C] text-sm font-medium">
                      All Services →
                    </Link>
                  </div>
                )}

                {/* Service Areas accordion */}
                <button
                  className="flex items-center justify-between w-full py-3 text-white border-b border-white/10 font-medium"
                  onClick={() => setAreasOpen(!areasOpen)}
                >
                  Service Areas <ChevronDown className={`w-4 h-4 transition-transform ${areasOpen ? "rotate-180" : ""}`} />
                </button>
                {areasOpen && (
                  <div className="pb-2 pl-4 grid grid-cols-2 gap-1">
                    {LOCATIONS.map((loc) => (
                      <Link
                        key={loc.slug}
                        href={`/${loc.slug}`}
                        className="block py-2 text-white/70 text-sm hover:text-[#C9A84C]"
                      >
                        {loc.name}, {loc.state}
                      </Link>
                    ))}
                  </div>
                )}

                <Link href="/about" className="block py-3 text-white border-b border-white/10 font-medium">
                  About
                </Link>
                <Link href="/testimonials" className="block py-3 text-white border-b border-white/10 font-medium">
                  Testimonials
                </Link>
                <Link href="/blog" className="block py-3 text-white border-b border-white/10 font-medium">
                  Blog
                </Link>
                <Link href="/contact" className="block py-3 text-white border-b border-white/10 font-medium">
                  Contact
                </Link>
              </div>

              {/* Mobile CTA */}
              <div className="mt-6 space-y-3">
                <a
                  href={`tel:${BUSINESS.phoneRaw}`}
                  className="flex items-center justify-center gap-2 w-full py-3 border border-[#C9A84C] text-[#C9A84C] rounded-md font-medium"
                >
                  <Phone className="w-4 h-4" /> Call {BUSINESS.phone}
                </a>
                <Link
                  href="/contact"
                  className="block text-center w-full py-3 bg-[#C9A84C] text-[#0B1B2B] rounded-md font-semibold"
                >
                  Schedule a Consultation
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
