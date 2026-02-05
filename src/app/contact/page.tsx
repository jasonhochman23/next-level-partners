"use client";

import { useState } from "react";
import FAQ from "@/components/FAQ";
import type { Metadata } from "next";

const whatToExpect = [
  "We'll discuss your current challenges and goals",
  "I'll share immediate insights and recommendations",
  "We'll determine if fractional leadership is right for you",
  "If it's a fit, I'll outline next steps",
  "If not, I'll point you in the right direction",
];

const faqItems = [
  {
    question: "How is fractional different from regular consulting?",
    answer:
      "Fractional executives are embedded in your team - we own outcomes, not just recommendations. We attend your meetings, manage your team, execute the work. Regular consultants make PowerPoints and leave.",
  },
  {
    question: "What's the minimum engagement?",
    answer:
      "3 months. This gives us enough time to diagnose, implement, and show measurable results. After that, it's month-to-month.",
  },
  {
    question: "Do you sign NDAs?",
    answer: "Absolutely. Confidentiality is standard for all engagements.",
  },
  {
    question: "Can you work remotely?",
    answer:
      "Yes. Most of my work is remote, though I'm happy to visit your office for key meetings or offsites.",
  },
  {
    question: "What if it's not a fit?",
    answer:
      "I'll tell you on the discovery call. I only take on engagements where I'm confident I can deliver 3-5x ROI. If I can't help, I'll point you to someone who can.",
  },
  {
    question: "Do you work with my industry?",
    answer:
      "I've worked with SaaS, e-commerce, professional services, and more. The principles of revenue operations and scaling are universal-industry expertise is a bonus, not a requirement.",
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    revenue: "",
    challenge: "",
    success: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-neutral-light to-white section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="heading-1 mb-4">Let's Talk About Your Growth</h1>
            <p className="text-xl text-neutral-gray">
              Book a 30-minute discovery call - no obligation, just an honest conversation
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Column - Calendly / Form */}
            <div>
              <div className="card">
                <h2 className="heading-3 mb-6">Schedule a Discovery Call</h2>

                {/* Calendly Placeholder */}
                <div className="bg-neutral-light rounded-xl p-8 mb-6 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="font-heading font-semibold text-primary mb-2">Calendly Widget</h3>
                  <p className="text-neutral-gray text-sm mb-4">
                    Your Calendly booking widget will appear here.
                  </p>
                  <a
                    href="https://calendly.com/nextlevelpartners/discovery"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary inline-block"
                  >
                    Open Calendly
                  </a>
                  <p className="text-xs text-neutral-gray mt-4">
                    Add your Calendly embed code to replace this placeholder
                  </p>
                </div>

                <div className="border-t border-gray-200 pt-6">
                  <h3 className="font-heading font-semibold text-primary mb-4">
                    What to Expect on Our Call
                  </h3>
                  <ul className="space-y-3">
                    {whatToExpect.map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <svg className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-neutral-gray">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center gap-4 mt-6 text-sm text-neutral-gray">
                    <span className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      30 minutes
                    </span>
                    <span className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                      Video call (Zoom)
                    </span>
                  </div>
                </div>
              </div>

              {/* Alternative Contact */}
              <div className="mt-8">
                <h3 className="heading-3 mb-4">Prefer Email?</h3>
                <div className="space-y-3">
                  <a
                    href="mailto:jason@next-levelpartners.com"
                    className="flex items-center gap-3 text-neutral-gray hover:text-primary transition-colors"
                  >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    jason@next-levelpartners.com
                  </a>
                  <a
                    href="https://linkedin.com/in/jasonmhochman"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-neutral-gray hover:text-primary transition-colors"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                    linkedin.com/in/jasonmhochman
                  </a>
                </div>
                <p className="text-sm text-neutral-gray mt-4">
                  I typically respond within 24 hours
                </p>
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div>
              <div className="card">
                <h2 className="heading-3 mb-6">Or Send a Message</h2>

                {isSubmitted ? (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="heading-3 mb-2">Message Sent!</h3>
                    <p className="text-neutral-gray">
                      Thank you for reaching out. I'll get back to you within 24 hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-primary mb-2">
                          Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-4 py-3 border border-gray-300 rounded-button focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-primary mb-2">
                          Email *
                        </label>
                        <input
                          type="email"
                          id="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-3 border border-gray-300 rounded-button focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="company" className="block text-sm font-medium text-primary mb-2">
                          Company
                        </label>
                        <input
                          type="text"
                          id="company"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          className="w-full px-4 py-3 border border-gray-300 rounded-button focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label htmlFor="revenue" className="block text-sm font-medium text-primary mb-2">
                          Annual Revenue
                        </label>
                        <select
                          id="revenue"
                          value={formData.revenue}
                          onChange={(e) => setFormData({ ...formData, revenue: e.target.value })}
                          className="w-full px-4 py-3 border border-gray-300 rounded-button focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-white"
                        >
                          <option value="">Select...</option>
                          <option value="<$1M">Less than $1M</option>
                          <option value="$1-5M">$1-5M</option>
                          <option value="$5-10M">$5-10M</option>
                          <option value="$10-20M">$10-20M</option>
                          <option value="$20M+">$20M+</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="challenge" className="block text-sm font-medium text-primary mb-2">
                        What's your biggest challenge right now? *
                      </label>
                      <textarea
                        id="challenge"
                        required
                        rows={3}
                        value={formData.challenge}
                        onChange={(e) => setFormData({ ...formData, challenge: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-button focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                      />
                    </div>

                    <div>
                      <label htmlFor="success" className="block text-sm font-medium text-primary mb-2">
                        What would success look like in 90 days?
                      </label>
                      <textarea
                        id="success"
                        rows={3}
                        value={formData.success}
                        onChange={(e) => setFormData({ ...formData, success: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-button focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-neutral-light">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="heading-2 text-center mb-8">Common Questions</h2>
            <FAQ items={faqItems} />
          </div>
        </div>
      </section>
    </>
  );
}
