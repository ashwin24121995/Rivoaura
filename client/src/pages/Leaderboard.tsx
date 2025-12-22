import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Trophy, Medal, Crown, TrendingUp } from "lucide-react";

// Mock Leaderboard Data
const LEADERBOARD_DATA = {
  weekly: [
    { rank: 1, name: "CricketKing_99", points: 850, change: "up", avatar: "CK" },
    { rank: 2, name: "MasterBlaster", points: 820, change: "down", avatar: "MB" },
    { rank: 3, name: "SpinWizard", points: 795, change: "same", avatar: "SW" },
    { rank: 4, name: "CoverDrive", points: 760, change: "up", avatar: "CD" },
    { rank: 5, name: "YorkerSpecialist", points: 745, change: "down", avatar: "YS" },
  ],
  monthly: [
    { rank: 1, name: "MasterBlaster", points: 3200, change: "up", avatar: "MB" },
    { rank: 2, name: "CricketKing_99", points: 3150, change: "down", avatar: "CK" },
    { rank: 3, name: "BoundaryHitter", points: 2980, change: "up", avatar: "BH" },
    { rank: 4, name: "SpinWizard", points: 2850, change: "same", avatar: "SW" },
    { rank: 5, name: "WicketKeeper01", points: 2700, change: "up", avatar: "WK" },
  ],
  allTime: [
    { rank: 1, name: "LegendaryXI", points: 45000, change: "same", avatar: "LX" },
    { rank: 2, name: "CricketKing_99", points: 42500, change: "up", avatar: "CK" },
    { rank: 3, name: "MasterBlaster", points: 41000, change: "down", avatar: "MB" },
    { rank: 4, name: "ProGamer_IND", points: 38500, change: "same", avatar: "PG" },
    { rank: 5, name: "FantasyGuru", points: 36000, change: "up", avatar: "FG" },
  ]
};

export default function Leaderboard() {
  const [period, setPeriod] = useState("weekly");

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1: return <Crown className="w-6 h-6 text-yellow-500" />;
      case 2: return <Medal className="w-6 h-6 text-slate-400" />;
      case 3: return <Medal className="w-6 h-6 text-amber-700" />;
      default: return <span className="font-bold text-slate-500 w-6 text-center">{rank}</span>;
    }
  };

  const getChangeIcon = (change: string) => {
    if (change === "up") return <TrendingUp className="w-4 h-4 text-green-500" />;
    if (change === "down") return <TrendingUp className="w-4 h-4 text-red-500 rotate-180" />;
    return <span className="text-slate-300">-</span>;
  };

  return (
    <div className="min-h-screen bg-slate-50 pb-20">
      {/* Hero Section */}
      <div className="bg-blue-900 text-white py-12 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/hero-stadium.jpg')] opacity-10 bg-cover bg-center"></div>
        <div className="container relative z-10">
          <Trophy className="w-16 h-16 text-yellow-400 mx-auto mb-4 animate-bounce" />
          <h1 className="text-4xl font-bold mb-2">Hall of Fame</h1>
          <p className="text-blue-200 max-w-xl mx-auto">
            Celebrate the champions of RIVOAURA. Compete, climb the ranks, and earn your place in history.
          </p>
        </div>
      </div>

      {/* Leaderboard Content */}
      <div className="container py-8 max-w-4xl">
        <Tabs defaultValue="weekly" className="w-full" onValueChange={setPeriod}>
          <div className="flex justify-center mb-8">
            <TabsList className="grid w-full max-w-md grid-cols-3 bg-white shadow-sm border border-slate-200">
              <TabsTrigger value="weekly">Weekly</TabsTrigger>
              <TabsTrigger value="monthly">Monthly</TabsTrigger>
              <TabsTrigger value="allTime">All Time</TabsTrigger>
            </TabsList>
          </div>

          {["weekly", "monthly", "allTime"].map((tab) => (
            <TabsContent key={tab} value={tab}>
              <Card className="border-slate-200 shadow-lg overflow-hidden">
                <CardHeader className="bg-slate-50 border-b border-slate-100">
                  <div className="flex justify-between items-center">
                    <CardTitle className="text-xl font-bold text-slate-800 capitalize">
                      {tab.replace(/([A-Z])/g, ' $1').trim()} Rankings
                    </CardTitle>
                    <Badge variant="outline" className="bg-white">Top 100</Badge>
                  </div>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="divide-y divide-slate-100">
                    {LEADERBOARD_DATA[tab as keyof typeof LEADERBOARD_DATA].map((player) => (
                      <div key={player.rank} className="flex items-center p-4 hover:bg-slate-50 transition-colors">
                        <div className="w-12 flex justify-center mr-4">
                          {getRankIcon(player.rank)}
                        </div>
                        <Avatar className="h-10 w-10 mr-4 border-2 border-white shadow-sm">
                          <AvatarImage src={`https://api.dicebear.com/7.x/initials/svg?seed=${player.avatar}`} />
                          <AvatarFallback>{player.avatar}</AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <div className="font-bold text-slate-900">{player.name}</div>
                          <div className="text-xs text-slate-500 flex items-center gap-1">
                            Rank {player.rank} • {getChangeIcon(player.change)}
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="font-bold text-blue-600">{player.points.toLocaleString()}</div>
                          <div className="text-xs text-slate-400">Points</div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="p-4 text-center border-t border-slate-100 bg-slate-50/50">
                    <p className="text-sm text-slate-500">Login to see your rank</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  );
}
