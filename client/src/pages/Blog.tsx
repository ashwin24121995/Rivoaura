import { Calendar, User, ArrowRight, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const blogPosts = [
  {
    id: 1,
    title: "Understanding the Impact of Pitch Conditions on Fantasy Team Selection",
    excerpt: "Pitch conditions can make or break your fantasy team. Learn how to analyze pitch reports, weather forecasts, and historical data to gain a competitive edge in team selection.",
    author: "Elite Squad Editorial",
    date: "December 10, 2024",
    category: "Strategy",
    readTime: "8 min read",
    image: "/images/hero-blog.png"
  },
  {
    id: 2,
    title: "The Science of Captaincy: Why Form Beats Reputation",
    excerpt: "Discover the data-driven approach to selecting your fantasy captain. We analyze 500+ matches to reveal which factors truly predict high-scoring performances.",
    author: "Elite Squad Analytics",
    date: "December 8, 2024",
    category: "Analytics",
    readTime: "12 min read",
    image: "/images/hero-blog.png"
  },
  {
    id: 3,
    title: "Budget Allocation Strategies: The 70-20-10 Rule",
    excerpt: "How should you distribute your 100 credits? Learn the proven budget allocation framework used by top fantasy players to build balanced, high-scoring teams.",
    author: "Elite Squad Coaching",
    date: "December 5, 2024",
    category: "Beginner Guide",
    readTime: "6 min read",
    image: "/images/hero-blog.png"
  },
  {
    id: 4,
    title: "All-Rounders vs. Specialists: The Great Debate",
    excerpt: "Should you load up on all-rounders or stick with specialist batsmen and bowlers? We break down the math behind this age-old fantasy cricket dilemma.",
    author: "Elite Squad Editorial",
    date: "December 3, 2024",
    category: "Strategy",
    readTime: "10 min read",
    image: "/images/hero-blog.png"
  },
  {
    id: 5,
    title: "Reading Between the Lines: How to Interpret Team News",
    excerpt: "Last-minute lineup changes can destroy your carefully crafted team. Learn how to monitor team news, injury reports, and press conferences like a pro.",
    author: "Elite Squad Coaching",
    date: "December 1, 2024",
    category: "Tips & Tricks",
    readTime: "7 min read",
    image: "/images/hero-blog.png"
  },
  {
    id: 6,
    title: "The Psychology of Fantasy Cricket: Avoiding Cognitive Biases",
    excerpt: "Recency bias, confirmation bias, and the sunk cost fallacy—learn how psychological traps sabotage your team selection and how to overcome them.",
    author: "Elite Squad Analytics",
    date: "November 28, 2024",
    category: "Psychology",
    readTime: "9 min read",
    image: "/images/hero-blog.png"
  }
];

const categories = ["All", "Strategy", "Analytics", "Beginner Guide", "Tips & Tricks", "Psychology"];

export default function Blog() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero */}
      <section className="relative w-full min-h-[400px] flex items-center justify-center overflow-hidden bg-slate-900 text-white">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/hero-blog.png" 
            alt="Cricket Analysis Desk" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/90 to-slate-900/50"></div>
        </div>

        <div className="container relative z-10 text-center py-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-500/20 border border-yellow-500/30 text-yellow-400 text-sm font-semibold mb-6">
            <TrendingUp className="w-4 h-4" />
            Cricket Strategy & Analysis
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">The Elite Squad Blog</h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Expert insights, data-driven analysis, and proven strategies to elevate your fantasy cricket game.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white border-b border-slate-200">
        <div className="container">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-6 py-2 rounded-full font-medium transition-colors ${
                  category === "All"
                    ? "bg-yellow-500 text-slate-900"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow border-slate-200">
                <div className="aspect-video w-full overflow-hidden bg-slate-200">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 bg-yellow-100 text-yellow-800 text-xs font-semibold rounded-full">
                      {post.category}
                    </span>
                    <span className="text-xs text-slate-500">{post.readTime}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-slate-900 mb-3 line-clamp-2 hover:text-yellow-600 transition-colors">
                    {post.title}
                  </h3>
                  
                  <p className="text-slate-600 mb-4 line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                    <div className="flex items-center gap-2 text-sm text-slate-500">
                      <User className="w-4 h-4" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-slate-500">
                      <Calendar className="w-4 h-4" />
                      <span>{post.date}</span>
                    </div>
                  </div>
                  
                  <button className="mt-4 w-full flex items-center justify-center gap-2 px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-lg transition-colors font-medium">
                    Read Full Article
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="container max-w-3xl text-center">
          <h2 className="text-4xl font-bold mb-4">Never Miss an Insight</h2>
          <p className="text-xl text-slate-300 mb-8">
            Get weekly fantasy cricket tips, match analysis, and exclusive strategies delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-3 rounded-full text-slate-900 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
            <button className="px-8 py-3 bg-yellow-500 hover:bg-yellow-600 text-slate-900 font-bold rounded-full transition-colors whitespace-nowrap">
              Subscribe
            </button>
          </div>
          <p className="text-sm text-slate-400 mt-4">
            We respect your privacy. Unsubscribe anytime.
          </p>
        </div>
      </section>
    </div>
  );
}
