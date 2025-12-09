import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { Trophy, Users, ShieldCheck, MousePointerClick, CheckCircle2 } from "lucide-react";

export default function HowToPlay() {
  const steps = [
    {
      id: 1,
      title: "Select A Match",
      description: "Choose an upcoming match from the lobby. We cover all major international and domestic leagues.",
      icon: <MousePointerClick className="w-8 h-8 text-primary" />,
      image: "/images/hero-real-stadium.jpg" // Placeholder for step visual
    },
    {
      id: 2,
      title: "Create Your Team",
      description: "Use your cricket knowledge to pick 11 players within a credit limit of 100. Balance is key!",
      icon: <Users className="w-8 h-8 text-primary" />,
      image: "/images/app-mockup-real.jpg" // Placeholder for step visual
    },
    {
      id: 3,
      title: "Choose Captain & Vice-Captain",
      description: "Your Captain gets 2x points and Vice-Captain gets 1.5x points. Choose wisely as this can decide the winner.",
      icon: <ShieldCheck className="w-8 h-8 text-primary" />,
      image: "/images/hero-real-stadium.jpg" // Placeholder for step visual
    },
    {
      id: 4,
      title: "Join Contests",
      description: "Enter various contests - from free practice leagues to mega tournaments. Compete with thousands of fans.",
      icon: <Trophy className="w-8 h-8 text-primary" />,
      image: "/images/tournament-trophy.jpg" // Placeholder for step visual
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Header */}
      <div className="bg-primary text-white py-16">
        <div className="container text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">How To Play Fantasy Cricket</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Master the game in 4 simple steps. Turn your cricket knowledge into victory.
          </p>
        </div>
      </div>

      {/* Steps Section */}
      <div className="container py-16">
        <div className="space-y-24">
          {steps.map((step, index) => (
            <div key={step.id} className={`flex flex-col md:flex-row gap-12 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
              
              {/* Text Content */}
              <div className="flex-1 space-y-6">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary font-bold text-xl mb-4">
                  {step.id}
                </div>
                <h2 className="text-3xl font-bold text-slate-900">{step.title}</h2>
                <p className="text-lg text-slate-600 leading-relaxed">
                  {step.description}
                </p>
                
                {step.id === 2 && (
                  <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm mt-6">
                    <h4 className="font-semibold mb-3 text-slate-900">Team Composition Rules:</h4>
                    <ul className="space-y-2 text-sm text-slate-600">
                      <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" /> Wicket Keepers: 1-4</li>
                      <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" /> Batsmen: 3-6</li>
                      <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" /> All Rounders: 1-4</li>
                      <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" /> Bowlers: 3-6</li>
                      <li className="flex items-center gap-2 mt-2 pt-2 border-t border-slate-100 font-medium text-slate-800">Max 7 players from one team</li>
                    </ul>
                  </div>
                )}
              </div>

              {/* Visual Content */}
              <div className="flex-1">
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
                  <div className="relative bg-white rounded-2xl overflow-hidden shadow-xl border border-slate-100 aspect-video flex items-center justify-center">
                    <img 
                      src={step.image} 
                      alt={step.title} 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/10 flex items-center justify-center">
                      <div className="bg-white/90 p-4 rounded-full shadow-lg backdrop-blur-sm">
                        {step.icon}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-white py-16 border-t border-slate-200">
        <div className="container text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Ready to Create Your Team?</h2>
          <p className="text-slate-600 mb-8 max-w-xl mx-auto">
            Join millions of cricket fans on Elite Squad Sports. It's free, fun, and 100% secure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/register">
              <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white font-bold px-8 h-12">
                Play Now
              </Button>
            </Link>
            <Link href="/point-system">
              <Button variant="outline" size="lg" className="h-12">
                View Point System
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
