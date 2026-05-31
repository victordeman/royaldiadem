"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
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
  { label: "Products", href: "/products" },
  { label: "Research", href: "/research" },
  { label: "Industries", href: "/industries" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 flex h-20 items-center justify-between">
        <div className="flex flex-col">
          <Link href="/" className="flex flex-col group">
            <span className="text-xl md:text-2xl font-bold text-primary tracking-tighter transition-all">
              Royal<span className="text-foreground/80">Diadem</span>
            </span>
            <span className="hidden md:block text-[9px] font-bold text-muted-foreground uppercase tracking-[0.3em] leading-none mt-1">
              Research and Laboratory
            </span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          <nav className="flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-foreground/70 transition-all hover:text-primary"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-4 pl-4 border-l">
            <ThemeToggle />
            <Button 
              size="sm" 
              className="rounded-full px-6 font-bold"
              render={<Link href="/quote" />}
            >
              Get a Quote
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="flex lg:hidden items-center gap-4">
          <ThemeToggle />
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger 
              render={
                <Button variant="ghost" size="icon" className="h-10 w-10 rounded-full">
                  {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                  <span className="sr-only">Toggle menu</span>
                </Button>
              }
            />
            <SheetContent side="right" className="w-full sm:w-[400px] p-0">
              <div className="flex flex-col h-full bg-background">
                <SheetHeader className="p-8 text-left border-b">
                  <SheetTitle className="flex flex-col">
                    <span className="text-2xl font-bold text-primary tracking-tighter">
                      Royal<span className="text-foreground/80">Diadem</span>
                    </span>
                    <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-[0.3em] mt-1">
                      Research and Laboratory
                    </span>
                  </SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col flex-grow p-8 gap-6">
                  {navItems.map((item, i) => (
                    <motion.div
                      key={item.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <Link
                        href={item.href}
                        className="text-2xl font-bold text-foreground/90 hover:text-primary transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.label}
                      </Link>
                    </motion.div>
                  ))}
                </nav>
                <div className="p-8 border-t">
                  <Button 
                    size="lg" 
                    className="w-full rounded-full h-14 text-lg font-bold"
                    render={<Link href="/quote" onClick={() => setIsOpen(false)} />}
                  >
                    Get a Quote
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
