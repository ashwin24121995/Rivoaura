import { Trophy, Users, TrendingUp, Calendar, ArrowRight, Star, Zap } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Dashboard() {
  // Mock data - will be replaced with real data from API
  const userStats = {
    totalPoints: 15420,
    weeklyRank: 342,
    monthlyRank: 1205,
    allTimeRank: 8934,
    teamsCreated: 47,
    contestsJoined: 89,
    winRate: 34
  };

  const upcomingMatches = [
    {
      id: 1,
      team1: "India",
      team2: "Australia",
      date: "Dec 15, 2024",
      time: "2:00 PM IST",
      venue: "Melbourne Cricket Ground",
      hasTeam: true
    },
    {
      id: 2,
      team1: "England",
      team2: "Pakistan",
      date: "Dec 16, 2024",
      time: "7:00 PM IST",
      venue: "Lords, London",
      hasTeam: false
    },
    {
      id: 3,
      team1: "South Africa",
      team2: "New Zealand",
      date: "Dec 17, 2024",
      time: "5:30 PM IST",
      venue: "Cape Town",
      hasTeam: false
    }
  ];

  const recentContests = [
    {
      id: 1,
      match: "India vs Sri Lanka",
      points: 487,
      rank: 23,
      totalUsers: 5420,
      status: "completed"
    },
    {
      id: 2,
      match: "Australia vs England",
      points: 512,
      rank: 15,
      totalUsers: 3890,
      status: "completed"
    },
    {
      id: 3,
      match: "Pakistan vs Bangladesh",
      points: 0,
      rank: 0,
      totalUsers: 2100,
      status: "live"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white py-12">
        <div className="container">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold mb-2">Welcome Back, Champion!</h1>
              <p className="text-slate-300">Ready to build your next high-scoring team?</p>
            </div>
            <div className="hidden md:flex items-center gap-4">
              <div className="text-right">
                <div className="text-sm text-slate-400">Total Points</div>
                <div className="text-3xl font-bold text-yellow-400">{userStats.totalPoints.toLocaleString()}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Overview */}
      <section className="py-8 -mt-6">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card className="border-slate-200 bg-white">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <div className="text-sm text-slate-600">Weekly Rank</div>
                  <Trophy className="w-5 h-5 text-yellow-500" />
                </div>
                <div className="text-3xl font-bold text-slate-900">#{userStats.weeklyRank}</div>
                <div className="text-xs text-green-600 mt-1">↑ 45 from last week</div>
              </CardContent>
            </Card>

            <Card className="border-slate-200 bg-white">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <div className="text-sm text-slate-600">Monthly Rank</div>
                  <TrendingUp className="w-5 h-5 text-blue-500" />
                </div>
                <div className="text-3xl font-bold text-slate-900">#{userStats.monthlyRank}</div>
                <div className="text-xs text-green-600 mt-1">↑ 120 this month</div>
              </CardContent>
            </Card>

            <Card className="border-slate-200 bg-white">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <div className="text-sm text-slate-600">Teams Created</div>
                  <Users className="w-5 h-5 text-purple-500" />
                </div>
                <div className="text-3xl font-bold text-slate-900">{userStats.teamsCreated}</div>
                <div className="text-xs text-slate-500 mt-1">{userStats.contestsJoined} contests joined</div>
              </CardContent>
            </Card>

            <Card className="border-slate-200 bg-white">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <div className="text-sm text-slate-600">Win Rate</div>
                  <Star className="w-5 h-5 text-green-500" />
                </div>
                <div className="text-3xl font-bold text-slate-900">{userStats.winRate}%</div>
                <div className="text-xs text-slate-500 mt-1">Top 10% finishes</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-8">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Upcoming Matches */}
            <div className="lg:col-span-2">
              <Card className="border-slate-200">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span className="flex items-center gap-2">
                      <Calendar className="w-5 h-5 text-blue-600" />
                      Upcoming Matches
                    </span>
                    <Link href="/tournaments">
                      <Button variant="ghost" size="sm" className="text-blue-600">
                        View All
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </Button>
                    </Link>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {upcomingMatches.map((match) => (
                      <div key={match.id} className="p-4 border border-slate-200 rounded-lg hover:border-yellow-500 transition-colors">
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center gap-4">
                            <div className="text-center">
                              <div className="font-bold text-slate-900">{match.team1}</div>
                              <div className="text-xs text-slate-500">vs</div>
                              <div className="font-bold text-slate-900">{match.team2}</div>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-sm font-semibold text-slate-900">{match.date}</div>
                            <div className="text-xs text-slate-600">{match.time}</div>
                            <div className="text-xs text-slate-500 mt-1">{match.venue}</div>
                          </div>
                        </div>
                        <div className="flex items-center justify-between pt-3 border-t border-slate-100">
                          {match.hasTeam ? (
                            <>
                              <span className="text-sm text-green-600 font-medium flex items-center gap-1">
                                <Zap className="w-4 h-4" />
                                Team Created
                              </span>
                              <Link href={`/create-team/${match.id}`}>
                                <Button size="sm" variant="outline">Edit Team</Button>
                              </Link>
                            </>
                          ) : (
                            <>
                              <span className="text-sm text-slate-500">No team yet</span>
                              <Link href={`/create-team/${match.id}`}>
                                <Button size="sm" className="bg-yellow-500 hover:bg-yellow-600 text-slate-900">
                                  Create Team
                                </Button>
                              </Link>
                            </>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Recent Contests */}
            <div>
              <Card className="border-slate-200">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Trophy className="w-5 h-5 text-yellow-500" />
                    Recent Contests
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentContests.map((contest) => (
                      <div key={contest.id} className="p-4 border border-slate-200 rounded-lg">
                        <div className="text-sm font-semibold text-slate-900 mb-2">{contest.match}</div>
                        {contest.status === "completed" ? (
                          <>
                            <div className="flex items-center justify-between mb-2">
                              <span className="text-xs text-slate-600">Your Rank</span>
                              <span className="font-bold text-slate-900">#{contest.rank}</span>
                            </div>
                            <div className="flex items-center justify-between mb-2">
                              <span className="text-xs text-slate-600">Points</span>
                              <span className="font-bold text-blue-600">{contest.points}</span>
                            </div>
                            <div className="text-xs text-slate-500">
                              Out of {contest.totalUsers.toLocaleString()} users
                            </div>
                          </>
                        ) : (
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                            <span className="text-sm text-green-600 font-medium">Live Now</span>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                  <Link href="/my-contests">
                    <Button variant="outline" className="w-full mt-4">
                      View All Contests
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-8">
        <div className="container">
          <Card className="border-slate-200 bg-gradient-to-r from-slate-900 to-slate-800 text-white">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                  <h3 className="text-2xl font-bold mb-2">Ready for Your Next Challenge?</h3>
                  <p className="text-slate-300">Browse upcoming matches and create your high-scoring team.</p>
                </div>
                <Link href="/tournaments">
                  <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-slate-900 font-bold px-8">
                    Browse Matches
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
