import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Trophy, Users, BarChart3, CheckCircle2, PlayCircle, Zap, Target, Award, TrendingUp, Lock, Globe, Calendar, MapPin, Clock } from "lucide-react";
import { Link } from 'wouter';
import FullScorecardView from '@/components/FullScorecardView';
import SEO from '@/components/SEO';
import { useEffect, useState } from "react";
import { getCurrentMatches, getLiveMatches, getUpcomingMatches, getCompletedMatches, type Match } from "@/lib/cricketApi";
import { Badge } from "@/components/ui/badge";

export default function Home() {
  const [liveMatches, setLiveMatches] = useState<Match[]>([]);
  const [upcomingMatches, setUpcomingMatches] = useState<Match[]>([]);
  const [completedMatches, setCompletedMatches] = useState<Match[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMatches = async () => {
      try {
        const [live, upcoming, completed] = await Promise.all([
          getLiveMatches(),
          getUpcomingMatches(),
          getCompletedMatches()
        ]);
        
        setLiveMatches(live.slice(0, 3)); // Show top 3 live matches
        setUpcomingMatches(upcoming.slice(0, 6)); // Show top 6 upcoming
        setCompletedMatches(completed.slice(0, 3)); // Show top 3 completed
      } catch (error) {
        console.error('Failed to fetch matches:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchMatches();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <SEO
        title="Home - Free Fantasy Cricket Platform"
        description="DAYHAAT is India's most transparent and educational fantasy cricket platform. 100% free-to-play. Build dream teams, compete with cricket enthusiasts, and sharpen your strategic thinking without spending money."
        keywords="fantasy cricket, free fantasy cricket, cricket game, fantasy sports, DAYHAAT, cricket contest, online cricket, fantasy cricket app, free cricket game, cricket strategy"
        ogType="website"
      />
      
      {/* HERO SECTION - Immersive Introduction */}
      <section className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#334155]">
        <div className="absolute inset-0 bg-[url('/images/cricket-pattern.svg')] opacity-5"></div>
        
        <div className="container relative z-10 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left: Hero Content */}
            <div className="space-y-8 text-white">
              <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-gradient-to-r from-amber-500/20 to-amber-600/20 border border-amber-500/30 backdrop-blur-sm">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-amber-500"></span>
                </span>
                <span className="text-amber-400 font-bold text-sm tracking-wider">100% FREE TO PLAY • NO REAL MONEY</span>
              </div>

              <h1 className="text-6xl md:text-7xl font-black leading-tight">
                Master Fantasy Cricket with{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600">
                  DAYHAAT
                </span>
              </h1>

              <p className="text-xl text-slate-300 leading-relaxed border-l-4 border-amber-500 pl-6">
                Welcome to India's most transparent and educational fantasy cricket platform. 
                <strong className="text-white"> DAYHAAT</strong> is a 100% free-to-play community where you build dream teams, 
                compete with cricket enthusiasts, and sharpen your strategic thinking—all without spending a single rupee.
              </p>

              <div className="flex flex-col sm:flex-row gap-5 pt-6">
                <Link href="/register">
                  <Button size="lg" className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-bold px-10 h-16 text-lg rounded-full shadow-[0_0_30px_rgba(251,191,36,0.4)] transition-all hover:scale-105">
                    <PlayCircle className="w-6 h-6 mr-3" />
                    Start Playing Free
                  </Button>
                </Link>
                <Link href="/how-to-play">
                  <Button variant="outline" size="lg" className="border-2 border-white/30 text-white hover:bg-white/10 h-16 text-lg rounded-full px-10 backdrop-blur-sm">
                    <BarChart3 className="w-5 h-5 mr-3" />
                    How It Works
                  </Button>
                </Link>
              </div>

              <div className="grid grid-cols-2 gap-8 pt-10 border-t border-white/20">
                <div>
                  <div className="text-4xl font-black text-amber-400 mb-2">₹0</div>
                  <div className="text-sm text-slate-400 font-medium">Entry Fee Forever</div>
                </div>
                <div>
                  <div className="text-4xl font-black text-amber-400 mb-2">100%</div>
                  <div className="text-sm text-slate-400 font-medium">Skill-Based</div>
                </div>
              </div>
            </div>

            {/* Right: Trust Badges & Highlights */}
            <div className="relative hidden lg:block">
              <div className="absolute inset-0 bg-amber-500/20 blur-[100px] rounded-full"></div>
              <Card className="relative z-10 bg-slate-800/50 backdrop-blur-xl border-slate-700 shadow-2xl">
                <CardContent className="p-8 space-y-6">
                  <div className="flex items-center gap-4 pb-6 border-b border-slate-700">
                    <img src="/logo-dayhaat.webp" alt="DAYHAAT" className="w-16 h-16" />
                    <div>
                      <div className="text-2xl font-bold text-white">DAYHAAT</div>
                      <div className="text-sm text-slate-400">Educational Fantasy Cricket</div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center gap-4 p-4 bg-slate-900/50 rounded-xl border border-slate-700">
                      <img src="/badge-nomoney-dayhaat.webp" alt="No Money" className="w-14 h-14" />
                      <div>
                        <div className="font-bold text-white">100% Free to Play</div>
                        <div className="text-sm text-slate-400">No deposits, no withdrawals</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 p-4 bg-slate-900/50 rounded-xl border border-slate-700">
                      <img src="/badge-18plus-dayhaat.webp" alt="18+" className="w-14 h-14" />
                      <div>
                        <div className="font-bold text-white">Age Verified Platform</div>
                        <div className="text-sm text-slate-400">Strictly 18+ community</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 p-4 bg-slate-900/50 rounded-xl border border-slate-700">
                      <img src="/badge-fairplay-dayhaat.webp" alt="Fair Play" className="w-14 h-14" />
                      <div>
                        <div className="font-bold text-white">Fair Play Certified</div>
                        <div className="text-sm text-slate-400">Transparent & ethical</div>
                      </div>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-slate-700 text-center">
                    <p className="text-xs text-slate-500 leading-relaxed">
                      Operated by <strong className="text-slate-400">DAYHAAT PRIVATE LIMITED</strong><br />
                      CIN: U74999DL2016PTC306805 • Registered in New Delhi, India
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

          </div>
        </div>
      </section>

      {/* LIVE MATCHES SECTION */}
      {!loading && liveMatches.length > 0 && (
        <section className="py-16 bg-gradient-to-br from-red-50 to-orange-50">
          <div className="container">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-3xl font-black text-slate-900 mb-2">🔴 Live Matches</h2>
                <p className="text-slate-600">Happening right now - Join the action!</p>
              </div>
              <Link href="/tournaments">
                <Button variant="outline" className="gap-2">
                  View All Matches
                  <Trophy className="w-4 h-4" />
                </Button>
              </Link>
            </div>
            
            <div className="grid grid-cols-1 gap-8">
              {liveMatches.slice(0, 1).map((match) => (
                <FullScorecardView
                  key={match.id}
                  matchId={match.id}
                  matchName={match.name}
                  venue={match.venue}
                />
              ))}
            </div>
            
            {liveMatches.length > 2 && (
              <div className="mt-8 text-center">
                <Link href="/tournaments">
                  <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white px-8">
                    View All {liveMatches.length} Live Matches
                    <Trophy className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
              </div>
            )}
          </div>
        </section>
      )}

      {/* UPCOMING MATCHES SECTION */}
      {!loading && upcomingMatches.length > 0 && (
        <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-50">
          <div className="container">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-3xl font-black text-slate-900 mb-2">📅 Upcoming Matches</h2>
                <p className="text-slate-600">Create your team before these matches start</p>
              </div>
              <Link href="/tournaments">
                <Button variant="outline" className="gap-2">
                  View All Matches
                  <Trophy className="w-4 h-4" />
                </Button>
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {upcomingMatches.map((match) => (
                <Card key={match.id} className="group hover:shadow-xl transition-all duration-300 border-blue-200 bg-white hover:border-blue-400">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <Badge className="bg-blue-500 text-white">UPCOMING</Badge>
                      <Badge variant="outline" className="uppercase">{match.matchType}</Badge>
                    </div>
                    
                    <h3 className="font-bold text-lg text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                      {match.name}
                    </h3>
                    
                    <div className="space-y-2 text-sm text-slate-600 mb-4">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-slate-400" />
                        <span className="truncate">{match.venue}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-slate-400" />
                        <span>{new Date(match.dateTimeGMT).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-slate-400" />
                        <span>{new Date(match.dateTimeGMT).toLocaleTimeString()}</span>
                      </div>
                    </div>
                    
                    <Link href={`/create-team/${match.id}`} className="block">
                      <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                        Create Team
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* COMPLETED MATCHES SECTION */}
      {!loading && completedMatches.length > 0 && (
        <section className="py-16 bg-gradient-to-br from-slate-50 to-slate-100">
          <div className="container">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-3xl font-black text-slate-900 mb-2">✅ Completed Matches</h2>
                <p className="text-slate-600">Recent match results</p>
              </div>
              <Link href="/tournaments">
                <Button variant="outline" className="gap-2">
                  View All Results
                  <Trophy className="w-4 h-4" />
                </Button>
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {completedMatches.map((match) => (
                <Card key={match.id} className="group hover:shadow-xl transition-all duration-300 border-slate-200 bg-white hover:border-slate-400">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <Badge className="bg-slate-500 text-white">COMPLETED</Badge>
                      <Badge variant="outline" className="uppercase">{match.matchType}</Badge>
                    </div>
                    
                    <h3 className="font-bold text-lg text-slate-900 mb-3 group-hover:text-slate-600 transition-colors">
                      {match.name}
                    </h3>
                    
                    <div className="space-y-2 text-sm text-slate-600 mb-4">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-slate-400" />
                        <span className="truncate">{match.venue}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-slate-400" />
                        <span>{new Date(match.dateTimeGMT).toLocaleDateString()}</span>
                      </div>
                    </div>
                    
                    {match.status && (
                      <div className="mb-4 pb-4 border-b border-slate-200">
                        <p className="text-sm font-semibold text-green-600">{match.status}</p>
                      </div>
                    )}
                    
                    <Link href={`/tournaments`} className="block">
                      <Button variant="outline" className="w-full">
                        View Results
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* SECTION 1: BUILD YOUR TEAM (Visual Left) */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left: Visual */}
            <div className="order-2 lg:order-1">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-amber-500/20 to-blue-500/20 blur-2xl rounded-3xl"></div>
                <img 
                  src="/images/home-team-builder.webp" 
                  alt="Fantasy Cricket Team Builder" 
                  className="relative z-10 rounded-2xl shadow-2xl border-4 border-slate-200"
                />
              </div>
            </div>

            {/* Right: Content */}
            <div className="order-1 lg:order-2 space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-200">
                <Target className="w-4 h-4 text-blue-600" />
                <span className="text-blue-600 font-bold text-sm">STEP 1: TEAM BUILDING</span>
              </div>

              <h2 className="text-5xl font-black text-slate-900 leading-tight">
                Build Your Dream <span className="text-blue-600">Playing XI</span>
              </h2>

              <p className="text-lg text-slate-600 leading-relaxed">
                Every great fantasy team starts with smart selection. At DAYHAAT, you work within a <strong>100-point team budget constraint</strong> to assemble 
                your perfect 11-player squad from real cricket matches happening worldwide. This is a game mechanic that teaches strategic resource allocation.
              </p>

              <div className="space-y-4 bg-slate-50 p-6 rounded-xl border-l-4 border-blue-600">
                <h3 className="font-bold text-slate-900 text-xl mb-4">Team Composition Rules:</h3>
                
                <div className="grid grid-cols-1 gap-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-slate-900">Wicket-Keepers:</strong>
                      <span className="text-slate-600"> Select 1-4 players (usually 8.5-10 points each)</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-slate-900">Batsmen:</strong>
                      <span className="text-slate-600"> Select 3-6 players (premium batsmen have 9-10.5 point values)</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-slate-900">All-Rounders:</strong>
                      <span className="text-slate-600"> Select 1-4 players (top all-rounders have 9-10 point values)</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-slate-900">Bowlers:</strong>
                      <span className="text-slate-600"> Select 3-6 players (regular bowlers have 8-9 point values)</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <Zap className="w-8 h-8 text-amber-600 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-amber-900 mb-2">Pro Strategy Tip:</h4>
                    <p className="text-amber-800 leading-relaxed">
                      Balance your team wisely within the 100-point constraint! Don't use all your budget on star batsmen. 
                      Lower-value bowlers (7-8 points) can score heavily through wickets and economy rates. 
                      Mix high-value players with smart picks to maximize your team's potential.
                    </p>
                  </div>
                </div>
              </div>

              <Link href="/tournaments">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 h-14 rounded-full">
                  Browse Live Matches
                </Button>
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 2: LIVE SCORING (Visual Right) */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left: Content */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-50 border border-red-200">
                <div className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-600"></span>
                </div>
                <span className="text-red-600 font-bold text-sm">STEP 2: LIVE MATCH TRACKING</span>
              </div>

              <h2 className="text-5xl font-black text-slate-900 leading-tight">
                Watch Points Update <span className="text-red-600">Ball-by-Ball</span>
              </h2>

              <p className="text-lg text-slate-600 leading-relaxed">
                Once the real cricket match begins, DAYHAAT's advanced scoring engine tracks every single delivery 
                and instantly calculates fantasy points for your selected players. Experience the thrill of watching 
                your team's score climb in real-time!
              </p>

              <div className="space-y-4">
                <Card className="border-2 border-slate-200 shadow-lg">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-slate-900 text-xl mb-4 flex items-center gap-2">
                      <BarChart3 className="w-6 h-6 text-blue-600" />
                      How Points Are Calculated
                    </h3>
                    
                    <div className="space-y-3 text-slate-700">
                      <div className="flex justify-between items-center py-2 border-b border-slate-200">
                        <span className="font-medium">Every run scored</span>
                        <span className="font-bold text-green-600">+1 point</span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-slate-200">
                        <span className="font-medium">Boundary (4 runs)</span>
                        <span className="font-bold text-green-600">+1 bonus point</span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-slate-200">
                        <span className="font-medium">Six (6 runs)</span>
                        <span className="font-bold text-green-600">+2 bonus points</span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-slate-200">
                        <span className="font-medium">Wicket taken (bowling)</span>
                        <span className="font-bold text-green-600">+25 points</span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-slate-200">
                        <span className="font-medium">Catch taken (fielding)</span>
                        <span className="font-bold text-green-600">+8 points</span>
                      </div>
                      <div className="flex justify-between items-center py-2">
                        <span className="font-medium">Half-century (50+ runs)</span>
                        <span className="font-bold text-green-600">+8 bonus points</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                  <div className="flex items-start gap-4">
                    <TrendingUp className="w-8 h-8 text-blue-600 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-blue-900 mb-2">Captain & Vice-Captain Multipliers:</h4>
                      <p className="text-blue-800 leading-relaxed">
                        Your <strong>Captain earns 2x points</strong> and your <strong>Vice-Captain earns 1.5x points</strong>. 
                        Choose wisely! Selecting the right captain can significantly impact your final score and leaderboard ranking.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <Link href="/point-system">
                <Button size="lg" variant="outline" className="border-2 border-slate-300 text-slate-700 hover:bg-slate-100 font-bold px-8 h-14 rounded-full">
                  View Complete Point System
                </Button>
              </Link>
            </div>

            {/* Right: Visual */}
            <div>
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-red-500/20 to-orange-500/20 blur-2xl rounded-3xl"></div>
                <img 
                  src="/images/home-live-scoring.webp" 
                  alt="Live Fantasy Cricket Scoring" 
                  className="relative z-10 rounded-2xl shadow-2xl border-4 border-slate-200"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 3: STRATEGY & ANALYTICS (Visual Left) */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left: Visual */}
            <div className="order-2 lg:order-1">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-2xl rounded-3xl"></div>
                <img 
                  src="/images/home-strategy.webp" 
                  alt="Fantasy Cricket Strategy & Analytics" 
                  className="relative z-10 rounded-2xl shadow-2xl border-4 border-slate-200"
                />
              </div>
            </div>

            {/* Right: Content */}
            <div className="order-1 lg:order-2 space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-50 border border-purple-200">
                <BarChart3 className="w-4 h-4 text-purple-600" />
                <span className="text-purple-600 font-bold text-sm">STEP 3: STRATEGIC ANALYSIS</span>
              </div>

              <h2 className="text-5xl font-black text-slate-900 leading-tight">
                Master the Game with <span className="text-purple-600">Data & Insights</span>
              </h2>

              <p className="text-lg text-slate-600 leading-relaxed">
                DAYHAAT isn't just about picking your favorite players—it's about making <strong>informed, strategic decisions</strong>. 
                We provide you with comprehensive player statistics, recent form analysis, and head-to-head matchup data 
                to help you build high-scoring teams and improve your cricket knowledge.
              </p>

              <div className="space-y-4">
                <Card className="border-l-4 border-purple-600 shadow-lg">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-slate-900 text-lg mb-3 flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-purple-600" />
                      Player Performance Analytics
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      Access detailed statistics including batting average, strike rate, bowling economy, 
                      recent form (last 5 matches), and venue-specific performance. Make data-driven decisions, not guesses.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-blue-600 shadow-lg">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-slate-900 text-lg mb-3 flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-blue-600" />
                      Match Context & Conditions
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      Understand pitch conditions, weather forecasts, and team news before finalizing your squad. 
                      Spinners thrive on turning tracks, while fast bowlers dominate green pitches—choose accordingly.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-green-600 shadow-lg">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-slate-900 text-lg mb-3 flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600" />
                      Community Expert Tips
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      Learn from top-performing DAYHAAT players in our community forums. 
                      Share strategies, discuss team combinations, and improve your fantasy cricket IQ together.
                    </p>
                  </CardContent>
                </Card>
              </div>

              <div className="bg-purple-50 border border-purple-200 rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <Award className="w-8 h-8 text-purple-600 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-purple-900 mb-2">Skill Development Focus:</h4>
                    <p className="text-purple-800 leading-relaxed">
                      DAYHAAT is designed to be <strong>educational</strong>. The more you play, the better you understand 
                      cricket dynamics, player roles, and match situations. It's not gambling—it's skill-building.
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 4: LEADERBOARD & COMPETITION (Visual Right) */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left: Content */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-50 border border-amber-200">
                <Trophy className="w-4 h-4 text-amber-600" />
                <span className="text-amber-600 font-bold text-sm">STEP 4: COMPETE & WIN</span>
              </div>

              <h2 className="text-5xl font-black text-slate-900 leading-tight">
                Climb the <span className="text-amber-600">Global Leaderboard</span>
              </h2>

              <p className="text-lg text-slate-600 leading-relaxed">
                Compete in free contests across every major cricket match. 
                Score points based on real player performance, climb rankings, and establish yourself as a fantasy cricket champion—all without spending money.
              </p>

              <div className="space-y-4">
                <div className="bg-gradient-to-r from-amber-50 to-amber-100 border-2 border-amber-300 rounded-xl p-6">
                  <h3 className="font-bold text-amber-900 text-xl mb-4 flex items-center gap-2">
                    <Trophy className="w-6 h-6 text-amber-600" />
                    What You Achieve at DAYHAAT
                  </h3>
                  
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <div>
                        <strong className="text-slate-900">Achievement Badges:</strong>
                        <span className="text-slate-700"> Unlock exclusive badges like "Century Maker," "Hat-Trick Hero," and "Captain Fantastic"</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <div>
                        <strong className="text-slate-900">Leaderboard Glory:</strong>
                        <span className="text-slate-700"> See your name at the top of global and contest-specific rankings</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <div>
                        <strong className="text-slate-900">Community Recognition:</strong>
                        <span className="text-slate-700"> Earn reputation points and become a respected strategist in forums</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <div>
                        <strong className="text-slate-900">Bragging Rights:</strong>
                        <span className="text-slate-700"> Share your victories with friends and challenge them to beat your score</span>
                      </div>
                    </div>
                  </div>
                </div>

                <Card className="border-2 border-slate-200 shadow-lg">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-slate-900 text-lg mb-3">Contest Types Available:</h3>
                    
                    <div className="space-y-3 text-slate-700">
                      <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg">
                        <Users className="w-5 h-5 text-blue-600 flex-shrink-0" />
                        <div>
                          <strong>Mega Leagues:</strong> Compete with multiple players
                        </div>
                      </div>

                      <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg">
                        <Target className="w-5 h-5 text-green-600 flex-shrink-0" />
                        <div>
                          <strong>Head-to-Head:</strong> Challenge a single opponent directly
                        </div>
                      </div>

                      <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg">
                        <Globe className="w-5 h-5 text-purple-600 flex-shrink-0" />
                        <div>
                          <strong>Private Leagues:</strong> Create contests for friends & family
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Link href="/leaderboard">
                <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white font-bold px-8 h-14 rounded-full">
                  View Global Rankings
                </Button>
              </Link>
            </div>

            {/* Right: Visual */}
            <div>
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-amber-500/20 to-yellow-500/20 blur-2xl rounded-3xl"></div>
                <img 
                  src="/images/home-leaderboard.webp" 
                  alt="Fantasy Cricket Leaderboard" 
                  className="relative z-10 rounded-2xl shadow-2xl border-4 border-slate-200"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* TRANSPARENCY SECTION */}
      <section className="py-24 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#334155] text-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm">
              <Shield className="w-5 h-5 text-amber-400" />
              <span className="text-amber-400 font-bold text-sm">100% TRANSPARENT PLATFORM</span>
            </div>

            <h2 className="text-5xl font-black leading-tight">
              Why DAYHAAT is <span className="text-amber-400">Completely Legal & Safe</span>
            </h2>

            <p className="text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto">
              We understand your concerns about online fantasy sports platforms. 
              Here's exactly how DAYHAAT operates and why we're different from gambling websites.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8">
              <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
                <CardContent className="p-8 space-y-4">
                  <div className="w-16 h-16 bg-green-500/20 rounded-2xl flex items-center justify-center mb-4">
                    <CheckCircle2 className="w-8 h-8 text-green-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">No Real Money Involved</h3>
                  <p className="text-slate-300 leading-relaxed">
                    DAYHAAT is <strong className="text-white">100% free to play</strong>. 
                    There are no deposits, no withdrawals, no payment gateways, and no cash prizes. 
                    You cannot lose money because you never spend money.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
                <CardContent className="p-8 space-y-4">
                  <div className="w-16 h-16 bg-blue-500/20 rounded-2xl flex items-center justify-center mb-4">
                    <Lock className="w-8 h-8 text-blue-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Skill-Based, Not Luck</h3>
                  <p className="text-slate-300 leading-relaxed">
                    Fantasy cricket is recognized as a <strong className="text-white">game of skill</strong> under Indian law. 
                    Success depends on your cricket knowledge, strategic thinking, and player analysis—not random chance.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
                <CardContent className="p-8 space-y-4">
                  <div className="w-16 h-16 bg-purple-500/20 rounded-2xl flex items-center justify-center mb-4">
                    <Shield className="w-8 h-8 text-purple-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Legally Registered Company</h3>
                  <p className="text-slate-300 leading-relaxed">
                    DAYHAAT is operated by <strong className="text-white">DAYHAAT PRIVATE LIMITED</strong>, 
                    a company registered with the Ministry of Corporate Affairs (CIN: U74999DL2016PTC306805).
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
                <CardContent className="p-8 space-y-4">
                  <div className="w-16 h-16 bg-amber-500/20 rounded-2xl flex items-center justify-center mb-4">
                    <Users className="w-8 h-8 text-amber-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Educational Purpose</h3>
                  <p className="text-slate-300 leading-relaxed">
                    Our platform is designed for <strong className="text-white">entertainment and education</strong>. 
                    Players learn cricket strategy, improve analytical skills, and engage with a passionate community.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="pt-12">
              <Link href="/about">
                <Button size="lg" variant="outline" className="border-2 border-white/30 text-white hover:bg-white/10 font-bold px-10 h-16 text-lg rounded-full backdrop-blur-sm">
                  Read Our Complete Story
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="py-24 bg-gradient-to-r from-amber-500 via-amber-600 to-amber-700">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-5xl md:text-6xl font-black text-white leading-tight">
              Ready to Start Your Fantasy Cricket Journey?
            </h2>

            <p className="text-2xl text-amber-50 leading-relaxed">
              Start playing on DAYHAAT today. 
              It's free, it's fun, and it's the smartest way to enjoy cricket.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
              <Link href="/register">
                <Button size="lg" className="bg-white text-amber-600 hover:bg-amber-50 font-black px-12 h-16 text-xl rounded-full shadow-2xl">
                  Create Free Account
                </Button>
              </Link>
              <Link href="/tournaments">
                <Button size="lg" variant="outline" className="border-3 border-white text-white hover:bg-white/20 font-bold px-12 h-16 text-xl rounded-full backdrop-blur-sm">
                  Browse Matches
                </Button>
              </Link>
            </div>

            <p className="text-sm text-amber-100 pt-8">
              No credit card required • No hidden fees • No real money • 100% free forever
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}
