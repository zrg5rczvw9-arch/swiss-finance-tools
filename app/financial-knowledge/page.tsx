import { Navigation } from "@/components/navigation";

const topics = [
  {
    icon: "📈",
    title: "ETF Investing",
    description:
      "Learn how ETFs work, why diversification matters and how long-term investing can help build wealth.",
  },
  {
    icon: "💰",
    title: "Compound Interest",
    description:
      "Understand how compound growth can turn regular investments into significant long-term wealth.",
  },
  {
    icon: "🎯",
    title: "Financial Goals",
    description:
      "Set realistic financial goals and build a strategy to achieve them step by step.",
  },
];

const principles = [
  {
    title: "Think Long-Term",
    description:
      "Successful investing often rewards patience and consistency rather than short-term speculation.",
  },
  {
    title: "Diversify",
    description:
      "Spreading investments across different assets can help reduce risk and improve stability.",
  },
  {
    title: "Stay Consistent",
    description:
      "Regular investing habits can be more powerful than trying to predict market movements.",
  },
  {
    title: "Keep Learning",
    description:
      "Financial education is one of the most valuable investments you can make.",
  },
];

export default function FinancialKnowledgePage() {
  return (
    <>
      <Navigation />

      <main className="max-w-6xl mx-auto px-6 py-24">
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-1.5 bg-accent/10 text-accent rounded-full text-sm font-medium mb-4">
            Financial Education
          </span>

          <h1 className="text-5xl font-bold text-primary mb-6">
            Financial Knowledge
          </h1>

          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Learn the fundamentals of investing, wealth building and
            long-term financial planning through clear and practical
            financial education.
          </p>
        </div>

        <div className="rounded-3xl border border-border bg-card p-10 shadow-lg mb-12">
          <h2 className="text-3xl font-bold text-primary mb-4">
            Why Financial Education Matters
          </h2>

          <p className="text-muted-foreground leading-relaxed">
            Building wealth is not only about earning more money.
            Understanding how investing, saving and financial planning
            work can have a significant impact on your future.
            Our goal is to make financial concepts easier to understand
            and accessible to everyone.
          </p>
        </div>

        <h2 className="text-3xl font-bold text-primary mb-8">
          Featured Topics
        </h2>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {topics.map((topic) => (
            <div
              key={topic.title}
              className="rounded-3xl border border-border bg-card p-8 shadow-lg hover:shadow-xl transition-all"
            >
              <div className="text-5xl mb-4">{topic.icon}</div>

              <h3 className="text-xl font-semibold text-primary mb-3">
                {topic.title}
              </h3>

              <p className="text-muted-foreground">
                {topic.description}
              </p>
            </div>
          ))}
        </div>

        <div className="rounded-3xl border border-border bg-card p-10 shadow-lg mb-16">
          <h2 className="text-3xl font-bold text-primary mb-6">
            Core Principles
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {principles.map((principle) => (
              <div key={principle.title}>
                <h3 className="text-xl font-semibold text-primary mb-2">
                  {principle.title}
                </h3>

                <p className="text-muted-foreground">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-accent/30 bg-accent/5 p-10 text-center">
          <h2 className="text-3xl font-bold text-primary mb-4">
            More Resources Coming Soon
          </h2>

          <p className="text-muted-foreground max-w-2xl mx-auto">
            We are continuously expanding our educational content with
            new guides, explanations and practical resources to help
            users better understand investing and personal finance.
          </p>
        </div>
      </main>
    </>
  );
}