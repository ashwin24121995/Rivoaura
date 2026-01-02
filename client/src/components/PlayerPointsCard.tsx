import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Trophy, TrendingUp, Target } from 'lucide-react';
import type { PlayerFantasyPoints } from '@/lib/cricketApi';

interface PlayerPointsCardProps {
  player: PlayerFantasyPoints;
  rank: number;
}

export function PlayerPointsCard({ player, rank }: PlayerPointsCardProps) {
  const getRankColor = (rank: number) => {
    if (rank === 1) return 'bg-yellow-500 text-white';
    if (rank === 2) return 'bg-gray-400 text-white';
    if (rank === 3) return 'bg-amber-700 text-white';
    return 'bg-slate-700 text-white';
  };

  const getRankIcon = (rank: number) => {
    if (rank <= 3) return <Trophy className="w-4 h-4" />;
    return null;
  };

  return (
    <Card className="p-4 hover:shadow-lg transition-shadow">
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-3">
          <Badge className={`${getRankColor(rank)} flex items-center gap-1 px-2 py-1`}>
            {getRankIcon(rank)}
            #{rank}
          </Badge>
          <div>
            <h3 className="font-semibold text-lg">{player.name}</h3>
            <p className="text-sm text-muted-foreground">ID: {player.playerId}</p>
          </div>
        </div>
        <div className="text-right">
          <div className="text-2xl font-bold text-primary">{player.points}</div>
          <p className="text-xs text-muted-foreground">Total Points</p>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-3 mt-4">
        {/* Batting Stats */}
        <div className="bg-blue-50 dark:bg-blue-950/30 rounded-lg p-3">
          <div className="flex items-center gap-2 mb-2">
            <Target className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            <span className="text-xs font-medium text-blue-900 dark:text-blue-100">Batting</span>
          </div>
          <div className="space-y-1">
            <div className="flex justify-between text-xs">
              <span className="text-muted-foreground">Runs:</span>
              <span className="font-medium">{player.batting.runs}</span>
            </div>
            <div className="flex justify-between text-xs">
              <span className="text-muted-foreground">4s/6s:</span>
              <span className="font-medium">{player.batting.fours}/{player.batting.sixes}</span>
            </div>
            <div className="flex justify-between text-xs">
              <span className="text-muted-foreground">SR:</span>
              <span className="font-medium">{player.batting.strikeRate.toFixed(1)}</span>
            </div>
          </div>
        </div>

        {/* Bowling Stats */}
        <div className="bg-green-50 dark:bg-green-950/30 rounded-lg p-3">
          <div className="flex items-center gap-2 mb-2">
            <TrendingUp className="w-4 h-4 text-green-600 dark:text-green-400" />
            <span className="text-xs font-medium text-green-900 dark:text-green-100">Bowling</span>
          </div>
          <div className="space-y-1">
            <div className="flex justify-between text-xs">
              <span className="text-muted-foreground">Wickets:</span>
              <span className="font-medium">{player.bowling.wickets}</span>
            </div>
            <div className="flex justify-between text-xs">
              <span className="text-muted-foreground">Economy:</span>
              <span className="font-medium">{player.bowling.economy.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-xs">
              <span className="text-muted-foreground">Maidens:</span>
              <span className="font-medium">{player.bowling.maidens}</span>
            </div>
          </div>
        </div>

        {/* Fielding Stats */}
        <div className="bg-purple-50 dark:bg-purple-950/30 rounded-lg p-3">
          <div className="flex items-center gap-2 mb-2">
            <Trophy className="w-4 h-4 text-purple-600 dark:text-purple-400" />
            <span className="text-xs font-medium text-purple-900 dark:text-purple-100">Fielding</span>
          </div>
          <div className="space-y-1">
            <div className="flex justify-between text-xs">
              <span className="text-muted-foreground">Catches:</span>
              <span className="font-medium">{player.fielding.catches}</span>
            </div>
            <div className="flex justify-between text-xs">
              <span className="text-muted-foreground">Run Outs:</span>
              <span className="font-medium">{player.fielding.runOuts}</span>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}
