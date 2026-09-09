'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  const navLinks = [
    { name: 'Beranda', href: '/' },
    { name: 'Fitur', href: '/features' },
    { name: 'Harga', href: '/pricing' },
    { name: 'Dashboard B2B', href: '/dashboard' },
    { name: 'Kontak Enterprise', href: '/contact' }
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-borderSubtle bg-carbon/90 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-3 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-brandBlue to-brandCyan flex items-center justify-center font-bold text-white shadow-lg shadow-brandBlue/30 group-hover:scale-105 transition-transform">
            ⚡
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-base font-extrabold tracking-tight text-white font-mono">KARGOALIR</span>
              <span className="px-2 py-0.5 text-[10px] font-bold rounded bg-brandBlue/20 text-brandCyan border border-brandCyan/30">
                SaaS B2B
              </span>
            </div>
            <p className="text-[11px] text-slate-400">Supply Chain & Fleet Cost Optimizer</p>
          </div>
        </Link>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center space-x-1">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                  isActive
                    ? 'bg-surface text-brandCyan border border-borderSubtle'
                    : 'text-slate-300 hover:text-white hover:bg-surfaceHover'
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* CTA Button */}
        <div className="flex items-center gap-3">
          <Link
            href="/dashboard"
            className="px-4 py-2 rounded-xl text-xs font-bold bg-brandBlue hover:bg-blue-600 text-white shadow-md shadow-brandBlue/20 transition flex items-center gap-1.5"
          >
            <span>Buka Dashboard</span>
            <span>&rarr;</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
