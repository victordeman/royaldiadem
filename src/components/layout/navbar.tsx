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
import { cn } from "@/lib/utils";

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
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-500 px-4 py-4",
        scrolled ? "md:py-4" : "md:py-8"
      )}
    >
      <div 
        className={cn(
          "container mx-auto flex h-16 md:h-20 items-center justify-between px-6 rounded-full transition-all duration-500",
          scrolled 
            ? "glass-dark shadow-2xl" 
            : "bg-transparent border-transparent"
        )}
      >
        <div className="flex flex-col">
          <Link href="/" className="flex flex-col group">
            <span className="text-xl md:text-2xl font-bold text-white tracking-tighter transition-all group-hover:text-gold">
              Royal<span className="text-gold">Diadem</span>
            </span>
            <span className="hidden md:block text-[9px] font-bold text-white/50 uppercase tracking-[0.3em] leading-none mt-1 transition-all group-hover:text-white/80">
              Research and Laboratory
            </span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-10">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-xs font-bold uppercase tracking-widest text-white/70 transition-all hover:text-gold relative group"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-gold transition-all group-hover:w-full" />
            </Link>
          ))}
          <div className="flex items-center gap-6 border-l border-white/10 pl-10">
            <ThemeToggle />
            <Button 
              variant="gold" 
              size="sm" 
              className="rounded-full px-6 font-bold uppercase tracking-wider text-[10px] h-10 shadow-lg shadow-gold/20 hover:shadow-gold/40"
              render={<Link href="/quote" />}
            >
              Get a Quote
            </Button>
          </div>
        </nav>

        {/* Mobile Navigation */}
        <div className="flex lg:hidden items-center gap-4">
          <ThemeToggle />
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger 
              render={
                <Button variant="ghost" size="icon" className="h-10 w-10 text-white hover:bg-white/10 rounded-full">
                  {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                  <span className="sr-only">Toggle menu</span>
                </Button>
              }
            />
            <SheetContent side="right" className="w-full sm:w-[400px] glass-dark border-white/10 p-0">
              <div className="flex flex-col h-full bg-mesh/90">
                <SheetHeader className="p-8 text-left border-b border-white/5">
                  <SheetTitle className="flex flex-col">
                    <span className="text-2xl font-bold text-white tracking-tighter">
                      Royal<span className="text-gold">Diadem</span>
                    </span>
                    <span className="text-[10px] font-bold text-white/50 uppercase tracking-[0.3em] mt-1">
                      Research and Laboratory
                    </span>
                  </SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col flex-grow p-8 gap-8">
                  {navItems.map((item, i) => (
                    <motion.div
                      key={item.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <Link
                        href={item.href}
                        className="text-3xl font-bold text-white/90 hover:text-gold transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.label}
                      </Link>
                    </motion.div>
                  ))}
                </nav>
                <div className="p-8 border-t border-white/5">
                  <Button 
                    variant="gold" 
                    size="lg" 
                    className="w-full rounded-full h-16 text-lg font-bold uppercase tracking-widest shadow-2xl shadow-gold/20"
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
