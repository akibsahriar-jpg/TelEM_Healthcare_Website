import Link from "next/link";
import { ScrollReveal } from "@/components/ScrollReveal";
import { GradientButton } from "@/components/GradientButton";

export const metadata = {
  title: "Blog | TelEM Healthcare",
  description:
    "Insights on remote patient monitoring, clinical innovation, and post-acute care from the TelEM Healthcare team.",
};

const posts = [
  {
    title: "The Future of Contactless Patient Monitoring",
    excerpt:
      "Remote monitoring technology is advancing beyond wearables. Radar-based systems are redefining how clinicians track vitals without placing any burden on patients or staff.",
    date: "Jan 15, 2026",
    category: "Technology",
    slug: "future-of-contactless-patient-monitoring",
  },
  {
    title: "How Emergency Medicine Physicians Improve RPM Outcomes",
    excerpt:
      "Why EM expertise matters in remote patient monitoring. The speed, pattern recognition, and triage instincts of emergency physicians translate directly into better remote outcomes.",
    date: "Jan 8, 2026",
    category: "Clinical",
    slug: "em-physicians-improve-rpm-outcomes",
  },
  {
    title: "Reducing 30-Day Readmissions: A Data-Driven Approach",
    excerpt:
      "Evidence-based strategies for post-acute care facilities looking to lower readmission rates through early detection and proactive clinical intervention.",
    date: "Dec 20, 2025",
    category: "Outcomes",
    slug: "reducing-30-day-readmissions",
  },
  {
    title: "Understanding CMS RPM Billing and Reimbursement",
    excerpt:
      "A practical guide for healthcare administrators navigating CPT codes, coverage requirements, and reimbursement workflows for remote patient monitoring programs.",
    date: "Dec 12, 2025",
    category: "Compliance",
    slug: "cms-rpm-billing-reimbursement",
  },
];

export default function BlogPage() {
  return (
    <div className="overflow-hidden">
      {/* ==================== HERO ==================== */}
      <section className="bg-charcoal pt-32 pb-20">
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

      {/* ==================== POST GRID ==================== */}
      <section className="bg-soft-white py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {posts.map((post, i) => (
              <ScrollReveal key={post.slug} delay={i * 100}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="group block h-full rounded-2xl border border-gray-200 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="flex items-center gap-3">
                    <span className="inline-block rounded-full bg-emerald/10 px-3 py-1 text-xs font-semibold tracking-wide text-emerald">
                      {post.category}
                    </span>
                    <span className="text-xs font-medium text-gray-400">
                      {post.date}
                    </span>
                  </div>

                  <h2 className="mt-4 font-heading text-xl font-bold tracking-tight text-charcoal group-hover:text-evergreen">
                    {post.title}
                  </h2>

                  <p className="mt-3 font-body text-sm leading-relaxed text-gray-500">
                    {post.excerpt}
                  </p>

                  <span className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-emerald">
                    Read article
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
              </ScrollReveal>
            ))}
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
                src="https://images.unsplash.com/photo-1530497610245-94d3c16cda28?w=1200&h=500&fit=crop&q=80"
                alt="Nurse reviewing patient health data on a tablet device"
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
