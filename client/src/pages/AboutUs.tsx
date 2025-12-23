import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Target, Shield, Heart, Trophy, Globe, Zap, Award, Building2, Scale, CheckCircle2, BookOpen, TrendingUp, Sparkles } from "lucide-react";

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

      {/* Who We Are Section */}
      <div className="container py-24">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Who We Are</h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-secondary to-blue-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="prose prose-lg max-w-none text-slate-700 space-y-6 leading-relaxed">
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
                      "Zero real money transactions"
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
                desc: "There is no real money involved at any stage. You cannot deposit money, you cannot win money, and you cannot lose money. This eliminates the psychological pressure, addiction risks, and financial stress associated with real-money gaming.",
                gradient: "from-blue-500 to-blue-600"
              },
              {
                icon: <BookOpen className="w-8 h-8 text-purple-600" />,
                title: "Educational Focus",
                desc: "Every feature is designed to teach. Our detailed point system explanations, player statistics, match analysis articles, and strategy guides help users understand cricket at a deeper level. We provide context for every decision.",
                gradient: "from-purple-500 to-purple-600"
              },
              {
                icon: <CheckCircle2 className="w-8 h-8 text-orange-600" />,
                title: "Complete Transparency",
                desc: "We openly share our ownership details, funding model, legal compliance status, and operational practices. There are no secret algorithms, hidden terms, or unclear policies. Every rule and calculation is documented and accessible.",
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

      {/* Business Model Transparency */}
      <div className="bg-gradient-to-br from-blue-50 to-slate-50 py-24 border-y border-slate-200">
        <div className="container">
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
                    We are backed by private investors who believe in the educational and social value of fantasy sports.
                  </p>
                  
                  <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                    <p className="font-semibold text-slate-900 mb-4">We do NOT generate revenue through:</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {[
                        "Entry fees or subscription charges",
                        "Selling user data to third parties",
                        "Displaying advertisements",
                        "In-app purchases or premium features"
                      ].map((item, i) => (
                        <div key={i} className="flex items-center gap-3">
                          <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                            <span className="text-red-600 text-sm font-bold">✕</span>
                          </div>
                          <span className="text-slate-700">{item}</span>
                        </div>
                      ))}
                    </div>
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
                    monetization and gambling-like mechanics.
                  </p>
                  
                  <div className="space-y-3">
                    <p className="font-semibold text-slate-900">By funding a completely free platform, they aim to:</p>
                    {[
                      "Demonstrate that fantasy sports can be educational and socially beneficial",
                      "Build a large, engaged user base that values skill over money",
                      "Create a positive brand associated with integrity and transparency",
                      "Potentially explore ethical monetization models in the future (with full user consent)"
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                        <span className="text-slate-700">{item}</span>
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
                    <p className="text-slate-700 leading-relaxed">
                      We are committed to ensuring that anyone can create teams, join contests, and compete without paying. 
                      However, in the future, we may introduce optional premium features (such as advanced analytics tools or 
                      exclusive content) that users can choose to purchase—but the core fantasy experience will never be paywalled.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
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
