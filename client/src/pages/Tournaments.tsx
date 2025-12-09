import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Clock, Trophy, ChevronRight } from "lucide-react";
import { Link } from "wouter";
import { useEffect, useState } from "react";
import { fetchLiveMatches, Match } from "@/lib/cricket-api";

export default function Tournaments() {
  const [matches, setMatches] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadMatches = async () => {
      const liveData = await fetchLiveMatches();
      
      // Filter for relevant matches (International or Major Leagues)
      const relevantMatches = liveData.filter(m => 
        m.matchType === "T20" || 
        m.matchType === "ODI" || 
        m.matchType === "Test" || 
        m.name.includes("India") || 
        m.name.includes("Australia") || 
        m.name.includes("England")
      );

      // Transform API data to match UI structure
      const transformedMatches = relevantMatches.map((m, index) => ({
        id: m.id,
        series: m.matchType + " Series",
        team1: m.teams[0].substring(0, 3).toUpperCase(),
        team1Name: m.teams[0],
        team1Flag: "🏏", // Placeholder as API might not return flags
        team2: m.teams[1].substring(0, 3).toUpperCase(),
        team2Name: m.teams[1],
        team2Flag: "🏏",
        type: m.matchType,
        startTime: m.status === "Live" ? "LIVE" : "Upcoming",
        contestType: index === 0 ? "Mega League" : "Practice Match",
        status: m.status
      }));
      
      setMatches(transformedMatches);
      setLoading(false);
    };
    loadMatches();
  }, []);

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center">Loading Matches...</div>;
  }

  return (
    <div className="min-h-screen bg-slate-50 py-8">
      <div className="container max-w-4xl">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-bold text-slate-900">Match Lobby</h1>
            <p className="text-slate-500 text-sm">Select a match to join contests</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" className="gap-2">
              <Trophy className="w-4 h-4" /> My Contests
            </Button>
          </div>
        </div>

        <Tabs defaultValue="cricket" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-6">
            <TabsTrigger value="cricket">Cricket</TabsTrigger>
            <TabsTrigger value="football" disabled>Football (Coming Soon)</TabsTrigger>
            <TabsTrigger value="kabaddi" disabled>Kabaddi (Coming Soon)</TabsTrigger>
          </TabsList>

          <TabsContent value="cricket" className="space-y-4">
            {/* Featured Match */}
            <div className="mb-6">
              <h2 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-3">Featured Match</h2>
              <Link href="/create-team/1">
                <Card className="border-primary/20 shadow-md hover:shadow-lg transition-all cursor-pointer bg-gradient-to-br from-white to-blue-50">
                  <CardContent className="p-0">
                    <div className="bg-slate-100 px-4 py-2 flex justify-between items-center border-b border-slate-200">
                      <span className="text-xs font-medium text-slate-600">{matches[0].series}</span>
                      <Badge variant="secondary" className="bg-green-100 text-green-700 hover:bg-green-100 border-green-200 gap-1">
                        <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span> Lineups Out
                      </Badge>
                    </div>
                    <div className="p-6">
                      <div className="flex justify-between items-center">
                        <div className="flex flex-col items-center gap-2 w-1/3">
                          <div className="text-4xl">{matches[0].team1Flag}</div>
                          <span className="font-bold text-lg text-slate-900">{matches[0].team1}</span>
                          <span className="text-xs text-slate-500">{matches[0].team1Name}</span>
                        </div>
                        
                        <div className="flex flex-col items-center gap-1 w-1/3">
                          <span className="text-xs font-medium text-slate-400">VS</span>
                          <div className="flex items-center gap-1 text-red-500 font-bold bg-red-50 px-3 py-1 rounded-full text-sm border border-red-100">
                            <Clock className="w-3 h-3" /> {matches[0].startTime}
                          </div>
                          <span className="text-xs text-slate-500 mt-1">{matches[0].contestType}</span>
                        </div>

                        <div className="flex flex-col items-center gap-2 w-1/3">
                          <div className="text-4xl">{matches[0].team2Flag}</div>
                          <span className="font-bold text-lg text-slate-900">{matches[0].team2}</span>
                          <span className="text-xs text-slate-500">{matches[0].team2Name}</span>
                        </div>
                      </div>
                    </div>
                    <div className="bg-slate-50 px-4 py-3 border-t border-slate-100 flex justify-between items-center">
                      <div className="flex gap-4 text-xs text-slate-500">
                        <span className="flex items-center gap-1"><Trophy className="w-3 h-3" /> Global Leaderboard</span>
                        <span>•</span>
                        <span>Max 20 Teams</span>
                      </div>
                      <Button size="sm" className="gap-1 h-8">
                        Join Now <ChevronRight className="w-3 h-3" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </div>

            {/* Upcoming Matches List */}
            <h2 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-3">Upcoming Matches</h2>
            {matches.slice(1).map((match) => (
              <Link key={match.id} href={`/create-team/${match.id}`}>
                <Card className="hover:border-primary/50 transition-colors cursor-pointer group">
                  <CardContent className="p-4">
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-[10px] font-medium text-slate-500 uppercase">{match.series} • {match.type}</span>
                      <Badge variant="outline" className="text-[10px] h-5 border-slate-200 text-slate-500">
                        <Clock className="w-3 h-3 mr-1" /> {match.startTime}
                      </Badge>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{match.team1Flag}</span>
                        <span className="font-bold text-slate-900">{match.team1}</span>
                      </div>
                      
                      <span className="text-xs text-slate-300 font-medium">VS</span>
                      
                      <div className="flex items-center gap-3">
                        <span className="font-bold text-slate-900">{match.team2}</span>
                        <span className="text-2xl">{match.team2Flag}</span>
                      </div>
                    </div>

                    <div className="mt-4 pt-3 border-t border-slate-100 flex justify-between items-center">
                      <span className="text-xs text-green-600 font-medium bg-green-50 px-2 py-0.5 rounded">
                        {match.contestType}
                      </span>
                      <span className="text-xs text-slate-400 group-hover:text-primary transition-colors flex items-center gap-1">
                        Create Team <ChevronRight className="w-3 h-3" />
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
