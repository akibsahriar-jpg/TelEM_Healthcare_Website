import type { Metadata } from "next";
import { ScrollReveal } from "@/components/ScrollReveal";
import { FAQContent } from "./FAQContent";
import { GradientButton } from "@/components/GradientButton";

export const metadata: Metadata = {
  title: "FAQ | TelEM Healthcare",
  description:
    "Frequently asked questions about TelEM's contactless remote patient monitoring platform, including product details, HIPAA compliance, data security, and implementation.",
};

const faqCategories = [
  {
    name: "Product",
    questions: [
      {
        question: "How does contactless radar monitoring work?",
        answer:
          "TelEM uses millimeter-wave radar sensors installed in patient rooms to continuously measure vital signs including heart rate, respiratory rate, and movement patterns. The radar emits low-power signals that reflect off the patient's body, detecting micro-movements caused by breathing and cardiac activity. The technology works through bedding and clothing, requires no physical contact, and operates 24/7 without any patient interaction. All data is processed in real time and streamed to our clinical platform for physician review.",
      },
      {
        question: "Does the patient need to wear anything?",
        answer:
          "No. This is a core differentiator of TelEM's approach. Our radar-based sensors are mounted in the room environment, not on the patient. There are no wearables, patches, or devices that patients need to manage, charge, or remember to put on. This eliminates compliance issues that plague traditional RPM programs and is especially valuable for elderly, cognitively impaired, or post-surgical patients who may not tolerate wearable devices.",
      },
      {
        question: "What vital signs can the system detect?",
        answer:
          "TelEM's contactless radar platform continuously monitors heart rate, respiratory rate, respiratory patterns, movement and mobility trends, sleep quality metrics, and bed occupancy status. Our clinical algorithms also detect trend deviations over time, such as gradual increases in respiratory rate that may indicate early-stage deterioration. Additional derived metrics include restlessness indices and activity level baselines, which give clinicians a holistic picture of patient status.",
      },
      {
        question: "How does TelEM differ from traditional RPM?",
        answer:
          "Traditional RPM relies on patient compliance with wearable devices, periodic spot-checks, and often routes alerts to nursing staff who are already overburdened. TelEM takes a fundamentally different approach: our monitoring is continuous and contactless, our alerts are reviewed by board-certified emergency medicine physicians around the clock, and our clinical team coordinates directly with on-site staff to drive timely interventions. The result is earlier detection, faster response, and measurably better outcomes.",
      },
    ],
  },
  {
    name: "Privacy & Compliance",
    questions: [
      {
        question: "Is TelEM HIPAA compliant?",
        answer:
          "Yes. TelEM is fully HIPAA compliant across every layer of our platform. We execute Business Associate Agreements (BAAs) with all facility partners, maintain comprehensive administrative, physical, and technical safeguards, and conduct regular third-party security audits. Our infrastructure is aligned with SOC 2 Type II standards, and our clinical workflows are designed with privacy-by-default principles. We treat compliance not as a checkbox but as a foundational requirement of our platform.",
      },
      {
        question: "How is patient data secured?",
        answer:
          "All patient data is encrypted in transit using TLS 1.3 and at rest using AES-256 encryption. Access to clinical data is strictly role-based, with multi-factor authentication required for all platform users. We maintain detailed audit logs of all data access events, and our security team conducts continuous vulnerability assessments. No video or audio is ever captured by our radar sensors, meaning the system is inherently less invasive than camera-based monitoring alternatives.",
      },
      {
        question: "Where is data stored?",
        answer:
          "All patient data is stored in HIPAA-compliant, SOC 2-aligned cloud infrastructure hosted in the United States. We use geographically redundant storage to ensure data availability and disaster recovery. Data retention policies are configurable to meet your facility's requirements and applicable state regulations. We do not sell, share, or use patient data for any purpose outside of direct clinical care delivery.",
      },
    ],
  },
  {
    name: "Implementation",
    questions: [
      {
        question: "How long does deployment take?",
        answer:
          "A typical deployment takes two to four weeks from contract signing to go-live. The first week covers site assessment and sensor hardware installation. The second week focuses on platform configuration, EHR integration, and clinical workflow alignment. Weeks three and four involve staff training and a supervised go-live period where our clinical team closely monitors the rollout. For larger facilities or multi-site deployments, we develop a phased rollout plan to ensure a smooth transition.",
      },
      {
        question: "Does TelEM integrate with our existing EHR?",
        answer:
          "Yes. TelEM is designed to integrate with major EHR platforms including Epic, PointClickCare, MatrixCare, and others through HL7 FHIR and standard API interfaces. Clinical notes, alerts, and monitoring summaries can be pushed directly into your existing documentation workflows. Our integration team handles the technical setup and works closely with your IT staff to ensure seamless data flow without disrupting your current processes.",
      },
      {
        question: "What training is required for our staff?",
        answer:
          "TelEM is designed to augment your clinical team, not burden it. On-site nursing staff typically require a single 60-minute training session covering alert acknowledgment, communication protocols with our remote physicians, and basic platform navigation. No specialized technical training is needed. We also provide ongoing support, refresher sessions, and a dedicated customer success manager for every facility to ensure your team stays confident and effective with the system.",
      },
    ],
  },
];

export default function FAQPage() {
  return (
    <div className="overflow-hidden">
      {/* ==================== HERO ==================== */}
      <section className="relative bg-charcoal pt-32 pb-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal>
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-widest text-emerald">
                Support
              </p>
              <h1 className="mt-3 font-heading text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                Frequently Asked Questions
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-gray-400 font-body">
                Everything you need to know about TelEM&apos;s contactless
                monitoring platform, from how the technology works to
                deployment and compliance.
              </p>
            </div>
          </ScrollReveal>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-soft-white to-transparent" />
      </section>

      {/* ==================== FAQ CONTENT ==================== */}
      <FAQContent categories={faqCategories} />

      {/* ==================== HEALTHCARE IMAGE ==================== */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal>
            <div className="overflow-hidden rounded-2xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1516549655169-df83a0774514?w=1200&h=500&fit=crop&q=80"
                alt="Healthcare technology setup in a modern patient room"
                className="h-[280px] w-full object-cover md:h-[360px]"
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ==================== CTA ==================== */}
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
                  Still Have Questions?
                </h2>
                <p className="mx-auto mt-4 max-w-xl text-gray-400 font-body">
                  Our team is ready to walk you through the platform and
                  answer any questions specific to your facility.
                </p>
                <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                  <GradientButton href="/contact" variant="primary">
                    Book a Demo
                  </GradientButton>
                  <GradientButton href="/contact" variant="secondary">
                    Contact Us
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
