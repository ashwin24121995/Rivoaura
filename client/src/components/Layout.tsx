import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ShieldCheck, Menu, X, Trophy, Users, Mail, MapPin, Phone, Facebook, Twitter, Instagram, Youtube } from "lucide-react";
import { useState } from "react";
import { useAuth } from "@/contexts/AuthContext";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [location] = useLocation();
  const { user, isAuthenticated, logout } = useAuth();

  const navItems = [
    { label: "Tournaments", href: "/tournaments" },
    { label: "Leaderboard", href: "/leaderboard" },
    { label: "How to Play", href: "/how-to-play" },
    { label: "Community", href: "/community" },
    { label: "About", href: "/about-us" },
  ];

  const isActive = (path: string) => location === path;

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      {/* Premium Top Bar */}
      <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white py-2.5 text-xs font-medium border-b border-yellow-500/20">
        <div className="container flex justify-between items-center">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-green-400" />
              <span className="hidden sm:inline">100% Secure Platform</span>
            </span>
            <span className="hidden md:flex items-center gap-1.5">
              <Trophy className="w-3.5 h-3.5 text-yellow-400" />
              Skill-Based Gaming
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-red-400"></span>
              18+ Only
            </span>
            <span className="hidden sm:inline">|</span>
            <span className="hidden sm:inline text-yellow-400 font-semibold">Free to Play Forever</span>
          </div>
        </div>
      </div>

      {/* Main Header - Premium Navy & Gold */}
      <header className="sticky top-0 z-50 w-full bg-white border-b border-slate-200 shadow-sm">
        <div className="container">
          <div className="flex h-20 items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-xl blur opacity-40 group-hover:opacity-60 transition-opacity"></div>
                <img 
                  src="/images/logo.png" 
                  alt="Elite Squad Sports" 
                  className="relative h-12 w-12 object-contain"
                />
              </div>
              <div className="hidden sm:block">
                <div className="font-bold text-xl bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
                  ELITE SQUAD
                </div>
                <div className="text-[10px] text-slate-500 font-medium tracking-wider uppercase">
                  Fantasy Cricket
                </div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <Link 
                  key={item.href} 
                  href={item.href}
                >
                  <button
                    className={`px-4 py-2 text-sm font-semibold rounded-lg transition-all ${
                      isActive(item.href)
                        ? "bg-gradient-to-r from-yellow-400 to-yellow-500 text-slate-900 shadow-md"
                        : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                    }`}
                  >
                    {item.label}
                  </button>
                </Link>
              ))}
            </nav>

            {/* Auth Section */}
            <div className="hidden md:flex items-center gap-3">
              {isAuthenticated && user ? (
                <div className="flex items-center gap-3">
                  <Link href="/profile">
                    <div className="flex items-center gap-3 px-4 py-2 rounded-xl bg-slate-50 border border-slate-200 cursor-pointer hover:border-yellow-400 transition-all group">
                      <div className="text-right hidden lg:block">
                        <div className="text-sm font-bold text-slate-900">{user.username}</div>
                        <div className="text-xs text-slate-500">
                          <span className="text-yellow-600 font-semibold">{user.credits}</span> Credits
                        </div>
                      </div>
                      <Avatar className="h-10 w-10 border-2 border-yellow-400 group-hover:border-yellow-500 transition-colors">
                        <AvatarImage src={`https://api.dicebear.com/7.x/initials/svg?seed=${user.avatar}`} />
                        <AvatarFallback className="bg-gradient-to-br from-yellow-400 to-yellow-600 text-white font-bold">
                          {user.avatar}
                        </AvatarFallback>
                      </Avatar>
                    </div>
                  </Link>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    onClick={logout} 
                    className="text-slate-500 hover:text-red-600 hover:bg-red-50"
                  >
                    Logout
                  </Button>
                </div>
              ) : (
                <>
                  <Link href="/login">
                    <Button 
                      variant="ghost" 
                      size="default" 
                      className="text-slate-700 hover:text-slate-900 font-semibold"
                    >
                      Log In
                    </Button>
                  </Link>
                  <Link href="/register">
                    <Button 
                      size="default" 
                      className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold shadow-lg shadow-green-500/30 px-6"
                    >
                      Join Free
                    </Button>
                  </Link>
                </>
              )}
            </div>

            {/* Mobile Menu Toggle */}
            <button 
              className="lg:hidden p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-slate-200 bg-white shadow-xl">
            <div className="container py-6 space-y-6">
              <nav className="flex flex-col space-y-2">
                {navItems.map((item) => (
                  <Link 
                    key={item.href} 
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <button
                      className={`w-full text-left px-4 py-3 text-sm font-semibold rounded-lg transition-all ${
                        isActive(item.href)
                          ? "bg-gradient-to-r from-yellow-400 to-yellow-500 text-slate-900"
                          : "text-slate-600 hover:bg-slate-100"
                      }`}
                    >
                      {item.label}
                    </button>
                  </Link>
                ))}
              </nav>
              
              {isAuthenticated && user ? (
                <div className="space-y-3 pt-4 border-t border-slate-200">
                  <Link href="/profile" onClick={() => setIsMenuOpen(false)}>
                    <div className="flex items-center gap-3 p-4 rounded-xl bg-slate-50 border border-slate-200">
                      <Avatar className="h-12 w-12 border-2 border-yellow-400">
                        <AvatarImage src={`https://api.dicebear.com/7.x/initials/svg?seed=${user.avatar}`} />
                        <AvatarFallback className="bg-gradient-to-br from-yellow-400 to-yellow-600 text-white font-bold">
                          {user.avatar}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="text-sm font-bold text-slate-900">{user.username}</div>
                        <div className="text-xs text-slate-500">
                          <span className="text-yellow-600 font-semibold">{user.credits}</span> Credits
                        </div>
                      </div>
                    </div>
                  </Link>
                  <Button 
                    variant="outline" 
                    className="w-full" 
                    onClick={() => { logout(); setIsMenuOpen(false); }}
                  >
                    Logout
                  </Button>
                </div>
              ) : (
                <div className="flex flex-col gap-3 pt-4 border-t border-slate-200">
                  <Link href="/login" onClick={() => setIsMenuOpen(false)}>
                    <Button variant="outline" className="w-full justify-center font-semibold">
                      Log In
                    </Button>
                  </Link>
                  <Link href="/register" onClick={() => setIsMenuOpen(false)}>
                    <Button className="w-full justify-center bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold">
                      Join Free
                    </Button>
                  </Link>
                </div>
              )}
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Premium Footer */}
      <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-slate-300">
        {/* Main Footer Content */}
        <div className="container py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* Brand Column */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-3 mb-6">
                <img src="/images/logo.png" alt="Elite Squad Sports" className="h-12 w-12" />
                <div>
                  <div className="font-bold text-xl text-white">ELITE SQUAD</div>
                  <div className="text-xs text-yellow-400 font-semibold">Fantasy Cricket</div>
                </div>
              </div>
              <p className="text-sm leading-relaxed text-slate-400 mb-6">
                India's premier free-to-play fantasy cricket platform. Build your dream team, compete with thousands, and master the art of cricket strategy.
              </p>
              <div className="flex items-center gap-3">
                <a href="#" className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-yellow-500 flex items-center justify-center transition-colors group">
                  <Facebook className="w-4 h-4 text-slate-400 group-hover:text-slate-900" />
                </a>
                <a href="#" className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-yellow-500 flex items-center justify-center transition-colors group">
                  <Twitter className="w-4 h-4 text-slate-400 group-hover:text-slate-900" />
                </a>
                <a href="#" className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-yellow-500 flex items-center justify-center transition-colors group">
                  <Instagram className="w-4 h-4 text-slate-400 group-hover:text-slate-900" />
                </a>
                <a href="#" className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-yellow-500 flex items-center justify-center transition-colors group">
                  <Youtube className="w-4 h-4 text-slate-400 group-hover:text-slate-900" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-bold text-white mb-6 text-sm uppercase tracking-wider">Quick Links</h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link href="/tournaments" className="text-slate-400 hover:text-yellow-400 transition-colors flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-yellow-400"></span>
                    Tournaments
                  </Link>
                </li>
                <li>
                  <Link href="/leaderboard" className="text-slate-400 hover:text-yellow-400 transition-colors flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-yellow-400"></span>
                    Leaderboard
                  </Link>
                </li>
                <li>
                  <Link href="/how-to-play" className="text-slate-400 hover:text-yellow-400 transition-colors flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-yellow-400"></span>
                    How to Play
                  </Link>
                </li>
                <li>
                  <Link href="/point-system" className="text-slate-400 hover:text-yellow-400 transition-colors flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-yellow-400"></span>
                    Point System
                  </Link>
                </li>
                <li>
                  <Link href="/community" className="text-slate-400 hover:text-yellow-400 transition-colors flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-yellow-400"></span>
                    Community
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="text-slate-400 hover:text-yellow-400 transition-colors flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-yellow-400"></span>
                    Blog
                  </Link>
                </li>
              </ul>
            </div>

            {/* Legal & Policies */}
            <div>
              <h4 className="font-bold text-white mb-6 text-sm uppercase tracking-wider">Legal & Trust</h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link href="/about-us" className="text-slate-400 hover:text-yellow-400 transition-colors flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-yellow-400"></span>
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="text-slate-400 hover:text-yellow-400 transition-colors flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-yellow-400"></span>
                    Terms & Conditions
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="text-slate-400 hover:text-yellow-400 transition-colors flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-yellow-400"></span>
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/fair-play" className="text-slate-400 hover:text-yellow-400 transition-colors flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-yellow-400"></span>
                    Fair Play Policy
                  </Link>
                </li>
                <li>
                  <Link href="/responsible-gaming" className="text-slate-400 hover:text-yellow-400 transition-colors flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-yellow-400"></span>
                    Responsible Gaming
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-slate-400 hover:text-yellow-400 transition-colors flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-yellow-400"></span>
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-bold text-white mb-6 text-sm uppercase tracking-wider">Get in Touch</h4>
              <ul className="space-y-4 text-sm">
                <li className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-yellow-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="text-slate-400 mb-1">Email Support</div>
                    <a href="mailto:support@elitesquadsports.com" className="text-white hover:text-yellow-400 transition-colors">
                      support@elitesquadsports.com
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-yellow-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="text-slate-400 mb-1">Registered Office</div>
                    <div className="text-white">Kodagu District, Karnataka, India</div>
                  </div>
                </li>
              </ul>
              
              {/* Trust Badges */}
              <div className="mt-6 pt-6 border-t border-slate-700">
                <div className="flex items-center gap-3">
                  <img src="/images/badge-18plus.png" alt="18+" className="h-10 w-10 object-contain" />
                  <img src="/images/badge-fairplay.png" alt="Fair Play" className="h-10 w-10 object-contain" />
                  <img src="/images/badge-nomoney.png" alt="No Real Money" className="h-10 w-10 object-contain" />
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-slate-700 pt-8">
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
              <div className="text-xs text-slate-400 max-w-2xl">
                <p className="mb-2">
                  <strong className="text-white">Owned and operated by:</strong> KAVERAMMA COFFEE CURING WORKS PRIVATE LIMITED
                </p>
                <p className="mb-2">
                  &copy; {new Date().getFullYear()} Elite Squad Sports. All rights reserved.
                </p>
              </div>
              
              <div className="bg-slate-800 rounded-lg p-4 border border-red-500/30 max-w-xl">
                <div className="flex items-start gap-2">
                  <ShieldCheck className="w-4 h-4 text-red-400 mt-0.5 flex-shrink-0" />
                  <div className="text-xs text-slate-300">
                    <strong className="text-red-400">Legal Disclaimer:</strong> This platform is NOT available in Andhra Pradesh, Assam, Odisha, Telangana, Nagaland, and Sikkim. Only users 18 years and older are permitted. This is a skill-based, free-to-play platform with no real money involved.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
