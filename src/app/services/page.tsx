import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | Next Level Partners",
  description:
    "Fractional COO, CRO, and VP Sales leadership embedded in your team. Hands-on execution, team building, and access to a curated network of specialized experts.",
};

const whatYouGet = [
  "Weekly strategic sessions (1-2 hours)",
  "Hands-on execution and implementation",
  "Team coaching and development",
  "Process design and optimization",
  "KPI development and tracking",
  "Board/investor presentation support",
  "Recruiting & talent acquisition - build your team with proven winners using a proven hiring process (reduced fee)",
  "Access to my curated network of vetted fractional experts (CFOs, CMOs, CTOs, and more)",
];

const deliverables = {
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
};

const idealFor = [
  "Companies with $2-20M in annual revenue",
  "Early-stage startups ready to professionalize",
  "Growing businesses needing operational leadership",
  "Post-funding companies scaling quickly",
  "Companies preparing for M&A or exit",
];

const networkExperts = [
  "Fractional CFO / Finance Leaders",
  "Fractional CMO / Marketing Leaders",
  "Fractional CTO / Technology Leaders",
  "Revenue Operations Specialists",
  "Sales Enablement Experts",
  "Customer Success Leaders",
  "Product Management Leaders",
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-neutral-light to-white section-padding">
        <div className="container-custom text-center">
          <h1 className="heading-1 mb-4">What You Get When We Work Together</h1>
          <p className="text-xl text-neutral-gray max-w-2xl mx-auto">
            Fractional COO | CRO | VP Sales leadership embedded in your team - plus access to a curated network of specialized experts
          </p>
        </div>
      </section>

      {/* What You Get Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Column */}
            <div>
              <h2 className="heading-2 mb-4">Embedded Leadership That Delivers</h2>
              <p className="text-lg text-neutral-gray mb-8">
                I become a member of your leadership team - joining your meetings,
                owning initiatives, and driving execution. Not advice from the sidelines,
                but hands-on leadership structured around your specific needs.
              </p>

              <div className="bg-primary text-white rounded-2xl p-8 mb-8">
                <p className="text-lg mb-2">Engagement structured around your needs</p>
                <p className="text-gray-200 mb-4">3-month initial engagement, then month-to-month</p>
                <Link href="/contact" className="btn-accent inline-block">
                  Schedule Discovery Call
                </Link>
              </div>

              <div>
                <h3 className="heading-3 mb-4">What's Included</h3>
                <ul className="space-y-3">
                  {whatYouGet.map((item, index) => (
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
                    {deliverables.first30Days.map((item, i) => (
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
                    {deliverables.days31to90.map((item, i) => (
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
                    {deliverables.days91Plus.map((item, i) => (
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
                  {idealFor.map((item, index) => (
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

      {/* Network Access Section */}
      <section className="section-padding bg-neutral-light">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <h2 className="heading-2 mb-4">Plus Access to My Expert Network</h2>
            <p className="text-lg text-neutral-gray">
              Need specialized expertise beyond revenue and operations? When you work with me, you get access to my personally vetted network of fractional leaders across every function.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto mb-10">
            {networkExperts.map((item, index) => (
              <div key={index} className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-sm">
                <svg className="w-5 h-5 text-secondary flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <span className="text-neutral-gray">{item}</span>
              </div>
            ))}
          </div>

          <div className="max-w-2xl mx-auto bg-white rounded-2xl p-8 text-center">
            <p className="text-neutral-gray mb-4">
              Every expert in my network is someone I've worked with or personally vetted. I match you with the right person, facilitate onboarding, and stay involved to ensure results.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Ready to Build Your Revenue Engine?
          </h2>
          <p className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto">
            Let's talk about your specific challenges and how we can solve them together.
          </p>
          <Link href="/contact" className="btn-accent inline-block">
            Book a Discovery Call
          </Link>
        </div>
      </section>
    </>
  );
}
