import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | Next Level Partners",
  description:
    "Two flexible engagement models: Direct Engagement with Jason or Curated Network placements. Fractional COO, CRO, and VP Sales leadership tailored to your needs.",
};

const directEngagementDetails = {
  whatYouGet: [
    "Weekly strategic sessions (1-2 hours)",
    "Hands-on execution and implementation",
    "Team coaching and development",
    "Process design and optimization",
    "KPI development and tracking",
    "Board/investor presentation support",
    "Access to my network and resources",
    "Recruiting & talent acquisition - build your team with proven winners using a proven hiring process (reduced fee)",
  ],
  deliverables: {
    first30Days: [
      "Complete operational audit",
      "Prioritized action plan",
      "Quick wins identified and executed",
      "Key processes documented",
    ],
    days31to90: [
      "Core systems implemented",
      "Team trained on new processes",
      "KPIs and dashboards operational",
      "Measurable improvement in 2-3 key metrics",
    ],
    days91Plus: [
      "Sustainable, scalable systems",
      "Team operating independently",
      "Documented playbooks",
      "Continuous optimization and growth",
    ],
  },
  idealFor: [
    "Companies with $2-20M in annual revenue",
    "Early-stage startups ready to professionalize",
    "Growing businesses needing operational leadership",
    "Post-funding companies scaling quickly",
    "Companies preparing for M&A or exit",
  ],
};

const networkSteps = [
  {
    step: 1,
    title: "Needs Assessment",
    description: "We identify your specific requirements-skills, industry experience, time commitment",
  },
  {
    step: 2,
    title: "Expert Matching",
    description: "I personally match you with 1-2 ideal candidates from my network",
  },
  {
    step: 3,
    title: "Introduction & Onboarding",
    description: "I facilitate the introduction and ensure smooth onboarding",
  },
  {
    step: 4,
    title: "Ongoing Oversight",
    description: "I check in regularly to ensure quality and results",
  },
];

const expertiseAvailable = [
  "Fractional CFO / Finance Leaders",
  "Fractional CMO / Marketing Leaders",
  "Fractional CTO / Technology Leaders",
  "Revenue Operations Specialists",
  "Sales Enablement Experts",
  "Customer Success Leaders",
  "Product Management Leaders",
];

const comparisonData = [
  { criteria: "Time Commitment", direct: "Flexible", network: "Flexible" },
  { criteria: "Best For", direct: "Scaling operations", network: "Specialized needs" },
  { criteria: "Start Time", direct: "1-2 weeks", network: "2-3 weeks" },
  { criteria: "Engagement", direct: "Embedded leadership", network: "Expert matching" },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-neutral-light to-white section-padding">
        <div className="container-custom text-center">
          <h1 className="heading-1 mb-4">Two Ways We Work Together</h1>
          <p className="text-xl text-neutral-gray max-w-2xl mx-auto">
            Flexible engagement models designed for growing companies
          </p>
        </div>
      </section>

      {/* Direct Engagement Section */}
      <section className="section-padding bg-white" id="direct">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Column - Overview */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-4xl">👤</span>
                <div>
                  <h2 className="heading-2">Direct Engagement with Jason</h2>
                  <p className="text-secondary font-semibold">
                    Fractional COO | CRO | Chief Commercial Officer | VP Sales
                  </p>
                </div>
              </div>

              <p className="text-lg text-neutral-gray mb-8">
                I become an embedded member of your leadership team - joining key meetings,
                owning initiatives, and driving execution. Engagement structured around your
                specific needs.
              </p>

              <div className="bg-primary text-white rounded-2xl p-8 mb-8">
                <p className="text-lg mb-2">Engagement structured around your needs</p>
                <p className="text-gray-200 mb-4">3-month initial engagement, then month-to-month</p>
                <Link href="/contact" className="btn-accent inline-block">
                  Schedule Discovery Call
                </Link>
              </div>

              <div>
                <h3 className="heading-3 mb-4">What You Get</h3>
                <ul className="space-y-3">
                  {directEngagementDetails.whatYouGet.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-neutral-gray">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Column - Timeline */}
            <div>
              <h3 className="heading-3 mb-6">Timeline & Deliverables</h3>

              <div className="space-y-6">
                <div className="card border-l-4 border-l-primary">
                  <h4 className="font-heading font-bold text-primary mb-3">First 30 Days</h4>
                  <ul className="space-y-2">
                    {directEngagementDetails.deliverables.first30Days.map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-neutral-gray">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="card border-l-4 border-l-secondary">
                  <h4 className="font-heading font-bold text-secondary mb-3">Days 31-90</h4>
                  <ul className="space-y-2">
                    {directEngagementDetails.deliverables.days31to90.map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-neutral-gray">
                        <span className="w-1.5 h-1.5 bg-secondary rounded-full"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="card border-l-4 border-l-accent">
                  <h4 className="font-heading font-bold text-accent mb-3">Days 91+</h4>
                  <ul className="space-y-2">
                    {directEngagementDetails.deliverables.days91Plus.map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-neutral-gray">
                        <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="font-heading font-semibold text-primary mb-4">Ideal For</h4>
                <ul className="space-y-2">
                  {directEngagementDetails.idealFor.map((item, index) => (
                    <li key={index} className="flex items-center gap-2 text-neutral-gray">
                      <span className="w-2 h-2 bg-primary/30 rounded-full"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Curated Network Section */}
      <section className="section-padding bg-neutral-light" id="network">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Column */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-4xl">🤝</span>
                <div>
                  <h2 className="heading-2">Curated Expert Network</h2>
                  <p className="text-secondary font-semibold">
                    Vetted fractional executives matched to your specific needs
                  </p>
                </div>
              </div>

              <p className="text-lg text-neutral-gray mb-8">
                Need specialized expertise? I'll match you with proven operators from my
                network-each one personally vetted and trusted. I maintain the relationship and
                quality control.
              </p>

              <div className="bg-secondary text-white rounded-2xl p-8 mb-8">
                <p className="text-lg mb-2">Matched to your specific requirements</p>
                <p className="text-green-100 mb-4">Flexible engagement terms</p>
                <Link href="/contact" className="bg-white text-secondary px-8 py-4 rounded-button font-semibold inline-block hover:bg-gray-100 transition-colors">
                  Explore Network Options
                </Link>
              </div>

              <div>
                <h3 className="heading-3 mb-4">Expertise Available</h3>
                <div className="grid grid-cols-1 gap-3">
                  {expertiseAvailable.map((item, index) => (
                    <div key={index} className="flex items-center gap-3 bg-white p-4 rounded-lg">
                      <svg className="w-5 h-5 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                      <span className="text-neutral-gray">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - How It Works */}
            <div>
              <h3 className="heading-3 mb-6">How It Works</h3>

              <div className="space-y-6">
                {networkSteps.map((step, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-secondary text-white rounded-full flex items-center justify-center font-bold text-lg">
                        {step.step}
                      </div>
                    </div>
                    <div className="flex-1 pt-2">
                      <h4 className="font-heading font-bold text-primary mb-2">{step.title}</h4>
                      <p className="text-neutral-gray">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 bg-white rounded-2xl p-6">
                <h4 className="font-heading font-semibold text-primary mb-4">Fee Structure</h4>
                <p className="text-neutral-gray">
                  I receive a placement fee; you pay the expert directly. This ensures aligned
                  incentives - I only recommend experts I genuinely believe will deliver results.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-2 mb-4">Which Option is Right for You?</h2>
          </div>

          <div className="max-w-4xl mx-auto overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="text-left py-4 px-4 font-heading font-bold text-primary"></th>
                  <th className="text-center py-4 px-4 font-heading font-bold text-primary">Direct Engagement</th>
                  <th className="text-center py-4 px-4 font-heading font-bold text-secondary">Curated Network</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, index) => (
                  <tr key={index} className="border-b border-gray-100">
                    <td className="py-4 px-4 font-medium text-neutral-dark">{row.criteria}</td>
                    <td className="py-4 px-4 text-center text-neutral-gray">{row.direct}</td>
                    <td className="py-4 px-4 text-center text-neutral-gray">{row.network}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="text-center mt-12">
            <p className="text-lg text-neutral-gray mb-6">
              Not sure which option is right for you? Let's discuss your specific situation.
            </p>
            <Link href="/contact" className="btn-primary inline-block">
              Book a Discovery Call
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
