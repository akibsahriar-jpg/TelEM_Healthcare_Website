import type { Metadata } from "next";
import { ScrollReveal } from "@/components/ScrollReveal";
import { GradientButton } from "@/components/GradientButton";

export const metadata: Metadata = {
  title: "Privacy Policy | TelEM Healthcare",
  description:
    "TelEM Healthcare privacy policy — draft pending legal review.",
  robots: {
    index: false,
    follow: false,
    googleBot: { index: false, follow: false },
  },
};

const sections = [
  {
    heading: "1. Introduction",
    body: 'This Privacy Policy describes how TelEM Healthcare ("TelEM," "we," "us," or "our") collects, uses, and shares information when you visit our website, request a demo, or otherwise interact with our services. We are committed to protecting the privacy of website visitors, prospective customers, and patients whose information we may handle on behalf of healthcare facility partners.',
  },
  {
    heading: "2. Information We Collect",
    body: "We collect information you provide directly to us — such as your name, organization, professional role, email address, phone number, and any free-text message you submit through our contact or demo-request forms. We may also automatically collect technical information about your visit, including IP address, browser type, device information, pages viewed, and referring URLs, through standard web analytics technologies.",
  },
  {
    heading: "3. Protected Health Information (PHI)",
    body: "When TelEM provides clinical monitoring services to a healthcare facility under a Business Associate Agreement (BAA), we may receive, transmit, or store Protected Health Information as defined by HIPAA. PHI is handled exclusively in accordance with the terms of our BAAs, applicable HIPAA Privacy and Security Rules, and our internal safeguards. We do not use PHI for marketing or any purpose outside of authorized clinical care delivery.",
  },
  {
    heading: "4. How We Use Information",
    body: "We use the information we collect to respond to inquiries and demo requests, provide and improve our services, communicate updates about our products, comply with legal obligations, and protect the security and integrity of our platform. We do not sell personal information.",
  },
  {
    heading: "5. How We Share Information",
    body: "We may share information with service providers who perform functions on our behalf — such as cloud hosting, email delivery, and analytics — under contractual confidentiality obligations. We may also disclose information when required by law, in response to lawful requests by public authorities, or to protect the rights, property, or safety of TelEM, our users, or others. PHI is shared only as permitted under HIPAA and the applicable BAA.",
  },
  {
    heading: "6. Data Security",
    body: "We maintain administrative, physical, and technical safeguards designed to protect the information we hold. This includes encryption of data in transit (TLS) and at rest (AES-256), role-based access controls, multi-factor authentication, audit logging, and regular security assessments. Despite these measures, no method of transmission or storage is completely secure, and we cannot guarantee absolute security.",
  },
  {
    heading: "7. Your Rights and Choices",
    body: "Depending on your jurisdiction, you may have rights to access, correct, delete, or restrict the use of personal information you have provided to us. Patients whose PHI is held by TelEM should direct rights requests to the covered entity (their healthcare facility), as required by HIPAA. To exercise rights regarding personal information you have provided directly to TelEM, contact us using the details below.",
  },
  {
    heading: "8. Cookies and Tracking Technologies",
    body: "Our website uses cookies and similar technologies to operate the site, remember preferences, and measure usage. You can control cookies through your browser settings. Disabling certain cookies may affect website functionality.",
  },
  {
    heading: "9. Children's Privacy",
    body: "Our services are not directed to individuals under the age of 18, and we do not knowingly collect personal information from children. If we learn we have collected information from a child without verified parental consent, we will delete it.",
  },
  {
    heading: "10. Changes to This Privacy Policy",
    body: 'We may update this Privacy Policy from time to time to reflect changes to our practices or for legal, operational, or regulatory reasons. The "Last updated" date above reflects the most recent revision.',
  },
  {
    heading: "11. Contact Us",
    body: "If you have questions about this Privacy Policy or our data practices, contact us at info@telemhealthcare.com or through the contact form on our website.",
  },
];

export default function PrivacyPolicyPage() {
  return (
    <div className="overflow-hidden">
      {/* HERO */}
      <section className="relative bg-charcoal pt-44 pb-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal>
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-widest text-emerald">
                Legal
              </p>
              <h1 className="mt-3 font-heading text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                Privacy Policy
              </h1>
              <p className="mt-6 max-w-2xl font-body text-lg leading-relaxed text-gray-400">
                How TelEM Healthcare collects, uses, and protects information.
              </p>
            </div>
          </ScrollReveal>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-soft-white to-transparent" />
      </section>

      {/* CONTENT */}
      <section className="bg-soft-white py-20">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          {/* Draft banner */}
          <div className="rounded-2xl border border-amber-300 bg-amber-50 p-5 text-amber-900">
            <p className="text-xs font-semibold uppercase tracking-widest">
              Draft — Pending Legal Review
            </p>
            <p className="mt-2 text-sm leading-relaxed">
              This document is a working draft prepared as a starting point.
              It has not been reviewed or approved by legal counsel and
              should not be relied upon as legally binding until finalized.
            </p>
          </div>

          <p className="mt-8 text-xs font-medium uppercase tracking-widest text-gray-500">
            Last updated: [Date pending]
          </p>

          <div className="mt-4 space-y-10">
            {sections.map((section) => (
              <div key={section.heading}>
                <h2 className="font-heading text-xl font-bold tracking-tight text-charcoal">
                  {section.heading}
                </h2>
                <p className="mt-3 font-body text-sm leading-relaxed text-gray-600">
                  {section.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="rounded-3xl bg-charcoal p-12 text-center md:p-16">
            <h2 className="font-heading text-2xl font-bold tracking-tight text-white sm:text-3xl">
              Questions about how we handle your data?
            </h2>
            <p className="mx-auto mt-4 max-w-xl font-body text-gray-400">
              Our team is happy to walk through TelEM&apos;s privacy and
              compliance posture in detail.
            </p>
            <div className="mt-8">
              <GradientButton href="/contact" variant="primary">
                Contact Us
              </GradientButton>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
