import type { Metadata } from "next";
import Image from "next/image";
import { ScrollReveal } from "@/components/ScrollReveal";
import { BackgroundGradient } from "@/components/BackgroundGradient";
import { GradientButton } from "@/components/GradientButton";

export const metadata: Metadata = {
  title: "Services | TelEM Healthcare",
  description:
    "TelEM Healthcare's modular clinical workflows: tele-specialist support, contactless radar-based remote patient monitoring, and readmission reduction programs — engineered to reduce length of stay and readmissions.",
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
      "Contactless radar sensors are installed in target rooms with zero disruption to daily operations.",
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
      "Proactive clinical monitoring begins immediately. Your staff receives regular clinical input, trend reports and timely preventive support.",
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
              Versatile Clinical Integration Solutions
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-gray-400">
              Our modular clinical workflows are engineered to reduce length
              of stay, readmissions and logistic pain points in ensuring
              safe and effective patient disposition.
            </p>
          </div>
        </div>
        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* ==================== TELE-SPECIALIST SUPPORT ==================== */}
      <section id="tele-specialist-support" className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal>
            <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
              {/* Left: Content */}
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-charcoal sm:text-4xl">
                  Tele-specialist Support
                </h2>
                <p className="mt-6 text-base leading-relaxed text-gray-500">
                  Timely involvement of key consultative services with a
                  focus on assisting discharge planning and post-acute care
                  transitions – seamless integration with primary clinical
                  teams, and bridging the process with case management.
                </p>
                <ul className="mt-8 space-y-4">
                  {[
                    "Efficient patient selection process to identify the need for clinical support",
                    "Real-time needs assessment with case management staff",
                    "Creating a clinical support bridge for post-acute care placement",
                    "Providing continuity of care post discharge",
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
                <Image
                  src="/telemedicine-image.png"
                  alt="Specialist physician in a telemedicine video consultation with a patient"
                  width={1536}
                  height={1024}
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="h-auto w-full object-cover"
                />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ==================== REMOTE PATIENT MONITORING ==================== */}
      <section id="remote-patient-monitoring" className="bg-soft-white py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal>
            <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
              {/* Left: Visual */}
              <div className="order-2 overflow-hidden rounded-2xl lg:order-1">
                <Image
                  src="/radar-based.png"
                  alt="Radar-based contactless monitoring of vital signs at the bedside with live dashboard"
                  width={1432}
                  height={955}
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="h-auto w-full object-cover"
                />
              </div>

              {/* Right: Content */}
              <div className="order-1 lg:order-2">
                <h2 className="text-3xl font-bold tracking-tight text-charcoal sm:text-4xl">
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

            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ==================== READMISSION REDUCTION ==================== */}
      <section id="readmission-reduction" className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal>
            <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
              {/* Left: Content */}
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-charcoal sm:text-4xl">
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
              <div className="overflow-hidden rounded-2xl">
                <Image
                  src="/readmission-reduction.png"
                  alt="Patient journey from emergency department through acute care, post-acute care, and home"
                  width={1693}
                  height={929}
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="h-auto w-full object-contain"
                />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ==================== PARTNERSHIP MODEL ==================== */}
      <section id="partnership-model" className="bg-charcoal py-24">
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
