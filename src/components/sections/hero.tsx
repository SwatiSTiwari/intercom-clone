import Link from "next/link";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section
      className="relative overflow-hidden bg-intercom-dark pt-16 pb-20 lg:pb-32 lg:pt-24"
      style={{
        background: "linear-gradient(to bottom, #161011, #242424)",
        boxShadow: "inset 0 0 100px rgba(99, 101, 207, 0.1)"
      }}
    >
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(70% 50% at 50% 50%, rgba(99, 101, 207, 0.12) 0%, rgba(0, 0, 0, 0) 100%)",
          mixBlendMode: "overlay"
        }}
      ></div>
      <div className="intercom-container relative z-10">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="font-ivory text-4xl font-light leading-tight text-white md:text-5xl lg:text-6xl">
            Intercom is the AI customer service company
          </h1>

          <div className="mt-20 grid grid-cols-1 gap-6 md:grid-cols-2 lg:mt-24">
            <div className="overflow-hidden rounded-xl bg-black/20 p-8 backdrop-blur-sm transition-all hover:bg-black/30">
              <h2 className="mb-2 font-ivory text-2xl font-light text-white">Fin</h2>
              <p className="mb-4 text-sm text-gray-300">
                Fin on your existing helpdesk
              </p>
              <p className="mb-6 text-sm text-gray-300">
                Fin AI Agent works with any support helpdesk to automatically answer complex questions, take actions and resolve customer issues.
              </p>
              <Button
                variant="outline"
                className="border-white/20 text-white hover:bg-white/10"
                asChild
              >
                <Link href="/fin">Explore Fin</Link>
              </Button>

              <div className="relative mt-6 h-48 w-full overflow-hidden rounded-lg">
                <div className="absolute inset-0 bg-gradient-to-br from-[#6365cf]/30 to-transparent"></div>
              </div>
            </div>

            <div className="overflow-hidden rounded-xl bg-black/20 p-8 backdrop-blur-sm transition-all hover:bg-black/30">
              <h2 className="mb-2 font-ivory text-2xl font-light text-white">Intercom Suite</h2>
              <p className="mb-4 text-sm text-gray-300">
                Fin + Helpdesk
              </p>
              <p className="mb-6 text-sm text-gray-300">
                One seamless customer service suite that delivers faster response times, more efficient agents, and a single consolidated view of customer service.
              </p>
              <Button
                variant="outline"
                className="border-white/20 text-white hover:bg-white/10"
                asChild
              >
                <Link href="/suite">Explore Intercom Suite</Link>
              </Button>

              <div className="relative mt-6 h-48 w-full overflow-hidden rounded-lg">
                <div className="absolute inset-0 bg-gradient-to-br from-[#5c8c8c]/30 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
