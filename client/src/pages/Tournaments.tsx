import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Clock, Trophy, ChevronRight, MapPin, Calendar, Info, Filter } from "lucide-react";
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
        series: m.matchType + " Series 2025",
        venue: m.venue || "International Stadium",
        team1: m.teams[0].substring(0, 3).toUpperCase(),
        team1Name: m.teams[0],
        team1Flag: "🏏", // Placeholder as API might not return flags
        team2: m.teams[1].substring(0, 3).toUpperCase(),
        team2Name: m.teams[1],
        team2Flag: "🏏",
        type: m.matchType,
        startTime: m.status === "Live" ? "LIVE NOW" : "Starts in 2h 30m",
        contestType: index === 0 ? "Mega Contest • ₹0 Entry" : "Practice Contest",
        status: m.status,
        totalSpots: "10,000",
        spotsFilled: "8,450"
      }));
      
      setMatches(transformedMatches);
      setLoading(false);
    };
    loadMatches();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 gap-4">
        <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
        <p className="text-slate-500 font-medium animate-pulse">Loading Match Center...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      {/* Page Header */}
      <div className="bg-white border-b border-slate-200 sticky top-16 z-30 shadow-sm">
        <div className="container max-w-5xl py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
                Match Lobby <span className="text-xs font-normal text-slate-500 bg-slate-100 px-2 py-1 rounded-full border border-slate-200">Live Updates</span>
              </h1>
              <p className="text-slate-500 text-sm mt-1">Select a match to build your fantasy squad</p>
            </div>
            <div className="flex gap-3">
              <Button variant="outline" size="sm" className="hidden sm:flex gap-2 border-slate-300">
                <Filter className="w-4 h-4" /> Filter
              </Button>
              <Link href="/my-contests">
                <Button variant="secondary" size="sm" className="gap-2 text-white shadow-sm">
                  <Trophy className="w-4 h-4" /> My Contests
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="container max-w-5xl py-8">
        <Tabs defaultValue="cricket" className="w-full">
          <TabsList className="grid w-full max-w-md grid-cols-3 mb-8 bg-white border border-slate-200 p-1 rounded-lg shadow-sm">
            <TabsTrigger value="cricket" className="data-[state=active]:bg-primary data-[state=active]:text-white">Cricket</TabsTrigger>
            <TabsTrigger value="football" disabled className="opacity-50 cursor-not-allowed">Football</TabsTrigger>
            <TabsTrigger value="kabaddi" disabled className="opacity-50 cursor-not-allowed">Kabaddi</TabsTrigger>
          </TabsList>

          <TabsContent value="cricket" className="space-y-8">
            
            {/* Featured Match Section */}
            {matches.length > 0 && (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-sm font-bold text-slate-500 uppercase tracking-wider flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                    Headlining Match
                  </h2>
                  <span className="text-xs text-slate-400">Ends in 4 hours</span>
                </div>
                
                <Link href={`/create-team/${matches[0].id}`}>
                  <Card className="border-0 shadow-xl hover:shadow-2xl transition-all cursor-pointer overflow-hidden group relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 z-0"></div>
                    
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-10 bg-[url('/images/pattern-grid.svg')] z-0"></div>
                    
                    <CardContent className="p-0 relative z-10">
                      {/* Match Header */}
                      <div className="px-6 py-3 flex justify-between items-center border-b border-white/10 bg-white/5 backdrop-blur-sm">
                        <div className="flex items-center gap-2">
                          <Badge variant="outline" className="text-white border-white/20 bg-white/10">
                            {matches[0].series}
                          </Badge>
                          <span className="text-xs text-slate-400 flex items-center gap-1">
                            <MapPin className="w-3 h-3" /> {matches[0].venue}
                          </span>
                        </div>
                        <Badge variant="secondary" className="bg-green-500/20 text-green-400 border-green-500/30 gap-1.5">
                          <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></span> Lineups Announced
                        </Badge>
                      </div>

                      {/* Match Body */}
                      <div className="p-8">
                        <div className="flex justify-between items-center">
                          {/* Team 1 */}
                          <div className="flex flex-col items-center gap-3 w-1/3 group-hover:-translate-x-2 transition-transform duration-500">
                            <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center text-4xl shadow-inner border border-white/10">
                              {matches[0].team1Flag}
                            </div>
                            <div className="text-center">
                              <div className="font-bold text-2xl text-white tracking-tight">{matches[0].team1}</div>
                              <div className="text-xs text-slate-400 font-medium uppercase tracking-wide">{matches[0].team1Name}</div>
                            </div>
                          </div>
                          
                          {/* VS Center */}
                          <div className="flex flex-col items-center gap-2 w-1/3">
                            <div className="text-xs font-bold text-slate-500 tracking-widest">VERSUS</div>
                            <div className="flex items-center gap-2 text-red-400 font-bold bg-red-500/10 px-4 py-1.5 rounded-full text-sm border border-red-500/20 shadow-[0_0_15px_rgba(239,68,68,0.2)]">
                              <Clock className="w-3.5 h-3.5" /> {matches[0].startTime}
                            </div>
                            <div className="text-[10px] text-slate-500 mt-2 bg-slate-800 px-2 py-1 rounded border border-slate-700">
                              {matches[0].type} Format
                            </div>
                          </div>

                          {/* Team 2 */}
                          <div className="flex flex-col items-center gap-3 w-1/3 group-hover:translate-x-2 transition-transform duration-500">
                            <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center text-4xl shadow-inner border border-white/10">
                              {matches[0].team2Flag}
                            </div>
                            <div className="text-center">
                              <div className="font-bold text-2xl text-white tracking-tight">{matches[0].team2}</div>
                              <div className="text-xs text-slate-400 font-medium uppercase tracking-wide">{matches[0].team2Name}</div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Match Footer */}
                      <div className="bg-white/5 px-6 py-4 border-t border-white/10 flex justify-between items-center backdrop-blur-md">
                        <div className="flex flex-col gap-1">
                          <div className="flex items-center gap-2 text-xs text-slate-400">
                            <Trophy className="w-3.5 h-3.5 text-yellow-500" />
                            <span className="text-white font-medium">Mega Contest Open</span>
                            <span className="w-1 h-1 bg-slate-600 rounded-full"></span>
                            <span>{matches[0].totalSpots} Spots</span>
                          </div>
                          <div className="w-48 h-1.5 bg-slate-700 rounded-full overflow-hidden">
                            <div className="h-full bg-gradient-to-r from-emerald-500 to-emerald-400 w-[85%]"></div>
                          </div>
                        </div>
                        <Button size="sm" className="bg-white text-slate-900 hover:bg-slate-100 font-bold px-6">
                          Join Now <ChevronRight className="w-4 h-4 ml-1" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </div>
            )}

            {/* Upcoming Matches List */}
            <div>
              <h2 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-4 flex items-center gap-2">
                <Calendar className="w-4 h-4" /> Upcoming Fixtures
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {matches.slice(1).map((match) => (
                  <Link key={match.id} href={`/create-team/${match.id}`}>
                    <Card className="hover:border-primary/50 hover:shadow-md transition-all cursor-pointer group bg-white border-slate-200">
                      <CardContent className="p-5">
                        <div className="flex justify-between items-start mb-4">
                          <div>
                            <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wide mb-1">{match.series}</div>
                            <div className="flex items-center gap-1 text-xs text-slate-400">
                              <MapPin className="w-3 h-3" /> {match.venue}
                            </div>
                          </div>
                          <Badge variant="outline" className={`text-[10px] h-6 border-slate-200 ${match.status === 'Live' ? 'text-red-500 bg-red-50 border-red-100' : 'text-slate-500'}`}>
                            {match.status === 'Live' ? '● LIVE' : match.startTime}
                          </Badge>
                        </div>
                        
                        <div className="flex justify-between items-center py-2">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-slate-50 rounded-full flex items-center justify-center text-xl border border-slate-100">
                              {match.team1Flag}
                            </div>
                            <span className="font-bold text-slate-900 text-lg">{match.team1}</span>
                          </div>
                          
                          <div className="px-3 py-1 bg-slate-50 rounded text-[10px] font-bold text-slate-400 border border-slate-100">VS</div>
                          
                          <div className="flex items-center gap-3">
                            <span className="font-bold text-slate-900 text-lg">{match.team2}</span>
                            <div className="w-10 h-10 bg-slate-50 rounded-full flex items-center justify-center text-xl border border-slate-100">
                              {match.team2Flag}
                            </div>
                          </div>
                        </div>

                        <div className="mt-4 pt-3 border-t border-slate-50 flex justify-between items-center">
                          <div className="flex items-center gap-2">
                            <Badge variant="secondary" className="text-[10px] font-normal bg-blue-50 text-blue-600 hover:bg-blue-100">
                              {match.contestType}
                            </Badge>
                          </div>
                          <span className="text-xs font-bold text-primary flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                            Build Squad <ChevronRight className="w-3 h-3" />
                          </span>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
