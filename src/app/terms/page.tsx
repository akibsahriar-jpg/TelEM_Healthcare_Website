import type { Metadata } from "next";
import { ScrollReveal } from "@/components/ScrollReveal";
import { GradientButton } from "@/components/GradientButton";

export const metadata: Metadata = {
  title: "Terms of Service | TelEM Healthcare",
  description:
    "TelEM Healthcare terms of service — draft pending legal review.",
  robots: {
    index: false,
    follow: false,
    googleBot: { index: false, follow: false },
  },
};

const sections = [
  {
    heading: "1. Acceptance of Terms",
    body: 'By accessing or using the TelEM Healthcare website or services (collectively, the "Services"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree, you may not use the Services. These Terms apply to all visitors, prospective customers, contracted facility partners, and authorized end users.',
  },
  {
    heading: "2. Description of Services",
    body: "TelEM provides remote patient monitoring software, clinical oversight services, and related care-coordination tools to licensed healthcare facilities and other authorized partners. Specific service scope, deliverables, and obligations are set forth in separate written agreements between TelEM and each facility partner.",
  },
  {
    heading: "3. Eligibility",
    body: "Access to clinical features of the Services is limited to authorized personnel of contracted facility partners. Marketing pages and demo-request forms are available to general business audiences. The Services are not intended for direct use by patients or by individuals under the age of 18.",
  },
  {
    heading: "4. Account Responsibilities",
    body: "Authorized users are responsible for maintaining the confidentiality of their account credentials and for all activity that occurs under their account. You agree to notify TelEM immediately of any unauthorized use or suspected breach of security.",
  },
  {
    heading: "5. Acceptable Use",
    body: "You agree not to misuse the Services, including by attempting to gain unauthorized access, interfering with operation, reverse-engineering, scraping, or using the Services in violation of applicable law. PHI accessed through the Services may only be used for permitted clinical purposes consistent with HIPAA and the applicable Business Associate Agreement.",
  },
  {
    heading: "6. Intellectual Property",
    body: "All content, software, designs, trademarks, and other materials made available through the Services are owned by TelEM or its licensors and are protected by intellectual property law. Except as expressly permitted, you may not copy, modify, distribute, or create derivative works without prior written consent.",
  },
  {
    heading: "7. Medical Disclaimer",
    body: "TelEM provides clinical decision support and monitoring tools intended to augment — not replace — the judgment of licensed clinicians. Information surfaced by the Services should be interpreted in the context of each patient's full clinical picture by qualified healthcare professionals. The Services are not a substitute for in-person clinical evaluation, emergency care, or independent professional judgment.",
  },
  {
    heading: "8. Disclaimer of Warranties",
    body: 'The Services are provided "as is" and "as available" without warranties of any kind, whether express or implied, including warranties of merchantability, fitness for a particular purpose, non-infringement, or uninterrupted operation. TelEM does not warrant that the Services will be error-free or meet every facility\'s specific requirements.',
  },
  {
    heading: "9. Limitation of Liability",
    body: "To the fullest extent permitted by law, TelEM shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or related to your use of the Services. TelEM's total aggregate liability for any direct damages shall not exceed the amounts paid to TelEM under the applicable facility agreement during the twelve months preceding the claim.",
  },
  {
    heading: "10. Indemnification",
    body: "You agree to indemnify and hold harmless TelEM, its officers, directors, employees, and affiliates from any claims, damages, losses, or expenses (including reasonable attorneys' fees) arising out of your breach of these Terms, your misuse of the Services, or your violation of applicable law.",
  },
  {
    heading: "11. Termination",
    body: "TelEM may suspend or terminate access to the Services at any time for breach of these Terms, applicable agreements, or law. Termination of facility-level agreements is governed by the terms of those separate agreements. Sections of these Terms intended to survive termination — including intellectual property, disclaimers, and limitation of liability — will continue to apply.",
  },
  {
    heading: "12. Governing Law",
    body: "These Terms are governed by the laws of the jurisdiction in which TelEM Healthcare is headquartered, without regard to conflict-of-laws principles. Any dispute shall be resolved in the courts of that jurisdiction, except where applicable law provides otherwise.",
  },
  {
    heading: "13. Changes to These Terms",
    body: 'We may update these Terms from time to time. The "Last updated" date above reflects the most recent revision. Material changes will be communicated through the Services or via direct notice to facility partners.',
  },
  {
    heading: "14. Contact Us",
    body: "Questions about these Terms can be directed to info@telemhealthcare.com or through the contact form on our website.",
  },
];

export default function TermsOfServicePage() {
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
                Terms of Service
              </h1>
              <p className="mt-6 max-w-2xl font-body text-lg leading-relaxed text-gray-400">
                The terms that govern use of TelEM Healthcare&apos;s website and
                services.
              </p>
            </div>
          </ScrollReveal>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-soft-white to-transparent" />
      </section>

      {/* CONTENT */}
      <section className="bg-soft-white py-20">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
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
              Questions about these Terms?
            </h2>
            <p className="mx-auto mt-4 max-w-xl font-body text-gray-400">
              Our team is happy to clarify any aspect of TelEM&apos;s service
              terms or facility-level agreements.
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
