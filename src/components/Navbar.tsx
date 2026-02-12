"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const navLinks = [
  { href: "/services", label: "SERVICES" },
  { href: "/resources", label: "RESOURCES" },
  { href: "/about", label: "ABOUT" },
  { href: "/blog", label: "BLOG" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-gray-200/60 bg-white/80 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/telem-logo-new.png"
            alt="TelEM Healthcare"
            width={160}
            height={60}
            className="h-auto w-40"
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden items-center gap-10 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-lg px-3 py-1.5 text-[15px] font-semibold tracking-wide text-gray-600 transition-all duration-200 hover:bg-gradient-to-r hover:from-emerald/5 hover:to-emerald/10 hover:text-charcoal"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* CTA + Mobile Toggle */}
        <div className="flex items-center gap-4">
          <Link
            href="/contact"
            className="hidden rounded-full bg-charcoal px-6 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-gradient-to-r hover:from-charcoal hover:via-gray-700 hover:to-charcoal hover:shadow-lg md:inline-flex"
          >
            Book a Demo
          </Link>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-lg md:hidden"
            aria-label="Toggle menu"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              className="text-charcoal"
            >
              {mobileOpen ? (
                <path
                  d="M5 5L15 15M15 5L5 15"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              ) : (
                <>
                  <path
                    d="M3 5H17"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                  <path
                    d="M3 10H17"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                  <path
                    d="M3 15H17"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </>
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="border-t border-gray-200/60 bg-white/95 backdrop-blur-xl md:hidden">
          <div className="flex flex-col gap-1 px-6 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="rounded-lg px-4 py-3 text-sm font-semibold tracking-wide text-gray-600 transition-all hover:bg-gradient-to-r hover:from-emerald/5 hover:to-emerald/10 hover:text-charcoal"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="mt-2 rounded-full bg-charcoal px-5 py-3 text-center text-sm font-semibold text-white transition-all duration-300 hover:bg-gradient-to-r hover:from-charcoal hover:via-gray-700 hover:to-charcoal"
            >
              Book a Demo
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
