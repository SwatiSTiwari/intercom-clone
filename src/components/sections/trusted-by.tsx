export function TrustedBySection() {
  const companies = [
    "Anthropic", "Clay", "Lightspeed", "Marshmallow", "Amplitude",
    "Moneybox", "Shutterstock", "Synthesia", "Lovable", "Monday.com",
    "Consensys", "LaunchDarkly", "Culture Amp", "Coda", "Aspire",
    "Perplexity", "Carvana", "Pfizer", "Spendesk", "Microsoft",
    "Chess.com", "Xero", "Envoy", "Topstep", "Mangopay"
  ];

  return (
    <section className="bg-intercom-light py-12">
      <div className="intercom-container">
        <p className="mb-8 text-center text-sm font-medium text-gray-500">
          Trusted by over 30,000 customer service leaders
        </p>

        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-6">
          {companies.map((company) => (
            <div key={company} className="text-sm font-medium text-gray-400">
              {company}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
