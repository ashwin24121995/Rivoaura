'use client';

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
      <div className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(234,179,8,0.1),transparent_70%)]"></div>
        <div className="container relative z-10 max-w-5xl">
          <div className="text-center space-y-6">
            <Trophy className="w-20 h-20 text-yellow-400 mx-auto animate-pulse" />
            <h1 className="text-5xl md:text-6xl font-black tracking-tight">Hall of Fame</h1>
            <p className="text-xl text-blue-200 max-w-2xl mx-auto leading-relaxed">
              Celebrate the champions of RIVOAURA. Compete against thousands of cricket enthusiasts, 
              climb the ranks, and earn your place in fantasy cricket history.
            </p>
          </div>
        </div>
      </div>

      {/* Explanation Section */}
      <div className="bg-white border-b border-slate-200 py-12">
        <div className="container max-w-5xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">How Rankings Work</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Our leaderboard system tracks your performance across all contests and rewards consistent excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="border-2 border-blue-200 shadow-lg">
              <CardContent className="p-6 text-center space-y-4">
                <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center mx-auto">
                  <Trophy className="w-7 h-7 text-blue-600" />
                </div>
                <h3 className="font-bold text-slate-900 text-lg">Weekly Rankings</h3>
                <p className="text-sm text-slate-700 leading-relaxed">
                  Resets every Monday at 00:00 GMT. Tracks your total points earned from all contests during the current week. 
                  Perfect for short-term competition and quick rewards.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-green-200 shadow-lg">
              <CardContent className="p-6 text-center space-y-4">
                <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center mx-auto">
                  <Medal className="w-7 h-7 text-green-600" />
                </div>
                <h3 className="font-bold text-slate-900 text-lg">Monthly Rankings</h3>
                <p className="text-sm text-slate-700 leading-relaxed">
                  Resets on the 1st of each month. Accumulates points from all contests played during the calendar month. 
                  Rewards sustained performance and strategic consistency.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-yellow-200 shadow-lg">
              <CardContent className="p-6 text-center space-y-4">
                <div className="w-14 h-14 rounded-full bg-yellow-100 flex items-center justify-center mx-auto">
                  <Crown className="w-7 h-7 text-yellow-600" />
                </div>
                <h3 className="font-bold text-slate-900 text-lg">All-Time Rankings</h3>
                <p className="text-sm text-slate-700 leading-relaxed">
                  Never resets. Lifetime cumulative points from every contest you've ever played. 
                  The ultimate measure of fantasy cricket mastery and dedication.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-10 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 border-2 border-blue-200">
            <h3 className="font-bold text-slate-900 text-xl mb-4 flex items-center gap-3">
              <TrendingUp className="w-6 h-6 text-blue-600" />
              Point Calculation System
            </h3>
            <div className="space-y-3 text-slate-700">
              <p className="leading-relaxed">
                <strong>Your leaderboard points</strong> are calculated by adding up your <strong>final team scores</strong> from all contests. 
                If you score 450 points in Contest A and 380 points in Contest B, your weekly total is 830 points.
              </p>
              <p className="leading-relaxed">
                <strong>Ranking is determined by total points.</strong> The player with the highest cumulative points in a given period 
                (week, month, or all-time) holds the #1 position. Ties are broken by the number of contests won.
              </p>
              <p className="leading-relaxed">
                <strong>Live updates:</strong> Rankings are updated in real-time as matches complete and final scores are calculated. 
                Check back frequently to see your position change!
              </p>
            </div>
          </div>
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
