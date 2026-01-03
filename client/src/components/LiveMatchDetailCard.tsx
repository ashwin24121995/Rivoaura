import { useEffect, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Activity, Clock, TrendingUp, Target, User, Zap } from 'lucide-react';
import { getLiveScore, getMatchScorecard, type LiveScore, type Scorecard } from '@/lib/cricketApi';

interface LiveMatchDetailCardProps {
  matchId: string;
  matchName: string;
  venue: string;
}

export default function LiveMatchDetailCard({ matchId, matchName, venue }: LiveMatchDetailCardProps) {
  const [liveScore, setLiveScore] = useState<LiveScore | null>(null);
  const [scorecard, setScorecard] = useState<Scorecard | null>(null);
  const [loading, setLoading] = useState(true);
  const [lastUpdate, setLastUpdate] = useState<Date>(new Date());
  const [secondsSinceUpdate, setSecondsSinceUpdate] = useState(0);

  const fetchLiveData = async () => {
    try {
      const [scoreData, scorecardData] = await Promise.all([
        getLiveScore(matchId),
        getMatchScorecard(matchId),
      ]);
      
      setLiveScore(scoreData);
      setScorecard(scorecardData);
      setLastUpdate(new Date());
      setSecondsSinceUpdate(0);
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

  // Auto-refresh every 5 seconds
  useEffect(() => {
    const refreshInterval = setInterval(() => {
      fetchLiveData();
    }, 5000);

    return () => clearInterval(refreshInterval);
  }, [matchId]);

  // Update seconds counter
  useEffect(() => {
    const counterInterval = setInterval(() => {
      setSecondsSinceUpdate(prev => prev + 1);
    }, 1000);

    return () => clearInterval(counterInterval);
  }, [lastUpdate]);

  if (loading) {
    return (
      <Card className="border-2 border-red-500 shadow-xl">
        <CardContent className="p-8">
          <div className="flex items-center justify-center h-64">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-4 border-red-600 mx-auto mb-4"></div>
              <p className="text-slate-600">Loading live match data...</p>
            </div>
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

  const currentInning = scorecard?.innings?.[scorecard.innings.length - 1];
  const currentBatsmen = currentInning?.batsmen?.slice(0, 2) || [];
  const currentBowler = currentInning?.bowlers?.[0];

  return (
    <Card className="border-4 border-red-500 shadow-2xl bg-gradient-to-br from-red-50 via-white to-orange-50">
      <CardContent className="p-0">
        {/* Header - Live Badge */}
        <div className="bg-gradient-to-r from-red-600 to-red-700 p-6 text-white">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="relative flex h-4 w-4">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                <span className="relative inline-flex rounded-full h-4 w-4 bg-white"></span>
              </div>
              <Badge className="bg-white text-red-600 font-bold text-lg px-4 py-2">
                <Activity className="w-5 h-5 mr-2 inline" />
                LIVE
              </Badge>
            </div>
            <div className="flex items-center gap-3 text-sm bg-red-800/30 px-4 py-2 rounded-full">
              <Clock className="w-4 h-4" />
              <span>Updated {secondsSinceUpdate}s ago</span>
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
            </div>
          </div>
          
          <h2 className="text-3xl font-black mb-2">{matchName}</h2>
          <p className="text-red-100 text-lg">{venue}</p>
        </div>

        {/* Match Status & Score */}
        <div className="p-6 bg-slate-50 border-b-4 border-slate-200">
          <p className="text-sm font-semibold text-slate-600 mb-4">{liveScore.status}</p>
          
          <div className="space-y-4">
            {liveScore.score.map((inning, index) => (
              <div key={index} className="bg-white rounded-xl p-5 border-2 border-slate-200 shadow-sm">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-slate-600 mb-2">{inning.inning}</p>
                    <p className="text-5xl font-black text-slate-900">
                      {inning.r}<span className="text-red-600">/{inning.w}</span>
                    </p>
                    <p className="text-lg text-slate-600 mt-1">({inning.o} overs)</p>
                  </div>
                  
                  {inning.inning === liveScore.currentInning && (
                    <Badge className="bg-blue-600 text-white text-lg px-4 py-2">
                      <Zap className="w-5 h-5 mr-2" />
                      Batting Now
                    </Badge>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Run Rate Stats */}
          <div className="grid grid-cols-2 gap-4 mt-6">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-4 border-2 border-blue-200">
              <div className="flex items-center gap-2 mb-2">
                <TrendingUp className="w-5 h-5 text-blue-600" />
                <p className="text-sm font-semibold text-slate-700">Current Run Rate</p>
              </div>
              <p className="text-3xl font-black text-blue-600">{liveScore.runRate}</p>
            </div>

            {liveScore.requiredRunRate && (
              <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-4 border-2 border-orange-200">
                <div className="flex items-center gap-2 mb-2">
                  <Target className="w-5 h-5 text-orange-600" />
                  <p className="text-sm font-semibold text-slate-700">Required RR</p>
                </div>
                <p className="text-3xl font-black text-orange-600">{liveScore.requiredRunRate}</p>
              </div>
            )}

            {liveScore.target && !liveScore.requiredRunRate && (
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-4 border-2 border-purple-200">
                <div className="flex items-center gap-2 mb-2">
                  <Target className="w-5 h-5 text-purple-600" />
                  <p className="text-sm font-semibold text-slate-700">Target</p>
                </div>
                <p className="text-3xl font-black text-purple-600">{liveScore.target}</p>
              </div>
            )}
          </div>
        </div>

        {/* Current Batsmen */}
        {currentBatsmen.length > 0 && (
          <div className="p-6 bg-white border-b-4 border-slate-200">
            <div className="flex items-center gap-3 mb-5">
              <User className="w-6 h-6 text-blue-600" />
              <h3 className="text-xl font-black text-slate-900">Current Batsmen</h3>
            </div>
            
            <div className="space-y-4">
              {currentBatsmen.map((batsman: any, idx: number) => (
                <div key={idx} className="bg-gradient-to-r from-blue-50 to-white rounded-xl p-5 border-2 border-blue-200 shadow-sm">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <p className="text-xl font-bold text-slate-900 mb-2">{batsman.name}</p>
                      <div className="flex gap-6 text-sm text-slate-600">
                        <span><strong>{batsman.balls || 0}</strong> balls</span>
                        <span><strong>{batsman.fours || 0}</strong> fours</span>
                        <span><strong>{batsman.sixes || 0}</strong> sixes</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-5xl font-black text-blue-600">{batsman.runs || 0}</p>
                      <p className="text-sm text-slate-600 mt-1">
                        SR: <strong>{batsman.strikeRate?.toFixed(1) || '0.0'}</strong>
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Current Bowler */}
        {currentBowler && (
          <div className="p-6 bg-gradient-to-br from-slate-50 to-white">
            <div className="flex items-center gap-3 mb-5">
              <Zap className="w-6 h-6 text-red-600" />
              <h3 className="text-xl font-black text-slate-900">Current Bowler</h3>
            </div>
            
            <div className="bg-gradient-to-r from-red-50 to-white rounded-xl p-5 border-2 border-red-200 shadow-sm">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <p className="text-xl font-bold text-slate-900 mb-2">{currentBowler.name}</p>
                  <div className="flex gap-6 text-sm text-slate-600">
                    <span><strong>{currentBowler.overs || 0}</strong> overs</span>
                    <span><strong>{currentBowler.maidens || 0}</strong> maidens</span>
                    <span>Econ: <strong>{currentBowler.economy?.toFixed(2) || '0.00'}</strong></span>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-5xl font-black text-red-600">
                    {currentBowler.wickets || 0}/{currentBowler.runs || 0}
                  </p>
                  <p className="text-sm text-slate-600 mt-1">Wickets/Runs</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Auto-refresh Footer */}
        <div className="px-6 py-4 bg-gradient-to-r from-green-50 to-blue-50 border-t-2 border-slate-200">
          <div className="flex items-center justify-center gap-3 text-sm text-slate-700">
            <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
            <span className="font-semibold">Auto-refreshing every 5 seconds</span>
            <span className="text-slate-500">• Next update in {5 - (secondsSinceUpdate % 5)}s</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
