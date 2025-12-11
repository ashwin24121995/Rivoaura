import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Trophy, Star, TrendingUp, Calendar, MapPin, Award } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { Link } from "wouter";

export default function UserProfile() {
  const { user, isAuthenticated } = useAuth();

  if (!isAuthenticated || !user) {
    return (
      <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-4">
        <div className="text-center max-w-md">
          <Trophy className="w-16 h-16 text-slate-300 mx-auto mb-4" />
          <h1 className="text-2xl font-bold text-slate-900 mb-2">Profile Not Found</h1>
          <p className="text-slate-600 mb-6">Please login to view your profile.</p>
          <Link href="/login">
            <Button className="bg-blue-900 hover:bg-blue-800">Login Now</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 pb-20">
      {/* Profile Header */}
      <div className="bg-white border-b border-slate-200">
        <div className="h-32 bg-gradient-to-r from-blue-900 to-blue-800 relative">
          <div className="absolute -bottom-12 left-0 right-0 container flex justify-between items-end">
            <div className="flex items-end gap-4">
              <Avatar className="w-24 h-24 border-4 border-white shadow-lg">
                <AvatarImage src={`https://api.dicebear.com/7.x/initials/svg?seed=${user.avatar}`} />
                <AvatarFallback>{user.avatar}</AvatarFallback>
              </Avatar>
              <div className="mb-2">
                <h1 className="text-2xl font-bold text-slate-900">{user.username}</h1>
                <div className="flex items-center gap-2 text-sm text-slate-500">
                  <MapPin className="w-3 h-3" /> Mumbai, India
                  <span className="text-slate-300">|</span>
                  <Calendar className="w-3 h-3" /> Joined Dec 2025
                </div>
              </div>
            </div>
            <div className="mb-4 hidden md:block">
              <Button variant="outline">Edit Profile</Button>
            </div>
          </div>
        </div>
        <div className="container pt-16 pb-6">
          <div className="flex gap-8 text-sm">
            <div className="text-center">
              <div className="font-bold text-xl text-slate-900">{user.joinedContests.length}</div>
              <div className="text-slate-500">Contests</div>
            </div>
            <div className="text-center">
              <div className="font-bold text-xl text-slate-900">{user.teams.length}</div>
              <div className="text-slate-500">Teams</div>
            </div>
            <div className="text-center">
              <div className="font-bold text-xl text-slate-900">{user.rank}</div>
              <div className="text-slate-500">Global Rank</div>
            </div>
          </div>
        </div>
      </div>

      <div className="container py-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Left Column - Stats */}
        <div className="space-y-6">
          <Card className="border-slate-200 shadow-sm">
            <CardHeader>
              <CardTitle className="text-lg font-bold flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-blue-600" /> Performance
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-slate-600">Total Points</span>
                <span className="font-bold text-slate-900">{user.totalPoints}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-600">Win Rate</span>
                <span className="font-bold text-green-600">68%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-600">Best Rank</span>
                <span className="font-bold text-yellow-600">#12</span>
              </div>
            </CardContent>
          </Card>

          <Card className="border-slate-200 shadow-sm">
            <CardHeader>
              <CardTitle className="text-lg font-bold flex items-center gap-2">
                <Award className="w-5 h-5 text-purple-600" /> Badges
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary" className="bg-yellow-100 text-yellow-700 hover:bg-yellow-200">
                  Early Adopter
                </Badge>
                <Badge variant="secondary" className="bg-blue-100 text-blue-700 hover:bg-blue-200">
                  Series Winner
                </Badge>
                <Badge variant="secondary" className="bg-green-100 text-green-700 hover:bg-green-200">
                  Top 100
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right Column - Trophy Cabinet & History */}
        <div className="md:col-span-2 space-y-6">
          <Card className="border-slate-200 shadow-sm">
            <CardHeader>
              <CardTitle className="text-lg font-bold flex items-center gap-2">
                <Trophy className="w-5 h-5 text-yellow-500" /> Trophy Cabinet
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div className="text-center p-4 bg-slate-50 rounded-lg border border-slate-100">
                  <Trophy className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
                  <div className="font-bold text-sm text-slate-900">IPL 2024</div>
                  <div className="text-xs text-slate-500">Champion</div>
                </div>
                <div className="text-center p-4 bg-slate-50 rounded-lg border border-slate-100">
                  <Trophy className="w-8 h-8 text-slate-300 mx-auto mb-2" />
                  <div className="font-bold text-sm text-slate-900">T20 WC</div>
                  <div className="text-xs text-slate-500">Runner Up</div>
                </div>
                <div className="text-center p-4 bg-slate-50 rounded-lg border border-slate-100 opacity-50">
                  <div className="w-8 h-8 rounded-full bg-slate-200 mx-auto mb-2"></div>
                  <div className="font-bold text-sm text-slate-400">Locked</div>
                </div>
                <div className="text-center p-4 bg-slate-50 rounded-lg border border-slate-100 opacity-50">
                  <div className="w-8 h-8 rounded-full bg-slate-200 mx-auto mb-2"></div>
                  <div className="font-bold text-sm text-slate-400">Locked</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-slate-200 shadow-sm">
            <CardHeader>
              <CardTitle className="text-lg font-bold">Recent Activity</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center border border-slate-200 font-bold text-xs text-slate-500">
                        T20
                      </div>
                      <div>
                        <div className="font-medium text-slate-900">IND vs AUS</div>
                        <div className="text-xs text-slate-500">Mega Contest • Team 1</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-green-600">+850 Pts</div>
                      <div className="text-xs text-slate-500">Rank #45</div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
