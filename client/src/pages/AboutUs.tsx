import { Card, CardContent } from "@/components/ui/card";
import { Users, Target, Shield, Heart, Trophy, Globe, Zap, Award } from "lucide-react";

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-slate-900 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/hero-real-stadium.jpg" 
            alt="Stadium Background" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 to-slate-900"></div>
        </div>
        <div className="container relative z-10 text-center">
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-secondary/20 border border-secondary/30 text-secondary text-sm font-medium backdrop-blur-sm">
            Established 2024
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
            Redefining <span className="text-secondary">Fantasy Cricket</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            We are RIVOAURA. A community-driven platform built by fans, for fans. 
            Our mission is to bring the thrill of the stadium directly to your screen through 
            skill, strategy, and fair play.
          </p>
        </div>
      </div>

      {/* Our Story Section */}
      <div className="container py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-slate-900 border-l-4 border-secondary pl-4">Our Origin Story</h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              It started with a simple observation: fantasy sports platforms were becoming too transactional. 
              The joy of the game was being overshadowed by complex algorithms and purely monetary incentives. 
              We wanted to bring the <strong>soul of cricket</strong> back to fantasy gaming.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              Founded in Mumbai by a group of cricket analysts and tech enthusiasts, RIVOAURA was 
              conceived as a sanctuary for true cricket lovers. We spent two years researching player statistics, 
              game mechanics, and user behavior to build a platform that rewards <strong>knowledge over luck</strong>.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              Today, we are proud to host a vibrant community of over 50,000 active members who compete daily 
              not just for points, but for the glory of being recognized as the best cricket strategists in the country.
            </p>
          </div>
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-tr from-secondary/20 to-primary/20 rounded-2xl transform rotate-2 group-hover:rotate-1 transition-transform duration-500"></div>
            <img 
              src="/images/community-real.jpg" 
              alt="Our Community" 
              className="relative rounded-xl shadow-2xl w-full object-cover h-[500px]"
            />
            <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-6 rounded-lg shadow-lg border border-white/50">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-500 font-medium uppercase tracking-wider">Community Growth</p>
                  <p className="text-3xl font-bold text-slate-900">50,000+</p>
                </div>
                <div className="h-12 w-12 bg-green-100 rounded-full flex items-center justify-center">
                  <Globe className="w-6 h-6 text-green-600" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Vision & Mission */}
      <div className="bg-slate-50 py-20 border-y border-slate-200">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Purpose</h2>
            <p className="text-slate-600 text-lg">
              We don't just run a platform; we are building the future of fan engagement.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-none shadow-lg bg-white overflow-hidden group hover:-translate-y-1 transition-transform duration-300">
              <div className="h-2 bg-blue-500 w-full"></div>
              <CardContent className="pt-8 pb-8 px-8">
                <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-100 transition-colors">
                  <Target className="w-7 h-7 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Our Mission</h3>
                <p className="text-slate-600 leading-relaxed">
                  To democratize fantasy sports by providing a free, fair, and skill-based platform where every cricket fan, regardless of their background, can compete on a level playing field.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg bg-white overflow-hidden group hover:-translate-y-1 transition-transform duration-300">
              <div className="h-2 bg-green-500 w-full"></div>
              <CardContent className="pt-8 pb-8 px-8">
                <div className="w-14 h-14 bg-green-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-green-100 transition-colors">
                  <Zap className="w-7 h-7 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Our Vision</h3>
                <p className="text-slate-600 leading-relaxed">
                  To become India's most trusted sports community, fostering a deeper understanding of the game through analytics, discussion, and healthy competition.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg bg-white overflow-hidden group hover:-translate-y-1 transition-transform duration-300">
              <div className="h-2 bg-purple-500 w-full"></div>
              <CardContent className="pt-8 pb-8 px-8">
                <div className="w-14 h-14 bg-purple-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-purple-100 transition-colors">
                  <Award className="w-7 h-7 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Our Promise</h3>
                <p className="text-slate-600 leading-relaxed">
                  We promise 100% transparency in our scoring, zero tolerance for bots or cheating, and a commitment to keeping the platform free for all users, forever.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Core Values */}
      <div className="container py-20">
        <h2 className="text-3xl font-bold text-slate-900 text-center mb-16">The Values That Drive Us</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { 
              icon: <Shield className="w-8 h-8 text-secondary" />, 
              title: "Integrity First", 
              desc: "Trust is our currency. We operate with complete openness in our algorithms and policies." 
            },
            { 
              icon: <Users className="w-8 h-8 text-secondary" />, 
              title: "Fan Centric", 
              desc: "Every feature we build starts with the question: 'Does this help the fan?'" 
            },
            { 
              icon: <Trophy className="w-8 h-8 text-secondary" />, 
              title: "Meritocracy", 
              desc: "Success on our platform is earned through skill and knowledge, never bought." 
            },
            { 
              icon: <Heart className="w-8 h-8 text-secondary" />, 
              title: "Passion", 
              desc: "We are a team of fans building for fans. Our love for cricket is in our DNA." 
            },
          ].map((value, i) => (
            <div key={i} className="flex flex-col items-center text-center group">
              <div className="w-20 h-20 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-sm">
                {value.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{value.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed max-w-xs">{value.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Leadership/Team Section */}
      <div className="bg-slate-900 py-20 text-white">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-4">Meet The Leadership</h2>
              <p className="text-slate-400 max-w-xl">
                The minds behind the platform. A diverse team of engineers, data scientists, and cricket experts working together.
              </p>
            </div>
            <a href="#" className="hidden md:inline-flex items-center text-secondary hover:text-white transition-colors font-medium mt-4 md:mt-0">
              View Full Team <span className="ml-2">→</span>
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Arjun Mehta", role: "Founder & CEO", bio: "Ex-Sports Analyst with 10+ years in cricket data modeling." },
              { name: "Sarah Jenkins", role: "Head of Product", bio: "Product visionary focused on building intuitive user experiences." },
              { name: "Vikram Singh", role: "Chief Technology Officer", bio: "Tech veteran ensuring our platform remains fast, secure, and scalable." },
            ].map((member, i) => (
              <div key={i} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-secondary/50 transition-colors">
                <div className="w-16 h-16 rounded-full bg-slate-700 mb-4 flex items-center justify-center text-xl font-bold text-slate-300">
                  {member.name.charAt(0)}
                </div>
                <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                <p className="text-secondary text-sm font-medium mb-4">{member.role}</p>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="container py-20 text-center">
        <div className="bg-gradient-to-r from-primary to-blue-700 rounded-3xl p-12 md:p-20 text-white shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 -mt-10 -mr-10 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to be part of our story?</h2>
            <p className="text-blue-100 text-lg mb-8">
              Join thousands of cricket fans who have found their home at RIVOAURA. 
              Start your journey today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/register" className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary font-bold rounded-lg hover:bg-blue-50 transition-colors shadow-lg">
                Join For Free
              </a>
              <a href="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-white/30 text-white font-bold rounded-lg hover:bg-white/10 transition-colors">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
