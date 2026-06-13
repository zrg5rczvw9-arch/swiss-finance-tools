import Link from "next/link";
import { Navigation } from "@/components/navigation";

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navigation />

      <main className="max-w-4xl mx-auto px-6 py-24">
        <h1 className="text-4xl font-bold mb-8 text-primary">
          Privacy Policy
        </h1>

        <div className="rounded-2xl border border-border bg-card p-8 shadow-lg space-y-8">
          <section>
            <h2 className="text-2xl font-bold mb-3 text-primary">
              Overview
            </h2>

            <p className="text-muted-foreground">
              Swiss Finance Tools respects your privacy. This website is
              designed to provide financial calculators and educational
              content while collecting as little information as possible.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3 text-primary">
              Information Collection
            </h2>

            <p className="text-muted-foreground">
              We do not directly collect personal information such as names,
              addresses, or payment details through this website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3 text-primary">
              Cookies
            </h2>

            <p className="text-muted-foreground">
              Currently, Swiss Finance Tools does not use tracking cookies
              for advertising purposes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3 text-primary">
              Analytics
            </h2>

            <p className="text-muted-foreground">
              Basic anonymous website statistics may be collected to improve
              website performance and user experience.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3 text-primary">
              Third-Party Services
            </h2>

            <p className="text-muted-foreground">
              This website is hosted by Vercel. These services may process
              technical information such as IP addresses, browser types, and
              device information as part of normal website operation.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3 text-primary">
              Financial Disclaimer
            </h2>

            <p className="text-muted-foreground">
              All calculators and educational content on this website are
              provided for informational purposes only and do not constitute
              financial, investment, legal, or tax advice.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3 text-primary">
              Contact
            </h2>

            <p className="text-muted-foreground">
              If you have questions regarding this Privacy Policy, please
              visit our{" "}
              <Link
                href="/contact"
                className="text-accent hover:underline"
              >
                Contact page
              </Link>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3 text-primary">
              Updates
            </h2>

            <p className="text-muted-foreground">
              This Privacy Policy may be updated from time to time. Any
              changes will be published on this page.
            </p>
          </section>

          <p className="text-sm text-muted-foreground pt-4 border-t border-border">
            Last Updated: 13 June 2026
          </p>
        </div>
      </main>
    </>
  );
}