import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Insights | Next Level Partners",
  description:
    "Practical advice on scaling revenue and operations. Articles on fractional leadership, RevOps, sales leadership, and go-to-market strategy.",
};

const contentPillars = [
  "Revenue Operations",
  "Sales Leadership",
  "Fractional Executive Insights",
  "Scaling Operations",
  "Go-to-Market Strategy",
];

const articles = [
  {
    id: 1,
    title: "5 Signs Your Startup Needs a Fractional COO",
    excerpt:
      "Not sure if you need full-time operations leadership? Here are the five telltale signs it's time to bring in fractional help-and what to expect when you do.",
    category: "Fractional Executive Insights",
    readTime: "6 min read",
    date: "January 2026",
    featured: true,
  },
  {
    id: 2,
    title: "How to Build a Revenue Operations Function from Scratch",
    excerpt:
      "Revenue Operations is more than just a buzzword. Here's a practical guide to building RevOps that actually drives results, from day one to scale.",
    category: "Revenue Operations",
    readTime: "8 min read",
    date: "January 2026",
    featured: true,
  },
  {
    id: 3,
    title: "The ROI of Fractional Leadership: A Data-Driven Analysis",
    excerpt:
      "How does fractional executive cost compare to full-time? We break down the real numbers and show when fractional makes financial sense.",
    category: "Fractional Executive Insights",
    readTime: "5 min read",
    date: "January 2026",
    featured: false,
  },
  {
    id: 4,
    title: "From Chaos to Systems: A 90-Day Operations Playbook",
    excerpt:
      "A step-by-step guide to transforming operational chaos into scalable systems. The exact playbook I use with every new engagement.",
    category: "Scaling Operations",
    readTime: "10 min read",
    date: "January 2026",
    featured: false,
  },
  {
    id: 5,
    title: "Why Most CRM Implementations Fail (And How to Fix Yours)",
    excerpt:
      "80% of CRM implementations fail to deliver expected value. Here's why - and the framework that ensures yours succeeds.",
    category: "Revenue Operations",
    readTime: "7 min read",
    date: "January 2026",
    featured: false,
  },
];

export default function InsightsPage() {
  const featuredArticles = articles.filter((a) => a.featured);
  const regularArticles = articles.filter((a) => !a.featured);

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-neutral-light to-white section-padding">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="heading-1 mb-4">Insights for Growing Companies</h1>
            <p className="text-xl text-neutral-gray mb-8">
              Practical advice on scaling revenue and operations
            </p>

            {/* Content Pillars */}
            <div className="flex flex-wrap gap-2">
              {contentPillars.map((pillar, index) => (
                <span
                  key={index}
                  className="bg-white px-4 py-2 rounded-full text-sm font-medium text-neutral-gray border border-gray-200 hover:border-primary hover:text-primary cursor-pointer transition-colors"
                >
                  {pillar}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="heading-2 mb-8">Featured Articles</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {featuredArticles.map((article) => (
              <article key={article.id} className="card group cursor-pointer hover:border-primary">
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium">
                    {article.category}
                  </span>
                  <span className="text-sm text-neutral-gray">{article.readTime}</span>
                </div>
                <h3 className="heading-3 mb-3 group-hover:text-secondary transition-colors">
                  {article.title}
                </h3>
                <p className="text-neutral-gray mb-4">{article.excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-neutral-gray">{article.date}</span>
                  <span className="text-secondary font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                    Read More
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* All Articles */}
      <section className="section-padding bg-neutral-light">
        <div className="container-custom">
          <h2 className="heading-2 mb-8">All Articles</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularArticles.map((article) => (
              <article key={article.id} className="card group cursor-pointer hover:border-primary">
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-secondary/10 text-secondary px-3 py-1 rounded-full text-xs font-medium">
                    {article.category}
                  </span>
                </div>
                <h3 className="text-xl font-heading font-semibold text-primary mb-3 group-hover:text-secondary transition-colors">
                  {article.title}
                </h3>
                <p className="text-neutral-gray text-sm mb-4 line-clamp-3">{article.excerpt}</p>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-neutral-gray">{article.readTime}</span>
                  <span className="text-neutral-gray">{article.date}</span>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-neutral-gray mb-4">More articles coming soon...</p>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="section-padding bg-white" id="newsletter">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="heading-2 mb-4">Get Weekly Insights Delivered</h2>
            <p className="text-lg text-neutral-gray mb-8">
              Join 500+ founders and operators who read our weekly newsletter
            </p>

            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-button focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                required
              />
              <button type="submit" className="btn-primary whitespace-nowrap">
                Subscribe
              </button>
            </form>

            <p className="text-sm text-neutral-gray mt-4">
              Unsubscribe anytime. We'll never spam you.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Want to Put These Insights Into Action?
          </h2>
          <p className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto">
            Let's discuss how these principles can be applied to your specific situation.
          </p>
          <Link href="/contact" className="btn-accent inline-block">
            Book a Discovery Call
          </Link>
        </div>
      </section>
    </>
  );
}
