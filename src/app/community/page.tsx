'use client';

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { MessageSquare, ThumbsUp, Share2, Search, PlusCircle, TrendingUp, ShieldCheck, Award, AlertCircle, Users } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { toast } from "sonner";

// Mock Forum Data
const FORUM_POSTS = [
  {
    id: 1,
    author: "CricketGuru",
    avatar: "CG",
    role: "Elite Analyst",
    title: "IND vs AUS: Pitch Report & Fantasy Tips",
    content: "The pitch at Wankhede is looking flat. Expect a high-scoring game! Spinners might struggle in the second innings due to dew. My key picks for today are Kohli (Must have) and Zampa (Risky but high reward).",
    category: "Match Prediction",
    likes: 145,
    comments: 32,
    time: "2 hours ago",
    isPinned: true
  },
  {
    id: 2,
    author: "FantasyKing",
    avatar: "FK",
    role: "Pro Manager",
    title: "Why you MUST pick Bumrah today",
    content: "Bumrah's record against Warner is insane. He has dismissed him 4 times in the last 5 matches. Don't drop him! Also, consider making him VC if India bowls first.",
    category: "Player Analysis",
    likes: 98,
    comments: 15,
    time: "4 hours ago",
    isPinned: false
  },
  {
    id: 3,
    author: "Newbie123",
    avatar: "NB",
    role: "Rookie",
    title: "Best Captain choice for Mega Contest?",
    content: "I'm confused between Kohli and Smith. Who is a safer bet for today's match? Kohli has better form but Smith loves this ground.",
    category: "Help & Support",
    likes: 45,
    comments: 28,
    time: "5 hours ago",
    isPinned: false
  }
];

export default function Community() {
  const { isAuthenticated } = useAuth();
  const [posts, setPosts] = useState(FORUM_POSTS);
  const [newPost, setNewPost] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Topics");

  const filteredPosts = selectedCategory === "All Topics" 
    ? posts 
    : posts.filter(post => post.category === selectedCategory);

  const handlePost = () => {
    if (!isAuthenticated) {
      toast.error("Please login to post in the community");
      return;
    }
    if (!newPost.trim()) return;

    const post = {
      id: posts.length + 1,
      author: "You",
      avatar: "ME",
      role: "Member",
      title: newPost,
      content: "Just now...",
      category: "General",
      likes: 0,
      comments: 0,
      time: "Just now",
      isPinned: false
    };

    setPosts([post, ...posts]);
    setNewPost("");
    toast.success("Post published successfully!");
  };

  return (
    <div className="min-h-screen bg-slate-50 pb-20 font-sans">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(168,85,247,0.15),transparent_70%)]"></div>
        
        <div className="container relative z-10 max-w-5xl">
          <div className="text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/20 border border-purple-500/30 text-purple-300 text-sm font-medium backdrop-blur-sm">
              <Users className="w-4 h-4" /> 50,000+ Active Members
            </div>
            <h1 className="text-5xl md:text-6xl font-black tracking-tight">The Dugout</h1>
            <p className="text-xl text-purple-200 max-w-2xl mx-auto leading-relaxed">
              Join the conversation. Share your successful strategies, discuss match predictions, 
              and connect with India's most passionate fantasy cricket community.
            </p>
          </div>
        </div>
      </div>

      {/* Explanation Section */}
      <div className="bg-white border-b border-slate-200 py-12">
        <div className="container max-w-5xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Community Guidelines & Features</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Our community is built on respect, knowledge-sharing, and fair play. Learn how to participate effectively.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-2 border-green-200 shadow-lg overflow-hidden">
              <div className="h-2 bg-gradient-to-r from-green-400 to-green-600"></div>
              <CardContent className="p-8 space-y-4">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center">
                    <ShieldCheck className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">Respectful Discussion</h3>
                </div>
                <p className="text-slate-700 leading-relaxed text-sm">
                  Treat all members with respect. No harassment, hate speech, or personal attacks. 
                  Disagree with ideas, not people. Constructive criticism is welcome; toxicity is not.
                </p>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">✓</span>
                    <span>Share strategies and analysis respectfully</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">✓</span>
                    <span>Acknowledge different opinions and playstyles</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 font-bold">✗</span>
                    <span>No trolling, spamming, or inflammatory comments</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-200 shadow-lg overflow-hidden">
              <div className="h-2 bg-gradient-to-r from-blue-400 to-blue-600"></div>
              <CardContent className="p-8 space-y-4">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center">
                    <Award className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">Quality Content</h3>
                </div>
                <p className="text-slate-700 leading-relaxed text-sm">
                  Share valuable insights backed by data and analysis. Avoid low-effort posts like "Who to pick?" 
                  without context. Provide reasoning, statistics, and match conditions in your discussions.
                </p>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">✓</span>
                    <span>Include pitch reports, player stats, and reasoning</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">✓</span>
                    <span>Share match predictions with supporting evidence</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 font-bold">✗</span>
                    <span>No vague questions or one-word responses</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-purple-200 shadow-lg overflow-hidden">
              <div className="h-2 bg-gradient-to-r from-purple-400 to-purple-600"></div>
              <CardContent className="p-8 space-y-4">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center">
                    <AlertCircle className="w-6 h-6 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">No Misinformation</h3>
                </div>
                <p className="text-slate-700 leading-relaxed text-sm">
                  Accuracy matters. Don't spread false injury reports, fake team news, or unverified rumors. 
                  If you're speculating, clearly label it as opinion, not fact. Cite sources when possible.
                </p>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600 font-bold">✓</span>
                    <span>Verify information before sharing team news</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600 font-bold">✓</span>
                    <span>Label predictions as opinions, not guarantees</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 font-bold">✗</span>
                    <span>No fake injury reports or misleading clickbait</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-orange-200 shadow-lg overflow-hidden">
              <div className="h-2 bg-gradient-to-r from-orange-400 to-orange-600"></div>
              <CardContent className="p-8 space-y-4">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center">
                    <MessageSquare className="w-6 h-6 text-orange-600" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">Helpful Participation</h3>
                </div>
                <p className="text-slate-700 leading-relaxed text-sm">
                  Help newcomers learn the game. Answer questions patiently. Share your knowledge generously. 
                  The community grows stronger when experienced players mentor beginners.
                </p>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li className="flex items-start gap-2">
                    <span className="text-orange-600 font-bold">✓</span>
                    <span>Answer beginner questions with patience</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-600 font-bold">✓</span>
                    <span>Share successful strategies and lessons learned</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 font-bold">✗</span>
                    <span>Don't mock or belittle less experienced players</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="mt-10 bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-8 border-2 border-slate-200">
            <h3 className="font-bold text-slate-900 text-xl mb-4 flex items-center gap-3">
              <TrendingUp className="w-6 h-6 text-blue-600" />
              How to Get the Most from Community
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-slate-700">
              <div>
                <h4 className="font-bold text-slate-900 mb-2">Before Posting:</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600">•</span>
                    <span>Search if your question has been answered already</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600">•</span>
                    <span>Provide context: match details, your team, specific doubts</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600">•</span>
                    <span>Use clear, descriptive titles for your posts</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-slate-900 mb-2">When Responding:</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-green-600">•</span>
                    <span>Explain your reasoning, don't just give answers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600">•</span>
                    <span>Acknowledge uncertainty when you're not 100% sure</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600">•</span>
                    <span>Upvote helpful posts to surface quality content</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container py-8 grid grid-cols-1 lg:grid-cols-12 gap-8 -mt-8 relative z-20">
        {/* Sidebar - Categories & Guidelines */}
        <div className="lg:col-span-3 space-y-6">
          <Card className="border-slate-200 shadow-lg">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg font-bold">Discussion Topics</CardTitle>
            </CardHeader>
            <CardContent className="space-y-1 p-2">
              {["All Topics", "Match Prediction", "Player Analysis", "Fantasy Tips", "General Chat", "Help & Support"].map((cat) => (
                <Button 
                  key={cat} 
                  variant={selectedCategory === cat ? "secondary" : "ghost"} 
                  className={`w-full justify-start font-medium ${selectedCategory === cat ? "bg-blue-50 text-blue-700" : "text-slate-600 hover:text-blue-600 hover:bg-blue-50"}`}
                  onClick={() => setSelectedCategory(cat)}
                >
                  {cat}
                </Button>
              ))}
            </CardContent>
          </Card>

          <Card className="border-slate-200 shadow-sm bg-gradient-to-br from-amber-50 to-white border-l-4 border-l-amber-400">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-bold flex items-center gap-2 text-amber-800">
                <ShieldCheck className="w-4 h-4" /> Community Guidelines
              </CardTitle>
            </CardHeader>
            <CardContent className="text-xs text-slate-600 space-y-2">
              <p>1. Be respectful to all members.</p>
              <p>2. No spam or self-promotion.</p>
              <p>3. Keep discussions relevant to cricket.</p>
              <p>4. Report inappropriate content.</p>
            </CardContent>
          </Card>
        </div>

        {/* Main Feed */}
        <div className="lg:col-span-6 space-y-6">
          {/* Create Post */}
          <Card className="border-slate-200 shadow-md">
            <CardContent className="p-4">
              <div className="flex gap-4">
                <Avatar className="w-10 h-10 border border-slate-200">
                  <AvatarFallback className="bg-slate-100 text-slate-600">ME</AvatarFallback>
                </Avatar>
                <div className="flex-1 space-y-3">
                  <Input 
                    placeholder="What's on your mind? Share a tip or ask a question..." 
                    value={newPost}
                    onChange={(e) => setNewPost(e.target.value)}
                    className="bg-slate-50 border-slate-200 focus-visible:ring-blue-500"
                  />
                  <div className="flex justify-between items-center">
                    <div className="flex gap-2">
                      <Button variant="ghost" size="sm" className="text-slate-500 h-8 text-xs">
                        <MessageSquare className="w-3 h-3 mr-1.5" /> Add Topic
                      </Button>
                    </div>
                    <Button onClick={handlePost} size="sm" className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6">
                      Post
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Posts Feed */}
          <Tabs defaultValue="hot" className="w-full">
            <div className="flex items-center justify-between mb-4">
              <TabsList className="bg-white border border-slate-200 shadow-sm">
                <TabsTrigger value="hot" className="data-[state=active]:bg-slate-100">Hot</TabsTrigger>
                <TabsTrigger value="new" className="data-[state=active]:bg-slate-100">New</TabsTrigger>
                <TabsTrigger value="top" className="data-[state=active]:bg-slate-100">Top</TabsTrigger>
              </TabsList>
              <div className="relative w-48 hidden sm:block">
                <Search className="absolute left-2 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <Input placeholder="Search discussions..." className="pl-8 h-9 text-xs bg-white border-slate-200" />
              </div>
            </div>

            <TabsContent value="hot" className="space-y-4">
              {filteredPosts.map((post) => (
                <Card key={post.id} className="border-slate-200 shadow-sm hover:shadow-md transition-all duration-200 group">
                  <CardContent className="p-5">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <Avatar className="border border-slate-100">
                          <AvatarImage src={`https://api.dicebear.com/7.x/initials/svg?seed=${post.avatar}`} />
                          <AvatarFallback>{post.avatar}</AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="font-bold text-slate-900 text-sm">{post.author}</span>
                            {post.role === "Elite Analyst" && (
                              <Badge variant="secondary" className="text-[10px] h-4 px-1 bg-blue-50 text-blue-600 border-blue-100">
                                {post.role}
                              </Badge>
                            )}
                          </div>
                          <div className="text-xs text-slate-500 flex items-center gap-1">
                            {post.time} • <span className="text-blue-600 font-medium">{post.category}</span>
                          </div>
                        </div>
                      </div>
                      {post.isPinned && (
                        <Badge variant="outline" className="text-[10px] border-amber-200 bg-amber-50 text-amber-700 gap-1">
                          <Award className="w-3 h-3" /> Pinned
                        </Badge>
                      )}
                    </div>
                    
                    <h3 className="text-base font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors cursor-pointer">
                      {post.title}
                    </h3>
                    <p className="text-sm text-slate-600 mb-4 leading-relaxed">
                      {post.content}
                    </p>
                    
                    <div className="flex items-center gap-4 pt-3 border-t border-slate-50">
                      <Button variant="ghost" size="sm" className="text-slate-500 hover:text-blue-600 hover:bg-blue-50 h-8 px-2">
                        <ThumbsUp className="w-4 h-4 mr-1.5" /> {post.likes}
                      </Button>
                      <Button variant="ghost" size="sm" className="text-slate-500 hover:text-blue-600 hover:bg-blue-50 h-8 px-2">
                        <MessageSquare className="w-4 h-4 mr-1.5" /> {post.comments} Comments
                      </Button>
                      <Button variant="ghost" size="sm" className="text-slate-500 hover:text-blue-600 hover:bg-blue-50 h-8 px-2 ml-auto">
                        <Share2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>
          </Tabs>
        </div>

        {/* Right Sidebar - Trending & Stats */}
        <div className="lg:col-span-3 space-y-6">
          <Card className="border-slate-200 shadow-sm bg-white">
            <CardHeader className="pb-2 border-b border-slate-50">
              <CardTitle className="text-sm font-bold flex items-center gap-2 text-slate-800">
                <TrendingUp className="w-4 h-4 text-emerald-500" /> Trending Topics
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 pt-4">
              <div className="group cursor-pointer">
                <div className="text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors">#INDvsAUS</div>
                <div className="text-xs text-slate-500">1,240 discussions today</div>
              </div>
              <div className="group cursor-pointer">
                <div className="text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors">#IPL2025</div>
                <div className="text-xs text-slate-500">850 discussions today</div>
              </div>
              <div className="group cursor-pointer">
                <div className="text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors">#FantasyTips</div>
                <div className="text-xs text-slate-500">500 discussions today</div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-slate-200 shadow-sm bg-slate-900 text-white">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-bold flex items-center gap-2">
                <Award className="w-4 h-4 text-yellow-400" /> Top Contributors
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 pt-2">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-xs font-bold">
                    {i}
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-medium">User_{900+i}</div>
                    <div className="text-xs text-slate-400">{500 - (i*50)} Reputation</div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
