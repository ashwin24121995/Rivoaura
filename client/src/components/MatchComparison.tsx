import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { X, Trophy, Users, Calendar, MapPin, TrendingUp, Star } from 'lucide-react';
import type { Match } from '@/lib/cricketApi';

interface MatchComparisonProps {
  matches: Match[];
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function MatchComparison({ matches, open, onOpenChange }: MatchComparisonProps) {
  const [selectedMatches, setSelectedMatches] = useState<[Match | null, Match | null]>([null, null]);

  const handleSelectMatch = (match: Match, slot: 0 | 1) => {
    const newSelection: [Match | null, Match | null] = [...selectedMatches];
    newSelection[slot] = match;
    setSelectedMatches(newSelection);
  };

  const clearSelection = () => {
    setSelectedMatches([null, null]);
  };

  const upcomingMatches = matches.filter(m => !m.matchStarted);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-2xl">
            <Trophy className="w-6 h-6 text-primary" />
            Compare Matches
          </DialogTitle>
          <p className="text-sm text-muted-foreground mt-2">
            Select two upcoming matches to compare team stats, player form, and fantasy predictions
          </p>
        </DialogHeader>

        {/* Match Selection */}
        {(!selectedMatches[0] || !selectedMatches[1]) && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-lg">
                {!selectedMatches[0] ? 'Select First Match' : 'Select Second Match'}
              </h3>
              {(selectedMatches[0] || selectedMatches[1]) && (
                <Button variant="outline" size="sm" onClick={clearSelection}>
                  Clear Selection
                </Button>
              )}
            </div>

            <div className="grid gap-3 max-h-96 overflow-y-auto">
              {upcomingMatches.map((match) => {
                const isDisabled = selectedMatches[0]?.id === match.id || selectedMatches[1]?.id === match.id;
                
                return (
                  <Card 
                    key={match.id} 
                    className={`cursor-pointer transition-all ${
                      isDisabled ? 'opacity-50 cursor-not-allowed' : 'hover:border-primary hover:shadow-md'
                    }`}
                    onClick={() => {
                      if (!isDisabled) {
                        handleSelectMatch(match, selectedMatches[0] ? 1 : 0);
                      }
                    }}
                  >
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4 flex-1">
                          <div className="flex items-center gap-2">
                            <img 
                              src={match.teamInfo[0]?.img || '/images/logo-rivoaura.png'} 
                              alt={match.teamInfo[0]?.name}
                              className="w-10 h-10 rounded-full"
                            />
                            <span className="font-semibold">{match.teamInfo[0]?.shortname}</span>
                          </div>
                          <span className="text-slate-500">vs</span>
                          <div className="flex items-center gap-2">
                            <img 
                              src={match.teamInfo[1]?.img || '/images/logo-rivoaura.png'} 
                              alt={match.teamInfo[1]?.name}
                              className="w-10 h-10 rounded-full"
                            />
                            <span className="font-semibold">{match.teamInfo[1]?.shortname}</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Badge variant="outline">{match.matchType.toUpperCase()}</Badge>
                          <span className="text-sm text-muted-foreground">
                            {new Date(match.dateTimeGMT).toLocaleDateString()}
                          </span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        )}

        {/* Comparison View */}
        {selectedMatches[0] && selectedMatches[1] && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-lg">Match Comparison</h3>
              <Button variant="outline" size="sm" onClick={clearSelection}>
                <X className="w-4 h-4 mr-2" />
                Change Selection
              </Button>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {/* Match 1 */}
              <ComparisonCard match={selectedMatches[0]} />
              
              {/* Match 2 */}
              <ComparisonCard match={selectedMatches[1]} />
            </div>

            {/* Comparison Stats */}
            <Card>
              <CardContent className="p-6">
                <h4 className="font-semibold text-lg mb-4 flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-primary" />
                  Fantasy Predictions
                </h4>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Expected Top Scorer</p>
                    <p className="font-semibold">Based on recent form and venue stats</p>
                    <p className="text-sm text-slate-600 mt-1">
                      Batsmen typically score 30-50% more points in {selectedMatches[0].matchType.toUpperCase()} format
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Expected Top Scorer</p>
                    <p className="font-semibold">Based on recent form and venue stats</p>
                    <p className="text-sm text-slate-600 mt-1">
                      Batsmen typically score 30-50% more points in {selectedMatches[1].matchType.toUpperCase()} format
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Recommendation */}
            <Card className="bg-primary/5 border-primary/20">
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <Star className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold mb-2">Recommendation</h4>
                    <p className="text-sm text-slate-700">
                      Both matches offer excellent fantasy opportunities. Consider creating teams for both to maximize your chances of winning. 
                      {selectedMatches[0].matchType === 't20' && ' T20 matches tend to have higher scoring rates and more unpredictable outcomes.'}
                      {selectedMatches[1].matchType === 't20' && ' T20 matches tend to have higher scoring rates and more unpredictable outcomes.'}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}

function ComparisonCard({ match }: { match: Match }) {
  return (
    <Card>
      <CardContent className="p-6 space-y-4">
        {/* Teams */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img 
                src={match.teamInfo[0]?.img || '/images/logo-rivoaura.png'} 
                alt={match.teamInfo[0]?.name}
                className="w-12 h-12 rounded-full border-2 border-slate-200"
              />
              <div>
                <p className="font-bold text-lg">{match.teamInfo[0]?.shortname}</p>
                <p className="text-xs text-muted-foreground">{match.teamInfo[0]?.name}</p>
              </div>
            </div>
          </div>
          
          <div className="text-center py-2">
            <Badge variant="outline" className="text-sm">VS</Badge>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img 
                src={match.teamInfo[1]?.img || '/images/logo-rivoaura.png'} 
                alt={match.teamInfo[1]?.name}
                className="w-12 h-12 rounded-full border-2 border-slate-200"
              />
              <div>
                <p className="font-bold text-lg">{match.teamInfo[1]?.shortname}</p>
                <p className="text-xs text-muted-foreground">{match.teamInfo[1]?.name}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Match Details */}
        <div className="space-y-2 pt-4 border-t">
          <div className="flex items-center gap-2 text-sm">
            <Trophy className="w-4 h-4 text-muted-foreground" />
            <span className="text-muted-foreground">Format:</span>
            <Badge variant="secondary">{match.matchType.toUpperCase()}</Badge>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Calendar className="w-4 h-4 text-muted-foreground" />
            <span className="text-muted-foreground">Date:</span>
            <span className="font-medium">
              {new Date(match.dateTimeGMT).toLocaleDateString('en-IN', { 
                dateStyle: 'medium' 
              })}
            </span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <MapPin className="w-4 h-4 text-muted-foreground" />
            <span className="text-muted-foreground">Venue:</span>
            <span className="font-medium text-xs">{match.venue}</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Users className="w-4 h-4 text-muted-foreground" />
            <span className="text-muted-foreground">Series:</span>
            <span className="font-medium text-xs">{match.name}</span>
          </div>
        </div>

        {/* Fantasy Stats */}
        <div className="pt-4 border-t">
          <p className="text-sm font-semibold mb-2">Fantasy Insights</p>
          <div className="space-y-1 text-sm text-slate-600">
            <p>• {match.matchType === 't20' ? 'High-scoring format' : match.matchType === 'odi' ? 'Balanced format' : 'Strategic format'}</p>
            <p>• All-rounders typically score 20-30% more points</p>
            <p>• Captain choice can double your points</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
