import type { Metadata } from "next";
import "./globals.css";
import ClientBody from "./ClientBody";
import Header from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

export const metadata: Metadata = {
  title: "Intercom | The AI customer service company",
  description: "Intercom is the AI customer service company, helping businesses deliver incredible customer experiences at scale with Fin—the #1 AI agent—and the Intercom Customer Service Suite.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning className="antialiased">
        <ClientBody>
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ClientBody>
      </body>
    </html>
  );
}
