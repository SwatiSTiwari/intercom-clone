"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section
      className="relative overflow-hidden min-h-screen pt-16 pb-20 lg:pb-32 lg:pt-24"
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
      <div className="relative z-10 h-full w-full">
        <div className="mx-auto max-w-none px-6 lg:px-8 text-center h-full flex flex-col">
          <motion.h1
            className="font-ivory text-5xl font-light leading-tight text-white md:text-6xl lg:text-7xl mb-12 lg:mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Intercom is the AI customer service company
          </motion.h1>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:gap-6 flex-1 min-h-[800px] lg:min-h-[900px] w-full">
            <motion.div
              className="overflow-hidden rounded-3xl p-16 lg:p-20 xl:p-24 backdrop-blur-sm transition-all hover:bg-black/50 h-full flex flex-col w-full"
              style={{ backgroundImage: "url('/images/fin-background.webp')", backgroundSize: "cover", backgroundPosition: "center" }}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div 
                className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#6365cf]/15 to-transparent"
                style={{ pointerEvents: "none" }}
              ></div>
              <div className="text-left mb-12 w-full relative z-10">
                <h2 className="mb-6 font-ivory text-5xl lg:text-6xl xl:text-8xl font-light text-white">Fin</h2>
                <p className="mb-6 text-xl lg:text-2xl xl:text-3xl text-gray-300 font-light">
                  Fin on your existing helpdesk
                </p>
                <p className="mb-12 text-lg lg:text-xl xl:text-2xl text-gray-300 max-w-2xl leading-relaxed">
                  Fin AI Agent works with any support helpdesk to automatically answer complex questions, take actions and resolve customer issues.
                </p>
                <Button
                  variant="outline"
                  className="border-white/40 text-white hover:bg-white/20 px-16 py-5 text-xl font-light"
                  asChild
                >
                  <Link href="/fin">Explore Fin</Link>
                </Button>
              </div>

              <div className="relative flex-1 w-full overflow-hidden rounded-2xl mt-auto min-h-[450px] lg:min-h-[500px] z-10">
                <Image
                  src="/images/fin-product.webp"
                  alt="Fin AI Agent screenshot"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-[#6365cf]/15 to-transparent"></div>
              </div>
            </motion.div>

            <motion.div
              className="overflow-hidden rounded-3xl p-16 lg:p-20 xl:p-24 backdrop-blur-sm transition-all hover:bg-black/50 h-full flex flex-col w-full"
              style={{ backgroundImage: "url('/images/suite-background.webp')", backgroundSize: "cover", backgroundPosition: "center" }}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div 
                className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#5c8c8c]/15 to-transparent"
                style={{ pointerEvents: "none" }}
              ></div>
              <div className="text-left mb-12 w-full relative z-10">
                <h2 className="mb-6 font-ivory text-5xl lg:text-6xl xl:text-8xl font-light text-white">Intercom Suite</h2>
                <p className="mb-6 text-xl lg:text-2xl xl:text-3xl text-gray-300 font-light">
                  Fin + Helpdesk
                </p>
                <p className="mb-12 text-lg lg:text-xl xl:text-2xl text-gray-300 max-w-2xl leading-relaxed">
                  One seamless customer service suite that delivers faster response times, more efficient agents, and a single consolidated view of customer service.
                </p>
                <Button
                  variant="outline"
                  className="border-white/40 text-white hover:bg-white/20 px-16 py-5 text-xl font-light"
                  asChild
                >
                  <Link href="/suite">Explore Intercom Suite</Link>
                </Button>
              </div>

              <div className="relative flex-1 w-full overflow-hidden rounded-2xl mt-auto min-h-[450px] lg:min-h-[500px] z-10">
                <Image
                  src="/images/suite-product.webp"
                  alt="Intercom Suite screenshot"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-[#5c8c8c]/15 to-transparent"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}