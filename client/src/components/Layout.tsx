import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { ShieldCheck, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [location] = useLocation();

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Tournaments", href: "/tournaments" },
    { label: "Community", href: "/community" },
    { label: "Fair Play", href: "/fair-play" },
  ];

  const isActive = (path: string) => location === path;

  return (
    <div className="min-h-screen flex flex-col bg-background font-sans text-foreground">
      {/* Top Bar - Trust & Compliance */}
      <div className="bg-primary text-primary-foreground py-2 text-xs font-medium">
        <div className="container flex justify-between items-center">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-3 h-3" /> 100% Secure & Trusted
            </span>
            <span className="hidden sm:inline">|</span>
            <span className="hidden sm:inline">Skill-Based Fantasy Sports</span>
          </div>
          <div className="flex items-center gap-4">
            <span>18+ Only</span>
            <span className="hidden sm:inline">|</span>
            <span>No Real Money Gaming</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="container flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/">
            <a className="flex items-center gap-2 font-bold text-xl text-primary tracking-tight">
              <img 
                src="/images/logo.png" 
                alt="Elite Squad Sports" 
                className="h-10 w-10 object-contain"
              />
              <span className="hidden sm:inline-block">ELITE SQUAD</span>
            </a>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <a className={`transition-colors hover:text-primary ${isActive(item.href) ? "text-primary" : "text-muted-foreground"}`}>
                  {item.label}
                </a>
              </Link>
            ))}
          </nav>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <Link href="/login">
              <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary">
                Log In
              </Button>
            </Link>
            <Link href="/register">
              <Button size="sm" className="bg-secondary hover:bg-secondary/90 text-white font-semibold shadow-sm">
                Join Free
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 text-muted-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t bg-white p-4 space-y-4 shadow-lg absolute w-full">
            <nav className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href}>
                  <a 
                    className={`text-sm font-medium ${isActive(item.href) ? "text-primary" : "text-muted-foreground"}`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                </Link>
              ))}
            </nav>
            <div className="flex flex-col gap-2 pt-4 border-t">
              <Link href="/login">
                <Button variant="outline" className="w-full justify-center">Log In</Button>
              </Link>
              <Link href="/register">
                <Button className="w-full justify-center bg-secondary hover:bg-secondary/90 text-white">Join Free</Button>
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-slate-50 border-t border-slate-200 pt-12 pb-6 text-slate-600">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div className="col-span-1 md:col-span-1">
              <div className="flex items-center gap-2 font-bold text-lg text-primary mb-4">
                <img src="/images/logo.png" alt="Logo" className="h-8 w-8" />
                ELITE SQUAD
              </div>
              <p className="text-sm leading-relaxed mb-4">
                India's most trusted community-driven fantasy cricket platform. Experience the thrill of the game in a secure, skill-based environment.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold text-primary mb-4">Platform</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/tournaments"><a className="hover:text-secondary">Tournaments</a></Link></li>
                <li><Link href="/community"><a className="hover:text-secondary">Community</a></Link></li>
                <li><Link href="/how-to-play"><a className="hover:text-secondary">How to Play</a></Link></li>
                <li><Link href="/point-system"><a className="hover:text-secondary">Point System</a></Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-primary mb-4">Legal & Trust</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/fair-play"><a className="hover:text-secondary">Fair Play Policy</a></Link></li>
                <li><Link href="/terms"><a className="hover:text-secondary">Terms & Conditions</a></Link></li>
                <li><Link href="/privacy"><a className="hover:text-secondary">Privacy Policy</a></Link></li>
                <li><Link href="/responsible-gaming"><a className="hover:text-secondary">Responsible Gaming</a></Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-primary mb-4">Contact</h4>
              <ul className="space-y-2 text-sm">
                <li>Support: help@elitesquadsports.com</li>
                <li>Partners: partner@elitesquadsports.com</li>
              </ul>
              <div className="mt-4 pt-4 border-t border-slate-200">
                <p className="text-xs text-slate-500">
                  This game may be habit-forming or financially risky. Please play responsibly.
                </p>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-200 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
            <p>&copy; 2025 Elite Squad Sports. All rights reserved.</p>
            <p className="text-center md:text-right max-w-2xl">
              Disclaimer: Elite Squad Sports is a skill-based fantasy sports platform. It is not associated with any official cricket authority. 
              Residents of Andhra Pradesh, Assam, Nagaland, Odisha, Sikkim, and Telangana are not permitted to play pay-to-play contests.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
