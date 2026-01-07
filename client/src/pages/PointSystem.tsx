import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Info, Zap, Target, Shield, Trophy, Activity, AlertTriangle } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

export default function PointSystem() {
  // Data structures for points - Standardized rules but unique presentation
  const battingStats = [
    { label: "Run Scored", points: "+1", desc: "Per run scored by any batsman" },
    { label: "Boundary (4s)", points: "+1", desc: "Bonus points for hitting a four" },
    { label: "Sixer (6s)", points: "+2", desc: "Bonus points for hitting a six" },
    { label: "30 Run Bonus", points: "+4", desc: "Awarded upon reaching 30 runs" },
    { label: "Half Century", points: "+8", desc: "Awarded upon reaching 50 runs" },
    { label: "Century", points: "+16", desc: "Awarded upon reaching 100 runs" },
    { label: "Duck Dismissal", points: "-2", desc: "Getting out for 0 runs (Batters/WK/All-rounders)", negative: true },
  ];

  const bowlingStats = [
    { label: "Wicket", points: "+25", desc: "Excluding run-outs" },
    { label: "LBW / Bowled", points: "+8", desc: "Bonus for clean bowled or LBW" },
    { label: "3 Wicket Haul", points: "+4", desc: "Taking 3 wickets in a match" },
    { label: "4 Wicket Haul", points: "+8", desc: "Taking 4 wickets in a match" },
    { label: "5 Wicket Haul", points: "+16", desc: "Taking 5 wickets in a match" },
    { label: "Maiden Over", points: "+12", desc: "Bowling an over with 0 runs conceded" },
  ];

  const fieldingStats = [
    { label: "Catch", points: "+8", desc: "Completing a clean catch" },
    { label: "3 Catch Bonus", points: "+4", desc: "Taking 3 catches in a single match" },
    { label: "Stumping", points: "+12", desc: "Wicket keeper stumping" },
    { label: "Direct Hit", points: "+12", desc: "Run out via direct hit" },
    { label: "Run Out", points: "+6", desc: "Run out (throw and catch)" },
  ];

  const economyStats = [
    { label: "Below 5.00", points: "+6", color: "text-emerald-600" },
    { label: "5.00 - 5.99", points: "+4", color: "text-emerald-500" },
    { label: "6.00 - 7.00", points: "+2", color: "text-emerald-400" },
    { label: "10.00 - 11.00", points: "-2", color: "text-rose-400" },
    { label: "11.01 - 12.00", points: "-4", color: "text-rose-500" },
    { label: "Above 12.00", points: "-6", color: "text-rose-600" },
  ];

  const strikeRateStats = [
    { label: "> 170", points: "+6", color: "text-emerald-600" },
    { label: "150.01 - 170", points: "+4", color: "text-emerald-500" },
    { label: "130 - 150", points: "+2", color: "text-emerald-400" },
    { label: "60 - 70", points: "-2", color: "text-rose-400" },
    { label: "50 - 59.99", points: "-4", color: "text-rose-500" },
    { label: "< 50", points: "-6", color: "text-rose-600" },
  ];

  const PointCard = ({ title, icon: Icon, stats, colorClass }: any) => (
    <Card className="overflow-hidden border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-300">
      <div className={`p-4 ${colorClass} text-white flex items-center justify-between`}>
        <div className="flex items-center gap-2 font-bold text-lg">
          <Icon className="w-5 h-5" />
          {title}
        </div>
        <Badge variant="outline" className="text-white border-white/30 bg-white/10">
          T20 Format
        </Badge>
      </div>
      <CardContent className="p-0">
        <div className="divide-y divide-slate-100">
          {stats.map((stat: any, idx: number) => (
            <div key={idx} className="flex items-center justify-between p-4 hover:bg-slate-50 transition-colors group">
              <div className="space-y-1">
                <div className="font-medium text-slate-700 flex items-center gap-2">
                  {stat.label}
                  {stat.negative && <AlertTriangle className="w-3 h-3 text-rose-500" />}
                </div>
                {stat.desc && <div className="text-xs text-slate-400 group-hover:text-slate-500">{stat.desc}</div>}
              </div>
              <div className={`font-bold text-lg ${stat.points.startsWith('-') ? 'text-rose-500' : 'text-emerald-600'}`}>
                {stat.points}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );

  const RateCard = ({ title, subtitle, stats }: any) => (
    <Card className="h-full border-slate-200 shadow-sm">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg text-slate-800">{title}</CardTitle>
        <CardDescription className="text-xs">{subtitle}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-2">
          {stats.map((stat: any, idx: number) => (
            <div key={idx} className="flex flex-col items-center justify-center p-3 bg-slate-50 rounded-lg border border-slate-100">
              <span className="text-xs font-medium text-slate-500 mb-1">{stat.label}</span>
              <span className={`text-xl font-bold ${stat.color}`}>{stat.points}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen bg-slate-50/50">
      {/* Unique Header Design */}
      <div className="bg-slate-900 text-white py-16 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3"></div>
        
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-primary-foreground text-xs font-medium mb-6 border border-white/20">
              <Activity className="w-3 h-3" />
              <span>Official Scoring Engine v2.0</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              The <span className="text-primary">Science</span> Behind Your Score
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed max-w-2xl">
              DAYHAAT uses a precision-based scoring algorithm designed to reward pure cricketing skill. 
              Every run, wicket, and catch is quantified to ensure the best manager wins.
            </p>
          </div>
        </div>
      </div>

      <div className="container py-12 -mt-8 relative z-20">
        <Tabs defaultValue="t20" className="space-y-8">
          <div className="flex justify-center">
            <TabsList className="bg-white shadow-lg border border-slate-100 p-1 h-14 rounded-full">
              <TabsTrigger value="t20" className="rounded-full px-8 h-12 data-[state=active]:bg-primary data-[state=active]:text-white">T20 League</TabsTrigger>
              <TabsTrigger value="odi" className="rounded-full px-8 h-12 data-[state=active]:bg-primary data-[state=active]:text-white">ODI Match</TabsTrigger>
              <TabsTrigger value="test" className="rounded-full px-8 h-12 data-[state=active]:bg-primary data-[state=active]:text-white">Test Cricket</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="t20" className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            
            {/* Primary Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <PointCard 
                title="Batting Impact" 
                icon={Zap} 
                stats={battingStats} 
                colorClass="bg-gradient-to-r from-blue-600 to-blue-500" 
              />
              <PointCard 
                title="Bowling Mastery" 
                icon={Target} 
                stats={bowlingStats} 
                colorClass="bg-gradient-to-r from-emerald-600 to-emerald-500" 
              />
              <PointCard 
                title="Fielding Agility" 
                icon={Shield} 
                stats={fieldingStats} 
                colorClass="bg-gradient-to-r from-violet-600 to-violet-500" 
              />
            </div>

            {/* Secondary Stats & Multipliers */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
                <RateCard 
                  title="Economy Rate Impact" 
                  subtitle="For bowlers delivering min. 2 overs"
                  stats={economyStats}
                />
                <RateCard 
                  title="Strike Rate Impact" 
                  subtitle="For batsmen facing min. 10 balls"
                  stats={strikeRateStats}
                />
              </div>

              {/* Unique "Captaincy Matrix" Card */}
              <Card className="bg-slate-900 text-white border-slate-800 shadow-xl flex flex-col justify-center">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-yellow-400">
                    <Trophy className="w-5 h-5" />
                    Leadership Multipliers
                  </CardTitle>
                  <CardDescription className="text-slate-400">
                    Your most crucial decision
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/10">
                    <div>
                      <div className="text-sm font-medium text-slate-300">Captain (C)</div>
                      <div className="text-xs text-slate-500">Leads the squad</div>
                    </div>
                    <div className="text-3xl font-bold text-yellow-400">2x</div>
                  </div>
                  <div className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/10">
                    <div>
                      <div className="text-sm font-medium text-slate-300">Vice-Captain (VC)</div>
                      <div className="text-xs text-slate-500">Second in command</div>
                    </div>
                    <div className="text-3xl font-bold text-slate-300">1.5x</div>
                  </div>
                  
                  <div className="p-4 rounded-xl bg-blue-500/10 border border-blue-500/20 text-xs text-blue-200 leading-relaxed">
                    <Info className="w-3 h-3 inline mr-1" />
                    <strong>Pro Tip:</strong> Always pick an all-rounder as Captain in T20s to maximize points from both batting and bowling.
                  </div>
                </CardContent>
              </Card>
            </div>

          </TabsContent>

          <TabsContent value="odi">
            <div className="flex flex-col items-center justify-center py-20 text-center space-y-4 bg-white rounded-2xl border border-slate-200 shadow-sm">
              <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center text-blue-500 mb-2">
                <Activity className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">ODI Format Rules</h3>
              <p className="text-slate-500 max-w-md">
                One Day International scoring follows the T20 structure with adjusted Strike Rate and Economy Rate thresholds to reflect the longer format.
              </p>
              <Badge variant="secondary">Coming Soon</Badge>
            </div>
          </TabsContent>

          <TabsContent value="test">
            <div className="flex flex-col items-center justify-center py-20 text-center space-y-4 bg-white rounded-2xl border border-slate-200 shadow-sm">
              <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center text-emerald-500 mb-2">
                <Activity className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">Test Cricket Rules</h3>
              <p className="text-slate-500 max-w-md">
                The ultimate test of endurance. Strike rates are ignored, and wickets carry higher value.
              </p>
              <Badge variant="secondary">Coming Soon</Badge>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
