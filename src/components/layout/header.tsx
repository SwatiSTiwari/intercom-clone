import { Logo } from "@/components/ui/logo";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Product", href: "#", children: [] },
  { label: "Customers", href: "/customers" },
  { label: "Resources", href: "#", children: [] },
  { label: "Pricing", href: "/pricing" },
];

export function Header() {
  return (
    <header className="border-b border-border/10 bg-background py-4">
      <div className="intercom-container flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <Logo variant="dark" />
          <nav className="hidden md:block">
            <ul className="flex items-center space-x-6">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm font-medium text-foreground/80 transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="hidden items-center space-x-4 md:flex">
          <Button
            variant="ghost"
            className="text-sm font-medium"
            asChild
          >
            <Link href="/contact-sales">Contact sales</Link>
          </Button>
          <Button
            variant="ghost"
            className="text-sm font-medium"
            asChild
          >
            <Link href="/sign-in">Sign in</Link>
          </Button>
          <Button
            variant="ghost"
            className="text-sm font-medium"
            asChild
          >
            <Link href="/view-demo">View demo</Link>
          </Button>
          <Button
            variant="default"
            className="rounded-full text-sm font-medium"
            asChild
          >
            <Link href="/start-free-trial">Start free trial</Link>
          </Button>
        </div>

        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" aria-label="Menu">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>
                <Logo variant="dark" />
              </SheetTitle>
            </SheetHeader>
            <nav className="mt-8">
              <ul className="space-y-4">
                {navLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-lg font-medium text-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
                <li className="pt-4">
                  <Button className="w-full rounded-full" asChild>
                    <Link href="/start-free-trial">Start free trial</Link>
                  </Button>
                </li>
              </ul>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
