import { CTASection } from "@/components/sections/cta";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function SuitePage() {
  return (
    <>
      <section
        className="relative overflow-hidden bg-intercom-dark py-16 md:py-24"
        style={{
          background: "linear-gradient(to bottom, #242e43, #16191f)"
        }}
      >
        <div className="absolute inset-0"
          style={{
            background: "radial-gradient(70% 50% at 50% 50%, rgba(99, 101, 207, 0.12) 0%, rgba(0, 0, 0, 0) 100%)",
            mixBlendMode: "overlay"
          }}
        ></div>
        <div className="intercom-container relative z-10">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-4 font-ivory text-4xl font-light leading-tight text-white md:text-5xl lg:text-6xl">
              The #1 AI Agent.
              <br />
              The next generation Helpdesk.
              <br />
              One seamless service suite.
            </h1>
            <p className="mb-8 text-xl font-light text-gray-300">
              Fin AI Agent + Helpdesk
            </p>
            <p className="mb-10 text-gray-300">
              The Intercom Customer Service Suite combines the #1 AI agent for customer support with a next-gen Helpdesk—
              built on a single platform that maximizes team efficiency and delivers superior service.
            </p>

            <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
              <Button
                variant="outline"
                size="lg"
                className="w-full rounded-full border-white/20 text-white hover:bg-white/10 sm:w-auto"
                asChild
              >
                <Link href="/view-demo">View demo</Link>
              </Button>
              <Button
                variant="default"
                size="lg"
                className="w-full rounded-full bg-white text-intercom-dark hover:bg-white/90 sm:w-auto"
                asChild
              >
                <Link href="/start-free-trial">Start free trial</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="intercom-container">
          <h2 className="mb-12 text-center font-ivory text-3xl font-light md:text-4xl">
            Built to work together as one.
          </h2>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="rounded-lg p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-accent/10 text-accent">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <h3 className="mb-2 text-lg font-semibold">
                Fin AI Agent handles most customer queries.
              </h3>
              <p className="text-sm text-gray-600">
                Resolving complex queries and handing off to your team when needed.
              </p>
            </div>

            <div className="rounded-lg p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-accent/10 text-accent">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <h3 className="mb-2 text-lg font-semibold">
                Human agents focus on priority issues.
              </h3>
              <p className="text-sm text-gray-600">
                Using AI-powered tools to investigate and resolve them more efficiently.
              </p>
            </div>

            <div className="rounded-lg p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-accent/10 text-accent">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <h3 className="mb-2 text-lg font-semibold">
                The system improves with every resolution.
              </h3>
              <p className="text-sm text-gray-600">
                Fin gets better by learning from your best answers, and human agents get better by using Copilot—
                resulting in better service for your customers.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16 md:py-24">
        <div className="intercom-container">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-6 font-ivory text-3xl font-light md:text-4xl">
              Fin. The #1 AI agent in customer service.
            </h2>
            <p className="mb-10 text-gray-600">
              Fin is the highest-performing AI agent in customer service, combining industry-leading capabilities
              with the patented Fin AI Engine to resolve more queries than any other AI agent.
            </p>

            <div className="rounded-lg bg-white p-8 shadow-lg">
              <h3 className="mb-6 text-xl font-semibold">
                Fin resolves more queries than any other AI agent
              </h3>
              <p className="mb-8 text-gray-600">
                With an average resolution rate of 57%, Fin delivers the highest-quality answers and
                resolves even the most complex queries.
              </p>

              <Button
                variant="outline"
                className="rounded-full"
                asChild
              >
                <Link href="/fin">Learn more at fin.ai</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="intercom-container">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-6 font-ivory text-3xl font-light md:text-4xl">
              The next-gen Helpdesk designed for efficiency.
            </h2>
            <p className="mb-10 text-gray-600">
              The Helpdesk equips agents with powerful AI tools, actionable insights, and seamless workflows—
              so they can work more efficiently and resolve complex queries faster.
            </p>

            <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
              <div className="rounded-lg bg-white p-6 shadow-sm">
                <h3 className="mb-4 text-lg font-semibold">
                  AI tools that maximize agent productivity
                </h3>
                <p className="text-sm text-gray-600">
                  Powerful AI tools like Copilot provide expert training, troubleshooting, and guidance—
                  so your team can find answers faster and get more done for your customers.
                </p>
              </div>

              <div className="rounded-lg bg-white p-6 shadow-sm">
                <h3 className="mb-4 text-lg font-semibold">
                  Modern software built for speed and collaboration
                </h3>
                <p className="text-sm text-gray-600">
                  A fully configurable Helpdesk with shortcuts, macros, customer context, and ticketing—
                  designed to help agents work smarter and collaborate faster.
                </p>
              </div>

              <div className="rounded-lg bg-white p-6 shadow-sm">
                <h3 className="mb-4 text-lg font-semibold">
                  Actionable insights for continuous improvement
                </h3>
                <p className="text-sm text-gray-600">
                  Deep reporting and AI Insights help you monitor, evaluate, and continuously optimize your customer experience—
                  so you can spot gaps and easily fix issues by topic or channel.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-intercom-dark py-16 md:py-24">
        <div className="intercom-container">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-6 font-ivory text-3xl font-light text-white md:text-4xl">
              One Suite. Superior service.
            </h2>
            <p className="mb-10 text-gray-300">
              The Customer Service Suite delivers superior customer service at scale—
              bringing AI and human support into one connected system that continuously improves performance.
            </p>

            <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
              <div className="rounded-lg bg-white/5 p-6 backdrop-blur-sm">
                <h3 className="mb-4 text-lg font-semibold text-white">
                  A single self-improving system
                </h3>
                <p className="text-sm text-gray-300">
                  One system means everything is connected. AI learns from human conversations,
                  and human agents learn from AI. That feedback loop makes the system smarter—
                  and your support more accurate, consistent, and effective over time.
                </p>
              </div>

              <div className="rounded-lg bg-white/5 p-6 backdrop-blur-sm">
                <h3 className="mb-4 text-lg font-semibold text-white">
                  End-to-end control
                </h3>
                <p className="text-sm text-gray-300">
                  From seamless handoffs, to complex workflows—you control the system.
                  It&apos;s all connected and easy to update—resulting in less effort,
                  smoother operations, and better customer experiences.
                </p>
              </div>

              <div className="rounded-lg bg-white/5 p-6 backdrop-blur-sm">
                <h3 className="mb-4 text-lg font-semibold text-white">
                  Complete performance visibility
                </h3>
                <p className="text-sm text-gray-300">
                  Monitor performance across AI and human support in a single view.
                  Spot issues faster, track what&apos;s working and what&apos;s not, and
                  make smarter decisions using AI-powered suggestions.
                </p>
              </div>

              <div className="rounded-lg bg-white/5 p-6 backdrop-blur-sm">
                <h3 className="mb-4 text-lg font-semibold text-white">
                  Faster setup. Immediate impact.
                </h3>
                <p className="text-sm text-gray-300">
                  Since everything is connected, setup takes days, not weeks.
                  Fin starts resolving conversations on day one so your team
                  gets time back, and customers get answers faster.
                </p>
              </div>
            </div>

            <div className="mt-12">
              <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full rounded-full border-white/20 text-white hover:bg-white/10 sm:w-auto"
                  asChild
                >
                  <Link href="/pricing">View pricing</Link>
                </Button>
                <Button
                  variant="default"
                  size="lg"
                  className="w-full rounded-full bg-white text-intercom-dark hover:bg-white/90 sm:w-auto"
                  asChild
                >
                  <Link href="/start-free-trial">Start free trial</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
