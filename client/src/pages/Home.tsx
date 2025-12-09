import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Users, Trophy, BarChart3, CheckCircle2, AlertCircle } from "lucide-react";
import { Link } from "wouter";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Live Match Ticker */}
      <div className="bg-slate-900 border-b border-slate-800 text-white py-2 overflow-hidden whitespace-nowrap relative z-20">
        <div className="container flex items-center gap-8 animate-marquee">
          <span className="flex items-center gap-2 text-xs font-medium"><span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span> IND vs AUS: IND 145/3 (18.2)</span>
          <span className="text-slate-600">|</span>
          <span className="flex items-center gap-2 text-xs font-medium"><span className="w-2 h-2 bg-green-500 rounded-full"></span> ENG vs NZ: Match Starts in 2h 30m</span>
          <span className="text-slate-600">|</span>
          <span className="flex items-center gap-2 text-xs font-medium"><span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span> SA vs WI: SA Won by 45 Runs</span>
          <span className="text-slate-600">|</span>
          <span className="flex items-center gap-2 text-xs font-medium"><span className="w-2 h-2 bg-green-500 rounded-full"></span> IPL Auction: Live Updates</span>
        </div>
      </div>

      {/* Hero Section - Broadcast Style */}
      <section className="relative w-full h-[600px] flex items-center justify-center overflow-hidden bg-slate-900">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/hero-real-stadium.jpg" 
            alt="Professional Cricket Stadium" 
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent"></div>
        </div>

        {/* Hero Content */}
        <div className="container relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-in fade-in slide-in-from-left duration-700">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/20 border border-secondary/30 text-secondary text-sm font-medium backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary"></span>
              </span>
              Live Tournaments Open
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight tracking-tight">
              The <span className="text-secondary">Trusted Home</span> of Fantasy Cricket
            </h1>
            <p className="text-lg text-slate-300 max-w-xl leading-relaxed">
              Join India's premier community-driven platform. Experience fair play, real-time stats, and skill-based competition in a secure environment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Link href="/register">
                <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white font-bold px-8 h-12 text-base shadow-lg shadow-secondary/20">
                  Start Playing Free
                </Button>
              </Link>
              <Link href="/how-to-play">
                <Button variant="outline" size="lg" className="border-slate-600 text-white hover:bg-white/10 h-12 text-base">
                  How It Works
                </Button>
              </Link>
            </div>
            <div className="pt-6 flex items-center gap-6 text-sm text-slate-400">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-secondary" /> 100% Secure
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-secondary" /> 50k+ Members
              </div>
              <div className="flex items-center gap-2">
                <Trophy className="w-4 h-4 text-secondary" /> Daily Contests
              </div>
            </div>
          </div>

          {/* Hero Image/Mockup */}
          <div className="hidden lg:block relative animate-in fade-in slide-in-from-right duration-1000 delay-200">
            <img 
              src="/images/app-mockup-real.jpg" 
              alt="Elite Squad Sports App Interface" 
              className="w-full max-w-md mx-auto rounded-2xl shadow-2xl border-4 border-slate-800/50"
            />
            {/* Floating Trust Badge */}
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl flex items-center gap-3 border border-slate-100">
              <div className="bg-green-100 p-2 rounded-full">
                <CheckCircle2 className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <p className="text-xs text-slate-500 font-medium">Certified</p>
                <p className="text-sm font-bold text-slate-900">Fair Play Policy</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Winners Section */}
      <section className="py-12 bg-slate-50 border-b border-slate-200">
        <div className="container">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-slate-900">Recent Champions</h2>
            <Link href="/tournaments" className="text-primary text-sm font-medium hover:underline">View All Contests</Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: "Rahul K.", prize: "10,000 Pts", contest: "Mega T20 League", avatar: "RK" },
              { name: "Priya S.", prize: "5,000 Pts", contest: "Weekend Bash", avatar: "PS" },
              { name: "Amit B.", prize: "Rank #1", contest: "Head-to-Head", avatar: "AB" },
              { name: "Sneha M.", prize: "Rank #1", contest: "Practice Cup", avatar: "SM" },
            ].map((winner, i) => (
              <Card key={i} className="border-slate-200 shadow-sm flex items-center p-4 gap-4">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">
                  {winner.avatar}
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-900">{winner.name}</p>
                  <p className="text-xs text-green-600 font-medium">Score: {winner.prize}</p>
                  <p className="text-[10px] text-slate-500 truncate max-w-[100px]">{winner.contest}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features / Trust Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Why Elite Squad Sports?</h2>
            <p className="text-slate-600 text-lg">
              Built on the pillars of trust, transparency, and true cricket passion. We provide a professional grade platform for serious fans.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
                  <BarChart3 className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl">Real-Time Analytics</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 leading-relaxed">
                  Make informed decisions with our broadcast-quality player statistics and live match data integration.
                </p>
              </CardContent>
            </Card>

            <Card className="border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-secondary" />
                </div>
                <CardTitle className="text-xl">Secure & Transparent</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 leading-relaxed">
                  Your data security is our priority. We operate with full transparency and strict adherence to fair play policies.
                </p>
              </CardContent>
            </Card>

            <Card className="border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-amber-50 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-amber-600" />
                </div>
                <CardTitle className="text-xl">Community First</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 leading-relaxed">
                  Join a vibrant community of cricket experts. Create private leagues, chat with friends, and compete for glory.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Community Image Section */}
      <section className="py-20 bg-slate-50 border-y border-slate-200">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <img 
                src="/images/community-real.jpg" 
                alt="Cricket Fans Community" 
                className="rounded-2xl shadow-lg"
              />
            </div>
            <div className="order-1 lg:order-2 space-y-6">
              <h2 className="text-3xl font-bold text-slate-900">More Than Just A Game</h2>
              <p className="text-slate-600 text-lg leading-relaxed">
                Elite Squad Sports isn't just about points; it's about the passion we share. Connect with thousands of other fans, discuss strategies, and celebrate every wicket together.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-secondary mt-1" />
                  <div>
                    <strong className="block text-slate-900">Private Tournaments</strong>
                    <span className="text-slate-600">Host your own leagues with custom rules for friends and family.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-secondary mt-1" />
                  <div>
                    <strong className="block text-slate-900">Expert Forums</strong>
                    <span className="text-slate-600">Access insights from top-ranked players and cricket analysts.</span>
                  </div>
                </li>
              </ul>
              <div className="pt-4">
                <Link href="/community">
                  <Button variant="outline" className="border-primary text-primary hover:bg-primary/5">
                    Explore Community
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance & Responsibility Banner */}
      <section className="bg-white py-12 border-t border-slate-100">
        <div className="container">
          <div className="bg-slate-50 rounded-xl p-8 border border-slate-200 flex flex-col md:flex-row items-start md:items-center gap-6">
            <div className="bg-white p-3 rounded-full shadow-sm border border-slate-100">
              <AlertCircle className="w-8 h-8 text-slate-400" />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-bold text-slate-900 mb-2">Responsible Gaming Commitment</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Elite Squad Sports is committed to promoting responsible gaming. Our platform is strictly for users 18+ years of age. 
                This game involves an element of financial risk and may be addictive. Please play responsibly and at your own risk.
                We do not allow users from Andhra Pradesh, Assam, Nagaland, Odisha, Sikkim, and Telangana to participate in pay-to-play contests.
              </p>
            </div>
            <Link href="/responsible-gaming">
              <Button variant="ghost" className="text-primary hover:bg-primary/5 whitespace-nowrap">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
