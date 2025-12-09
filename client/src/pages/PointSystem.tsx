import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Info } from "lucide-react";

export default function PointSystem() {
  const battingPoints = [
    { action: "Run Scored", t20: "+1", odi: "+1", test: "+1" },
    { action: "Boundary Bonus (4)", t20: "+1", odi: "+1", test: "+1" },
    { action: "Six Bonus (6)", t20: "+2", odi: "+2", test: "+2" },
    { action: "30 Run Bonus", t20: "+4", odi: "NA", test: "NA" },
    { action: "Half Century Bonus (50)", t20: "+8", odi: "+4", test: "+4" },
    { action: "Century Bonus (100)", t20: "+16", odi: "+8", test: "+8" },
    { action: "Dismissal for Duck", t20: "-2", odi: "-3", test: "-4" },
  ];

  const bowlingPoints = [
    { action: "Wicket (Excluding Run Out)", t20: "+25", odi: "+25", test: "+16" },
    { action: "Bonus (LBW / Bowled)", t20: "+8", odi: "+8", test: "+8" },
    { action: "3 Wicket Bonus", t20: "+4", odi: "NA", test: "NA" },
    { action: "4 Wicket Bonus", t20: "+8", odi: "+4", test: "+4" },
    { action: "5 Wicket Bonus", t20: "+16", odi: "+8", test: "+8" },
    { action: "Maiden Over", t20: "+12", odi: "+4", test: "NA" },
  ];

  const fieldingPoints = [
    { action: "Catch", t20: "+8", odi: "+8", test: "+8" },
    { action: "3 Catch Bonus", t20: "+4", odi: "+4", test: "NA" },
    { action: "Stumping", t20: "+12", odi: "+12", test: "+12" },
    { action: "Run Out (Direct Hit)", t20: "+12", odi: "+12", test: "+12" },
    { action: "Run Out (Not Direct)", t20: "+6", odi: "+6", test: "+6" },
  ];

  const economyRatePoints = [
    { rate: "Below 5.00", points: "+6" },
    { rate: "5.00 - 5.99", points: "+4" },
    { rate: "6.00 - 7.00", points: "+2" },
    { rate: "10.00 - 11.00", points: "-2" },
    { rate: "11.01 - 12.00", points: "-4" },
    { rate: "Above 12.00", points: "-6" },
  ];

  const strikeRatePoints = [
    { rate: "Above 170", points: "+6" },
    { rate: "150.01 - 170", points: "+4" },
    { rate: "130.00 - 150", points: "+2" },
    { rate: "60.00 - 70.00", points: "-2" },
    { rate: "50.00 - 59.99", points: "-4" },
    { rate: "Below 50.00", points: "-6" },
  ];

  return (
    <div className="container py-12 max-w-5xl">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">Fantasy Point System</h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          Understanding how your team scores is the key to winning. Our comprehensive scoring system rewards skill, consistency, and match-winning performances.
        </p>
      </div>

      <Tabs defaultValue="t20" className="w-full">
        <div className="flex justify-center mb-8">
          <TabsList className="grid w-full max-w-md grid-cols-3">
            <TabsTrigger value="t20">T20</TabsTrigger>
            <TabsTrigger value="odi">ODI</TabsTrigger>
            <TabsTrigger value="test">Test</TabsTrigger>
          </TabsList>
        </div>

        {/* T20 Content */}
        <TabsContent value="t20" className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Batting Table */}
            <Card>
              <CardHeader className="bg-slate-50 border-b">
                <CardTitle className="flex items-center gap-2">
                  Batting Points
                  <Badge variant="secondary" className="ml-auto">T20</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Action</TableHead>
                      <TableHead className="text-right">Points</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {battingPoints.map((item, i) => (
                      <TableRow key={i}>
                        <TableCell className="font-medium">{item.action}</TableCell>
                        <TableCell className="text-right font-bold text-primary">{item.t20}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>

            {/* Bowling Table */}
            <Card>
              <CardHeader className="bg-slate-50 border-b">
                <CardTitle className="flex items-center gap-2">
                  Bowling Points
                  <Badge variant="secondary" className="ml-auto">T20</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Action</TableHead>
                      <TableHead className="text-right">Points</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {bowlingPoints.map((item, i) => (
                      <TableRow key={i}>
                        <TableCell className="font-medium">{item.action}</TableCell>
                        <TableCell className="text-right font-bold text-primary">{item.t20}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
             {/* Fielding Table */}
             <Card>
              <CardHeader className="bg-slate-50 border-b">
                <CardTitle className="flex items-center gap-2">
                  Fielding Points
                  <Badge variant="secondary" className="ml-auto">All Formats</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Action</TableHead>
                      <TableHead className="text-right">Points</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {fieldingPoints.map((item, i) => (
                      <TableRow key={i}>
                        <TableCell className="font-medium">{item.action}</TableCell>
                        <TableCell className="text-right font-bold text-primary">{item.t20}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>

            {/* Other Important Points */}
            <Card>
              <CardHeader className="bg-slate-50 border-b">
                <CardTitle className="flex items-center gap-2">
                  Key Multipliers
                  <Info className="w-4 h-4 text-slate-400" />
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-6">
                <div className="flex items-center justify-between p-4 bg-yellow-50 rounded-lg border border-yellow-100">
                  <div>
                    <p className="font-bold text-yellow-900">Captain</p>
                    <p className="text-xs text-yellow-700">Gets 2x points</p>
                  </div>
                  <span className="text-2xl font-bold text-yellow-600">2x</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-slate-100 rounded-lg border border-slate-200">
                  <div>
                    <p className="font-bold text-slate-900">Vice-Captain</p>
                    <p className="text-xs text-slate-600">Gets 1.5x points</p>
                  </div>
                  <span className="text-2xl font-bold text-slate-600">1.5x</span>
                </div>
                <div className="text-sm text-slate-500 mt-4">
                  <p className="mb-2"><strong>Note:</strong></p>
                  <ul className="list-disc pl-4 space-y-1">
                    <li>Substitutes do not score points.</li>
                    <li>Points are updated in real-time but finalized after match completion.</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Economy & Strike Rate */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader className="bg-slate-50 border-b">
                <CardTitle>Economy Rate (Bowling)</CardTitle>
                <CardDescription>Applicable only if bowler bowls minimum 2 overs</CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Runs per Over</TableHead>
                      <TableHead className="text-right">Points</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {economyRatePoints.map((item, i) => (
                      <TableRow key={i}>
                        <TableCell className="font-medium">{item.rate}</TableCell>
                        <TableCell className={`text-right font-bold ${item.points.startsWith('-') ? 'text-red-500' : 'text-green-600'}`}>
                          {item.points}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="bg-slate-50 border-b">
                <CardTitle>Strike Rate (Batting)</CardTitle>
                <CardDescription>Applicable only if batsman scores minimum 10 runs</CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Runs per 100 Balls</TableHead>
                      <TableHead className="text-right">Points</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {strikeRatePoints.map((item, i) => (
                      <TableRow key={i}>
                        <TableCell className="font-medium">{item.rate}</TableCell>
                        <TableCell className={`text-right font-bold ${item.points.startsWith('-') ? 'text-red-500' : 'text-green-600'}`}>
                          {item.points}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* ODI Content (Simplified for brevity in this example, but structure allows expansion) */}
        <TabsContent value="odi">
          <div className="p-12 text-center bg-slate-50 rounded-lg border border-dashed border-slate-300">
            <h3 className="text-xl font-semibold text-slate-900 mb-2">ODI Scoring Rules</h3>
            <p className="text-slate-600">
              ODI scoring is similar to T20 but with adjusted bonuses for strike rates and economy rates. 
              Please refer to the T20 table for base points.
            </p>
          </div>
        </TabsContent>

        {/* Test Content */}
        <TabsContent value="test">
          <div className="p-12 text-center bg-slate-50 rounded-lg border border-dashed border-slate-300">
            <h3 className="text-xl font-semibold text-slate-900 mb-2">Test Match Scoring Rules</h3>
            <p className="text-slate-600">
              Test cricket rewards endurance and wickets. Strike rate points are not applicable in Test matches.
            </p>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
