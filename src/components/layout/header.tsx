"use client";
import { Logo } from "@/components/ui/logo";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Menu, X, ChevronDown } from "lucide-react";

const navigation = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Product",
    href: "#",
    dropdown: true,
    items: [
      {
        name: "Fin",
        description: "Best performing AI Agent in customer service",
        href: "/fin",
      },
      {
        name: "Intercom Suite",
        description: "One platform with Fin AI Agent and a complete Helpdesk",
        href: "/suite",
      },
    ],
  },
  {
    name: "Customers",
    href: "/customers",
  },
  {
    name: "Resources",
    href: "#",
    dropdown: true,
    items: [
      {
        name: "Blog",
        description: "Latest news and articles",
        href: "/blog",
      },
      {
        name: "Guides & Reports",
        description: "In-depth resources",
        href: "/guides",
      },
      {
        name: "Help Center",
        description: "Product documentation",
        href: "/help",
      },
    ],
  },
  {
    name: "Pricing",
    href: "/pricing",
  },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container-custom flex h-16 items-center justify-between">
        <div className="flex items-center gap-6 md:gap-10">
            <Logo variant="dark" />
          <Link href="/" className="flex items-center space-x-2">
            <span className="hidden font-display text-xl font-bold sm:inline-block">
              Intercom
            </span>
          </Link>
          <div className="hidden gap-6 md:flex">
            {navigation.map((item) =>
              !item.dropdown ? (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-sm font-medium transition-colors hover:text-foreground/80 ${
                    pathname === item.href ? "text-foreground" : "text-foreground/60"
                  }`}
                >
                  {item.name}
                </Link>
              ) : (
                <DropdownMenu key={item.name}>
                  <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium transition-colors hover:text-foreground/80 text-foreground/60">
                    {item.name} <ChevronDown size={16} />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start" className="w-[240px]">
                    {item.items?.map((subItem) => (
                      <DropdownMenuItem key={subItem.name} asChild>
                        <Link href={subItem.href} className="cursor-pointer">
                          <div>
                            <div className="font-medium">{subItem.name}</div>
                            <div className="text-xs text-muted-foreground mt-1">
                              {subItem.description}
                            </div>
                          </div>
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              )
            )}
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="hidden md:flex items-center gap-2">
            <Link
              href="/contact-sales"
              className="text-sm font-medium hover:text-foreground/80 text-foreground"
            >
              Contact sales
            </Link>
            <Link
              href="/sign-in"
              className="text-sm font-medium hover:text-foreground/80 text-foreground"
            >
              Sign in
            </Link>
            <Link
              href="/view-demo"
              className="text-sm font-medium hover:text-foreground/80 text-foreground"
            >
              View demo
            </Link>
            <Button asChild>
              <Link href="/sign-up">Start free trial</Link>
            </Button>
          </div>
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" aria-label="Menu">
                <Menu size={24} />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="flex flex-col">
              <div className="flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2">
                  <div className="h-8 w-8 relative">
                    <Image
                      src="/images/intercom-logo.svg"
                      alt="Intercom"
                      fill
                      className="object-contain"
                      priority
                    />
                  </div>
                  <span className="font-display text-xl font-bold">
                    Intercom
                  </span>
                </Link>
                <SheetClose className="rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2">
                  <X className="h-4 w-4" />
                  <span className="sr-only">Close</span>
                </SheetClose>
              </div>
              <nav className="mt-8 flex flex-col gap-4">
                {navigation.map((item) => (
                  <div key={item.name} className="space-y-3">
                    {!item.dropdown ? (
                      <SheetClose asChild>
                        <Link
                          href={item.href}
                          className="text-base font-medium hover:text-foreground/80"
                        >
                          {item.name}
                        </Link>
                      </SheetClose>
                    ) : (
                      <>
                        <div className="text-base font-medium">{item.name}</div>
                        <div className="pl-4 space-y-2">
                          {item.items?.map((subItem) => (
                            <SheetClose key={subItem.name} asChild>
                              <Link
                                href={subItem.href}
                                className="block text-sm hover:text-foreground/80"
                              >
                                {subItem.name}
                              </Link>
                            </SheetClose>
                          ))}
                        </div>
                      </>
                    )}
                  </div>
                ))}
              </nav>
              <div className="mt-auto space-y-4 pt-4">
                <SheetClose asChild>
                  <Link
                    href="/contact-sales"
                    className="block w-full text-center text-base font-medium"
                  >
                    Contact sales
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link
                    href="/sign-in"
                    className="block w-full text-center text-base font-medium"
                  >
                    Sign in
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <Button className="w-full">
                    <Link href="/sign-up">Start free trial</Link>
                  </Button>
                </SheetClose>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
};

export default Header;
