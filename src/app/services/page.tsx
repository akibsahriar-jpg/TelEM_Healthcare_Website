import type { Metadata } from "next";
import { ScrollReveal } from "@/components/ScrollReveal";
import { BackgroundGradient } from "@/components/BackgroundGradient";
import { GradientButton } from "@/components/GradientButton";

export const metadata: Metadata = {
  title: "Services | TelEM Healthcare",
  description:
    "Explore TelEM Healthcare's comprehensive remote monitoring solutions: contactless RPM with radar sensors, 24/7 EM-physician-led clinical oversight, and readmission reduction programs for skilled nursing facilities and senior living.",
};

const integrationSteps = [
  {
    step: "01",
    title: "Clinical Assessment",
    description:
      "We evaluate your patient population, existing workflows, and staffing model to design a monitoring program tailored to your facility.",
  },
  {
    step: "02",
    title: "Sensor Deployment",
    description:
      "Contactless radar sensors are installed in target rooms with zero disruption to daily operations. No patient onboarding required.",
  },
  {
    step: "03",
    title: "Protocol Alignment",
    description:
      "Our clinical team collaborates with your nursing leadership to define escalation pathways, notification preferences, and communication protocols.",
  },
  {
    step: "04",
    title: "Ongoing Oversight",
    description:
      "24/7 EM-physician monitoring begins immediately. Your staff receives regular clinical summaries, trend reports, and real-time escalation support.",
  },
];

export default function ServicesPage() {
  return (
    <div className="overflow-hidden">
      {/* ==================== HERO ==================== */}
      <section className="relative bg-charcoal pt-44 pb-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-emerald">
              Our Solutions
            </p>
            <h1 className="mt-4 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              Comprehensive Remote Monitoring Solutions
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-gray-400">
              Three integrated capabilities — contactless sensing, EM-physician
              oversight, and proactive intervention protocols — engineered to
              reduce readmissions and detect clinical deterioration before it
              becomes an emergency.
            </p>
          </div>
        </div>
        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* ==================== SERVICE 1: RPM ==================== */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal>
            <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
              {/* Left: Content */}
              <div>
                <p className="text-sm font-semibold uppercase tracking-widest text-emerald">
                  Service 01
                </p>
                <h2 className="mt-3 text-3xl font-bold tracking-tight text-charcoal sm:text-4xl">
                  Remote Patient Monitoring
                </h2>
                <p className="mt-6 text-base leading-relaxed text-gray-500">
                  Continuous vital sign monitoring powered by contactless radar
                  sensors. Heart rate, respiratory rate, movement patterns, and
                  sleep quality are captured in real time — without wearables, without
                  patient interaction, and without compliance burden.
                </p>
                <ul className="mt-8 space-y-4">
                  {[
                    "Contactless radar sensors installed in-room — no wearables required",
                    "Continuous vitals streaming: heart rate, respiratory rate, movement",
                    "Zero patient compliance burden — monitoring happens automatically",
                    "HIPAA-compliant data pipeline with end-to-end encryption",
                    "Real-time trend analytics surfaced to clinical dashboards",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        className="mt-0.5 shrink-0 text-evergreen"
                      >
                        <path
                          d="M6 10L9 13L14 7"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span className="text-sm leading-relaxed text-gray-600">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right: Visual */}
              <div className="overflow-hidden rounded-2xl">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://images.unsplash.com/photo-1551076805-e1869033e561?w=600&h=500&fit=crop&q=80"
                  alt="Medical monitoring equipment displaying patient vital signs"
                  className="h-[360px] w-full object-cover"
                />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ==================== SERVICE 2: EM-LED MONITORING ==================== */}
      <section className="bg-soft-white py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal>
            <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
              {/* Left: Visual */}
              <div className="order-2 flex items-center justify-center rounded-2xl border border-gray-200 bg-white p-12 lg:order-1 lg:p-16">
                <div className="w-full max-w-xs space-y-4">
                  {[
                    { label: "Heart Rate", value: "72 bpm", status: "normal" },
                    { label: "Resp. Rate", value: "16 /min", status: "normal" },
                    { label: "Movement", value: "Flagged", status: "alert" },
                  ].map((metric) => (
                    <div
                      key={metric.label}
                      className="flex items-center justify-between rounded-xl border border-gray-200 bg-soft-white px-5 py-4"
                    >
                      <div>
                        <p className="text-xs font-medium uppercase tracking-wide text-gray-400">
                          {metric.label}
                        </p>
                        <p className="mt-0.5 text-lg font-semibold text-charcoal">
                          {metric.value}
                        </p>
                      </div>
                      <span
                        className={`inline-flex h-3 w-3 rounded-full ${
                          metric.status === "alert"
                            ? "bg-amber-400"
                            : "bg-evergreen"
                        }`}
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Right: Content */}
              <div className="order-1 lg:order-2">
                <p className="text-sm font-semibold uppercase tracking-widest text-emerald">
                  Service 02
                </p>
                <h2 className="mt-3 text-3xl font-bold tracking-tight text-charcoal sm:text-4xl">
                  EM-Led Clinical Monitoring
                </h2>
                <p className="mt-6 text-base leading-relaxed text-gray-500">
                  Data without clinical judgment is just noise. TelEM's
                  board-certified emergency medicine physicians review vital sign
                  trends around the clock, triaging alerts and coordinating
                  directly with on-site nursing staff when intervention is
                  needed.
                </p>
                <ul className="mt-8 space-y-4">
                  {[
                    "24/7 oversight by board-certified emergency medicine physicians",
                    "Trend-based clinical review — not just threshold alerting",
                    "Direct coordination with on-site nursing and care teams",
                    "Structured escalation protocols for clinical deterioration",
                    "Clinical summaries and shift reports delivered to facility leadership",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        className="mt-0.5 shrink-0 text-evergreen"
                      >
                        <path
                          d="M6 10L9 13L14 7"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span className="text-sm leading-relaxed text-gray-600">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ==================== SERVICE 3: READMISSION REDUCTION ==================== */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal>
            <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
              {/* Left: Content */}
              <div>
                <p className="text-sm font-semibold uppercase tracking-widest text-emerald">
                  Service 03
                </p>
                <h2 className="mt-3 text-3xl font-bold tracking-tight text-charcoal sm:text-4xl">
                  Readmission Reduction Program
                </h2>
                <p className="mt-6 text-base leading-relaxed text-gray-500">
                  Hospital readmissions within 30 days are costly, harmful, and
                  often preventable. TelEM's proactive intervention protocols
                  identify early signs of clinical deterioration and trigger
                  timely action — keeping patients stable and out of the
                  emergency department.
                </p>
                <ul className="mt-8 space-y-4">
                  {[
                    "Proactive intervention protocols for high-risk post-acute patients",
                    "Early detection of respiratory decline, cardiac changes, and mobility shifts",
                    "Measurable outcomes: readmission rates, ER transfer rates, intervention timelines",
                    "Detailed reporting for CMS compliance and quality program alignment",
                    "Continuous protocol refinement based on outcomes data",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        className="mt-0.5 shrink-0 text-evergreen"
                      >
                        <path
                          d="M6 10L9 13L14 7"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span className="text-sm leading-relaxed text-gray-600">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right: Visual */}
              <div className="flex items-center justify-center rounded-2xl border border-gray-200 bg-soft-white p-12 lg:p-16">
                <div className="w-full max-w-xs space-y-5">
                  <div className="text-center">
                    <p className="text-5xl font-bold tracking-tight text-evergreen">
                      67%
                    </p>
                    <p className="mt-2 text-sm font-medium text-charcoal">
                      Reduction in 30-Day Readmissions
                    </p>
                  </div>
                  <div className="h-px bg-gray-200" />
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <p className="text-2xl font-bold tracking-tight text-charcoal">
                        &lt;15min
                      </p>
                      <p className="mt-1 text-xs text-gray-500">
                        Avg. Response Time
                      </p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold tracking-tight text-charcoal">
                        24/7
                      </p>
                      <p className="mt-1 text-xs text-gray-500">
                        Physician Oversight
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ==================== HEALTHCARE IMAGE ==================== */}
      <section className="bg-soft-white py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal>
            <div className="overflow-hidden rounded-2xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=1200&h=500&fit=crop&q=80"
                alt="Healthcare team collaborating on patient care plans"
                className="h-[320px] w-full object-cover md:h-[400px]"
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ==================== PARTNERSHIP MODEL ==================== */}
      <section className="bg-charcoal py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal>
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-semibold uppercase tracking-widest text-emerald">
                Partnership Model
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                We Augment Your Team — We Never Replace It
              </h2>
              <p className="mt-4 text-gray-400">
                TelEM is designed to integrate seamlessly with your existing
                clinical operations. Our remote monitoring infrastructure and
                EM-physician oversight strengthen your on-site staff — providing
                an additional layer of surveillance without adding complexity to
                daily workflows.
              </p>
            </div>
          </ScrollReveal>

          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {integrationSteps.map((item, i) => (
              <ScrollReveal key={item.step} delay={i * 100}>
                <BackgroundGradient
                  containerClassName="rounded-3xl h-full"
                  className="rounded-3xl bg-charcoal p-8 md:p-10 h-full flex flex-col"
                >
                  <span className="text-xs font-bold uppercase tracking-widest text-emerald">
                    Step {item.step}
                  </span>
                  <h3 className="mt-3 text-lg font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-gray-400">
                    {item.description}
                  </p>
                </BackgroundGradient>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={200}>
            <BackgroundGradient
              containerClassName="mt-16 rounded-3xl"
              className="rounded-3xl bg-gray-800/90 p-8 md:p-12"
            >
              <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                {[
                  {
                    title: "Your Staff",
                    description:
                      "On-site nurses, CNAs, and clinical leadership continue providing direct patient care with full autonomy.",
                  },
                  {
                    title: "TelEM Layer",
                    description:
                      "24/7 remote monitoring, trend analysis, and EM-physician escalation support augment your existing coverage.",
                  },
                  {
                    title: "Shared Outcomes",
                    description:
                      "Collaborative accountability for readmission reduction, early intervention, and patient safety metrics.",
                  },
                ].map((col) => (
                  <div key={col.title}>
                    <h4 className="font-semibold text-emerald">{col.title}</h4>
                    <p className="mt-2 text-sm leading-relaxed text-gray-400">
                      {col.description}
                    </p>
                  </div>
                ))}
              </div>
            </BackgroundGradient>
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
                  See How TelEM Works in Your Facility
                </h2>
                <p className="mx-auto mt-4 max-w-xl text-gray-400">
                  Schedule a clinical demo tailored to your patient population,
                  staffing model, and operational goals. No obligation — just a
                  transparent look at what proactive monitoring can deliver.
                </p>
                <div className="mt-8">
                  <GradientButton href="/contact" variant="primary">
                    Book a Demo
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
