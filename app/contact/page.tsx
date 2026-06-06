import { Navigation } from "@/components/navigation";

export default function ContactPage() {
  return (
    <>
      <Navigation />

      <main className="max-w-6xl mx-auto px-6 py-24">
        <div className="mb-16">
          <h1 className="text-5xl font-bold mb-6 text-primary">
            Contact
          </h1>

          <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed">
            Questions, feedback or suggestions? We'd love to hear from
            you. Every message helps us improve Swiss Finance Tools and
            create a better experience for everyone.
          </p>
        </div>

        <div className="rounded-2xl border border-border bg-card p-8 shadow-lg mb-8">
          <h2 className="text-2xl font-bold mb-4 text-primary">
            Get In Touch
          </h2>

          <p className="text-muted-foreground leading-relaxed mb-4">
            Whether you have an idea for a new calculator, discovered an
            issue or simply want to share feedback, feel free to reach
            out. We appreciate every message and are always interested
            in hearing how we can improve.
          </p>

          <p className="text-muted-foreground mb-2">
            Email:
          </p>

          <a
            href="mailto:colin.farron@icloud.com"
            className="text-accent font-medium hover:underline"
          >
            colin.farron@icloud.com
          </a>
        </div>

        <div className="rounded-2xl border border-border bg-card p-8 shadow-lg mb-8">
          <h2 className="text-2xl font-bold mb-4 text-primary">
            Why Contact Us?
          </h2>

          <p className="text-muted-foreground leading-relaxed">
            User feedback plays an important role in the development of
            Swiss Finance Tools. Suggestions, ideas and bug reports help
            us improve existing calculators and shape future features.
            Even small pieces of feedback can make a meaningful
            difference.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="rounded-2xl border border-border bg-card p-6 shadow-lg">
            <h3 className="text-xl font-semibold mb-3 text-primary">
              💡 Suggestions
            </h3>

            <p className="text-muted-foreground">
              Have an idea for a new calculator, feature or improvement?
              We'd love to hear your suggestions and learn what would be
              most valuable to users.
            </p>
          </div>

          <div className="rounded-2xl border border-border bg-card p-6 shadow-lg">
            <h3 className="text-xl font-semibold mb-3 text-primary">
              🐞 Report Issues
            </h3>

            <p className="text-muted-foreground">
              Found a bug or incorrect calculation? Let us know so we
              can investigate and improve the experience for everyone.
            </p>
          </div>

          <div className="rounded-2xl border border-border bg-card p-6 shadow-lg">
            <h3 className="text-xl font-semibold mb-3 text-primary">
              🤝 Feedback
            </h3>

            <p className="text-muted-foreground">
              We continuously improve Swiss Finance Tools based on real
              user feedback and practical needs.
            </p>
          </div>
        </div>

        <div className="rounded-2xl border border-border bg-card p-8 shadow-lg mb-8">
          <h2 className="text-2xl font-bold mb-4 text-primary">
            Response Times
          </h2>

          <p className="text-muted-foreground leading-relaxed">
            We aim to review all messages as quickly as possible. While
            response times may vary, every suggestion, report and piece
            of feedback is carefully considered.
          </p>
        </div>

        <div className="rounded-2xl border border-border bg-card p-8 shadow-lg">
          <h2 className="text-2xl font-bold mb-4 text-primary">
            Help Shape Swiss Finance Tools
          </h2>

          <p className="text-muted-foreground leading-relaxed">
            Swiss Finance Tools is continuously evolving. User feedback
            helps us identify opportunities, improve existing tools and
            build new resources that make financial planning simpler,
            clearer and more accessible for everyone.
          </p>
        </div>
      </main>
    </>
  );
}

