import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Shield, Users, Trophy, BarChart3, CheckCircle2, AlertCircle, PlayCircle, Star, TrendingUp, Award, Zap, BookOpen } from "lucide-react";
import { Link } from "wouter";
import { useEffect, useState } from "react";
import { fetchLiveMatches, Match } from "@/lib/cricket-api";

export default function Home() {
  const [liveMatches, setLiveMatches] = useState<Match[]>([]);

  useEffect(() => {
    const loadMatches = async () => {
      const matches = await fetchLiveMatches();
      setLiveMatches(matches);
    };
    loadMatches();
    const interval = setInterval(loadMatches, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 font-sans">

      {/* 1. HERO SECTION: Immersive & Detailed */}
      <section className="relative w-full min-h-[700px] flex items-center justify-center overflow-hidden bg-slate-900 text-white">
        {/* Dynamic Background */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/hero-real-stadium.jpg" 
            alt="Elite Squad Sports Stadium Atmosphere" 
            className="w-full h-full object-cover opacity-40 scale-105 animate-in fade-in duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/90 to-slate-900/30"></div>
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-50 to-transparent"></div>
        </div>

        <div className="container relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center py-20">
          {/* Left Content Column */}
          <div className="lg:col-span-7 space-y-8">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-semibold backdrop-blur-md">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              OFFICIAL FANTASY PARTNER OF PASSION
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tight">
              Where <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Strategy</span> <br />
              Meets <span className="text-white">Glory</span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-300 max-w-2xl leading-relaxed border-l-4 border-emerald-500 pl-6">
              Welcome to <strong>Elite Squad Sports</strong>, India's most authentic free-to-play fantasy cricket platform. 
              We don't just host games; we simulate the pressure, the tactics, and the thrill of real cricket management. 
              Build your dream 11, analyze player form, and compete with thousands of managers in a 100% secure, skill-based environment.
            </p>

            <div className="flex flex-col sm:flex-row gap-5 pt-4">
              <Link href="/register">
                <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-10 h-14 text-lg rounded-full shadow-[0_0_20px_rgba(16,185,129,0.3)] transition-all hover:scale-105">
                  Start Your Career (Free)
                </Button>
              </Link>
              <Link href="/how-to-play">
                <Button variant="outline" size="lg" className="border-slate-600 text-white hover:bg-white/10 h-14 text-lg rounded-full px-8 backdrop-blur-sm">
                  <PlayCircle className="w-5 h-5 mr-2" />
                  Watch Tutorial
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/10">
              <div>
                <div className="text-3xl font-bold text-white mb-1">50K+</div>
                <div className="text-sm text-slate-400">Active Managers</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white mb-1">₹0</div>
                <div className="text-sm text-slate-400">Entry Fee Always</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white mb-1">4.8/5</div>
                <div className="text-sm text-slate-400">User Rating</div>
              </div>
            </div>
          </div>

          {/* Right Visual Column */}
          <div className="lg:col-span-5 relative hidden lg:block">
            <div className="relative z-10 bg-slate-800/50 backdrop-blur-xl rounded-3xl p-6 border border-white/10 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-emerald-500/30 rounded-full blur-3xl"></div>
              <div className="flex items-center justify-between mb-6 border-b border-white/10 pb-4">
                <div>
                  <div className="text-xs text-emerald-400 font-bold uppercase tracking-wider">Live Match Center</div>
                  <div className="text-white font-bold text-lg">IND vs AUS</div>
                </div>
                <div className="bg-red-500/20 text-red-400 text-xs font-bold px-2 py-1 rounded animate-pulse">LIVE</div>
              </div>
              
              <div className="space-y-4">
                <div className="bg-slate-900/80 p-4 rounded-xl border border-white/5 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center font-bold text-white">VK</div>
                    <div>
                      <div className="text-white font-medium">Virat Kohli</div>
                      <div className="text-xs text-slate-400">Batting • 82* (54)</div>
                    </div>
                  </div>
                  <div className="text-emerald-400 font-bold text-xl">+124 Pts</div>
                </div>
                
                <div className="bg-slate-900/80 p-4 rounded-xl border border-white/5 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-yellow-600 flex items-center justify-center font-bold text-white">PJ</div>
                    <div>
                      <div className="text-white font-medium">Pat Cummins</div>
                      <div className="text-xs text-slate-400">Bowling • 2/28 (4.0)</div>
                    </div>
                  </div>
                  <div className="text-emerald-400 font-bold text-xl">+56 Pts</div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 text-center">
                <p className="text-slate-400 text-sm">Real-time point updates every ball</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. DETAILED FEATURES: The "Why Us" Deep Dive */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <div className="text-emerald-600 font-bold tracking-wider uppercase text-sm mb-3">Platform Features</div>
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Engineered for the True Cricket Fan</h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              We've stripped away the gambling and focused purely on the sport. 
              Elite Squad Sports is designed to test your knowledge, not your luck. 
              Here is exactly what makes our platform the gold standard for fantasy cricket.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Feature 1 */}
            <div className="group">
              <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors duration-300">
                <BarChart3 className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Deep-Dive Analytics</h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                Stop guessing. Access comprehensive player data including:
              </p>
              <ul className="space-y-2 text-slate-500 text-sm">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" /> Recent form (Last 5 matches)</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" /> Venue-specific performance stats</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" /> Head-to-head player battles</li>
              </ul>
            </div>

            {/* Feature 2 */}
            <div className="group">
              <div className="w-16 h-16 bg-emerald-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-emerald-600 transition-colors duration-300">
                <Shield className="w-8 h-8 text-emerald-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">100% Skill-Based & Legal</h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                We operate with complete transparency under Indian laws:
              </p>
              <ul className="space-y-2 text-slate-500 text-sm">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" /> No real money wagering involved</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" /> Officially registered Indian entity</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" /> Strict adherence to "Game of Skill" laws</li>
              </ul>
            </div>

            {/* Feature 3 */}
            <div className="group">
              <div className="w-16 h-16 bg-violet-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-violet-600 transition-colors duration-300">
                <Users className="w-8 h-8 text-violet-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Community Ecosystem</h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                More than just a game, it's a social network for cricket lovers:
              </p>
              <ul className="space-y-2 text-slate-500 text-sm">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" /> Create private leagues for friends</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" /> Discuss strategies in expert forums</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" /> Earn badges and reputation points</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 3. HOW IT WORKS: Detailed Breakdown */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/pattern-grid.svg')] opacity-5"></div>
        <div className="container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-8">Master the Game in 4 Steps</h2>
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-emerald-500 flex items-center justify-center font-bold text-xl">1</div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Select A Match</h4>
                    <p className="text-slate-400 leading-relaxed">Choose from upcoming international or domestic matches. We cover everything from the IPL to the World Cup.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-slate-700 flex items-center justify-center font-bold text-xl">2</div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Create Your Squad</h4>
                    <p className="text-slate-400 leading-relaxed">Use your 100 credits wisely. Pick 11 players: 1-4 Wicket Keepers, 3-6 Batsmen, 1-4 All-Rounders, and 3-6 Bowlers.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-slate-700 flex items-center justify-center font-bold text-xl">3</div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Join Contests</h4>
                    <p className="text-slate-400 leading-relaxed">Enter your team into our free contests. Compete in "Mega Leagues" for glory or "Head-to-Head" for bragging rights.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-slate-700 flex items-center justify-center font-bold text-xl">4</div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Track & Win</h4>
                    <p className="text-slate-400 leading-relaxed">Watch your points update live as the real match unfolds. Climb the leaderboard and earn "Elite" status badges.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-emerald-500/20 blur-3xl rounded-full"></div>
              <img 
                src="/images/app-mockup-real.jpg" 
                alt="Elite Squad Sports Gameplay" 
                className="relative z-10 rounded-2xl shadow-2xl border border-slate-700 transform hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 4. LIVE TOURNAMENTS: Detailed Cards */}
      <section className="py-24 bg-slate-50">
        <div className="container">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl font-bold text-slate-900">Featured Tournaments</h2>
              <p className="text-slate-600 mt-2">Join the biggest leagues happening right now</p>
            </div>
            <Link href="/tournaments">
              <Button variant="outline" className="border-slate-300 text-slate-700 hover:bg-white">View All Matches</Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="overflow-hidden hover:shadow-xl transition-shadow duration-300 border-slate-200 group">
                <div className="h-32 bg-slate-900 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-900 to-slate-900"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="text-xs font-bold bg-white/20 px-2 py-1 rounded inline-block mb-2">T20 SERIES</div>
                    <h3 className="text-xl font-bold">Indian T20 League</h3>
                  </div>
                  <Trophy className="absolute top-4 right-4 text-white/10 w-24 h-24 group-hover:scale-110 transition-transform" />
                </div>
                <CardContent className="p-6">
                  <div className="flex justify-between items-center mb-6">
                    <div className="text-center">
                      <div className="font-bold text-slate-900 text-lg">MUM</div>
                      <div className="text-xs text-slate-500">Mumbai</div>
                    </div>
                    <div className="text-center px-4">
                      <div className="text-xs font-bold text-red-500 bg-red-50 px-2 py-1 rounded-full mb-1">LIVE</div>
                      <div className="text-sm font-medium text-slate-400">vs</div>
                    </div>
                    <div className="text-center">
                      <div className="font-bold text-slate-900 text-lg">CHE</div>
                      <div className="text-xs text-slate-500">Chennai</div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-600">Prize Pool</span>
                      <span className="font-bold text-slate-900">Elite Badges</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-600">Spots Left</span>
                      <span className="font-bold text-emerald-600">1,240 / 5,000</span>
                    </div>
                    <div className="w-full bg-slate-100 rounded-full h-2 mt-2">
                      <div className="bg-emerald-500 h-2 rounded-full" style={{ width: '75%' }}></div>
                    </div>
                  </div>
                  <Button className="w-full mt-6 bg-slate-900 hover:bg-slate-800 text-white">Join Contest</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 5. TRUST & FOOTER PREAMBLE */}
      <section className="py-16 bg-white border-t border-slate-100">
        <div className="container">
          <div className="bg-slate-50 rounded-2xl p-8 md:p-12 border border-slate-200">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="bg-white p-4 rounded-full shadow-sm border border-slate-100">
                <Shield className="w-12 h-12 text-emerald-600" />
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl font-bold text-slate-900 mb-3">Our Commitment to Responsible Gaming</h3>
                <p className="text-slate-600 leading-relaxed mb-4">
                  Elite Squad Sports is strictly a <strong>free-to-play</strong> platform. We do not offer real money gambling services. 
                  Our contests are designed purely for entertainment and skill development. We are committed to providing a safe, 
                  secure, and transparent environment for all cricket fans.
                </p>
                <div className="flex flex-wrap gap-4 justify-center md:justify-start text-sm font-medium text-slate-500">
                  <span className="flex items-center gap-1"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> 18+ Only</span>
                  <span className="flex items-center gap-1"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> No Cash Deposits</span>
                  <span className="flex items-center gap-1"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> Data Privacy Guaranteed</span>
                </div>
              </div>
              <Link href="/responsible-gaming">
                <Button variant="outline" className="whitespace-nowrap border-slate-300 hover:bg-white">Read Policy</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
