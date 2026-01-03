'use client';

import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin, Calendar, Trophy, Users, TrendingUp, Clock } from 'lucide-react';
import { useEffect, useState } from 'react';
import { getMatchSquad, getLiveScore, type Match, type Player, type LiveScore, type MatchSquad } from '@/lib/cricketApi';

interface MatchDetailsDialogProps {
  match: Match | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function MatchDetailsDialog({ match, open, onOpenChange }: MatchDetailsDialogProps) {
  const [squads, setSquads] = useState<MatchSquad[]>([]);
  const [liveScore, setLiveScore] = useState<LiveScore | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (match && open) {
      loadMatchDetails();
    }
  }, [match, open]);

  const loadMatchDetails = async () => {
    if (!match) return;
    
    setLoading(true);
    try {
      const [squadData, scoreData] = await Promise.all([
        getMatchSquad(match.id),
        match.matchStarted ? getLiveScore(match.id) : Promise.resolve(null),
      ]);
      
      setSquads(squadData);
      setLiveScore(scoreData);
    } catch (error) {
      console.error('Failed to load match details:', error);
    } finally {
      setLoading(false);
    }
  };

  if (!match) return null;

  // Get players for each team from squad data
  const team1Players = squads[0]?.players || [];
  const team2Players = squads[1]?.players || [];

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">
            {match.name}
          </DialogTitle>
          <div className="flex items-center gap-2 mt-2">
            <Badge variant={match.matchStarted ? (match.matchEnded ? "secondary" : "destructive") : "default"}>
              {match.matchEnded ? "Completed" : match.matchStarted ? "LIVE" : "Upcoming"}
            </Badge>
            <Badge variant="outline">{match.matchType}</Badge>
          </div>
        </DialogHeader>

        {loading ? (
          <div className="flex items-center justify-center py-12">
            <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
          </div>
        ) : (
          <Tabs defaultValue="overview" className="mt-4">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="squads">Squads</TabsTrigger>
              <TabsTrigger value="stats">Stats</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-4">
              {/* Match Info */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Trophy className="w-5 h-5" />
                    Match Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start gap-2">
                    <MapPin className="w-5 h-5 text-slate-500 mt-0.5" />
                    <div>
                      <p className="font-medium">{match.venue}</p>
                      <p className="text-sm text-slate-500">Venue</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Calendar className="w-5 h-5 text-slate-500 mt-0.5" />
                    <div>
                      <p className="font-medium">{new Date(match.dateTimeGMT).toLocaleString()}</p>
                      <p className="text-sm text-slate-500">Match Time</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Trophy className="w-5 h-5 text-slate-500 mt-0.5" />
                    <div>
                      <p className="font-medium">{match.series_id}</p>
                      <p className="text-sm text-slate-500">Series</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Live Score (if match is live) */}
              {match.matchStarted && liveScore && (
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <TrendingUp className="w-5 h-5" />
                      Live Score
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {liveScore.score.map((innings, idx) => (
                        <div key={idx} className="flex justify-between items-center">
                          <span className="font-semibold">{innings.inning}</span>
                          <span className="text-2xl font-bold">{innings.r}/{innings.w} ({innings.o} ov)</span>
                        </div>
                      ))}
                      {liveScore.currentInning && (
                        <div className="pt-3 border-t">
                          <p className="text-sm text-slate-600">{liveScore.currentInning}</p>
                          {liveScore.runRate && (
                            <p className="text-xs text-slate-500 mt-1">Run Rate: {liveScore.runRate.toFixed(2)}</p>
                          )}
                          {liveScore.requiredRunRate && (
                            <p className="text-xs text-slate-500">Required RR: {liveScore.requiredRunRate.toFixed(2)}</p>
                          )}
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Teams */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Users className="w-5 h-5" />
                    Teams
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-blue-50 rounded-lg">
                      <p className="font-bold text-lg">{match.teams[0]}</p>
                      <p className="text-sm text-slate-600 mt-1">{team1Players.length} Players</p>
                    </div>
                    <div className="text-center p-4 bg-green-50 rounded-lg">
                      <p className="font-bold text-lg">{match.teams[1]}</p>
                      <p className="text-sm text-slate-600 mt-1">{team2Players.length} Players</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="squads" className="space-y-4">
              {/* Team 1 Squad */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">{match.teams[0]} Squad</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {team1Players.length > 0 ? (
                      team1Players.map((player) => (
                        <div key={player.name} className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                          <div>
                            <p className="font-medium">{player.name}</p>
                            <p className="text-sm text-slate-500">{player.role}</p>
                          </div>
                          <Badge variant="secondary">{player.credit} Cr</Badge>
                        </div>
                      ))
                    ) : (
                      <p className="text-slate-500 col-span-2">Squad not available yet</p>
                    )}
                  </div>
                </CardContent>
              </Card>

              {/* Team 2 Squad */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">{match.teams[1]} Squad</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {team2Players.length > 0 ? (
                      team2Players.map((player) => (
                        <div key={player.name} className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                          <div>
                            <p className="font-medium">{player.name}</p>
                            <p className="text-sm text-slate-500">{player.role}</p>
                          </div>
                          <Badge variant="secondary">{player.credit} Cr</Badge>
                        </div>
                      ))
                    ) : (
                      <p className="text-slate-500 col-span-2">Squad not available yet</p>
                    )}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="stats" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Match Statistics</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-slate-50 rounded-lg">
                      <p className="text-2xl font-bold">{team1Players.length}</p>
                      <p className="text-sm text-slate-600 mt-1">Team 1 Players</p>
                    </div>
                    <div className="text-center p-4 bg-slate-50 rounded-lg">
                      <p className="text-2xl font-bold">{team2Players.length}</p>
                      <p className="text-sm text-slate-600 mt-1">Team 2 Players</p>
                    </div>
                    <div className="text-center p-4 bg-slate-50 rounded-lg">
                      <p className="text-2xl font-bold">{match.matchType}</p>
                      <p className="text-sm text-slate-600 mt-1">Format</p>
                    </div>
                    <div className="text-center p-4 bg-slate-50 rounded-lg">
                      <p className="text-2xl font-bold">{team1Players.length + team2Players.length}</p>
                      <p className="text-sm text-slate-600 mt-1">Total Players</p>
                    </div>
                  </div>
                  
                  {match.matchStarted && liveScore && (
                    <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                      <div className="flex items-center gap-2 text-blue-700">
                        <Clock className="w-5 h-5" />
                        <p className="font-medium">Match is currently in progress</p>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        )}
      </DialogContent>
    </Dialog>
  );
}
