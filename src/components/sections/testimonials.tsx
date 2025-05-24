import { Card, CardContent } from "@/components/ui/card";

interface Testimonial {
  quote: string;
  author: string;
  title: string;
  company: string;
  statLabel?: string;
  statValue?: string;
}

const testimonials: Testimonial[] = [
  {
    quote: "Within six months, Fin had resolved over 6,000 conversations, saved the team over 1,300 hours and pushed self-serve support rates as high as 87%.",
    author: "Team",
    title: "",
    company: "Synthesia",
  },
  {
    quote: "The numbers speak for themselves. We're seeing a 50% resolution rate with Fin, which is pretty amazing!",
    author: "Ben Peak",
    title: "Director, Technical Support",
    company: "Robin",
  },
  {
    quote: "Within six days, Fin is successfully resolving 42% of conversations. It's truly surpassed my expectations.",
    author: "Dane Burgess",
    title: "Customer Support Director",
    company: "Linktree",
  },
  {
    quote: "Our agents are dramatically more efficient when using Copilot. In testing, agents using Copilot were able to close 31% more customer conversations daily.",
    author: "Angelo Livanos",
    title: "Senior Director of Global Support",
    company: "Lightspeed",
  },
  {
    statValue: "70%",
    statLabel: "Resolution rate with Fin",
    author: "Ruby Picton",
    title: "Investor Care Lead",
    company: "Sharesies",
    quote: "",
  },
  {
    statValue: "97%",
    statLabel: "Fin CSAT Score",
    author: "Sam Miller",
    title: "Customer Support Operations Manager",
    company: "Dental Intelligence",
    quote: "",
  },
  {
    statValue: "95%",
    statLabel: "Global CSAT Score",
    author: "Jared Ellis",
    title: "Global Director for Product Support",
    company: "Culture Amp",
    quote: "",
  },
];

export function TestimonialsSection() {
  return (
    <section className="bg-intercom-dark py-16 md:py-24">
      <div className="intercom-container">
        <h2 className="mb-12 text-center font-ivory text-3xl font-light text-white md:text-4xl">
          Thousands of businesses have already seen transformational results
        </h2>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="border-0 bg-white/5 backdrop-blur-sm"
            >
              <CardContent className="p-6">
                {testimonial.statValue ? (
                  <div className="mb-4">
                    <div className="mb-1 text-4xl font-bold text-white">
                      {testimonial.statValue}
                    </div>
                    <div className="text-sm text-gray-400">
                      {testimonial.statLabel}
                    </div>
                  </div>
                ) : (
                  <blockquote className="mb-4 text-sm text-gray-300">
                    &quot;{testimonial.quote}&quot;
                  </blockquote>
                )}

                <div className="flex items-center gap-3 border-t border-white/10 pt-4">
                  <div>
                    <div className="text-sm font-medium text-white">
                      {testimonial.author}
                    </div>
                    {testimonial.title && (
                      <div className="text-xs text-gray-400">
                        {testimonial.title}
                      </div>
                    )}
                    <div className="text-xs text-gray-400">
                      {testimonial.company}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
