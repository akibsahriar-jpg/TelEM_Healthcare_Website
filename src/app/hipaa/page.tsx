import type { Metadata } from "next";
import { ScrollReveal } from "@/components/ScrollReveal";
import { GradientButton } from "@/components/GradientButton";

export const metadata: Metadata = {
  title: "HIPAA Compliance | TelEM Healthcare",
  description:
    "TelEM Healthcare HIPAA compliance overview — draft pending legal review.",
  robots: {
    index: false,
    follow: false,
    googleBot: { index: false, follow: false },
  },
};

const sections = [
  {
    heading: "1. Our HIPAA Commitment",
    body: "TelEM Healthcare operates as a Business Associate to the healthcare facilities we serve and is committed to full compliance with the Health Insurance Portability and Accountability Act (HIPAA) Privacy, Security, and Breach Notification Rules. Protecting Protected Health Information (PHI) is a foundational requirement of our platform — not a compliance afterthought.",
  },
  {
    heading: "2. Business Associate Agreements (BAAs)",
    body: "TelEM executes a written Business Associate Agreement with every covered entity facility partner before any PHI is shared, accessed, or processed through our platform. Our BAAs incorporate all required HIPAA terms and clearly define permitted uses, safeguards, breach notification procedures, and termination provisions.",
  },
  {
    heading: "3. Administrative Safeguards",
    body: "Our administrative safeguards include designated Privacy and Security Officers, documented policies and procedures governing PHI handling, role-based workforce access controls, regular risk assessments, ongoing security training for all personnel with PHI access, and formal incident-response procedures.",
  },
  {
    heading: "4. Physical Safeguards",
    body: "PHI processed through TelEM resides in HIPAA-compliant cloud infrastructure hosted in U.S. data centers with strict physical access controls, video surveillance, biometric authentication, and 24/7 on-site security personnel. TelEM workstations and devices used to access PHI are subject to endpoint security policies including disk encryption and remote-wipe capabilities.",
  },
  {
    heading: "5. Technical Safeguards",
    body: "Technical safeguards include encryption of PHI in transit (TLS 1.2 or higher) and at rest (AES-256), unique user authentication with multi-factor authentication, role-based access controls aligned to clinical responsibility, automatic session timeouts, comprehensive audit logging of all PHI access events, and continuous vulnerability scanning of our infrastructure.",
  },
  {
    heading: "6. PHI Handling Practices",
    body: "PHI is collected, transmitted, and stored solely for purposes authorized under our BAAs and the facility's underlying treatment, payment, and healthcare-operations needs. We do not use PHI for marketing, sell PHI under any circumstances, or process PHI for purposes outside of authorized clinical care delivery and operations.",
  },
  {
    heading: "7. Breach Notification",
    body: "In the event of a confirmed breach involving PHI, TelEM will notify the affected covered entity without unreasonable delay and in no event later than the timeframes required by HIPAA and the applicable BAA. Our breach response process includes containment, forensic investigation, root-cause analysis, remediation, and documented reporting.",
  },
  {
    heading: "8. Patient Rights",
    body: "Patients retain all rights afforded under HIPAA, including the right to access, amend, and receive an accounting of disclosures of their PHI. Patient rights requests should be directed to the covered entity (the patient's healthcare facility), which is the appropriate party to respond under HIPAA. TelEM supports facilities in fulfilling these requests as required by our BAAs.",
  },
  {
    heading: "9. Workforce Training",
    body: "All TelEM workforce members with potential access to PHI complete HIPAA training upon hire and at least annually thereafter. Training covers privacy obligations, security best practices, breach identification, and reporting procedures. Training completion is documented and audited.",
  },
  {
    heading: "10. Audit and Compliance Program",
    body: "TelEM maintains an ongoing compliance program that includes periodic internal audits, third-party security assessments, annual risk analyses, and SOC 2 Type II alignment. Findings are reviewed by leadership and tracked through remediation.",
  },
  {
    heading: "11. Contact Our Privacy Officer",
    body: "HIPAA-related questions, requests, or concerns can be directed to our Privacy Officer at info@telemhealthcare.com. We will respond promptly to all good-faith inquiries from facility partners, regulators, and individuals.",
  },
];

export default function HipaaCompliancePage() {
  return (
    <div className="overflow-hidden">
      {/* HERO */}
      <section className="relative bg-charcoal pt-44 pb-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal>
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-widest text-emerald">
                Compliance
              </p>
              <h1 className="mt-3 font-heading text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                HIPAA Compliance
              </h1>
              <p className="mt-6 max-w-2xl font-body text-lg leading-relaxed text-gray-400">
                How TelEM Healthcare protects Protected Health Information
                across our platform and clinical operations.
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
              It has not been reviewed or approved by legal or compliance
              counsel and should not be relied upon as legally binding until
              finalized.
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
              Need a Business Associate Agreement?
            </h2>
            <p className="mx-auto mt-4 max-w-xl font-body text-gray-400">
              Our compliance team can walk you through TelEM&apos;s HIPAA
              posture and provide BAA documentation on request.
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
