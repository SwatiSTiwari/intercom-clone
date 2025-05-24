import Link from "next/link";
import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <section
      className="bg-intercom-dark py-24 md:py-32"
      style={{
        background: "linear-gradient(to bottom, #242e43, #16191f)"
      }}
    >
      <div className="intercom-container text-center">
        <h2 className="mx-auto max-w-2xl font-ivory text-3xl font-light text-white md:text-4xl">
          Journey into the AI-first future with us
        </h2>
        <div className="mt-8 flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
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
    </section>
  );
}
