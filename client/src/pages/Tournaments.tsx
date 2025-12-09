import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Trophy, Clock, Users, Calendar, ChevronRight } from "lucide-react";

export default function Tournaments() {
  const tournaments = [
    {
      id: 1,
      title: "Mega Cricket Championship",
      status: "Live",
      type: "T20",
      entry: "Free",
      prizePool: "10,000 Points",
      participants: "12,450/15,000",
      timeLeft: "2h 15m",
      image: "/images/hero-real-stadium.jpg"
    },
    {
      id: 2,
      title: "Weekend Warriors League",
      status: "Upcoming",
      type: "ODI",
      entry: "Free",
      prizePool: "5,000 Points",
      participants: "850/2,000",
      timeLeft: "Starts Tomorrow",
      image: "/images/hero-real-stadium.jpg"
    },
    {
      id: 3,
      title: "Practice Match: IND vs AUS",
      status: "Live",
      type: "Test",
      entry: "Practice",
      prizePool: "Bragging Rights",
      participants: "Unlimited",
      timeLeft: "Day 3",
      image: "/images/hero-real-stadium.jpg"
    }
  ];

  return (
    <div className="container py-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Tournaments</h1>
          <p className="text-slate-600">Join India's biggest fantasy cricket contests.</p>
        </div>
        <Button className="bg-secondary hover:bg-secondary/90 text-white">
          Create Private League
        </Button>
      </div>

      <Tabs defaultValue="all" className="w-full">
        <TabsList className="mb-8 bg-slate-100 p-1">
          <TabsTrigger value="all" className="data-[state=active]:bg-white data-[state=active]:shadow-sm">All Contests</TabsTrigger>
          <TabsTrigger value="live" className="data-[state=active]:bg-white data-[state=active]:shadow-sm">Live Now</TabsTrigger>
          <TabsTrigger value="upcoming" className="data-[state=active]:bg-white data-[state=active]:shadow-sm">Upcoming</TabsTrigger>
          <TabsTrigger value="practice" className="data-[state=active]:bg-white data-[state=active]:shadow-sm">Practice</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tournaments.map((tournament) => (
              <Card key={tournament.id} className="overflow-hidden border-slate-200 hover:shadow-md transition-shadow group">
                <div className="h-40 overflow-hidden relative">
                  <img 
                    src={tournament.image} 
                    alt={tournament.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-3 right-3">
                    <Badge variant={tournament.status === "Live" ? "destructive" : "secondary"} className="font-bold shadow-sm">
                      {tournament.status === "Live" && <span className="w-2 h-2 bg-white rounded-full mr-1 animate-pulse"></span>}
                      {tournament.status}
                    </Badge>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                    <span className="text-white text-xs font-bold px-2 py-1 bg-primary/80 rounded backdrop-blur-sm">
                      {tournament.type}
                    </span>
                  </div>
                </div>
                
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg leading-tight">{tournament.title}</CardTitle>
                </CardHeader>
                
                <CardContent className="pb-4">
                  <div className="grid grid-cols-2 gap-4 text-sm mb-4">
                    <div className="flex items-center gap-2 text-slate-600">
                      <Trophy className="w-4 h-4 text-amber-500" />
                      <span>{tournament.prizePool}</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-600">
                      <Users className="w-4 h-4 text-blue-500" />
                      <span>{tournament.participants}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-500 bg-slate-50 p-2 rounded">
                    <Clock className="w-3 h-3" />
                    <span>Time Remaining: <span className="font-medium text-slate-700">{tournament.timeLeft}</span></span>
                  </div>
                </CardContent>

                <CardFooter className="pt-0">
                  <Button className="w-full bg-primary hover:bg-primary/90 text-white group-hover:translate-x-1 transition-transform duration-300">
                    Join Contest <ChevronRight className="w-4 h-4 ml-1" />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
        
        {/* Placeholder content for other tabs */}
        <TabsContent value="live">
          <div className="p-12 text-center text-slate-500 bg-slate-50 rounded-lg border border-dashed border-slate-300">
            <p>Filter active. Showing live tournaments only.</p>
          </div>
        </TabsContent>
        <TabsContent value="upcoming">
           <div className="p-12 text-center text-slate-500 bg-slate-50 rounded-lg border border-dashed border-slate-300">
            <p>Filter active. Showing upcoming tournaments only.</p>
          </div>
        </TabsContent>
        <TabsContent value="practice">
           <div className="p-12 text-center text-slate-500 bg-slate-50 rounded-lg border border-dashed border-slate-300">
            <p>Filter active. Showing practice matches only.</p>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
