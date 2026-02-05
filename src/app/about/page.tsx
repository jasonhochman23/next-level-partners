import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Jason Hochman | Next Level Partners",
  description:
    "Meet Jason Hochman - Revenue Operator, Fractional Executive, and Builder of Teams & Systems. 20+ years of experience building revenue engines.",
};

const experience = [
  {
    company: "Zocdoc",
    logo: "/images/logos/zocdoc.png",
    role: "Account Executive → Sales Director | Series A → Series D",
    years: "7 Years",
    achievements: [
      "Closed the first deals as part of the founding sales team - built the playbook from zero",
      "Scaled Pre-Sales from 10 → 150+ reps, building the engine that drove early hypergrowth",
      "Led all Post-Sales functions (AM, Retention, CS, Implementation) scaling 1 → 75 people, driving growth to $70M ARR and a $2B valuation",
    ],
  },
  {
    company: "Capsule Pharmacy",
    logo: "/images/logos/capsule.png",
    role: "VP of Sales | Series A → Series C",
    years: "3+ Years",
    achievements: [
      "First VP of Sales hire - scaled the team from 0 → 30 reps",
      "Developed the entire GTM strategy still being executed today",
      "Helped drive growth to $1B valuation",
    ],
  },
  {
    company: "Aluna",
    logo: "/images/logos/aluna.png",
    role: "CCO → COO | Series A → Series B",
    years: "3.5 Years",
    achievements: [
      "Joined 4-person team - promoted from Chief Commercial Officer to Chief Operating Officer",
      "Scaled from 0 → 13K users, building GTM and all supporting teams (Sales, AM, Clinical, Billing Ops)",
      "Drove company to successful acquisition",
    ],
  },
  {
    company: "Next Level Partners",
    logo: "",
    role: "Founder",
    years: "Present",
    achievements: [
      "Helping multiple companies build their revenue machines",
      "Fractional COO/CRO for early-stage founders ready to scale",
      "Bringing 17 years of operating experience to companies that need execution, not advice",
    ],
  },
];

const expertise = [
  {
    category: "Revenue Operations",
    skills: ["CRM Implementation", "Sales Enablement", "Pipeline Management", "Forecasting", "RevOps Strategy"],
  },
  {
    category: "Go-to-Market",
    skills: ["GTM Strategy", "Market Entry", "Pricing & Packaging", "Channel Development", "AI-Accelerated Outreach"],
  },
  {
    category: "Sales Leadership",
    skills: ["Team Building", "Sales Process Design", "AI-Driven Rep Ramp", "Sales Onboarding Playbooks", "Deal Execution"],
  },
  {
    category: "Operations",
    skills: ["Process Optimization", "KPI Development", "AI Workflow Automation", "Change Management", "Scaling"],
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-neutral-light to-white section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Photo */}
            <div className="order-2 lg:order-1">
              <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl overflow-hidden">
                <Image
                  src="/images/headshot.png"
                  alt="Jason Hochman"
                  width={500}
                  height={625}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            {/* Content */}
            <div className="order-1 lg:order-2">
              <h1 className="heading-1 mb-4">Meet Jason Hochman</h1>
              <p className="text-xl text-secondary font-semibold mb-6">
                Revenue Operator | Fractional Executive | Builder of Teams & Systems
              </p>
              <div className="prose prose-lg text-neutral-gray">
                <p className="mb-6">
                  After 17 years of building revenue engines at leading companies, I realized
                  something: Most growing companies don't need another full-time executive. They
                  need someone who can parachute in, diagnose what's broken, fix it fast, and
                  build systems that last.
                </p>
                <p className="mb-6">
                  I believe the best consultants are operators who've actually done the work. I
                  don't hand you a strategy deck and walk away - I roll up my sleeves and execute
                  alongside your team.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="heading-2 mb-4">My Journey</h2>
            <p className="text-lg text-neutral-gray">
              From hands-on sales to executive leadership, building revenue engines that scale
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-200 hidden md:block"></div>

              {experience.map((exp, index) => (
                <div key={index} className="relative mb-12 last:mb-0">
                  <div className="md:ml-20">
                    {/* Timeline dot */}
                    <div className="absolute left-6 w-4 h-4 bg-primary rounded-full border-4 border-white shadow hidden md:block"></div>

                    <div className="card">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                        <div className="flex items-center gap-4">
                          {exp.logo && (
                            <Image
                              src={exp.logo}
                              alt={`${exp.company} logo`}
                              width={48}
                              height={48}
                              className="rounded-lg"
                            />
                          )}
                          <div>
                            <h3 className="heading-3">{exp.company}</h3>
                            <p className="text-secondary font-semibold">{exp.role}</p>
                          </div>
                        </div>
                        <span className="text-sm text-neutral-gray bg-neutral-light px-3 py-1 rounded-full mt-2 md:mt-0">
                          {exp.years}
                        </span>
                      </div>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start gap-2 text-neutral-gray">
                            <svg
                              className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="section-padding bg-neutral-light">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-2 mb-4">Core Competencies</h2>
            <p className="text-lg text-neutral-gray">
              Deep expertise across revenue operations, sales leadership, and scaling operations
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {expertise.map((area, index) => (
              <div key={index} className="card">
                <h3 className="heading-3 mb-4">{area.category}</h3>
                <ul className="space-y-2">
                  {area.skills.map((skill, i) => (
                    <li key={i} className="flex items-center gap-2 text-neutral-gray">
                      <span className="w-1.5 h-1.5 bg-secondary rounded-full"></span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Personal Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="heading-2 mb-6">Beyond the Resume</h2>
            <p className="text-lg text-neutral-gray mb-8">
              When I'm not helping companies scale, you'll find me walking, skiing, or hitting
              the gym. Spending time with my wife and 3 boys is my favorite thing - creating new
              memories. I believe the best leaders are well-rounded humans, not work robots.
            </p>
            <div className="bg-neutral-light rounded-2xl p-8">
              <p className="text-primary font-heading text-xl italic">
                "I believe the best consultants are operators who've actually done the work."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Let's Talk About Your Growth Challenges
          </h2>
          <p className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto">
            Ready to see how fractional leadership can accelerate your growth?
          </p>
          <Link href="/contact" className="btn-accent inline-block">
            Book a Call
          </Link>
        </div>
      </section>
    </>
  );
}
