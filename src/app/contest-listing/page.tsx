'use client';

import { useState, useEffect } from 'react';
import { useRoute, useLocation, Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { toast } from 'sonner';
import { Trophy, Users, Clock, ChevronRight, Info } from 'lucide-react';

interface Contest {
  id: number;
  matchId: string;
  name: string;
  entryFee: number;
  prizePool: number;
  maxEntries: number;
  currentEntries: number;
  status: 'upcoming' | 'live' | 'completed';
}

interface UserTeam {
  id: number;
  teamName: string;
  totalPoints: number;
}

export default function ContestListing() {
  const [, params] = useRoute('/contests/:matchId');
  const [, navigate] = usePathname();
  const matchId = params?.matchId;

  const [contests, setContests] = useState<Contest[]>([]);
  const [userTeams, setUserTeams] = useState<UserTeam[]>([]);
  const [loading, setLoading] = useState(true);
  const [matchName, setMatchName] = useState('');

  useEffect(() => {
    if (!matchId) return;
    fetchContests();
    fetchUserTeams();
  }, [matchId]);

  const fetchContests = async () => {
    try {
      setLoading(true);
      // TODO: Replace with actual API call
      // const response = await fetch(`/api/contests?matchId=${matchId}`);
      // const data = await response.json();
      
      // Mock data for now
      const mockContests: Contest[] = [
        {
          id: 1,
          matchId: matchId!,
          name: 'Mega Contest',
          entryFee: 0,
          prizePool: 10000,
          maxEntries: 10000,
          currentEntries: 7532,
          status: 'upcoming'
        },
        {
          id: 2,
          matchId: matchId!,
          name: 'Practice Contest',
          entryFee: 0,
          prizePool: 1000,
          maxEntries: 1000,
          currentEntries: 234,
          status: 'upcoming'
        },
        {
          id: 3,
          matchId: matchId!,
          name: 'Beginners Only',
          entryFee: 0,
          prizePool: 500,
          maxEntries: 500,
          currentEntries: 89,
          status: 'upcoming'
        },
        {
          id: 4,
          matchId: matchId!,
          name: 'Head to Head',
          entryFee: 0,
          prizePool: 100,
          maxEntries: 2,
          currentEntries: 1,
          status: 'upcoming'
        },
      ];
      
      setContests(mockContests);
      setMatchName('India vs Australia - 3rd Test');
    } catch (error) {
      toast.error('Failed to load contests');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const fetchUserTeams = async () => {
    try {
      // TODO: Replace with actual API call
      // const response = await fetch(`/api/teams?matchId=${matchId}`);
      // const data = await response.json();
      
      // Mock data
      const mockTeams: UserTeam[] = [
        { id: 1, teamName: 'My Dream Team', totalPoints: 0 },
        { id: 2, teamName: 'Winners Squad', totalPoints: 0 },
      ];
      
      setUserTeams(mockTeams);
    } catch (error) {
      console.error('Failed to load user teams:', error);
    }
  };

  const joinContest = async (contestId: number, teamId: number) => {
    try {
      // TODO: API call to join contest
      // const response = await fetch('/api/contest-entries', {
      //   method: 'POST',
      //   body: JSON.stringify({ contestId, teamId })
      // });

      toast.success('Successfully joined contest!');
      fetchContests(); // Refresh to update entry counts
    } catch (error) {
      toast.error('Failed to join contest');
      console.error(error);
    }
  };

  const getSpotsFilled = (contest: Contest) => {
    const percentage = (contest.currentEntries / contest.maxEntries) * 100;
    return Math.round(percentage);
  };

  const getSpotsColor = (percentage: number) => {
    if (percentage >= 90) return 'text-red-600';
    if (percentage >= 70) return 'text-yellow-600';
    return 'text-green-600';
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading contests...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto py-8">
        {/* Header */}
        <div className="mb-8">
          <Link href="/tournaments">
            <Button variant="ghost" className="mb-4">
              ← Back to Matches
            </Button>
          </Link>
          <h1 className="text-3xl font-bold mb-2">Select a Contest</h1>
          <p className="text-muted-foreground">{matchName}</p>
        </div>

        {/* User Teams Section */}
        {userTeams.length > 0 ? (
          <Card className="mb-8 bg-gradient-to-r from-primary/10 to-primary/5 border-primary/20">
            <CardHeader>
              <CardTitle className="text-lg">Your Teams for this Match</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-3">
                {userTeams.map(team => (
                  <div key={team.id} className="flex items-center justify-between p-3 bg-background rounded-lg">
                    <div>
                      <p className="font-semibold">{team.teamName}</p>
                      <p className="text-sm text-muted-foreground">Points: {team.totalPoints}</p>
                    </div>
                    <Badge>Ready</Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ) : (
          <Card className="mb-8 border-yellow-200 bg-yellow-50/50">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <Info className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
                <div className="flex-1">
                  <h3 className="font-semibold text-yellow-900 mb-2">No Teams Created Yet</h3>
                  <p className="text-sm text-yellow-800 mb-4">
                    You need to create a team before joining a contest. Build your dream 11-player squad now!
                  </p>
                  <Link href={`/create-team/${matchId}`}>
                    <Button className="bg-yellow-600 hover:bg-yellow-700">
                      Create Your First Team
                    </Button>
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Info Banner */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
          <div className="flex items-start gap-3">
            <Info className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
            <div className="text-sm text-blue-900">
              <p className="font-semibold mb-1">100% Free to Play</p>
              <p>All contests are completely free. Compete for recognition and improve your cricket knowledge!</p>
            </div>
          </div>
        </div>

        {/* Contests List */}
        <div className="space-y-4">
          <h2 className="text-xl font-bold mb-4">Available Contests ({contests.length})</h2>
          
          {contests.map(contest => {
            const spotsFilled = getSpotsFilled(contest);
            const spotsColor = getSpotsColor(spotsFilled);
            const isFull = contest.currentEntries >= contest.maxEntries;

            return (
              <Card key={contest.id} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-xl font-bold">{contest.name}</h3>
                        {isFull && <Badge variant="destructive">Full</Badge>}
                      </div>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Trophy className="w-4 h-4" />
                          <span>{contest.prizePool.toLocaleString()} Points Prize Pool</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Users className="w-4 h-4" />
                          <span className={spotsFilled >= 90 ? 'font-semibold ' + spotsColor : ''}>
                            {contest.currentEntries.toLocaleString()} / {contest.maxEntries.toLocaleString()} spots
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="text-right">
                      <div className="text-2xl font-bold text-primary mb-1">FREE</div>
                      <div className="text-xs text-muted-foreground">Entry Fee</div>
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div className="mb-4">
                    <div className="w-full bg-slate-200 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full transition-all ${
                          spotsFilled >= 90 ? 'bg-red-500' : 
                          spotsFilled >= 70 ? 'bg-yellow-500' : 
                          'bg-green-500'
                        }`}
                        style={{ width: `${spotsFilled}%` }}
                      />
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">
                      {spotsFilled}% filled • {contest.maxEntries - contest.currentEntries} spots left
                    </p>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <Button 
                      variant="outline" 
                      className="flex-1"
                      onClick={() => toast.info('Contest details coming soon')}
                    >
                      View Details
                    </Button>
                    
                    {userTeams.length > 0 ? (
                      <Button 
                        className="flex-1 gap-2"
                        disabled={isFull}
                        onClick={() => joinContest(contest.id, userTeams[0].id)}
                      >
                        {isFull ? 'Contest Full' : 'Join Contest'}
                        {!isFull && <ChevronRight className="w-4 h-4" />}
                      </Button>
                    ) : (
                      <Link href={`/create-team/${matchId}`} className="flex-1">
                        <Button className="w-full gap-2">
                          Create Team First
                          <ChevronRight className="w-4 h-4" />
                        </Button>
                      </Link>
                    )}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA */}
        {userTeams.length === 0 && (
          <div className="mt-8 text-center">
            <Link href={`/create-team/${matchId}`}>
              <Button size="lg" className="gap-2">
                <Trophy className="w-5 h-5" />
                Create Your Team to Join Contests
              </Button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
