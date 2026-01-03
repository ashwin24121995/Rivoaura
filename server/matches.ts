/**
 * tRPC Matches Router
 * Provides secure backend API for cricket match data
 */

import { z } from 'zod';
import { initTRPC } from '@trpc/server';
import SuperJSON from 'superjson';
import * as cricketApi from '@/server/cricketApi';

const t = initTRPC.create({
  transformer: SuperJSON,
});

export const matchesRouter = t.router({
  /**
   * Get all current matches
   */
  getCurrent: t.procedure.query(async () => {
    try {
      const matches = await cricketApi.getCurrentMatches();
      return { success: true, data: matches };
    } catch (error) {
      console.error('Error in getCurrent:', error);
      return { success: false, error: 'Failed to fetch matches', data: [] };
    }
  }),

  /**
   * Get upcoming matches
   */
  getUpcoming: t.procedure.query(async () => {
    try {
      const matches = await cricketApi.getUpcomingMatches();
      return { success: true, data: matches };
    } catch (error) {
      console.error('Error in getUpcoming:', error);
      return { success: false, error: 'Failed to fetch upcoming matches', data: [] };
    }
  }),

  /**
   * Get live matches
   */
  getLive: t.procedure.query(async () => {
    try {
      const matches = await cricketApi.getLiveMatches();
      return { success: true, data: matches };
    } catch (error) {
      console.error('Error in getLive:', error);
      return { success: false, error: 'Failed to fetch live matches', data: [] };
    }
  }),

  /**
   * Get completed matches
   */
  getCompleted: t.procedure.query(async () => {
    try {
      const matches = await cricketApi.getCompletedMatches();
      return { success: true, data: matches };
    } catch (error) {
      console.error('Error in getCompleted:', error);
      return { success: false, error: 'Failed to fetch completed matches', data: [] };
    }
  }),

  /**
   * Get match details by ID
   */
  getById: t.procedure
    .input(z.object({ matchId: z.string() }))
    .query(async ({ input }) => {
      try {
        const match = await cricketApi.getMatchInfo(input.matchId);
        if (!match) {
          return { success: false, error: 'Match not found', data: null };
        }
        return { success: true, data: match };
      } catch (error) {
        console.error(`Error in getById for ${input.matchId}:`, error);
        return { success: false, error: 'Failed to fetch match details', data: null };
      }
    }),

  /**
   * Get match squad (players)
   */
  getSquad: t.procedure
    .input(z.object({ matchId: z.string() }))
    .query(async ({ input }) => {
      try {
        const squad = await cricketApi.getMatchSquad(input.matchId);
        if (!squad) {
          return { success: false, error: 'Squad not found', data: null };
        }
        return { success: true, data: squad };
      } catch (error) {
        console.error(`Error in getSquad for ${input.matchId}:`, error);
        return { success: false, error: 'Failed to fetch squad', data: null };
      }
    }),

  /**
   * Get live score for a match
   */
  getLiveScore: t.procedure
    .input(z.object({ matchId: z.string() }))
    .query(async ({ input }) => {
      try {
        const score = await cricketApi.getLiveScore(input.matchId);
        if (!score) {
          return { success: false, error: 'Score not found', data: null };
        }
        return { success: true, data: score };
      } catch (error) {
        console.error(`Error in getLiveScore for ${input.matchId}:`, error);
        return { success: false, error: 'Failed to fetch live score', data: null };
      }
    }),
});
