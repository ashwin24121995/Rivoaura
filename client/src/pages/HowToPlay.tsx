import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Trophy, Users, ShieldCheck, MousePointerClick, CheckCircle2, ArrowRight, Star, Zap } from "lucide-react";

export default function HowToPlay() {
  const steps = [
    {
      id: "01",
      title: "Scout The Match",
      subtitle: "Select Your Battleground",
      description: "Browse the match lobby to find upcoming T20, ODI, or Test matches. Look for the 'Mega Contest' tag for the biggest community challenges.",
      icon: <MousePointerClick className="w-6 h-6" />,
      color: "bg-blue-500",
      lightColor: "bg-blue-50",
      textColor: "text-blue-600"
    },
    {
      id: "02",
      title: "Build Your Squad",
      subtitle: "100 Credits. 11 Players.",
      description: "You are the manager. Pick your best 11 players within the credit limit. You need a balanced team of batsmen, bowlers, and all-rounders.",
      icon: <Users className="w-6 h-6" />,
      color: "bg-emerald-500",
      lightColor: "bg-emerald-50",
      textColor: "text-emerald-600"
    },
    {
      id: "03",
      title: "Assign Leadership",
      subtitle: "The Game Changer",
      description: "Select a Captain (2x Points) and Vice-Captain (1.5x Points). This single decision often separates the winners from the rest.",
      icon: <ShieldCheck className="w-6 h-6" />,
      color: "bg-violet-500",
      lightColor: "bg-violet-50",
      textColor: "text-violet-600"
    },
    {
      id: "04",
      title: "Join The Arena",
      subtitle: "Compete for Glory",
      description: "Enter your team into contests. Watch live scores update in real-time and climb the global leaderboard as your players perform.",
      icon: <Trophy className="w-6 h-6" />,
      color: "bg-amber-500",
      lightColor: "bg-amber-50",
      textColor: "text-amber-600"
    }
  ];

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Unique Hero Section */}
      <div className="relative bg-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/pattern-grid.svg')] opacity-10"></div>
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3"></div>
        
        <div className="container relative z-10 py-24 md:py-32">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-sm font-medium mb-8">
              <Zap className="w-4 h-4 text-yellow-400 fill-yellow-400" />
              <span>Elite Academy Training Module</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight leading-tight">
              Master the Art of <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">Fantasy Cricket</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl leading-relaxed mb-10">
              It's not just about luck. It's about strategy, analysis, and instinct. 
              Learn how to build a championship-winning squad in 4 simple steps.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/register">
                <Button size="lg" className="h-14 px-8 text-lg bg-primary hover:bg-primary/90 text-white rounded-full shadow-lg shadow-primary/25">
                  Start Playing Now
                </Button>
              </Link>
              <Link href="/point-system">
                <Button variant="outline" size="lg" className="h-14 px-8 text-lg border-white/20 text-white hover:bg-white/10 rounded-full bg-transparent">
                  View Point System
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Unique Steps Layout */}
      <div className="container py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-24">
          {steps.map((step, index) => (
            <div key={step.id} className="group relative">
              {/* Connecting Line (Desktop only) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-24 left-8 w-0.5 h-32 bg-slate-100 -z-10 group-hover:bg-slate-200 transition-colors"></div>
              )}
              
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className={`w-16 h-16 rounded-2xl ${step.lightColor} ${step.textColor} flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300`}>
                    {step.icon}
                  </div>
                </div>
                <div className="space-y-3 pt-2">
                  <div className="flex items-center gap-3">
                    <span className="text-5xl font-black text-slate-100 select-none">{step.id}</span>
                    <h3 className="text-2xl font-bold text-slate-900">{step.title}</h3>
                  </div>
                  <div className={`text-sm font-bold uppercase tracking-wider ${step.textColor}`}>
                    {step.subtitle}
                  </div>
                  <p className="text-slate-600 leading-relaxed text-lg">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Team Composition Rules - Unique Card Design */}
      <div className="bg-slate-50 py-24">
        <div className="container">
          <div className="max-w-4xl mx-auto bg-white rounded-[2rem] shadow-xl overflow-hidden border border-slate-100">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-12 bg-slate-900 text-white flex flex-col justify-center">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-6">
                  <Star className="w-6 h-6 text-yellow-400" />
                </div>
                <h3 className="text-3xl font-bold mb-4">The Golden Rules</h3>
                <p className="text-slate-400 mb-8">
                  To ensure fair play and balanced competition, every team must adhere to these strict composition guidelines.
                </p>
                <div className="flex items-center gap-2 text-sm font-medium text-slate-300 bg-white/5 p-4 rounded-lg border border-white/10">
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  Max 7 players from a single team
                </div>
              </div>
              
              <div className="p-12 flex flex-col justify-center">
                <h4 className="font-bold text-slate-900 mb-6 text-lg">Required Squad Balance</h4>
                <ul className="space-y-4">
                  {[
                    { role: "Wicket Keepers", count: "1 - 4", icon: "🧤" },
                    { role: "Batsmen", count: "3 - 6", icon: "🏏" },
                    { role: "All Rounders", count: "1 - 4", icon: "⚡" },
                    { role: "Bowlers", count: "3 - 6", icon: "🎯" },
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center justify-between p-3 rounded-lg hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100">
                      <div className="flex items-center gap-3">
                        <span className="text-xl">{item.icon}</span>
                        <span className="font-medium text-slate-700">{item.role}</span>
                      </div>
                      <span className="font-bold text-slate-900 bg-slate-100 px-3 py-1 rounded-md text-sm">
                        {item.count}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <div className="container py-24 text-center">
        <h2 className="text-3xl font-bold text-slate-900 mb-6">Ready to prove your skills?</h2>
        <Link href="/tournaments">
          <Button size="lg" className="h-14 px-10 text-lg rounded-full group">
            Enter Match Lobby
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </Link>
      </div>
    </div>
  );
}
