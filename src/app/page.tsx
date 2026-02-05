import Link from "next/link";
import Image from "next/image";

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

      {/* Journey Teaser Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <h2 className="heading-2 mb-4">I've Been Where You Are</h2>
            <p className="text-lg text-neutral-gray">
              I've spent 17 years inside high-growth companies - not advising from the outside, but building from the ground up. From first sales hire to C-suite, I've scaled teams, revenue, and operations through every stage.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-10">
            <div className="card text-center">
              <Image
                src="/images/logos/zocdoc.png"
                alt="Zocdoc logo"
                width={48}
                height={48}
                className="mx-auto mb-4 rounded-lg"
              />
              <h3 className="font-heading font-bold text-primary mb-1">Zocdoc</h3>
              <p className="text-sm text-secondary font-semibold mb-2">Series A to Series D</p>
              <p className="text-sm text-neutral-gray">
                Founding sales team to Sales Director. Scaled to 150+ reps and helped drive growth to a $2B valuation.
              </p>
            </div>

            <div className="card text-center">
              <Image
                src="/images/logos/capsule.png"
                alt="Capsule Pharmacy logo"
                width={48}
                height={48}
                className="mx-auto mb-4 rounded-lg"
              />
              <h3 className="font-heading font-bold text-primary mb-1">Capsule Pharmacy</h3>
              <p className="text-sm text-secondary font-semibold mb-2">Series A to Series C</p>
              <p className="text-sm text-neutral-gray">
                First VP of Sales. Built the team from 0 to 30 reps and developed the GTM strategy that drove growth to a $1B valuation.
              </p>
            </div>

            <div className="card text-center">
              <Image
                src="/images/logos/aluna.png"
                alt="Aluna logo"
                width={48}
                height={48}
                className="mx-auto mb-4 rounded-lg"
              />
              <h3 className="font-heading font-bold text-primary mb-1">Aluna</h3>
              <p className="text-sm text-secondary font-semibold mb-2">Series A to Series B</p>
              <p className="text-sm text-neutral-gray">
                CCO to COO. Joined a 4-person team, built all GTM and operations, and drove the company to a successful acquisition.
              </p>
            </div>
          </div>

          <div className="text-center">
            <Link href="/about" className="btn-secondary inline-block">
              Read My Full Story
            </Link>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="section-padding bg-neutral-light">
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
      <section className="section-padding bg-white">
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

      {/* Work With Me */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="heading-2 mb-4">What You Get When You Work With Me</h2>
              <p className="text-lg text-neutral-gray mb-8">
                I become an embedded member of your leadership team - joining your meetings,
                owning initiatives, and driving execution. Not advice from the sidelines,
                but hands-on leadership that delivers results.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "Fractional COO, CRO, or VP Sales leadership embedded in your team",
                  "Hands-on execution and implementation from day one",
                  "Process design, KPI development, and team coaching",
                  "Recruiting and talent acquisition to build your team with proven winners",
                  "Access to my curated network of specialized fractional experts - CFOs, CMOs, CTOs, and more",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-neutral-gray">{item}</span>
                  </li>
                ))}
              </ul>
              <Link href="/services" className="btn-primary inline-block">
                See How It Works
              </Link>
            </div>

            <div className="space-y-6">
              <div className="card border-l-4 border-l-primary">
                <h3 className="font-heading font-bold text-primary mb-2">Embedded Leadership</h3>
                <p className="text-neutral-gray">
                  I'm not a consultant who drops in once a month. I'm in your Slack, on your calls, and driving your team forward.
                </p>
              </div>
              <div className="card border-l-4 border-l-secondary">
                <h3 className="font-heading font-bold text-secondary mb-2">Network Access</h3>
                <p className="text-neutral-gray">
                  Need a fractional CFO, CMO, or CTO? I'll match you with personally vetted operators from my trusted network and ensure quality results.
                </p>
              </div>
              <div className="card border-l-4 border-l-accent">
                <h3 className="font-heading font-bold text-accent mb-2">Built to Scale</h3>
                <p className="text-neutral-gray">
                  Everything I build is designed to outlast me - processes, playbooks, and trained teams that keep winning.
                </p>
              </div>
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
