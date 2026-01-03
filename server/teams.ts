import { initTRPC } from '@trpc/server';
import { z } from 'zod';
import { getDb } from '@/server/db';
import { userTeams, userTeamPlayers } from '../drizzle/schema';
import { eq, and } from 'drizzle-orm';

const t = initTRPC.create();

export const teamsRouter = t.router({
  // Create a new team
  create: t.procedure
    .input(z.object({
      matchId: z.string(),
      teamName: z.string().min(1).max(100),
      playerIds: z.array(z.string()).length(11),
      captainId: z.string(),
      viceCaptainId: z.string(),
      userId: z.number().optional(), // Will come from auth context later
    }))
    .mutation(async ({ input }) => {
      const db = await getDb();
      const userId = input.userId || 1; // Placeholder until auth is integrated

      // Validate captain and vice-captain are in the team
      if (!input.playerIds.includes(input.captainId)) {
        throw new Error('Captain must be in the team');
      }
      if (!input.playerIds.includes(input.viceCaptainId)) {
        throw new Error('Vice-captain must be in the team');
      }
      if (input.captainId === input.viceCaptainId) {
        throw new Error('Captain and vice-captain must be different players');
      }

      // Create team
      const [team] = await db.insert(userTeams).values({
        userId,
        matchId: parseInt(input.matchId),
        teamName: input.teamName,
        captainId: parseInt(input.captainId),
        viceCaptainId: parseInt(input.viceCaptainId),
        totalPoints: 0,
      }).$returningId();

      // Add players to team
      const playerEntries = input.playerIds.map((playerId: string) => ({
        teamId: team.id,
        playerId: parseInt(playerId),
      }));

      await db.insert(userTeamPlayers).values(playerEntries);

      return {
        success: true,
        teamId: team.id,
        message: 'Team created successfully',
      };
    }),

  // Get user's teams for a specific match
  getByMatch: t.procedure
    .input(z.object({
      matchId: z.string(),
      userId: z.number().optional(),
    }))
    .query(async ({ input }) => {
      const db = await getDb();
      const userId = input.userId || 1; // Placeholder

      const teams = await db
        .select()
        .from(userTeams)
        .where(
          and(
            eq(userTeams.userId, userId),
            eq(userTeams.matchId, parseInt(input.matchId))
          )
        );

      return teams;
    }),

  // Get all user's teams
  getAll: t.procedure
    .input(z.object({
      userId: z.number().optional(),
    }))
    .query(async ({ input }) => {
      const db = await getDb();
      const userId = input.userId || 1; // Placeholder

      const teams = await db
        .select()
        .from(userTeams)
        .where(eq(userTeams.userId, userId));

      return teams;
    }),
});
