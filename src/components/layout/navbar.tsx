"use client";

import * as React from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { ThemeToggle } from "@/components/theme-toggle";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Capabilities", href: "/capabilities" },
  { label: "Industries", href: "/industries" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        <div className="flex flex-col">
          <Link href="/" className="flex flex-col">
            <span className="text-xl md:text-2xl font-bold text-primary tracking-tight">RoyalDiadem</span>
            <span className="text-[10px] md:text-xs font-medium text-muted-foreground uppercase tracking-widest leading-none">
              Research and Laboratory
            </span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-semibold transition-colors hover:text-accent"
            >
              {item.label}
            </Link>
          ))}
          <div className="flex items-center gap-4 border-l pl-8">
            <ThemeToggle />
            <Button variant="gold" size="sm" render={<Link href="/quote" />}>
              Get a Quote
            </Button>
          </div>
        </nav>

        {/* Mobile Navigation */}
        <div className="flex lg:hidden items-center gap-4">
          <ThemeToggle />
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger render={
              <Button variant="ghost" size="icon" className="h-10 w-10">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            } />
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <SheetHeader className="text-left border-b pb-6">
                <SheetTitle className="flex flex-col">
                  <span className="text-xl font-bold text-primary">RoyalDiadem</span>
                  <span className="text-xs font-medium text-muted-foreground uppercase tracking-widest">
                    Research and Laboratory
                  </span>
                </SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-6 mt-8">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-lg font-semibold transition-colors hover:text-accent border-b border-muted pb-2"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
                <Button variant="gold" size="lg" className="w-full mt-4" render={<Link href="/quote" onClick={() => setIsOpen(false)} />}>
                  Get a Quote
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
