import { useAuth } from "@/_core/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Shield, Users, Trophy, PlayCircle, CheckCircle2, TrendingUp, Target, Zap, Award, BarChart3, Clock } from "lucide-react";
import { Link } from "wouter";
import { getLoginUrl } from "@/const";

export default function Home() {
  const { user, isAuthenticated } = useAuth();

  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      {/* Hero Section */}
      <section className="relative w-full min-h-[700px] flex items-center justify-center overflow-hidden bg-slate-900 text-white">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/hero-home.png" 
            alt="Elite Squad Sports Stadium" 
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/90 to-slate-900/30"></div>
        </div>

        <div className="container relative z-10 text-center py-20">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 text-sm font-semibold backdrop-blur-md mb-8">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-yellow-500"></span>
            </span>
            100% FREE TO PLAY • NO REAL MONEY
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tight mb-6">
            Where <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">Strategy</span> <br />
            Meets <span className="text-white">Glory</span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-8">
            Welcome to <strong>Elite Squad Sports</strong>, India's most authentic free-to-play fantasy cricket platform. 
            Build your dream 11, analyze player form, and compete with thousands of managers in a 100% secure, skill-based environment.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 justify-center mb-12">
            {isAuthenticated ? (
              <Link href="/dashboard">
                <Button size="lg" className="bg-yellow-600 hover:bg-yellow-700 text-slate-900 font-bold px-10 h-14 text-lg rounded-full">
                  Go to Dashboard
                </Button>
              </Link>
            ) : (
              <Link href="/register">
                <Button size="lg" className="bg-yellow-600 hover:bg-yellow-700 text-slate-900 font-bold px-10 h-14 text-lg rounded-full">
                  Start Playing Free
                </Button>
              </Link>
            )}
            <Link href="/how-to-play">
              <Button variant="outline" size="lg" className="border-slate-600 text-white hover:bg-white/10 h-14 text-lg rounded-full px-8 bg-transparent">
                <PlayCircle className="w-5 h-5 mr-2" />
                How to Play
              </Button>
            </Link>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap items-center justify-center gap-6">
            <div className="flex items-center gap-2 text-slate-300">
              <CheckCircle2 className="w-5 h-5 text-green-400" />
              <span className="text-sm">18+ Only</span>
            </div>
            <div className="flex items-center gap-2 text-slate-300">
              <CheckCircle2 className="w-5 h-5 text-green-400" />
              <span className="text-sm">Fair Play Certified</span>
            </div>
            <div className="flex items-center gap-2 text-slate-300">
              <CheckCircle2 className="w-5 h-5 text-green-400" />
              <span className="text-sm">No Real Money</span>
            </div>
            <div className="flex items-center gap-2 text-slate-300">
              <CheckCircle2 className="w-5 h-5 text-green-400" />
              <span className="text-sm">Legally Compliant</span>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">How Elite Squad Sports Works</h2>
            <p className="text-lg text-slate-600">
              Fantasy cricket simplified into 4 strategic steps. No prior experience needed—just your love for the game.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 mx-auto text-white font-bold text-3xl">
                1
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Select a Match</h3>
              <p className="text-slate-600 leading-relaxed">
                Browse upcoming T20, ODI, and Test matches from international and domestic leagues. Choose your battleground.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-6 mx-auto text-white font-bold text-3xl">
                2
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Build Your Squad</h3>
              <p className="text-slate-600 leading-relaxed">
                Pick 11 players within a 100-credit budget. Balance batsmen, bowlers, all-rounders, and wicket-keepers strategically.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 mx-auto text-white font-bold text-3xl">
                3
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Choose Captain</h3>
              <p className="text-slate-600 leading-relaxed">
                Select a Captain (2x points) and Vice-Captain (1.5x points). This decision often separates winners from the rest.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-2xl flex items-center justify-center mb-6 mx-auto text-white font-bold text-3xl">
                4
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Compete & Win</h3>
              <p className="text-slate-600 leading-relaxed">
                Join contests, watch live scores update in real-time, and climb the leaderboard as your players perform.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-slate-50">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Why Choose Elite Squad Sports?</h2>
            <p className="text-lg text-slate-600">
              We've built the most transparent, skill-based fantasy cricket platform in India. Here's what makes us different.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl border border-slate-200">
              <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6">
                <Shield className="w-7 h-7 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">100% Free & Legal</h3>
              <p className="text-slate-600 leading-relaxed">
                No real money involved. Purely skill-based and fully compliant with Indian laws. We're backed by investors who believe in fantasy sports as education, not gambling.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-slate-200">
              <div className="w-14 h-14 bg-yellow-50 rounded-xl flex items-center justify-center mb-6">
                <Trophy className="w-7 h-7 text-yellow-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Compete for Glory</h3>
              <p className="text-slate-600 leading-relaxed">
                Climb weekly, monthly, and all-time leaderboards. Earn digital badges and bragging rights. No cash prizes—just pure competitive spirit.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-slate-200">
              <div className="w-14 h-14 bg-green-50 rounded-xl flex items-center justify-center mb-6">
                <Users className="w-7 h-7 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Thriving Community</h3>
              <p className="text-slate-600 leading-relaxed">
                Join "The Dugout" to discuss strategies, share tips, and debate team selections with thousands of passionate cricket fans across India.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-slate-200">
              <div className="w-14 h-14 bg-purple-50 rounded-xl flex items-center justify-center mb-6">
                <BarChart3 className="w-7 h-7 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Advanced Analytics</h3>
              <p className="text-slate-600 leading-relaxed">
                Access detailed player stats, form analysis, and head-to-head records. Make data-driven decisions like a pro manager.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-slate-200">
              <div className="w-14 h-14 bg-red-50 rounded-xl flex items-center justify-center mb-6">
                <Zap className="w-7 h-7 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Live Scoring</h3>
              <p className="text-slate-600 leading-relaxed">
                Watch your fantasy points update in real-time as the match progresses. Experience the thrill of live leaderboard shifts.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-slate-200">
              <div className="w-14 h-14 bg-orange-50 rounded-xl flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Educational Focus</h3>
              <p className="text-slate-600 leading-relaxed">
                Learn cricket strategy through our detailed guides, blog articles, and point system breakdowns. Improve your game knowledge.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">The Numbers Speak</h2>
            <p className="text-xl text-slate-300">
              Join thousands of cricket enthusiasts who trust Elite Squad Sports.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-yellow-400 mb-2">50K+</div>
              <div className="text-slate-300">Active Users</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-yellow-400 mb-2">200+</div>
              <div className="text-slate-300">Matches Covered</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-yellow-400 mb-2">1M+</div>
              <div className="text-slate-300">Teams Created</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-yellow-400 mb-2">100%</div>
              <div className="text-slate-300">Free Forever</div>
            </div>
          </div>
        </div>
      </section>

      {/* Transparency Section */}
      <section className="py-24 bg-white">
        <div className="container max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Complete Transparency</h2>
            <p className="text-lg text-slate-600">
              We operate with 100% openness. Here's everything you need to know.
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
              <h3 className="font-bold text-slate-900 mb-2">Who Owns Elite Squad Sports?</h3>
              <p className="text-slate-700">
                Elite Squad Sports is owned and operated by <strong>KAVERAMMA COFFEE CURING WORKS PRIVATE LIMITED</strong>, 
                a legally registered Indian private limited company based in Kodagu, Karnataka.
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
              <h3 className="font-bold text-slate-900 mb-2">How Do We Make Money?</h3>
              <p className="text-slate-700">
                We don't—at least not in the traditional sense. Elite Squad Sports is pre-funded by private investors who believe 
                in fantasy sports as an educational tool. We do not charge entry fees, sell user data, or run advertisements.
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
              <h3 className="font-bold text-slate-900 mb-2">Is It Legal?</h3>
              <p className="text-slate-700">
                Yes. Fantasy cricket is classified as a "Game of Skill" under Indian law. We operate in full compliance with the 
                Public Gambling Act, 1867, and state-specific regulations. However, we are NOT available in Andhra Pradesh, Assam, 
                Nagaland, Odisha, Sikkim, and Telangana due to government compliance requirements.
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
              <h3 className="font-bold text-slate-900 mb-2">What Do Winners Get?</h3>
              <p className="text-slate-700">
                Winners receive digital badges, leaderboard rankings, and community recognition. We do NOT offer cash prizes, 
                real money rewards, or any form of monetary compensation. This is purely for entertainment and skill development.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white">
        <div className="container text-center">
          <Award className="w-16 h-16 mx-auto mb-6 text-yellow-400" />
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Build Your Dream Team?</h2>
          <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
            Join thousands of cricket fans mastering the art of fantasy sports. No credit card required. No hidden fees. Just pure skill.
          </p>
          {isAuthenticated ? (
            <Link href="/tournaments">
              <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-slate-900 font-bold px-12 h-16 text-lg rounded-full">
                Browse Matches
              </Button>
            </Link>
          ) : (
            <Link href="/register">
              <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-slate-900 font-bold px-12 h-16 text-lg rounded-full">
                Create Free Account
              </Button>
            </Link>
          )}
        </div>
      </section>

      {/* Legal Disclaimer */}
      <section className="py-8 bg-slate-50 border-t border-slate-200">
        <div className="container">
          <div className="flex flex-wrap items-center justify-center gap-6 mb-4">
            <img src="/images/badge-18plus.png" alt="18+ Only" className="w-12 h-12" />
            <img src="/images/badge-fairplay.png" alt="Fair Play" className="w-12 h-12" />
            <img src="/images/badge-nomoney.png" alt="No Real Money" className="w-12 h-12" />
          </div>
          <p className="text-center text-sm text-slate-600 max-w-4xl mx-auto leading-relaxed">
            <strong>Legal Disclaimer:</strong> This platform is NOT available in Andhra Pradesh, Assam, Odisha, Telangana, Nagaland, 
            and Sikkim. Only users 18 years and older are permitted. This is a skill-based, free-to-play platform with no real money involved.
          </p>
        </div>
      </section>
    </div>
  );
}
