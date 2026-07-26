import { Phone, Clock, MapPin } from "lucide-react";
import { BUSINESS } from "@/lib/siteData";
import { Reveal } from "./Reveal";

export default function FindUsSection() {
  return (
    <section className="bg-white">
      <div className="container py-16 lg:py-24">
        <Reveal className="text-center mb-12">
          <p className="text-xs uppercase tracking-[0.2em] text-[#C9A84C] mb-3">Find Us</p>
          <h2 className="font-serif text-3xl lg:text-4xl font-bold text-[#0B1B2B] gold-underline-center inline-block">
            Proudly Based in Lisle, IL
          </h2>
          <p className="mt-6 max-w-2xl mx-auto text-base text-[#5A6A7A]">
            Stop by, call, or book online — we are always nearby when you need us.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact info */}
          <Reveal className="space-y-6">
            <div className="bg-[#0B1B2B] rounded-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <Phone className="w-5 h-5 text-[#C9A84C]" />
                <h3 className="font-serif text-xl font-semibold text-white">Phone</h3>
              </div>
              <a
                href={`tel:${BUSINESS.phoneRaw}`}
                className="text-2xl font-serif text-[#C9A84C] hover:underline"
              >
                {BUSINESS.phone}
              </a>
            </div>

            <div className="bg-[#F5F5F0] rounded-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <Clock className="w-5 h-5 text-[#C9A84C]" />
                <h3 className="font-serif text-xl font-semibold text-[#0B1B2B]">Hours</h3>
              </div>
              <ul className="space-y-2">
                {BUSINESS.hours.map((h) => (
                  <li key={h.day} className="flex justify-between text-sm">
                    <span className="font-medium text-[#0B1B2B]">{h.day}</span>
                    <span className="text-[#5A6A7A]">{h.time}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-[#F5F5F0] rounded-lg p-8">
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="w-5 h-5 text-[#C9A84C]" />
                <h3 className="font-serif text-xl font-semibold text-[#0B1B2B]">Address</h3>
              </div>
              <p className="text-base text-[#5A6A7A]">{BUSINESS.address}</p>
            </div>
          </Reveal>

          {/* Map */}
          <Reveal delay={0.1} className="rounded-lg overflow-hidden shadow-lg min-h-[400px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2979.1!2d-88.0708!3d41.7994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNjUwIFdhcnJlbnZpbGxlIFJkLCBTdWl0ZSAxMDAsIExpc2xlLCBJTCA2MDUzMg!5e0!3m2!1sen!2sus!4v1700000000000"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "400px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="AEIM Wealth Management office location"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
