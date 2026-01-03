import { useEffect, useState } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Activity, Clock, Trophy } from 'lucide-react';
import { getLiveScore, getMatchScorecard, type LiveScore, type Scorecard } from '@/lib/cricketApi';
import { Link } from 'wouter';

interface FullScorecardViewProps {
  matchId: string;
  matchName: string;
  venue: string;
}

export default function FullScorecardView({ matchId, matchName, venue }: FullScorecardViewProps) {
  const [liveScore, setLiveScore] = useState<LiveScore | null>(null);
  const [scorecard, setScorecard] = useState<Scorecard | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedInning, setSelectedInning] = useState(0);
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
      console.error('Failed to fetch scorecard:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLiveData();
    
    // Auto-refresh every 5 seconds
    const refreshInterval = setInterval(fetchLiveData, 5000);
    
    // Update seconds counter
    const counterInterval = setInterval(() => {
      setSecondsSinceUpdate(prev => prev + 1);
    }, 1000);

    return () => {
      clearInterval(refreshInterval);
      clearInterval(counterInterval);
    };
  }, [matchId]);

  if (loading) {
    return (
      <Card className="p-8">
        <div className="flex items-center justify-center h-64">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-4 border-purple-600 mx-auto mb-4"></div>
            <p className="text-slate-600">Loading scorecard...</p>
          </div>
        </div>
      </Card>
    );
  }

  if (!liveScore || !scorecard) {
    return (
      <Card className="p-6">
        <p className="text-center text-muted-foreground">Scorecard unavailable</p>
      </Card>
    );
  }

  const currentInning = scorecard.innings?.[selectedInning];

  return (
    <div className="space-y-4">
      {/* Header */}
      <Card className="overflow-hidden border-2 border-purple-500 shadow-xl">
        <div className="bg-gradient-to-r from-purple-700 to-purple-900 p-6 text-white">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="relative flex h-4 w-4">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                <span className="relative inline-flex rounded-full h-4 w-4 bg-white"></span>
              </div>
              <Badge className="bg-red-500 text-white font-bold text-base px-4 py-2">
                <Activity className="w-4 h-4 mr-2 inline" />
                LIVE
              </Badge>
            </div>
            <div className="flex items-center gap-3 text-sm bg-purple-800/40 px-4 py-2 rounded-full">
              <Clock className="w-4 h-4" />
              <span>Updated {secondsSinceUpdate}s ago</span>
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
            </div>
          </div>
          
          <h2 className="text-2xl font-black mb-2">{matchName}</h2>
          <p className="text-purple-200">{venue}</p>
        </div>

        {/* Team Scores */}
        <div className="p-6 bg-white">
          <div className="space-y-4">
            {liveScore.score.map((inning, idx) => (
              <div key={idx} className="flex items-center justify-between p-4 bg-slate-50 rounded-lg border-2 border-slate-200">
                <div className="flex-1">
                  <p className="text-sm font-semibold text-slate-600 mb-1">{inning.inning}</p>
                  <p className="text-4xl font-black text-slate-900">
                    {inning.r}<span className="text-red-600">/{inning.w}</span>
                    <span className="text-lg text-slate-600 ml-3">({inning.o} Overs)</span>
                  </p>
                </div>
                {inning.inning === liveScore.currentInning && (
                  <Badge className="bg-green-600 text-white text-sm px-3 py-1">Batting</Badge>
                )}
              </div>
            ))}
          </div>

          {/* Match Result */}
          {liveScore.status && liveScore.status.toLowerCase().includes('won') && (
            <div className="mt-4 p-4 bg-gradient-to-r from-purple-100 to-pink-100 rounded-lg border-2 border-purple-300 text-center">
              <Trophy className="w-6 h-6 text-purple-600 inline mr-2" />
              <span className="text-lg font-bold text-purple-900">{liveScore.status}</span>
            </div>
          )}
        </div>
      </Card>

      {/* Innings Tabs */}
      {scorecard.innings && scorecard.innings.length > 1 && (
        <div className="flex gap-2">
          {scorecard.innings.map((inning: any, idx: number) => (
            <Button
              key={idx}
              variant={selectedInning === idx ? 'default' : 'outline'}
              onClick={() => setSelectedInning(idx)}
              className={selectedInning === idx ? 'bg-purple-600 hover:bg-purple-700' : ''}
            >
              {inning.name || `Inning ${idx + 1}`}
            </Button>
          ))}
        </div>
      )}

      {/* Scorecard Table */}
      {currentInning && (
        <Card className="overflow-hidden">
          {/* Batting Table */}
          <div className="p-6 bg-white">
            <h3 className="text-xl font-black text-slate-900 mb-4">Batsman</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-purple-700 text-white">
                    <th className="text-left p-3 font-bold">Batsman</th>
                    <th className="text-center p-3 font-bold">R</th>
                    <th className="text-center p-3 font-bold">B</th>
                    <th className="text-center p-3 font-bold">4s</th>
                    <th className="text-center p-3 font-bold">6s</th>
                    <th className="text-center p-3 font-bold">SR</th>
                  </tr>
                </thead>
                <tbody>
                  {currentInning.batsmen?.map((batsman: any, idx: number) => (
                    <tr key={idx} className={idx % 2 === 0 ? 'bg-slate-50' : 'bg-white'}>
                      <td className="p-3">
                        <div>
                          <p className="font-semibold text-slate-900">{batsman.name}</p>
                          {batsman.dismissal && (
                            <p className="text-xs text-slate-600">{batsman.dismissal}</p>
                          )}
                        </div>
                      </td>
                      <td className="text-center p-3 font-bold text-slate-900">{batsman.runs || 0}</td>
                      <td className="text-center p-3 text-slate-700">{batsman.balls || 0}</td>
                      <td className="text-center p-3 text-slate-700">{batsman.fours || 0}</td>
                      <td className="text-center p-3 text-slate-700">{batsman.sixes || 0}</td>
                      <td className="text-center p-3 text-slate-700">{batsman.strikeRate?.toFixed(2) || '0.00'}</td>
                    </tr>
                  ))}
                </tbody>
                <tfoot className="bg-purple-100 border-t-2 border-purple-300">
                  <tr>
                    <td className="p-3 font-bold text-slate-900">Extras</td>
                    <td className="text-center p-3 font-bold text-slate-900" colSpan={5}>
                      {currentInning.extras?.total || 0} 
                      <span className="text-xs text-slate-600 ml-2">
                        (B: {currentInning.extras?.byes || 0}, LB: {currentInning.extras?.legByes || 0}, 
                        WD: {currentInning.extras?.wides || 0}, NB: {currentInning.extras?.noBalls || 0})
                      </span>
                    </td>
                  </tr>
                  <tr className="bg-purple-200">
                    <td className="p-3 font-black text-slate-900">TOTAL</td>
                    <td className="text-center p-3 font-black text-slate-900" colSpan={5}>
                      {currentInning.total?.runs || 0}/{currentInning.total?.wickets || 0} 
                      <span className="ml-2">({currentInning.total?.overs || 0} Overs)</span>
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>

          {/* Bowling Table */}
          {currentInning.bowlers && currentInning.bowlers.length > 0 && (
            <div className="p-6 bg-slate-50 border-t-4 border-slate-200">
              <h3 className="text-xl font-black text-slate-900 mb-4">Bowler</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-red-700 text-white">
                      <th className="text-left p-3 font-bold">Bowler</th>
                      <th className="text-center p-3 font-bold">O</th>
                      <th className="text-center p-3 font-bold">M</th>
                      <th className="text-center p-3 font-bold">R</th>
                      <th className="text-center p-3 font-bold">W</th>
                      <th className="text-center p-3 font-bold">NB</th>
                      <th className="text-center p-3 font-bold">WD</th>
                      <th className="text-center p-3 font-bold">ER</th>
                    </tr>
                  </thead>
                  <tbody>
                    {currentInning.bowlers.map((bowler: any, idx: number) => (
                      <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                        <td className="p-3 font-semibold text-slate-900">{bowler.name}</td>
                        <td className="text-center p-3 text-slate-700">{bowler.overs || 0}</td>
                        <td className="text-center p-3 text-slate-700">{bowler.maidens || 0}</td>
                        <td className="text-center p-3 text-slate-700">{bowler.runs || 0}</td>
                        <td className="text-center p-3 font-bold text-red-600">{bowler.wickets || 0}</td>
                        <td className="text-center p-3 text-slate-700">{bowler.noBalls || 0}</td>
                        <td className="text-center p-3 text-slate-700">{bowler.wides || 0}</td>
                        <td className="text-center p-3 text-slate-700">{bowler.economy?.toFixed(2) || '0.00'}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Partnerships */}
          {currentInning.partnerships && currentInning.partnerships.length > 0 && (
            <div className="p-6 bg-white border-t-4 border-slate-200">
              <h3 className="text-xl font-black text-slate-900 mb-4">Partnership</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-blue-700 text-white">
                      <th className="text-left p-3 font-bold">Partnership</th>
                      <th className="text-center p-3 font-bold">R (B)</th>
                      <th className="text-center p-3 font-bold">R (B)</th>
                      <th className="text-center p-3 font-bold">EX</th>
                      <th className="text-center p-3 font-bold">Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    {currentInning.partnerships.map((partnership: any, idx: number) => (
                      <tr key={idx} className={idx % 2 === 0 ? 'bg-slate-50' : 'bg-white'}>
                        <td className="p-3 text-slate-900">{partnership.players}</td>
                        <td className="text-center p-3 text-slate-700">
                          <strong>{partnership.player1Runs || 0}</strong> ({partnership.player1Balls || 0})
                        </td>
                        <td className="text-center p-3 text-slate-700">
                          <strong>{partnership.player2Runs || 0}</strong> ({partnership.player2Balls || 0})
                        </td>
                        <td className="text-center p-3 text-slate-700">{partnership.extras || 0}</td>
                        <td className="text-center p-3 font-bold text-slate-900">
                          <strong>{partnership.totalRuns || 0}</strong> ({partnership.totalBalls || 0})
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </Card>
      )}

      {/* Create Team CTA */}
      <Card className="p-6 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-center">
        <h3 className="text-2xl font-black mb-3">Create Your Fantasy Team</h3>
        <p className="mb-4 text-purple-100">Build your dream team and compete with others!</p>
        <Link href={`/create-team/${matchId}`}>
          <Button size="lg" className="bg-white text-purple-600 hover:bg-purple-50 font-bold">
            Create Team Now
          </Button>
        </Link>
      </Card>

      {/* Auto-refresh Footer */}
      <div className="text-center text-sm text-slate-600">
        <div className="flex items-center justify-center gap-2">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
          <span>Auto-refreshing every 5 seconds • Next update in {5 - (secondsSinceUpdate % 5)}s</span>
        </div>
      </div>
    </div>
  );
}
