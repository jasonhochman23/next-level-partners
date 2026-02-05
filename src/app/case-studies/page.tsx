import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Case Studies | Next Level Partners",
  description:
    "Real results for real companies. See how fractional leadership drives measurable impact with 40% average revenue increase and 50% reduction in sales cycles.",
};

const caseStudies = [
  {
    id: 1,
    title: "E-Commerce Brand Scales from $5M to $7M ARR",
    industry: "E-Commerce",
    size: "$5M ARR, 25 employees",
    engagement: "6-month fractional COO engagement",
    challenge: {
      situation:
        "Fast-growing DTC brand struggling to keep up with demand. Operations were breaking, fulfillment was delayed, and the founding team was stuck in the weeds instead of focusing on growth.",
      painPoints: [
        "Fulfillment delays causing customer complaints",
        "No visibility into inventory or cash flow",
        "Founders spending 80% of time on operations, not growth",
      ],
    },
    solution: {
      approach:
        "Implemented a comprehensive operational overhaul, starting with quick wins to build momentum and trust, then systematically addressing root causes.",
      actions: [
        { action: "Implemented inventory management system", impact: "Reduced stockouts by 70%" },
        { action: "Built financial dashboards", impact: "Real-time visibility into margins" },
        { action: "Hired and trained operations manager", impact: "Freed founders for strategic work" },
      ],
    },
    results: [
      { metric: "Revenue Growth", before: "$5M ARR", after: "$7M ARR", change: "+40% in 12 months" },
      { metric: "Order Fulfillment", before: "5-7 days", after: "1-2 days", change: "75% faster" },
      { metric: "Customer Complaints", before: "15% of orders", after: "2% of orders", change: "-87%" },
      { metric: "Founder Time on Ops", before: "80%", after: "20%", change: "60% freed up" },
    ],
    testimonial: {
      quote:
        "Jason transformed our operations in ways we didn't think possible. We went from chaos to having real systems, and I finally have time to focus on growing the business.",
      author: "CEO Name",
      title: "CEO, E-Commerce Brand",
    },
    lessons: [
      "Quick wins build trust and momentum for bigger changes",
      "Systems beat heroics-document everything",
      "Hiring the right people is as important as building processes",
    ],
  },
  {
    id: 2,
    title: "SaaS Startup Reduces Sales Cycle by 50%",
    industry: "B2B SaaS",
    size: "$3M ARR, 15 employees",
    engagement: "4-month fractional CRO engagement",
    challenge: {
      situation:
        "Promising SaaS startup with strong product-market fit but inefficient sales process. Deals were taking too long to close, and the sales team lacked structure and methodology.",
      painPoints: [
        "90-day average sales cycle losing to faster competitors",
        "No standardized sales process or playbook",
        "Win rate hovering at 18%",
      ],
    },
    solution: {
      approach:
        "Rebuilt the sales motion from the ground up, implementing a proven methodology while preserving what was already working.",
      actions: [
        { action: "Implemented MEDDIC sales methodology", impact: "Better qualification, fewer wasted deals" },
        { action: "Created sales playbook and training", impact: "Consistent approach across team" },
        { action: "Built pipeline and forecasting dashboards", impact: "Accurate predictions, better resource allocation" },
      ],
    },
    results: [
      { metric: "Sales Cycle", before: "90 days", after: "45 days", change: "-50% reduction" },
      { metric: "Win Rate", before: "18%", after: "32%", change: "+78% improvement" },
      { metric: "Revenue/Rep", before: "$250K/year", after: "$400K/year", change: "+60% productivity" },
      { metric: "Forecast Accuracy", before: "±40%", after: "±10%", change: "4x more accurate" },
    ],
    testimonial: {
      quote:
        "We thought we needed to hire more reps. Jason showed us we needed better process first. Our existing team is now outperforming our most optimistic projections.",
      author: "Founder & CEO",
      title: "Founder, B2B SaaS Company",
    },
    lessons: [
      "Process improvements often beat headcount additions",
      "Sales methodology must be adapted, not copied",
      "Dashboards drive accountability and performance",
    ],
  },
  {
    id: 3,
    title: "Professional Services Firm Automates Operations",
    industry: "Professional Services",
    size: "$8M revenue, 40 employees",
    engagement: "5-month fractional COO engagement",
    challenge: {
      situation:
        "Growing consulting firm drowning in manual processes. Partners were spending more time on admin than client work, and scaling meant adding more overhead.",
      painPoints: [
        "80% of processes were manual spreadsheets",
        "Partners billing 50% of capacity due to admin work",
        "No visibility into project profitability",
      ],
    },
    solution: {
      approach:
        "Systematic automation of core operations, combined with process redesign to eliminate unnecessary work entirely.",
      actions: [
        { action: "Implemented PSA and time tracking system", impact: "Automated billing and resource management" },
        { action: "Built project profitability dashboards", impact: "Real-time margin visibility" },
        { action: "Redesigned delivery methodology", impact: "Reduced admin time by 60%" },
      ],
    },
    results: [
      { metric: "Partner Utilization", before: "50%", after: "75%", change: "+50% more billable time" },
      { metric: "Admin Time", before: "20 hrs/week", after: "5 hrs/week", change: "15 hours saved" },
      { metric: "Process Automation", before: "20%", after: "80%", change: "4x automation" },
      { metric: "Revenue/Employee", before: "$200K", after: "$280K", change: "+40% efficiency" },
    ],
    testimonial: {
      quote:
        "I was skeptical about bringing in outside help, but Jason understood our business immediately. The ROI was obvious within the first month.",
      author: "Managing Partner",
      title: "Managing Partner, Consulting Firm",
    },
    lessons: [
      "Automation compounds-start with highest-impact processes",
      "Visibility drives behavior change",
      "Sometimes the best process is no process",
    ],
  },
];

export default function CaseStudiesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-neutral-light to-white section-padding">
        <div className="container-custom text-center">
          <h1 className="heading-1 mb-4">Real Results for Real Companies</h1>
          <p className="text-xl text-neutral-gray max-w-2xl mx-auto">
            See how fractional leadership drives measurable impact
          </p>
        </div>
      </section>

      {/* Case Studies */}
      {caseStudies.map((study, index) => (
        <section
          key={study.id}
          className={`section-padding ${index % 2 === 0 ? "bg-white" : "bg-neutral-light"}`}
        >
          <div className="container-custom">
            {/* Header */}
            <div className="mb-12">
              <div className="flex flex-wrap gap-3 mb-4">
                <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                  {study.industry}
                </span>
                <span className="bg-secondary/10 text-secondary px-3 py-1 rounded-full text-sm font-medium">
                  {study.size}
                </span>
                <span className="bg-accent/10 text-accent px-3 py-1 rounded-full text-sm font-medium">
                  {study.engagement}
                </span>
              </div>
              <h2 className="heading-2">{study.title}</h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Left Column - Challenge & Solution */}
              <div className="space-y-8">
                {/* Challenge */}
                <div className="card">
                  <h3 className="heading-3 text-red-600 mb-4">The Challenge</h3>
                  <p className="text-neutral-gray mb-4">{study.challenge.situation}</p>
                  <h4 className="font-semibold text-primary mb-2">Pain Points:</h4>
                  <ul className="space-y-2">
                    {study.challenge.painPoints.map((point, i) => (
                      <li key={i} className="flex items-start gap-2 text-neutral-gray">
                        <span className="text-red-500 mt-1">✗</span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Solution */}
                <div className="card">
                  <h3 className="heading-3 text-secondary mb-4">The Solution</h3>
                  <p className="text-neutral-gray mb-4">{study.solution.approach}</p>
                  <h4 className="font-semibold text-primary mb-2">Actions Taken:</h4>
                  <ul className="space-y-4">
                    {study.solution.actions.map((action, i) => (
                      <li key={i} className="border-l-2 border-secondary pl-4">
                        <p className="font-medium text-primary">{action.action}</p>
                        <p className="text-sm text-secondary">→ {action.impact}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Right Column - Results */}
              <div className="space-y-8">
                {/* Results Grid */}
                <div>
                  <h3 className="heading-3 mb-6">The Results</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {study.results.map((result, i) => (
                      <div key={i} className="card text-center">
                        <p className="text-sm text-neutral-gray mb-1">{result.metric}</p>
                        <div className="flex items-center justify-center gap-2 mb-2">
                          <span className="text-sm text-red-400 line-through">{result.before}</span>
                          <span className="text-lg font-bold text-secondary">{result.after}</span>
                        </div>
                        <p className="text-xs font-semibold text-accent">{result.change}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Testimonial */}
                <div className="bg-primary rounded-2xl p-8 text-white">
                  <blockquote className="text-lg italic mb-4">"{study.testimonial.quote}"</blockquote>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-white/20 rounded-full"></div>
                    <div>
                      <p className="font-semibold">{study.testimonial.author}</p>
                      <p className="text-sm text-gray-300">{study.testimonial.title}</p>
                    </div>
                  </div>
                </div>

                {/* Key Takeaways */}
                <div className="card bg-neutral-light border-none">
                  <h4 className="font-heading font-semibold text-primary mb-4">Key Takeaways</h4>
                  <ul className="space-y-2">
                    {study.lessons.map((lesson, i) => (
                      <li key={i} className="flex items-start gap-2 text-neutral-gray">
                        <svg className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                        </svg>
                        {lesson}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA Section */}
      <section className="section-padding bg-primary text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Ready for Your Success Story?
          </h2>
          <p className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto">
            Let's discuss how fractional leadership can drive similar results for your company.
          </p>
          <Link href="/contact" className="btn-accent inline-block">
            Let's Talk
          </Link>
        </div>
      </section>
    </>
  );
}
