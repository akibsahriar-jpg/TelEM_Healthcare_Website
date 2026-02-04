"use client";

import { useState } from "react";

interface FormData {
  fullName: string;
  email: string;
  organization: string;
  role: string;
  phone: string;
  message: string;
  referralSource: string;
}

const initialFormData: FormData = {
  fullName: "",
  email: "",
  organization: "",
  role: "",
  phone: "",
  message: "",
  referralSource: "",
};

const referralOptions = [
  { value: "", label: "Select an option" },
  { value: "conference", label: "Conference" },
  { value: "referral", label: "Referral" },
  { value: "web-search", label: "Web Search" },
  { value: "linkedin", label: "LinkedIn" },
  { value: "other", label: "Other" },
];

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [submitted, setSubmitted] = useState(false);

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // v1 placeholder — webhook integration comes later
    console.log("Contact form submission:", formData);
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-2xl border border-emerald/20 bg-emerald/5 p-10 text-center">
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-emerald/10">
          <svg
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
            className="text-emerald"
          >
            <path
              d="M7 14.5L12 19.5L21 9.5"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <h3 className="font-heading text-xl font-bold tracking-tight text-charcoal">
          Thank you for reaching out
        </h3>
        <p className="mt-2 font-body text-sm text-gray-500">
          We&apos;ve received your request and will be in touch within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Full Name */}
      <div>
        <label
          htmlFor="fullName"
          className="mb-1.5 block text-sm font-medium text-charcoal"
        >
          Full Name <span className="text-emerald">*</span>
        </label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          required
          value={formData.fullName}
          onChange={handleChange}
          className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm text-charcoal placeholder-gray-400 outline-none transition-colors focus:border-emerald focus:ring-1 focus:ring-emerald"
          placeholder="Dr. Jane Smith"
        />
      </div>

      {/* Email */}
      <div>
        <label
          htmlFor="email"
          className="mb-1.5 block text-sm font-medium text-charcoal"
        >
          Email <span className="text-emerald">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
          className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm text-charcoal placeholder-gray-400 outline-none transition-colors focus:border-emerald focus:ring-1 focus:ring-emerald"
          placeholder="jane@organization.com"
        />
      </div>

      {/* Organization */}
      <div>
        <label
          htmlFor="organization"
          className="mb-1.5 block text-sm font-medium text-charcoal"
        >
          Organization <span className="text-emerald">*</span>
        </label>
        <input
          type="text"
          id="organization"
          name="organization"
          required
          value={formData.organization}
          onChange={handleChange}
          className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm text-charcoal placeholder-gray-400 outline-none transition-colors focus:border-emerald focus:ring-1 focus:ring-emerald"
          placeholder="Sunrise Senior Care"
        />
      </div>

      {/* Role / Title */}
      <div>
        <label
          htmlFor="role"
          className="mb-1.5 block text-sm font-medium text-charcoal"
        >
          Role / Title <span className="text-emerald">*</span>
        </label>
        <input
          type="text"
          id="role"
          name="role"
          required
          value={formData.role}
          onChange={handleChange}
          className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm text-charcoal placeholder-gray-400 outline-none transition-colors focus:border-emerald focus:ring-1 focus:ring-emerald"
          placeholder="Director of Clinical Operations"
        />
      </div>

      {/* Phone (optional) */}
      <div>
        <label
          htmlFor="phone"
          className="mb-1.5 block text-sm font-medium text-charcoal"
        >
          Phone <span className="text-xs text-gray-400">(optional)</span>
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm text-charcoal placeholder-gray-400 outline-none transition-colors focus:border-emerald focus:ring-1 focus:ring-emerald"
          placeholder="(555) 123-4567"
        />
      </div>

      {/* How did you hear about us? */}
      <div>
        <label
          htmlFor="referralSource"
          className="mb-1.5 block text-sm font-medium text-charcoal"
        >
          How did you hear about us? <span className="text-emerald">*</span>
        </label>
        <select
          id="referralSource"
          name="referralSource"
          required
          value={formData.referralSource}
          onChange={handleChange}
          className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm text-charcoal outline-none transition-colors focus:border-emerald focus:ring-1 focus:ring-emerald"
        >
          {referralOptions.map((opt) => (
            <option key={opt.value} value={opt.value} disabled={!opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </div>

      {/* Message */}
      <div>
        <label
          htmlFor="message"
          className="mb-1.5 block text-sm font-medium text-charcoal"
        >
          Message <span className="text-emerald">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          value={formData.message}
          onChange={handleChange}
          className="w-full resize-none rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm text-charcoal placeholder-gray-400 outline-none transition-colors focus:border-emerald focus:ring-1 focus:ring-emerald"
          placeholder="Tell us about your facility and what you're looking for..."
        />
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="w-full rounded-full bg-emerald px-8 py-3.5 text-sm font-semibold text-white transition-all hover:bg-evergreen hover:shadow-lg hover:shadow-emerald/20"
      >
        Request a Demo
      </button>
    </form>
  );
}
