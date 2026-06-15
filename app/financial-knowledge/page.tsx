"use client";

import { useEffect, useState } from "react";
import { Navigation } from "@/components/navigation";

const topics = [
  {
    icon: "📈",
    title: "ETF Investing",
    description:
      "Learn how ETFs work, why diversification matters and how long-term investing can help build wealth.",
    link: "etf-investing",
  },
  {
    icon: "💰",
    title: "Compound Interest",
    description:
      "Understand how compound growth can turn regular investments into significant long-term wealth.",
    link: "compound-interest",
  },
  {
    icon: "🎯",
    title: "Financial Goals",
    description:
      "Set realistic financial goals and build a strategy to achieve them step by step.",
    link: "financial-goals",
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
  const [showTopButton, setShowTopButton] = useState(false);

useEffect(() => {
  const handleScroll = () => {
    const etfSection = document.getElementById("etf-investing");

    if (!etfSection) return;

    setShowTopButton(
      window.scrollY > etfSection.offsetTop - 200
    );
  };

  window.addEventListener("scroll", handleScroll);

  return () =>
    window.removeEventListener("scroll", handleScroll);
}, []);
  return (
    <>
      <Navigation />

      <main className="max-w-6xl mx-auto px-6 py-24">
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-1.5 bg-accent/10 text-accent rounded-full text-sm font-medium mb-4">
            Financial Education
          </span>

          <h1
  id="top"
  className="text-5xl font-bold text-primary mb-6"
>
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

              <a
  href={`#${topic.link}`}
  className="inline-flex mt-4 text-accent font-medium hover:underline"
>
  Read More →
</a>

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

        
  

 <section
  id="etf-investing"
  className="rounded-3xl border border-border bg-card p-10 shadow-lg mb-12"
>
  <h2 className="text-3xl font-bold text-primary mb-4">
    ETF Investing
  </h2>

  <p className="text-lg text-muted-foreground mb-8">
    Learn how ETFs work, why millions of investors use them and how long-term investing can help build wealth over time.
  </p>

  <div className="space-y-6">


<div className="rounded-2xl border border-border bg-background p-6">
  <h3 className="text-xl font-semibold text-primary mb-3">
    What Is an ETF?
  </h3>

  <p className="text-muted-foreground leading-relaxed">
    An ETF (Exchange Traded Fund) is an investment fund that holds a collection of assets such as stocks, bonds or other securities. Instead of buying shares of a single company, investors can buy one ETF and instantly gain exposure to dozens, hundreds or even thousands of investments.
  </p>
</div>

<div className="rounded-2xl border border-border bg-background p-6">
  <h3 className="text-xl font-semibold text-primary mb-3">
    Why Do People Invest?
  </h3>

  <p className="text-muted-foreground leading-relaxed">
    Most people invest because saving money alone often does not keep up with inflation over the long term. Investing allows money to work for you and provides an opportunity to participate in economic growth while building wealth for future goals such as retirement, financial independence or purchasing a home.
  </p>
</div>

<div className="rounded-2xl border border-border bg-background p-6">
  <h3 className="text-xl font-semibold text-primary mb-3">
    How Do ETFs Work?
  </h3>

  <p className="text-muted-foreground leading-relaxed">
    ETFs are traded on stock exchanges just like regular stocks. When you buy shares of an ETF, you own a small portion of all the assets held within that fund. This allows investors to gain broad diversification through a single investment rather than purchasing many individual stocks separately.
  </p>
</div>

<div className="rounded-2xl border border-border bg-background p-6">
  <h3 className="text-xl font-semibold text-primary mb-3">
    Benefits of ETF Investing
  </h3>

  <p className="text-muted-foreground leading-relaxed">
    ETFs are popular because they offer diversification, low costs, accessibility and transparency. Investors can spread risk across many companies and industries while keeping fees relatively low compared to many actively managed funds.
  </p>
</div>

<div className="rounded-2xl border border-border bg-background p-6">
  <h3 className="text-xl font-semibold text-primary mb-3">
    Risks of ETFs
  </h3>

  <p className="text-muted-foreground leading-relaxed">
    Although ETFs offer many advantages, they are not risk-free. Markets can rise and fall, and the value of an ETF may decline during economic downturns. Investors should understand what an ETF holds and maintain a long-term perspective during periods of volatility.
  </p>
</div>

<div className="rounded-2xl border border-border bg-background p-6">
  <h3 className="text-xl font-semibold text-primary mb-3">
    When Should You Start Investing?
  </h3>

  <p className="text-muted-foreground leading-relaxed">
    Many investors benefit from starting as early as possible. Time is one of the most powerful factors in investing because it allows compound growth to work over many years. Even small but consistent investments can grow significantly over the long term.
  </p>
</div>

<div className="rounded-2xl border border-border bg-background p-6">
  <h3 className="text-xl font-semibold text-primary mb-3">
    ETF Investing and Long-Term Wealth Building
  </h3>

  <p className="text-muted-foreground leading-relaxed">
    Successful investing is often based on patience, discipline and consistency. Rather than trying to predict short-term market movements, many investors focus on regularly investing in diversified ETFs over many years. This approach can help build wealth while keeping investing simple and manageable.
  </p>
</div>


  </div>
</section>

<section
  id="compound-interest"
  className="rounded-3xl border border-border bg-card p-10 shadow-lg mb-12"
>
  <h2 className="text-3xl font-bold text-primary mb-4">
    Compound Interest
  </h2>

  <p className="text-lg text-muted-foreground mb-8">
    Discover how compound interest can transform small, regular investments into significant long-term wealth.
  </p>

  <div className="space-y-6">

    <div className="rounded-2xl border border-border bg-background p-6">
      <h3 className="text-xl font-semibold text-primary mb-3">
        What Is Compound Interest?
      </h3>

      <p className="text-muted-foreground leading-relaxed">
        Compound interest is often described as earning interest on your interest. Instead of generating returns only on your original investment, future returns are calculated on both your initial capital and the gains that have already accumulated over time.
      </p>
    </div>

    <div className="rounded-2xl border border-border bg-background p-6">
      <h3 className="text-xl font-semibold text-primary mb-3">
        Why Is It So Powerful?
      </h3>

      <p className="text-muted-foreground leading-relaxed">
        The power of compound interest comes from time. As your investment grows, each year's returns become larger because they are calculated on an increasingly bigger portfolio. Growth often starts slowly but can accelerate dramatically after many years.
      </p>
    </div>

    <div className="rounded-2xl border border-border bg-background p-6">
      <h3 className="text-xl font-semibold text-primary mb-3">
        A Simple Example
      </h3>

      <p className="text-muted-foreground leading-relaxed">
        Imagine investing 10,000 and earning an average annual return of 7%. After one year, your investment grows to 10,700. In the second year, you earn returns not only on the original 10,000 but also on the additional 700. This process continues year after year, creating exponential growth.
      </p>
    </div>

    <div className="rounded-2xl border border-border bg-background p-6">
      <h3 className="text-xl font-semibold text-primary mb-3">
        Starting Early Matters
      </h3>

      <p className="text-muted-foreground leading-relaxed">
        Time is one of the most important factors in investing. Someone who starts investing at age 20 often has a significant advantage over someone who starts at age 35, even if both invest similar amounts. More time means more opportunities for compound growth.
      </p>
    </div>

    <div className="rounded-2xl border border-border bg-background p-6">
      <h3 className="text-xl font-semibold text-primary mb-3">
        Consistency Beats Perfection
      </h3>

      <p className="text-muted-foreground leading-relaxed">
        Many successful investors focus on contributing regularly rather than trying to perfectly time the market. Consistent monthly investing allows compound interest to work continuously and can help smooth out market fluctuations over the long term.
      </p>
    </div>

    <div className="rounded-2xl border border-border bg-background p-6">
      <h3 className="text-xl font-semibold text-primary mb-3">
        Common Mistakes
      </h3>

      <p className="text-muted-foreground leading-relaxed">
        One of the biggest mistakes investors make is underestimating the value of time. Delaying investments, withdrawing money too early or frequently changing strategies can reduce the benefits of compounding. Patience and discipline are often rewarded over long investment periods.
      </p>
    </div>

    <div className="rounded-2xl border border-border bg-background p-6">
      <h3 className="text-xl font-semibold text-primary mb-3">
        Compound Interest and Wealth Building
      </h3>

      <p className="text-muted-foreground leading-relaxed">
        Compound interest is one of the most important concepts in personal finance. Whether saving for retirement, financial independence or future goals, understanding and using compound growth can significantly improve long-term financial outcomes.
      </p>
    </div>

  </div>
</section>

<section
  id="financial-goals"
  className="rounded-3xl border border-border bg-card p-10 shadow-lg mb-12"
>
  <h2 className="text-3xl font-bold text-primary mb-4">
    Financial Goals
  </h2>

  <p className="text-lg text-muted-foreground mb-8">
    Learn how clear financial goals can help you make better decisions, stay motivated and build long-term wealth.
  </p>

  <div className="space-y-6">

    <div className="rounded-2xl border border-border bg-background p-6">
      <h3 className="text-xl font-semibold text-primary mb-3">
        Why Financial Goals Matter
      </h3>

      <p className="text-muted-foreground leading-relaxed">
        Financial goals provide direction for your money. Without clear goals, it can be difficult to know how much to save, invest or spend. Having a target helps you make decisions that support your future rather than focusing only on short-term wants.
      </p>
    </div>

    <div className="rounded-2xl border border-border bg-background p-6">
      <h3 className="text-xl font-semibold text-primary mb-3">
        Short-Term Goals
      </h3>

      <p className="text-muted-foreground leading-relaxed">
        Short-term goals are objectives you want to achieve within the next few months or years. Examples include building an emergency fund, saving for a vacation or paying off high-interest debt. These goals often create the foundation for future financial success.
      </p>
    </div>

    <div className="rounded-2xl border border-border bg-background p-6">
      <h3 className="text-xl font-semibold text-primary mb-3">
        Medium-Term Goals
      </h3>

      <p className="text-muted-foreground leading-relaxed">
        Medium-term goals usually cover a period of three to ten years. Examples may include saving for a home, funding education or starting a business. These goals often require a balance between saving, investing and careful planning.
      </p>
    </div>

    <div className="rounded-2xl border border-border bg-background p-6">
      <h3 className="text-xl font-semibold text-primary mb-3">
        Long-Term Goals
      </h3>

      <p className="text-muted-foreground leading-relaxed">
        Long-term goals typically involve major life objectives such as retirement, achieving financial independence or creating generational wealth. Because these goals are many years away, investing and compound growth often play an important role.
      </p>
    </div>

    <div className="rounded-2xl border border-border bg-background p-6">
      <h3 className="text-xl font-semibold text-primary mb-3">
        Setting SMART Goals
      </h3>

      <p className="text-muted-foreground leading-relaxed">
        Effective goals are often specific, measurable, achievable, relevant and time-based. Instead of saying "I want more money," a stronger goal would be "I want to invest CHF 100,000 within the next 10 years." Clear goals make progress easier to track.
      </p>
    </div>

    <div className="rounded-2xl border border-border bg-background p-6">
      <h3 className="text-xl font-semibold text-primary mb-3">
        Staying Motivated
      </h3>

      <p className="text-muted-foreground leading-relaxed">
        Financial success rarely happens overnight. Tracking your progress, celebrating milestones and reviewing your goals regularly can help maintain motivation during market fluctuations and changing life circumstances.
      </p>
    </div>

    <div className="rounded-2xl border border-border bg-background p-6">
      <h3 className="text-xl font-semibold text-primary mb-3">
        Building a Financial Plan
      </h3>

      <p className="text-muted-foreground leading-relaxed">
        A financial plan connects your goals with practical actions. By combining budgeting, saving, investing and regular reviews, you can create a roadmap that guides your financial decisions and helps you move closer to your desired future.
      </p>
    </div>

  </div>
</section>

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
      {showTopButton && (
  <a
    href="#top"
    className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-xl hover:scale-110 transition-all"
  >
    ↑
  </a>
)}
      </main>
    </>
  );
}