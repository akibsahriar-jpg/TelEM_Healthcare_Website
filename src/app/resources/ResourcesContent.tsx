"use client";

import { useState } from "react";
import Link from "next/link";
import { ScrollReveal } from "@/components/ScrollReveal";

interface Resource {
  category: string;
  title: string;
  description: string;
  href: string;
}

interface ResourcesContentProps {
  resources: Resource[];
  categories: readonly string[];
}

const categoryColors: Record<string, string> = {
  Research: "bg-emerald/10 text-emerald",
  "Case Study": "bg-lime/10 text-evergreen",
  Whitepaper: "bg-evergreen/10 text-evergreen",
  "Industry News": "bg-charcoal/10 text-charcoal",
};

export function ResourcesContent({
  resources,
  categories,
}: ResourcesContentProps) {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered =
    activeFilter === "All"
      ? resources
      : resources.filter((r) => r.category === activeFilter);

  return (
    <section className="bg-soft-white py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Filter tabs */}
        <ScrollReveal>
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`rounded-full px-5 py-2 text-sm font-medium transition-all ${
                  activeFilter === cat
                    ? "bg-evergreen text-white shadow-sm"
                    : "border border-gray-200 bg-white text-gray-600 hover:border-emerald/40 hover:text-charcoal"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Resource cards grid */}
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((resource, i) => (
            <ScrollReveal key={resource.title} delay={i * 80}>
              <Link
                href={resource.href}
                className="group flex h-full flex-col rounded-2xl border border-gray-200 bg-white p-8 transition-all hover:border-emerald/30 hover:shadow-lg"
              >
                {/* Category tag */}
                <span
                  className={`inline-flex w-fit rounded-full px-3 py-1 text-xs font-semibold tracking-wide ${
                    categoryColors[resource.category] ??
                    "bg-gray-100 text-gray-600"
                  }`}
                >
                  {resource.category}
                </span>

                {/* Title */}
                <h3 className="mt-4 font-heading text-lg font-semibold leading-snug tracking-tight text-charcoal group-hover:text-evergreen">
                  {resource.title}
                </h3>

                {/* Description */}
                <p className="mt-3 flex-1 text-sm leading-relaxed text-gray-500 font-body">
                  {resource.description}
                </p>

                {/* Read more */}
                <span className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-emerald">
                  Read more
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

        {/* Empty state */}
        {filtered.length === 0 && (
          <div className="mt-16 text-center">
            <p className="text-gray-500">
              No resources found for this category. Check back soon.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
