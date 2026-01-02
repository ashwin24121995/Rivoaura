import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Trophy, Calendar, Users, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { useAuth } from "@/contexts/AuthContext";

export default function MyContests() {
  const { user, isAuthenticated } = useAuth();

  if (!isAuthenticated || !user) {
    return (
      <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-4">
        <div className="text-center max-w-md">
          <Trophy className="w-16 h-16 text-slate-300 mx-auto mb-4" />
          <h1 className="text-2xl font-bold text-slate-900 mb-2">Login Required</h1>
          <p className="text-slate-600 mb-6">Please login to view your contests and track your performance.</p>
          <Link href="/login">
            <Button className="bg-blue-900 hover:bg-blue-800">Login Now</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 pb-20">
      <div className="bg-blue-900 text-white py-8">
        <div className="container">
          <h1 className="text-2xl font-bold mb-2">My Contests</h1>
          <div className="flex gap-4 text-sm text-blue-200">
            <div className="flex items-center gap-1">
              <Trophy className="w-4 h-4" />
              <span>{user.joinedContests?.length || 0} Joined</span>
            </div>
            <div className="flex items-center gap-1">
              <Users className="w-4 h-4" />
              <span>{user.teams?.length || 0} Teams Created</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container py-6 space-y-6">
        {/* Upcoming Contests */}
        <div>
          <h2 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
            <Calendar className="w-5 h-5 text-blue-600" />
            Upcoming Matches
          </h2>
          
          {(user.joinedContests?.length || 0) === 0 ? (
            <Card className="border-dashed border-2 border-slate-200 bg-slate-50/50">
              <CardContent className="flex flex-col items-center justify-center py-12 text-center">
                <Trophy className="w-12 h-12 text-slate-300 mb-3" />
                <h3 className="font-medium text-slate-900 mb-1">No Upcoming Contests</h3>
                <p className="text-sm text-slate-500 mb-4">Join a contest to start winning points!</p>
                <Link href="/tournaments">
                  <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                    View Matches
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ) : (
            <div className="space-y-4">
              {/* Mock displaying joined contests - in real app would fetch details by ID */}
              {(user.joinedContests || []).map((contestId, index) => (
                <Card key={index} className="border-slate-200 shadow-sm">
                  <CardHeader className="pb-2 border-b border-slate-50">
                    <div className="flex justify-between items-start">
                      <div>
                        <Badge variant="secondary" className="mb-2 bg-green-100 text-green-700">Upcoming</Badge>
                        <CardTitle className="text-lg font-bold text-slate-900">IND vs AUS</CardTitle>
                        <p className="text-xs text-slate-500">T20 Series • Match {index + 1}</p>
                      </div>
                      <Link href={`/contests/${contestId}`}>
                        <Button size="sm" variant="ghost" className="text-blue-600 hover:bg-blue-50">
                          View <ArrowRight className="w-4 h-4 ml-1" />
                        </Button>
                      </Link>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-4">
                    <div className="flex justify-between items-center text-sm">
                      <div className="text-slate-600">
                        <span className="font-medium text-slate-900">1 Team</span> Joined
                      </div>
                      <div className="text-slate-600">
                        Contest ID: <span className="font-mono text-xs bg-slate-100 px-1 rounded">#{contestId}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>

        {/* My Teams */}
        <div>
          <h2 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
            <Users className="w-5 h-5 text-green-600" />
            My Teams
          </h2>
          
          {(user.teams?.length || 0) === 0 ? (
            <div className="text-center py-8 text-slate-500 text-sm">
              No teams created yet.
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {(user.teams || []).map((team) => (
                <Card key={team.id} className="border-slate-200">
                  <CardContent className="p-4">
                    <div className="flex justify-between items-center mb-2">
                      <div className="font-bold text-slate-900">{team.name}</div>
                      <Badge variant="outline" className="text-xs">Points: {team.totalPoints}</Badge>
                    </div>
                    <div className="text-xs text-slate-500 flex gap-2">
                      <span>Captain: <span className="font-medium text-slate-700">Player #{team.captainId}</span></span>
                      <span>VC: <span className="font-medium text-slate-700">Player #{team.viceCaptainId}</span></span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
