import Link from "next/link";
import Image from "next/image";

const footerSections = [
  {
    title: "Solutions",
    links: [
      { href: "/services#tele-specialist-support", label: "Tele-specialist Support" },
      { href: "/services#remote-patient-monitoring", label: "Remote Patient Monitoring" },
      { href: "/services#readmission-reduction", label: "Readmission Reduction" },
      { href: "/services#partnership-model", label: "Partnership Model" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "/about", label: "About Us" },
      { href: "/blog", label: "Blog" },
      { href: "/resources", label: "Resources" },
      { href: "/contact", label: "Contact" },
    ],
  },
  {
    title: "Resources",
    links: [
      { href: "/faq", label: "FAQ" },
      { href: "/resources", label: "Research & Insights" },
      { href: "/resources", label: "Case Studies" },
      { href: "/blog", label: "Educational Content" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-charcoal text-white">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link
              href="/"
              className="inline-flex items-center rounded-2xl bg-white px-5 py-3"
              aria-label="TelEM Healthcare home"
            >
              <Image
                src="/telem-logo-new.png"
                alt="TelEM Healthcare"
                width={600}
                height={416}
                className="h-auto w-32"
              />
            </Link>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-gray-400">
              Proactive remote monitoring powered by contactless radar technology
              and 24/7 emergency medicine clinical oversight.
            </p>
          </div>

          {/* Link Sections */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-300">
                {section.title}
              </h3>
              <ul className="flex flex-col gap-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-400 transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-gray-700 pt-8 md:flex-row">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} TelEM Healthcare. All rights
            reserved.
          </p>
          <div className="flex gap-6">
            <Link
              href="/faq"
              className="text-sm text-gray-500 transition-colors hover:text-gray-300"
            >
              Privacy Policy
            </Link>
            <Link
              href="/faq"
              className="text-sm text-gray-500 transition-colors hover:text-gray-300"
            >
              Terms of Service
            </Link>
            <Link
              href="/faq"
              className="text-sm text-gray-500 transition-colors hover:text-gray-300"
            >
              HIPAA Compliance
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
