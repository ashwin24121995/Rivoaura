import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Trophy, Users, ShieldCheck, MousePointerClick, CheckCircle2, ArrowRight, Star, Zap, Calculator, Target, Award, TrendingUp, AlertCircle, Info, BookOpen, Lightbulb, HelpCircle } from "lucide-react";

export default function HowToPlay() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(59,130,246,0.1),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(16,185,129,0.1),transparent_50%)]"></div>
          <div className="absolute inset-0" style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.02\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
          }}></div>
        </div>
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <Badge className="bg-secondary/20 text-secondary border-secondary/30 backdrop-blur-sm px-4 py-1.5 text-sm font-medium">
              <Zap className="w-4 h-4 inline mr-2" />
              Complete Guide to Fantasy Cricket
            </Badge>
            <h1 className="text-5xl md:text-7xl font-black tracking-tight">
              How to <span className="bg-gradient-to-r from-secondary via-green-400 to-blue-400 bg-clip-text text-transparent">Play & Win</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 leading-relaxed max-w-3xl mx-auto">
              Master the art of fantasy cricket with our comprehensive guide covering rules, scoring, 
              strategies, and everything you need to build championship-high-scoring teams.
            </p>
          </div>
        </div>
      </div>

      {/* Quick Start Guide - 4 Steps */}
      <div className="container py-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Quick Start Guide</h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Get started with fantasy cricket in 4 simple steps. Follow this guide to create your first team and join contests.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {[
            {
              step: "1",
              title: "Choose Your Match",
              icon: <MousePointerClick className="w-8 h-8 text-blue-600" />,
              desc: "Browse upcoming T20, ODI, or Test matches and select the one you want to compete in.",
              color: "blue"
            },
            {
              step: "2",
              title: "Build Your Squad",
              icon: <Users className="w-8 h-8 text-green-600" />,
              desc: "Select 11 players within a 100-point budget constraint following team composition rules.",
              color: "green"
            },
            {
              step: "3",
              title: "Assign Leadership",
              icon: <ShieldCheck className="w-8 h-8 text-purple-600" />,
              desc: "Choose Captain (2x points) and Vice-Captain (1.5x points) strategically.",
              color: "purple"
            },
            {
              step: "4",
              title: "Join & Compete",
              icon: <Trophy className="w-8 h-8 text-orange-600" />,
              desc: "Enter free contests and watch your team climb the leaderboard in real-time.",
              color: "orange"
            }
          ].map((item, i) => (
            <Card key={i} className="border-2 border-slate-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden group">
              <div className={`h-2 bg-gradient-to-r from-${item.color}-400 to-${item.color}-600`}></div>
              <CardContent className="p-8 text-center space-y-4">
                <div className={`w-16 h-16 rounded-full bg-${item.color}-50 flex items-center justify-center mx-auto group-hover:scale-110 transition-transform shadow-md`}>
                  {item.icon}
                </div>
                <div className={`text-4xl font-black text-${item.color}-100`}>{item.step}</div>
                <h3 className="text-xl font-bold text-slate-900">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Team Composition Rules - DETAILED */}
      <div className="bg-gradient-to-br from-slate-50 to-blue-50/30 py-24 border-y border-slate-200">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <Users className="w-16 h-16 text-blue-600 mx-auto mb-6" />
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Team Composition Rules</h2>
              <p className="text-lg text-slate-600">
                Every team must follow these strict composition guidelines to ensure fair play and balanced competition
              </p>
            </div>

            <div className="space-y-8">
              {/* Main Rules Card */}
              <Card className="border-2 border-blue-200 shadow-xl overflow-hidden">
                <div className="h-3 bg-gradient-to-r from-blue-500 to-blue-600"></div>
                <CardContent className="p-10 space-y-6">
                  <h3 className="text-3xl font-bold text-slate-900 mb-6">The Golden Rules</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Total Players */}
                    <div className="bg-blue-50 rounded-xl p-6 border-2 border-blue-200">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 rounded-lg bg-blue-500 text-white flex items-center justify-center font-black text-xl">
                          11
                        </div>
                        <h4 className="font-bold text-slate-900 text-lg">Total Players</h4>
                      </div>
                      <p className="text-slate-700 text-sm">
                        You must select exactly 11 players for your team. No more, no less. This mirrors real cricket team composition.
                      </p>
                    </div>

                    {/* Credit Budget */}
                    <div className="bg-green-50 rounded-xl p-6 border-2 border-green-200">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 rounded-lg bg-green-500 text-white flex items-center justify-center font-black text-xl">
                          100
                        </div>
                        <h4 className="font-bold text-slate-900 text-lg">Credit Budget</h4>
                      </div>
                      <p className="text-slate-700 text-sm">
                        You have a 100-point team budget for your 11 players. Each player has a point value based on their role and recent performance. This is a game mechanic, not a currency.
                      </p>
                    </div>

                    {/* Max from One Team */}
                    <div className="bg-purple-50 rounded-xl p-6 border-2 border-purple-200">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 rounded-lg bg-purple-500 text-white flex items-center justify-center font-black text-xl">
                          7
                        </div>
                        <h4 className="font-bold text-slate-900 text-lg">Max from One Team</h4>
                      </div>
                      <p className="text-slate-700 text-sm">
                        You can select a maximum of 7 players from a single cricket team. This ensures balanced representation from both sides.
                      </p>
                    </div>

                    {/* Min from Each Team */}
                    <div className="bg-orange-50 rounded-xl p-6 border-2 border-orange-200">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 rounded-lg bg-orange-500 text-white flex items-center justify-center font-black text-xl">
                          4
                        </div>
                        <h4 className="font-bold text-slate-900 text-lg">Min from Each Team</h4>
                      </div>
                      <p className="text-slate-700 text-sm">
                        You must select at least 4 players from each competing team. This prevents one-sided team selection.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Role-Based Composition */}
              <Card className="border-2 border-slate-200 shadow-xl overflow-hidden">
                <div className="h-3 bg-gradient-to-r from-slate-500 to-slate-600"></div>
                <CardContent className="p-10 space-y-6">
                  <h3 className="text-3xl font-bold text-slate-900 mb-6">Role-Based Composition</h3>
                  <p className="text-slate-700 leading-relaxed mb-6">
                    Your 11-player squad must include players from all four cricket roles. Each role has a minimum and maximum limit 
                    to ensure balanced team composition that mirrors real cricket strategy.
                  </p>

                  <div className="space-y-4">
                    {[
                      {
                        role: "Wicket Keepers (WK)",
                        range: "1 - 4 players",
                        icon: "🧤",
                        color: "blue",
                        explanation: "Wicket keepers are crucial for both batting and fielding. You must have at least 1 WK in your team. Premium keepers who bat in top order (like Rishabh Pant, Jos Buttler) are valuable picks."
                      },
                      {
                        role: "Batsmen (BAT)",
                        range: "3 - 6 players",
                        icon: "🏏",
                        color: "green",
                        explanation: "Batsmen are your primary run-scorers. You need a minimum of 3 batsmen to ensure consistent scoring. Top-order batsmen typically earn more points through boundaries and big scores."
                      },
                      {
                        role: "All-Rounders (AR)",
                        range: "1 - 4 players",
                        icon: "⚡",
                        color: "purple",
                        explanation: "All-rounders provide flexibility by contributing with both bat and ball. They earn points from multiple sources, making them valuable picks. At least 1 all-rounder is mandatory."
                      },
                      {
                        role: "Bowlers (BOWL)",
                        range: "3 - 6 players",
                        icon: "🎯",
                        color: "orange",
                        explanation: "Bowlers earn points through wickets, maiden overs, and economy rate. You need at least 3 bowlers. In T20s, death-over specialists and powerplay bowlers are particularly valuable."
                      }
                    ].map((item, i) => (
                      <Card key={i} className={`border-2 border-${item.color}-200 bg-${item.color}-50/30 overflow-hidden`}>
                        <CardContent className="p-6">
                          <div className="flex items-start gap-4">
                            <div className="text-4xl">{item.icon}</div>
                            <div className="flex-1">
                              <div className="flex items-center justify-between mb-3">
                                <h4 className="text-xl font-bold text-slate-900">{item.role}</h4>
                                <Badge className={`bg-${item.color}-500 text-white font-bold px-4 py-1`}>
                                  {item.range}
                                </Badge>
                              </div>
                              <p className="text-slate-700 text-sm leading-relaxed">{item.explanation}</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Credit System Explained - DETAILED */}
      <div className="container py-24">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <Calculator className="w-16 h-16 text-purple-600 mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Understanding the Team Budget System</h2>
            <p className="text-lg text-slate-600">
              Every player has a point value that reflects their recent performance, role, and expected impact. This is a game mechanic, not a currency.
            </p>
          </div>

          <div className="space-y-8">
            <Card className="border-2 border-purple-200 shadow-xl overflow-hidden">
              <div className="h-3 bg-gradient-to-r from-purple-500 to-purple-600"></div>
              <CardContent className="p-10 space-y-6">
                <h3 className="text-3xl font-bold text-slate-900 mb-4">How Player Point Values Work</h3>
                <p className="text-lg text-slate-700 leading-relaxed">
                  Each player in the squad pool is assigned a point value between <strong>7.0 and 11.0 points</strong>. 
                  This value is determined by multiple factors including recent form, batting/bowling averages, strike rates, 
                  and overall impact in similar match conditions. This is purely a game constraint to teach strategic selection.
                </p>

                <div className="bg-purple-50 rounded-xl p-6 border border-purple-200">
                  <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                    <Info className="w-5 h-5 text-purple-600" />
                    Player Point Value Ranges
                  </h4>
                  <div className="space-y-3">
                    {[
                      { range: "10.5 - 11.0 Points", type: "Premium Players", desc: "Star performers, captains, match-winners (e.g., Virat Kohli, Jasprit Bumrah, Babar Azam)" },
                      { range: "9.5 - 10.0 Points", type: "Core Players", desc: "Consistent performers, key team members, reliable all-rounders" },
                      { range: "8.5 - 9.0 Points", type: "Value Picks", desc: "Form players, emerging talents, situational specialists" },
                      { range: "7.0 - 8.0 Points", type: "Budget Options", desc: "Lower-order batsmen, part-time bowlers, backup players" }
                    ].map((item, i) => (
                      <div key={i} className="flex gap-4 bg-white rounded-lg p-4">
                        <div className="flex-shrink-0 w-32">
                          <Badge className="bg-purple-500 text-white font-bold">{item.range}</Badge>
                        </div>
                        <div>
                          <h5 className="font-bold text-slate-900 mb-1">{item.type}</h5>
                          <p className="text-slate-600 text-sm">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
                  <h4 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                    <Lightbulb className="w-5 h-5 text-blue-600" />
                    Strategic Tip: Balancing Your Budget
                  </h4>
                  <p className="text-slate-700 leading-relaxed">
                    With only 100 points for 11 players (average ~9.1 points per player), you cannot select all premium players. 
                    High-scoring teams balance 2-3 premium stars with 4-5 mid-range performers and 3-4 lower-value picks who offer strategic value. 
                    Look for undervalued players in good form or favorable matchups.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Captain & Vice-Captain - DETAILED */}
      <div className="bg-slate-900 py-24 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_70%)]"></div>
        <div className="container relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <Award className="w-16 h-16 text-secondary mx-auto mb-6" />
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Captain & Vice-Captain Strategy</h2>
              <p className="text-xl text-slate-400">
                The most critical decision in fantasy cricket—choosing the right leaders can double your points
              </p>
            </div>

            <div className="space-y-8">
              {/* Captain Card */}
              <Card className="bg-slate-800/50 border-slate-700">
                <CardContent className="p-10 space-y-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 rounded-xl bg-yellow-500/20 flex items-center justify-center">
                      <Trophy className="w-8 h-8 text-yellow-400" />
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-white">Captain (C)</h3>
                      <Badge className="bg-yellow-500 text-yellow-900 font-bold mt-2">2x Points Multiplier</Badge>
                    </div>
                  </div>
                  
                  <p className="text-slate-300 text-lg leading-relaxed">
                    Your Captain earns <strong className="text-yellow-400">double points (2x)</strong> for all their actions. 
                    If your captain scores 50 points, you receive 100 points. This makes captain selection the single most 
                    impactful decision in fantasy cricket.
                  </p>

                  <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-6">
                    <h4 className="font-bold text-white mb-4">Captain Selection Criteria:</h4>
                    <div className="space-y-3">
                      {[
                        "Recent Form: Choose players who have scored consistently in recent matches",
                        "Match Conditions: Consider pitch type, weather, and venue history",
                        "Opposition Weakness: Target players likely to exploit opponent weaknesses",
                        "Role Impact: All-rounders and top-order batsmen often provide more scoring opportunities",
                        "Consistency vs. Explosiveness: Balance between reliable performers and high-ceiling players"
                      ].map((tip, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                          <span className="text-slate-300 text-sm">{tip}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Vice-Captain Card */}
              <Card className="bg-slate-800/50 border-slate-700">
                <CardContent className="p-10 space-y-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 rounded-xl bg-blue-500/20 flex items-center justify-center">
                      <Star className="w-8 h-8 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-white">Vice-Captain (VC)</h3>
                      <Badge className="bg-blue-500 text-blue-900 font-bold mt-2">1.5x Points Multiplier</Badge>
                    </div>
                  </div>
                  
                  <p className="text-slate-300 text-lg leading-relaxed">
                    Your Vice-Captain earns <strong className="text-blue-400">1.5x points</strong> for all their actions. 
                    If your vice-captain scores 50 points, you receive 75 points. This provides a safety net and additional 
                    scoring boost.
                  </p>

                  <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-6">
                    <h4 className="font-bold text-white mb-4">Vice-Captain Selection Strategy:</h4>
                    <div className="space-y-3">
                      {[
                        "Differential Pick: Choose a less-obvious player to gain advantage over competitors",
                        "Complementary Role: If captain is a batsman, consider a bowler as VC for balance",
                        "High Floor: Select consistent performers who are unlikely to fail completely",
                        "Matchup Advantage: Look for players facing favorable opposition or conditions",
                        "Captaincy Hedge: Pick a player from the opposite team as insurance"
                      ].map((tip, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                          <span className="text-slate-300 text-sm">{tip}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Example Calculation */}
              <Card className="bg-gradient-to-br from-green-500/20 to-blue-500/20 border-green-500/30">
                <CardContent className="p-10">
                  <h4 className="font-bold text-white text-2xl mb-6 flex items-center gap-3">
                    <Calculator className="w-7 h-7 text-green-400" />
                    Example: Impact of Leadership Multipliers
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-slate-800/50 rounded-lg p-6 border border-slate-700">
                      <div className="text-sm text-slate-400 mb-2">Regular Player</div>
                      <div className="text-3xl font-black text-white mb-2">50</div>
                      <div className="text-sm text-slate-300">Base Points = 50 points</div>
                    </div>
                    <div className="bg-blue-500/20 rounded-lg p-6 border border-blue-500/30">
                      <div className="text-sm text-blue-300 mb-2">Vice-Captain (1.5x)</div>
                      <div className="text-3xl font-black text-blue-400 mb-2">75</div>
                      <div className="text-sm text-slate-300">50 × 1.5 = 75 points</div>
                    </div>
                    <div className="bg-yellow-500/20 rounded-lg p-6 border border-yellow-500/30">
                      <div className="text-sm text-yellow-300 mb-2">Captain (2x)</div>
                      <div className="text-3xl font-black text-yellow-400 mb-2">100</div>
                      <div className="text-sm text-slate-300">50 × 2 = 100 points</div>
                    </div>
                  </div>
                  <p className="text-slate-300 text-sm mt-6 text-center">
                    A captain scoring 50 points contributes the same as two regular players scoring 50 each!
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Scoring System - COMPREHENSIVE */}
      <div className="container py-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <TrendingUp className="w-16 h-16 text-green-600 mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Complete Scoring System</h2>
            <p className="text-lg text-slate-600">
              Understand exactly how points are calculated for every action in T20, ODI, and Test formats
            </p>
          </div>

          {/* Format Tabs Note */}
          <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-6 mb-12">
            <div className="flex items-start gap-4">
              <Info className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-slate-900 mb-2">Format-Specific Scoring</h4>
                <p className="text-slate-700 leading-relaxed">
                  Point values vary by match format (T20, ODI, Test) to reflect the different dynamics of each game type. 
                  Below are the detailed scoring rules for <strong>T20 format</strong>. ODI and Test formats have adjusted 
                  values to account for longer match duration and different strategic priorities.
                </p>
              </div>
            </div>
          </div>

          {/* Batting Points */}
          <Card className="border-2 border-green-200 shadow-xl overflow-hidden mb-8">
            <div className="h-3 bg-gradient-to-r from-green-500 to-green-600"></div>
            <CardContent className="p-10 space-y-6">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-green-100 flex items-center justify-center">
                  <span className="text-3xl">🏏</span>
                </div>
                <h3 className="text-3xl font-bold text-slate-900">Batting Points (T20)</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { action: "Run scored", points: "+1", desc: "Every single run adds 1 point" },
                  { action: "Boundary (4s)", points: "+1 bonus", desc: "4 runs (4 points) + 1 bonus = 5 total" },
                  { action: "Six (6s)", points: "+2 bonus", desc: "6 runs (6 points) + 2 bonus = 8 total" },
                  { action: "Half-century (50 runs)", points: "+8 bonus", desc: "50 points + 8 bonus = 58 total" },
                  { action: "Century (100 runs)", points: "+16 bonus", desc: "100 points + 16 bonus = 116 total" },
                  { action: "Duck (out for 0)", points: "-2", desc: "Batsmen dismissed without scoring lose 2 points" }
                ].map((item, i) => (
                  <div key={i} className="flex items-center justify-between bg-green-50 rounded-lg p-4 border border-green-200">
                    <div>
                      <div className="font-bold text-slate-900">{item.action}</div>
                      <div className="text-sm text-slate-600">{item.desc}</div>
                    </div>
                    <Badge className={`${item.points.startsWith('-') ? 'bg-red-500' : 'bg-green-500'} text-white font-bold text-lg px-4 py-2`}>
                      {item.points}
                    </Badge>
                  </div>
                ))}
              </div>

              <div className="bg-green-50 rounded-lg p-6 border border-green-200 mt-6">
                <h4 className="font-bold text-slate-900 mb-3">Strike Rate Bonuses (T20 Only)</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between"><span className="text-slate-700">Strike Rate 100-124.99 (min 10 balls)</span><Badge className="bg-green-600 text-white">+2</Badge></div>
                  <div className="flex justify-between"><span className="text-slate-700">Strike Rate 125-149.99 (min 10 balls)</span><Badge className="bg-green-600 text-white">+4</Badge></div>
                  <div className="flex justify-between"><span className="text-slate-700">Strike Rate 150+ (min 10 balls)</span><Badge className="bg-green-600 text-white">+6</Badge></div>
                  <div className="flex justify-between"><span className="text-slate-700">Strike Rate below 50 (min 10 balls)</span><Badge className="bg-red-500 text-white">-2</Badge></div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Bowling Points */}
          <Card className="border-2 border-blue-200 shadow-xl overflow-hidden mb-8">
            <div className="h-3 bg-gradient-to-r from-blue-500 to-blue-600"></div>
            <CardContent className="p-10 space-y-6">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-blue-100 flex items-center justify-center">
                  <span className="text-3xl">🎯</span>
                </div>
                <h3 className="text-3xl font-bold text-slate-900">Bowling Points (T20)</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { action: "Wicket taken", points: "+25", desc: "Any dismissal (bowled, caught, LBW, etc.)" },
                  { action: "Maiden over", points: "+12", desc: "No runs conceded in an over" },
                  { action: "3 wickets bonus", points: "+4", desc: "Taking 3 wickets in a match" },
                  { action: "4 wickets bonus", points: "+8", desc: "Taking 4 wickets in a match" },
                  { action: "5 wickets bonus", points: "+16", desc: "Taking 5 or more wickets" },
                  { action: "Dot ball", points: "+1", desc: "No runs scored off the delivery" }
                ].map((item, i) => (
                  <div key={i} className="flex items-center justify-between bg-blue-50 rounded-lg p-4 border border-blue-200">
                    <div>
                      <div className="font-bold text-slate-900">{item.action}</div>
                      <div className="text-sm text-slate-600">{item.desc}</div>
                    </div>
                    <Badge className="bg-blue-500 text-white font-bold text-lg px-4 py-2">
                      {item.points}
                    </Badge>
                  </div>
                ))}
              </div>

              <div className="bg-blue-50 rounded-lg p-6 border border-blue-200 mt-6">
                <h4 className="font-bold text-slate-900 mb-3">Economy Rate Bonuses (T20 Only, min 2 overs)</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between"><span className="text-slate-700">Economy Rate below 5 runs/over</span><Badge className="bg-blue-600 text-white">+6</Badge></div>
                  <div className="flex justify-between"><span className="text-slate-700">Economy Rate 5-5.99 runs/over</span><Badge className="bg-blue-600 text-white">+4</Badge></div>
                  <div className="flex justify-between"><span className="text-slate-700">Economy Rate 6-7 runs/over</span><Badge className="bg-blue-600 text-white">+2</Badge></div>
                  <div className="flex justify-between"><span className="text-slate-700">Economy Rate 10-11 runs/over</span><Badge className="bg-red-500 text-white">-2</Badge></div>
                  <div className="flex justify-between"><span className="text-slate-700">Economy Rate above 11 runs/over</span><Badge className="bg-red-500 text-white">-4</Badge></div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Fielding Points */}
          <Card className="border-2 border-purple-200 shadow-xl overflow-hidden">
            <div className="h-3 bg-gradient-to-r from-purple-500 to-purple-600"></div>
            <CardContent className="p-10 space-y-6">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-purple-100 flex items-center justify-center">
                  <span className="text-3xl">🧤</span>
                </div>
                <h3 className="text-3xl font-bold text-slate-900">Fielding Points (All Formats)</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { action: "Catch taken", points: "+8", desc: "Any catch held by a fielder" },
                  { action: "Stumping", points: "+12", desc: "Wicket-keeper dismissal" },
                  { action: "Run out (direct hit)", points: "+12", desc: "Direct throw hitting stumps" },
                  { action: "Run out (thrower)", points: "+6", desc: "Throw leading to run out" },
                  { action: "Run out (catcher)", points: "+6", desc: "Catching throw for run out" },
                  { action: "3 catches bonus", points: "+4", desc: "Taking 3 catches in a match" }
                ].map((item, i) => (
                  <div key={i} className="flex items-center justify-between bg-purple-50 rounded-lg p-4 border border-purple-200">
                    <div>
                      <div className="font-bold text-slate-900">{item.action}</div>
                      <div className="text-sm text-slate-600">{item.desc}</div>
                    </div>
                    <Badge className="bg-purple-500 text-white font-bold text-lg px-4 py-2">
                      {item.points}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Strategy Tips - NEW SECTION */}
      <div className="bg-gradient-to-br from-orange-50 to-red-50/30 py-24 border-y border-slate-200">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <Lightbulb className="w-16 h-16 text-orange-600 mx-auto mb-6" />
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Winning Strategies & Pro Tips</h2>
              <p className="text-lg text-slate-600">
                Learn from experienced players and improve your team selection with these proven strategies
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "Research Match Conditions",
                  icon: <BookOpen className="w-8 h-8 text-blue-600" />,
                  tips: [
                    "Check pitch reports: Batting-friendly or bowling-friendly?",
                    "Weather forecast: Rain can affect match outcome",
                    "Venue history: Some grounds favor spinners, others favor pace",
                    "Toss impact: Teams batting first or chasing?"
                  ],
                  color: "blue"
                },
                {
                  title: "Analyze Player Form",
                  icon: <TrendingUp className="w-8 h-8 text-green-600" />,
                  tips: [
                    "Recent performances: Last 5 matches statistics",
                    "Head-to-head records: How players perform against specific opponents",
                    "Home vs Away: Some players excel in familiar conditions",
                    "Injury updates: Check team news before deadline"
                  ],
                  color: "green"
                },
                {
                  title: "Balance Risk & Safety",
                  icon: <Target className="w-8 h-8 text-purple-600" />,
                  tips: [
                    "Core picks: 6-7 safe, consistent performers",
                    "Differential picks: 2-3 less-owned players for advantage",
                    "Punt picks: 1-2 high-risk, high-reward options",
                    "Avoid template teams: Differentiate to climb leaderboard"
                  ],
                  color: "purple"
                },
                {
                  title: "Optimize Captain Choice",
                  icon: <Award className="w-8 h-8 text-orange-600" />,
                  tips: [
                    "All-rounders as captain: Double scoring opportunities",
                    "Top-order batsmen: More deliveries faced = more points",
                    "Death-over bowlers: Wickets in T20 death overs are valuable",
                    "Avoid safe captains: Take calculated risks for big gains"
                  ],
                  color: "orange"
                }
              ].map((section, i) => (
                <Card key={i} className={`border-2 border-${section.color}-200 shadow-xl overflow-hidden`}>
                  <div className={`h-3 bg-gradient-to-r from-${section.color}-400 to-${section.color}-600`}></div>
                  <CardContent className="p-8 space-y-4">
                    <div className="flex items-center gap-4 mb-4">
                      <div className={`w-14 h-14 rounded-xl bg-${section.color}-50 flex items-center justify-center`}>
                        {section.icon}
                      </div>
                      <h3 className="text-xl font-bold text-slate-900">{section.title}</h3>
                    </div>
                    <ul className="space-y-3">
                      {section.tips.map((tip, j) => (
                        <li key={j} className="flex items-start gap-3">
                          <CheckCircle2 className={`w-5 h-5 text-${section.color}-600 flex-shrink-0 mt-0.5`} />
                          <span className="text-slate-700 text-sm">{tip}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section - NEW */}
      <div className="container py-24">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <HelpCircle className="w-16 h-16 text-blue-600 mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Frequently Asked Questions</h2>
            <p className="text-lg text-slate-600">
              Quick answers to common questions about playing fantasy cricket on RIVOAURA
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                q: "Can I edit my team after joining a contest?",
                a: "No, once you join a contest, your team is locked. However, you can create multiple teams with different combinations and join different contests before the match deadline."
              },
              {
                q: "What happens if a player doesn't play?",
                a: "If a player in your team doesn't play in the actual match, they score 0 points. This is why it's important to check team news and playing XI announcements before the deadline."
              },
              {
                q: "Can I change my captain after the match starts?",
                a: "No, captain and vice-captain selections are final once the match begins. Choose carefully based on pre-match analysis."
              },
              {
                q: "How are points calculated for all-rounders?",
                a: "All-rounders earn points for both batting and bowling actions. They get batting points for runs scored and bowling points for wickets taken, plus any bonuses and fielding points."
              },
              {
                q: "What is the deadline for team submission?",
                a: "The deadline is typically 5-10 minutes before the scheduled match start time. You cannot create or edit teams after this deadline."
              },
              {
                q: "Can I join multiple contests with the same team?",
                a: "Yes! You can use the same team to enter multiple free contests. You can also create different teams for different contests."
              }
            ].map((faq, i) => (
              <Card key={i} className="border-2 border-slate-200 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <h4 className="text-xl font-bold text-slate-900 mb-3 flex items-start gap-3">
                    <AlertCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                    {faq.q}
                  </h4>
                  <p className="text-slate-700 leading-relaxed pl-9">{faq.a}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="container py-24">
        <div className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 rounded-3xl p-12 md:p-20 text-white shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-96 h-96 bg-green-500/20 rounded-full blur-3xl"></div>
          
          <div className="relative z-10 max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold">Ready to Build Your Dream Team?</h2>
            <p className="text-xl text-blue-100 leading-relaxed">
              Now that you understand the rules, scoring, and strategies, it's time to put your knowledge to the test. 
              Join thousands of cricket fans competing for glory!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link href="/register">
                <Button size="lg" className="h-14 px-10 text-lg bg-white text-slate-900 hover:bg-blue-50 rounded-full shadow-xl">
                  Start Playing Free →
                </Button>
              </Link>
              <Link href="/tournaments">
                <Button variant="outline" size="lg" className="h-14 px-10 text-lg border-white/30 text-white hover:bg-white/10 rounded-full bg-transparent">
                  View Live Matches
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
