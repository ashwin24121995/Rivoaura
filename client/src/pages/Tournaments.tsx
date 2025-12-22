import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Clock, Trophy, ChevronRight, MapPin, Calendar, Info, Filter, RefreshCw } from "lucide-react";
import { Link } from "wouter";
import { useEffect, useState } from "react";
import { getCurrentMatches, type Match } from "@/lib/cricketApi";
import { toast } from "sonner";

export default function Tournaments() {
  const [matches, setMatches] = useState<Match[]>([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  const loadMatches = async (showToast = false) => {
    try {
      if (showToast) setRefreshing(true);
      
      const data = await getCurrentMatches();
      setMatches(data);
      
      if (showToast) {
        toast.success(`Loaded ${data.length} matches`);
      }
    } catch (error) {
      console.error('Failed to load matches:', error);
      toast.error('Failed to load matches. Using cached data if available.');
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  useEffect(() => {
    loadMatches();
    
    // Auto-refresh every 30 seconds for live matches
    const interval = setInterval(() => {
      const hasLiveMatches = matches.some(m => m.matchStarted && !m.matchEnded);
      if (hasLiveMatches) {
        loadMatches();
      }
    }, 30000);
    
    return () => clearInterval(interval);
  }, []);

  const formatMatchTime = (dateTimeGMT: string, matchStarted: boolean, matchEnded: boolean) => {
    if (matchEnded) return "Completed";
    if (matchStarted) return "LIVE NOW";
    
    const matchDate = new Date(dateTimeGMT);
    const now = new Date();
    const diff = matchDate.getTime() - now.getTime();
    
    if (diff < 0) return "Starting Soon";
    
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    
    if (hours > 24) {
      const days = Math.floor(hours / 24);
      return `In ${days}d ${hours % 24}h`;
    }
    
    return `In ${hours}h ${minutes}m`;
  };

  const getMatchStatus = (match: Match) => {
    if (match.matchEnded) return { label: "Completed", variant: "secondary" as const };
    if (match.matchStarted) return { label: "LIVE", variant: "destructive" as const };
    return { label: "Upcoming", variant: "default" as const };
  };

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 gap-4">
        <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
        <p className="text-slate-500 font-medium animate-pulse">Loading Match Center...</p>
        <p className="text-xs text-slate-400">Fetching live cricket data...</p>
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
                Match Lobby 
                <span className="text-xs font-normal text-slate-500 bg-slate-100 px-2 py-1 rounded-full border border-slate-200">
                  {matches.length} Matches
                </span>
              </h1>
              <p className="text-slate-500 text-sm mt-1">Select a match to build your fantasy squad</p>
            </div>
            <div className="flex gap-3">
              <Button 
                variant="outline" 
                size="sm" 
                className="gap-2 border-slate-300"
                onClick={() => loadMatches(true)}
                disabled={refreshing}
              >
                <RefreshCw className={`w-4 h-4 ${refreshing ? 'animate-spin' : ''}`} /> 
                Refresh
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
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="grid w-full max-w-md grid-cols-3 mb-8 bg-white border border-slate-200 p-1 rounded-lg shadow-sm">
            <TabsTrigger value="all" className="data-[state=active]:bg-primary data-[state=active]:text-white">
              All ({matches.length})
            </TabsTrigger>
            <TabsTrigger value="live" className="data-[state=active]:bg-primary data-[state=active]:text-white">
              Live ({matches.filter(m => m.matchStarted && !m.matchEnded).length})
            </TabsTrigger>
            <TabsTrigger value="upcoming" className="data-[state=active]:bg-primary data-[state=active]:text-white">
              Upcoming ({matches.filter(m => !m.matchStarted).length})
            </TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="space-y-4">
            {matches.length === 0 ? (
              <div className="bg-white rounded-xl border border-slate-200 p-12 text-center">
                <Trophy className="w-16 h-16 text-slate-300 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-slate-700 mb-2">No Matches Available</h3>
                <p className="text-slate-500 text-sm">Check back soon for upcoming cricket matches!</p>
              </div>
            ) : (
              matches.map((match) => (
                <MatchCard key={match.id} match={match} formatMatchTime={formatMatchTime} getMatchStatus={getMatchStatus} />
              ))
            )}
          </TabsContent>

          <TabsContent value="live" className="space-y-4">
            {matches.filter(m => m.matchStarted && !m.matchEnded).length === 0 ? (
              <div className="bg-white rounded-xl border border-slate-200 p-12 text-center">
                <Clock className="w-16 h-16 text-slate-300 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-slate-700 mb-2">No Live Matches</h3>
                <p className="text-slate-500 text-sm">All matches are either upcoming or completed.</p>
              </div>
            ) : (
              matches
                .filter(m => m.matchStarted && !m.matchEnded)
                .map((match) => (
                  <MatchCard key={match.id} match={match} formatMatchTime={formatMatchTime} getMatchStatus={getMatchStatus} />
                ))
            )}
          </TabsContent>

          <TabsContent value="upcoming" className="space-y-4">
            {matches.filter(m => !m.matchStarted).length === 0 ? (
              <div className="bg-white rounded-xl border border-slate-200 p-12 text-center">
                <Calendar className="w-16 h-16 text-slate-300 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-slate-700 mb-2">No Upcoming Matches</h3>
                <p className="text-slate-500 text-sm">All current matches are either live or completed.</p>
              </div>
            ) : (
              matches
                .filter(m => !m.matchStarted)
                .map((match) => (
                  <MatchCard key={match.id} match={match} formatMatchTime={formatMatchTime} getMatchStatus={getMatchStatus} />
                ))
            )}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

// Match Card Component
function MatchCard({ 
  match, 
  formatMatchTime, 
  getMatchStatus 
}: { 
  match: Match; 
  formatMatchTime: (dateTimeGMT: string, matchStarted: boolean, matchEnded: boolean) => string;
  getMatchStatus: (match: Match) => { label: string; variant: "default" | "secondary" | "destructive" };
}) {
  const status = getMatchStatus(match);
  const team1 = match.teamInfo[0];
  const team2 = match.teamInfo[1];
  
  return (
    <div className="bg-white rounded-xl border border-slate-200 hover:border-primary/50 hover:shadow-lg transition-all duration-300 overflow-hidden group">
      {/* Match Header */}
      <div className="bg-gradient-to-r from-slate-50 to-white px-6 py-3 border-b border-slate-200">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Badge variant={status.variant} className="font-semibold">
              {status.label}
            </Badge>
            <span className="text-sm font-medium text-slate-700">{match.matchType.toUpperCase()}</span>
            <span className="text-xs text-slate-500">•</span>
            <span className="text-xs text-slate-500">{match.name}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-slate-600">
            <Clock className="w-4 h-4" />
            {formatMatchTime(match.dateTimeGMT, match.matchStarted, match.matchEnded)}
          </div>
        </div>
      </div>

      {/* Teams Section */}
      <div className="px-6 py-5">
        <div className="flex items-center justify-between mb-4">
          {/* Team 1 */}
          <div className="flex items-center gap-3 flex-1">
            <img 
              src={team1.img || '/images/logo-rivoaura.png'} 
              alt={team1.name}
              className="w-12 h-12 rounded-full border-2 border-slate-200 object-cover"
            />
            <div>
              <h3 className="font-bold text-slate-900">{team1.shortname}</h3>
              <p className="text-xs text-slate-500">{team1.name}</p>
            </div>
          </div>

          {/* VS Badge */}
          <div className="px-4">
            <div className="bg-slate-100 text-slate-700 font-bold text-sm px-3 py-1 rounded-full">
              VS
            </div>
          </div>

          {/* Team 2 */}
          <div className="flex items-center gap-3 flex-1 justify-end text-right">
            <div>
              <h3 className="font-bold text-slate-900">{team2.shortname}</h3>
              <p className="text-xs text-slate-500">{team2.name}</p>
            </div>
            <img 
              src={team2.img || '/images/logo-rivoaura.png'} 
              alt={team2.name}
              className="w-12 h-12 rounded-full border-2 border-slate-200 object-cover"
            />
          </div>
        </div>

        {/* Live Score (if available) */}
        {match.score && match.score.length > 0 && (
          <div className="bg-slate-50 rounded-lg p-3 mb-4 border border-slate-200">
            <div className="flex justify-between items-center text-sm">
              {match.score.map((scoreData, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <span className="font-semibold text-slate-700">{scoreData.inning}:</span>
                  <span className="font-bold text-slate-900">{scoreData.r}/{scoreData.w}</span>
                  <span className="text-slate-500">({scoreData.o} ov)</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Match Info */}
        <div className="flex items-center gap-4 text-sm text-slate-600 mb-4">
          <div className="flex items-center gap-1">
            <MapPin className="w-4 h-4" />
            <span>{match.venue}</span>
          </div>
          <div className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            <span>{new Date(match.dateTimeGMT).toLocaleDateString()}</span>
          </div>
        </div>

        {/* Action Button */}
        <Link href={`/create-team/${match.id}`}>
          <Button 
            className="w-full gap-2 group-hover:bg-primary/90 transition-colors" 
            size="lg"
            disabled={match.matchEnded}
          >
            {match.matchEnded ? (
              <>View Results</>
            ) : match.matchStarted ? (
              <>Join Live Contest <ChevronRight className="w-4 h-4" /></>
            ) : (
              <>Create Team <ChevronRight className="w-4 h-4" /></>
            )}
          </Button>
        </Link>
      </div>
    </div>
  );
}
