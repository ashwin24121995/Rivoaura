import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Target, Shield, Heart, Trophy, Globe, Zap, Award, Building2, Scale, CheckCircle2, BookOpen, TrendingUp, Sparkles, AlertCircle, Lock, UserCheck, MapPin, Calculator, Brain, LineChart, Clock } from "lucide-react";

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(59,130,246,0.1),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(16,185,129,0.1),transparent_50%)]"></div>
          <div className="absolute inset-0" style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.02\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
          }}></div>
        </div>
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <Badge className="bg-secondary/20 text-secondary border-secondary/30 backdrop-blur-sm px-4 py-1.5 text-sm font-medium">
              🏏 Built for Cricket Lovers, By Cricket Lovers
            </Badge>
            <h1 className="text-5xl md:text-7xl font-black tracking-tight">
              About <span className="bg-gradient-to-r from-secondary via-green-400 to-blue-400 bg-clip-text text-transparent">RIVOAURA</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 leading-relaxed max-w-3xl mx-auto">
              India's most transparent free-to-play fantasy cricket platform, dedicated to education, 
              skill development, and pure love for the game.
            </p>
          </div>
        </div>
      </div>

      {/* Who We Are Section - Expanded */}
      <div className="container py-24">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Who We Are</h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-secondary to-blue-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="space-y-8">
            <div className="prose prose-lg max-w-none text-slate-700 leading-relaxed space-y-6">
              <p className="text-xl text-slate-800 font-medium">
                <strong className="text-secondary">RIVOAURA</strong> is not just another fantasy cricket platform—we are a movement 
                to democratize fantasy sports education in India. We believe that fantasy cricket is more than entertainment; 
                it is a powerful tool for learning cricket strategy, understanding player analytics, and developing critical thinking skills.
              </p>
              
              <p>
                Unlike traditional fantasy platforms that operate on a pay-to-play model, we have built a completely free ecosystem 
                where users can experience the thrill of team management, strategic decision-making, and competitive gameplay 
                without any financial pressure. Our platform is designed for cricket enthusiasts who want to deepen their understanding 
                of the game, test their analytical skills, and compete purely for glory and recognition.
              </p>
              
              <p>
                We are backed by private investors who share our vision of fantasy sports as an educational medium. This funding model 
                allows us to operate without charging users, selling personal data, or displaying intrusive advertisements. Every feature, 
                every design choice, and every policy decision is made with one goal in mind: <strong>to create the most authentic, 
                transparent, and user-friendly fantasy cricket experience in India.</strong>
              </p>
            </div>

            {/* Key Statistics */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              {[
                { number: "100%", label: "Free Forever", icon: <Trophy className="w-6 h-6" /> },
                { number: "₹0", label: "Entry Fees", icon: <Shield className="w-6 h-6" /> },
                { number: "18+", label: "Age Verified", icon: <UserCheck className="w-6 h-6" /> },
              ].map((stat, i) => (
                <Card key={i} className="border-2 border-slate-200 shadow-lg text-center">
                  <CardContent className="p-8">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center mx-auto mb-4 text-blue-600">
                      {stat.icon}
                    </div>
                    <div className="text-4xl font-black text-slate-900 mb-2">{stat.number}</div>
                    <div className="text-sm font-medium text-slate-600">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Company Information - Premium Card Design */}
      <div className="bg-gradient-to-br from-slate-50 to-blue-50/30 py-24 border-y border-slate-200">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <Building2 className="w-16 h-16 text-secondary mx-auto mb-6" />
              <h2 className="text-4xl font-bold text-slate-900 mb-4">Company Information</h2>
              <p className="text-lg text-slate-600">Complete transparency about who we are and how we operate</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Legal Entity Card */}
              <Card className="border-2 border-slate-200 shadow-xl hover:shadow-2xl transition-shadow duration-300 overflow-hidden">
                <div className="h-2 bg-gradient-to-r from-blue-500 to-blue-600"></div>
                <CardContent className="p-8 space-y-4">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center">
                      <Scale className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900">Legal Entity</h3>
                  </div>
                  <p className="text-slate-700 leading-relaxed">
                    RIVOAURA is owned and operated by <strong className="text-slate-900">RIVOAURA PRIVATE LIMITED</strong>, 
                    a legally registered Indian private limited company incorporated under the Companies Act, 2013.
                  </p>
                  <div className="pt-4 border-t border-slate-200">
                    <p className="text-sm font-semibold text-slate-600 mb-2">Registered Office:</p>
                    <p className="text-slate-700">
                      West Delhi<br />
                      Delhi, India
                    </p>
                  </div>
                  <div className="bg-blue-50 rounded-lg p-4 mt-4">
                    <p className="text-sm text-slate-700">
                      <strong>What this means:</strong> We are a legitimate, legally recognized business entity in India, 
                      subject to all corporate laws and regulations. Our registration ensures accountability and legal protection for users.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Regulatory Status Card */}
              <Card className="border-2 border-slate-200 shadow-xl hover:shadow-2xl transition-shadow duration-300 overflow-hidden">
                <div className="h-2 bg-gradient-to-r from-green-500 to-green-600"></div>
                <CardContent className="p-8 space-y-4">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center">
                      <CheckCircle2 className="w-6 h-6 text-green-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900">Regulatory Status</h3>
                  </div>
                  <p className="text-slate-700 leading-relaxed mb-6">
                    We operate in full compliance with Indian laws governing skill-based games. Fantasy cricket is recognized 
                    as a <strong className="text-green-700">"Game of Skill"</strong> under the Public Gambling Act, 1867, 
                    and various state-specific regulations.
                  </p>
                  <div className="space-y-3">
                    {[
                      "Compliant with Public Gambling Act, 1867",
                      "Adheres to state-specific gaming regulations",
                      "Zero real money transactions",
                      "Regular legal audits conducted"
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-slate-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Mission, Vision & Values */}
      <div className="container py-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Our Mission, Vision & Values</h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            The principles that guide everything we do and the future we're building together
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Mission */}
          <Card className="border-none shadow-2xl bg-white overflow-hidden group hover:-translate-y-2 transition-all duration-300">
            <div className="h-3 bg-gradient-to-r from-blue-500 to-blue-600 w-full"></div>
            <CardContent className="pt-10 pb-10 px-8 space-y-4">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
                <Target className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">Our Mission</h3>
              <p className="text-slate-600 leading-relaxed">
                To make fantasy cricket accessible to every Indian cricket fan, regardless of their financial background, 
                by providing a completely free, educational, and skill-based platform that fosters strategic thinking, 
                analytical skills, and a deeper appreciation for the game.
              </p>
            </CardContent>
          </Card>

          {/* Vision */}
          <Card className="border-none shadow-2xl bg-white overflow-hidden group hover:-translate-y-2 transition-all duration-300">
            <div className="h-3 bg-gradient-to-r from-green-500 to-green-600 w-full"></div>
            <CardContent className="pt-10 pb-10 px-8 space-y-4">
              <div className="w-16 h-16 bg-gradient-to-br from-green-50 to-green-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
                <Sparkles className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">Our Vision</h3>
              <p className="text-slate-600 leading-relaxed">
                To become India's most trusted and beloved fantasy sports platform, recognized not for prize money or gambling, 
                but for our commitment to education, transparency, and building a community of informed, strategic cricket enthusiasts.
              </p>
            </CardContent>
          </Card>

          {/* Promise */}
          <Card className="border-none shadow-2xl bg-white overflow-hidden group hover:-translate-y-2 transition-all duration-300">
            <div className="h-3 bg-gradient-to-r from-purple-500 to-purple-600 w-full"></div>
            <CardContent className="pt-10 pb-10 px-8 space-y-4">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
                <Award className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">Our Promise</h3>
              <p className="text-slate-600 leading-relaxed">
                We promise 100% transparency in our scoring, zero tolerance for bots or cheating, and a commitment to 
                keeping the platform free for all users, forever. Your trust is our most valuable asset.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Core Values - Enhanced Grid */}
      <div className="bg-slate-900 py-24 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_70%)]"></div>
        <div className="container relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Core Values</h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              The fundamental beliefs that shape our culture and drive our decisions
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { 
                icon: <Shield className="w-10 h-10" />, 
                title: "Integrity First", 
                desc: "We operate with complete honesty and transparency. No hidden fees, no data selling, no misleading promises. What you see is exactly what you get.",
                color: "from-blue-500 to-blue-600"
              },
              { 
                icon: <Users className="w-10 h-10" />, 
                title: "User-Centric Design", 
                desc: "Every feature is built with the user in mind. We prioritize ease of use, accessibility, and a seamless experience over flashy gimmicks.",
                color: "from-green-500 to-green-600"
              },
              { 
                icon: <BookOpen className="w-10 h-10" />, 
                title: "Education Over Profit", 
                desc: "We measure success not by revenue, but by how many users learn, improve, and develop a deeper love for cricket through our platform.",
                color: "from-purple-500 to-purple-600"
              },
              { 
                icon: <Shield className="w-10 h-10" />, 
                title: "Safety & Compliance", 
                desc: "We strictly adhere to all legal requirements, age restrictions, and state regulations to ensure a safe, responsible gaming environment.",
                color: "from-red-500 to-red-600"
              },
              { 
                icon: <TrendingUp className="w-10 h-10" />, 
                title: "Innovation & Quality", 
                desc: "We continuously improve our platform with cutting-edge features, real-time analytics, and a polished user experience.",
                color: "from-orange-500 to-orange-600"
              },
              { 
                icon: <Heart className="w-10 h-10" />, 
                title: "Community Building", 
                desc: "We foster a supportive, respectful community where users can share strategies, celebrate victories, and learn from each other.",
                color: "from-pink-500 to-pink-600"
              },
            ].map((value, i) => (
              <Card key={i} className="bg-slate-800/50 border-slate-700 hover:bg-slate-800 transition-all duration-300 hover:-translate-y-1 overflow-hidden group">
                <CardContent className="p-8 space-y-4">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${value.color} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform`}>
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white">{value.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{value.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* What Makes Us Different */}
      <div className="container py-24">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">What Makes Us Different</h2>
            <p className="text-lg text-slate-600">
              In a crowded fantasy sports market, we stand apart through our unwavering commitment to transparency, education, and user welfare
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: <Trophy className="w-8 h-8 text-green-600" />,
                title: "100% Free Forever",
                desc: "We do not charge entry fees, subscription costs, or hidden charges of any kind. Our platform is funded by private investors who believe in fantasy sports as education, not gambling. This means you can create unlimited teams, join unlimited contests, and compete without ever spending a single rupee.",
                gradient: "from-green-500 to-green-600"
              },
              {
                icon: <Shield className="w-8 h-8 text-blue-600" />,
                title: "Zero Financial Risk",
                desc: "There is no real money involved at any stage. You cannot deposit money, you cannot win money, and you cannot lose money. This eliminates the psychological pressure, addiction risks, and financial stress associated with real-money gaming. You play purely for skill development and competitive satisfaction.",
                gradient: "from-blue-500 to-blue-600"
              },
              {
                icon: <BookOpen className="w-8 h-8 text-purple-600" />,
                title: "Educational Focus",
                desc: "Every feature is designed to teach. Our detailed point system explanations, player statistics, match analysis articles, and strategy guides help users understand cricket at a deeper level. We provide context for every decision, helping you learn why certain players perform better in specific conditions.",
                gradient: "from-purple-500 to-purple-600"
              },
              {
                icon: <CheckCircle2 className="w-8 h-8 text-orange-600" />,
                title: "Complete Transparency",
                desc: "We openly share our ownership details, funding model, legal compliance status, and operational practices. There are no secret algorithms, hidden terms, or unclear policies. Every rule, every point calculation, and every decision-making process is documented and accessible to all users.",
                gradient: "from-orange-500 to-orange-600"
              },
            ].map((item, i) => (
              <Card key={i} className="border-2 border-slate-200 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
                <div className={`h-2 bg-gradient-to-r ${item.gradient}`}></div>
                <CardContent className="p-8 space-y-4">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-14 h-14 rounded-xl bg-slate-50 flex items-center justify-center group-hover:scale-110 transition-transform">
                      {item.icon}
                    </div>
                    <h3 className="text-xl font-bold text-slate-900">{item.title}</h3>
                  </div>
                  <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* What We Focus On - NEW DETAILED SECTION */}
      <div className="bg-gradient-to-br from-blue-50 to-slate-50 py-24 border-y border-slate-200">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">What We Focus On</h2>
              <p className="text-lg text-slate-600">
                Our platform is built around four core pillars that define the RIVOAURA experience
              </p>
            </div>

            <div className="space-y-8">
              {[
                {
                  icon: <Brain className="w-10 h-10 text-blue-600" />,
                  title: "Skill Development",
                  color: "blue",
                  points: [
                    {
                      subtitle: "Critical Thinking",
                      text: "Learn to analyze player form, pitch conditions, weather forecasts, and head-to-head records to make informed team selection decisions."
                    },
                    {
                      subtitle: "Data Analysis",
                      text: "Develop the ability to interpret cricket statistics, understand player performance trends, and identify value picks that others might overlook."
                    },
                    {
                      subtitle: "Strategic Planning",
                      text: "Master the art of balancing your team within credit constraints, choosing the right captain and vice-captain, and adapting strategies for different match formats."
                    },
                    {
                      subtitle: "Risk Management",
                      text: "Learn to make calculated decisions under uncertainty—a valuable life skill that extends far beyond fantasy cricket."
                    }
                  ]
                },
                {
                  icon: <Users className="w-10 h-10 text-green-600" />,
                  title: "Community Engagement",
                  color: "green",
                  points: [
                    {
                      subtitle: "Discussion Forums",
                      text: "Participate in active discussions about player form, match predictions, and team strategies with fellow cricket enthusiasts."
                    },
                    {
                      subtitle: "Leaderboards & Recognition",
                      text: "Compete for top positions on our leaderboards and earn digital badges that recognize your strategic prowess and cricket knowledge."
                    },
                    {
                      subtitle: "Healthy Competition",
                      text: "Experience the thrill of competition without the toxicity of money-driven platforms. Here, respect and sportsmanship come first."
                    },
                    {
                      subtitle: "Knowledge Sharing",
                      text: "Learn from experienced players, share your own insights, and grow together as a community of cricket strategists."
                    }
                  ]
                },
                {
                  icon: <Scale className="w-10 h-10 text-purple-600" />,
                  title: "Fair Competition",
                  color: "purple",
                  points: [
                    {
                      subtitle: "Anti-Cheating Systems",
                      text: "Advanced algorithms detect and prevent multiple accounts, bot usage, and other forms of cheating to ensure fair play."
                    },
                    {
                      subtitle: "Transparent Scoring",
                      text: "Our point system is fully documented and publicly accessible. Every run, wicket, and catch has a clear point value with no hidden calculations."
                    },
                    {
                      subtitle: "Level Playing Field",
                      text: "Everyone starts with the same credit budget and access to the same player pool. Success is determined purely by your cricket knowledge and strategic thinking."
                    },
                    {
                      subtitle: "Zero Pay-to-Win",
                      text: "Unlike other platforms, you cannot buy advantages. Premium features, if introduced, will never affect contest outcomes."
                    }
                  ]
                },
                {
                  icon: <Shield className="w-10 h-10 text-red-600" />,
                  title: "Responsible Gaming",
                  color: "red",
                  points: [
                    {
                      subtitle: "No Financial Incentives",
                      text: "By eliminating real money, we remove the primary driver of gaming addiction and compulsive behavior."
                    },
                    {
                      subtitle: "Age Verification",
                      text: "Strict 18+ age requirement ensures that only adults with the maturity to engage responsibly can access the platform."
                    },
                    {
                      subtitle: "State Compliance",
                      text: "We proactively block access from states with restrictive gaming laws, even when not legally required, to promote responsible operations."
                    },
                    {
                      subtitle: "Educational Approach",
                      text: "Our platform is designed for learning and entertainment, not for generating income or replacing employment."
                    }
                  ]
                }
              ].map((section, i) => (
                <Card key={i} className="border-2 border-slate-200 shadow-xl overflow-hidden">
                  <div className={`h-3 bg-gradient-to-r from-${section.color}-500 to-${section.color}-600`}></div>
                  <CardContent className="p-10 space-y-6">
                    <div className="flex items-center gap-4 mb-6">
                      <div className={`w-16 h-16 rounded-2xl bg-${section.color}-50 flex items-center justify-center`}>
                        {section.icon}
                      </div>
                      <h3 className="text-3xl font-bold text-slate-900">{section.title}</h3>
                    </div>
                    <div className="space-y-6">
                      {section.points.map((point, j) => (
                        <div key={j} className="flex gap-4">
                          <div className="flex-shrink-0 w-2 h-2 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 mt-2"></div>
                          <div>
                            <h4 className="font-bold text-slate-900 mb-1">{point.subtitle}</h4>
                            <p className="text-slate-600 leading-relaxed">{point.text}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Business Model Transparency */}
      <div className="container py-24">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <Globe className="w-16 h-16 text-blue-600 mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Business Model Transparency</h2>
            <p className="text-lg text-slate-600">
              We believe users deserve to know exactly how we operate and sustain our platform
            </p>
          </div>

          <div className="space-y-12">
            {/* How Do We Make Money */}
            <Card className="border-2 border-blue-200 shadow-xl overflow-hidden">
              <div className="h-3 bg-gradient-to-r from-blue-500 to-blue-600"></div>
              <CardContent className="p-10 space-y-6">
                <h3 className="text-3xl font-bold text-slate-900 mb-4">How Do We Make Money?</h3>
                <p className="text-xl text-slate-700 font-medium">
                  <strong className="text-blue-600">Short answer: We don't.</strong> RIVOAURA operates on a <strong>pre-funded model</strong>. 
                  We are backed by private investors who believe in the educational and social value of fantasy sports. These investors have 
                  provided capital to build and maintain the platform without expecting immediate financial returns.
                </p>
                
                <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                  <p className="font-semibold text-slate-900 mb-4">We do NOT generate revenue through:</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      "Entry fees or subscription charges (we're 100% free)",
                      "Selling user data to third parties (your privacy is sacred)",
                      "Displaying advertisements (clean, distraction-free experience)",
                      "In-app purchases or premium features (everyone gets full access)"
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                          <span className="text-red-600 text-sm font-bold">✕</span>
                        </div>
                        <span className="text-slate-700 text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-blue-50 rounded-xl p-6 border border-blue-200 mt-6">
                  <h4 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                    <AlertCircle className="w-5 h-5 text-blue-600" />
                    Why This Matters to You
                  </h4>
                  <p className="text-slate-700 leading-relaxed">
                    Because we don't rely on user payments, we have no incentive to manipulate contests, push addictive features, 
                    or compromise your experience for profit. Our success is measured by user satisfaction and learning outcomes, 
                    not revenue. This alignment of interests ensures that our platform truly serves your needs.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Why Would Investors Fund */}
            <Card className="border-2 border-green-200 shadow-xl overflow-hidden">
              <div className="h-3 bg-gradient-to-r from-green-500 to-green-600"></div>
              <CardContent className="p-10 space-y-6">
                <h3 className="text-3xl font-bold text-slate-900 mb-4">Why Would Investors Fund a Free Platform?</h3>
                <p className="text-lg text-slate-700 leading-relaxed">
                  Our investors share a vision of <strong className="text-green-700">fantasy sports as education, not gambling</strong>. 
                  They recognize that traditional fantasy platforms have created a negative perception of the industry due to aggressive 
                  monetization, gambling-like mechanics, and predatory practices that exploit users' competitive instincts for profit.
                </p>
                
                <div className="space-y-4">
                  <p className="font-semibold text-slate-900">By funding a completely free platform, they aim to:</p>
                  {[
                    {
                      title: "Prove a Better Model Exists",
                      text: "Demonstrate that fantasy sports can be educational, socially beneficial, and financially sustainable without exploiting users."
                    },
                    {
                      title: "Build a Values-Driven Community",
                      text: "Create a large, engaged user base that values skill, knowledge, and fair play over monetary rewards."
                    },
                    {
                      title: "Restore Industry Reputation",
                      text: "Change the public perception of fantasy sports from 'online gambling' to 'sports education and strategy development.'"
                    },
                    {
                      title: "Long-Term Vision",
                      text: "In the future, explore ethical monetization models (such as optional premium analytics tools) with full user consent and transparency—but the core experience will always remain free."
                    }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4 bg-green-50 rounded-lg p-4">
                      <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-bold text-slate-900 mb-1">{item.title}</h4>
                        <p className="text-slate-700 text-sm">{item.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Will You Ever Charge */}
            <Card className="border-2 border-purple-200 shadow-xl overflow-hidden">
              <div className="h-3 bg-gradient-to-r from-purple-500 to-purple-600"></div>
              <CardContent className="p-10 space-y-6">
                <h3 className="text-3xl font-bold text-slate-900 mb-4">Will You Ever Charge Users?</h3>
                <div className="bg-purple-50 border-2 border-purple-200 rounded-xl p-6">
                  <p className="text-xl font-bold text-purple-900 mb-3">
                    Our core platform will always remain 100% free.
                  </p>
                  <p className="text-slate-700 leading-relaxed mb-4">
                    We are committed to ensuring that anyone can create teams, join contests, and compete without paying. 
                    This is not a temporary promotional offer—it is a permanent commitment backed by our investors.
                  </p>
                  <p className="text-slate-700 leading-relaxed">
                    However, in the future, we may introduce <strong>optional premium features</strong> (such as advanced 
                    analytics dashboards, historical data exports, or exclusive educational content) that users can choose 
                    to purchase. These features will be clearly labeled as optional, and they will never provide competitive 
                    advantages in contests. The core fantasy experience—team creation, contest participation, and leaderboard 
                    competition—will never be paywalled.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Government Compliance & Safety - EXPANDED */}
      <div className="bg-slate-900 py-24 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_70%)]"></div>
        <div className="container relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <Lock className="w-16 h-16 text-secondary mx-auto mb-6" />
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Government Compliance & Safety</h2>
              <p className="text-xl text-slate-400">
                We operate in strict accordance with Indian laws and regulations to ensure a safe, legal, and responsible gaming environment
              </p>
            </div>

            <div className="space-y-8">
              {/* Age Restriction */}
              <Card className="bg-slate-800/50 border-slate-700">
                <CardContent className="p-10 space-y-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-14 h-14 rounded-xl bg-red-500/20 flex items-center justify-center">
                      <UserCheck className="w-7 h-7 text-red-400" />
                    </div>
                    <h3 className="text-3xl font-bold text-white">Age Restriction (18+)</h3>
                  </div>
                  <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-6">
                    <p className="text-red-200 font-semibold text-lg mb-3">
                      Only users who are 18 years of age or older are permitted to use RIVOAURA.
                    </p>
                    <p className="text-slate-300 leading-relaxed">
                      This is a strict legal requirement under Indian law. During registration, users must provide their date of birth, 
                      and our system automatically rejects accounts for individuals under 18. We also implement additional verification 
                      measures to prevent age falsification.
                    </p>
                  </div>
                  <div className="space-y-3">
                    <p className="font-semibold text-white">Why this restriction exists:</p>
                    <p className="text-slate-300 leading-relaxed">
                      Fantasy sports involve strategic decision-making, competitive pressure, and analytical thinking that are considered 
                      appropriate only for adults. This age limit ensures that users have the emotional maturity, legal capacity, and 
                      cognitive development to engage responsibly with the platform. It also protects minors from potential risks associated 
                      with competitive gaming environments.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* State Restrictions */}
              <Card className="bg-slate-800/50 border-slate-700">
                <CardContent className="p-10 space-y-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-14 h-14 rounded-xl bg-orange-500/20 flex items-center justify-center">
                      <MapPin className="w-7 h-7 text-orange-400" />
                    </div>
                    <h3 className="text-3xl font-bold text-white">State Restrictions</h3>
                  </div>
                  <div className="bg-orange-500/10 border border-orange-500/30 rounded-lg p-6">
                    <p className="text-orange-200 font-semibold text-lg mb-4">
                      RIVOAURA is NOT available to residents of the following Indian states:
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {["Andhra Pradesh", "Assam", "Nagaland", "Odisha", "Sikkim", "Telangana"].map((state, i) => (
                        <div key={i} className="flex items-center gap-2 bg-slate-800/50 rounded-lg px-4 py-2">
                          <div className="w-2 h-2 rounded-full bg-orange-400"></div>
                          <span className="text-white text-sm font-medium">{state}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="space-y-4">
                    <p className="font-semibold text-white">Why these restrictions exist:</p>
                    <p className="text-slate-300 leading-relaxed">
                      These states have specific laws that prohibit or heavily regulate online games of skill, including fantasy sports. 
                      To ensure full legal compliance and avoid any regulatory ambiguity, we have proactively blocked access from these regions.
                    </p>
                    <p className="text-slate-300 leading-relaxed">
                      During registration, users must select their state of residence, and accounts from restricted states are automatically 
                      rejected. We also use IP-based geo-blocking to prevent access attempts from these regions. This approach protects both 
                      our users and our platform from potential legal complications.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Regulatory Compliance */}
              <Card className="bg-slate-800/50 border-slate-700">
                <CardContent className="p-10 space-y-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-14 h-14 rounded-xl bg-green-500/20 flex items-center justify-center">
                      <Scale className="w-7 h-7 text-green-400" />
                    </div>
                    <h3 className="text-3xl font-bold text-white">Regulatory Compliance</h3>
                  </div>
                  <p className="text-slate-300 leading-relaxed">
                    Fantasy cricket is legally classified as a <strong className="text-green-400">"Game of Skill"</strong> under the 
                    Public Gambling Act, 1867, and is permitted in most Indian states. Unlike games of chance (such as lotteries, slot machines, 
                    or roulette), fantasy cricket requires knowledge, strategy, analytical thinking, and cricket expertise to succeed.
                  </p>
                  <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-6">
                    <p className="font-semibold text-white mb-4">Our compliance measures include:</p>
                    <div className="space-y-3">
                      {[
                        "Strict age verification during registration with document validation",
                        "Geo-blocking and IP filtering for restricted states",
                        "Zero real money transactions (eliminating gambling classification)",
                        "Transparent point system and contest rules publicly documented",
                        "Regular legal audits by independent law firms to ensure ongoing compliance",
                        "Immediate response to regulatory changes and policy updates"
                      ].map((item, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                          <span className="text-slate-300">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Zero Financial Risk */}
              <Card className="bg-slate-800/50 border-slate-700">
                <CardContent className="p-10 space-y-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-14 h-14 rounded-xl bg-blue-500/20 flex items-center justify-center">
                      <Shield className="w-7 h-7 text-blue-400" />
                    </div>
                    <h3 className="text-3xl font-bold text-white">Zero Financial Risk</h3>
                  </div>
                  <p className="text-slate-300 leading-relaxed mb-6">
                    We have deliberately designed our platform to eliminate all financial risk and pressure. There is <strong className="text-blue-400">no real money involved at any stage</strong> of the RIVOAURA experience. This is not a marketing claim—it is a fundamental design principle that shapes every aspect of our platform.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      {
                        title: "No Deposits",
                        text: "You cannot add money to your account. There is no wallet, no payment gateway, and no option to purchase credits or coins."
                      },
                      {
                        title: "No Withdrawals",
                        text: "You cannot win money. Even if you top the leaderboard, you receive digital badges and recognition—not cash prizes."
                      },
                      {
                        title: "No Entry Fees",
                        text: "Every contest is free to join. You can create unlimited teams and participate in unlimited contests without spending a rupee."
                      },
                      {
                        title: "No Psychological Pressure",
                        text: "Because there's no money at stake, you can experiment with risky strategies and learn from mistakes without fear of financial loss."
                      },
                      {
                        title: "No Addiction Risk",
                        text: "Research shows financial incentives are a major driver of gaming addiction. By removing money, we eliminate this risk factor."
                      },
                      {
                        title: "Pure Skill Focus",
                        text: "You can focus on what truly matters: improving your cricket knowledge, testing analytical skills, and competing for joy."
                      }
                    ].map((item, i) => (
                      <div key={i} className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-5">
                        <h4 className="font-bold text-white mb-2">{item.title}</h4>
                        <p className="text-slate-300 text-sm leading-relaxed">{item.text}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* How Our Platform Works - VISUAL FLOWCHART */}
      <div className="container py-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Calculator className="w-16 h-16 text-purple-600 mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">How Our Platform Works</h2>
            <p className="text-lg text-slate-600">
              A step-by-step visual guide to understanding the RIVOAURA fantasy cricket experience
            </p>
          </div>

          {/* Visual Flowchart */}
          <div className="relative">
            {/* Connecting Line - Desktop */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-200 via-green-200 via-purple-200 via-orange-200 via-red-200 to-yellow-200 -translate-x-1/2 z-0"></div>
            
            <div className="space-y-12 relative z-10">
              {[
                {
                  step: "1",
                  title: "Choose Your Match",
                  icon: <Trophy className="w-8 h-8 text-blue-600" />,
                  desc: "Browse our tournaments page to see all upcoming cricket matches. We support T20, ODI, and Test formats. Each match displays the teams, venue, start time, and number of active contests.",
                  color: "blue",
                  position: "left"
                },
                {
                  step: "2",
                  title: "Build Your Team",
                  icon: <Users className="w-8 h-8 text-green-600" />,
                  desc: "Select 11 players from the two competing teams within a 100-credit budget. Each player has a credit value based on their role and recent performance. You must follow team composition rules: 1-4 Wicketkeepers, 3-6 Batsmen, 1-4 All-Rounders, and 3-6 Bowlers.",
                  color: "green",
                  position: "right"
                },
                {
                  step: "3",
                  title: "Choose Captain & Vice-Captain",
                  icon: <Award className="w-8 h-8 text-purple-600" />,
                  desc: "Select one player as Captain (earns 2x points) and another as Vice-Captain (earns 1.5x points). This strategic decision can significantly impact your final score, so choose players you expect to perform well.",
                  color: "purple",
                  position: "left"
                },
                {
                  step: "4",
                  title: "Join Contests",
                  icon: <Target className="w-8 h-8 text-orange-600" />,
                  desc: "Enter your team into free contests. You can join multiple contests with the same team or create different teams for different strategies. All contests are 100% free with no entry fees.",
                  color: "orange",
                  position: "right"
                },
                {
                  step: "5",
                  title: "Track Live Scores",
                  icon: <LineChart className="w-8 h-8 text-red-600" />,
                  desc: "Once the match starts, watch your team's points accumulate in real-time. Our scoring system awards points for runs, wickets, catches, stumpings, and other cricket actions. You can see exactly how each player is contributing to your total.",
                  color: "red",
                  position: "left"
                },
                {
                  step: "6",
                  title: "Check Leaderboards",
                  icon: <Trophy className="w-8 h-8 text-yellow-600" />,
                  desc: "After the match ends, final scores are calculated and leaderboards are updated. Top performers earn digital badges, recognition, and bragging rights. Learn from top-ranked teams to improve your strategy for future matches.",
                  color: "yellow",
                  position: "right"
                }
              ].map((item, i) => (
                <div key={i} className={`flex items-center gap-8 ${item.position === 'right' ? 'lg:flex-row-reverse' : ''}`}>
                  {/* Step Card */}
                  <div className="flex-1 lg:max-w-[45%]">
                    <Card className={`border-2 border-${item.color}-200 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden group hover:-translate-y-1`}>
                      <div className={`h-2 bg-gradient-to-r from-${item.color}-400 to-${item.color}-600`}></div>
                      <CardContent className="p-8">
                        <div className="flex items-start gap-4 mb-4">
                          <div className={`w-14 h-14 rounded-xl bg-${item.color}-50 flex items-center justify-center group-hover:scale-110 transition-transform shadow-md`}>
                            {item.icon}
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                              <Badge className={`bg-${item.color}-100 text-${item.color}-700 border-${item.color}-300 font-bold text-lg px-3 py-1`}>
                                Step {item.step}
                              </Badge>
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900">{item.title}</h3>
                          </div>
                        </div>
                        <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Center Circle with Step Number */}
                  <div className="hidden lg:flex flex-shrink-0 w-20 h-20 items-center justify-center">
                    <div className={`w-20 h-20 rounded-full bg-gradient-to-br from-${item.color}-500 to-${item.color}-600 text-white flex items-center justify-center text-3xl font-black shadow-2xl border-4 border-white z-20 relative`}>
                      {item.step}
                      {/* Arrow pointing to card */}
                      <div className={`absolute ${item.position === 'left' ? 'right-full mr-2' : 'left-full ml-2'} top-1/2 -translate-y-1/2`}>
                        <div className={`w-8 h-0.5 bg-${item.color}-400`}></div>
                      </div>
                    </div>
                  </div>

                  {/* Spacer for alignment */}
                  <div className="hidden lg:block flex-1 lg:max-w-[45%]"></div>
                </div>
              ))}
            </div>

            {/* Bottom completion indicator */}
            <div className="mt-16 text-center">
              <div className="inline-flex items-center gap-3 bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-4 rounded-full shadow-xl">
                <CheckCircle2 className="w-6 h-6" />
                <span className="font-bold text-lg">You're Ready to Compete!</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scoring Transparency - NEW SECTION */}
      <div className="bg-gradient-to-br from-slate-50 to-purple-50/30 py-24 border-y border-slate-200">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <Calculator className="w-16 h-16 text-purple-600 mx-auto mb-6" />
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Scoring Transparency</h2>
              <p className="text-lg text-slate-600">
                Our point system is fully documented and publicly accessible—no hidden algorithms or secret calculations
              </p>
            </div>

            <Card className="border-2 border-purple-200 shadow-xl">
              <div className="h-3 bg-gradient-to-r from-purple-500 to-purple-600"></div>
              <CardContent className="p-10 space-y-6">
                <p className="text-lg text-slate-700 leading-relaxed">
                  Every run scored, wicket taken, catch held, and boundary hit has a clearly defined point value. Our scoring system 
                  is based on standard fantasy cricket rules used across the industry, with no proprietary modifications or hidden multipliers.
                </p>
                <div className="bg-purple-50 rounded-xl p-6 border border-purple-200">
                  <h4 className="font-bold text-slate-900 mb-4">Example Point Values (T20 Format):</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      "Run scored: +1 point",
                      "Boundary (4s): +1 bonus point",
                      "Six: +2 bonus points",
                      "Half-century: +8 bonus points",
                      "Century: +16 bonus points",
                      "Wicket taken: +25 points",
                      "Catch taken: +8 points",
                      "Stumping: +12 points",
                      "Run out (direct): +12 points",
                      "Maiden over: +12 points"
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-3 bg-white rounded-lg px-4 py-2">
                        <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                        <span className="text-slate-700 text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <p className="text-slate-700 leading-relaxed">
                  For complete point system details including ODI and Test formats, negative points for ducks and expensive bowling, 
                  and special bonuses, please visit our <a href="/how-to-play" className="text-purple-600 font-semibold hover:underline">How to Play</a> page.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="container py-24">
        <div className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 rounded-3xl p-12 md:p-20 text-white shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-96 h-96 bg-green-500/20 rounded-full blur-3xl"></div>
          
          <div className="relative z-10 max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold">Ready to Join Our Community?</h2>
            <p className="text-xl text-blue-100 leading-relaxed">
              Be part of India's most transparent and educational fantasy cricket platform. 
              Start your journey today—completely free, forever.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <a href="/register" className="inline-flex items-center justify-center px-10 py-5 bg-white text-slate-900 font-bold rounded-xl hover:bg-blue-50 transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1 text-lg">
                Join For Free →
              </a>
              <a href="/tournaments" className="inline-flex items-center justify-center px-10 py-5 bg-transparent border-2 border-white/30 text-white font-bold rounded-xl hover:bg-white/10 transition-all duration-300 text-lg">
                Explore Tournaments
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
