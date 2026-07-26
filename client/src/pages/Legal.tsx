import { BUSINESS } from "@/lib/siteData";
import { useSEO } from "@/lib/seo";
import { Reveal } from "@/components/Reveal";
import Breadcrumb from "@/components/Breadcrumb";

export function Disclaimer() {
  useSEO({
    title: "Disclaimer | AEIM Wealth Management",
    description: "Legal disclaimer for AEIM Wealth Management. Advisory services offered through AEIM Wealth Management.",
    canonical: "/disclaimer",
  });

  return (
    <>
      <section className="relative bg-[#0B1B2B] pt-32 pb-12 lg:pt-40 lg:pb-16">
        <div className="container">
          <Reveal>
            <h1 className="font-serif text-4xl font-bold text-white">Disclaimer</h1>
            <div className="mt-4 h-1 w-16 bg-[#C9A84C]" />
          </Reveal>
        </div>
      </section>

      <Breadcrumb crumbs={[{ label: "Disclaimer" }]} />

      <section className="bg-white">
        <div className="container py-16">
          <Reveal className="max-w-3xl space-y-6 text-base text-[#5A6A7A] leading-relaxed">
            <p>
              Advisory services offered through {BUSINESS.name}. This website is for informational purposes only and does not constitute investment, tax, or legal advice.
            </p>
            <p>
              All information provided on this website is believed to be accurate but is not guaranteed. Past performance is not indicative of future results. Investments involve risk, including the possible loss of principal.
            </p>
            <p>
              {BUSINESS.name} is an independent, fiduciary financial advisory firm. We do not earn commissions on product sales. All fees are disclosed transparently to clients.
            </p>
            <p>
              Nothing on this website should be construed as an offer to sell or a solicitation to buy any security. Such offers can only be made through appropriate disclosure documents.
            </p>
            <p>
              For personalized advice regarding your individual situation, please schedule a consultation with {BUSINESS.owner} at {BUSINESS.phone}.
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}

export function PrivacyPolicy() {
  useSEO({
    title: "Privacy Policy | AEIM Wealth Management",
    description: "Privacy policy for AEIM Wealth Management. How we collect, use, and protect your personal information.",
    canonical: "/privacy-policy",
  });

  return (
    <>
      <section className="relative bg-[#0B1B2B] pt-32 pb-12 lg:pt-40 lg:pb-16">
        <div className="container">
          <Reveal>
            <h1 className="font-serif text-4xl font-bold text-white">Privacy Policy</h1>
            <div className="mt-4 h-1 w-16 bg-[#C9A84C]" />
          </Reveal>
        </div>
      </section>

      <Breadcrumb crumbs={[{ label: "Privacy Policy" }]} />

      <section className="bg-white">
        <div className="container py-16">
          <Reveal className="max-w-3xl space-y-6 text-base text-[#5A6A7A] leading-relaxed">
            <h2 className="font-serif text-xl font-semibold text-[#0B1B2B]">Information We Collect</h2>
            <p>
              {BUSINESS.name} collects information you provide directly through our contact forms, phone calls, and consultations. This may include your name, phone number, email address, and any financial information you choose to share.
            </p>

            <h2 className="font-serif text-xl font-semibold text-[#0B1B2B]">How We Use Your Information</h2>
            <p>
              We use your information solely to provide financial advisory services, respond to inquiries, and communicate with you about your financial plan. We do not sell or share your information with third parties for marketing purposes.
            </p>

            <h2 className="font-serif text-xl font-semibold text-[#0B1B2B]">Data Security</h2>
            <p>
              We employ industry-standard security measures to protect your personal and financial information. Access to your data is restricted to authorized personnel only.
            </p>

            <h2 className="font-serif text-xl font-semibold text-[#0B1B2B]">Your Rights</h2>
            <p>
              You have the right to request access to, correction of, or deletion of your personal information. To exercise these rights, please contact us at {BUSINESS.email} or {BUSINESS.phone}.
            </p>

            <h2 className="font-serif text-xl font-semibold text-[#0B1B2B]">Contact Us</h2>
            <p>
              If you have questions about this privacy policy, please contact {BUSINESS.name} at {BUSINESS.address}, call {BUSINESS.phone}, or email {BUSINESS.email}.
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
