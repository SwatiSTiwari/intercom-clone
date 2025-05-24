"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronLeft, Calendar, Clock, Share2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

// Sample blog data - this would come from an API or CMS in a real application
const blogPosts = [
  {
    id: 1,
    title: "Response Time: Vol. 45",
    excerpt: "In our latest Response Time interview, we ask Mitchell Rodio, Customer Experience Manager at Whop, about the latest customer service trends.",
    content: `
      <p>Welcome to Response Time Volume 45! In this edition, we sit down with Mitchell Rodio, Customer Experience Manager at Whop, to discuss how they've been leveraging AI to transform their customer service operations.</p>

      <h2>Interview with Mitchell Rodio, Whop</h2>

      <p><strong>Intercom:</strong> Thanks for joining us today, Mitchell. Could you tell us a bit about Whop and your role there?</p>

      <p><strong>Mitchell:</strong> Thanks for having me! Whop is a marketplace for digital products and memberships. We help creators sell digital goods, subscriptions, and communities. As the Customer Experience Manager, I oversee our support team and ensure we're providing excellent service to both our sellers and buyers.</p>

      <p><strong>Intercom:</strong> How has your customer service strategy evolved over the past year?</p>

      <p><strong>Mitchell:</strong> The biggest shift has been our adoption of AI. We implemented Fin about eight months ago, and it's completely transformed how we handle customer inquiries. Previously, our team was spending a lot of time on repetitive questions about pricing, features, and basic troubleshooting. Now, Fin handles about 76% of those inquiries automatically, which has freed up our human agents to focus on more complex issues.</p>

      <p><strong>Intercom:</strong> That's impressive! Have you noticed any changes in customer satisfaction since implementing AI?</p>

      <p><strong>Mitchell:</strong> Absolutely. Our CSAT score has increased from 89% to 98% year-to-date. What's interesting is that customers often can't tell whether they're talking to Fin or a human agent - the responses are that good. The main benefit customers have noticed is speed. Our average first response time has decreased from 4 hours to under 5 minutes.</p>

      <p><strong>Intercom:</strong> Are there any specific ways you've customized Fin to better serve your customers?</p>

      <p><strong>Mitchell:</strong> We've spent a lot of time training Fin on our product catalog and common use cases. We've also connected it to our internal knowledge base and product database, so it can pull up specific information about sellers' products when needed. One of the most effective customizations has been teaching Fin to recognize when a customer is experiencing a specific technical issue and provide step-by-step troubleshooting guidance.</p>

      <p><strong>Intercom:</strong> How has your team adapted to working alongside AI?</p>

      <p><strong>Mitchell:</strong> Initially, there was some apprehension. Some team members were concerned about their roles becoming obsolete. But we've been transparent about how AI is meant to augment their work, not replace it. Now, the team loves having Fin as a colleague. It handles the routine questions, allowing them to focus on more challenging and rewarding work. We've actually expanded our team since implementing AI, but the focus of their work has shifted to more complex problem-solving and relationship building.</p>

      <p><strong>Intercom:</strong> What advice would you give to other companies looking to implement AI in their customer service?</p>

      <p><strong>Mitchell:</strong> Start with clear objectives about what you want AI to handle, and be very intentional about the implementation. Don't just turn it on and hope for the best. Invest time in training and customization, and make sure your team understands how it fits into their workflow. Also, continuously monitor the AI's performance and make adjustments. We have a weekly review where we look at Fin's interactions and identify areas for improvement.</p>

      <p><strong>Intercom:</strong> Finally, what's next for customer service at Whop?</p>

      <p><strong>Mitchell:</strong> We're exploring ways to make our customer service more proactive rather than reactive. For example, using Fin to identify patterns in customer inquiries that might indicate a product issue, and then reaching out to sellers before more customers are affected. We're also looking at expanding Fin's capabilities to handle more complex tasks, like processing certain types of refunds or making account changes without human intervention.</p>

      <p><strong>Intercom:</strong> Thanks for sharing your insights, Mitchell. It's fascinating to see how AI is transforming customer service in real-world applications.</p>

      <p><strong>Mitchell:</strong> My pleasure! Thanks for having me.</p>

      <p>That concludes our interview with Mitchell Rodio from Whop. If you'd like to be featured in an upcoming edition of Response Time, please reach out to us at responsetime@intercom.com.</p>
    `,
    date: "May 19, 2025",
    readTime: "2 min",
    author: "Kate Sugrue",
    authorImage: "/images/blog/authors/kate-sugrue.jpg",
    authorRole: "Content Marketing Manager",
    category: "Customer Service",
    image: "/images/blog/response-time-vol-45.png",
    slug: "response-time-vol-045",
    tags: ["customer service", "AI", "case study", "interview"]
  },
  // Add more blog posts here
];

export default function BlogPostPage() {
  const params = useParams();
  const slug = params.slug as string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [post, setPost] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API call to fetch blog post data
    const foundPost = blogPosts.find(p => p.slug === slug);

    setTimeout(() => {
      setPost(foundPost || null);
      setLoading(false);
    }, 500);
  }, [slug]);

  if (loading) {
    return (
      <div className="container-custom py-12 min-h-screen flex items-center justify-center">
        <div className="animate-pulse space-y-4 w-full max-w-4xl mx-auto">
          <div className="h-8 bg-muted rounded-md w-3/4"></div>
          <div className="h-4 bg-muted rounded-md w-1/4"></div>
          <div className="h-96 bg-muted rounded-md w-full"></div>
          <div className="space-y-2">
            <div className="h-4 bg-muted rounded-md w-full"></div>
            <div className="h-4 bg-muted rounded-md w-full"></div>
            <div className="h-4 bg-muted rounded-md w-3/4"></div>
          </div>
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="container-custom py-12 min-h-screen flex flex-col items-center justify-center">
        <h1 className="heading-2 mb-4">Blog Post Not Found</h1>
        <p className="mb-8 text-muted-foreground">
          Sorry, the blog post you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Button asChild>
          <Link href="/blog">Back to Blog</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <div className="bg-background py-12">
        <div className="container-custom">
          <Link
            href="/blog"
            className="inline-flex items-center text-sm text-muted-foreground mb-8 hover:text-primary transition-colors"
          >
            <ChevronLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-8">
              <div className="flex items-center space-x-2 mb-4">
                <span className="blog-category">{post.category}</span>
                <span className="text-muted-foreground">•</span>
                <span className="inline-flex items-center text-sm text-muted-foreground">
                  <Calendar className="mr-1 h-4 w-4" /> {post.date}
                </span>
                <span className="text-muted-foreground">•</span>
                <span className="inline-flex items-center text-sm text-muted-foreground">
                  <Clock className="mr-1 h-4 w-4" /> {post.readTime}
                </span>
              </div>

              <h1 className="heading-1 mb-6">{post.title}</h1>

              <div className="flex items-center space-x-4 mb-8">
                <Avatar className="h-12 w-12">
                  <AvatarImage src={post.authorImage} alt={post.author} />
                  <AvatarFallback>{post.author[0]}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold">{post.author}</p>
                  <p className="text-sm text-muted-foreground">{post.authorRole}</p>
                </div>
              </div>
            </div>

            <div className="relative h-80 w-full mb-12 rounded-xl overflow-hidden">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
              />
            </div>

            <div className="flex">
              <div className="w-full lg:w-4/5 mx-auto">
                <div
                  className="prose prose-lg max-w-none"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />

                <Separator className="my-12" />

                <div className="flex flex-col space-y-8 md:flex-row md:items-center md:justify-between md:space-y-0">
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag: string) => (
                      <Link
                        key={tag}
                        href={`/blog/tag/${tag.replace(/\s+/g, '-')}`}
                        className="inline-block px-3 py-1 bg-secondary rounded-full text-sm hover:bg-secondary/80 transition-colors"
                      >
                        #{tag}
                      </Link>
                    ))}
                  </div>

                  <Button variant="outline" className="inline-flex items-center">
                    <Share2 className="mr-2 h-4 w-4" />
                    Share
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
