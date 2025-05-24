import { HeroSection } from "@/components/sections/hero";
import { TestimonialsSection } from "@/components/sections/testimonials";
import { TrustedBySection } from "@/components/sections/trusted-by";
import { CTASection } from "@/components/sections/cta";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <HeroSection />

      <TrustedBySection />

      <section className="py-16 md:py-24">
        <div className="intercom-container">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-6 font-ivory text-3xl font-light md:text-4xl">
              Built to work together as one.
            </h2>

            <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
              <div className="rounded-lg p-6">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-accent/10 text-accent">
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
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-accent/10 text-accent">
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
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-accent/10 text-accent">
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
                  Fin gets better by learning from your best answers, and human agents get better by using Copilot—resulting in better service for your customers.
                </p>
              </div>
            </div>

            <div className="mt-16">
              <Button
                variant="default"
                size="lg"
                className="rounded-full"
                asChild
              >
                <Link href="/start-free-trial">Start free trial</Link>
              </Button>
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

            <div className="mt-8 rounded-lg bg-white p-8 shadow-lg">
              <h3 className="mb-4 text-xl font-semibold">
                Fin resolves more queries than any other AI agent
              </h3>
              <p className="mb-6 text-gray-600">
                With an average resolution rate of 57%, Fin delivers the highest-quality answers and
                resolves even the most complex queries.
              </p>

              <div className="mb-8 flex items-end justify-center space-x-6">
                <div className="flex flex-col items-center">
                  <div className="h-64 w-10 rounded-t-lg bg-accent"></div>
                  <p className="mt-2 text-sm font-semibold">Fin</p>
                  <p className="text-sm text-gray-600">57%</p>
                </div>
                <div className="flex flex-col items-center">
                  <div className="h-32 w-10 rounded-t-lg bg-gray-300"></div>
                  <p className="mt-2 text-sm font-semibold">Competitor A</p>
                  <p className="text-sm text-gray-600">28%</p>
                </div>
                <div className="flex flex-col items-center">
                  <div className="h-28 w-10 rounded-t-lg bg-gray-300"></div>
                  <p className="mt-2 text-sm font-semibold">Competitor B</p>
                  <p className="text-sm text-gray-600">25%</p>
                </div>
                <div className="flex flex-col items-center">
                  <div className="h-24 w-10 rounded-t-lg bg-gray-300"></div>
                  <p className="mt-2 text-sm font-semibold">Competitor C</p>
                  <p className="text-sm text-gray-600">21%</p>
                </div>
              </div>

              <Button
                variant="outline"
                className="rounded-full"
                asChild
              >
                <Link href="/fin">Learn more</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <TestimonialsSection />

      <CTASection />
    </>
  );
}
