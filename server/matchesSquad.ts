import { initTRPC } from '@trpc/server';
import { z } from 'zod';
import { getMatchSquad } from './_core/cricketApi.js';

const t = initTRPC.create();

export const matchSquadRouter = t.router({
  // Get squad for a specific match
  getSquad: t.procedure
    .input(z.object({
      matchId: z.string(),
    }))
    .query(async ({ input }) => {
      try {
        const squad = await getMatchSquad(input.matchId);
        return squad;
      } catch (error) {
        throw new Error(`Failed to fetch squad: ${error instanceof Error ? error.message : 'Unknown error'}`);
      }
    }),
});
