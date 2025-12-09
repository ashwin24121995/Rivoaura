import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Plus, Minus, Info } from "lucide-react";
import { Link, useRoute } from "wouter";
import { calculateFantasyPoints } from "@/lib/fantasy-points";

// Mock Data for Players (Initial State)
const initialPlayersData = [
  { id: 1, name: "Virat Kohli", team: "IND", role: "BAT", credits: 10.5, points: 452, image: "VK" },
  { id: 2, name: "Rohit Sharma", team: "IND", role: "BAT", credits: 10.0, points: 380, image: "RS" },
  { id: 3, name: "Jasprit Bumrah", team: "IND", role: "BOWL", credits: 9.5, points: 410, image: "JB" },
  { id: 4, name: "Ravindra Jadeja", team: "IND", role: "AR", credits: 9.0, points: 395, image: "RJ" },
  { id: 5, name: "Rishabh Pant", team: "IND", role: "WK", credits: 9.0, points: 320, image: "RP" },
  { id: 6, name: "Steve Smith", team: "AUS", role: "BAT", credits: 9.5, points: 360, image: "SS" },
  { id: 7, name: "Pat Cummins", team: "AUS", role: "BOWL", credits: 9.5, points: 405, image: "PC" },
  { id: 8, name: "Glenn Maxwell", team: "AUS", role: "AR", credits: 9.0, points: 340, image: "GM" },
  { id: 9, name: "Travis Head", team: "AUS", role: "BAT", credits: 9.0, points: 420, image: "TH" },
  { id: 10, name: "Alex Carey", team: "AUS", role: "WK", credits: 8.5, points: 280, image: "AC" },
  { id: 11, name: "Hardik Pandya", team: "IND", role: "AR", credits: 9.0, points: 350, image: "HP" },
  { id: 12, name: "Mohammed Siraj", team: "IND", role: "BOWL", credits: 8.5, points: 310, image: "MS" },
  { id: 13, name: "Mitchell Starc", team: "AUS", role: "BOWL", credits: 9.0, points: 330, image: "MSt" },
  { id: 14, name: "Suryakumar Yadav", team: "IND", role: "BAT", credits: 9.0, points: 390, image: "SKY" },
  { id: 15, name: "Adam Zampa", team: "AUS", role: "BOWL", credits: 8.5, points: 300, image: "AZ" },
];

export default function CreateTeam() {
  const [playersData, setPlayersData] = useState(initialPlayersData);

  // Simulate real-time point updates
  useEffect(() => {
    const interval = setInterval(() => {
      setPlayersData(prevData => prevData.map(player => {
        // Randomly update points for simulation
        if (Math.random() > 0.7) {
          return { ...player, points: player.points + Math.floor(Math.random() * 5) };
        }
        return player;
      }));
    }, 5000); // Update every 5 seconds

    return () => clearInterval(interval);
  }, []);
  const [selectedRole, setSelectedRole] = useState("WK");
  const [selectedPlayers, setSelectedPlayers] = useState<number[]>([]);
  const [creditsLeft, setCreditsLeft] = useState(100);
  
  const togglePlayer = (player: any) => {
    if (selectedPlayers.includes(player.id)) {
      setSelectedPlayers(prev => prev.filter(id => id !== player.id));
      setCreditsLeft(prev => prev + player.credits);
    } else {
      if (selectedPlayers.length >= 11) return;
      if (creditsLeft - player.credits < 0) return;
      setSelectedPlayers(prev => [...prev, player.id]);
      setCreditsLeft(prev => prev - player.credits);
    }
  };

  const getRoleCount = (role: string) => {
    return selectedPlayers.filter(id => playersData.find(p => p.id === id)?.role === role).length;
  };

  const filteredPlayers = playersData.filter(p => p.role === selectedRole);

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
              <div className="text-xs text-slate-400">2h 15m left</div>
              <div className="font-bold text-sm">IND vs AUS</div>
            </div>
          </div>
          <div className="flex items-center gap-4 text-xs">
            <div className="text-center">
              <div className="text-slate-400">Credits Left</div>
              <div className="font-bold text-base">{creditsLeft.toFixed(1)}</div>
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

      {/* Player List */}
      <div className="container py-4 space-y-3">
        <div className="flex justify-between text-xs text-slate-500 px-2">
          <span>Player</span>
          <div className="flex gap-6">
            <span>Points</span>
            <span>Credits</span>
          </div>
        </div>
        
        {filteredPlayers.map((player) => {
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
                    <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center text-xs font-bold text-slate-600 overflow-hidden">
                      {/* Placeholder for player image */}
                      {player.image}
                    </div>
                    <div className="absolute -bottom-1 -right-1 bg-white rounded-full px-1 text-[8px] font-bold border border-slate-200 shadow-sm">
                      {player.team}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-slate-900">{player.name}</h4>
                    <p className="text-xs text-slate-500">Sel by 85%</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-6">
                  <div className="text-sm font-medium text-slate-600">{player.points}</div>
                  <div className="text-sm font-bold text-slate-900 w-8 text-right">{player.credits}</div>
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
        })}
      </div>

      {/* Bottom Action Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 p-4 shadow-lg z-20">
        <div className="container flex gap-4">
          <Button variant="outline" className="flex-1">Team Preview</Button>
          <Link href="/contests/1" className="flex-1">
            <Button 
              className={`w-full ${selectedPlayers.length === 11 ? 'bg-green-600 hover:bg-green-700' : 'bg-slate-300 cursor-not-allowed'}`}
              disabled={selectedPlayers.length !== 11}
            >
              Continue
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
