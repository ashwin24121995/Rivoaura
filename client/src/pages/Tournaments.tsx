import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Clock, Trophy, ChevronRight, MapPin, Calendar, Info, Filter, RefreshCw, Search } from "lucide-react";
import { Link } from "wouter";
import { useEffect, useState } from "react";
import { getCurrentMatches, getLiveMatches, getUpcomingMatches, type Match } from "@/lib/cricketApi";
import { useAutoRefresh } from "@/hooks/useAutoRefresh";
import { toast } from "sonner";
import LiveMatchCard from "@/components/LiveMatchCard";
import MatchDetailsDialog from "@/components/MatchDetailsDialog";
import { RefreshIndicator } from "@/components/RefreshIndicator";
import MatchComparison from "@/components/MatchComparison";

export default function Tournaments() {
  const [matches, setMatches] = useState<Match[]>([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [matchTypeFilter, setMatchTypeFilter] = useState<'all' | 't20' | 'odi' | 'test'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedMatch, setSelectedMatch] = useState<Match | null>(null);
  const [detailsOpen, setDetailsOpen] = useState(false);
  const [comparisonOpen, setComparisonOpen] = useState(false);

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
  }, []);

  // Auto-refresh for live matches
  const { isRefreshing: autoRefreshing, lastRefresh } = useAutoRefresh(
    async () => {
      const hasLiveMatches = matches.some(m => m.matchStarted && !m.matchEnded);
      if (hasLiveMatches) {
        await loadMatches();
      }
    },
    { interval: 30000, enabled: matches.some(m => m.matchStarted && !m.matchEnded) }
  );

  // Filter matches by type and search query
  const filteredMatches = matches.filter(match => {
    // Filter by match type
    const matchesType = matchTypeFilter === 'all' || match.matchType.toLowerCase() === matchTypeFilter;
    
    // Filter by search query (searches in match name and team names)
    const matchesSearch = searchQuery === '' || 
      match.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      match.teams.some(team => team.toLowerCase().includes(searchQuery.toLowerCase()));
    
    return matchesType && matchesSearch;
  });

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
      {/* Hero Section with Explanation */}
      <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-16 border-b border-slate-700">
        <div className="container max-w-5xl">
          <div className="flex items-start justify-between gap-8">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                <Trophy className="w-10 h-10 text-secondary" />
                <h1 className="text-4xl font-bold">Match Lobby</h1>
              </div>
              <p className="text-xl text-slate-300 mb-6 leading-relaxed">
                Browse all upcoming and live cricket matches across T20, ODI, and Test formats. 
                Select any match to create your fantasy team and compete for glory.
              </p>
              <div className="flex items-center gap-4 text-sm">
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg backdrop-blur-sm border border-white/20">
                  <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
                  <span className="text-slate-200">{matches.length} Active Matches</span>
                </div>
                <div className="flex items-center gap-2 text-slate-400">
                  <Info className="w-4 h-4" />
                  <span>All contests are 100% free</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Explanation Cards */}
      <div className="bg-white border-b border-slate-200 py-8">
        <div className="container max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="border-blue-200 bg-blue-50/50">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-blue-500 text-white flex items-center justify-center">
                    <Calendar className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-slate-900">Match Formats</h3>
                </div>
                <p className="text-sm text-slate-700 leading-relaxed">
                  We support all three cricket formats: T20 (fast-paced, 3 hours), ODI (balanced, 8 hours), and Test (strategic, 5 days). Each format has unique scoring rules.
                </p>
              </CardContent>
            </Card>
            <Card className="border-green-200 bg-green-50/50">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-green-500 text-white flex items-center justify-center">
                    <Clock className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-slate-900">Team Deadline</h3>
                </div>
                <p className="text-sm text-slate-700 leading-relaxed">
                  You must create and submit your team before the match starts. Typically, the deadline is 5-10 minutes before the scheduled start time.
                </p>
              </CardContent>
            </Card>
            <Card className="border-purple-200 bg-purple-50/50">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-purple-500 text-white flex items-center justify-center">
                    <Trophy className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-slate-900">Free Contests</h3>
                </div>
                <p className="text-sm text-slate-700 leading-relaxed">
                  All contests are completely free to join. Create unlimited teams and compete in multiple contests without spending any money.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Page Header */}
      <div className="bg-white border-b border-slate-200 sticky top-16 z-30 shadow-sm">
        <div className="container max-w-5xl py-4">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-xl font-bold text-slate-900">Available Matches</h2>
              <p className="text-slate-500 text-sm mt-1">Select a match to build your fantasy squad</p>
            </div>
            <div className="flex gap-3">
              <Button 
                variant="outline" 
                size="sm" 
                className="gap-2 border-slate-300"
                onClick={() => setComparisonOpen(true)}
              >
                <Trophy className="w-4 h-4" /> 
                Compare Matches
              </Button>
              <Button 
                variant="outline" 
                size="sm" 
                className="gap-2 border-slate-300"
                onClick={() => loadMatches(true)}
                disabled={refreshing || autoRefreshing}
              >
                <RefreshCw className={`w-4 h-4 ${(refreshing || autoRefreshing) ? 'animate-spin' : ''}`} /> 
                Refresh
              </Button>
              <Link href="/my-contests">
                <Button variant="secondary" size="sm" className="gap-2 text-white shadow-sm">
                  <Trophy className="w-4 h-4" /> My Contests
                </Button>
              </Link>
            </div>
          </div>
          
          {/* Search Bar */}
          <div className="relative mb-4">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search by team or tournament name..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
              >
                ×
              </button>
            )}
          </div>

          {/* Match Type Filters */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 text-sm text-slate-600">
              <Filter className="w-4 h-4" />
              <span className="font-medium">Filter by Format:</span>
            </div>
            <div className="flex gap-2">
              <Button
                variant={matchTypeFilter === 'all' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setMatchTypeFilter('all')}
                className="text-xs"
              >
                All ({matches.length})
              </Button>
              <Button
                variant={matchTypeFilter === 't20' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setMatchTypeFilter('t20')}
                className="text-xs"
              >
                T20 ({matches.filter(m => m.matchType.toLowerCase() === 't20').length})
              </Button>
              <Button
                variant={matchTypeFilter === 'odi' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setMatchTypeFilter('odi')}
                className="text-xs"
              >
                ODI ({matches.filter(m => m.matchType.toLowerCase() === 'odi').length})
              </Button>
              <Button
                variant={matchTypeFilter === 'test' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setMatchTypeFilter('test')}
                className="text-xs"
              >
                Test ({matches.filter(m => m.matchType.toLowerCase() === 'test').length})
              </Button>
            </div>
            {lastRefresh && (
              <div className="ml-auto text-xs text-slate-400">
                Last updated: {lastRefresh.toLocaleTimeString()}
              </div>
            )}
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
            {filteredMatches.length === 0 ? (
              <div className="bg-white rounded-xl border border-slate-200 p-12 text-center">
                <Trophy className="w-16 h-16 text-slate-300 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-slate-700 mb-2">No Matches Available</h3>
                <p className="text-slate-500 text-sm">
                  {matchTypeFilter === 'all' 
                    ? 'Check back soon for upcoming cricket matches!' 
                    : `No ${matchTypeFilter.toUpperCase()} matches available at the moment.`}
                </p>
              </div>
            ) : (
              filteredMatches.map((match) => (
                <MatchCard 
                  key={match.id} 
                  match={match} 
                  formatMatchTime={formatMatchTime} 
                  getMatchStatus={getMatchStatus}
                  onViewDetails={() => {
                    setSelectedMatch(match);
                    setDetailsOpen(true);
                  }}
                />
              ))
            )}
          </TabsContent>

          <TabsContent value="live" className="space-y-4">
            {filteredMatches.filter(m => m.matchStarted && !m.matchEnded).length === 0 ? (
              <div className="bg-white rounded-xl border border-slate-200 p-12 text-center">
                <Clock className="w-16 h-16 text-slate-300 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-slate-700 mb-2">No Live Matches</h3>
                <p className="text-slate-500 text-sm">All matches are either upcoming or completed.</p>
              </div>
            ) : (
              filteredMatches
                .filter(m => m.matchStarted && !m.matchEnded)
                .map((match) => (
                  <div key={match.id} className="space-y-4">
                    <LiveMatchCard
                      matchId={match.id}
                      matchName={match.name}
                      teams={match.teams}
                      venue={match.venue}
                      autoRefresh={true}
                      refreshInterval={30000}
                    />
                    <MatchCard 
                      match={match} 
                      formatMatchTime={formatMatchTime} 
                      getMatchStatus={getMatchStatus}
                      onViewDetails={() => {
                        setSelectedMatch(match);
                        setDetailsOpen(true);
                      }}
                    />
                  </div>
                ))
            )}
          </TabsContent>

          <TabsContent value="upcoming" className="space-y-4">
            {filteredMatches.filter(m => !m.matchStarted).length === 0 ? (
              <div className="bg-white rounded-xl border border-slate-200 p-12 text-center">
                <Calendar className="w-16 h-16 text-slate-300 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-slate-700 mb-2">No Upcoming Matches</h3>
                <p className="text-slate-500 text-sm">All current matches are either live or completed.</p>
              </div>
            ) : (
              filteredMatches
                .filter(m => !m.matchStarted)
                .map((match) => (
                  <MatchCard 
                    key={match.id} 
                    match={match} 
                    formatMatchTime={formatMatchTime} 
                    getMatchStatus={getMatchStatus}
                    onViewDetails={() => {
                      setSelectedMatch(match);
                      setDetailsOpen(true);
                    }}
                  />
                ))
            )}
          </TabsContent>
        </Tabs>
      </div>

      {/* Match Details Dialog */}
      <MatchDetailsDialog
        match={selectedMatch}
        open={detailsOpen}
        onOpenChange={setDetailsOpen}
      />

      {/* Match Comparison Dialog */}
      <MatchComparison
        matches={matches}
        open={comparisonOpen}
        onOpenChange={setComparisonOpen}
      />
    </div>
  );
}

// Match Card Component
function MatchCard({ 
  match, 
  formatMatchTime, 
  getMatchStatus,
  onViewDetails
}: { 
  match: Match; 
  formatMatchTime: (dateTimeGMT: string, matchStarted: boolean, matchEnded: boolean) => string;
  getMatchStatus: (match: Match) => { label: string; variant: "default" | "secondary" | "destructive" };
  onViewDetails: () => void;
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
          <div className="flex items-center gap-3">
            {match.matchStarted && !match.matchEnded && (
              <RefreshIndicator refreshInterval={30000} />
            )}
            <div className="flex items-center gap-2 text-sm text-slate-600">
              <Clock className="w-4 h-4" />
              {formatMatchTime(match.dateTimeGMT, match.matchStarted, match.matchEnded)}
            </div>
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

        {/* Action Buttons */}
        <div className="flex gap-3">
          <Button 
            variant="outline"
            className="flex-1 gap-2" 
            size="lg"
            onClick={onViewDetails}
          >
            <Info className="w-4 h-4" />
            View Details
          </Button>
          <Link href={`/create-team/${match.id}`} className="flex-1">
            <Button 
              className="w-full gap-2 group-hover:bg-primary/90 transition-colors" 
              size="lg"
              disabled={match.matchEnded}
            >
              {match.matchEnded ? (
                <>View Results</>
              ) : match.matchStarted ? (
                <>Join Live <ChevronRight className="w-4 h-4" /></>
              ) : (
                <>Create Team <ChevronRight className="w-4 h-4" /></>
              )}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
