import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Trophy, Users, Shield, Zap, ArrowLeft } from "lucide-react";
import { Link, useLocation } from "wouter";
import { useAuth } from "@/contexts/AuthContext";
import { toast } from "sonner";

export default function Contests() {
  const { joinContest, user, isAuthenticated } = useAuth();
  const [, setLocation] = useLocation();
  const contests = [
    {
      id: 1,
      name: "Mega Contest",
      prizePool: "1 Crore Pts",
      entry: "Free",
      spots: 150000,
      filled: 124500,
      winners: "Top 50%",
      type: "MEGA",
      guaranteed: true
    },
    {
      id: 2,
      name: "Head-to-Head",
      prizePool: "Rank #1 Title",
      entry: "Free",
      spots: 2,
      filled: 1,
      winners: "1",
      type: "H2H",
      guaranteed: false
    },
    {
      id: 3,
      name: "Winner Takes All",
      prizePool: "10,000 Pts",
      entry: "Free",
      spots: 4,
      filled: 3,
      winners: "1",
      type: "4-MEMBER",
      guaranteed: false
    },
    {
      id: 4,
      name: "Practice Contest",
      prizePool: "Training",
      entry: "Free",
      spots: 10000,
      filled: 4500,
      winners: "Top 100",
      type: "PRACTICE",
      guaranteed: true
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 pb-20">
      {/* Header */}
      <div className="bg-slate-900 text-white sticky top-0 z-10 shadow-md">
        <div className="container py-4 flex items-center gap-4">
          <Link href="/tournaments">
            <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
              <ArrowLeft className="w-5 h-5" />
            </Button>
          </Link>
          <div>
            <h1 className="font-bold text-lg">IND vs AUS</h1>
            <p className="text-xs text-slate-400">2h 15m left</p>
          </div>
        </div>
      </div>

      {/* Contest Categories */}
      <div className="container py-6 space-y-6">
        
        {/* Mega Contests */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <Trophy className="w-5 h-5 text-yellow-500" />
            <h2 className="font-bold text-slate-900">Mega Contests</h2>
            <Badge variant="secondary" className="text-[10px] bg-red-100 text-red-600">HOT</Badge>
          </div>
          
          {contests.filter(c => c.type === "MEGA").map(contest => (
            <Card key={contest.id} className="border-slate-200 shadow-sm hover:shadow-md transition-shadow mb-4">
              <CardHeader className="pb-2 border-b border-slate-50 bg-slate-50/50">
                <div className="flex justify-between items-start">
                  <div>
                    <div className="text-xs text-slate-500 mb-1">Prize Pool</div>
                    <CardTitle className="text-xl font-bold text-slate-900">{contest.prizePool}</CardTitle>
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-slate-500 mb-1">Entry</div>
                    <Button 
                      size="sm" 
                      className={`h-8 px-6 font-bold ${user?.joinedContests.includes(contest.id.toString()) ? 'bg-slate-400 cursor-not-allowed' : 'bg-green-600 hover:bg-green-700'}`}
                      disabled={user?.joinedContests.includes(contest.id.toString())}
                      onClick={() => {
                        if (!isAuthenticated) {
                          toast.error("Please login to join contests");
                          setLocation("/login");
                          return;
                        }
                        joinContest(contest.id.toString());
                        toast.success(`Successfully joined ${contest.name}!`);
                      }}
                    >
                      {user?.joinedContests.includes(contest.id.toString()) ? 'Joined' : contest.entry}
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-4">
                <div className="mb-2">
                  <Progress value={(contest.filled / contest.spots) * 100} className="h-1.5 bg-slate-100" />
                </div>
                <div className="flex justify-between text-xs text-slate-500 mb-4">
                  <span className="text-red-500 font-medium">{contest.spots - contest.filled} spots left</span>
                  <span>{contest.spots} spots</span>
                </div>
                <div className="flex items-center gap-4 text-xs bg-slate-50 p-2 rounded border border-slate-100">
                  <div className="flex items-center gap-1">
                    <Trophy className="w-3 h-3 text-yellow-500" />
                    <span>{contest.winners} Winners</span>
                  </div>
                  {contest.guaranteed && (
                    <div className="flex items-center gap-1">
                      <Shield className="w-3 h-3 text-blue-500" />
                      <span>Guaranteed</span>
                    </div>
                  )}
                  <div className="flex items-center gap-1">
                    <Zap className="w-3 h-3 text-purple-500" />
                    <span>Max 20 Teams</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Head to Head */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <Users className="w-5 h-5 text-blue-500" />
            <h2 className="font-bold text-slate-900">Head to Head</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {contests.filter(c => c.type === "H2H" || c.type === "4-MEMBER").map(contest => (
              <Card key={contest.id} className="border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-4">
                  <div className="flex justify-between items-center mb-4">
                    <div>
                      <div className="text-xs text-slate-500">Prize</div>
                      <div className="font-bold text-slate-900">{contest.prizePool}</div>
                    </div>
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className={`h-8 px-6 font-bold ${user?.joinedContests.includes(contest.id.toString()) ? 'bg-slate-100 text-slate-400 border-slate-200 cursor-not-allowed' : 'border-green-600 text-green-600 hover:bg-green-50'}`}
                      disabled={user?.joinedContests.includes(contest.id.toString())}
                      onClick={() => {
                        if (!isAuthenticated) {
                          toast.error("Please login to join contests");
                          setLocation("/login");
                          return;
                        }
                        joinContest(contest.id.toString());
                        toast.success(`Successfully joined ${contest.name}!`);
                      }}
                    >
                      {user?.joinedContests.includes(contest.id.toString()) ? 'Joined' : contest.entry}
                    </Button>
                  </div>
                  <div className="flex justify-between items-center text-xs text-slate-500">
                    <div className="flex items-center gap-1">
                      <Users className="w-3 h-3" /> {contest.spots} Spots
                    </div>
                    <div className="flex items-center gap-1">
                      <Trophy className="w-3 h-3" /> {contest.winners} Winner
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Practice */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <Shield className="w-5 h-5 text-green-500" />
            <h2 className="font-bold text-slate-900">Practice Contests</h2>
          </div>
          
          {contests.filter(c => c.type === "PRACTICE").map(contest => (
            <Card key={contest.id} className="border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-4 flex justify-between items-center">
                <div>
                  <div className="font-bold text-slate-900 mb-1">{contest.name}</div>
                  <div className="text-xs text-slate-500">Join for free & improve your skills</div>
                </div>
                <Button 
                  size="sm" 
                  variant="secondary" 
                  className="h-8 px-6 font-bold"
                  disabled={user?.joinedContests.includes(contest.id.toString())}
                  onClick={() => {
                    if (!isAuthenticated) {
                      toast.error("Please login to join contests");
                      setLocation("/login");
                      return;
                    }
                    joinContest(contest.id.toString());
                    toast.success(`Successfully joined ${contest.name}!`);
                  }}
                >
                  {user?.joinedContests.includes(contest.id.toString()) ? 'Joined' : 'Join'}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

      </div>
    </div>
  );
}
