import { useState, useEffect } from 'react';
import { useRoute, useLocation } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { toast } from 'sonner';

interface Player {
  pid: string;
  name: string;
  role: 'WK' | 'BAT' | 'AR' | 'BOW';
  team: string;
  points: number; // Point value (1-10)
  fantasyPlayerRating?: number;
  img?: string; // Player photo URL
}

interface SelectedPlayer extends Player {
  isSelected: boolean;
  isCaptain?: boolean;
  isViceCaptain?: boolean;
}

const ROLE_NAMES = {
  WK: 'Wicket Keeper',
  BAT: 'Batsman',
  AR: 'All-Rounder',
  BOW: 'Bowler'
};

const ROLE_LIMITS = {
  WK: { min: 1, max: 4 },
  BAT: { min: 3, max: 6 },
  AR: { min: 1, max: 4 },
  BOW: { min: 3, max: 6 }
};

const MAX_POINTS = 100;
const TEAM_SIZE = 11;

export default function CreateTeamNew() {
  const [, params] = useRoute('/create-team/:matchId');
  const [, navigate] = useLocation();
  const matchId = params?.matchId;

  const [availablePlayers, setAvailablePlayers] = useState<Player[]>([]);
  const [selectedPlayers, setSelectedPlayers] = useState<SelectedPlayer[]>([]);
  const [captain, setCaptain] = useState<string | null>(null);
  const [viceCaptain, setViceCaptain] = useState<string | null>(null);
  const [teamName, setTeamName] = useState('');
  const [activeRole, setActiveRole] = useState<string>('ALL');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!matchId) return;
    fetchMatchSquad();
  }, [matchId]);

  const fetchMatchSquad = async () => {
    try {
      setLoading(true);
      
      // Fetch real squad data from Cricket API via tRPC
      const response = await fetch(`/api/trpc/matchSquad.getSquad?input=${encodeURIComponent(JSON.stringify({ matchId }))}`);
      
      if (!response.ok) {
        throw new Error('Failed to fetch squad data');
      }
      
      const data = await response.json();
      const squadData = data.result?.data;
      
      if (!squadData || !squadData.squad) {
        toast.error('No squad data available for this match');
        setAvailablePlayers([]);
        return;
      }
      
      // Transform API data to Player format
      const players: Player[] = squadData.squad.map((player: any, index: number) => ({
        pid: player.id || `player-${index}`,
        name: player.name || 'Unknown Player',
        role: player.role || 'BAT', // Default to BAT if role not specified
        team: player.teamName || '',
        points: Math.floor(Math.random() * 3) + 8, // 8-10 points (will be replaced with real rating later)
        img: player.img || player.playerImg || undefined,
        fantasyPlayerRating: player.fantasyPlayerRating
      }));
      
      setAvailablePlayers(players);
    } catch (error) {
      toast.error('Failed to load players');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const getTotalPoints = () => {
    return selectedPlayers.reduce((sum, p) => sum + p.points, 0);
  };

  const getRoleCount = (role: string) => {
    return selectedPlayers.filter(p => p.role === role).length;
  };

  const canSelectPlayer = (player: Player): { can: boolean; reason?: string } => {
    if (selectedPlayers.length >= TEAM_SIZE) {
      return { can: false, reason: 'Team is full (11 players)' };
    }

    const newTotal = getTotalPoints() + player.points;
    if (newTotal > MAX_POINTS) {
      return { can: false, reason: `Exceeds ${MAX_POINTS} point budget` };
    }

    const roleCount = getRoleCount(player.role);
    const limit = ROLE_LIMITS[player.role as keyof typeof ROLE_LIMITS];
    if (roleCount >= limit.max) {
      return { can: false, reason: `Max ${limit.max} ${ROLE_NAMES[player.role as keyof typeof ROLE_NAMES]}s allowed` };
    }

    return { can: true };
  };

  const togglePlayerSelection = (player: Player) => {
    const isSelected = selectedPlayers.some(p => p.pid === player.pid);

    if (isSelected) {
      // Remove player
      setSelectedPlayers(prev => prev.filter(p => p.pid !== player.pid));
      if (captain === player.pid) setCaptain(null);
      if (viceCaptain === player.pid) setViceCaptain(null);
    } else {
      // Add player
      const check = canSelectPlayer(player);
      if (!check.can) {
        toast.error(check.reason);
        return;
      }
      setSelectedPlayers(prev => [...prev, { ...player, isSelected: true }]);
    }
  };

  const selectCaptain = (playerId: string) => {
    if (viceCaptain === playerId) {
      toast.error('This player is already vice-captain');
      return;
    }
    setCaptain(playerId);
    toast.success('Captain selected (2x points)');
  };

  const selectViceCaptain = (playerId: string) => {
    if (captain === playerId) {
      toast.error('This player is already captain');
      return;
    }
    setViceCaptain(playerId);
    toast.success('Vice-captain selected (1.5x points)');
  };

  const validateTeam = (): { valid: boolean; errors: string[] } => {
    const errors: string[] = [];

    if (selectedPlayers.length !== TEAM_SIZE) {
      errors.push(`Select exactly ${TEAM_SIZE} players`);
    }

    Object.entries(ROLE_LIMITS).forEach(([role, limit]) => {
      const count = getRoleCount(role);
      if (count < limit.min) {
        errors.push(`Select at least ${limit.min} ${ROLE_NAMES[role as keyof typeof ROLE_NAMES]}(s)`);
      }
    });

    if (!captain) {
      errors.push('Select a captain');
    }

    if (!viceCaptain) {
      errors.push('Select a vice-captain');
    }

    if (!teamName.trim()) {
      errors.push('Enter a team name');
    }

    return { valid: errors.length === 0, errors };
  };

  const saveTeam = async () => {
    const validation = validateTeam();
    if (!validation.valid) {
      validation.errors.forEach(err => toast.error(err));
      return;
    }

    try {
      // TODO: API call to save team
      // const response = await fetch('/api/teams', {
      //   method: 'POST',
      //   body: JSON.stringify({
      //     matchId,
      //     teamName,
      //     players: selectedPlayers.map(p => p.pid),
      //     captainId: captain,
      //     viceCaptainId: viceCaptain,
      //   })
      // });

      toast.success('Team created successfully!');
      navigate(`/tournaments`);
    } catch (error) {
      toast.error('Failed to create team');
      console.error(error);
    }
  };

  const filteredPlayers = activeRole === 'ALL' 
    ? availablePlayers 
    : availablePlayers.filter(p => p.role === activeRole);

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading players...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Create Your Team</h1>
          <p className="text-muted-foreground">Select 11 players within {MAX_POINTS} points budget</p>
        </div>

        {/* Team Stats Bar */}
        <Card className="p-6 mb-6 bg-card">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div>
              <p className="text-sm text-muted-foreground mb-1">Players Selected</p>
              <p className="text-2xl font-bold">{selectedPlayers.length}/{TEAM_SIZE}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-1">Points Used</p>
              <p className="text-2xl font-bold text-primary">{getTotalPoints()}/{MAX_POINTS}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-1">Captain</p>
              <p className="text-lg font-semibold">{captain ? selectedPlayers.find(p => p.pid === captain)?.name : '-'}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-1">Vice Captain</p>
              <p className="text-lg font-semibold">{viceCaptain ? selectedPlayers.find(p => p.pid === viceCaptain)?.name : '-'}</p>
            </div>
          </div>

          {/* Role Distribution */}
          <div className="mt-4 flex gap-4 flex-wrap">
            {Object.entries(ROLE_LIMITS).map(([role, limit]) => {
              const count = getRoleCount(role);
              const isValid = count >= limit.min && count <= limit.max;
              return (
                <Badge key={role} variant={isValid ? "default" : "destructive"}>
                  {ROLE_NAMES[role as keyof typeof ROLE_NAMES]}: {count}/{limit.min}-{limit.max}
                </Badge>
              );
            })}
          </div>
        </Card>

        {/* Team Name Input */}
        <Card className="p-4 mb-6">
          <label className="block text-sm font-medium mb-2">Team Name</label>
          <input
            type="text"
            value={teamName}
            onChange={(e) => setTeamName(e.target.value)}
            placeholder="Enter your team name"
            className="w-full p-2 border rounded-md bg-background"
            maxLength={50}
          />
        </Card>

        {/* Role Filter Tabs */}
        <div className="flex gap-2 mb-6 overflow-x-auto">
          <Button
            variant={activeRole === 'ALL' ? 'default' : 'outline'}
            onClick={() => setActiveRole('ALL')}
          >
            All Players
          </Button>
          {Object.keys(ROLE_NAMES).map(role => (
            <Button
              key={role}
              variant={activeRole === role ? 'default' : 'outline'}
              onClick={() => setActiveRole(role)}
            >
              {ROLE_NAMES[role as keyof typeof ROLE_NAMES]}
            </Button>
          ))}
        </div>

        {/* Player List */}
        <div className="grid gap-4 mb-8">
          {filteredPlayers.map(player => {
            const isSelected = selectedPlayers.some(p => p.pid === player.pid);
            const isCap = captain === player.pid;
            const isVC = viceCaptain === player.pid;

            return (
              <Card key={player.pid} className={`p-4 ${isSelected ? 'border-primary border-2' : ''}`}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 flex-1">
                    {/* Player Photo */}
                    <div className="relative w-16 h-16 rounded-full overflow-hidden bg-slate-200 flex-shrink-0">
                      {player.img ? (
                        <img 
                          src={player.img} 
                          alt={player.name}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${encodeURIComponent(player.name)}&background=random&size=128`;
                          }}
                        />
                      ) : (
                        <img 
                          src={`https://ui-avatars.com/api/?name=${encodeURIComponent(player.name)}&background=random&size=128`}
                          alt={player.name}
                          className="w-full h-full object-cover"
                        />
                      )}
                      {/* Role badge on photo */}
                      <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white text-xs text-center py-0.5">
                        {player.role}
                      </div>
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-semibold">{player.name}</h3>
                        {isCap && <Badge className="bg-yellow-500">C</Badge>}
                        {isVC && <Badge className="bg-blue-500">VC</Badge>}
                      </div>
                      <div className="flex gap-2 text-sm text-muted-foreground">
                        <span>{player.team}</span>
                        <span>•</span>
                        <span>{ROLE_NAMES[player.role]}</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-primary">{player.points}</p>
                      <p className="text-xs text-muted-foreground">points</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-2 ml-4">
                    {isSelected && (
                      <>
                        <Button
                          size="sm"
                          variant={isCap ? 'default' : 'outline'}
                          onClick={() => selectCaptain(player.pid)}
                        >
                          C
                        </Button>
                        <Button
                          size="sm"
                          variant={isVC ? 'default' : 'outline'}
                          onClick={() => selectViceCaptain(player.pid)}
                        >
                          VC
                        </Button>
                      </>
                    )}
                    <Button
                      variant={isSelected ? 'destructive' : 'default'}
                      onClick={() => togglePlayerSelection(player)}
                    >
                      {isSelected ? 'Remove' : 'Add'}
                    </Button>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Save Button */}
        <div className="fixed bottom-0 left-0 right-0 bg-background border-t p-4">
          <div className="container mx-auto">
            <Button 
              className="w-full" 
              size="lg"
              onClick={saveTeam}
              disabled={selectedPlayers.length !== TEAM_SIZE}
            >
              Save Team
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
