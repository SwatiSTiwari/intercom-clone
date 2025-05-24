import { Logo } from "@/components/ui/logo";
import Link from "next/link";

const footerLinks = [
  {
    title: "Use cases",
    links: [
      { label: "For customers", href: "/support-for-customers" },
      { label: "For support agents", href: "/support-for-agents" },
      { label: "For support leaders", href: "/support-for-leaders" },
    ],
  },
  {
    title: "Company size",
    links: [{ label: "Early stage", href: "/early-stage" }],
  },
  {
    title: "Partner programs",
    links: [
      { label: "Solution partner program", href: "/solution-partner-program" },
      { label: "Technology partner program", href: "/technology-partner-program" },
    ],
  },
  {
    title: "Industries",
    links: [
      { label: "Financial services", href: "/customers?industry=Fintech%20%26%20financial%20services" },
      { label: "E-commerce", href: "/customers?industry=Retail%20%26%20e-commerce" },
      { label: "Software and technology", href: "/customers?industry=Software%20%26%20technology" },
      { label: "Healthcare", href: "/customers?industry=Health%20%26%20wellness" },
    ],
  },
  {
    title: "Features",
    links: [
      { label: "Fin AI Agent", href: "/fin" },
      { label: "Omnichannel", href: "/suite/helpdesk/omnichannel" },
      { label: "Help Center", href: "/suite/helpdesk/help-center" },
      { label: "Inbox", href: "/suite/helpdesk/inbox" },
      { label: "Copilot", href: "/suite/helpdesk/copilot" },
      { label: "Tickets", href: "/suite/helpdesk/tickets" },
    ],
  },
  {
    title: "Customers",
    links: [
      { label: "Anthropic", href: "/customers/anthropic" },
      { label: "Synthesia", href: "/customers/synthesia" },
      { label: "Lightspeed", href: "/customers/lightspeed" },
      { label: "Nuuly", href: "/customers/nuuly-pioneer" },
      { label: "Fundrise", href: "/customers/fundrise" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Customers", href: "/customers" },
      { label: "Community forum", href: "https://community.intercom.com/" },
      { label: "Careers", href: "/careers" },
      { label: "Newsroom", href: "/newsroom" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Blog", href: "https://www.intercom.com/blog" },
      { label: "Watch a demo", href: "https://www.intercom.com/watch-demo" },
      { label: "Academy", href: "https://academy.intercom.com" },
      { label: "Events", href: "https://www.intercom.com/webinars" },
      { label: "Product changes", href: "https://www.intercom.com/changes" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-intercom-dark py-16 text-white">
      <div className="intercom-container">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-8">
          {footerLinks.map((section) => (
            <div key={section.title} className="col-span-1">
              <h3 className="mb-4 text-sm font-semibold">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-xs text-gray-400 hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-start justify-between border-t border-white/10 pt-8 md:flex-row md:items-center">
          <div className="mb-4 md:mb-0">
            <Logo variant="light" />
          </div>
          <div className="flex flex-wrap gap-4 text-xs text-gray-400">
            <Link href="/terms-and-policies" className="hover:text-white">
              Terms
            </Link>
            <Link href="/legal/privacy" className="hover:text-white">
              Privacy
            </Link>
            <Link href="https://trust.intercom.com" className="hover:text-white">
              Security
            </Link>
            <div className="flex items-center gap-1">
              <svg
                width="16"
                height="16"
                viewBox="0 0 25 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.5 0C5.6 0 0 5.4 0 12h25C25 5.4 19.4 0 12.5 0z"
                  fill="currentColor"
                />
              </svg>
              Your Privacy Choices
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
