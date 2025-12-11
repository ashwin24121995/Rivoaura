import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { MessageSquare, ThumbsUp, Share2, Search, PlusCircle, TrendingUp } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { toast } from "sonner";

// Mock Forum Data
const FORUM_POSTS = [
  {
    id: 1,
    author: "CricketGuru",
    avatar: "CG",
    title: "IND vs AUS: Pitch Report & Fantasy Tips",
    content: "The pitch at Wankhede is looking flat. Expect a high-scoring game! Spinners might struggle in the second innings due to dew.",
    category: "Match Prediction",
    likes: 145,
    comments: 32,
    time: "2 hours ago"
  },
  {
    id: 2,
    author: "FantasyKing",
    avatar: "FK",
    title: "Why you MUST pick Bumrah today",
    content: "Bumrah's record against Warner is insane. He has dismissed him 4 times in the last 5 matches. Don't drop him!",
    category: "Player Analysis",
    likes: 98,
    comments: 15,
    time: "4 hours ago"
  },
  {
    id: 3,
    author: "Newbie123",
    avatar: "NB",
    title: "Best Captain choice for Mega Contest?",
    content: "I'm confused between Kohli and Smith. Who is a safer bet for today's match?",
    category: "Help & Support",
    likes: 45,
    comments: 28,
    time: "5 hours ago"
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
      title: newPost,
      content: "Just now...",
      category: "General",
      likes: 0,
      comments: 0,
      time: "Just now"
    };

    setPosts([post, ...posts]);
    setNewPost("");
    toast.success("Post published successfully!");
  };

  return (
    <div className="min-h-screen bg-slate-50 pb-20">
      {/* Hero Section */}
      <div className="bg-blue-900 text-white py-12 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/community-fans.jpg')] opacity-10 bg-cover bg-center"></div>
        <div className="container relative z-10">
          <MessageSquare className="w-16 h-16 text-green-400 mx-auto mb-4" />
          <h1 className="text-4xl font-bold mb-2">Community Hub</h1>
          <p className="text-blue-200 max-w-xl mx-auto">
            Discuss strategies, share tips, and connect with thousands of fantasy cricket enthusiasts.
          </p>
        </div>
      </div>

      <div className="container py-8 grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Sidebar - Categories */}
        <div className="lg:col-span-1 space-y-6">
          <Card className="border-slate-200 shadow-sm">
            <CardHeader>
              <CardTitle className="text-lg font-bold">Categories</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              {["All Topics", "Match Prediction", "Player Analysis", "Fantasy Tips", "General Chat"].map((cat) => (
                <Button 
                  key={cat} 
                  variant={selectedCategory === cat ? "secondary" : "ghost"} 
                  className={`w-full justify-start ${selectedCategory === cat ? "bg-blue-100 text-blue-700" : "text-slate-600 hover:text-blue-600 hover:bg-blue-50"}`}
                  onClick={() => setSelectedCategory(cat)}
                >
                  {cat}
                </Button>
              ))}
            </CardContent>
          </Card>

          <Card className="border-slate-200 shadow-sm bg-gradient-to-br from-blue-50 to-white">
            <CardHeader>
              <CardTitle className="text-lg font-bold flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-blue-600" /> Trending
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-sm font-medium text-slate-900 hover:text-blue-600 cursor-pointer">
                #INDvsAUS
                <div className="text-xs text-slate-500">1.2k discussions</div>
              </div>
              <div className="text-sm font-medium text-slate-900 hover:text-blue-600 cursor-pointer">
                #IPL2025
                <div className="text-xs text-slate-500">850 discussions</div>
              </div>
              <div className="text-sm font-medium text-slate-900 hover:text-blue-600 cursor-pointer">
                #FantasyTips
                <div className="text-xs text-slate-500">500 discussions</div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Feed */}
        <div className="lg:col-span-3 space-y-6">
          {/* Create Post */}
          <Card className="border-slate-200 shadow-sm">
            <CardContent className="p-4">
              <div className="flex gap-4">
                <Avatar>
                  <AvatarFallback>ME</AvatarFallback>
                </Avatar>
                <div className="flex-1 space-y-4">
                  <Input 
                    placeholder="Start a discussion..." 
                    value={newPost}
                    onChange={(e) => setNewPost(e.target.value)}
                    className="bg-slate-50 border-slate-200"
                  />
                  <div className="flex justify-between items-center">
                    <div className="flex gap-2">
                      <Button variant="ghost" size="sm" className="text-slate-500">
                        <MessageSquare className="w-4 h-4 mr-2" /> Topic
                      </Button>
                    </div>
                    <Button onClick={handlePost} className="bg-blue-600 hover:bg-blue-700">
                      Post <PlusCircle className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Posts Feed */}
          <Tabs defaultValue="hot" className="w-full">
            <TabsList className="bg-white border border-slate-200 mb-4">
              <TabsTrigger value="hot">Hot</TabsTrigger>
              <TabsTrigger value="new">New</TabsTrigger>
              <TabsTrigger value="top">Top</TabsTrigger>
            </TabsList>

            <TabsContent value="hot" className="space-y-4">
              {filteredPosts.map((post) => (
                <Card key={post.id} className="border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <Avatar>
                          <AvatarImage src={`https://api.dicebear.com/7.x/initials/svg?seed=${post.avatar}`} />
                          <AvatarFallback>{post.avatar}</AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="font-bold text-slate-900">{post.author}</div>
                          <div className="text-xs text-slate-500">{post.time} • {post.category}</div>
                        </div>
                      </div>
                      <Button variant="ghost" size="icon" className="text-slate-400">
                        <Share2 className="w-4 h-4" />
                      </Button>
                    </div>
                    
                    <h3 className="text-lg font-bold text-slate-900 mb-2">{post.title}</h3>
                    <p className="text-slate-600 mb-4 leading-relaxed">{post.content}</p>
                    
                    <div className="flex items-center gap-4">
                      <Button variant="ghost" size="sm" className="text-slate-500 hover:text-blue-600 hover:bg-blue-50">
                        <ThumbsUp className="w-4 h-4 mr-2" /> {post.likes}
                      </Button>
                      <Button variant="ghost" size="sm" className="text-slate-500 hover:text-blue-600 hover:bg-blue-50">
                        <MessageSquare className="w-4 h-4 mr-2" /> {post.comments} Comments
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
