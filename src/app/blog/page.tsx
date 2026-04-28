import { ScrollReveal } from "@/components/ScrollReveal";
import { GradientButton } from "@/components/GradientButton";

export const metadata = {
  title: "Blog | TelEM Healthcare",
  description:
    "Clinical insights on remote patient monitoring, care transitions, and post-acute outcomes from the TelEM Healthcare team. New articles in clinical review.",
};

export default function BlogPage() {
  return (
    <div className="overflow-hidden">
      {/* ==================== HERO ==================== */}
      <section className="bg-charcoal pt-44 pb-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal>
            <p className="text-sm font-semibold uppercase tracking-widest text-emerald">
              TelEM Insights
            </p>
            <h1 className="mt-3 font-heading text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Blog
            </h1>
            <p className="mt-4 max-w-2xl font-body text-lg leading-relaxed text-gray-400">
              Insights on remote monitoring, clinical innovation, and
              post-acute care.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ==================== COMING SOON ==================== */}
      <section className="bg-soft-white py-24">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <ScrollReveal>
            <div className="rounded-3xl border border-gray-200 bg-white p-12 text-center md:p-16">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-evergreen/10 text-evergreen">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M7 4H17L23 10V24H7V4Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M17 4V10H23"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M11 14H19M11 18H19M11 22H15"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <p className="text-sm font-semibold uppercase tracking-widest text-emerald">
                In Clinical Review
              </p>
              <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-charcoal sm:text-4xl">
                Insights coming soon
              </h2>
              <p className="mx-auto mt-4 max-w-xl font-body text-base leading-relaxed text-gray-500">
                Our clinical team is curating a series of evidence-based
                articles on remote patient monitoring, post-acute care
                transitions, and clinical workflow design. Each piece is
                authored by practicing clinicians and reviewed for clinical
                accuracy before publication.
              </p>
              <p className="mx-auto mt-4 max-w-xl font-body text-sm leading-relaxed text-gray-500">
                Check back shortly — or get in touch to suggest a topic.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ==================== CTA ==================== */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal>
            <div className="rounded-3xl bg-charcoal p-12 text-center md:p-20">
              <h2 className="font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Stay Informed
              </h2>
              <p className="mx-auto mt-4 max-w-xl font-body text-gray-400">
                Want to learn how TelEM is transforming remote patient
                monitoring? Get in touch to learn more.
              </p>
              <div className="mt-8">
                <GradientButton href="/contact" variant="primary">
                  Contact Us
                </GradientButton>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
