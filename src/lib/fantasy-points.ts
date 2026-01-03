// Fantasy Point System Rules
const POINTS = {
  T20: {
    RUN: 1,
    BOUNDARY: 1,
    SIX: 2,
    HALF_CENTURY: 4,
    CENTURY: 8,
    DUCK: -2,
    WICKET: 25,
    LBW_BOWLED: 8,
    MAIDEN: 12,
    CATCH: 8,
    STUMPING: 12,
    RUN_OUT: 6,
  },
  ODI: {
    RUN: 1,
    BOUNDARY: 1,
    SIX: 2,
    HALF_CENTURY: 4,
    CENTURY: 8,
    DUCK: -3,
    WICKET: 25,
    LBW_BOWLED: 8,
    MAIDEN: 4,
    CATCH: 8,
    STUMPING: 12,
    RUN_OUT: 6,
  },
  TEST: {
    RUN: 1,
    BOUNDARY: 1,
    SIX: 2,
    HALF_CENTURY: 4,
    CENTURY: 8,
    DUCK: -4,
    WICKET: 16,
    LBW_BOWLED: 8,
    MAIDEN: 0, // Not applicable usually or low value
    CATCH: 8,
    STUMPING: 12,
    RUN_OUT: 6,
  }
};

export interface PlayerStats {
  runs: number;
  balls: number;
  fours: number;
  sixes: number;
  wickets: number;
  maidens: number;
  catches: number;
  stumpings: number;
  runOuts: number;
  dismissalType?: string; // 'bowled', 'lbw', etc.
}

export const calculateFantasyPoints = (stats: PlayerStats, matchType: 'T20' | 'ODI' | 'TEST' = 'T20'): number => {
  const rules = POINTS[matchType];
  let points = 0;

  // Batting Points
  points += stats.runs * rules.RUN;
  points += stats.fours * rules.BOUNDARY;
  points += stats.sixes * rules.SIX;

  if (stats.runs >= 100) points += rules.CENTURY;
  else if (stats.runs >= 50) points += rules.HALF_CENTURY;

  if (stats.runs === 0 && stats.dismissalType && stats.dismissalType !== 'not out') {
    points += rules.DUCK;
  }

  // Bowling Points
  points += stats.wickets * rules.WICKET;
  points += stats.maidens * rules.MAIDEN;
  
  // Fielding Points
  points += stats.catches * rules.CATCH;
  points += stats.stumpings * rules.STUMPING;
  points += stats.runOuts * rules.RUN_OUT;

  return points;
};
