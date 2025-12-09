import { Card, CardContent } from "@/components/ui/card";
import { Users, Target, Shield, Heart } from "lucide-react";

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-slate-900 text-white py-20">
        <div className="container text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Story</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Born from a passion for cricket, built for the fans who live and breathe the game.
          </p>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-slate-900">Our Mission</h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              At Elite Squad Sports, our mission is to provide the most authentic, secure, and engaging fantasy cricket experience for Indian fans. We believe that fantasy sports is not just a game of luck, but a test of skill, strategy, and cricket knowledge.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              We strive to create a community where every fan has a voice, every match matters, and fair play is the ultimate rule.
            </p>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-secondary/10 rounded-2xl transform rotate-3"></div>
            <img 
              src="/images/community-real.jpg" 
              alt="Team working together" 
              className="relative rounded-xl shadow-lg w-full object-cover h-80"
            />
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: <Shield className="w-8 h-8 text-primary" />, title: "Integrity", desc: "We operate with 100% transparency and adhere to strict fair play policies." },
              { icon: <Users className="w-8 h-8 text-primary" />, title: "Community", desc: "Our players are at the heart of everything we do. We listen, learn, and grow together." },
              { icon: <Target className="w-8 h-8 text-primary" />, title: "Excellence", desc: "We are committed to providing a world-class, bug-free, and smooth gaming experience." },
              { icon: <Heart className="w-8 h-8 text-primary" />, title: "Passion", desc: "We are cricket fans first. Our love for the game drives our innovation." },
            ].map((value, i) => (
              <Card key={i} className="border-slate-200 shadow-sm hover:shadow-md transition-shadow text-center">
                <CardContent className="pt-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/5 mb-4">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{value.title}</h3>
                  <p className="text-slate-600 text-sm">{value.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Team Section (Optional/Placeholder) */}
        <div className="bg-slate-50 rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Join The Squad</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-8">
            We are always looking for passionate individuals to join our team. If you love cricket and technology, we'd love to hear from you.
          </p>
          <a href="mailto:careers@elitesquadsports.com" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary/90">
            View Openings
          </a>
        </div>
      </div>
    </div>
  );
}
