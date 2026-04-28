import Link from "next/link";
import { RadarAnimation } from "@/components/RadarAnimation";
import { ScrollReveal } from "@/components/ScrollReveal";
import { BackgroundGradient } from "@/components/BackgroundGradient";
import { GradientButton } from "@/components/GradientButton";

const outcomes = [
  {
    stat: "2 days",
    label: "Reduction in length of stay",
    description:
      "Robust clinical support for case management teams facilitates post-acute placement.",
  },
  {
    stat: "24 hours",
    label: "Continuity of care post-discharge",
    description:
      "Close follow up ensures a safer transition of care after discharge.",
  },
  {
    stat: "100%",
    label: "Contactless monitoring",
    description:
      "Radar based physiological sensors require no patient interaction or wearables.",
  },
  {
    stat: ">50%",
    label: "Reduction in 30-day readmissions",
    description:
      "Early Detection of Clinical Deterioration prevents costly hospital returns.",
  },
];

const howItWorks = [
  {
    step: "01",
    title: "Sensor Deployment",
    description:
      "Contactless radar sensors are installed in patient rooms — no wearables, no compliance burden.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect
          x="4"
          y="4"
          width="24"
          height="24"
          rx="4"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <circle cx="16" cy="16" r="4" stroke="currentColor" strokeWidth="1.5" />
        <path
          d="M16 8V12M16 20V24M8 16H12M20 16H24"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    step: "02",
    title: "Continuous Trend Detection",
    description:
      "Vitals, respiratory patterns, and movement data stream in real time to our clinical platform.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path
          d="M4 20L10 14L16 18L22 10L28 16"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="10" cy="14" r="2" fill="currentColor" />
        <circle cx="16" cy="18" r="2" fill="currentColor" />
        <circle cx="22" cy="10" r="2" fill="currentColor" />
      </svg>
    ),
  },
  {
    step: "03",
    title: "Clinical Team Review",
    description:
      "EM physicians review flagged trends and coordinate with on-site nursing staff.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <circle cx="12" cy="10" r="4" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="22" cy="12" r="3" stroke="currentColor" strokeWidth="1.5" />
        <path
          d="M4 26C4 22 7.6 18 12 18C14.4 18 16.6 19 18 20.6"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M18 26C18 23.2 19.8 20 22 20C24.2 20 26 23.2 26 26"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    step: "04",
    title: "Proactive Intervention",
    description:
      "Issues are caught before they escalate — reducing ER visits, readmissions, and adverse events.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path
          d="M16 6L18.5 12H25L19.5 16L21.5 22L16 18.5L10.5 22L12.5 16L7 12H13.5L16 6Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

const services = [
  {
    title: "Tele-specialist Support",
    description:
      "Multi-specialty consultative support that assists discharge planning and post-acute care transitions.",
    href: "/services",
  },
  {
    title: "Remote Patient Monitoring",
    description:
      "Continuous, contactless vital sign monitoring using radar technology. No wearables. No patient burden.",
    href: "/services",
  },
  {
    title: "Readmission Reduction Program",
    description:
      "Proactive intervention protocols that catch clinical deterioration early — keeping patients stable and out of the emergency department.",
    href: "/services",
  },
  {
    title: "Partnership Model",
    description:
      "Seamless integration with your existing clinical workflows and staff. We augment, not replace.",
    href: "/services",
  },
];

const settings = [
  {
    name: "Skilled Nursing Facilities",
    description:
      "Reduce readmissions and catch deterioration early in post-acute populations.",
  },
  {
    name: "Senior Living Communities",
    description:
      "Proactive health monitoring that respects independence while ensuring safety.",
  },
  {
    name: "Hospital Systems",
    description:
      "Extend monitoring capabilities beyond the bedside for at-risk patient populations.",
  },
];

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* ==================== HERO ==================== */}
      <section className="relative flex min-h-screen items-center bg-charcoal pt-20">
        <RadarAnimation />
        <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              Proactive, integrated care for{" "}
              <span className="text-emerald">effective care transitions</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-gray-400">
              TelEM harnesses the power of digital health by placing it in
              the hands of practicing clinicians – reducing length of stay
              and readmissions while improving patient outcomes.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <GradientButton href="/contact" variant="primary">
                Book a Demo
              </GradientButton>
              <GradientButton href="/services" variant="secondary">
                Learn More
              </GradientButton>
            </div>
          </div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* ==================== CREDIBILITY ==================== */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center">
              <p className="text-sm font-semibold uppercase tracking-widest text-emerald">
                Trusted Clinical Infrastructure
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-charcoal sm:text-4xl">
                Built with focus, implemented with care
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-gray-500">
                Our carefully curated processes facilitate efficiency
                during the post-acute transition and beyond. This ensures
                that our patients get the care they need proactively
                without delay.
              </p>
            </div>
          </ScrollReveal>

          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
            {[
              {
                title: "Multidisciplinary Support",
                text: "Effective clinical outcomes from a team-based approach.",
              },
              {
                title: "Ambient Monitoring",
                text: "Using cutting-edge technology to proactively monitor vitals.",
              },
              {
                title: "Evidence-based Protocols",
                text: "Clinical workflows rooted in evidence-based medicine.",
              },
            ].map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 100}>
                <BackgroundGradient
                  containerClassName="rounded-3xl h-full"
                  className="rounded-3xl bg-white p-10 h-full flex flex-col"
                >
                  <h3 className="text-lg font-semibold text-charcoal">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-500">
                    {item.text}
                  </p>
                </BackgroundGradient>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== OUTCOMES ==================== */}
      <section className="bg-soft-white py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal>
            <p className="text-sm font-semibold uppercase tracking-widest text-emerald">
              Measurable Impact
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-charcoal sm:text-4xl">
              Outcomes That Matter
            </h2>
          </ScrollReveal>

          <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {outcomes.map((item, i) => (
              <ScrollReveal key={item.label} delay={i * 100}>
                <BackgroundGradient
                  containerClassName="rounded-3xl h-full"
                  className="rounded-3xl bg-white p-8 h-full flex flex-col"
                >
                  <p className="text-4xl font-bold tracking-tight text-evergreen">
                    {item.stat}
                  </p>
                  <p className="mt-2 font-semibold text-charcoal">
                    {item.label}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-gray-500">
                    {item.description}
                  </p>
                </BackgroundGradient>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== HOW IT WORKS ==================== */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center">
              <p className="text-sm font-semibold uppercase tracking-widest text-emerald">
                How It Works
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-charcoal sm:text-4xl">
                From Sensor to Intervention
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-gray-500">
                A seamless pipeline that transforms ambient data into
                actionable clinical intelligence.
              </p>
            </div>
          </ScrollReveal>

          <div className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
            {howItWorks.map((item, i) => (
              <ScrollReveal key={item.step} delay={i * 120}>
                <div className="relative">
                  {/* Connector line */}
                  {i < howItWorks.length - 1 && (
                    <div className="absolute right-0 top-8 hidden h-px w-12 bg-gray-200 translate-x-full lg:block" />
                  )}
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-soft-white text-evergreen">
                    {item.icon}
                  </div>
                  <span className="text-xs font-bold uppercase tracking-widest text-emerald">
                    Step {item.step}
                  </span>
                  <h3 className="mt-2 text-lg font-semibold text-charcoal">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-500">
                    {item.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== SERVICES ==================== */}
      <section className="bg-charcoal py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal>
            <p className="text-sm font-semibold uppercase tracking-widest text-emerald">
              What We Offer
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Our Services
            </h2>
          </ScrollReveal>

          <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service, i) => (
              <ScrollReveal key={service.title} delay={i * 100}>
                <BackgroundGradient
                  containerClassName="rounded-3xl h-full"
                  className="rounded-3xl h-full"
                >
                  <Link
                    href={service.href}
                    className="group flex h-full flex-col rounded-3xl bg-gray-800/90 p-8 transition-all hover:bg-gray-800"
                  >
                    <h3 className="text-xl font-semibold text-white group-hover:text-emerald">
                      {service.title}
                    </h3>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-gray-400">
                      {service.description}
                    </p>
                    <span className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-emerald">
                      Learn more
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        className="transition-transform group-hover:translate-x-1"
                      >
                        <path
                          d="M6 4L10 8L6 12"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </Link>
                </BackgroundGradient>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== SETTINGS ==================== */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal>
            <p className="text-sm font-semibold uppercase tracking-widest text-emerald">
              Where We Operate
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-charcoal sm:text-4xl">
              Purpose-Built for Post-Acute &amp; Senior Care
            </h2>
          </ScrollReveal>

          <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-3">
            {settings.map((setting, i) => (
              <ScrollReveal key={setting.name} delay={i * 100}>
                <BackgroundGradient
                  containerClassName="rounded-3xl h-full"
                  className="rounded-3xl bg-white p-8 h-full flex flex-col"
                >
                  <h3 className="text-lg font-semibold text-charcoal">
                    {setting.name}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-gray-500">
                    {setting.description}
                  </p>
                </BackgroundGradient>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== PATIENT CARE IMAGE ==================== */}
      <section className="bg-soft-white py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal>
            <div className="overflow-hidden rounded-2xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1200&h=500&fit=crop&q=80"
                alt="Senior patient receiving attentive care from a healthcare provider"
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
              <div className="pointer-events-none absolute inset-0 opacity-10">
                <svg className="h-full w-full" viewBox="0 0 800 400" fill="none">
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
                  Ready to Transform Patient Monitoring?
                </h2>
                <p className="mx-auto mt-4 max-w-xl text-gray-400">
                  Schedule a demo to see how TelEM can reduce readmissions
                  and improve clinical outcomes at your facility.
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
