import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { MessageSquare, ThumbsUp, Share2, TrendingUp, Award } from "lucide-react";

export default function Community() {
  const discussions = [
    {
      id: 1,
      author: "Rahul Sharma",
      avatar: "RS",
      title: "Best captain pick for IND vs AUS?",
      content: "I'm thinking of going with Kohli given his current form, but Smith has a great record at this venue. Thoughts?",
      likes: 45,
      comments: 12,
      time: "2 hours ago",
      tag: "Strategy"
    },
    {
      id: 2,
      author: "Priya Patel",
      avatar: "PP",
      title: "Hidden gem: New spinner in the squad",
      content: "Don't overlook the new leg spinner. He took 5 wickets in the domestic circuit last week.",
      likes: 32,
      comments: 8,
      time: "4 hours ago",
      tag: "Player Analysis"
    },
    {
      id: 3,
      author: "CricketGuru",
      avatar: "CG",
      title: "Pitch Report: Wankhede Stadium",
      content: "Looks like a batting paradise today. Expect scores of 200+. Load up on top-order batsmen.",
      likes: 156,
      comments: 45,
      time: "1 hour ago",
      tag: "Match Info"
    }
  ];

  const topPlayers = [
    { rank: 1, name: "MasterBlaster99", points: "15,420" },
    { rank: 2, name: "YorkerKing", points: "14,850" },
    { rank: 3, name: "SpinWizard", points: "14,200" },
    { rank: 4, name: "CoverDrive", points: "13,950" },
    { rank: 5, name: "WicketKeeper07", points: "13,500" },
  ];

  return (
    <div className="container py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Main Feed */}
        <div className="lg:col-span-2 space-y-6">
          <div className="flex justify-between items-center mb-2">
            <h1 className="text-3xl font-bold text-slate-900">Community Hub</h1>
            <Button className="bg-primary hover:bg-primary/90">Start Discussion</Button>
          </div>

          {/* Create Post Input */}
          <Card className="border-slate-200 mb-6">
            <CardContent className="p-4 flex gap-4">
              <Avatar>
                <AvatarFallback className="bg-slate-200 text-slate-600">ME</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <input 
                  type="text" 
                  placeholder="Share your fantasy tips or ask a question..." 
                  className="w-full bg-slate-50 border border-slate-200 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
                />
              </div>
            </CardContent>
          </Card>

          {/* Discussion Posts */}
          <div className="space-y-4">
            {discussions.map((post) => (
              <Card key={post.id} className="border-slate-200 hover:border-slate-300 transition-colors">
                <CardHeader className="pb-2 flex flex-row items-start justify-between space-y-0">
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarFallback className="bg-primary/10 text-primary font-bold">{post.avatar}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-sm font-semibold text-slate-900">{post.author}</p>
                      <p className="text-xs text-slate-500">{post.time}</p>
                    </div>
                  </div>
                  <Badge variant="outline" className="text-xs font-normal text-slate-500 border-slate-200">
                    {post.tag}
                  </Badge>
                </CardHeader>
                <CardContent>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{post.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">
                    {post.content}
                  </p>
                  <div className="flex items-center gap-6 text-slate-500 text-sm">
                    <button className="flex items-center gap-2 hover:text-primary transition-colors">
                      <ThumbsUp className="w-4 h-4" /> {post.likes}
                    </button>
                    <button className="flex items-center gap-2 hover:text-primary transition-colors">
                      <MessageSquare className="w-4 h-4" /> {post.comments}
                    </button>
                    <button className="flex items-center gap-2 hover:text-primary transition-colors ml-auto">
                      <Share2 className="w-4 h-4" /> Share
                    </button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Leaderboard Widget */}
          <Card className="border-slate-200 shadow-sm">
            <CardHeader className="pb-2 border-b border-slate-100">
              <CardTitle className="text-lg flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-secondary" /> Top Players
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-4">
              <div className="space-y-4">
                {topPlayers.map((player) => (
                  <div key={player.rank} className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                        player.rank === 1 ? "bg-yellow-100 text-yellow-700" : 
                        player.rank === 2 ? "bg-slate-100 text-slate-700" : 
                        player.rank === 3 ? "bg-orange-100 text-orange-700" : "text-slate-500"
                      }`}>
                        {player.rank}
                      </div>
                      <span className="text-sm font-medium text-slate-700">{player.name}</span>
                    </div>
                    <span className="text-sm font-bold text-primary">{player.points}</span>
                  </div>
                ))}
              </div>
              <Button variant="link" className="w-full mt-4 text-primary h-auto p-0">
                View Full Leaderboard
              </Button>
            </CardContent>
          </Card>

          {/* Featured Tournament Widget */}
          <Card className="bg-primary text-primary-foreground overflow-hidden relative">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 blur-2xl"></div>
            <CardContent className="p-6 relative z-10">
              <div className="flex items-start justify-between mb-4">
                <Award className="w-8 h-8 text-secondary" />
                <Badge className="bg-secondary text-white hover:bg-secondary">Featured</Badge>
              </div>
              <h3 className="text-xl font-bold mb-2">Mega League Finals</h3>
              <p className="text-blue-100 text-sm mb-4">
                The biggest tournament of the month starts in 2 days. Don't miss out!
              </p>
              <Button className="w-full bg-white text-primary hover:bg-blue-50 font-bold">
                Join Now
              </Button>
            </CardContent>
          </Card>
        </div>

      </div>
    </div>
  );
}
