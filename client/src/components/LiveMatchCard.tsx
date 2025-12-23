import { useEffect, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Activity, TrendingUp, Target, Clock } from 'lucide-react';
import { getLiveScore, getMatchPoints, type LiveScore } from '@/lib/cricketApi';

interface LiveMatchCardProps {
  matchId: string;
  matchName: string;
  teams: string[];
  venue: string;
  autoRefresh?: boolean;
  refreshInterval?: number; // in milliseconds
}

export default function LiveMatchCard({
  matchId,
  matchName,
  teams,
  venue,
  autoRefresh = true,
  refreshInterval = 30000, // 30 seconds default
}: LiveMatchCardProps) {
  const [liveScore, setLiveScore] = useState<LiveScore | null>(null);
  const [playerPoints, setPlayerPoints] = useState<Record<string, number>>({});
  const [loading, setLoading] = useState(true);
  const [lastUpdate, setLastUpdate] = useState<Date>(new Date());

  // Fetch live score and points
  const fetchLiveData = async () => {
    try {
      const [scoreData, pointsData] = await Promise.all([
        getLiveScore(matchId),
        getMatchPoints(matchId),
      ]);
      
      setLiveScore(scoreData);
      setPlayerPoints(pointsData);
      setLastUpdate(new Date());
    } catch (error) {
      console.error('Failed to fetch live data:', error);
    } finally {
      setLoading(false);
    }
  };

  // Initial fetch
  useEffect(() => {
    fetchLiveData();
  }, [matchId]);

  // Auto-refresh
  useEffect(() => {
    if (!autoRefresh) return;

    const interval = setInterval(() => {
      fetchLiveData();
    }, refreshInterval);

    return () => clearInterval(interval);
  }, [matchId, autoRefresh, refreshInterval]);

  if (loading) {
    return (
      <Card className="border-2 border-slate-200 shadow-lg">
        <CardContent className="p-6">
          <div className="flex items-center justify-center h-40">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
          </div>
        </CardContent>
      </Card>
    );
  }

  if (!liveScore) {
    return (
      <Card className="border-2 border-slate-200 shadow-lg">
        <CardContent className="p-6">
          <p className="text-slate-600 text-center">Live score unavailable</p>
        </CardContent>
      </Card>
    );
  }

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
  };

  return (
    <Card className="border-2 border-green-200 shadow-lg bg-gradient-to-br from-green-50 to-blue-50">
      <CardContent className="p-6 space-y-4">
        {/* Header with Live Badge */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Badge className="bg-red-600 text-white px-3 py-1 animate-pulse">
              <Activity className="w-3 h-3 mr-1 inline" />
              LIVE
            </Badge>
            <h3 className="font-bold text-slate-900">{matchName}</h3>
          </div>
          <div className="flex items-center gap-2 text-xs text-slate-600">
            <Clock className="w-3 h-3" />
            {formatTime(lastUpdate)}
          </div>
        </div>

        {/* Venue */}
        <p className="text-sm text-slate-600">{venue}</p>

        {/* Match Status */}
        <div className="bg-white rounded-lg p-4 border border-green-200">
          <p className="text-sm font-semibold text-slate-900 mb-3">{liveScore.status}</p>
          
          {/* Scores */}
          <div className="space-y-3">
            {liveScore.score.map((inning, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex-1">
                  <p className="text-xs text-slate-600 mb-1">{inning.inning}</p>
                  <p className="text-2xl font-bold text-slate-900">
                    {inning.r}/{inning.w}
                    <span className="text-sm text-slate-600 ml-2">({inning.o} ov)</span>
                  </p>
                </div>
                
                {/* Current inning indicator */}
                {inning.inning === liveScore.currentInning && (
                  <Badge className="bg-blue-600 text-white">
                    <Activity className="w-3 h-3 mr-1" />
                    Batting
                  </Badge>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Run Rate Stats */}
        <div className="grid grid-cols-2 gap-3">
          {/* Current Run Rate */}
          <div className="bg-white rounded-lg p-3 border border-blue-200">
            <div className="flex items-center gap-2 mb-1">
              <TrendingUp className="w-4 h-4 text-blue-600" />
              <p className="text-xs text-slate-600">Run Rate</p>
            </div>
            <p className="text-xl font-bold text-slate-900">{liveScore.runRate}</p>
          </div>

          {/* Required Run Rate (if chasing) */}
          {liveScore.requiredRunRate && (
            <div className="bg-white rounded-lg p-3 border border-orange-200">
              <div className="flex items-center gap-2 mb-1">
                <Target className="w-4 h-4 text-orange-600" />
                <p className="text-xs text-slate-600">Required RR</p>
              </div>
              <p className="text-xl font-bold text-slate-900">{liveScore.requiredRunRate}</p>
            </div>
          )}

          {/* Target (if chasing) */}
          {liveScore.target && !liveScore.requiredRunRate && (
            <div className="bg-white rounded-lg p-3 border border-purple-200">
              <div className="flex items-center gap-2 mb-1">
                <Target className="w-4 h-4 text-purple-600" />
                <p className="text-xs text-slate-600">Target</p>
              </div>
              <p className="text-xl font-bold text-slate-900">{liveScore.target}</p>
            </div>
          )}
        </div>

        {/* Auto-refresh indicator */}
        {autoRefresh && (
          <div className="flex items-center justify-center gap-2 text-xs text-slate-500 pt-2 border-t border-slate-200">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
            <span>Auto-updating every {refreshInterval / 1000}s</span>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
