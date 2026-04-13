import Link from "next/link";
import { ScrollReveal } from "@/components/ScrollReveal";
import { ContactForm } from "./ContactForm";

export const metadata = {
  title: "Contact | TelEM Healthcare",
  description:
    "Schedule a demo, ask about partnerships, or learn how TelEM Healthcare can reduce readmissions at your facility. We typically respond within 24 hours.",
};

const infoCards = [
  {
    title: "Schedule a Call",
    description:
      "Book a 30-minute discovery call to discuss your facility's needs and how remote monitoring fits into your workflow.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <rect
          x="3"
          y="4"
          width="18"
          height="18"
          rx="3"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          d="M3 9H21"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M8 2V5M16 2V5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "Product Demo",
    description:
      "Get a live walkthrough of the TelEM platform, including sensor setup, clinical dashboards, and alert workflows.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <rect
          x="2"
          y="3"
          width="20"
          height="14"
          rx="2"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          d="M8 21H16"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M12 17V21"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M10 9L14.5 11.5L10 14V9Z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    title: "Partnership Inquiry",
    description:
      "For health systems, SNFs, and senior living operators exploring a clinical monitoring partnership with TelEM.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path
          d="M16 21V19C16 16.7909 14.2091 15 12 15H5C2.79086 15 1 16.7909 1 19V21"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <circle
          cx="8.5"
          cy="7"
          r="4"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          d="M20 8V14M17 11H23"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
];

export default function ContactPage() {
  return (
    <div className="overflow-hidden">
      {/* ==================== HERO ==================== */}
      <section className="bg-charcoal pt-44 pb-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal>
            <p className="text-sm font-semibold uppercase tracking-widest text-emerald">
              Contact Us
            </p>
            <h1 className="mt-3 font-heading text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Let&apos;s Talk
            </h1>
            <p className="mt-4 max-w-2xl font-body text-lg leading-relaxed text-gray-400">
              Schedule a demo, explore a partnership, or simply ask a question.
              We work with skilled nursing facilities, senior living communities,
              and hospital systems nationwide.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ==================== FORM + INFO ==================== */}
      <section className="bg-soft-white py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
            {/* Left — Contact Form */}
            <ScrollReveal>
              <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm md:p-10">
                <h2 className="font-heading text-2xl font-bold tracking-tight text-charcoal">
                  Request a Demo
                </h2>
                <p className="mt-2 mb-8 font-body text-sm text-gray-500">
                  Fill out the form below and our team will reach out to
                  schedule a personalized walkthrough.
                </p>
                <ContactForm />
              </div>
            </ScrollReveal>

            {/* Right — Company Info */}
            <div>
              <ScrollReveal delay={100}>
                <div className="mb-10">
                  <h2 className="font-heading text-2xl font-bold tracking-tight text-charcoal">
                    Get in Touch
                  </h2>

                  <div className="mt-6 space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-emerald/10 text-emerald">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                        >
                          <path
                            d="M2 4L8 9L14 4"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <rect
                            x="1"
                            y="3"
                            width="14"
                            height="10"
                            rx="2"
                            stroke="currentColor"
                            strokeWidth="1.5"
                          />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-charcoal">
                          Email
                        </p>
                        <Link
                          href="mailto:info@telemhealthcare.com"
                          className="text-sm text-emerald hover:underline"
                        >
                          info@telemhealthcare.com
                        </Link>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-emerald/10 text-emerald">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                        >
                          <circle
                            cx="8"
                            cy="8"
                            r="6"
                            stroke="currentColor"
                            strokeWidth="1.5"
                          />
                          <path
                            d="M8 5V8.5L10.5 10"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-charcoal">
                          Response Time
                        </p>
                        <p className="text-sm text-gray-500">
                          We typically respond within 24 hours.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              {/* Info Cards */}
              <div className="space-y-4">
                {infoCards.map((card, i) => (
                  <ScrollReveal key={card.title} delay={150 + i * 100}>
                    <div className="rounded-2xl border border-gray-200 bg-white p-6 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md">
                      <div className="flex items-start gap-4">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-soft-white text-evergreen">
                          {card.icon}
                        </div>
                        <div>
                          <h3 className="font-heading text-base font-semibold tracking-tight text-charcoal">
                            {card.title}
                          </h3>
                          <p className="mt-1 font-body text-sm leading-relaxed text-gray-500">
                            {card.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ==================== HEALTHCARE IMAGE ==================== */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal>
            <div className="overflow-hidden rounded-2xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=1200&h=500&fit=crop&q=80"
                alt="Modern healthcare facility with patient care technology"
                className="h-[280px] w-full object-cover md:h-[360px]"
              />
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
