import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Plus, Minus, Loader2, AlertCircle } from "lucide-react";
import { Link, useRoute, useLocation } from "wouter";
import { useAuth } from "@/contexts/AuthContext";
import { toast } from "sonner";
import { nanoid } from "nanoid";
import { getMatchSquad, getCurrentMatches, type Player, type MatchSquad, type Match } from "@/lib/cricketApi";

// Role mapping from API to our display format
const ROLE_MAP: Record<string, string> = {
  'Batsman': 'BAT',
  'Bowler': 'BOWL',
  'WK-Batsman': 'WK',
  'Batting Allrounder': 'AR',
  'Bowling Allrounder': 'AR',
};

// Reverse mapping for filtering
const DISPLAY_ROLE_MAP: Record<string, string[]> = {
  'WK': ['WK-Batsman'],
  'BAT': ['Batsman'],
  'AR': ['Batting Allrounder', 'Bowling Allrounder'],
  'BOWL': ['Bowler'],
};

interface ProcessedPlayer extends Player {
  displayRole: string;
  team: string;
  shortName: string;
}

export default function CreateTeam() {
  const [match, params] = useRoute("/create-team/:id");
  const matchId = params?.id || "";
  
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [matchData, setMatchData] = useState<Match | null>(null);
  const [squads, setSquads] = useState<MatchSquad[]>([]);
  const [allPlayers, setAllPlayers] = useState<ProcessedPlayer[]>([]);
  
  const [selectedRole, setSelectedRole] = useState("WK");
  const [selectedPlayers, setSelectedPlayers] = useState<string[]>([]);
  const [pointsLeft, setPointsLeft] = useState(100);
  const { saveTeam, isAuthenticated } = useAuth();
  const [, setLocation] = useLocation();

  // Fetch match data and squads
  useEffect(() => {
    async function loadMatchData() {
      try {
        setLoading(true);
        setError(null);
        
        // Fetch match info
        const matches = await getCurrentMatches();
        const currentMatch = matches.find(m => m.id === matchId);
        
        if (!currentMatch) {
          throw new Error("Match not found");
        }
        
        setMatchData(currentMatch);
        
        // Fetch squad data
        const squadData = await getMatchSquad(matchId);
        setSquads(squadData);
        
        // Process all players
        const processed: ProcessedPlayer[] = [];
        squadData.forEach((squad) => {
          squad.players.forEach((player) => {
            processed.push({
              ...player,
              displayRole: ROLE_MAP[player.role] || 'BAT',
              team: squad.shortname,
              shortName: player.name.split(' ').map(n => n[0]).join(''),
              credit: parseFloat(player.credit.toFixed(1)), // Player point value
            });
          });
        });
        
        setAllPlayers(processed);
        setLoading(false);
      } catch (err) {
        console.error('Failed to load match data:', err);
        setError(err instanceof Error ? err.message : 'Failed to load match data');
        setLoading(false);
      }
    }
    
    if (matchId) {
      loadMatchData();
    }
  }, [matchId]);

  const togglePlayer = (player: ProcessedPlayer) => {
    if (selectedPlayers.includes(player.id)) {
      setSelectedPlayers(prev => prev.filter(id => id !== player.id));
      setPointsLeft(prev => prev + player.credit);
    } else {
      if (selectedPlayers.length >= 11) {
        toast.error("Maximum 11 players allowed");
        return;
      }
      if (pointsLeft - player.credit < 0) {
        toast.error("Insufficient points in budget");
        return;
      }
      
      // Check role constraints
      const currentRoleCount = getRoleCount(player.displayRole);
      const constraints: Record<string, { min: number; max: number }> = {
        'WK': { min: 1, max: 4 },
        'BAT': { min: 3, max: 6 },
        'AR': { min: 1, max: 4 },
        'BOWL': { min: 3, max: 6 },
      };
      
      const constraint = constraints[player.displayRole];
      if (constraint && currentRoleCount >= constraint.max) {
        toast.error(`Maximum ${constraint.max} ${player.displayRole} players allowed`);
        return;
      }
      
      setSelectedPlayers(prev => [...prev, player.id]);
      setPointsLeft(prev => prev - player.credit);
    }
  };

  const getRoleCount = (role: string) => {
    return selectedPlayers.filter(id => {
      const player = allPlayers.find(p => p.id === id);
      return player?.displayRole === role;
    }).length;
  };

  const filteredPlayers = allPlayers.filter(p => {
    const apiRoles = DISPLAY_ROLE_MAP[selectedRole] || [];
    return apiRoles.includes(p.role);
  });

  const getTimeRemaining = () => {
    if (!matchData) return "Loading...";
    
    const matchTime = new Date(matchData.dateTimeGMT);
    const now = new Date();
    const diff = matchTime.getTime() - now.getTime();
    
    if (diff < 0) return "Match Started";
    
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    
    return `${hours}h ${minutes}m left`;
  };

  const canSaveTeam = () => {
    if (selectedPlayers.length !== 11) return false;
    
    // Check role constraints
    const wkCount = getRoleCount('WK');
    const batCount = getRoleCount('BAT');
    const arCount = getRoleCount('AR');
    const bowlCount = getRoleCount('BOWL');
    
    return (
      wkCount >= 1 && wkCount <= 4 &&
      batCount >= 3 && batCount <= 6 &&
      arCount >= 1 && arCount <= 4 &&
      bowlCount >= 3 && bowlCount <= 6
    );
  };

  // Loading state
  if (loading) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="text-center space-y-4">
          <Loader2 className="w-12 h-12 animate-spin text-blue-600 mx-auto" />
          <p className="text-slate-600 font-medium">Loading match squad...</p>
        </div>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <Card className="max-w-md mx-4 p-8 text-center space-y-4">
          <AlertCircle className="w-16 h-16 text-red-500 mx-auto" />
          <h2 className="text-2xl font-bold text-slate-900">Failed to Load Squad</h2>
          <p className="text-slate-600">{error}</p>
          <Link href="/tournaments">
            <Button className="mt-4">Back to Tournaments</Button>
          </Link>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 pb-24">
      {/* Header */}
      <div className="bg-slate-900 text-white sticky top-0 z-10 shadow-md">
        <div className="container py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link href="/tournaments">
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                <ArrowLeft className="w-5 h-5" />
              </Button>
            </Link>
            <div>
              <div className="text-xs text-slate-400">{getTimeRemaining()}</div>
              <div className="font-bold text-sm">{matchData?.name || "Loading..."}</div>
            </div>
          </div>
          <div className="flex items-center gap-4 text-xs">
            <div className="text-center">
              <div className="text-slate-400">Points Left</div>
              <div className="font-bold text-base">{pointsLeft.toFixed(1)}</div>
            </div>
            <div className="w-px h-8 bg-slate-700"></div>
            <div className="text-center">
              <div className="text-slate-400">Players</div>
              <div className="font-bold text-base">{selectedPlayers.length}/11</div>
            </div>
          </div>
        </div>
        
        {/* Progress Bar */}
        <div className="bg-slate-800 h-1">
          <div 
            className="bg-green-500 h-full transition-all duration-300" 
            style={{ width: `${(selectedPlayers.length / 11) * 100}%` }}
          ></div>
        </div>
      </div>

      {/* Role Tabs */}
      <div className="bg-white border-b border-slate-200 sticky top-[60px] z-10">
        <div className="container">
          <Tabs value={selectedRole} onValueChange={setSelectedRole} className="w-full">
            <TabsList className="w-full grid grid-cols-4 h-12 bg-transparent p-0">
              {["WK", "BAT", "AR", "BOWL"].map((role) => (
                <TabsTrigger 
                  key={role} 
                  value={role}
                  className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:text-primary data-[state=active]:shadow-none h-full"
                >
                  {role} ({getRoleCount(role)})
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>
      </div>

      {/* Role Constraints Info */}
      <div className="container py-3">
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 text-sm">
          <div className="flex items-start gap-2">
            <AlertCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
            <div className="text-blue-800">
              <strong>Team Rules:</strong> Select 11 players - WK (1-4), BAT (3-6), AR (1-4), BOWL (3-6)
            </div>
          </div>
        </div>
      </div>

      {/* Player List */}
      <div className="container py-4 space-y-3">
        <div className="flex justify-between text-xs text-slate-500 px-2">
          <span>Player</span>
          <div className="flex gap-6">
            <span>Role</span>
            <span>Points</span>
          </div>
        </div>
        
        {filteredPlayers.length === 0 ? (
          <div className="text-center py-12 text-slate-500">
            <p>No players available for this role</p>
          </div>
        ) : (
          filteredPlayers.map((player) => {
            const isSelected = selectedPlayers.includes(player.id);
            return (
              <Card 
                key={player.id} 
                className={`border transition-colors cursor-pointer ${isSelected ? 'border-green-500 bg-green-50' : 'border-slate-200 hover:border-slate-300'}`}
                onClick={() => togglePlayer(player)}
              >
                <div className="p-3 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-slate-200 to-slate-300 flex items-center justify-center text-xs font-bold text-slate-700 overflow-hidden">
                        {player.shortName}
                      </div>
                      <div className="absolute -bottom-1 -right-1 bg-white rounded-full px-1 text-[8px] font-bold border border-slate-200 shadow-sm">
                        {player.team}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm text-slate-900">{player.name}</h4>
                      <p className="text-xs text-slate-500">{player.role}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-6">
                    <Badge variant="outline" className="text-xs">
                      {player.displayRole}
                    </Badge>
                    <div className="text-sm font-bold text-slate-900 w-8 text-right">{player.credit.toFixed(1)}</div>
                    <Button 
                      size="icon" 
                      variant="ghost" 
                      className={`h-8 w-8 rounded-full ${isSelected ? 'text-red-500 hover:text-red-600 hover:bg-red-50' : 'text-green-600 hover:text-green-700 hover:bg-green-50'}`}
                    >
                      {isSelected ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                    </Button>
                  </div>
                </div>
              </Card>
            );
          })
        )}
      </div>

      {/* Bottom Action Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 p-4 shadow-lg z-20">
        <div className="container flex gap-4">
          <Button 
            variant="outline" 
            className="flex-1"
            onClick={() => {
              if (selectedPlayers.length === 0) {
                toast.info("Select players to preview your team");
                return;
              }
              toast.info("Team preview coming soon!");
            }}
          >
            Team Preview ({selectedPlayers.length})
          </Button>
          <Button 
            className={`flex-1 ${canSaveTeam() ? 'bg-green-600 hover:bg-green-700' : 'bg-slate-300 cursor-not-allowed'}`}
            disabled={!canSaveTeam()}
            onClick={() => {
              if (!isAuthenticated) {
                toast.error("Please login to save your team");
                setLocation("/login");
                return;
              }
              
              if (!canSaveTeam()) {
                toast.error("Please complete your team according to role constraints");
                return;
              }
              
              // Save Team Logic
              // Note: API uses string IDs, but AuthContext expects number IDs
              // We'll use hash codes as numeric IDs for compatibility
              const playerNumericIds = selectedPlayers.map(id => {
                // Simple hash function to convert string ID to number
                let hash = 0;
                for (let i = 0; i < id.length; i++) {
                  hash = ((hash << 5) - hash) + id.charCodeAt(i);
                  hash = hash & hash; // Convert to 32bit integer
                }
                return Math.abs(hash);
              });
              
              const newTeam = {
                id: nanoid(),
                matchId: parseInt(matchId) || 0,
                name: `Team ${nanoid(4)}`,
                players: playerNumericIds,
                captainId: playerNumericIds[0], // Default first player as Captain
                viceCaptainId: playerNumericIds[1], // Default second as VC
                totalPoints: 0
              };
              
              saveTeam(newTeam);
              toast.success("Team saved successfully!");
              setLocation("/contests/1");
            }}
          >
            {canSaveTeam() ? "Save Team & Join Contest" : `Select ${11 - selectedPlayers.length} More`}
          </Button>
        </div>
      </div>
    </div>
  );
}
