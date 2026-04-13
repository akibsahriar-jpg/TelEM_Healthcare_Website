import type { Metadata } from "next";
import Link from "next/link";
import { ScrollReveal } from "@/components/ScrollReveal";
import { ResourcesContent } from "./ResourcesContent";
import { GradientButton } from "@/components/GradientButton";

export const metadata: Metadata = {
  title: "Resources | TelEM Healthcare",
  description:
    "Research, case studies, whitepapers, and industry insights on contactless remote patient monitoring, readmission reduction, and post-acute care innovation.",
};

const resources = [
  {
    category: "Research",
    title: "The Impact of Contactless RPM on 30-Day Readmission Rates",
    description:
      "A multi-site analysis of radar-based remote patient monitoring and its measurable effect on reducing 30-day hospital readmissions in skilled nursing facilities.",
    href: "#",
  },
  {
    category: "Case Study",
    title: "SNF Case Study: 67% Readmission Reduction",
    description:
      "How a 120-bed skilled nursing facility in the Midwest achieved a 67% reduction in 30-day readmissions within six months of deploying TelEM's contactless monitoring platform.",
    href: "#",
  },
  {
    category: "Whitepaper",
    title: "Radar-Based Vital Sign Monitoring: A Technical Overview",
    description:
      "An in-depth look at the radar sensing technology behind TelEM's contactless monitoring system, including accuracy benchmarks and clinical validation data.",
    href: "#",
  },
  {
    category: "Industry News",
    title: "CMS RPM Reimbursement Guide 2026",
    description:
      "A comprehensive breakdown of the latest CMS reimbursement codes and billing guidelines for remote patient monitoring programs in post-acute care settings.",
    href: "#",
  },
  {
    category: "Research",
    title:
      "Early Detection of Respiratory Deterioration in Post-Acute Settings",
    description:
      "Clinical evidence supporting continuous respiratory trend monitoring for early identification of COPD exacerbations and pneumonia onset in post-acute populations.",
    href: "#",
  },
  {
    category: "Whitepaper",
    title:
      "Implementing Remote Monitoring Without Disrupting Clinical Workflows",
    description:
      "Best practices for integrating contactless RPM into existing nursing workflows, with lessons learned from deployments across SNFs and senior living communities.",
    href: "#",
  },
];

const categories = [
  "All",
  "Research",
  "Case Study",
  "Whitepaper",
  "Industry News",
] as const;

export default function ResourcesPage() {
  return (
    <div className="overflow-hidden">
      {/* ==================== HERO ==================== */}
      <section className="relative bg-charcoal pt-44 pb-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal>
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-widest text-emerald">
                Resources
              </p>
              <h1 className="mt-3 font-heading text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                Research &amp; Insights
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-gray-400 font-body">
                Evidence-based resources for healthcare operators evaluating
                contactless remote patient monitoring. Explore our research,
                case studies, and implementation guides.
              </p>
            </div>
          </ScrollReveal>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-soft-white to-transparent" />
      </section>

      {/* ==================== RESOURCES CONTENT ==================== */}
      <ResourcesContent resources={resources} categories={categories} />

      {/* ==================== HEALTHCARE IMAGE ==================== */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal>
            <div className="overflow-hidden rounded-2xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1584982751601-97dcc096659c?w=1200&h=500&fit=crop&q=80"
                alt="Medical research team analyzing patient monitoring data"
                className="h-[280px] w-full object-cover md:h-[360px]"
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ==================== NEWSLETTER CTA ==================== */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal>
            <div className="relative overflow-hidden rounded-3xl bg-charcoal p-12 text-center md:p-20">
              <div className="pointer-events-none absolute inset-0 opacity-10">
                <svg
                  className="h-full w-full"
                  viewBox="0 0 800 400"
                  fill="none"
                >
                  {[80, 140, 200, 260].map((r, i) => (
                    <circle
                      key={r}
                      cx="400"
                      cy="200"
                      r={r}
                      stroke="#17A36B"
                      strokeWidth="0.5"
                      opacity={0.5 - i * 0.1}
                    />
                  ))}
                </svg>
              </div>
              <div className="relative z-10">
                <h2 className="font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  Stay Ahead of the Curve
                </h2>
                <p className="mx-auto mt-4 max-w-xl text-gray-400 font-body">
                  Get the latest research, industry updates, and clinical
                  insights delivered to your inbox. No spam — just the
                  information that matters.
                </p>
                <form className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row">
                  <input
                    type="email"
                    placeholder="Enter your work email"
                    className="flex-1 rounded-full border border-gray-700 bg-gray-800/60 px-5 py-3 text-sm text-white placeholder-gray-500 outline-none transition-colors focus:border-emerald/60 focus:ring-1 focus:ring-emerald/30"
                  />
                  <GradientButton variant="primary">Subscribe</GradientButton>
                </form>
                <p className="mt-4 text-xs text-gray-500">
                  By subscribing, you agree to receive occasional emails from
                  TelEM Healthcare. Unsubscribe at any time.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
