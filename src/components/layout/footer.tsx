import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-200 pt-16 pb-8">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-white">RoyalDiadem</h3>
          <p className="text-sm text-slate-400">
            Authorized agent and representative of ORTEC/AMETEK, Inc.
          </p>
          <p className="text-sm">
            Providing world-class precision engineering and strategic manufacturing solutions for mission-critical industries.
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-white mb-6">Quick Links</h4>
          <ul className="space-y-3 text-sm">
            <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
            <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
            <li><Link href="/products" className="hover:text-white transition-colors">Products</Link></li>
            <li><Link href="/research" className="hover:text-white transition-colors">Research</Link></li>
            <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-white mb-6">Industries</h4>
          <ul className="space-y-3 text-sm text-slate-400">
            <li>Aerospace & Defense</li>
            <li>Medical Devices</li>
            <li>Semiconductor</li>
            <li>Nuclear Research</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-white mb-6">Legal</h4>
          <ul className="space-y-3 text-sm">
            <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
            <li><Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
          </ul>
        </div>
      </div>

      <div className="container mx-auto px-4 mt-16 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
        <p>&copy; {new Date().getFullYear()} RoyalDiadem Research & Laboratory. All Rights Reserved.</p>
        <div className="flex gap-6">
          <span>Official Representative of ORTEC/AMETEK</span>
        </div>
      </div>
    </footer>
  );
}
