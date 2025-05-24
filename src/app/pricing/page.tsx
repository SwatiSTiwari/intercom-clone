import { CTASection } from "@/components/sections/cta";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { CheckIcon } from "lucide-react";

interface PricingFeature {
  title: string;
  description?: string;
  included: boolean;
}

interface PricingPlan {
  title: string;
  description: string;
  resolution: string;
  seat: string;
  features: PricingFeature[];
  cta: {
    label: string;
    href: string;
  };
  popular?: boolean;
}

const pricingPlans: PricingPlan[] = [
  {
    title: "Essential",
    description: "The customer support plan for individuals, startups, and small businesses.",
    resolution: "$0.99",
    seat: "$29",
    features: [
      { title: "Fin AI Agent $0.99 per resolution", included: true },
      { title: "Messenger", included: true },
      { title: "Shared Inbox and Ticketing system", included: true },
      { title: "Pre-built reports", included: true },
      { title: "Public Help Center", included: true },
    ],
    cta: {
      label: "Free 14 day trial",
      href: "/start-free-trial?plan=essential",
    },
  },
  {
    title: "Advanced",
    description: "Powerful automation tools and AI features for growing support teams.",
    resolution: "$0.99",
    seat: "$85",
    features: [
      { title: "Every Essential feature", included: true },
      { title: "Multiple team Inboxes", included: true },
      { title: "Workflows automation builder", included: true },
      { title: "Round robin assignment", included: true },
      { title: "Private and multilingual Help Center", included: true },
      { title: "Includes 20 free Lite seats", included: true },
    ],
    cta: {
      label: "Free 14 day trial",
      href: "/start-free-trial?plan=advanced",
    },
    popular: true,
  },
  {
    title: "Expert",
    description: "Collaboration, security, and multibrand features for large support teams.",
    resolution: "$0.99",
    seat: "$132",
    features: [
      { title: "Every Advanced feature", included: true },
      { title: "SSO & identity management", included: true },
      { title: "HIPAA support", included: true },
      { title: "Service level agreements (SLAs)", included: true },
      { title: "Multibrand Messenger / Help Center", included: true },
      { title: "Includes 50 free Lite seats", included: true },
    ],
    cta: {
      label: "Free 14 day trial",
      href: "/start-free-trial?plan=expert",
    },
  },
];

const standaloneFinPlan = {
  title: "Fin AI Agent",
  description: "Use Fin with your current helpdesk including Zendesk, Salesforce, and more.",
  resolution: "$0.99",
  minimum: "50 resolutions per month minimum",
  features: [
    { title: "Set up in under an hour on your current helpdesk", included: true },
    { title: "Answers email, live chat, phone and more", included: true },
    { title: "Customizable tone & answer length", included: true },
    { title: "Takes action on external systems", included: true },
    { title: "Hands off to agents in preferred Inbox", included: true },
  ],
  cta: {
    label: "Free 14 day trial",
    href: "/start-free-trial?plan=fin",
  },
  demo: {
    label: "Get a demo",
    href: "/view-demos?formSource=fin2",
  },
};

export default function PricingPage() {
  return (
    <>
      <section className="py-16 md:py-24">
        <div className="intercom-container">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-4 font-ivory text-4xl font-light md:text-5xl">
              Get the #1 AI agent and AI-first customer service platform
            </h1>

            <div className="mb-10 flex items-center justify-center space-x-4">
              <span className="text-sm font-medium">Billed annually</span>
              <span className="text-sm font-medium text-gray-400">Billed monthly</span>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {pricingPlans.map((plan) => (
                <Card key={plan.title} className={`relative ${plan.popular ? 'border-accent shadow-md' : 'border-gray-200'}`}>
                  {plan.popular && (
                    <div className="absolute -top-3 left-0 right-0 mx-auto w-max rounded-full bg-accent px-3 py-1 text-xs font-medium text-white">
                      Popular
                    </div>
                  )}
                  <CardHeader>
                    <CardTitle className="text-xl">{plan.title}</CardTitle>
                    <CardDescription className="min-h-14 text-sm">
                      {plan.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <p className="mb-1 flex items-baseline">
                        <span className="text-3xl font-bold">{plan.resolution}</span>
                        <span className="ml-1 text-sm text-gray-500">per Fin resolution</span>
                      </p>
                      <p className="flex items-baseline">
                        <span className="text-3xl font-bold">{plan.seat}</span>
                        <span className="ml-1 text-sm text-gray-500">per seat/mo, billed annually</span>
                      </p>
                    </div>

                    <div className="space-y-3">
                      <p className="text-sm font-medium">Key features include:</p>
                      <ul className="space-y-2">
                        {plan.features.map((feature) => (
                          <li key={feature.title} className="flex items-start gap-2 text-sm">
                            <CheckIcon className="h-5 w-5 flex-shrink-0 text-green-500" />
                            <span>{feature.title}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button
                      className="w-full rounded-full"
                      variant={plan.popular ? "default" : "outline"}
                      asChild
                    >
                      <Link href={plan.cta.href}>{plan.cta.label}</Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>

            <div className="mt-16">
              <div className="mx-auto max-w-lg">
                <Card className="border-gray-200">
                  <CardHeader>
                    <CardTitle className="text-xl">Already have a helpdesk?</CardTitle>
                    <CardTitle className="text-xl">{standaloneFinPlan.title}</CardTitle>
                    <CardDescription className="text-sm">
                      {standaloneFinPlan.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <p className="mb-1 flex items-baseline">
                        <span className="text-3xl font-bold">{standaloneFinPlan.resolution}</span>
                        <span className="ml-1 text-sm text-gray-500">per Fin resolution</span>
                      </p>
                      <p className="text-sm text-gray-500">
                        {standaloneFinPlan.minimum}
                      </p>
                    </div>

                    <div className="space-y-3">
                      <p className="text-sm font-medium">Features include:</p>
                      <ul className="space-y-2">
                        {standaloneFinPlan.features.map((feature) => (
                          <li key={feature.title} className="flex items-start gap-2 text-sm">
                            <CheckIcon className="h-5 w-5 flex-shrink-0 text-green-500" />
                            <span>{feature.title}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                  <CardFooter className="flex flex-col space-y-3 sm:flex-row sm:justify-between sm:space-y-0">
                    <Button
                      className="w-full rounded-full sm:w-auto"
                      variant="outline"
                      asChild
                    >
                      <Link href={standaloneFinPlan.cta.href}>{standaloneFinPlan.cta.label}</Link>
                    </Button>
                    <Button
                      className="w-full rounded-full sm:w-auto"
                      variant="outline"
                      asChild
                    >
                      <Link href={standaloneFinPlan.demo.href}>{standaloneFinPlan.demo.label}</Link>
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </div>

            <div className="mt-8 rounded-lg bg-gray-50 p-6 text-center">
              <p className="text-sm text-gray-600">
                All plans include free, unlimited live-chat, support email, in-app chats, banners, and tooltips.
                <br />
                Pay-as-you-go for email campaigns, SMS, WhatsApp, and Phone.
              </p>
              <div className="mt-4 flex flex-col space-y-2 sm:flex-row sm:justify-center sm:space-x-4 sm:space-y-0">
                <Button variant="link" size="sm" asChild>
                  <Link href="/">View all features</Link>
                </Button>
                <Button variant="link" size="sm" asChild>
                  <Link href="/">View channels pricing</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-12 md:py-16">
        <div className="intercom-container">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-8 text-center font-ivory text-3xl font-light">
              Get an instant estimate based on your support needs
            </h2>

            <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
              <div className="rounded-lg bg-white p-6 shadow-sm">
                <h3 className="mb-4 text-center text-xl font-medium">
                  Find the right plan for your team
                </h3>
                <p className="mb-6 text-center text-sm text-gray-600">
                  Get an estimated cost for Intercom&apos;s AI-first customer service platform—based on your team size, expected Fin resolutions, and more.
                </p>
                <Button className="w-full rounded-full" variant="outline">
                  Calculate costs
                </Button>
              </div>

              <div className="rounded-lg bg-white p-6 shadow-sm">
                <h3 className="mb-4 text-center text-xl font-medium">
                  See how much Fin could save you
                </h3>
                <p className="mb-6 text-center text-sm text-gray-600">
                  Estimate how much time and money Fin could save your team—based on your current and future support volume.
                </p>
                <Button className="w-full rounded-full" variant="outline">
                  Calculate savings
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-intercom-light py-16">
        <div className="intercom-container">
          <div className="mx-auto max-w-4xl rounded-lg bg-white p-8 shadow-lg">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <div>
                <h2 className="mb-4 font-ivory text-2xl font-light">
                  Startups get 90% off Intercom + 1 year of Fin free
                </h2>
                <p className="mb-6 text-sm text-gray-600">
                  Get a direct line to your customers with best-in-class support.
                </p>
                <Button className="rounded-full" asChild>
                  <Link href="/early-stage">Apply now</Link>
                </Button>
              </div>
              <div className="flex items-center justify-center">
                <div className="h-40 w-40 rounded-full bg-gray-200"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="intercom-container">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-8 text-center font-ivory text-3xl font-light">
              Your questions, answered
            </h2>

            <div className="space-y-6">
              <div className="rounded-lg border border-gray-200 p-6">
                <h3 className="mb-3 text-lg font-medium">
                  How does Intercom pricing work?
                </h3>
                <div className="text-sm text-gray-600">
                  <p className="mb-4">
                    Pricing depends on whether you&apos;re purchasing our customer service platform with Fin AI Agent,
                    or Fin with your current helpdesk including (Zendesk, Salesforce, and more).
                  </p>
                  <h4 className="mb-2 font-medium">Pricing for Fin AI Agent on Intercom:</h4>
                  <p className="mb-4">
                    Resolution-based pricing: You&apos;ll only pay $0.99 per resolution.
                    <br />
                    You&apos;ll need at least one seat from one of our three plans (Essential, Advanced or Expert)
                    to start using Fin on Intercom.
                  </p>
                  <h4 className="mb-2 font-medium">Pricing for Intercom&apos;s customer service platform:</h4>
                  <p>
                    When purchasing Intercom&apos;s customer service platform, you&apos;ll choose from three plans:
                    Essential, Advanced, or Expert. The plan you choose determines your seat price.
                    You&apos;ll then be charged based on the number of teammates who require Full seats.
                  </p>
                </div>
              </div>

              <div className="rounded-lg border border-gray-200 p-6">
                <h3 className="mb-3 text-lg font-medium">
                  What is Fin AI Agent?
                </h3>
                <div className="text-sm text-gray-600">
                  <p>
                    Fin is the #1 AI agent in customer service, delivering the highest quality answers
                    and handling the most complex queries. It can be used on Intercom or integrated with
                    your existing helpdesk.
                  </p>
                </div>
              </div>

              <div className="rounded-lg border border-gray-200 p-6">
                <h3 className="mb-3 text-lg font-medium">
                  Do you offer discounts for startups?
                </h3>
                <div className="text-sm text-gray-600">
                  <p>
                    Yes! Startups can get 90% off Intercom plus 1 year of Fin free.
                    Apply through our Early Stage program.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
