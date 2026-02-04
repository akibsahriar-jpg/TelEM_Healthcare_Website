"use client";

import { useState } from "react";
import { ScrollReveal } from "@/components/ScrollReveal";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQCategory {
  name: string;
  questions: FAQItem[];
}

interface FAQContentProps {
  categories: FAQCategory[];
}

function AccordionItem({ question, answer }: FAQItem) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between py-6 text-left transition-colors hover:text-evergreen"
      >
        <span className="pr-4 font-heading text-base font-semibold tracking-tight text-charcoal sm:text-lg">
          {question}
        </span>
        <span
          className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border transition-all ${
            isOpen
              ? "border-emerald bg-emerald text-white rotate-180"
              : "border-gray-300 text-gray-400"
          }`}
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            className="transition-transform"
          >
            <path
              d="M3 5.5L7 9.5L11 5.5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </button>
      <div
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <p className="pb-6 text-sm leading-relaxed text-gray-500 font-body sm:text-base sm:leading-relaxed">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
}

export function FAQContent({ categories }: FAQContentProps) {
  return (
    <section className="bg-soft-white py-20">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        {categories.map((category, catIndex) => (
          <ScrollReveal key={category.name} delay={catIndex * 100}>
            <div className={catIndex > 0 ? "mt-16" : ""}>
              {/* Category heading */}
              <div className="mb-2 flex items-center gap-3">
                <span className="inline-flex items-center rounded-full bg-emerald/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-emerald">
                  {category.name}
                </span>
                <div className="h-px flex-1 bg-gray-200" />
              </div>

              {/* Questions */}
              <div className="mt-4">
                {category.questions.map((item) => (
                  <AccordionItem
                    key={item.question}
                    question={item.question}
                    answer={item.answer}
                  />
                ))}
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
