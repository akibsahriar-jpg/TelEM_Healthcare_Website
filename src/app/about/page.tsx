import type { Metadata } from "next";
import Image from "next/image";
import { ScrollReveal } from "@/components/ScrollReveal";
import { BackgroundGradient } from "@/components/BackgroundGradient";
import { GradientButton } from "@/components/GradientButton";

export const metadata: Metadata = {
  title: "About | TelEM Healthcare",
  description:
    "Meet the founding clinical team behind TelEM Healthcare. Emergency medicine physicians driving proactive care transitions and remote patient monitoring for skilled nursing and senior living facilities.",
};

const values = [
  {
    title: "Clinical Rigor",
    description:
      "Every protocol, every escalation pathway, every alert threshold is built on evidence-based medicine, not marketing claims. We hold ourselves to the same standards as a hospital floor.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path
          d="M16 4L20 12H28L22 17L24 26L16 21L8 26L10 17L4 12H12L16 4Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Patient-First",
    description:
      "Technology serves the patient, not the other way around. Contactless monitoring means zero compliance burden: no wearables to charge, no buttons to press, no workflows to learn.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path
          d="M16 28C16 28 4 20 4 13C4 9.68 6.68 7 10 7C12.2 7 14.16 8.2 15.2 10H16.8C17.84 8.2 19.8 7 22 7C25.32 7 28 9.68 28 13C28 20 16 28 16 28Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Innovation",
    description:
      "Radar-based contactless sensing, real-time trend analytics, and EM-physician-led oversight represent a fundamentally new approach to remote monitoring: quiet innovation that delivers measurable results.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="16" r="4" stroke="currentColor" strokeWidth="1.5" />
        <path
          d="M16 4V8M16 24V28M4 16H8M24 16H28M7.5 7.5L10.3 10.3M21.7 21.7L24.5 24.5M24.5 7.5L21.7 10.3M10.3 21.7L7.5 24.5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "Partnership",
    description:
      "We augment your clinical team and never replace them. TelEM is designed to integrate with existing workflows, strengthen on-site staff, and create shared accountability for patient outcomes.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <circle cx="10" cy="12" r="4" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="22" cy="12" r="4" stroke="currentColor" strokeWidth="1.5" />
        <path
          d="M2 26C2 22 5.6 18 10 18C12 18 13.8 18.8 15.2 20"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M16.8 20C18.2 18.8 20 18 22 18C26.4 18 30 22 30 26"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
];

export default function AboutPage() {
  return (
    <div className="overflow-hidden">
      {/* ==================== HERO ==================== */}
      <section className="relative bg-charcoal pt-44 pb-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-emerald">
              About TelEM
            </p>
            <h1 className="mt-4 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              Redefining Remote Monitoring
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-gray-400">
              TelEM Healthcare was founded on a singular conviction: that
              transitions in care need to be effective and patient-focused.
              Post-acute care and senior living patients deserve higher
              levels of clinical vigilance and multidisciplinary
              communication to keep them healthy and allow aging with
              dignity.
            </p>
          </div>
        </div>
        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* ==================== FOUNDER ==================== */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center">
              <p className="text-sm font-semibold uppercase tracking-widest text-emerald">
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-charcoal sm:text-4xl">
                Leadership Rooted in Frontline Medicine
              </h2>
            </div>
          </ScrollReveal>

          <div className="mt-16">
            <ScrollReveal delay={100}>
              <BackgroundGradient
                containerClassName="rounded-3xl max-w-5xl mx-auto"
                className="rounded-3xl bg-white p-10 md:p-12"
              >
                <div className="grid grid-cols-1 gap-10 md:grid-cols-[300px_1fr] items-start">
                  {/* Photo */}
                  <div className="mx-auto md:mx-0">
                    <div className="overflow-hidden rounded-2xl">
                      <Image
                        src="/dr-usama.png"
                        alt="Dr. Usama Khalid"
                        width={300}
                        height={300}
                        className="h-auto w-full object-cover"
                      />
                    </div>
                  </div>

                  {/* Bio */}
                  <div className="flex flex-col justify-center">
                    <h3 className="text-2xl font-bold text-charcoal">
                      Usama Khalid, MD, FACEP
                    </h3>
                    <p className="mt-2 text-sm font-semibold uppercase tracking-wide text-emerald">
                      Co-Founder & Chief Medical Officer
                    </p>
                    <p className="mt-1 text-sm font-medium text-gray-400">
                      Board-Certified Emergency Medicine | Fellowship-Trained
                      Advanced Emergency Ultrasonography
                    </p>
                    <div className="mt-6 space-y-4 text-base leading-relaxed text-gray-600">
                      <p>
                        Usama Khalid, MD, FACEP is a board-certified emergency
                        physician and co-founder of TelEM Healthcare.
                        Fellowship-trained with a Focused Practice Designation
                        in Advanced Emergency Ultrasonography, he brings deep
                        frontline experience across both academic and community
                        emergency departments.
                      </p>
                      <p>
                        Usama's work sits at the intersection of clinical
                        medicine and technology, where he advises on digital
                        health, AI-enabled care models, and operational
                        workflows that improve outcomes for high-risk patients.
                      </p>
                      <p>
                        At TelEM Healthcare, he leads the development of remote
                        monitoring and care coordination programs for skilled
                        nursing facilities, with a focus on reducing avoidable
                        hospital readmissions and improving patient safety.
                      </p>
                    </div>
                  </div>
                </div>
              </BackgroundGradient>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ==================== MISSION ==================== */}
      <section className="bg-soft-white py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal>
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-semibold uppercase tracking-widest text-emerald">
                Our Mission
              </p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-charcoal sm:text-4xl">
                Proactive Surveillance, Not Reactive Crisis Management
              </h2>
              <div className="mt-8 rounded-2xl border border-emerald/20 bg-white p-8 md:p-12">
                <blockquote className="text-xl font-medium leading-relaxed text-charcoal md:text-2xl">
                  &ldquo;We believe every patient deserves proactive clinical
                  surveillance — not reactive crisis management.&rdquo;
                </blockquote>
              </div>
              <p className="mt-8 text-base leading-relaxed text-gray-500">
                Too many facilities rely on intermittent spot-checks and manual
                rounding to catch clinical deterioration. By the time symptoms
                are visible, the window for early intervention has often closed.
                TelEM exists to change that equation — turning ambient, continuous
                data into early warnings that enable timely, confident clinical
                decisions.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ==================== VALUES ==================== */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center">
              <p className="text-sm font-semibold uppercase tracking-widest text-emerald">
                What Guides Us
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-charcoal sm:text-4xl">
                Our Values
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-gray-500">
                These principles shape every clinical protocol, every product
                decision, and every partnership we build.
              </p>
            </div>
          </ScrollReveal>

          <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, i) => (
              <ScrollReveal key={value.title} delay={i * 100}>
                <BackgroundGradient
                  containerClassName="rounded-3xl h-full"
                  className="rounded-3xl bg-soft-white p-8 h-full flex flex-col"
                >
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-white text-evergreen">
                    {value.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-charcoal">
                    {value.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-gray-500">
                    {value.description}
                  </p>
                </BackgroundGradient>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== TEAM IMAGE ==================== */}
      <section className="bg-soft-white py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal>
            <div className="overflow-hidden rounded-2xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=1200&h=500&fit=crop&q=80"
                alt="Healthcare professionals collaborating in a clinical environment"
                className="h-[320px] w-full object-cover md:h-[400px]"
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ==================== CTA ==================== */}
      <section className="bg-soft-white py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal>
            <div className="relative overflow-hidden rounded-3xl bg-charcoal p-12 text-center md:p-20">
              {/* Decorative rings */}
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
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  Partner With a Team That Understands Clinical Reality
                </h2>
                <p className="mx-auto mt-4 max-w-xl text-gray-400">
                  We built TelEM for operators who demand clinical rigor, not
                  just technology demos. Schedule a conversation with our
                  leadership team.
                </p>
                <div className="mt-8">
                  <GradientButton href="/contact" variant="primary">
                    Get in Touch
                  </GradientButton>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
