import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">RoyalDiadem Research & Laboratory</h3>
            <p className="text-sm text-muted-foreground">
              Authorized agent and representative of Altek, Inc.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-4 uppercase tracking-wider">Quick Links</h4>
            <nav className="flex flex-col gap-2">
              <Link href="/" className="text-sm text-muted-foreground hover:text-primary">Home</Link>
              <Link href="/about" className="text-sm text-muted-foreground hover:text-primary">About Us</Link>
              <Link href="/products" className="text-sm text-muted-foreground hover:text-primary">Products</Link>
              <Link href="/contact" className="text-sm text-muted-foreground hover:text-primary">Contact</Link>
            </nav>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-4 uppercase tracking-wider">Legal</h4>
            <nav className="flex flex-col gap-2">
              <Link href="/privacy" className="text-sm text-muted-foreground hover:text-primary">Privacy Policy</Link>
              <Link href="/terms" className="text-sm text-muted-foreground hover:text-primary">Terms of Service</Link>
            </nav>
          </div>
        </div>
        <div className="mt-10 border-t pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} RoyalDiadem Research & Laboratory. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
