import Link from "next/link";

// Trust signals data
const trustSignals = [
  "17 Years as an Operator",
  "$3B+ in Valuations Built",
  "$100M+ Revenue Generated",
];

// Problem cards data
const problems = [
  {
    icon: "📈",
    title: "Revenue is Growing",
    pain: "But processes are breaking, team is overwhelmed, and you're still in the weeds",
  },
  {
    icon: "⏱️",
    title: "Time is Critical",
    pain: "Hiring a full-time executive takes 4-6 months - you need proven help now",
  },
  {
    icon: "💰",
    title: "Budget Constraints",
    pain: "Can't justify $400K+ for a full-time VP of Sales or CRO you might only need 50% of",
  },
  {
    icon: "🎯",
    title: "Need a Do-er",
    pain: "Tired of consultants who just make PowerPoints and hand you homework",
  },
];

// Process steps data
const processSteps = [
  {
    step: 1,
    title: "Discovery Call",
    duration: "30 minutes",
    description: "Understand your challenges, assess fit, provide immediate insights",
    deliverable: "Free audit of your current gaps",
  },
  {
    step: 2,
    title: "Custom Proposal",
    duration: "48 hours",
    description: "Tailored scope of work with transparent pricing",
    deliverable: "Clear deliverables, timeline, success metrics",
  },
  {
    step: 3,
    title: "Fast Execution",
    duration: "Week 1",
    description: "We start immediately - no 30-day onboarding",
    deliverable: "First tangible wins in 14 days",
  },
  {
    step: 4,
    title: "Scale & Optimize",
    duration: "90+ days",
    description: "Build systems, train teams, deliver sustainable results",
    deliverable: "Measurable impact on revenue and efficiency",
  },
];

// Metrics data
const metrics = [
  { number: "40%", label: "Average Revenue Increase", timeframe: "Within 18 months" },
  { number: "60", label: "Days to First Win", timeframe: "Average engagement" },
  { number: "17+", label: "Years Experience", timeframe: "In revenue & operations" },
  { number: "100%", label: "Client Satisfaction", timeframe: "Would recommend" },
];

// Differentiators data
const differentiators = [
  {
    title: "I Execute, Not Just Advise",
    description:
      "No death by PowerPoint. I get in the trenches with your team and make things happen. Results in weeks, not quarters.",
  },
  {
    title: "Battle-Tested Revenue Builder",
    description:
      "I've built and scaled revenue engines from scratch. Pipeline generation, sales process, team building - I've done it all, multiple times.",
  },
  {
    title: "Day One Impact",
    description:
      "While others 'assess and strategize,' I'm already driving wins. Your problems become my problems from the moment we start.",
  },
  {
    title: "Systems That Outlast Me",
    description:
      "I don't create dependency - I build machines. Processes, playbooks, and trained teams that keep winning after I'm gone.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-neutral-light to-white section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="heading-1 mb-6">
                I Build Revenue Engines. You Keep the Growth.
              </h1>
              <p className="text-lg text-neutral-gray mb-8 leading-relaxed">
                Proven operator. Relentless executor. I don't advise from the sidelines - I
                get in the trenches and drive results. Get hands-on leadership that actually
                moves the needle.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link href="/contact" className="btn-primary text-center">
                  Book Your Discovery Call
                </Link>
              </div>

              {/* Trust Signals */}
              <div className="flex flex-wrap gap-4">
                {trustSignals.map((signal, index) => (
                  <span
                    key={index}
                    className="text-sm text-neutral-gray bg-white px-4 py-2 rounded-full border border-gray-200 shadow-sm"
                  >
                    {signal}
                  </span>
                ))}
              </div>
            </div>

            {/* Hero Visual */}
            <div className="relative">
              <div className="bg-gradient-to-br from-primary to-primary-800 rounded-2xl p-8 md:p-12 text-white">
                {/* Large metric display */}
                <div className="space-y-6">
                  <div className="border-b border-white/20 pb-6">
                    <p className="text-5xl md:text-7xl font-heading font-bold text-accent">$3B+</p>
                    <p className="text-lg text-gray-300 mt-2">In Company Valuations Built</p>
                  </div>
                  <div className="border-b border-white/20 pb-6">
                    <p className="text-5xl md:text-7xl font-heading font-bold text-white">17</p>
                    <p className="text-lg text-gray-300 mt-2">Years Operating & Executing</p>
                  </div>
                  <div>
                    <p className="text-5xl md:text-7xl font-heading font-bold text-secondary-400">$100M+</p>
                    <p className="text-lg text-gray-300 mt-2">Revenue Generated</p>
                  </div>
                </div>
                {/* Decorative element */}
                <div className="absolute top-4 right-4 w-20 h-20 border-2 border-accent/30 rounded-full"></div>
                <div className="absolute bottom-4 right-8 w-12 h-12 border-2 border-secondary/30 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-2 mb-4">
              You're Scaling, But Your Operations Can't Keep Up
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {problems.map((problem, index) => (
              <div key={index} className="card text-center">
                <span className="text-4xl mb-4 block">{problem.icon}</span>
                <h3 className="heading-3 mb-3">{problem.title}</h3>
                <p className="text-neutral-gray">{problem.pain}</p>
              </div>
            ))}
          </div>

          <p className="text-center text-lg text-primary font-semibold mt-12">
            This is where fractional leadership changes the game.
          </p>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="section-padding bg-neutral-light">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-2 mb-4">How Next Level Partners Works</h2>
            <p className="text-lg text-neutral-gray">
              Embedded leadership that delivers results in 90 days, not 9 months
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="card h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold">
                      {step.step}
                    </span>
                    <span className="text-sm text-accent font-semibold">
                      {step.duration}
                    </span>
                  </div>
                  <h3 className="heading-3 mb-3">{step.title}</h3>
                  <p className="text-neutral-gray mb-4">{step.description}</p>
                  <p className="text-sm text-secondary font-medium">
                    ✓ {step.deliverable}
                  </p>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                    <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Two Ways to Work Together */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-2 mb-4">Two Ways to Work Together</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Direct Engagement */}
            <div className="card border-2 border-primary">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">👤</span>
                <div>
                  <h3 className="heading-3">Direct Engagement</h3>
                  <p className="text-neutral-gray">Work with Jason directly</p>
                </div>
              </div>
              <p className="text-neutral-gray mb-6">
                Fractional COO, CRO, or VP Sales leadership embedded in your team
              </p>
              <div className="bg-neutral-light rounded-lg p-4 mb-6">
                <p className="text-sm text-neutral-gray">
                  Ideal for companies with $2-20M ARR ready to scale operations and revenue
                </p>
              </div>
              <Link href="/services" className="btn-primary w-full text-center block">
                Learn More
              </Link>
            </div>

            {/* Curated Network */}
            <div className="card border-2 border-secondary">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">🤝</span>
                <div>
                  <h3 className="heading-3">Curated Network</h3>
                  <p className="text-neutral-gray">Matched with vetted operators</p>
                </div>
              </div>
              <p className="text-neutral-gray mb-6">
                Specialists from my trusted network matched to your specific needs
              </p>
              <div className="bg-neutral-light rounded-lg p-4 mb-6">
                <p className="text-sm text-neutral-gray">
                  Ideal for specialized expertise or building out multiple functions
                </p>
              </div>
              <Link href="/services" className="btn-secondary w-full text-center block">
                View Network
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="section-padding bg-primary text-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Results That Speak for Themselves
            </h2>
          </div>

          {/* Metrics */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {metrics.map((metric, index) => (
              <div key={index} className="text-center">
                <p className="text-4xl md:text-5xl font-heading font-bold text-accent mb-2">
                  {metric.number}
                </p>
                <p className="text-lg font-semibold mb-1">{metric.label}</p>
                <p className="text-sm text-gray-300">{metric.timeframe}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Why Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-2 mb-4">Why Next Level Partners?</h2>
            <p className="text-lg text-neutral-gray">
              Because I don't talk about results - I deliver them.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {differentiators.map((diff, index) => (
              <div key={index} className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-secondary"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="heading-3 mb-2">{diff.title}</h3>
                  <p className="text-neutral-gray">{diff.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="section-padding bg-gradient-to-br from-primary to-primary-800">
        <div className="container-custom text-center text-white">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Stop Talking About Growth. Start Building It.
          </h2>
          <p className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto">
            30 minutes. No pitch deck. Just a real conversation about what's broken
            and how fast we can fix it.
          </p>

          {/* Risk Reversal */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {[
              "3-month initial commitment",
              "Month-to-month after that",
              "No long-term contracts",
              "Cancel anytime with 30 days notice",
            ].map((item, index) => (
              <span key={index} className="text-sm bg-white/10 px-4 py-2 rounded-full">
                ✓ {item}
              </span>
            ))}
          </div>

          <Link href="/contact" className="btn-accent inline-block text-lg px-10 py-5">
            Schedule Discovery Call
          </Link>
        </div>
      </section>
    </>
  );
}
